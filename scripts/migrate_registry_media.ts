import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !GOOGLE_KEY) {
    console.error('❌ Missing environment variables.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const BUCKET_NAME = 'place-media';
const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');
const CACHE_PATH = path.join(__dirname, '../media_migration_map.json');

const cache: Record<string, string> = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')) : {};

async function ensureBucket() {
    console.log(`🗄️  Vérification du bucket "${BUCKET_NAME}"...`);
    const { data, error } = await supabase.storage.getBucket(BUCKET_NAME);
    
    if (error && error.message.includes('not found')) {
        console.log(`➕ Création du bucket "${BUCKET_NAME}"...`);
        const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
            public: true,
            allowedMimeTypes: ['image/jpeg', 'image/png'],
            fileSizeLimit: 5242880 // 5MB
        });
        if (createError) {
            console.error(`❌ Impossible de créer le bucket : ${createError.message}`);
            process.exit(1);
        }
        console.log(`✅ Bucket "${BUCKET_NAME}" créé avec succès.`);
    } else if (error) {
        console.error(`❌ Erreur lors de la vérification du bucket : ${error.message}`);
        process.exit(1);
    } else {
        console.log(`✅ Bucket "${BUCKET_NAME}" prêt.`);
    }
}

async function uploadToSupabase(googleUrl: string, storagePath: string): Promise<string | null> {
    try {
        let finalUrl = googleUrl;
        if (finalUrl.startsWith('AU_') && !finalUrl.includes('http')) {
            finalUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${finalUrl}&key=${GOOGLE_KEY}`;
        }

        const response = await axios.get(finalUrl, { responseType: 'arraybuffer', timeout: 30000 });
        const buffer = Buffer.from(response.data, 'binary');

        const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(storagePath, buffer, {
                contentType: 'image/jpeg',
                upsert: true
            });

        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
        return publicUrl;
    } catch (e: any) {
        console.error(`   ❌ Error uploading ${storagePath}: ${e.message}`);
        return null;
    }
}

async function migrateFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const slugMatch = content.match(/slug:\s*[`"](.*?)[`"]/);
    if (!slugMatch) return;
    const slug = slugMatch[1];

    let updated = content;
    const googlePhotoRegex = /(?:https:\/\/maps\.googleapis\.com\/maps\/api\/place\/photo\?.*?photo_reference=([A-Za-z0-9_-]+).*?)|(?:[`"']((?:AU_|ATCDN)[A-Za-z0-9_-]+)[`"'])/g;
    
    const matches = Array.from(content.matchAll(googlePhotoRegex));
    if (matches.length === 0) return;

    console.log(`\n📸 Checking ${slug} (${matches.length} potential photos)...`);

    let changed = false;
    for (let i = 0; i < matches.length; i++) {
        const fullMatch = matches[i][0];
        const ref = matches[i][1] || matches[i][2];
        const fileName = i === 0 ? 'hero.jpg' : `gallery_${i}.jpg`;
        const storagePath = `${slug}/${fileName}`;

        if (cache[ref]) {
            updated = updated.replace(fullMatch, `\`${cache[ref]}\``);
            changed = true;
        } else {
            await new Promise(r => setTimeout(r, 400));
            const publicUrl = await uploadToSupabase(ref, storagePath);
            if (publicUrl) {
                cache[ref] = publicUrl;
                updated = updated.replace(fullMatch, `\`${publicUrl}\``);
                console.log(`   ✅ Migrated ${fileName}`);
                changed = true;
                fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
            }
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, updated);
    }
}

function getAllFiles(dir: string): string[] {
    let results: string[] = [];
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) {
            results.push(...getAllFiles(full));
        } else if (item.endsWith('.ts') && item !== 'index.ts') {
            results.push(full);
        }
    }
    return results;
}

async function run() {
    await ensureBucket();
    const files = getAllFiles(REGISTRY_ROOT);
    const targetSlug = process.argv[2];

    for (const file of files) {
        if (targetSlug && !file.includes(targetSlug)) continue;
        await migrateFile(file);
    }
    console.log('\n✨ Media migration complete.');
}

run().catch(console.error);
