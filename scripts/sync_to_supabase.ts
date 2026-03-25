import fs from 'fs';
import path from 'path';

// CRITICAL: dotenv MUST load before any registry imports.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

import { SurgicalPlace } from '../src/data/registry/type-definition';
import { SurgicalPlaceSchema } from '../src/schemas/place.validation';
import { PriceEngine } from '../src/lib/pricing/PriceEngine';
// --- DYNAMIC REGISTRY SCAN (Logic Dynamic 2026) ---
const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');
const allPlaces: SurgicalPlace[] = [];

function scanDirectory(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDirectory(fullPath);
        } else if (file.endsWith('.ts') && file !== 'index.ts') {
            try {
                const module = require(fullPath);
                // Handle both 'export default' and named export
                const place = module.default || Object.values(module)[0];
                if (place && (place as any).id) {
                    allPlaces.push(place as SurgicalPlace);
                }
            } catch (e) {
                console.error(`❌ Shadow Sync: Erreur de chargement pour ${file}`);
            }
        }
    }
}

console.log('🌳 Scan de la Registry en cours...');
scanDirectory(REGISTRY_ROOT);
console.log(`✅ ${allPlaces.length} lieux chargés dynamiquement.`);

const args = process.argv.slice(2);
const targetSlug = args.find(arg => arg.startsWith('--slug='))?.split('=')[1];

const REPORT_PATH = path.join(__dirname, '../../temp_screenshots/shadow_sync_report.json');

/**
 * 🛰️ SHADOW SYNC ENGINE v1.1
 * Translates SurgicalPlace (TS) to PostgreSQL (Supabase)
 * Support targeted sync: --slug=my-place-slug
 */

async function runShadowSync() {
    const targetSlugs = targetSlug ? targetSlug.split(',') : [];
    
    const placesToProcess = targetSlugs.length > 0 
        ? allPlaces.filter(p => targetSlugs.includes(p.slug))
        : allPlaces;

    console.log('🛰️  SHADOW SYNC: Simulation de migration Supabase');
    console.log('='.repeat(50));
    console.log(`📍 Analyse de ${placesToProcess.length} lieux\${targetSlug ? \` [CIBLÉ: \${targetSlug}]\` : ''}...`);

    const report: any[] = [];
    let validCount = 0;
    let errorCount = 0;

    for (const place of placesToProcess) {
        try {
            // 1. Validation Zod
            const validation = SurgicalPlaceSchema.safeParse(place);
            if (!validation.success) {
                console.error(`❌ Validation Failure for ${place.id}:`, validation.error.format());
                errorCount++;
                continue;
            }

            // 2. Calculs PriceEngine (Le Cerveau)
            const pricing = place.pricing;
            const drinkType = PriceEngine.resolveDrinkType(place.category as any, place.subcategory || []);
            const resolved = PriceEngine.resolveReferencePrice(pricing as any, drinkType);
            
            // 3. Transformation en ligne PostgreSQL (L'ébauche)
            const pgRow = {
                id: place.id,
                slug: place.slug,
                name: place.name,
                category: place.category,
                subcategories: place.subcategory,
                dominant_mood: place.moods.festif > 70 ? 'festif' : place.moods.culturel > 70 ? 'culturel' : 'chill',
                
                address: place.location.address,
                arrondissement: place.location.arrondissement,
                lat: place.location.lat,
                lng: place.location.lng,
                nearest_metro: place.location.nearest_metro,
                metro_lines: place.location.metro_lines,
                
                // Moteur de Prix (Pré-calculé)
                pint_price: pricing.pint_price || null,
                cocktail_price: pricing.cocktail_price || null,
                wine_glass_price: pricing.wine_glass || null,
                coffee_price: pricing.coffee_price || null,
                main_dish_price: pricing.dish_price || null,
                hh_pint_price: pricing.hh_pint || null,
                index_price: resolved.price,
                
                // Données d'Expérience (JSONB)
                raw_menu: pricing.menu_items,
                practical_info: {
                    ...place.practical,
                    opening_hours: place.practical.opening_hours_raw
                },
                media: {
                    hero_image: place.images.hero,
                    google_photos: place.images.gallery,
                    instagram_handle: place.instagram_handle || null
                },
                real_talk: {
                    ...place.specials,
                    expert_catchline: place.expert_catchline,
                    insider_tip: place.insider_tip
                },
                
                google_rating: place.google_rating || null,
                verified: place.verified || false
            };

            report.push(pgRow);
            validCount++;

        } catch (e) {
            console.error(`💥 Unexpected Error for ${place.name}:`, e);
            errorCount++;
        }
    }

    // Sauvegarde du rapport
    if (!fs.existsSync(path.dirname(REPORT_PATH))) {
        fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
    }
    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

    console.log('\n' + '='.repeat(50));
    console.log('📊 RÉSULTAT DE LA SIMULATION');
    console.log(`   Lieux valides : ${validCount}`);
    console.log(`   Erreurs : ${errorCount}`);
    console.log(`   Rapport généré : ${REPORT_PATH}`);
    console.log('='.repeat(50));
    
    if (errorCount === 0) {
        console.log('\n✅ FONDATIONS SAINES : Toutes les données sont prêtes pour Supabase.');
    } else {
        console.log('\n⚠️  ATTENTION : Des erreurs bloquantes doivent être corrigées avant injection.');
    }
}

runShadowSync().catch(console.error);
