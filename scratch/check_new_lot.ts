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
    .select('id, name, slug, tags, status')
    .contains('tags', ['new_lot']);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${places.length} places with 'new_lot':`);
  places.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} (${p.slug}) | status: ${p.status} | tags: ${JSON.stringify(p.tags)}`);
  });
}

main().catch(console.error);
