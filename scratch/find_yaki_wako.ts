import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function find() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, Url_Photos_Menu')
    .or('slug.ilike.%yaki%,slug.ilike.%wako%,slug.ilike.%wac%,slug.ilike.%yak%,name.ilike.%yaki%,name.ilike.%wako%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data.length} matches:`);
  data.forEach(p => {
    console.log(`- ${p.name} (${p.slug}) | Status: ${p.status} | Menu Photos: ${JSON.stringify(p.Url_Photos_Menu)}`);
  });
}

find().catch(console.error);
