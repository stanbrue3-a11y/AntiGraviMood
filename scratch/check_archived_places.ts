import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Fetching ARCHIVED places from Supabase...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, is_closed')
    .eq('status', 'ARCHIVED');

  if (error) {
    console.error('❌ Error:', error);
    return;
  }

  console.log(`\nFound ${places.length} ARCHIVED places in DB:`);
  for (const place of places) {
    console.log(`- Slug: ${place.slug} | Name: ${place.name} | Is Closed: ${place.is_closed}`);
  }
}

main().catch(console.error);
