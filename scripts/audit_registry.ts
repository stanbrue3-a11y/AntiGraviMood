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

async function auditRegistry() {
    console.log("🔍 DÉBUT DE L'AUDIT DE MOELLE...");
    
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

            // 2. Quota Photo
            if (!place.images.hero) {
                errors.push(`📸 [${context}] : Hero image manquante.`);
            }
            if (!place.images.gallery || place.images.gallery.length < MIN_GALLERY_PHOTOS) {
                errors.push(`📸 [${context}] : Galerie insuffisante (${place.images.gallery?.length || 0}/${MIN_GALLERY_PHOTOS} requis).`);
            }

            // 3. Menus Moelle
            const totalItems = (place.pricing.menu_items || []).reduce((acc, cat) => acc + (cat.items?.length || 0), 0);
            if (totalItems < MIN_MENU_ITEMS) {
                errors.push(`🍗 [${context}] : Menu anémique (${totalItems}/${MIN_MENU_ITEMS} items).`);
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

            // 5. Rédactionnel
            if (place.description?.includes("TODO") || place.description?.length < 50) {
                errors.push(`✍️ [${context}] : Description trop courte ou contenant des TODO.`);
            }
            if (place.insider_tip?.includes("TODO")) {
                errors.push(`💡 [${context}] : Insider Tip manquant (TODO).`);
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
