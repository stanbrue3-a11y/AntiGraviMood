import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, address, arrondissement, status, google_rating, tags')
    .eq('status', 'SCAFFOLDED');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data.length} scaffolded places total:`);
  data.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} (${p.slug}) | Arr: ${p.arrondissement} | Rating: ${p.google_rating} | Tags: ${JSON.stringify(p.tags)}`);
  });
}

main().catch(console.error);
