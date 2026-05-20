import path from 'path';
import { createClient } from '@supabase/supabase-js';
import sharp from 'sharp';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const BUCKET_NAME = 'place-media';
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function optimizeImage(buffer: Buffer): Promise<Buffer> {
  const image = sharp(buffer);
  const metadata = await image.metadata();

  // If width is larger than 1000px, resize it. Else just compress.
  let pipeline = image;
  if (metadata.width && metadata.width > 1000) {
    pipeline = pipeline.resize({ width: 1000, withoutEnlargement: true });
  }

  // Convert to progressive jpeg with 75% quality
  return await pipeline
    .jpeg({ quality: 75, progressive: true })
    .toBuffer();
}

async function processFile(filePath: string): Promise<{ before: number; after: number; optimized: boolean }> {
  try {
    // 1. Download file from Supabase
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .download(filePath);

    if (error) throw error;
    if (!data) throw new Error('Empty file received');

    const originalBuffer = Buffer.from(await data.arrayBuffer());
    const originalSize = originalBuffer.length;

    // 2. Run optimization
    const optimizedBuffer = await optimizeImage(originalBuffer);
    const optimizedSize = optimizedBuffer.length;

    // 3. Upload back if size is significantly smaller or if it was modified
    if (optimizedSize < originalSize * 0.95) {
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, optimizedBuffer, {
          contentType: 'image/jpeg',
          upsert: true
        });

      if (uploadError) throw uploadError;
      return { before: originalSize, after: optimizedSize, optimized: true };
    }

    return { before: originalSize, after: originalSize, optimized: false };
  } catch (err: any) {
    console.error(`   ❌ Failed to process ${filePath}:`, err.message);
    return { before: 0, after: 0, optimized: false };
  }
}

async function optimizeFolder(folderPath: string): Promise<{ filesCount: number; savedBytes: number }> {
  let savedBytes = 0;
  let filesCount = 0;

  try {
    // List files in the folder
    const { data: files, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folderPath, { limit: 100 });

    if (error) throw error;
    if (!files) return { filesCount, savedBytes };

    for (const file of files) {
      // Ignore directories/subfolders
      if (file.id === null && file.metadata === null) continue; 
      
      const filePath = `${folderPath}/${file.name}`;
      const ext = path.extname(file.name).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

      process.stdout.write(`   📸 Optimizing ${file.name} (${(file.metadata.size / 1024).toFixed(0)} KB)... `);
      const res = await processFile(filePath);
      
      if (res.optimized) {
        const diff = res.before - res.after;
        savedBytes += diff;
        filesCount++;
        console.log(`✅ Compressed! Saved ${(diff / 1024).toFixed(0)} KB (${((res.after / res.before) * 100).toFixed(0)}% of original)`);
      } else {
        console.log('✨ Already optimized.');
      }
    }
  } catch (err: any) {
    console.error(`   ❌ Error listing folder ${folderPath}:`, err.message);
  }

  return { filesCount, savedBytes };
}

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const slugIdx = args.indexOf('--slug');

  console.log('⚡ [MEDIA COMPRESSOR] Optimizing Supabase Storage images...');

  let query = supabase.from('places').select('slug, name');

  if (slugIdx !== -1) {
    query = query.eq('slug', args[slugIdx + 1]);
  } else if (!isAll) {
    console.log('ℹ️ Running in default mode (use --all to optimize the entire database)');
    console.log('ℹ️ Or use --slug <slug> to optimize a specific place');
    // Fetch only a few places just as a safety net
    query = query.limit(5);
  } else {
    console.log('⚠️ Running in GLOBAL mode. This will optimize all media folders.');
  }

  const { data: places, error } = await query;
  if (error) throw error;

  if (!places || places.length === 0) {
    console.log('ℹ️ No places found to process.');
    return;
  }

  let totalFiles = 0;
  let totalSaved = 0;

  for (const place of places) {
    console.log(`\n📂 Processing: ${place.name} (${place.slug})`);
    
    // 1. Optimize place gallery & hero
    const galleryRes = await optimizeFolder(place.slug);
    totalFiles += galleryRes.filesCount;
    totalSaved += galleryRes.savedBytes;

    // 2. Optimize place menus (if any)
    const menuRes = await optimizeFolder(`menus/${place.slug}`);
    totalFiles += menuRes.filesCount;
    totalSaved += menuRes.savedBytes;
  }

  console.log(`\n🏁 Done! Optimized ${totalFiles} files. Saved ${(totalSaved / (1024 * 1024)).toFixed(2)} MB total.`);
}

main().catch(console.error);
