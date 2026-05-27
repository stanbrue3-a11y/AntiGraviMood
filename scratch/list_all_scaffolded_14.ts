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
    .select('name, slug, address, Url_Photos_Menu')
    .eq('status', 'SCAFFOLDED')
    .ilike('address', '%75014%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  const targets = data.filter(p => {
    if (!p.Url_Photos_Menu) return false;
    if (Array.isArray(p.Url_Photos_Menu)) return p.Url_Photos_Menu.length > 0;
    try {
      const parsed = JSON.parse(p.Url_Photos_Menu);
      return Array.isArray(parsed) && parsed.length > 0;
    } catch {
      return p.Url_Photos_Menu.trim() !== '';
    }
  });

  console.log(`Found ${targets.length} scaffolded places with menus in Paris 14:`);
  targets.forEach(p => {
    console.log(`- ${p.slug} (${p.name})`);
  });
}

main().catch(console.error);
