
import * as fs from 'fs';
import * as path from 'path';

// --- MAPPINGS ---
const CUISINE_MAP: Record<string, string> = {
    'neobistrot': 'Français',
    'bistro-traditionnel': 'Français',
    'brasserie': 'Français',
    'francais': 'Français',
    'italien': 'Italien',
    'pizza': 'Italien',
    'pizzeria': 'Italien',
    'trattoria': 'Italien',
    'japonais': 'Japonais',
    'sushi': 'Japonais',
    'ramen': 'Japonais',
    'coreen': 'Coréen',
    'mexicain': 'Mexicain',
    'tacos': 'Mexicain',
    'vegetarien': 'Végétarien',
    'vegan': 'Végétarien',
    'burger': 'Burger',
    'street-food': 'Street Food',
    'kebab': 'Street Food',
    'falafel': 'Street Food',
    'fruits-de-mer': 'Fruits de mer',
    'poisson': 'Fruits de mer',
    'seafood': 'Fruits de mer'
};

const BEVERAGE_MAP: Record<string, string> = {
    'bar-a-vin': 'Vin',
    'vin': 'Vin',
    'cave-a-manger': 'Vin',
    'craft-beer': 'Bière',
    'pub': 'Bière',
    'biere': 'Bière',
    'cocktail-bar': 'Cocktail',
    'cocktail': 'Cocktail',
    'mixologie': 'Cocktail',
    'coffee-shop': 'Café',
    'cafe': 'Café',
    'tea-time': 'Thé',
    'salon-de-the': 'Thé'
};

const districtsDir = path.join(__dirname, '../src/data/registry/districts');

async function run() {
    const files = fs.readdirSync(districtsDir).filter(f => f.startsWith('arrondissement_') && f.endsWith('.ts'));

    for (const f of files) {
        console.log(`Processing ${f}...`);
        const filePath = path.join(districtsDir, f);

        let fileContent = fs.readFileSync(filePath, 'utf-8');

        // Extract the Array string using Regex
        // Matches: export const [variableName] : SurgicalPlace[] = [ ... ];
        const match = fileContent.match(/export const (\w+): SurgicalPlace\[\] = (\[[\s\S]*\]);/);

        if (!match) {
            console.error(`❌ Could not find data array in ${f}`);
            continue;
        }

        const varName = match[1];
        const arrayString = match[2];

        try {
            // DANGEROUS EVAL EVALUATION to parse the object literal string
            // We use 'eval' because standard JSON.parse won't work on TS/JS object literals (no quotes on keys, comments etc)
            // Safety: We are running this on our own codebase files.

            // We need a dummy usage of 'SurgicalPlace'? No, just raw data.
            const placesFn = new Function(`return ${arrayString};`);
            const places = placesFn();

            const newPlaces = places.map((p: any) => {
                // 1. EXTRACT DATA
                const subcats = p.subcategory || [];
                const realTalk = p.real_talk || {};

                // 2. BUILD NEW FIELDS

                // Insider Tip
                let tip = realTalk.le_secret || "";
                if (!tip || tip.length < 10) tip = realTalk.text || "";
                if (!tip) tip = "Demandez conseil au staff pour les spécialités du moment.";

                // Specials
                const cuisineSet = new Set<string>();
                const drinkSet = new Set<string>();

                subcats.forEach((s: string) => {
                    const sLower = s.toLowerCase().trim();
                    if (CUISINE_MAP[sLower]) cuisineSet.add(CUISINE_MAP[sLower]);
                    if (BEVERAGE_MAP[sLower]) drinkSet.add(BEVERAGE_MAP[sLower]);
                });

                if (p.category === 'restaurant' && cuisineSet.size === 0) cuisineSet.add('Français'); // Default
                if (p.category === 'bar' && drinkSet.size === 0) drinkSet.add('Cocktail'); // Default

                // 3. CONSTRUCT NEW OBJECT
                return {
                    id: p.id,
                    name: p.name,
                    slug: p.slug,
                    category: p.category,
                    subcategory: p.subcategory,
                    verified: p.verified,
                    google_rating: p.google_rating,
                    location: p.location,
                    practical: p.practical,
                    pricing: p.pricing,

                    moods: p.moods,

                    // NEW SECTION
                    description: p.description, // PRESERVED
                    insider_tip: tip,
                    specials: {
                        cuisine: Array.from(cuisineSet),
                        drinks: Array.from(drinkSet)
                    },
                    // DELETED: real_talk

                    images: p.images
                };
            });

            // 4. SERIALIZE TO TS
            const tsContent = `import { SurgicalPlace } from '../type-definition';

export const ${varName}: SurgicalPlace[] = ${JSON.stringify(newPlaces, null, 4)};\n`;

            fs.writeFileSync(filePath, tsContent);
            console.log(`✅ Migrated ${f} (${newPlaces.length} items)`);

        } catch (e) {
            console.error(`❌ Failed to process ${f}`, e);
        }
    }
}

run();
