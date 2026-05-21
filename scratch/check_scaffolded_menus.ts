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
    .select('slug, name, status, arrondissement, Url_Photos_Menu')
    .eq('status', 'SCAFFOLDED')
    .order('name');

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  const placesWithMenus = data?.filter((p: any) => {
    if (!p.Url_Photos_Menu) return false;
    if (Array.isArray(p.Url_Photos_Menu)) return p.Url_Photos_Menu.length > 0;
    if (typeof p.Url_Photos_Menu === 'string') {
      try {
        const parsed = JSON.parse(p.Url_Photos_Menu);
        return Array.isArray(parsed) && parsed.length > 0;
      } catch (e) {
        return p.Url_Photos_Menu.trim().length > 0;
      }
    }
    return false;
  }) || [];

  console.log(`\n📋 Found ${placesWithMenus.length} places with uploaded menus that are still SCAFFOLDED:`);
  placesWithMenus.forEach((p: any) => {
    console.log(`- ${p.name} (${p.slug}) in Arrondissement ${p.arrondissement}`);
    console.log(`  Menus:`, p.Url_Photos_Menu);
  });
}

main().catch(console.error);
