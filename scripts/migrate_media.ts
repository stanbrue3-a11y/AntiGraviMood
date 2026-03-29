import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { Buffer } from 'buffer';

// CRITICAL: dotenv MUST load before any logic.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; // Service role for Storage admin
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !GOOGLE_KEY) {
    console.error('❌ Missing environment variables (Supabase URL/Key or Google Key).');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const BUCKET_NAME = 'place-media';
const REPORT_PATH = path.join(__dirname, '../../temp_screenshots/shadow_sync_report.json');
const MAPPING_PATH = path.join(__dirname, '../../temp_screenshots/media_migration_map.json');

/**
 * 📸 MEDIA MIGRATION ENGINE
 * Google Places API -> Supabase Storage (CDN)
 */

async function migrateMedia() {
    console.log('🚀 MIGRATION DES MÉDIAS : Google Maps → Supabase Storage');
    console.log('='.repeat(60));

    if (!fs.existsSync(REPORT_PATH)) {
        console.error('❌ Shadow report not found. Run sync_to_supabase.ts first.');
        return;
    }

    const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
    const mapping: Record<string, string> = fs.existsSync(MAPPING_PATH) 
        ? JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8')) 
        : {};

    const args = process.argv.slice(2);
    // Support both --slug= and --slugs= (with comma-separated values)
    const slugArg = args.find(arg => arg.startsWith('--slug=') || arg.startsWith('--slugs='))?.split('=')[1];

    const targetSlugs = slugArg ? slugArg.split(',').map(s => s.trim()) : [];

    const placesToMigrate = targetSlugs.length > 0
        ? report.filter((p: any) => targetSlugs.includes(p.slug))
        : report;

    if (targetSlugs.length > 0) {
        console.log(`🎯 MODE CIBLÉ : ${targetSlugs.length} slug(s) demandé(s) → ${placesToMigrate.length} trouvé(s).`);
        if (placesToMigrate.length === 0) {
            console.log(`⚠️  Aucun lieu trouvé pour les slugs: ${targetSlugs.join(', ')}`);
            console.log(`   Vérifiez que sync_to_supabase.ts a été lancé avant.`);
            return;
        }
    } else {
        console.log(`📍 MODE GLOBAL : ${placesToMigrate.length} lieux à traiter.`);
    }

    for (const place of placesToMigrate) {
        const { id, media } = place;
        if (!media) continue;

        console.log(`\n🔍 Traitement : ${place.name} (${id})`);
        
        // 1. Migrate Hero
        const isGoogleHero = media.hero_image && (media.hero_image.includes('google') || media.hero_image.startsWith('AU_'));
        if (isGoogleHero) {
            const newHeroUrl = await uploadToSupabase(media.hero_image, `${id}/hero.jpg`);
            if (newHeroUrl) {
                mapping[media.hero_image] = newHeroUrl;
                media.hero_image = newHeroUrl;
                console.log(`   ✅ Hero migré : ${newHeroUrl}`);
            }
        }

        // 2. Migrate Gallery
        if (media.google_photos && media.google_photos.length > 0) {
            for (let i = 0; i < media.google_photos.length; i++) {
                const galleryUrl = media.google_photos[i];
                const isGoogleGallery = galleryUrl && (galleryUrl.includes('google') || galleryUrl.startsWith('AU_'));
                if (isGoogleGallery) {
                    const newUrl = await uploadToSupabase(galleryUrl, `${id}/gallery_${i}.jpg`);
                    if (newUrl) {
                        mapping[galleryUrl] = newUrl;
                        media.google_photos[i] = newUrl;
                        console.log(`   ✅ Gallery[${i}] migré : ${newUrl}`);
                    }
                }
            }
        }
    }

    // Sauvegardes
    fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2));
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

    console.log('\n' + '='.repeat(60));
    console.log('✨ MIGRATION MEDIA TERMINÉE');
    console.log(`   Mapping sauvegardé : ${MAPPING_PATH}`);
    console.log(`   Rapport mis à jour : ${REPORT_PATH}`);
    console.log('='.repeat(60));
}

async function uploadToSupabase(googleUrl: string, storagePath: string): Promise<string | null> {
    try {
        let finalUrl = googleUrl;
        
        // If it's a raw photo_reference, build the URL
        if (finalUrl.startsWith('AU_') && !finalUrl.includes('http')) {
            finalUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${finalUrl}&key=${GOOGLE_KEY}`;
        } else {
            // Remplacer l'API Key par la vraie clé (si c'est du template literal local)
            finalUrl = finalUrl.replace('${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}', GOOGLE_KEY!)
                               .replace('${process.env.GOOGLE_MAPS_API_KEY}', GOOGLE_KEY!)
                               .replace('${EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}', GOOGLE_KEY!);
        }

        // 1. Download from Google
        const response = await axios.get(finalUrl, { responseType: 'arraybuffer', timeout: 10000 });
        const buffer = Buffer.from(response.data, 'binary');

        // 2. Upload to Supabase
        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(storagePath, buffer, {
                contentType: 'image/jpeg',
                upsert: true
            });

        if (error) {
            console.error(`   ❌ Supabase Upload Error (${storagePath}):`, error.message);
            return null;
        }

        // 3. Construct Public URL
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(storagePath);

        return publicUrl;
    } catch (e: any) {
        console.error(`   ❌ Download Error (${storagePath}):`, e.message);
        return null;
    }
}

migrateMedia().catch(console.error);
