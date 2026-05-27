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
    .select('name, slug, status, address, Url_Photos_Menu')
    .eq('status', 'SCAFFOLDED');

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log('--- SCAFFOLDED Places with menus ---');
  data.forEach(p => {
    let hasPhotos = false;
    if (p.Url_Photos_Menu) {
      if (Array.isArray(p.Url_Photos_Menu) && p.Url_Photos_Menu.length > 0) {
        hasPhotos = true;
      } else if (typeof p.Url_Photos_Menu === 'string' && p.Url_Photos_Menu.trim() !== '') {
        try {
          const parsed = JSON.parse(p.Url_Photos_Menu);
          if (Array.isArray(parsed) && parsed.length > 0) {
            hasPhotos = true;
          }
        } catch {
          hasPhotos = true;
        }
      }
    }

    if (hasPhotos) {
      console.log(`- Slug: ${p.slug}`);
      console.log(`  Name: ${p.name}`);
      console.log(`  Address: ${p.address}`);
      console.log(`  Url_Photos_Menu length: ${Array.isArray(p.Url_Photos_Menu) ? p.Url_Photos_Menu.length : 1}`);
    }
  });
}

main().catch(console.error);
