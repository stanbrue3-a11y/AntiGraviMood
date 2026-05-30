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
    .select('id, name, slug, tags, created_at, status')
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Top 20 most recently CREATED places:`);
  places.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} (${p.slug}) | created: ${p.created_at} | status: ${p.status} | tags: ${JSON.stringify(p.tags)}`);
  });
}

main().catch(console.error);
