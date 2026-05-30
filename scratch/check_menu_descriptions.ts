import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Fetching yakitori-montparnasse details from Supabase...');
  
  const { data: place, error: placeError } = await supabase
    .from('places')
    .select('id, name')
    .eq('slug', 'yakitori-montparnasse')
    .single();

  if (placeError || !place) {
    console.error('Place not found:', placeError);
    return;
  }

  console.log(`Found place: ${place.name} (ID: ${place.id})`);

  const { data: items, error: itemsError } = await supabase
    .from('menu_items')
    .select('id, name, description, category_id')
    .eq('place_id', place.id); // Wait, are items linked by place_id or category_id?
  // Let's also check category_id links. In our schema:
  // menu_categories table has place_id, and menu_items has category_id.
  // Wait! In SupabasePlacesRepository: itemsData has category_id.
  // Let's see how they are linked in the DB.
  // We can fetch menu_categories for place.id and then fetch items.
  const { data: categories } = await supabase
    .from('menu_categories')
    .select('id, display_label')
    .eq('place_id', place.id);

  if (!categories || categories.length === 0) {
    console.log('No categories found.');
    return;
  }

  const catIds = categories.map(c => c.id);
  const { data: dbItems, error } = await supabase
    .from('menu_items')
    .select('name, description')
    .in('category_id', catIds);

  if (error) {
    console.error(error);
    return;
  }

  console.log(`\nFound ${dbItems.length} menu items in database:`);
  dbItems.forEach(item => {
    console.log(`- Name: ${item.name} | Description: "${item.description || ''}"`);
  });
}

main().catch(console.error);
