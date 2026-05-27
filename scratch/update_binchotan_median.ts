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
    .update({ plat_median_cents: 1400 })
    .eq('slug', 'binchotan')
    .select();

  if (error) {
    console.error('❌ Error updating Binchotan:', error);
  } else {
    console.log('✅ Binchotan updated successfully:', data);
  }
}

main().catch(console.error);
