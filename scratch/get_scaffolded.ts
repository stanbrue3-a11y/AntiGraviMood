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
    .select('slug, name, arrondissement, status, google_rating')
    .eq('status', 'SCAFFOLDED')
    .in('arrondissement', [14, 15])
    .order('arrondissement');

  if (error) throw error;
  console.log('📋 Scaffolded Places:', data?.length);
  console.log(JSON.stringify(data, null, 2));
}

main().catch(console.error);
