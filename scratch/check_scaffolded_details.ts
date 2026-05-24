import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, Url_Photos_Menu, updated_at')
    .eq('arrondissement', 14)
    .eq('status', 'SCAFFOLDED');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data.length} scaffolded places in 14th:`);
  data.forEach(p => {
    console.log(`- ${p.name} (${p.slug})`);
    console.log(`  Updated At: ${p.updated_at}`);
    console.log(`  Menus: ${p.Url_Photos_Menu}`);
  });
}

check();
