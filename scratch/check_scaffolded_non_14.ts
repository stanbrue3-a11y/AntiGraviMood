import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'bistrot-chic', 'nagoya', 'la-boissonnerie', 'colvert', 'chez-fernand-christine', 'chez-marcel'
];

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, arrondissement, status, description, tags, Url_Photos_Menu')
    .in('slug', slugs);

  if (error) {
    console.error('Error:', error);
    return;
  }

  data.forEach((p) => {
    console.log(`=== ${p.name} (${p.slug}) ===`);
    console.log(`Arrondissement: ${p.arrondissement}`);
    console.log(`Status: ${p.status}`);
    console.log(`Tags: ${JSON.stringify(p.tags)}`);
    console.log(`Has Description: ${!!p.description}`);
    console.log(`Menu URLs: ${JSON.stringify(p.Url_Photos_Menu)}`);
  });
}

main().catch(console.error);
