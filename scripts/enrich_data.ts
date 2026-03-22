import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const args = process.argv.slice(2);
const targetSlug = args.find(arg => arg.startsWith('--slug='))?.split('=')[1];

type UnitType = 'STARTER' | 'MAIN' | 'DESSERT' | 'DRINK' | 'MENU' | 'TAPAS' | 'UNKNOWN';

// Mots-clés de classification des SECTIONS (pas des items)
const SECTION_HINTS = {
  DESSERT: ['dessert', 'sucré', 'sucre', 'gourmandise', 'douceur', 'pastry', 'pâtisserie', 'fruit', 'fromage', 'sorbet', 'glace', 'mochi', 'tarte', 'froment', 'sweets'],
  STARTER: ['entrée', 'starter', 'amuse', 'aperitif', 'apéro', 'commencer', 'small plate', 'vapeur', 'ravioli', 'wonton', 'mezze', 'meze', 'accompagnement', 'side', 'petits plats', 'petits', 'p\'tits', 'terrien', 'végétal', 'produits'],
  DRINK: ['boisson', 'drink', 'vins', 'vin', 'bière', 'beer', 'coffee', 'café', 'thé', 'tea', 'soft', 'jus', 'juice', 'cocktail', 'liqueur', 'eau', 'water', 'cave', 'alcohol'],
  MENU: ['menu', 'formule', 'dégustation', 'étapes', 'steps', 'carte blanche', 'expériences', 'satiété', 'midi', 'déjeuner', 'speakeasy', 'privatisation', 'groupe', 'evenement'],
  TAPAS: ['tapas', 'partager', 'sharing', 'assiettes', 'tapassiettes', 'mezze', 'sharing'],
  MAIN: ['plats', 'main', 'résistance', 'salé', 'pizza', 'burger', 'viande', 'poisson', 'pâtes', 'pasta', 'riz', 'curry', 'udon', 'ramen', 'signature', 'bao', 'galette', 'sarrasin', 'terre', 'mer']
};

/**
 * LOGIC V8.5 : CLASSIFICATION PAR SECTION (VÉRITÉ DU VENTRE)
 */
function classifyCategory(catName: string, medianPrice: number): UnitType {
  const cat = catName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Anti-accents

  // 1. Détection Boisson PRIORITAIRE
  if (SECTION_HINTS.DRINK.some(kw => cat.includes(kw))) return 'DRINK';

  // 2. Détection Menu / Privatisation PRIORITAIRE (Fix Rigmarole)
  if (SECTION_HINTS.MENU.some(kw => cat.includes(kw))) return 'MENU';

  // 3. Détection Dessert (Sémantique)
  if (SECTION_HINTS.DESSERT.some(kw => cat.includes(kw))) return 'DESSERT';

  // 4. Détection STARTER (Exclusion P'tits Plats)
  if (SECTION_HINTS.STARTER.some(kw => cat.includes(kw))) return 'STARTER';

  // 5. Détection TAPAS (Avant Main)
  if (SECTION_HINTS.TAPAS.some(kw => cat.includes(kw))) return 'TAPAS';

  // 6. Détection Main (Sémantique)
  if (SECTION_HINTS.MAIN.some(kw => cat.includes(kw))) return 'MAIN';
  
  // 7. Arbitrage par Prix (Paris 2026)
  if (medianPrice >= 18) return 'MAIN';
  if (medianPrice < 10) return 'STARTER';

  return 'UNKNOWN';
}

const UI_CATEGORIES: Record<UnitType, string> = {
  STARTER: 'Pour Commencer / À Partager',
  MAIN: 'Les Plats',
  DESSERT: 'Douceurs',
  DRINK: 'La Cave & Boissons',
  MENU: 'Formules & Expériences',
  TAPAS: 'Assiettes à Partager',
  UNKNOWN: 'La Carte'
};

const ADJECTIVE_MAP: Record<string, string> = {
    'italien': 'italienne',
    'français': 'française',
    'japonais': 'japonaise',
    'coréen': 'coréenne',
    'mexicain': 'mexicaine',
    'vietnamien': 'vietnamienne',
    'thaï': 'thaïlandaise',
    'méditerranéen': 'méditerranéenne',
    'bistrot': 'de bistrot',
    'brasserie': 'de brasserie',
    'coffeeshop': 'de coffeeshop',
    'libanais': 'libanaise',
    'grec': 'grecque',
    'espagnol': 'espagnole',
    'indien': 'indienne',
    'crêperie': 'bretonne',
    'breton': 'bretonne',
    'taïwanais': 'taïwanaise',
    'dim sum': 'hongkongaise',
    'chinois': 'chinoise',
    'cantine': 'de cantine'
};

function calculateMedian(prices: number[]): number {
    if (prices.length === 0) return 0;
    const sorted = [...prices].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

import fs from 'fs';
// --- DYNAMIC REGISTRY SCAN (Logic Dynamic 2026) ---
const REGISTRY_ROOT = path.join(__dirname, '../src/data/registry/tree');
const allPlacesFromRegistry: any[] = [];

function scanDirectory(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDirectory(fullPath);
        } else if (file.endsWith('.ts') && file !== 'index.ts') {
            try {
                const module = require(fullPath);
                const place = module.default || Object.values(module)[0];
                if (place && (place as any).id) {
                    allPlacesFromRegistry.push(place);
                }
            } catch (e) {
                // Silently skip non-place files
            }
        }
    }
}
scanDirectory(REGISTRY_ROOT);

async function enrich() {
    console.log(`🚀 DÉPLOIEMENT LOGIC V8.7 (UNITÉ DE SATIÉTÉ ABSOLUE${targetSlug ? ` - CIBLÉ: ${targetSlug}` : ''})...`);
    
    let query = supabase.from('places').select('*');
    if (targetSlug) {
        query = query.eq('slug', targetSlug);
    }
    
    const { data: dbPlaces, error } = await query;
    if (error) throw error;
    console.log(`📦 Audit de ${dbPlaces?.length} lieux.`);

    for (const place of (dbPlaces || [])) {
        let updates: any = {};
        const realTalk = { ...place.real_talk };
        const registryPlace = allPlacesFromRegistry.find(p => p.id === place.id);
        
        // --- 1. ANALYSE DES SECTIONS (SOURCE REGISTRE) ---
        const menuItems = registryPlace?.pricing?.menu_items || [];
        const sectionMap: Map<UnitType, any[]> = new Map();

        menuItems.forEach((cat: any) => {
            const prices = cat.items
              .map((i: any) => parseFloat(i.price.replace('€', '').replace(',', '.')))
              .filter((p: number) => !isNaN(p) && p > 0);
            
            // Éveil des Formules (Fix Moulin de la Vierge / Pont Aven)
            // On cherche "Formule" ou "Menu" ou "Satiété" dans le NOM de l'item
            const formulaPrices = cat.items
              .filter((i: any) => {
                const n = i.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return n.includes('formule') || n.includes('menu') || n.includes('satiete');
              })
              .map((i: any) => parseFloat(i.price.replace('€', '').replace(',', '.')))
              .filter((p: number) => !isNaN(p));
            
            let catMedian = calculateMedian(prices);
            let relevantPrices = prices;

            if (formulaPrices.length > 0) {
              catMedian = Math.max(...formulaPrices);
              relevantPrices = formulaPrices; // Satiety Filtering: only formulas matter here
            }

            let type = classifyCategory(cat.category, catMedian);
            
            // Correction Gastro-Sharing (Orgueil Fix) / Tapas
            const budget = registryPlace?.pricing?.avg_budget || 0;
            const subcats = place.subcategories || [];
            const isGastroBistro = subcats.some((s: string) => ['gastronomique', 'bistronomique'].includes(s.toLowerCase()));
            
            // Seuil à 17€ inclus (Orgueil est à 16€-17€)
            if (type === 'MAIN' && catMedian <= 17 && (isGastroBistro || budget > 40)) {
                type = 'TAPAS';
            }

            if (!sectionMap.has(type)) sectionMap.set(type, []);
            sectionMap.get(type)!.push({ category: cat.category, items: cat.items, median: catMedian, relevantPrices });
        });

        // Reconstruction du Menu Normalisé (UI Moderne & Sexy)
        const normalizedMenu: any[] = [];
        const sortedTypes: UnitType[] = ['STARTER', 'TAPAS', 'MAIN', 'MENU', 'DRINK', 'DESSERT', 'UNKNOWN'];
        
        sortedTypes.forEach(type => {
            const sections = sectionMap.get(type);
            if (sections) {
                sections.forEach(s => {
                    normalizedMenu.push({
                        category: UI_CATEGORIES[type],
                        items: s.items
                    });
                });
            }
        });
        updates.raw_menu = normalizedMenu;

        // --- 2. CALCUL DE LA MÉDIANE (SOUVERAINETÉ ADAPTATIVE) ---
        let finalMedian = 0;
        const isManualForced = registryPlace?.pricing?.force_manual_dish_price || false;

        if (isManualForced && registryPlace.pricing.dish_price > 0) {
            finalMedian = registryPlace.pricing.dish_price;
            console.log(`🛡️  [${place.slug}] Verrou Manuel : ${finalMedian}€`);
        } else {
            const mains = sectionMap.get('MAIN') || [];
            const menus = sectionMap.get('MENU') || [];
            const tapas = sectionMap.get('TAPAS') || [];

            // Règle 1 : SOUVERAINETÉ DE LA SATIÉTÉ (Formules Midi / Satiété)
            if (menus.length > 0) {
                const midiMenu = menus.find(m => {
                  const norm = m.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  return norm.includes('midi') || norm.includes('satiete') || norm.includes('formule');
                });
                if (midiMenu) {
                    finalMedian = midiMenu.median; 
                    console.log(`⚖️  [${place.slug}] Priorité Satiété : ${finalMedian}€`);
                }
            }

            // Règle 2 : MÉDIANE DES PLATS DE RÉSISTANCE (Uniquement prix RELEVANTS)
            if (finalMedian === 0 && mains.length > 0) {
                const allMainPrices = mains.flatMap(m => m.relevantPrices);
                finalMedian = calculateMedian(allMainPrices);
                console.log(`💰 [${place.slug}] Médiane Plats : ${finalMedian}€`);
            }

            // Règle 3 : TAPAS / GASTRO-SHARING MULTIPLIER (x2.5)
            if (finalMedian === 0 && tapas.length > 0) {
               const allTapasPrices = tapas.flatMap(m => m.relevantPrices);
               const tapasMedian = calculateMedian(allTapasPrices);
               finalMedian = tapasMedian * 2.5;
               console.log(`🍢 [${place.slug}] Médiane Tapas/Sharing (x2.5) : ${finalMedian}€`);
            }

            // --- 3. BONUS BRUNCH / COFFEE SHOP (+25%) ---
            const isBrunchPlace = place.subcategories?.some((s: string) => ['brunch', 'coffee shop'].includes(s.toLowerCase()));
            if (isBrunchPlace && finalMedian > 0) {
                finalMedian = finalMedian * 1.25;
                console.log(`☕ [${place.slug}] Bonus Brunch (+25%) : ${finalMedian.toFixed(2)}€`);
            }
        }
        
        // --- 3. SYNC PRACTICAL & MEDIA (HORAIRES & PHOTOS) ---
        if (registryPlace) {
            // Mapping Practical Info
            updates.practical_info = {
                ...place.practical_info,
                opening_hours: registryPlace.practical?.opening_hours || place.practical_info?.opening_hours || "",
                opening_hours_raw: registryPlace.practical?.opening_hours_raw || place.practical_info?.opening_hours_raw || "",
                reservation_policy: registryPlace.practical?.reservation_policy || place.practical_info?.reservation_policy || null,
                wifi: registryPlace.practical?.wifi ?? place.practical_info?.wifi ?? false,
                accessibility: registryPlace.practical?.accessibility ?? place.practical_info?.accessibility ?? false,
                action_url: registryPlace.practical?.main_action?.url || place.practical_info?.action_url || "",
                action_type: registryPlace.practical?.main_action?.type || place.practical_info?.action_type || "site"
            };

            // Mapping Media (Hero & Gallery)
            updates.media = {
                hero: registryPlace.images?.hero || place.media?.hero || "",
                gallery: registryPlace.images?.gallery || place.media?.gallery || []
            };
        }

        if (finalMedian > 0) {
            updates.main_dish_price = finalMedian;
            updates.index_price = finalMedian;
        }

        // --- 3. STYLE DE CUISINE (AUTO-PREFIX) ---
        if (place.category === 'restaurant' || (place.subcategories && place.subcategories.length > 0)) {
            let currentMustEat = realTalk.must_eat || '';
            const isPrefixed = currentMustEat.startsWith('Cuisine');
            const needsFix = currentMustEat.startsWith('Cuisine Crêperie') || currentMustEat.startsWith('Cuisine Dim Sum');

            if (currentMustEat && (!isPrefixed || needsFix)) {
                if (needsFix) currentMustEat = currentMustEat.replace(/^Cuisine .*?\. /, '');
                let style = '';
                const candidates = place.subcategories || [];
                const primary = candidates.find((c: string) => ADJECTIVE_MAP[c.toLowerCase()]);
                if (primary) {
                    style = `Cuisine ${ADJECTIVE_MAP[primary.toLowerCase()]}. `;
                } else if (candidates.length > 0 && candidates[0].toLowerCase() !== 'restaurant') {
                    style = `Cuisine ${candidates[0].toLowerCase()}${candidates[0].endsWith('e') ? '' : 'e'}. `;
                }
                if (style) {
                    realTalk.must_eat = `${style}${currentMustEat}`;
                    updates.real_talk = realTalk;
                }
            }
        }

        // --- 4. EXECUTE UPDATE ---
        if (Object.keys(updates).length > 0) {
            const { error: updateError } = await supabase
                .from('places')
                .update(updates)
                .eq('id', place.id);
            if (updateError) console.error(`❌ Erreur [${place.slug}] :`, updateError);
        }
    }
    console.log('✅ FIN ENRICHISSEMENT LOGIC V8.');
}

enrich().catch(console.error);
