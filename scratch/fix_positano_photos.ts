import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const correctPhotos = [
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pizzeria-positano/photo_1.jpg",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pizzeria-positano/photo_2.jpg",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pizzeria-positano/photo_3.jpg",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pizzeria-positano/photo_4.jpg"
  ];

  console.log('Updating Pizzeria Positano google_photos in database...');
  const { data, error } = await supabase
    .from('places')
    .update({ google_photos: correctPhotos })
    .eq('slug', 'pizzeria-positano')
    .select();

  if (error) {
    console.error('Error updating:', error);
  } else {
    console.log('Successfully updated google_photos for Pizzeria Positano!');
  }
}

main().catch(console.error);
