import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const targetSlugs = [
  'auberge-du-moulin-vert-paris-14',
  'restaurant-ile-de-la-reunion',
  'le-moulin-de-la-vierge',
  'l-ile-au-ble-noir',
  'le-daudet',
  'pois-chic',
  'le-bar-a-huitres',
  'la-regalade-paris-14',
  'l-ordonnance-paris-14',
  'jazz-cafe-montparnasse'
];

async function main() {
  console.log('📡 Fetching target places from Supabase...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, is_closed, opening_hours_raw')
    .in('slug', targetSlugs);

  if (error) {
    console.error('❌ Error:', error);
    return;
  }

  console.log(`\nFound ${places.length} / ${targetSlugs.length} places in DB:`);
  for (const place of places) {
    console.log(`- Slug: ${place.slug}`);
    console.log(`  Name: ${place.name}`);
    console.log(`  Status: ${place.status}`);
    console.log(`  Is Closed: ${place.is_closed}`);
    console.log(`  Opening Hours Raw: ${place.opening_hours_raw}`);
  }
}

main().catch(console.error);
