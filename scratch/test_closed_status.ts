import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('Testing update of status to CLOSED...');
  // We try to update a test record to status = 'CLOSED' without committing/saving it if we want,
  // or we can just try to update a closed place like Pois Chic (pois-chic).
  const { data, error } = await supabase
    .from('places')
    .update({ status: 'CLOSED' as any })
    .eq('slug', 'pois-chic')
    .select();

  if (error) {
    console.error('❌ Error updating status to CLOSED:', error.message);
  } else {
    console.log('✅ Successfully updated status to CLOSED!', data);
    // Revert it back to SCAFFOLDED for now
    await supabase
      .from('places')
      .update({ status: 'SCAFFOLDED' })
      .eq('slug', 'pois-chic');
  }
}

main().catch(console.error);
