const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
);

async function main() {
  const { data, error } = await supabase.from('places').select('subcategories');
  if (error) throw error;

  const allSubcats = new Set();
  data.forEach((p) => {
    if (p.subcategories) {
      p.subcategories.forEach((s) => allSubcats.add(s));
    }
  });

  console.log(Array.from(allSubcats).sort());
}

main().catch(console.error);
