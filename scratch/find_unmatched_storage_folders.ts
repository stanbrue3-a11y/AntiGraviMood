import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const BUCKET_NAME = 'place-media';

async function check() {
  const { data: folders, error: listError } = await supabase.storage
    .from(BUCKET_NAME)
    .list('menus', { limit: 500 });

  if (listError) {
    console.error('Error listing menus folder:', listError);
    return;
  }

  const { data: places, error: dbError } = await supabase
    .from('places')
    .select('slug');

  if (dbError) {
    console.error('Error fetching places:', dbError);
    return;
  }

  const dbSlugs = new Set((places || []).map(p => p.slug));
  const storageFolders = (folders || []).map(f => f.name);

  console.log(`Checking ${storageFolders.length} storage folders against database...`);
  const unmatched: string[] = [];
  storageFolders.forEach(folder => {
    if (!dbSlugs.has(folder)) {
      unmatched.push(folder);
    }
  });

  console.log('Storage folders that do not match any place slug:');
  if (unmatched.length === 0) {
    console.log('All folders match a slug!');
  } else {
    unmatched.forEach(u => console.log(`- ${u}`));
  }
}

check();
