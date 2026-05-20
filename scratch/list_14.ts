import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const { data: places, error } = await supabase
    .from('places')
    .select('slug, name, address, google_rating')
    .eq('arrondissement', 14);

  if (error) {
    console.error(error);
    return;
  }

  console.log(`📋 Found ${places.length} places in the 14th arrondissement:`);
  for (const p of places) {
    console.log(`- ${p.name} (${p.slug}) | Rating: ${p.google_rating} | Address: ${p.address}`);
  }
}

main().catch(console.error);
