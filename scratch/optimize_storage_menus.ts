import { createClient } from '@supabase/supabase-js';
import path from 'path';
import sharp from 'sharp';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BUCKET_NAME = 'place-media';

async function listAllFiles(folder: string = ''): Promise<string[]> {
  const filePaths: string[] = [];
  try {
    const { data, error } = await supabase.storage.from(BUCKET_NAME).list(folder, {
      limit: 100,
    });
    if (error) throw error;
    if (!data) return [];

    for (const item of data) {
      const fullPath = folder ? `${folder}/${item.name}` : item.name;
      if (!item.id && !item.metadata) {
        const sub = await listAllFiles(fullPath);
        filePaths.push(...sub);
      } else {
        filePaths.push(fullPath);
      }
    }
  } catch (err: any) {
    console.error(`Error listing ${folder}:`, err.message);
  }
  return filePaths;
}

async function optimizeAndUpload(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  try {
    // 1. Download original
    const { data, error } = await supabase.storage.from(BUCKET_NAME).download(filePath);
    if (error) throw error;
    const arrayBuffer = await data.arrayBuffer();
    const originalBuffer = Buffer.from(arrayBuffer);
    const originalSize = originalBuffer.length;

    // Only optimize if it's larger than 1 MB
    if (originalSize < 1024 * 1024) {
      console.log(`✨ ${filePath} is already small (${(originalSize / 1024).toFixed(0)} KB). Skipping.`);
      return;
    }

    console.log(`⏳ Optimizing ${filePath} (${(originalSize / (1024 * 1024)).toFixed(2)} MB)...`);

    // 2. Compress with sharp
    const image = sharp(originalBuffer);
    const metadata = await image.metadata();
    
    let pipeline = image;
    // Resize high-res screenshots to max 1600px width
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    }

    // Convert to progressive jpeg with 80% quality (virtually identical to original)
    const optimizedBuffer = await pipeline.jpeg({ quality: 80, progressive: true }).toBuffer();
    const newSize = optimizedBuffer.length;

    // 3. Upload back
    const { error: uploadError } = await supabase.storage.from(BUCKET_NAME).upload(filePath, optimizedBuffer, {
      contentType: 'image/jpeg',
      upsert: true,
    });

    if (uploadError) throw uploadError;

    const saved = originalSize - newSize;
    console.log(`✅ Compressed! New size: ${(newSize / 1024).toFixed(0)} KB. Saved ${(saved / (1024 * 1024)).toFixed(2)} MB (${((newSize / originalSize) * 100).toFixed(1)}% of original)`);
  } catch (err: any) {
    console.error(`❌ Failed to optimize ${filePath}:`, err.message);
  }
}

async function main() {
  console.log('⚡ Starting menu image storage optimization...');
  const files = await listAllFiles('menus');
  console.log(`Found ${files.length} files in menus/ folder.`);
  
  for (const file of files) {
    await optimizeAndUpload(file);
  }
  
  console.log('🏁 Finished optimization.');
}

main().catch(console.error);
