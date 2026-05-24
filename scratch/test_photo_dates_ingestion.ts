import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slug = 'pny-gaite';

async function verify() {
  console.log(`\n=================== VERIFICATION: ${slug.toUpperCase()} ===================`);
  
  // 1. Write the test payload containing photo metadata and references
  const payloadPath = path.join(__dirname, `../scratch/${slug}_payload.json`);
  
  // Fetch current Url_Photos_Menu from database
  const { data: place, error: placeErr } = await supabase
    .from('places')
    .select('id, Url_Photos_Menu')
    .eq('slug', slug)
    .single();

  if (placeErr || !place) {
    console.error('❌ Failed to fetch place:', placeErr);
    return;
  }

  let urls: string[] = [];
  if (Array.isArray(place.Url_Photos_Menu)) {
    urls = place.Url_Photos_Menu;
  } else if (typeof place.Url_Photos_Menu === 'string') {
    urls = JSON.parse(place.Url_Photos_Menu);
  }

  if (urls.length < 2) {
    console.error('❌ PNY Gaite does not have enough menu photos to test split dates.');
    return;
  }

  // Create a structured menu_photos list
  const menuPhotos = [
    {
      id_alias: "burger_card_2025",
      url: urls[0],
      photo_date: "2025-01-15",
      raw_date_label: "Janvier 2025"
    },
    {
      id_alias: "drinks_card_2023",
      url: urls[1],
      photo_date: "2023-06-10",
      raw_date_label: "Juin 2023"
    }
  ];

  // If there are more photos, append them as well
  for (let i = 2; i < urls.length; i++) {
    menuPhotos.push({
      id_alias: `other_card_${i}`,
      url: urls[i],
      photo_date: null,
      raw_date_label: null
    });
  }

  // Read existing payload to preserve items, and replace menu_photos / references
  const existingPayload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
  
  const testPayload = {
    ...existingPayload,
    menu_photos: menuPhotos
  };

  // Associate the category "main" (Burgers) with 2025, and others with 2023
  if (testPayload.menu_items) {
    testPayload.menu_items.forEach((cat: any) => {
      if (cat.category_type === 'main') {
        cat.menu_photo_alias = "burger_card_2025";
      } else {
        cat.menu_photo_alias = "drinks_card_2023";
      }
    });
  }

  fs.writeFileSync(payloadPath, JSON.stringify(testPayload, null, 2), 'utf8');
  console.log(`📝 Wrote dated test payload to ${payloadPath}`);

  // 2. Run ingestion pipeline
  console.log('⏳ Running ingestion pipeline...');
  try {
    const ingestCmd = `yes | npx tsx scripts/ingest_menu_pipeline.ts ${slug}`;
    const output = execSync(ingestCmd, { cwd: path.join(__dirname, '..'), encoding: 'utf8' });
    console.log(output);
  } catch (err: any) {
    console.error('❌ Ingestion failed:', err.message);
    if (err.stdout) console.log(err.stdout);
    return;
  }

  // 3. Query database to verify relations
  console.log('🔍 Querying Supabase database to verify the relations...');
  
  const { data: photos, error: photosErr } = await supabase
    .from('menu_photos')
    .select('*')
    .eq('place_id', place.id);

  if (photosErr) {
    console.error('❌ Failed to fetch database menu_photos:', photosErr);
    return;
  }

  console.log(`\nFound ${photos.length} menu_photos in DB:`);
  photos.forEach(p => {
    console.log(`  - URL: ${p.url.substring(0, 60)}...`);
    console.log(`    Date: ${p.photo_date} | Label: ${p.raw_date_label}`);
  });

  const { data: items, error: itemsErr } = await supabase
    .from('menu_items')
    .select('name, price_cents, menu_photo_id, menu_categories(category_type, display_label)')
    .eq('place_id', place.id);

  if (itemsErr) {
    console.error('❌ Failed to fetch database menu_items:', itemsErr);
    return;
  }

  console.log(`\nSample menu items and their linked photos:`);
  items.slice(0, 10).forEach(item => {
    const matchedPhoto = photos.find(p => p.id === item.menu_photo_id);
    console.log(`  - [${(item.menu_categories as any)?.category_type}] ${item.name} (${item.price_cents / 100}€)`);
    if (matchedPhoto) {
      console.log(`    ↳ Source Photo Date: ${matchedPhoto.photo_date} (${matchedPhoto.raw_date_label})`);
    } else {
      console.log(`    ↳ Source Photo: NULL (No linked photo)`);
    }
  });

  // 4. Run quality audits
  console.log('\n🛡️ Running Quality Audit Bridge...');
  const auditCmd = `npx tsx scripts/agent_bridge.ts --audit ${slug}`;
  const auditOutput = execSync(auditCmd, { cwd: path.join(__dirname, '..'), encoding: 'utf8' });
  console.log(auditOutput);
}

verify().catch(console.error);
