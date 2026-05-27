import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, google_rating, category, is_closed')
    .eq('arrondissement', 14);

  if (error) {
    console.error('Error fetching:', error);
    return;
  }

  const active = places.filter(p => !p.is_closed);
  const restaurants = active.filter(p => p.category === 'restaurant');
  const publishedRestos = restaurants.filter(p => p.status === 'PUBLISHED');
  const scaffoldedRestos = restaurants.filter(p => p.status === 'SCAFFOLDED');

  console.log(`Total places in DB for 14e: ${places.length}`);
  console.log(`Active places (not closed): ${active.length}`);
  console.log(`Active restaurants: ${restaurants.length}`);
  console.log(`- PUBLISHED restaurants: ${publishedRestos.length}`);
  console.log(`- SCAFFOLDED restaurants: ${scaffoldedRestos.length}`);
}

main().catch(console.error);
