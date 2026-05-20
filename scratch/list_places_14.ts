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
    .select('slug, name, status, subcategories, description, arrondissement')
    .eq('arrondissement', 14);

  if (error) throw error;
  console.log(`Found ${places.length} places in 14th arrondissement.`);
  for (const p of places) {
    console.log(`- ${p.name} | ${p.slug} | Status: ${p.status} | Subcategories: ${p.subcategories?.join(', ')}`);
  }
}

main().catch(console.error);
