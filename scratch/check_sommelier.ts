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
    .select('name, slug, arrondissement, status, google_rating')
    .or('name.ilike.%JJIN%,name.ilike.%Felicie%');

  if (error) {
    console.error(error);
    return;
  }

  console.log('Found matching places for Sommelier:');
  data.forEach(p => {
    console.log(`- ${p.slug} (${p.name}) | Arr: ${p.arrondissement} | Status: ${p.status} | Rating: ${p.google_rating}`);
  });
}

main().catch(console.error);
