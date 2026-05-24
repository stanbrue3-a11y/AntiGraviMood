import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slug = process.argv[2];
const newRating = parseFloat(process.argv[3]);

if (!slug || isNaN(newRating)) {
  console.error("Usage: npx tsx scratch/temp_update_rating.ts <slug> <new_rating>");
  process.exit(1);
}

async function update() {
  const { data, error } = await supabase
    .from('places')
    .update({ google_rating: newRating })
    .eq('slug', slug)
    .select();

  if (error) {
    console.error('Error updating rating:', error);
  } else {
    console.log(`Successfully set rating of ${slug} to ${newRating}`, data[0]?.google_rating);
  }
}

update();
