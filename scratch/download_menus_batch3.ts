import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';
import axios from 'axios';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'la-coupole',
  'le-cornichon-paris-14',
  'le-dome-montparnasse',
  'le-florissant',
  'le-duc-paris-14',
  'le-jeroboam',
  'le-layon',
  'le-petit-amazigh',
  'le-petit-baigneur',
  'le-petit-broc',
  'le-saut-du-crapaud',
  'le-plomb-du-cantal-gaite',
  'le-severo-paris-14',
];

const baseDir = '/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads';

async function downloadFile(url: string, destPath: string) {
  const response = await axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  });
  return new Promise<void>((resolve, reject) => {
    const writer = fs.createWriteStream(destPath);
    response.data.pipe(writer);
    writer.on('finish', () => resolve());
    writer.on('error', (err: any) => reject(err));
  });
}

async function main() {
  console.log('📡 Fetching place menu URLs...');
  const { data: places, error } = await supabase
    .from('places')
    .select('slug, Url_Photos_Menu')
    .in('slug', slugs);

  if (error) throw error;
  if (!places) return;

  for (const place of places) {
    const slug = place.slug;
    let urls: string[] = [];
    if (typeof place.Url_Photos_Menu === 'string') {
      try {
        urls = JSON.parse(place.Url_Photos_Menu);
      } catch {
        urls = [place.Url_Photos_Menu];
      }
    } else if (Array.isArray(place.Url_Photos_Menu)) {
      urls = place.Url_Photos_Menu;
    }

    if (urls.length === 0) {
      console.log(`ℹ️ No menu URLs for ${slug}`);
      continue;
    }

    const destDir = path.join(baseDir, slug);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    console.log(`⏳ Downloading ${urls.length} files for ${slug}...`);
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const ext = path.extname(url.split('?')[0]).toLowerCase() || '.png';
      const destPath = path.join(destDir, `menu_${i}${ext}`);
      try {
        await downloadFile(url, destPath);
        console.log(`   ✅ Downloaded menu_${i}${ext} for ${slug}`);
      } catch (err: any) {
        console.error(`   ❌ Failed to download ${url}:`, err.message);
      }
    }
  }
  console.log('🏁 Menu downloads finished!');
}

main().catch(console.error);
