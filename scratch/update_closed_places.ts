import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const permanentlyClosedSlugs = [
  'auberge-du-moulin-vert-paris-14',
  'restaurant-ile-de-la-reunion',
  'le-moulin-de-la-vierge',
  'l-ile-au-ble-noir',
  'le-daudet',
  'pois-chic',
  'le-bar-a-huitres',
  'la-regalade-paris-14',
  'l-ordonnance-paris-14'
];

const temporarilyClosedSlugs = [
  'jazz-cafe-montparnasse'
];

async function main() {
  console.log('📡 Updating permanently closed places...');
  for (const slug of permanentlyClosedSlugs) {
    const { data, error } = await supabase
      .from('places')
      .update({
        is_closed: true,
        status: 'ARCHIVED',
        opening_hours_raw: 'Définitivement fermé'
      })
      .eq('slug', slug)
      .select('name, slug, status, is_closed, opening_hours_raw');

    if (error) {
      console.error(`❌ Error updating ${slug}:`, error.message);
    } else {
      console.log(`✅ Updated ${slug}:`, data);
    }
  }

  console.log('\n📡 Updating temporarily closed places...');
  for (const slug of temporarilyClosedSlugs) {
    const { data, error } = await supabase
      .from('places')
      .update({
        is_closed: true,
        status: 'ARCHIVED',
        opening_hours_raw: 'Fermé temporairement'
      })
      .eq('slug', slug)
      .select('name, slug, status, is_closed, opening_hours_raw');

    if (error) {
      console.error(`❌ Error updating ${slug}:`, error.message);
    } else {
      console.log(`✅ Updated ${slug}:`, data);
    }
  }
}

main().catch(console.error);
