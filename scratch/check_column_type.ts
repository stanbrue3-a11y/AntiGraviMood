import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  // Query information_schema via RPC or SQL if possible. Since we can't run raw SQL on public schema easily without RPC,
  // let's do a select and check the type of Url_Photos_Menu value.
  const { data, error } = await supabase.from('places').select('Url_Photos_Menu').limit(10);

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Sample Url_Photos_Menu values:');
    data.forEach((row, i) => {
      console.log(`Row ${i}:`, typeof row.Url_Photos_Menu, row.Url_Photos_Menu);
    });
  }
}

main().catch(console.error);
