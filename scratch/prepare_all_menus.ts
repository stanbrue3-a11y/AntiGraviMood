import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const targetSlugs = [
  'mosugo-mory-sacko-14',
  'mosuke-par-mory-sacko',
  'mr-chow-cuisine-chinoise',
  'oggi',
  'les-tontons',
  'les-fauves-restaurant',
  'mr-chow-paris-14',
  'mian-fan',
  'maison-binder',
  'hanoi-quan-montparnasse',
  'les-petits-parisiens-paris-14',
  'ma-shi-ta',
  'madame-ngo',
  'maison-peret'
];

async function downloadFile(url: string, dest: string) {
  const writer = fs.createWriteStream(dest);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function main() {
  console.log(`📡 Fetching ${targetSlugs.length} places from Supabase...`);
  const { data: places, error } = await supabase
    .from('places')
    .select('name, slug, Url_Photos_Menu')
    .in('slug', targetSlugs);

  if (error) {
    console.error('❌ Error fetching places:', error);
    return;
  }

  console.log(`Found ${places.length} places in DB. Starting prep...`);

  for (const place of places) {
    const slug = place.slug;
    console.log(`\n----------------------------------------\nProcessing: ${place.name} (${slug})`);

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
      console.log(`⚠️ No menus found in Url_Photos_Menu for ${slug}. Skipping.`);
      continue;
    }

    // Create temp directory
    const tempDir = path.join(__dirname, `../scratch/tmp_menu_downloads/${slug}`);
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    console.log(`⏳ Downloading ${urls.length} files to: ${tempDir}`);
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const ext = path.extname(url.split('?')[0]) || '.png';
      const destName = `menu_${i}${ext}`;
      const destPath = path.join(tempDir, destName);
      try {
        await downloadFile(url, destPath);
        console.log(`  - Downloaded ${destName}`);
      } catch (err) {
        console.error(`  ❌ Error downloading ${url}:`, err);
      }
    }

    // Create JSON template
    const scratchPayloadPath = path.join(__dirname, `../scratch/${slug}_payload.json`);
    if (!fs.existsSync(scratchPayloadPath)) {
      const blankPayload = {
        on_mange_quoi_ici: "Cuisine [adjectif/type]. [Plat 1] & [Plat 2].",
        Url_Photos_Menu: urls,
        pint_price: null,
        cocktail_price: null,
        coffee_price: null,
        wine_glass: null,
        menu_items: [
          {
            category_type: "starter",
            display_label: "Entrées",
            items: [
              {
                name: "Exemple Entrée",
                price_cents: 1200,
                description: "Description optionnelle",
                is_highlight: false
              }
            ]
          },
          {
            category_type: "main",
            display_label: "Plats",
            items: [
              {
                name: "Exemple Plat",
                price_cents: 1800,
                description: "Description optionnelle",
                is_highlight: false
              }
            ]
          }
        ]
      };
      fs.writeFileSync(scratchPayloadPath, JSON.stringify(blankPayload, null, 2), 'utf8');
      console.log(`📝 Generated blank template at: ${scratchPayloadPath}`);
    } else {
      console.log(`ℹ️ Template already exists at: ${scratchPayloadPath}`);
    }
  }

  console.log('\n✅ Done preparing all menus and templates!');
}

main().catch(console.error);
