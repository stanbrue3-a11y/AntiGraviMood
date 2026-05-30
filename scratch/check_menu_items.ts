import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const slug = 'opla-banh-mi-more';

  const { data: place, error: placeError } = await supabase
    .from('places')
    .select('id, name')
    .eq('slug', slug)
    .single();

  if (placeError || !place) {
    console.error('Error fetching place:', placeError);
    return;
  }

  console.log(`Place: ${place.name} (${place.id})`);

  const { data: categories, error: catError } = await supabase
    .from('menu_categories')
    .select('*')
    .eq('place_id', place.id)
    .order('sort_order');

  if (catError) {
    console.error('Error fetching categories:', catError);
    return;
  }

  const { data: items, error: itemsError } = await supabase
    .from('menu_items')
    .select('*')
    .eq('place_id', place.id);

  if (itemsError) {
    console.error('Error fetching items:', itemsError);
    return;
  }

  console.log(`\nFound ${categories.length} categories and ${items.length} items.\n`);

  for (const cat of categories) {
    console.log(`📂 Category: [${cat.category_type}] ${cat.display_label} (ID: ${cat.id})`);
    const catItems = items.filter(i => i.category_id === cat.id);
    for (const item of catItems) {
      console.log(`  - ${item.name}: ${item.price_cents} cents (highlight: ${item.is_highlight})`);
    }
  }

  // Also print items without valid category
  const unmatched = items.filter(i => !categories.some(c => c.id === i.category_id));
  if (unmatched.length > 0) {
    console.log(`\n⚠️ UNMATCHED ITEMS (${unmatched.length}):`);
    for (const item of unmatched) {
      console.log(`  - ${item.name}: ${item.price_cents} cents (category_id: ${item.category_id})`);
    }
  }
}

main().catch(console.error);
