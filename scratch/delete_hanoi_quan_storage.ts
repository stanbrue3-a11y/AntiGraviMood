import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BUCKET_NAME = 'place-media';
const FOLDER_PATH = 'menus/hanoi-quan-montparnasse';

async function run() {
  console.log(`Listing files in folder: "${FOLDER_PATH}" in bucket "${BUCKET_NAME}"...`);
  
  const { data: files, error: listError } = await supabase.storage
    .from(BUCKET_NAME)
    .list(FOLDER_PATH, { limit: 100 });

  if (listError) {
    console.error('❌ Error listing files:', listError.message);
    return;
  }

  if (!files || files.length === 0) {
    console.log('ℹ️ No files found in this folder. It might be already empty.');
    return;
  }

  console.log(`Found ${files.length} files to delete:`);
  const pathsToDelete = files.map(file => `${FOLDER_PATH}/${file.name}`);
  pathsToDelete.forEach(p => console.log(`  - ${p}`));

  console.log('\n⏳ Deleting files from Supabase Storage...');
  const { data: deleted, error: deleteError } = await supabase.storage
    .from(BUCKET_NAME)
    .remove(pathsToDelete);

  if (deleteError) {
    console.error('❌ Error deleting files:', deleteError.message);
    return;
  }

  console.log(`\n🎉 SUCCESS! Deleted ${deleted?.length || 0} files. Hanoi Quan menu images have been removed from storage.`);
}

run();
