import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// CRITICAL: dotenv MUST load before any registry imports.
// ES `import` is hoisted above require(), so we use require() for the registry.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

import { SurgicalPlace } from '../src/data/registry/type-definition';
import { SurgicalPlaceSchema } from '../src/schemas/place.validation';
import { PriceEngine } from '../src/lib/pricing/PriceEngine';
const allPlaces: SurgicalPlace[] = require('../src/data/registry/index').default;

const OUTPUT_PATH = path.join(__dirname, '../assets/moodmap_current.sql');
if (fs.existsSync(OUTPUT_PATH)) fs.unlinkSync(OUTPUT_PATH);

/**
 * SQL HELPER FUNCTIONS 🛠️
 */
const escape = (str: string): string => {
  return str.replace(/'/g, "''");
};

const valueOrNull = (val: unknown): string => {
  if (val === undefined || val === null) return 'NULL';
  if (typeof val === 'string') return `'${escape(val)}'`;
  if (typeof val === 'boolean') return val ? '1' : '0';
  if (typeof val === 'number') return val.toString();
  return `'${val}'`;
};

const jsonValue = (val: unknown): string => {
  if (val === undefined || val === null) return 'NULL';
  return `'${escape(JSON.stringify(val))}'`;
};

/**
 * SCHEMA DEFINITION 🏛️
 */
const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS places (
    id TEXT PRIMARY KEY,
    name TEXT,
    slug TEXT,
    category TEXT,
    subcategory TEXT,
    dominant_mood TEXT,
    lat REAL,
    lng REAL,
    arrondissement INTEGER,
    address TEXT,
    main_color TEXT,
    map_icon TEXT,
    verified INTEGER,
    rating REAL,
    user_ratings_total INTEGER,
    hero_image TEXT,
    instagram_handle TEXT,
    budget_avg REAL,
    is_free INTEGER,
    budget_unit TEXT,
    pint_price REAL,
    cocktail_price REAL,
    wine_glass REAL,
    coffee_price REAL,
    main_dish_price REAL,
    category_percentile INTEGER,
    mood_scores_json TEXT,
    social_json TEXT,
    categories_json TEXT,
    hours_json TEXT,
    editorial_json TEXT,
    pricing_json TEXT,
    media_json TEXT,
    google_photos_json TEXT,
    ai_insights_json TEXT,
    real_talk_json TEXT,
    description TEXT,
    insider_tip TEXT,
    nearest_metro TEXT,
    metro_line_json TEXT,
    vibes_json TEXT,
    google_id TEXT,
    michelin_stars INTEGER
);

CREATE TABLE IF NOT EXISTS moments (
    id TEXT PRIMARY KEY,
    place_id TEXT,
    place_name TEXT,
    user_id TEXT,
    content TEXT,
    media_url TEXT,
    media_type TEXT,
    created_at INTEGER,
    mood TEXT,
    likes INTEGER,
    is_liked_by_me INTEGER,
    reactions_json TEXT
);

CREATE VIRTUAL TABLE IF NOT EXISTS places_fts USING fts5(
    id, name, category, subcategory, address, vibes, description
);

CREATE INDEX IF NOT EXISTS idx_places_arrondissement ON places(arrondissement);
CREATE INDEX IF NOT EXISTS idx_places_mood ON places(dominant_mood);
CREATE INDEX IF NOT EXISTS idx_places_category ON places(category);
CREATE INDEX IF NOT EXISTS idx_places_percentile ON places(category_percentile);
`;

function getNormalizedPrice(p: SurgicalPlace, effectivePricing: any): number {
  const drinkType = PriceEngine.resolveDrinkType(p.category, p.subcategory);
  return PriceEngine.getReferencePrice(effectivePricing, drinkType) || 0;
}

function calculateMedianDishPrice(menuItems: any[] | undefined): number | null {
  if (!menuItems || menuItems.length === 0) return null;

  let prices: number[] = [];
  let foundMainDish = false;

  menuItems.forEach(cat => {
    if (cat.category_type === 'main') {
      cat.items.forEach((item: any) => {
        const priceNum = item.price_cents ? item.price_cents / 100 : parseFloat((item.price || '').replace('€', '').replace(',', '.') || '0');
        // Minimum threshold for a "main" item depends on category, but 7€ is a safe floor
        if (!isNaN(priceNum) && priceNum >= 7) { 
          prices.push(priceNum); 
          foundMainDish = true; 
        }
      });
    }
  });

  if (!foundMainDish || prices.length < 3) {
    menuItems.forEach(cat => {
      if (cat.category_type === 'sharing' || cat.category_type === 'starter') {
        cat.items.forEach((item: any) => {
          const priceNum = item.price_cents ? item.price_cents / 100 : parseFloat((item.price || '').replace('€', '').replace(',', '.') || '0');
          if (!isNaN(priceNum) && priceNum >= 4) { 
            prices.push(priceNum); 
          }
        });
      }
    });
  }

  if (prices.length === 0) return null;
  prices.sort((a, b) => a - b);
  const mid = Math.floor(prices.length / 2);
  return prices.length % 2 !== 0 ? prices[mid] : (prices[mid - 1] + prices[mid]) / 2;
}

function processImagesForDB(images: any) {
  if (!images) return null;
  return { ...images };
}

console.log(`🧬 [DaC] Starting Compilation of ${allPlaces.length} places...`);

const slugs = new Set<string>();
const coords: { lat: number; lng: number; name: string }[] = [];
let errorCount = 0;
let sqlOutput = SCHEMA_SQL + '\n-- DATA INJECTION --\n';

allPlaces.forEach((p, index) => {
  if (!p) {
    console.error(`❌ [Critical Error] Place at index ${index} is undefined!`);
    if (index > 0) console.error(`   - Previous place was: ${allPlaces[index-1]?.name} (${allPlaces[index-1]?.slug})`);
    errorCount++;
    return;
  }
  const medianDishPrice = calculateMedianDishPrice(p.pricing?.menu_items);
  const finalDishPrice = p.pricing?.force_manual_dish_price ? p.pricing.dish_price : (medianDishPrice ?? p.pricing?.dish_price);
  const effectivePricing = { ...p.pricing, dish_price: finalDishPrice };

  const result = SurgicalPlaceSchema.safeParse(p);
  if (!result.success) {
    console.error(`❌ [Validation Error] ${p.name || 'Unknown'} (Index: ${index}):`);
    result.error.issues.forEach((issue) => { console.error(`   - ${issue.path.join('.')}: ${issue.message}`); });
    errorCount++;
    return;
  }

  if (p.category === 'restaurant' && p.verified) {
    const isFixedMenu = p.pricing.menu_type === 'fixed';
    if (!isFixedMenu && p.pricing.menu_items && p.pricing.menu_items.length > 0) {
      const allItems = p.pricing.menu_items!.flatMap(cat => cat.items);
      const pricedItems = allItems.filter(item => {
          const priceNum = item.price_cents ? item.price_cents / 100 : parseFloat((item.price || '').replace('€', '').replace(',', '.') || '0');
          return priceNum > 0;
      });
      if (pricedItems.length < 10) {
        console.error(`🚫 [MENU GATE BLOCKED] ${p.name}: Only ${pricedItems.length} priced items. Scrape deeper.`);
        errorCount++; return;
      }
    }
  }

  if (slugs.has(p.slug)) { console.error(`❌ [Duplicate Slug] ${p.name} (${p.slug}) already exists!`); errorCount++; return; }
  slugs.add(p.slug);
  coords.push({ lat: p.location.lat, lng: p.location.lng, name: p.name });

  const MOOD_COLORS: Record<string, string> = { chill: '#8ccaf7', festif: '#ffab60', culturel: '#c499ff' };
  let dominant_mood = 'chill';
  if (p.moods) {
    const { festif, chill, culturel } = p.moods;
    if (festif > chill && festif > culturel) dominant_mood = 'festif';
    else if (culturel > chill && culturel > festif) dominant_mood = 'culturel';
  }
  const main_color = MOOD_COLORS[dominant_mood] || MOOD_COLORS.chill;

  const values = [
    valueOrNull(p.id), valueOrNull(p.name), valueOrNull(p.slug), valueOrNull(p.category),
    valueOrNull(p.subcategory.join(', ')), valueOrNull(dominant_mood),
    valueOrNull(p.location.lat), valueOrNull(p.location.lng), valueOrNull(p.location.arrondissement),
    valueOrNull(p.location.address), valueOrNull(main_color), valueOrNull('pin'),
    valueOrNull(p.verified), valueOrNull(p.google_rating || 0), valueOrNull(0),
    valueOrNull(processImagesForDB(p.images)?.hero), valueOrNull(p.instagram_handle),
    valueOrNull(getNormalizedPrice(p, effectivePricing)), valueOrNull(p.pricing.is_free), valueOrNull('€'),
    valueOrNull(PriceEngine.getReferencePrice(effectivePricing, 'pint')),
    valueOrNull(PriceEngine.getReferencePrice(effectivePricing, 'cocktail')),
    valueOrNull(PriceEngine.getReferencePrice(effectivePricing, 'wine')),
    valueOrNull(p.pricing.coffee_price), valueOrNull(effectivePricing.dish_price), valueOrNull(50),
    jsonValue(p.moods), jsonValue({}), jsonValue([p.category, ...p.subcategory]),
    jsonValue({
      standard: p.practical.opening_hours_raw?.replace(/ \| /g, '\n'),
      display: p.practical.opening_hours_raw?.replace(/ \| /g, '\n').split('\n')[0],
      detailed: p.practical.opening_hours_raw?.replace(/ \| /g, '\n')
    }),
    jsonValue({ ...p.practical, terrace: p.practical.terrace ?? false, happy_hour: p.pricing.hh_time || null }),
    jsonValue({ ...effectivePricing, menu_items: p.pricing.menu_items || [] }),
    jsonValue(processImagesForDB(p.images)), jsonValue(processImagesForDB(p.images)?.gallery || []),
    jsonValue(null), jsonValue({ insider_tip: p.insider_tip, specials: p.specials, expert_catchline: p.expert_catchline }),
    valueOrNull(p.description), valueOrNull(p.insider_tip), valueOrNull(p.location.nearest_metro),
    jsonValue(p.location.metro_lines), jsonValue([]), valueOrNull(p.location.google_id),
    valueOrNull(p.michelin_stars)
  ];

  const columns = [
    'id', 'name', 'slug', 'category', 'subcategory', 'dominant_mood', 'lat', 'lng', 'arrondissement', 'address',
    'main_color', 'map_icon', 'verified', 'rating', 'user_ratings_total', 'hero_image', 'instagram_handle',
    'budget_avg', 'is_free', 'budget_unit', 'pint_price', 'cocktail_price', 'wine_glass', 'coffee_price',
    'main_dish_price', 'category_percentile', 'mood_scores_json', 'social_json', 'categories_json',
    'hours_json', 'editorial_json', 'pricing_json', 'media_json', 'google_photos_json', 'ai_insights_json',
    'real_talk_json', 'description', 'insider_tip', 'nearest_metro', 'metro_line_json', 'vibes_json',
    'google_id', 'michelin_stars'
  ];

  sqlOutput += `INSERT INTO places (${columns.join(', ')}) VALUES (${values.join(', ')});\n`;
  sqlOutput += `INSERT INTO places_fts VALUES (${[valueOrNull(p.id), valueOrNull(p.name), valueOrNull(p.category), valueOrNull(p.subcategory.join(' ')), valueOrNull(p.location.address), valueOrNull(''), valueOrNull(p.description)].join(', ')});\n`;
});

if (errorCount > 0) { console.error(`\n🛑 [DaC] Compilation aborted with ${errorCount} errors.`); process.exit(1); }

fs.writeFileSync(OUTPUT_PATH, sqlOutput);
console.log(`✅ [DaC] Successfully generated init.sql with ${allPlaces.length} places.`);

const DB_PATH = './assets/moodmap.db';
const MANIFEST_PATH = './assets/db_manifest.json';
console.log('📦 [DaC] Packaging into SQLite Binary...');

try {
  const assetsDir = './assets';
  const oldDbFiles = fs.readdirSync(assetsDir).filter(f => /^moodmap_v\d+\.db$/.test(f));
  oldDbFiles.forEach(f => { fs.unlinkSync(`${assetsDir}/${f}`); console.log(`🗑️ Purged old DB: ${f}`); });
  if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);
  require('child_process').execSync(`sqlite3 "${DB_PATH}" < "${OUTPUT_PATH}"`);
  const dbBuffer = fs.readFileSync(DB_PATH);
  const hash = crypto.createHash('sha256').update(dbBuffer).digest('hex').slice(0, 16);
  const manifest = { hash, places_count: allPlaces.length, compiled_at: new Date().toISOString() };
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`🚀 [DaC] moodmap.db regenerated successfully! Hash: ${hash}`);
} catch (e) { console.error('❌ [DaC] Failed to package DB:', e); }
