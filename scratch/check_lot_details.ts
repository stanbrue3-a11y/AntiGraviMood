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
    .select('name, slug, arrondissement, address, lat, lng, tags, status')
    .in('slug', slugs);

  if (error) {
    console.error('Error:', error);
    return;
  }

  data.forEach((p) => {
    console.log(`- ${p.slug} | Name: ${p.name} | Arr: ${p.arrondissement} | Address: ${p.address} | Lat/Lng: ${p.lat}/${p.lng} | Tags: ${JSON.stringify(p.tags)}`);
  });
}

main().catch(console.error);
