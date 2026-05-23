import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function check() {
  const scratchDir = path.join(__dirname, '../scratch');
  const files = fs.readdirSync(scratchDir).filter(f => f.endsWith('_payload.json'));

  console.log(`Checking ${files.length} payload files...`);

  for (const file of files) {
    const slug = file.replace('_payload.json', '');
    const { data, error } = await supabase
      .from('places')
      .select('name, slug, status')
      .eq('slug', slug)
      .single();

    if (error) {
      console.log(`- ❌ ${slug} : Error fetching or not in DB (${error.message})`);
    } else {
      console.log(`- 📌 ${data.name} (${data.slug}) | Status in DB: ${data.status}`);
    }
  }
}

check();
