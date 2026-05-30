import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, address, status, google_rating, Url_Photos_Menu')
    .eq('arrondissement', 14)
    .eq('status', 'SCAFFOLDED');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data.length} scaffolded places in Paris 14:`);
  data.forEach(p => {
    console.log(`- ${p.slug} (${p.name}) | Rating: ${p.google_rating} | Address: ${p.address} | Has Menu Photos: ${!!p.Url_Photos_Menu}`);
  });
}

main().catch(console.error);
