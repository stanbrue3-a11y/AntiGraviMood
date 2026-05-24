import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BUCKET_NAME = 'place-media';

async function listAll() {
  const { data: folders, error: listError } = await supabase.storage
    .from(BUCKET_NAME)
    .list('menus', { limit: 500 });

  if (listError) {
    console.error('Error listing menus folder:', listError);
    return;
  }

  console.log('Folders under menus/:');
  for (const folder of folders || []) {
    if (folder.id === undefined || folder.metadata === null) {
      // It's a directory
      const { data: files, error } = await supabase.storage
        .from(BUCKET_NAME)
        .list(`menus/${folder.name}`, { limit: 100 });
      console.log(`- menus/${folder.name}/ (${files?.length || 0} files)`);
      files?.forEach(f => console.log(`  - ${f.name} (${f.metadata?.size} bytes)`));
    } else {
      console.log(`- menus/${folder.name} (file, ${folder.metadata?.size} bytes)`);
    }
  }
}

listAll();
