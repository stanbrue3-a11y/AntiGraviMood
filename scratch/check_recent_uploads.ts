import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('🔍 Checking recently updated menus in the 14th...');
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, address, Url_Photos_Menu, updated_at')
    .eq('status', 'SCAFFOLDED')
    .ilike('address', '%75014%')
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  data.forEach((p) => {
    if (p.Url_Photos_Menu) {
      console.log(`- Slug: ${p.slug}`);
      console.log(`  Name: ${p.name}`);
      console.log(`  Updated At: ${p.updated_at}`);
      console.log(`  Menus: ${JSON.stringify(p.Url_Photos_Menu)}`);
    }
  });
}

main().catch(console.error);
