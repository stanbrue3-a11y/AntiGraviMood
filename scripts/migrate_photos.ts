import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

/**
 * 📸 MEDIA MIGRATOR — Google Places → Supabase Storage
 * Ce script sécurise les images en les hébergeant de manière permanente.
 *
 * Usage :
 *   npx tsx scripts/migrate_photos.ts           → Migre les fiches récentes (7j)
 *   npx tsx scripts/migrate_photos.ts --all     → Audit global et migration complète
 *   npx tsx scripts/migrate_photos.ts --slug <S> → Une seule fiche
 */

const BUCKET_NAME = 'place-media';
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function uploadToSupabase(ref: string, storagePath: string): Promise<string | null> {
  try {
    const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${ref}&key=${GOOGLE_KEY}`;
    const response = await axios.get(googleUrl, { responseType: 'arraybuffer' });
    let buffer = Buffer.from(response.data);

    // Optimize image on-the-fly using sharp
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      let pipeline = image;
      if (metadata.width && metadata.width > 1000) {
        pipeline = pipeline.resize({ width: 1000, withoutEnlargement: true });
      }
      buffer = await pipeline
        .jpeg({ quality: 75, progressive: true })
        .toBuffer();
    } catch (compressErr: any) {
      console.warn(`      ⚠️ Warning: Failed to compress ${storagePath}, uploading raw image:`, compressErr.message);
    }

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, buffer, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
    return publicUrl;
  } catch (e: any) {
    console.error(`   ❌ Échec upload ${storagePath}: ${e.message}`);
    return null;
  }
}

async function migratePlace(place: any) {
  console.log(`\n📦 Migration : ${place.name} (${place.slug})`);
  let updates: any = {};

  // 1. Migration Hero Image
  if (place.hero_image && !place.hero_image.startsWith('http')) {
    process.stdout.write('   🖼️ Hero Image... ');
    const url = await uploadToSupabase(place.hero_image, `${place.slug}/hero.jpg`);
    if (url) {
      updates.hero_image = url;
      console.log('✅');
    }
  }

  // 2. Migration Galerie
  if (place.google_photos && place.google_photos.length > 0) {
    const needsMigration = place.google_photos.some((p: string) => !p.startsWith('http'));
    if (needsMigration) {
      process.stdout.write(`   📸 Galerie (${place.google_photos.length} photos)... `);
      const newPhotos: string[] = [];
      for (let i = 0; i < place.google_photos.length; i++) {
        const ref = place.google_photos[i];
        if (ref.startsWith('http')) {
          newPhotos.push(ref);
          continue;
        }
        const url = await uploadToSupabase(ref, `${place.slug}/photo_${i + 1}.jpg`);
        if (url) newPhotos.push(url);
      }
      updates.google_photos = newPhotos;
      console.log('✅');
    }
  }

  if (Object.keys(updates).length > 0) {
    const { error } = await supabase.from('places').update(updates).eq('slug', place.slug);
    if (error) console.error(`   ❌ Erreur DB update : ${error.message}`);
    return true;
  }
  console.log('   ✨ Déjà à jour.');
  return false;
}

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const slugIdx = args.indexOf('--slug');
  const recentDays = 7;

  console.log('📸 [MEDIA MIGRATOR] Google → Supabase Storage');

  let query = supabase.from('places').select('slug, name, hero_image, google_photos');

  if (slugIdx !== -1) {
    query = query.eq('slug', args[slugIdx + 1]);
  } else if (!isAll) {
    const since = new Date(Date.now() - recentDays * 86400000).toISOString();
    console.log(`📅 Mode : Fiches récentes (${recentDays} derniers jours)`);
    query = query.gte('created_at', since);
  } else {
    console.log('⚠️ Mode : GLOBAL (Audit de tout le registre)');
  }

  const { data: places, error } = await query;
  if (error) throw error;

  if (!places || places.length === 0) {
    console.log('ℹ️ Aucune fiche à migrer.');
    return;
  }

  let migrated = 0;
  for (const place of places) {
    const ok = await migratePlace(place);
    if (ok) migrated++;
    // Petite pause pour ne pas saturer l'API Google
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\n🏁 Terminé : ${migrated} fiches migrées vers Supabase Storage.`);
}

main().catch(console.error);
