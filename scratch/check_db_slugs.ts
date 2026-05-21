import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function listDir(slug: string) {
  const dir = path.join(__dirname, 'vision_audit', slug);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    console.log(`📁 Directory for ${slug}:`, files);
  } else {
    console.log(`❌ Directory for ${slug} does not exist`);
  }
}

async function main() {
  await listDir('tonkatsu-tombo');
  await listDir('restaurant-pilgrim');
  await listDir('pizzeria-i-briganti');
  await listDir('creperie-le-petit-josselin');
}

main().catch(console.error);
