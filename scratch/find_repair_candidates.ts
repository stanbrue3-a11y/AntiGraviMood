import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  // Query places in 14th arrondissement that are not verified or are scaffolded
  const { data, error } = await supabase
    .from('places')
    .select('slug, name, google_rating, status, description, is_verified')
    .eq('arrondissement', 14)
    .order('google_rating', { ascending: false });

  if (error) throw error;

  console.log(`📋 Found ${data.length} places in 14th arrondissement:`);
  
  // Filter for places with short descriptions, nulls, or unverified statuses
  const candidatesForRepair = data.filter(p => 
    !p.is_verified || 
    p.status === 'SCAFFOLDED' || 
    !p.description || 
    p.description.length < 200
  );

  console.log(`\n🛠️ Candidates for repair (${candidatesForRepair.length} total):`);
  for (const p of candidatesForRepair.slice(0, 15)) {
    console.log(`- Slug: ${p.slug} | Name: ${p.name} | Rating: ${p.google_rating} | Status: ${p.status} | Verified: ${p.is_verified} | Desc length: ${p.description?.length || 0}`);
  }
}

main().catch(console.error);
