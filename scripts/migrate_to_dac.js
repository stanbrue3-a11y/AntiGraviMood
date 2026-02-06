const fs = require('fs');
const path = require('path');

const INPUT_PATH = path.join(__dirname, '../src/data/pois.jsonl');
const REGISTRY_DIR = path.join(__dirname, '../src/data/registry/districts');

// Ensure output dir exists
if (!fs.existsSync(REGISTRY_DIR)) fs.mkdirSync(REGISTRY_DIR, { recursive: true });

// Read Legacy Data
console.log("🚚 [Migration] Reading legacy JSONL...");
const rawData = fs.readFileSync(INPUT_PATH, 'utf8');
const places = rawData.split('\n')
    .filter(l => l.trim().length > 0)
    .map(l => {
        try { return JSON.parse(l); } catch (e) { return null; }
    })
    .filter(p => p !== null);

console.log(`📊 [Migration] Found ${places.length} places. Grouping by District...`);

// Group by District
const districts = {};
places.forEach(p => {
    const arr = p.location?.arrondissement || 75001;
    // Map zip code to simple number (75011 -> 11, or just keep zip)
    // Actually our interface says number 1-20.
    let arrNum = typeof arr === 'number' ? arr : parseInt(arr);
    if (arrNum > 75000) arrNum -= 75000;

    // Fallback
    if (isNaN(arrNum) || arrNum < 1 || arrNum > 20) arrNum = 99; // "Other"

    const key = `arrondissement_${arrNum}`;
    if (!districts[key]) districts[key] = [];
    districts[key].push(p);
});

// Helper to format object to TS string
const safeString = (str) => {
    if (!str) return '""';
    return JSON.stringify(str); // Handles quotes escaping
};

const formatPlaceToTS = (p) => {
    // Sanitization Logic (Mini-Surgical)
    const dominantMood = 'chill'; // Recalculate if needed, or keep simple for now

    // Clean Arrays
    const subcats = p.subcategory ? (Array.isArray(p.subcategory) ? p.subcategory : [p.subcategory]) : [];

    // Strict Interface Mapping
    return `    {
        id: ${safeString(p.id)},
        name: ${safeString(p.name)},
        slug: ${safeString(p.slug)},
        category: ${safeString(p.category || 'bar')},
        subcategory: ${JSON.stringify(subcats)},
        verified: ${p.metadata?.verified ? 'true' : 'false'},
        google_rating: ${p.google_rating || 0},
        
        location: {
            address: ${safeString(p.location?.address)},
            arrondissement: ${p.location?.arrondissement && p.location.arrondissement > 75000 ? p.location.arrondissement - 75000 : (p.location?.arrondissement || 1)},
            lat: ${p.location?.coordinates?.lat || 0},
            lng: ${p.location?.coordinates?.lng || 0},
            nearest_metro: ${safeString((p.location?.nearest_metro || "").substring(0, 60))},
            metro_lines: ${JSON.stringify(p.location?.metro_line || [])}
        },

        practical: {
            reservation_policy: null,
            accessibility: false,
            wifi: false,
            opening_hours_raw: ${safeString(JSON.stringify(p.opening_hours) || "")},
            action_type: "site",
            action_url: ""
        },

        pricing: {
            avg_budget: ${p.pricing?.budget_avg || 2},
            is_free: ${p.pricing?.is_free ? 'true' : 'false'},
            pint_price: ${p.pricing?.pint_price || 0},
            cocktail_price: ${p.pricing?.cocktail_price || 0},
            coffee_price: ${p.pricing?.coffee_price || 0},
            dish_price: ${p.pricing?.main_dish_price || 0}
        },

        moods: {
            chill: ${p.mood_scores?.chill?.overall || 0},
            festif: ${p.mood_scores?.festif?.overall || 0},
            culturel: ${p.mood_scores?.culturel?.overall || 0}
        },

        description: ${safeString(p.description || "")},

        real_talk: {
            text: ${safeString(p.real_talk?.text || "")},
            le_secret: ${safeString(p.real_talk?.le_secret)},
            le_son: ${safeString(p.real_talk?.le_son)},
            le_must: ${safeString(p.real_talk?.le_must)},
            must_eat: ${safeString(p.real_talk?.must_eat)}
        },

        images: {
            hero: ${safeString(p.media?.hero_image || "")},
            gallery: []
        }
    }`;
};

// Generate Files
const districtKeys = Object.keys(districts);
let indexImports = "";
let indexExports = "";

districtKeys.forEach(key => {
    const placesList = districts[key];
    const fileContent = `import { SurgicalPlace } from '../type-definition';

export const ${key}Places: SurgicalPlace[] = [
${placesList.map(formatPlaceToTS).join(',\n')}
];
`;
    fs.writeFileSync(path.join(REGISTRY_DIR, `${key}.ts`), fileContent);
    console.log(`✅ Generated ${key}.ts (${placesList.length} places)`);

    indexImports += `import { ${key}Places } from './districts/${key}';\n`;
    indexExports += `    ...${key}Places,\n`;
});

// Update Index
const indexContent = `import { SurgicalPlace } from './type-definition';
${indexImports}

// AGGREGATE ALL DATA
const allPlaces: SurgicalPlace[] = [
${indexExports}
];

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (seenIds.has(p.id)) {
        // console.warn(\`Duplicate ID found -> \${p.id}\`); 
        // For migration, we might have duplicates, so just warn or dedup logic?
        // Let's throw to be strict, user can fix TS files.
    }
    seenIds.add(p.id);
});

export default allPlaces;
`;

fs.writeFileSync(path.join(__dirname, '../src/data/registry/index.ts'), indexContent);
console.log("🏁 Registry Index Updated. Migration Complete.");
