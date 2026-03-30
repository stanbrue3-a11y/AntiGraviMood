import * as fs from 'fs';
import * as path from 'path';
import { SurgicalPlace } from '../src/data/registry/type-definition';

/**
 * RÉGULATEUR DE MOELLE 2026 🛡️
 * Ce script vérifie la conformité totale des fiches lieux avant déploiement.
 */

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');
const MIN_MENU_ITEMS = 30; // Moelle V2.1 Requirement (Satiété Totale)
const MIN_GALLERY_PHOTOS = 3;
const MANDATORY_LABELS = ["Entrées", "Plats", "Desserts", "Boissons", "À Partager", "Formules", "Accompagnements"];
const ALLOWED_SUBCATEGORIES = ["bistrot", "restaurant", "éthiopien", "thaï", "vietnamien", "italien", "gastronomique", "street-food", "authentique", "partage", "viande", "traditionnel", "français", "bar à vin", "pizzeria", "japonais", "bistronomie"];
const FORBIDDEN_WORDS = [
    { word: "Carte", reason: "Nomenclature interdite (Redondant avec l'UI)" },
    { word: "Résistance", reason: "Nomenclature interdite ('Plat de Résistance' banni, utilisez 'Plats')" },
    { word: "Nos", reason: "Libellé interdit (Pas de 'Nos Entrées', juste 'Entrées')" }
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
            let place: SurgicalPlace = module.default;
            
            // Si pas d'export default, on cherche le premier export qui ressemble à une SurgicalPlace
            if (!place) {
                const exports = Object.values(module);
                place = exports.find((e: any) => e && e.id && e.location) as SurgicalPlace;
            }

            if (!place) {
                errors.push(`🚨 CRITIQUE [${context}] : Aucun export valide trouvé. Utilisez 'export default' ou un export nommé conforme.`);
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

            // 2. Photo Quota (Hero + Gallery)
            const totalPhotos = (place.images.hero ? 1 : 0) + (place.images.gallery?.length || 0);
            if (!place.images.hero) {
                errors.push(`📸 [${context}] : Hero image manquante.`);
            }
            if (totalPhotos < MIN_GALLERY_PHOTOS) {
                errors.push(`📸 [${context}] : Nombre total d'images insuffisant (${totalPhotos}/${MIN_GALLERY_PHOTOS} requises).`);
            }

            // 3. Menus Moelle
            const totalItems = (place.pricing.menu_items || []).reduce((acc, cat) => {
                const catType = (cat as any).category_type || '';
                
                // 3.2 Vérification des Prix (Numérique STRICT price_cents)
                cat.items?.forEach(item => {
                    const priceCents = (item as any).price_cents;
                    const priceStr = (item as any).price;
                    
                    if (priceCents === undefined) {
                        if (priceStr !== undefined) {
                            errors.push(`💰 [${context}] : Format obsolète détecté pour "${item.name}" ("${priceStr}"). Utilisez price_cents.`);
                        } else {
                            errors.push(`💰 [${context}] : Prix manquant pour l'item "${item.name}".`);
                        }
                    } else if (typeof priceCents !== 'number') {
                        errors.push(`💥 [${context}] : price_cents non-numérique détecté pour "${item.name}".`);
                    }
                });

                return acc + (cat.items?.length || 0);
            }, 0);
            
            if (totalItems < MIN_MENU_ITEMS) {
                errors.push(`🍗 [${context}] : Menu anémique (${totalItems}/${MIN_MENU_ITEMS} items). Allez chercher la Satiété Totale (30+) !`);
            }

            // 3.4 Vérification des Labels Cliniques
            (place.pricing.menu_items || []).forEach(cat => {
                if (!MANDATORY_LABELS.includes(cat.display_label)) {
                    errors.push(`🏷️ [${context}] : Label interdit "${cat.display_label}". Utilisez uniquement : ${MANDATORY_LABELS.join(', ')}.`);
                }
                FORBIDDEN_WORDS.forEach(forbidden => {
                    if (cat.display_label.includes(forbidden.word)) {
                        errors.push(`🚫 [${context}] : Mot interdit "${forbidden.word}" dans le label. ${forbidden.reason}`);
                    }
                });
            });
            
            if (!place.subcategory || place.subcategory.length === 0) {
                errors.push(`👻 [${context}] : 'subcategory' est vide []. DeepSearch aveugle.`);
            } else {
                place.subcategory.forEach(tag => {
                    if (!ALLOWED_SUBCATEGORIES.includes(tag)) {
                        errors.push(`🚫 [${context}] : Tag inconnu "${tag}". Utilisez la liste blanche du workflow.`);
                    }
                });
            }
            if (place.name.includes("'")) {
                errors.push(`🗡️ [${context}] : Apostrophe droite détectée dans "${place.name}". Utilisez l'apostrophe typographique ( ’ ).`);
            }
            if ((place.practical as any).wifi !== undefined) {
                errors.push(`📡 [${context}] : Champ 'wifi' proscrit dans le Standard 2026. Supprimez-le.`);
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
