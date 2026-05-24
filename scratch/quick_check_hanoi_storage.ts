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

  const names = (folders || []).map(f => f.name);
  console.log('Total menu folders:', names.length);
  console.log('Includes hanoi-quan-montparnasse?', names.includes('hanoi-quan-montparnasse'));
  console.log('Folders containing hanoi:', names.filter(n => n.toLowerCase().includes('hanoi')));
}

listAll();
