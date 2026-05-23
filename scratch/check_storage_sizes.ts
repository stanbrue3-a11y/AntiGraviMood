import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BUCKET_NAME = 'place-media';

interface StorageFile {
  name: string;
  id: string;
  metadata: {
    size: number;
    mimetype: string;
  };
}

async function listAllFiles(folder: string = ''): Promise<{ path: string; size: number; mime: string }[]> {
  const allFiles: { path: string; size: number; mime: string }[] = [];
  
  try {
    const { data, error } = await supabase.storage.from(BUCKET_NAME).list(folder, {
      limit: 100,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error) throw error;
    if (!data) return allFiles;

    for (const item of data) {
      const fullPath = folder ? `${folder}/${item.name}` : item.name;
      
      // If it's a directory/folder (id is null or metadata is null)
      if (!item.id && !item.metadata) {
        const subFiles = await listAllFiles(fullPath);
        allFiles.push(...subFiles);
      } else {
        allFiles.push({
          path: fullPath,
          size: item.metadata?.size || 0,
          mime: item.metadata?.mimetype || '',
        });
      }
    }
  } catch (err: any) {
    console.error(`Error listing folder ${folder}:`, err.message);
  }
  
  return allFiles;
}

async function run() {
  console.log(`Analyzing files in Supabase Storage bucket: "${BUCKET_NAME}"...`);
  const files = await listAllFiles();
  
  // Sort files by size descending
  files.sort((a, b) => b.size - a.size);

  const totalSize = files.reduce((acc, f) => acc + f.size, 0);
  console.log(`\n📊 Storage Summary:`);
  console.log(`- Total Files: ${files.length}`);
  console.log(`- Total Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);

  // Group by type
  const typeSummary: Record<string, { count: number; size: number }> = {};
  files.forEach(f => {
    const ext = path.extname(f.path).toLowerCase() || 'unknown';
    if (!typeSummary[ext]) {
      typeSummary[ext] = { count: 0, size: 0 };
    }
    typeSummary[ext].count++;
    typeSummary[ext].size += f.size;
  });

  console.log(`\n📂 Size by file extension:`);
  Object.entries(typeSummary).forEach(([ext, info]) => {
    console.log(`- ${ext}: ${info.count} files | ${(info.size / (1024 * 1024)).toFixed(2)} MB`);
  });

  console.log(`\n🔝 Top 15 Largest Files:`);
  files.slice(0, 15).forEach((f, idx) => {
    console.log(`${idx + 1}. ${f.path} (${f.mime}) -> ${(f.size / (1024 * 1024)).toFixed(2)} MB`);
  });
}

run();
