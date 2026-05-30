import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data: roger } = await supabase.from('places').select('name, hero_image, google_photos').eq('slug', 'roger-la-grenouille').single();
  const { data: azabu } = await supabase.from('places').select('name, hero_image, google_photos').eq('slug', 'azabu').single();

  console.log('ROGER:', JSON.stringify(roger, null, 2));
  console.log('AZABU:', JSON.stringify(azabu, null, 2));
}

main().catch(console.error);
