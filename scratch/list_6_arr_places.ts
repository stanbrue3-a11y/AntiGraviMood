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
    .select('slug, name, status, arrondissement')
    .eq('arrondissement', 14);

  if (error) {
    console.error(error);
    return;
  }

  console.log(`Found ${places.length} places in 14th arrondissement:`);
  places.forEach((p) => {
    console.log(`- ${p.slug} (${p.status}) : ${p.name}`);
  });
}

main().catch(console.error);
