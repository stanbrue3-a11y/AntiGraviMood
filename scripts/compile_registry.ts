import fs from 'fs';
import path from 'path';

// CRITICAL: dotenv MUST load before any registry imports.
// ES `import` is hoisted above require(), so we use require() for the registry.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

import { SurgicalPlace } from '../src/data/registry/type-definition';
import { SurgicalPlaceSchema } from '../src/schemas/place.validation';
const allPlaces: SurgicalPlace[] = require('../src/data/registry/index').default;

const OUTPUT_PATH = path.join(__dirname, '../assets/moodmap_v47.sql');
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
 * (Strict Copy of the App Schema)
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
    ai_insights_json TEXT,
    real_talk_json TEXT,
    description TEXT,
    insider_tip TEXT,
    nearest_metro TEXT,
    metro_line_json TEXT,
    vibes_json TEXT,
    google_id TEXT
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

/**
 * NORMALIZED PRICE HELPER 🎯
 * Returns the reference drink price based on subcategory.
 * This is what the price slider filters on.
 */
function getNormalizedPrice(p: SurgicalPlace): number {
  const sub = p.subcategory.join(' ').toLowerCase();
  const isWineBar = sub.includes('vin') || sub.includes('cave') || sub.includes('nature');
  const isCocktailBar =
    sub.includes('cocktail') ||
    sub.includes('speakeasy') ||
    sub.includes('mixo') ||
    sub.includes('palace');

  if (isWineBar && p.pricing.wine_glass) return p.pricing.wine_glass;
  if (isCocktailBar && p.pricing.cocktail_price) return p.pricing.cocktail_price;
  if (p.pricing.pint_price) return p.pricing.pint_price;
  if (p.pricing.wine_glass) return p.pricing.wine_glass;
  if (p.pricing.cocktail_price) return p.pricing.cocktail_price;
  return p.pricing.index_price || p.pricing.dish_price || 0;
}

/**
 * COMPILATION LOGIC ⚙️
 */
console.log(`🧬 [DaC] Starting Compilation of ${allPlaces.length} places...`);

const slugs = new Set<string>();
const coords: { lat: number; lng: number; name: string }[] = [];
let errorCount = 0;

let sqlOutput = SCHEMA_SQL + '\n-- DATA INJECTION --\n';

allPlaces.forEach((p, index) => {
  // 0. VALIDATION (The "Blindage") 🛡️
  const result = SurgicalPlaceSchema.safeParse(p);
  if (!result.success) {
    console.error(`❌ [Validation Error] ${p.name || 'Unknown'} (Index: ${index}):`);
    result.error.issues.forEach((issue) => {
      console.error(`   - ${issue.path.join('.')}: ${issue.message}`);
    });
    errorCount++;
    return;
  }

  // 1. DUPLICATE DETECTION 👯
  if (slugs.has(p.slug)) {
    console.error(`❌ [Duplicate Slug] ${p.name} (${p.slug}) already exists!`);
    errorCount++;
    return;
  }
  slugs.add(p.slug);

  // Proximity check (approx 10 meters)
  const tooClose = coords.find(
    (c) => Math.abs(c.lat - p.location.lat) < 0.0001 && Math.abs(c.lng - p.location.lng) < 0.0001,
  );
  if (tooClose) {
    console.warn(
      `⚠️ [Proximity Warning] ${p.name} is very close to ${tooClose.name}. Possible duplicate?`,
    );
  }
  coords.push({ lat: p.location.lat, lng: p.location.lng, name: p.name });

  // 2. CALCULATED FIELDS
  const MOOD_COLORS: Record<string, string> = {
    chill: '#8ccaf7',
    festif: '#ffab60',
    culturel: '#c499ff',
  };
  let dominant_mood = 'chill';
  if (p.moods) {
    const { festif, chill, culturel } = p.moods;
    if (festif > chill && festif > culturel) dominant_mood = 'festif';
    else if (culturel > chill && culturel > festif) dominant_mood = 'culturel';
  }
  const main_color = MOOD_COLORS[dominant_mood] || MOOD_COLORS.chill;

  // 2. MAPPING (SurgicalPlace (TS) -> DB Schema)
  const values = [
    valueOrNull(p.id),
    valueOrNull(p.name),
    valueOrNull(p.slug),
    valueOrNull(p.category),
    valueOrNull(p.subcategory.join(', ')), // Comma string for simple SQL filters

    // Wait, old script: `valueOrNull(p.subcategory)`. If p.subcategory was array in JSON, `valueOrNull` would format as string?
    // Let's check old script lines 9-10. `JSON.parse`.
    // If subcategory is array in TS, we should probably store as Clean text or JSON.
    // In TS definition subcategory is `string[]`.
    // Let's store as simple comma string for `subcategory` column for simple filtering, AND json in `categories_json`.
    // Actually, looking at old GenerateDB: `valueOrNull` for subcategory. If it's an array, `toString()` is called? No specific handler.
    // Let's be safer: JSON stringify it if array.
    // Or better: join by space for old FTS compatibility?
    // Let's use `p.subcategory.join(' ')` for the text column.
    valueOrNull(dominant_mood),
    valueOrNull(p.location.lat),
    valueOrNull(p.location.lng),
    valueOrNull(p.location.arrondissement),
    valueOrNull(p.location.address),

    valueOrNull(main_color),
    valueOrNull('pin'), // map_icon

    valueOrNull(p.verified),
    valueOrNull(p.google_rating || 0),
    valueOrNull(0), // user_ratings_total

    valueOrNull(p.images.hero),
    valueOrNull(p.instagram_handle),

    valueOrNull(getNormalizedPrice(p)), // budget_avg = normalized reference price
    valueOrNull(p.pricing.is_free),
    valueOrNull('€'), // budget_unit

    valueOrNull(p.pricing.pint_price),
    valueOrNull(p.pricing.cocktail_price),
    valueOrNull(p.pricing.wine_glass),
    valueOrNull(p.pricing.coffee_price),
    valueOrNull(p.pricing.dish_price),

    valueOrNull(50), // percentile

    // JSON BLOBS
    jsonValue(p.moods), // mood_scores_json
    jsonValue({}), // social_json
    jsonValue([p.category, ...p.subcategory]), // categories_json
    // 🕐 STRUCTURED HOURS JSON (for expandable UI)
    jsonValue({
      standard: p.practical.opening_hours_raw || 'Voir sur place',
      display: p.practical.opening_hours_raw?.split('\n')[0] || 'Voir sur place',
      detailed: p.practical.opening_hours_raw || '',
      is_open_now: false, // Computed at runtime
    }),
    jsonValue({
      ...p.practical,
      terrace: p.practical.terrace ?? false,
      happy_hour: p.pricing.hh_time || null,
    }), // editorial_json (includes terrace + happy_hour for badges)
    // 💰 FULL PRICING BLOB — single source of truth for all prices
    jsonValue({
      ...p.pricing,
      budget_avg: getNormalizedPrice(p),
      type: p.category === 'café' ? 'cafe' : p.category,
      menu_items: p.pricing.menu_items || [],
      // HH prices (normalize field names for PricingBase)
      pint_hh: p.pricing.hh_pint,
      cocktail_hh: p.pricing.hh_cocktail,
      wine_hh: p.pricing.hh_wine,
      hh_time: p.pricing.hh_time,
    }),
    jsonValue(p.images), // media_json
    jsonValue(null), // ai_insights
    jsonValue({
      insider_tip: p.insider_tip,
      specials: p.specials,
      expert_catchline: p.expert_catchline, // Include master catchline
    }), // real_talk_json (Repurposed for Structured Content)

    valueOrNull(p.description),
    valueOrNull(p.insider_tip),
    valueOrNull(p.location.nearest_metro),
    jsonValue(p.location.metro_lines),
    jsonValue([]), // vibes_json
    valueOrNull(p.location.google_id), // google_id
  ];

  sqlOutput += `INSERT INTO places VALUES (${values.join(', ')});\n`;

  // 3. FTS INDEX
  const ftsValues = [
    valueOrNull(p.id),
    valueOrNull(p.name),
    valueOrNull(p.category),
    valueOrNull(p.subcategory.join(' ')),
    valueOrNull(p.location.address),
    valueOrNull(''), // vibes
    valueOrNull(p.description),
  ];
  sqlOutput += `INSERT INTO places_fts VALUES (${ftsValues.join(', ')});\n`;
});

// Final Report
if (errorCount > 0) {
  console.error(
    `\n🛑 [DaC] Compilation aborted with ${errorCount} errors. Please fix them before proceeding.`,
  );
  process.exit(1);
}

// Write result
fs.writeFileSync(OUTPUT_PATH, sqlOutput);
console.log(`✅ [DaC] Successfully generated init.sql with ${allPlaces.length} places.`);

// 4. BINARY PACKAGING (The Missing Link) 📦
const DB_PATH = './assets/moodmap_v47.db';
console.log('📦 [DaC] Packaging into SQLite Binary...');

try {
  if (fs.existsSync(DB_PATH)) {
    fs.unlinkSync(DB_PATH); // Delete old DB
  }

  // Use system sqlite3 to build the DB from SQL
  require('child_process').execSync(`sqlite3 "${DB_PATH}" < "${OUTPUT_PATH}"`);
  console.log(`🚀 [DaC] moodmap_current.db regenerated successfully! (${allPlaces.length} places)`);
} catch (e) {
  console.error('❌ [DaC] Failed to package DB:', e);
  // Fallback: If sqlite3 is not in PATH, user must do it manually, but on Mac it should be there.
}
