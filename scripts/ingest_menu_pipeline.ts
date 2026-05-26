import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import readline from 'readline';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Interactive prompt helper
function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}



// File download helper
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
  const args = process.argv.slice(2);
  const slug = args[0];

  if (!slug) {
    console.error('❌ Usage: npm run ingest-menu <restaurant-slug> [--yes|-y]');
    process.exit(1);
  }

  const autoConfirm = args.includes('--yes') || args.includes('-y');

  console.log(`\n=================== STARTING INGESTION PIPELINE FOR ${slug.toUpperCase()} ===================`);

  // 1. Fetch place details from Supabase
  const { data: place, error: fetchErr } = await supabase
    .from('places')
    .select('id, name, slug, description, insider_tip, status, Url_Photos_Menu')
    .eq('slug', slug)
    .single();

  if (fetchErr || !place) {
    console.error(`❌ Place with slug "${slug}" not found in database.`);
    process.exit(1);
  }

  console.log(`📍 Found place: "${place.name}"`);
  console.log(`📊 Current Status: ${place.status}`);
  
  if (!place.description || !place.insider_tip) {
    console.warn(`⚠️  WARNING: Phase 1 details are missing (description or insider_tip is empty).`);
    if (!autoConfirm) {
      const proceed = await askQuestion('Do you want to proceed with Phase 2 anyway? (y/n): ');
      if (proceed.toLowerCase() !== 'y') {
        console.log('Aborting.');
        process.exit(0);
      }
    } else {
      console.log('Auto-confirm (--yes): Proceeding despite missing Phase 1 details.');
    }
  }

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
    console.error(`🛑 ERREUR FATALE : Aucun menu trouvé dans 'Url_Photos_Menu'. Téléversez d'abord la carte via le dashboard (http://localhost:4500).`);
    process.exit(1);
  }

  // --- SÉCURITÉ STRUCTURELLE : Les menus doivent provenir de localhost:4500 / Supabase Storage place-media/menus/[slug]
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
  const bucketPrefix = `/storage/v1/object/public/place-media/menus/${slug}/`;
  for (const url of urls) {
    const isSupabaseUrl = url.startsWith(supabaseUrl);
    const containsBucketPath = url.includes(bucketPrefix);
    if (!isSupabaseUrl || !containsBucketPath) {
      console.error(`🛑 SÉCURITÉ : L'URL du menu est invalide ou externe : "${url}".`);
      console.error(`   Tous les menus doivent être téléversés via le dashboard à l'adresse http://localhost:4500.`);
      console.error(`   Format attendu : "${supabaseUrl}/storage/v1/object/public/place-media/menus/${slug}/[nom-du-fichier]"`);
      process.exit(1);
    }
  }

  console.log(`📸 Found ${urls.length} menu files/images attached to this place.`);

  // 2. Download files locally
  const tempDir = path.join(__dirname, `../scratch/tmp_menu_downloads/${slug}`);
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  console.log(`⏳ Downloading files to temporary directory: ${tempDir}...`);
  const localFiles: string[] = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const ext = path.extname(url.split('?')[0]) || '.png';
    const destName = `menu_${i}${ext}`;
    const destPath = path.join(tempDir, destName);
    try {
      await downloadFile(url, destPath);
      localFiles.push(destPath);
      console.log(`  - Downloaded file ${i + 1}/${urls.length}: ${destName}`);
    } catch (err) {
      console.error(`  ❌ Error downloading ${url}:`, err);
    }
  }

  if (localFiles.length === 0) {
    console.error('❌ Failed to download any menu files.');
    process.exit(1);
  }

  const scratchPayloadPath = path.join(__dirname, `../scratch/${slug}_payload.json`);

  // Check if local manual payload exists
  if (!fs.existsSync(scratchPayloadPath)) {
    console.log(`\n📝 Local payload [${slug}_payload.json] not found.`);
    console.log(`ℹ️ Creating a blank template at: ${scratchPayloadPath}`);

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

    console.log(`\n👉 Please follow these steps:`);
    console.log(`1. Open the downloaded menu files in: ${tempDir}`);
    console.log(`2. Fill in the extracted items, prices, and description in the template: ${scratchPayloadPath}`);
    console.log(`3. Rerun this script: npm run ingest-menu ${slug}`);
    console.log(`\n⚠️ Exiting now so you can write the payload.`);
    process.exit(0);
  }

  console.log(`📖 Loading existing payload from: ${scratchPayloadPath}`);
  let payload: any = null;
  try {
    const payloadContent = fs.readFileSync(scratchPayloadPath, 'utf8');
    payload = JSON.parse(payloadContent);
  } catch (err: any) {
    console.error(`❌ Failed to parse JSON from ${scratchPayloadPath}:`, err.message);
    process.exit(1);
  }

  // 5. Validation checks
  console.log('🔍 Running validation on parsed payload...');
  const onMangeQuoiPattern = /^Cuisine\s+[^.]+\.\s+[^&]+\s+&\s+[^&]+\.$/;
  const onMangeQuoi = payload.on_mange_quoi_ici ? payload.on_mange_quoi_ici.trim() : '';

  if (!onMangeQuoiPattern.test(onMangeQuoi)) {
    console.warn(`⚠️  WARNING: on_mange_quoi_ici does not strictly match the format: "Cuisine [adjectif/type]. [Plat 1] & [Plat 2]."`);
    console.warn(`   Received: "${onMangeQuoi}"`);
    console.warn(`   Should start with "Cuisine ", have exactly one "." separating cuisine, and exactly one "&" separating dishes.`);
  }

  // Write payload to scratch directory for inspection/tweaking
  fs.writeFileSync(scratchPayloadPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`💾 Suggested payload written to: [${slug}_payload.json](file://${scratchPayloadPath})`);

  // Count stats
  const categories = payload.menu_items || [];
  let totalItems = 0;
  console.log('\n📊 Extracted Categories and Items:');
  categories.forEach((cat: any) => {
    const itemsCount = cat.items?.length || 0;
    totalItems += itemsCount;
    console.log(`  - [${cat.category_type}] ${cat.display_label}: ${itemsCount} items`);
  });

  // Calculate main dish median price
  const mainPrices = categories
    .filter((c: any) => c.category_type === 'main')
    .flatMap((c: any) => c.items || [])
    .map((i: any) => i.price_cents)
    .filter((p: any) => typeof p === 'number' && p > 0)
    .sort((a: number, b: number) => a - b);

  let calculatedMedianCents: number | null = null;
  if (mainPrices.length > 0) {
    const mid = Math.floor(mainPrices.length / 2);
    if (mainPrices.length % 2 !== 0) {
      calculatedMedianCents = mainPrices[mid];
    } else {
      calculatedMedianCents = Math.round((mainPrices[mid - 1] + mainPrices[mid]) / 2);
    }
  }

  // Detect explicit pint price from items to verify no virtual scaling
  let detectedPintPrice: number | null = null;
  const beerKeywords = /\b(?:bières?|beers?|pression|draft|cervoise|stout|pils|lager|blonde|blanche|brune|ipa|ale|asahi|kirin|singha|tsingtao|heineken|1664|almaza|corona|budweiser|carlsberg|guinness|leffe|duvel|chimay|chouffe|desperados)\b/i;
  const alcoholCategory = categories.find((c: any) => c.category_type === 'alcohol_drink');
  const realPintPrices: number[] = [];

  const extractVolumeCl = (text: string): number | null => {
    const regex = /\b(\d+(?:[.,]\d+)?)\s*(cl|ml|l)\b/i;
    const match = text.match(regex);
    if (match) {
      const val = parseFloat(match[1].replace(',', '.'));
      const unit = match[2].toLowerCase();
      if (unit === 'cl') return val;
      if (unit === 'ml') return val / 10;
      if (unit === 'l') return val * 100;
    }
    return null;
  };

  if (alcoholCategory && alcoholCategory.items) {
    for (const item of alcoholCategory.items) {
      const name = item.name || '';
      const desc = item.description || '';
      const fullText = `${name} ${desc}`;
      if (beerKeywords.test(fullText)) {
        const price = item.price_cents;
        if (typeof price === 'number' && price > 0) {
          const volumeCl = extractVolumeCl(fullText);
          const hasPintKeyword = /\b(?:pinte|pint)\b/i.test(fullText);
          const isExplicit50cl = volumeCl === 50;
          const isPintByName = hasPintKeyword && (volumeCl === null || volumeCl === 50);
          if (isExplicit50cl || isPintByName) {
            realPintPrices.push(price);
          }
        }
      }
    }
  }
  if (realPintPrices.length > 0) {
    detectedPintPrice = Math.min(...realPintPrices);
  }

  console.log('\n💶 Price Cache Summary:');
  console.log(`  - on_mange_quoi_ici: "${payload.on_mange_quoi_ici}"`);
  console.log(`  - Median main dish price: ${calculatedMedianCents ? calculatedMedianCents / 100 : 'N/A'}€`);
  console.log(`  - Pint price (Explicit 50cl): ${detectedPintPrice ? detectedPintPrice / 100 + '€' : (payload.pint_price ? payload.pint_price + '€ (payload float)' : 'null')}`);
  console.log(`  - Cocktail price: ${payload.cocktail_price ? payload.cocktail_price + '€' : 'null'}`);
  console.log(`  - Coffee price: ${payload.coffee_price ? payload.coffee_price + '€' : 'null'}`);
  console.log(`  - Wine glass price: ${payload.wine_glass ? payload.wine_glass + '€' : 'null'}`);

  console.log(`\n👉 Please take a moment to review the generated payload in the scratch directory:`);
  console.log(`   File: ${scratchPayloadPath}`);
  console.log(`   You can edit values in this file manually if needed.`);

  // 6. Interactive Confirmation Prompt
  if (!autoConfirm) {
    const ans = await askQuestion('\nDo you want to inject this menu into the database now? (y/n): ');
    if (ans.toLowerCase() !== 'y') {
      console.log('Ingestion cancelled. You can review the payload file, edit it, and ingest manually later.');
      process.exit(0);
    }
  } else {
    console.log('Auto-confirm (--yes): Injecting menu into the database...');
  }

  // Load final payload from file (in case the user manually edited it during verification)
  const finalPayloadContent = fs.readFileSync(scratchPayloadPath, 'utf8');
  const finalPayload = JSON.parse(finalPayloadContent);

  // Validate on_mange_quoi_ici again
  if (!onMangeQuoiPattern.test(finalPayload.on_mange_quoi_ici?.trim())) {
    console.error(`🛑 ERROR: Cannot ingest. on_mange_quoi_ici must strictly match format: "Cuisine [adjectif/type]. [Plat 1] & [Plat 2]."`);
    process.exit(1);
  }

  // Validate final Url_Photos_Menu security
  let finalUrls: string[] = [];
  if (Array.isArray(finalPayload.Url_Photos_Menu)) {
    finalUrls = finalPayload.Url_Photos_Menu;
  } else if (typeof finalPayload.Url_Photos_Menu === 'string') {
    try {
      finalUrls = JSON.parse(finalPayload.Url_Photos_Menu);
    } catch {
      finalUrls = [finalPayload.Url_Photos_Menu];
    }
  }

  if (finalUrls.length === 0) {
    console.error(`🛑 SÉCURITÉ : Aucun menu trouvé dans le payload final.`);
    process.exit(1);
  }

  for (const url of finalUrls) {
    const isSupabaseUrl = url.startsWith(supabaseUrl);
    const containsBucketPath = url.includes(bucketPrefix);
    if (!isSupabaseUrl || !containsBucketPath) {
      console.error(`🛑 SÉCURITÉ : L'URL du menu dans le payload final est invalide : "${url}".`);
      console.error(`   Tous les menus doivent être téléversés via le dashboard à l'adresse http://localhost:4500.`);
      process.exit(1);
    }
  }

  // 7. Ingestion Logic
  console.log(`\n⛓️  Ingesting menu photos, categories and items into Supabase...`);
  const placeId = place.id;

  // Query existing photos in database
  const { data: dbPhotos } = await supabase
    .from('menu_photos')
    .select('*')
    .eq('place_id', placeId);

  // Normalize photos from payload
  const payloadPhotos: Array<{ url: string; photo_date: string | null; raw_date_label: string | null; id_alias?: string }> = [];
  if (Array.isArray(finalPayload.menu_photos)) {
    payloadPhotos.push(...finalPayload.menu_photos);
  } else if (Array.isArray(finalPayload.Url_Photos_Menu)) {
    for (const item of finalPayload.Url_Photos_Menu) {
      if (typeof item === 'string') {
        payloadPhotos.push({ url: item, photo_date: null, raw_date_label: null });
      } else if (item && typeof item === 'object' && item.url) {
        payloadPhotos.push({
          url: item.url,
          photo_date: item.photo_date || null,
          raw_date_label: item.raw_date_label || null,
          id_alias: item.id_alias
        });
      }
    }
  }

  const photoIdsToKeep = new Set<string>();
  const aliasToUuid: Record<string, string> = {};

  for (const p of payloadPhotos) {
    let dbPhoto = dbPhotos?.find(x => x.url === p.url);
    let photoId: string;

    if (dbPhoto) {
      photoId = dbPhoto.id;
      // Update metadata if changed
      if (dbPhoto.photo_date !== p.photo_date || dbPhoto.raw_date_label !== p.raw_date_label) {
        await supabase
          .from('menu_photos')
          .update({
            photo_date: p.photo_date || null,
            raw_date_label: p.raw_date_label || null
          })
          .eq('id', photoId);
      }
    } else {
      const { data: newPhoto, error: photoErr } = await supabase
        .from('menu_photos')
        .insert({
          place_id: placeId,
          url: p.url,
          photo_date: p.photo_date || null,
          raw_date_label: p.raw_date_label || null
        })
        .select()
        .single();
      if (photoErr) throw photoErr;
      photoId = newPhoto.id;
    }

    photoIdsToKeep.add(photoId);
    if (p.id_alias) {
      aliasToUuid[p.id_alias] = photoId;
    }
    aliasToUuid[p.url] = photoId; // Fallback to URL mapping
  }

  // Clean up orphaned photos
  if (dbPhotos) {
    for (const dbPhoto of dbPhotos) {
      if (!photoIdsToKeep.has(dbPhoto.id)) {
        await supabase.from('menu_photos').delete().eq('id', dbPhoto.id);
        console.log(`  🧹 Deleted orphaned menu photo: ${dbPhoto.url}`);
      }
    }
  }

  const payloadCategories = finalPayload.menu_items || [];

  const { data: dbCategories } = await supabase
    .from('menu_categories')
    .select('*')
    .eq('place_id', placeId);
  const { data: dbItems } = await supabase
    .from('menu_items')
    .select('*')
    .eq('place_id', placeId);

  const categoryIdsToKeep = new Set<string>();
  const itemIdsToKeep = new Set<string>();

  let sortOrder = 1;
  for (const payCat of payloadCategories) {
    const catType = payCat.category_type;
    const displayLabel = payCat.display_label;
    const catPhotoAlias = payCat.menu_photo_alias || payCat.menu_photo_url || null;
    const resolvedCatPhotoId = catPhotoAlias ? (aliasToUuid[catPhotoAlias] || null) : null;

    let dbCat = dbCategories?.find(
      (c) => c.category_type === catType && c.display_label === displayLabel
    );
    let categoryId: string;

    if (dbCat) {
      categoryId = dbCat.id;
      categoryIdsToKeep.add(categoryId);
      await supabase
        .from('menu_categories')
        .update({ sort_order: sortOrder })
        .eq('id', categoryId);
    } else {
      const { data: newCat, error: catErr } = await supabase
        .from('menu_categories')
        .insert({
          place_id: placeId,
          category_type: catType,
          display_label: displayLabel,
          sort_order: sortOrder,
        })
        .select()
        .single();
      if (catErr) throw catErr;
      categoryId = newCat.id;
      categoryIdsToKeep.add(categoryId);
    }
    sortOrder++;

    for (const payItem of payCat.items || []) {
      const itemName = payItem.name;
      const newPrice = payItem.price_cents || null;
      const newHhPrice = payItem.happy_hour_price_cents || null;
      const description = payItem.description || null;
      const isHighlight = payItem.is_highlight || false;

      // Handle item-specific photo metadata with inheritance
      const itemPhotoAlias = payItem.menu_photo_alias || payItem.menu_photo_url || null;
      const resolvedItemPhotoId = itemPhotoAlias ? (aliasToUuid[itemPhotoAlias] || null) : null;
      const finalItemPhotoId = resolvedItemPhotoId || resolvedCatPhotoId || null;

      let dbItem = dbItems?.find(
        (i) => i.name.toLowerCase().trim() === itemName.toLowerCase().trim()
      );
      let itemId: string;

      if (dbItem) {
        itemId = dbItem.id;
        itemIdsToKeep.add(itemId);

        const oldPrice = dbItem.price_cents;

        // Inflation Ledger Logging
        if (oldPrice !== newPrice) {
          await supabase.from('menu_price_history').insert({
            menu_item_id: itemId,
            place_id: placeId,
            item_name: itemName,
            old_price_cents: oldPrice,
            new_price_cents: newPrice,
          });
          console.log(
            `  📈 [INFLATION] Price changed for "${itemName}" : ${oldPrice ? oldPrice / 100 : 'null'}€ -> ${newPrice ? newPrice / 100 : 'null'}€`
          );
        }

        // Update item details
        const { error: itemUpdateErr } = await supabase
          .from('menu_items')
          .update({
            category_id: categoryId,
            price_cents: newPrice,
            happy_hour_price_cents: newHhPrice,
            description: description,
            is_highlight: isHighlight,
            menu_photo_id: finalItemPhotoId,
          })
          .eq('id', itemId);
        if (itemUpdateErr) throw itemUpdateErr;
      } else {
        // Create new item
        const { data: newItem, error: itemErr } = await supabase
          .from('menu_items')
          .insert({
            category_id: categoryId,
            place_id: placeId,
            name: itemName,
            description: description,
            price_cents: newPrice,
            happy_hour_price_cents: newHhPrice,
            is_highlight: isHighlight,
            menu_photo_id: finalItemPhotoId,
          })
          .select()
          .single();
        if (itemErr) throw itemErr;

        itemId = newItem.id;
        itemIdsToKeep.add(itemId);

        // Initial price entry in ledger
        await supabase.from('menu_price_history').insert({
          menu_item_id: itemId,
          place_id: placeId,
          item_name: itemName,
          old_price_cents: null,
          new_price_cents: newPrice,
        });
      }
    }
  }

  // Clean orphaned items & categories
  if (dbItems) {
    for (const dbItem of dbItems) {
      if (!itemIdsToKeep.has(dbItem.id)) {
        await supabase.from('menu_items').delete().eq('id', dbItem.id);
        console.log(`  🧹 Deleted orphaned item: ${dbItem.name}`);
      }
    }
  }
  if (dbCategories) {
    for (const dbCat of dbCategories) {
      if (!categoryIdsToKeep.has(dbCat.id)) {
        await supabase.from('menu_categories').delete().eq('id', dbCat.id);
        console.log(`  🧹 Deleted orphaned category: ${dbCat.display_label}`);
      }
    }
  }

  // Final cache values calculations
  const finalMedianCents =
    calculatedMedianCents ||
    finalPayload.plat_median_cents ||
    (finalPayload.dish_price ? Math.round(finalPayload.dish_price * 100) : null);

  let finalPintPriceCents = finalPayload.pint_price ? Math.round(finalPayload.pint_price * 100) : null;
  if (finalPayload.pint_price === undefined && detectedPintPrice) {
    finalPintPriceCents = detectedPintPrice;
  }

  const finalCocktailPriceCents = finalPayload.cocktail_price
    ? Math.round(finalPayload.cocktail_price * 100)
    : null;
  const finalCoffeePriceCents = finalPayload.coffee_price
    ? Math.round(finalPayload.coffee_price * 100)
    : null;
  const finalWineGlassCents = finalPayload.wine_glass
    ? Math.round(finalPayload.wine_glass * 100)
    : null;

  // Update Places Table (Caches & Status)
  const finalUrlsList = payloadPhotos.map(p => p.url);
  const { error: updatePlaceErr } = await supabase
    .from('places')
    .update({
      on_mange_quoi_ici: finalPayload.on_mange_quoi_ici,
      plat_median_cents: finalMedianCents,
      pint_price_cents: finalPintPriceCents,
      cocktail_price_cents: finalCocktailPriceCents,
      coffee_price_cents: finalCoffeePriceCents,
      wine_glass_cents: finalWineGlassCents,
      Url_Photos_Menu: finalUrlsList,
      menu_verified_at: new Date().toISOString(),
      status: 'PUBLISHED',
    })
    .eq('slug', slug);

  if (updatePlaceErr) throw updatePlaceErr;

  console.log(`\n🎉 SUCCESS! Menu ingested successfully, caches updated, and status set to PUBLISHED for "${place.name}".`);

  // Clean up downloaded files
  console.log('🧹 Cleaning up temporary downloads...');
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
    console.log('   Temp directory deleted.');
  } catch (err) {
    console.warn('   Failed to clean up temp downloads:', err);
  }
}

main().catch(console.error);
