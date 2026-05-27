import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Querying places in the 6th arrondissement with uploaded menus...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, Url_Photos_Menu')
    .eq('arrondissement', 6);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  const placesWithMenus = places.filter(p => {
    if (!p.Url_Photos_Menu) return false;
    if (Array.isArray(p.Url_Photos_Menu)) return p.Url_Photos_Menu.length > 0;
    try {
      const parsed = typeof p.Url_Photos_Menu === 'string' ? JSON.parse(p.Url_Photos_Menu) : p.Url_Photos_Menu;
      return Array.isArray(parsed) && parsed.length > 0;
    } catch {
      return String(p.Url_Photos_Menu).trim().length > 0;
    }
  });

  console.log(`\nTotal places in 6e in DB: ${places.length}`);
  console.log(`Places in 6e with menus uploaded: ${placesWithMenus.length}`);
  
  placesWithMenus.forEach((p, index) => {
    console.log(`\n${index + 1}. [${p.status}] ${p.name} (${p.slug})`);
    console.log(`   URLs: ${JSON.stringify(p.Url_Photos_Menu)}`);
  });
}

main().catch(console.error);
