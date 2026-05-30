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
    .select('slug, google_photos, hero_image')
    .eq('slug', 'pizzeria-positano')
    .single();

  if (error) {
    console.error(error);
    return;
  }

  console.log('google_photos:');
  data.google_photos.forEach((p: string, idx: number) => {
    console.log(`[${idx}] Length: ${p.length} | Starts with: ${p.substring(0, 30)} | Value: ${p}`);
  });
}

main().catch(console.error);
