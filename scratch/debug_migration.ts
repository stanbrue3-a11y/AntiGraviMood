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
    .select('slug, name, hero_image, google_photos')
    .in('slug', ['bistrot-chic', 'kimura']);

  if (error) {
    console.error(error);
    return;
  }

  for (const place of places) {
    console.log(`\nPlace: ${place.name} (${place.slug})`);
    console.log(`Hero image starts with http? ${place.hero_image?.startsWith('http')} | Value: ${place.hero_image?.substring(0, 30)}`);
    console.log(`Google photos list:`, place.google_photos);
    const needsMigration = place.google_photos?.some((p: string) => !p.startsWith('http'));
    console.log(`Needs gallery migration? ${needsMigration}`);
  }
}

main().catch(console.error);
