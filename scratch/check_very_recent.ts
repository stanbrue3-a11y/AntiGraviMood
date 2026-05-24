import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function check() {
  // Query all places updated today (2026-05-24)
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, updated_at, status, Url_Photos_Menu')
    .gte('updated_at', '2026-05-24T12:00:00.000Z') // 12:00 UTC (14:00 local time)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data?.length || 0} places updated since 14:00 local time today:`);
  data?.forEach(p => {
    console.log(`- ${p.name} (${p.slug}) | Updated At: ${p.updated_at}`);
    console.log(`  Status: ${p.status}`);
    console.log(`  Menus: ${p.Url_Photos_Menu}`);
  });
}

check();
