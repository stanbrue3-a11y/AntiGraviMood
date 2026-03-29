import * as fs from 'fs';
import * as path from 'path';
import { SurgicalPlace } from '../src/data/registry/type-definition';

/**
 * RÉGULATEUR DE MOELLE 2026 🛡️
 * Ce script vérifie la conformité totale des fiches lieux avant déploiement.
 */

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');
const MIN_MENU_ITEMS = 15;
const MIN_GALLERY_PHOTOS = 2;
const ALLOWED_PATTERNS = [/Entrée/i, /Plat/i, /Dessert/i, /Douceur/i, /Formule/i, /Partager/i, /Cave/i, /Boisson/i, /Aperitivo/i, /Antipasti/i, /Pizz/i, /Pâte/i, /Dolci/i, /Tapassiette/i, /Côté/i, /Accompagnement/i, /Mo's/i, /Signature/i, /Supplément/i, /Topping/i, /Extra/i, /Spécialité/i, /Menu/i, /Étape/i, /Incontournable/i, /Voyage/i, /Fromage/i, /Jardin/i, /Sommelier/i, /Sommelière/i, /Sommelerie/i, /Écho/i, /Océan/i, /Littoral/i, /Côtier/i, /Dim Sum/i, /Mixologie/i, /Tacos/i, /Végétal/i, /Racine/i, /Pousse/i, /Ceviche/i, /Gilda/i, /Snack/i, /Brunch/i, /Prélude/i, /Secondi/i, /Primi/i, /Rôtisserie/i, /Vapeur/i, /Final/i, /Thé/i, /Postre/i, /Grill/i, /Classique/i, /Nouille/i, /Riz/i, /Club/i, /Salade/i, /Bouchée/i, /Spiritueux/i, /Pâtisserie/i, /Infusion/i];
const FORBIDDEN_WORDS = [
    { word: "Carte", reason: "Forbidden nomenclature (Redundant with UI)" },
    { word: "Résistance", reason: "Forbidden nomenclature ('Plat de Résistance' is banned, use 'Plats')" }
];

async function auditRegistry() {
    const args = process.argv.slice(2);
    const targetSlugArg = args.find(arg => arg.startsWith('--slug='));
    const targetSlugs = targetSlugArg ? targetSlugArg.split('=')[1].split(',') : [];

    console.log(`🔍 DÉBUT DE L'AUDIT DE MOELLE${targetSlugs.length > 0 ? ` (CIBLÉ: ${targetSlugs.join(', ')})` : ' (GLOBAL)'}...`);
    
    const files = getAllFiles(REGISTRY_PATH).filter(f => f.endsWith('.ts'));
    const googleIds = new Map<string, string>();
    const slugs = new Map<string, string>();
    const errors: string[] = [];

    for (const file of files) {
        const basename = path.basename(file);
        if (basename === 'index.ts' || basename === 'type-definition.ts') continue;
        
        const context = basename;
        try {
            const module = await import(file);
            const place: SurgicalPlace = module.default;

            if (!place || !place.id || !place.location) {
                // Ce n'est probablement pas une SurgicalPlace, skip sans erreur si c'est un fichier helper
                continue;
            }

            // 1. Unicité des IDs et Slugs
            const gid = place.location?.google_id;
            const slug = place.slug;

            if (!gid) {
                errors.push(`🚨 CRITIQUE [${context}] : google_id manquant.`);
            } else if (googleIds.has(gid)) {
                errors.push(`🚨 CRITIQUE [${context}] : Collision de google_id (${gid}) avec ${googleIds.get(gid)}`);
            } else {
                googleIds.set(gid, context);
            }

            if (!slug) {
                errors.push(`🚨 CRITIQUE [${context}] : slug manquant.`);
            } else if (slugs.has(slug)) {
                errors.push(`🚨 CRITIQUE [${context}] : Doublon de slug (${slug})`);
            } else {
                slugs.set(slug, context);
            }

            // Si on est en mode ciblé, on s'arrête là pour les fiches non concernées (on a juste validé l'anti-collision global)
            if (targetSlugs.length > 0 && slug && !targetSlugs.includes(slug)) {
                continue;
            }

            // 2. Quota Photo
            if (!place.images.hero) {
                errors.push(`📸 [${context}] : Hero image manquante.`);
            }
            if (!place.images.gallery || place.images.gallery.length < MIN_GALLERY_PHOTOS) {
                errors.push(`📸 [${context}] : Galerie insuffisante (${place.images.gallery?.length || 0}/${MIN_GALLERY_PHOTOS} requis).`);
            }

            // 3. Menus Moelle
            const totalItems = (place.pricing.menu_items || []).reduce((acc, cat) => {
                const catName = cat.category;
                
                // 3.1 Vérification Nomenclature (Moelle V10.4)
                const isDrinkSection = catName.includes("Boisson") || catName.includes("Cave");
                
                // Flexible Match
                const isStandardMatched = ALLOWED_PATTERNS.some(pattern => pattern.test(catName));
                if (!isStandardMatched) {
                    errors.push(`🏗️ [${context}] : Catégorie non-standard détectée : "${catName}". Doit contenir un mot-clé valide (Entrée, Plat, Dessert, etc.).`);
                }
                
                // Forbidden Words Check
                FORBIDDEN_WORDS.forEach(rule => {
                    if (catName.includes(rule.word)) {
                        // Exception pour "La Cave / Boissons"
                        if (catName === "La Cave / Boissons" && rule.word === "Boisson") return;
                        
                        errors.push(`🚨 [${context}] : Libellé proscrit détecté dans "${catName}" (Mot: "${rule.word}" - ${rule.reason}).`);
                    }
                });

                if (isDrinkSection && place.category === 'restaurant') {
                    const isAllowedDrink = catName.includes("Boisson") || catName.includes("Cave") || catName.includes("Aperitivo");
                    if (!place.subcategory.includes('bouillon') && !isAllowedDrink) {
                        errors.push(`🥤 [${context}] : Section boissons interdite pour un restaurant standard : "${catName}". (Utilisez specials.drinks).`);
                    }
                }

                // 3.2 Vérification des Prix (€ obligatoire et numérique pur)
                cat.items?.forEach(item => {
                    if (!item.price.includes('€')) {
                        errors.push(`💰 [${context}] : Symbole € manquant pour l'item "${item.name}" (Prix: "${item.price}").`);
                    }
                    if (!/^[\d,\.]+ ?€$/.test(item.price.trim()) && item.price !== "0€") {
                        errors.push(`💥 [${context}] : Prix non-numérique détecté ("${item.price}"). L'application mobile crashera (NaN). Exigez un nombre (ex: "24€").`);
                    }
                });

                return acc + (cat.items?.length || 0);
            }, 0);
            
            if (totalItems < MIN_MENU_ITEMS) {
                errors.push(`🍗 [${context}] : Menu anémique (${totalItems}/${MIN_MENU_ITEMS} items).`);
            }
            
            // 3.3 Filtres de Base et SQLite Crashes
            if (!place.subcategory || place.subcategory.length === 0) {
                errors.push(`👻 [${context}] : 'subcategory' est vide []. Le lieu sera masqué de la DeepSearch. Ajoutez un tag (ex: 'bistrot').`);
            }
            if (place.name.includes("'")) {
                errors.push(`🗡️ [${context}] : Apostrophe droite détectée dans "${place.name}". Elle corrompt SQLite. Utilisez l'apostrophe typographique ( L’ ).`);
            }

            // 4. GPS & Horaires
            if (place.location.lat === 0 || place.location.lng === 0) {
                errors.push(`📍 [${context}] : Coordonnées GPS invalides (0,0).`);
            }
            if (!place.practical.opening_hours_raw || place.practical.opening_hours_raw.includes("TODO")) {
                errors.push(`⏰ [${context}] : Horaires manquants ou TODO.`);
            }

            // 4.1 Cohérence Badges Élite
            const isLate = place.practical.opening_hours_raw?.includes("00:00") || 
                           place.practical.opening_hours_raw?.includes("01:00") || 
                           place.practical.opening_hours_raw?.includes("02:00");
            
            if (isLate && !place.practical.ferme_tard) {
                errors.push(`🛡️ [${context}] : Incohérence Badge 'Ferme tard' (Horaires nocturnes détectés mais badge false).`);
            }

            if (place.practical.terrace === undefined) {
                errors.push(`🛡️ [${context}] : Badge 'Terrasse' non défini.`);
            }

            if (!place.practical.terrace && (place.description?.toLowerCase().includes("terrasse") || place.insider_tip?.toLowerCase().includes("terrasse"))) {
                errors.push(`🚨 [${context}] : Conflit potentiel Badge 'Terrasse' (Badge à false mais mentionné dans le texte).`);
            }

            // 2.2 Vérification des Moods (No 50/50/50 standard)
            const moodValues = Object.values(place.moods);
            const isGenericMood = moodValues.every(v => v === 50) || 
                                 (moodValues.filter(v => v === 50).length >= 2 && moodValues.some(v => v === 50));
            if (isGenericMood) {
                errors.push(`🎭 [${context}] : Moods génériques détectés (Éviter le 50/50 par défaut).`);
            }
            
            // 5.1 Insider Tip (Triple Bullet Requirement)
            if (!place.insider_tip || place.insider_tip.includes("TODO")) {
                errors.push(`💡 [${context}] : Insider Tip manquant (TODO).`);
            } else {
                const bulletCount = (place.insider_tip.match(/•/g) || []).length;
                if (bulletCount < 3) {
                    errors.push(`💡 [${context}] : Format Insider Tip invalide (${bulletCount}/3 puces '•' détectées).`);
                }
            }

            // 5.2 Must Eat (Prefix Requirement)
            const mustEat = place.specials?.must_eat;
            if (!mustEat || mustEat.includes("TODO")) {
                errors.push(`🍴 [${context}] : Must Eat manquant (TODO).`);
            } else if (!mustEat.includes('.') || mustEat.split('.')[0].length < 3) {
                errors.push(`🍴 [${context}] : Préfixe de cuisine manquant dans Must Eat ("${mustEat}"). Format attendu: "Cuisine [Type]. [Plats]"`);
            }

        } catch (e) {
            errors.push(`💥 [${path.basename(file)}] : Erreur de parsing / import.`);
        }
    }

    console.log("============================================================");
    if (errors.length > 0) {
        console.error(`❌ AUDIT ÉCHOUÉ : ${errors.length} infractions détectées.`);
        errors.forEach(err => console.error(err));
        process.exit(1);
    } else {
        console.log(`✅ AUDIT RÉUSSI : ${files.length} lieux certifiés Moelle Totale.`);
        process.exit(0);
    }
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

auditRegistry();
