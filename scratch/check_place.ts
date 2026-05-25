import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Please provide a slug');
    process.exit(1);
  }

  const { data: p, error } = await supabase
    .from('places')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching place:', error);
    return;
  }

  console.log(JSON.stringify(p, null, 2));
}

main().catch(console.error);
