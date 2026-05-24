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
    .select('id, name, slug, address, description, Url_Photos_Menu')
    .in('slug', ['wako', 'yaki']);

  if (error) {
    console.error('Error:', error);
    return;
  }

  data.forEach(p => {
    console.log(`========================================`);
    console.log(`Name: ${p.name} (${p.slug})`);
    console.log(`Address: ${p.address}`);
    console.log(`Description: ${p.description}`);
    console.log(`Photos: ${JSON.stringify(p.Url_Photos_Menu)}`);
  });
}

check().catch(console.error);
