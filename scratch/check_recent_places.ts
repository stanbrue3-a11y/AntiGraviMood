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
    .select('id, name, slug, tags, updated_at, status')
    .order('updated_at', { ascending: false })
    .limit(15);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Top 15 most recently updated places:`);
  places.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} (${p.slug}) | updated: ${p.updated_at} | status: ${p.status} | tags: ${JSON.stringify(p.tags)}`);
  });
}

main().catch(console.error);
