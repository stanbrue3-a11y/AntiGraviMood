const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/pois.jsonl');
const outputPath = path.join(__dirname, '../assets/init.sql');

// REFACTOR: Use line-by-line reading for 10k scaling
const rawData = fs.readFileSync(dataPath, 'utf8');
const lines = rawData.split('\n').filter(l => l.trim().length > 0);
const places = lines.map(l => JSON.parse(l));

const escape = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/'/g, "''");
};

const valueOrNull = (val) => {
    if (val === undefined || val === null) return 'NULL';
    if (typeof val === 'string') return `'${escape(val)}'`;
    if (typeof val === 'boolean') return val ? 1 : 0;
    return val;
};

const jsonValue = (val) => {
    if (val === undefined || val === null) return 'NULL';
    return `'${escape(JSON.stringify(val))}'`;
};

let sql = `
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
    description TEXT,
    nearest_metro TEXT,
    metro_line_json TEXT,
    vibes_json TEXT
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
`;

const { SurgicalPlaceSchema } = require('./surgical_schema');

const validatedPlaces = places.map((p, idx) => {
    try {
        return SurgicalPlaceSchema.parse(p);
    } catch (err) {
        console.error(`❌ [Gatekeeper] Failure on place: ${p.name || p.id} (Ligne ${idx + 1})`);
        if (err.errors) {
            err.errors.forEach(e => console.error(`   - ${e.path.join('.')}: ${e.message}`));
        } else {
            console.error(err);
        }
        process.exit(1); // STOP THE BUILD
    }
});

validatedPlaces.forEach(p => {
    // Determine dominant mood
    let dominant_mood = 'chill';
    if (p.mood_scores) {
        const festif = p.mood_scores.festif?.overall || 0;
        const chill = p.mood_scores.chill?.overall || 0;
        const culturel = p.mood_scores.culturel?.overall || 0;
        if (festif > chill && festif > culturel) dominant_mood = 'festif';
        else if (culturel > chill && culturel > festif) dominant_mood = 'culturel';
    }

    // Pricing extraction
    const pint_price = p.pricing?.pint_price || null;
    const cocktail_price = p.pricing?.cocktail_price || null;
    const coffee_price = p.pricing?.coffee_price || null;
    const main_dish_price = p.pricing?.main_dish_price || null;

    const values = [
        valueOrNull(p.id),
        valueOrNull(p.name),
        valueOrNull(p.slug),
        valueOrNull(p.category),
        valueOrNull(p.subcategory),
        valueOrNull(dominant_mood),
        valueOrNull(p.location?.coordinates?.lat),
        valueOrNull(p.location?.coordinates?.lng),
        valueOrNull(p.location?.arrondissement),
        valueOrNull(p.location?.address),
        valueOrNull(p.ui_theme?.main_color),
        valueOrNull(p.ui_theme?.map_icon),
        valueOrNull(p.metadata?.verified), // verified
        valueOrNull(p.google_rating),
        valueOrNull(p.google_ratings_count),
        valueOrNull(p.media?.hero_image),
        valueOrNull(p.media?.instagram_handle),
        valueOrNull(p.pricing?.budget_avg),
        valueOrNull(p.pricing?.is_free),
        valueOrNull(p.pricing?.unit),
        valueOrNull(pint_price),
        valueOrNull(cocktail_price),
        valueOrNull(coffee_price),
        valueOrNull(main_dish_price),
        valueOrNull(p.pricing?.category_percentile),
        jsonValue(p.mood_scores),
        jsonValue(p.social_preview),
        jsonValue(p.categories || [p.category]), // categories_json
        jsonValue(p.opening_hours), // hours_json
        jsonValue(p.practical_info), // editorial_json maps to practical_info often in this mapping, or we can use empty object. Wait, checks dbService.
        // In dbService: editorial: JSON.parse(row.editorial_json)
        // In Place model: editorial is practical_info basically? No, practical_info is separate.
        // Let's look at the JSON: practical_info seems to contain "Le Concept", "Le Tip". 'real_talk' contains "Le Secret".
        // dbService usually maps editorial to something. 
        // Let's check dbService getPlaceDetails again.
        // `editorial: JSON.parse(row.editorial_json)` is returned as `editorial`.
        // In JSON we have `practical_info` (with keys like 'Le Concept', 'Le Tip') and `real_talk`.
        // Let's store `practical_info` as `editorial_json` because that matches what we typically display as editorial content.
        jsonValue(p.pricing), // pricing_json
        jsonValue(p.media),   // media_json
        jsonValue(p.ai_insights), // ai_insights_json
        valueOrNull(p.description),
        valueOrNull(p.location?.nearest_metro),
        jsonValue(p.location?.metro_line),
        jsonValue(p.vibes)
    ];

    sql += `INSERT INTO places VALUES (${values.join(', ')});\n`;

    // FTS
    const vibes = (p.vibes || []).join(' ');
    const ftsValues = [
        valueOrNull(p.id),
        valueOrNull(p.name),
        valueOrNull(p.category),
        valueOrNull(p.subcategory),
        valueOrNull(p.location?.address),
        valueOrNull(vibes),
        valueOrNull(p.description)
    ];
    sql += `INSERT INTO places_fts VALUES (${ftsValues.join(', ')});\n`;
});

fs.writeFileSync(outputPath, sql);
console.log(`Generated init.sql with ${places.length} places.`);
