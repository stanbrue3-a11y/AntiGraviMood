import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data: place } = await supabase.from('places').select('id, name').eq('slug', 'binchotan').single();
  if (!place) {
    console.log('Place not found');
    return;
  }

  const { data: categories } = await supabase.from('menu_categories').select('*').eq('place_id', place.id);
  const { data: items } = await supabase.from('menu_items').select('*').eq('place_id', place.id);

  console.log(`Place: ${place.name}`);
  console.log(`Categories:`, categories);
  console.log(`Items count: ${items?.length}`);
  items?.forEach(it => {
    console.log(`  - Item: ${it.name} | Price: ${it.price_cents} | Cat ID: ${it.category_id}`);
  });
}

main().catch(console.error);
