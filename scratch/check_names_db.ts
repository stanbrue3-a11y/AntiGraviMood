import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const testSlugs = [
  'chez-dumonet', 'josephine-chez-dumonet',
  'la-rotonde', 'la-rotonde-montparnasse', 'rotonde-montparnasse',
  'le-select', 'le-select-montparnasse',
  'la-coupole', 'la-coupole-montparnasse',
  'l-assiette', 'l-assiette-paris-14'
];

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, arrondissement, status')
    .in('slug', testSlugs);

  if (error) {
    console.error(error);
    return;
  }

  console.log('Found matching places in DB:');
  data.forEach(p => {
    console.log(`- ${p.slug} (${p.name}) | Arr: ${p.arrondissement} | Status: ${p.status}`);
  });
}

main().catch(console.error);
