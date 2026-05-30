import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = ['bistrot-chic', 'kimura', 'nagoya'];

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, hero_image, google_photos')
    .in('slug', slugs);

  if (error) {
    console.error('Error:', error);
    return;
  }

  data.forEach((p) => {
    console.log(`=== ${p.name} (${p.slug}) ===`);
    console.log(`Hero Image: ${p.hero_image}`);
    console.log(`Google Photos (length ${p.google_photos?.length}):`, p.google_photos);
  });
}

main().catch(console.error);
