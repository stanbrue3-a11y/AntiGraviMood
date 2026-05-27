import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Querying SCAFFOLDED places in Paris 14...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status')
    .eq('arrondissement', 14)
    .eq('status', 'SCAFFOLDED')
    .neq('slug', 'hanoi-quan-montparnasse');

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  if (!places || places.length === 0) {
    console.log('No other SCAFFOLDED places found in Paris 14.');
    return;
  }

  console.log(`Found ${places.length} places to delete:`);
  places.forEach(p => console.log(`- [${p.slug}] ${p.name}`));

  const slugsToDelete = places.map(p => p.slug);

  console.log('🔥 Deleting from Supabase...');
  const { data, error: delErr } = await supabase
    .from('places')
    .delete()
    .in('slug', slugsToDelete)
    .select();

  if (delErr) {
    console.error('❌ Error during deletion:', delErr);
  } else {
    console.log(`✅ Successfully deleted ${data?.length || 0} places from Supabase:`);
    data?.forEach(p => console.log(`   - Deleted: ${p.name} (${p.slug})`));
  }
}

main().catch(console.error);
