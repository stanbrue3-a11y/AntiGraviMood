import * as fs from 'fs';
import * as path from 'path';
import { SurgicalPlace } from '../src/data/registry/type-definition';
import { ALLOWED_SUBCATEGORIES } from '../src/schemas/place.validation';

/**
 * 🛡️ RÉGULATEUR DE MOELLE 2026 — V3.0
 * 
 * Deux niveaux de sévérité :
 * - 🚨 BLOQUANT : Empêche la compilation (exit 1). Données corrompues.
 * - ⚠️  INFORMATIF : Signal d'alerte mais laisse passer. À corriger quand possible.
 */

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');
const MIN_GALLERY_PHOTOS = 3;

async function auditRegistry() {
    const args = process.argv.slice(2);
    const targetSlugArg = args.find(arg => arg.startsWith('--slug='));
    const targetSlugs = targetSlugArg ? targetSlugArg.split('=')[1].split(',') : [];

    console.log(`🔍 AUDIT MOELLE V3.0${targetSlugs.length > 0 ? ` (CIBLÉ: ${targetSlugs.join(', ')})` : ' (GLOBAL)'}...`);
    
    const files = getAllFiles(REGISTRY_PATH).filter(f => f.endsWith('.ts'));
    const googleIds = new Map<string, string>();
    const slugs = new Map<string, string>();
    const blocking: string[] = [];
    const warnings: string[] = [];

    for (const file of files) {
        const basename = path.basename(file);
        if (basename === 'index.ts' || basename === 'type-definition.ts') continue;
        
        const ctx = basename;
        try {
            const module = await import(file);
            let place: SurgicalPlace = module.default;
            
            if (!place) {
                const exports = Object.values(module);
                place = exports.find((e: any) => e && e.id && e.location) as SurgicalPlace;
            }

            if (!place) {
                blocking.push(`🚨 [${ctx}] Export valide introuvable.`);
                continue;
            }

            // ════════════════════════════════════════
            // 🚨 BLOQUANTS (Données corrompues)
            // ════════════════════════════════════════

            const gid = place.location?.google_id;
            const slug = place.slug;

            // Unicité Google ID
            if (!gid) {
                blocking.push(`🚨 [${ctx}] google_id MANQUANT.`);
            } else if (googleIds.has(gid)) {
                blocking.push(`🚨 [${ctx}] COLLISION google_id (${gid}) avec ${googleIds.get(gid)}`);
            } else {
                googleIds.set(gid, ctx);
            }

            // Unicité Slug
            if (!slug) {
                blocking.push(`🚨 [${ctx}] slug MANQUANT.`);
            } else if (slugs.has(slug)) {
                blocking.push(`🚨 [${ctx}] DOUBLON de slug "${slug}" avec ${slugs.get(slug)}`);
            } else {
                slugs.set(slug, ctx);
            }

            // [Rule Removed: Apostrophes]

            // GPS invalide
            if (place.location.lat === 0 || place.location.lng === 0) {
                blocking.push(`🚨 [${ctx}] Coordonnées GPS invalides (0,0).`);
            }

            // Hero image manquante
            if (!place.images.hero) {
                blocking.push(`🚨 [${ctx}] Hero image MANQUANTE.`);
            }

            // Catégorie invalide
            if (!['restaurant', 'bar', 'café'].includes(place.category)) {
                blocking.push(`🚨 [${ctx}] Catégorie invalide "${place.category}". Autorisées : restaurant, bar, café.`);
            }

            // Mode ciblé : skip les détails pour les fiches non concernées
            if (targetSlugs.length > 0 && slug && !targetSlugs.includes(slug)) continue;

            // ════════════════════════════════════════
            // ⚠️ INFORMATIFS (À corriger quand possible)
            // ════════════════════════════════════════

            // Photos insuffisantes
            const totalPhotos = (place.images.hero ? 1 : 0) + (place.images.gallery?.length || 0);
            if (totalPhotos < MIN_GALLERY_PHOTOS) {
                warnings.push(`📸 [${ctx}] Photos insuffisantes (${totalPhotos}/${MIN_GALLERY_PHOTOS}).`);
            }

            // Subcategories
            if (!place.subcategory || place.subcategory.length === 0) {
                warnings.push(`👻 [${ctx}] subcategory vide [].`);
            } else {
                place.subcategory.forEach(tag => {
                    if (!(ALLOWED_SUBCATEGORIES as readonly string[]).includes(tag)) {
                        warnings.push(`🏷️  [${ctx}] Tag inconnu "${tag}". Voir whitelist.`);
                    }
                });
            }

            // Horaires
            if (!place.practical.opening_hours_raw || place.practical.opening_hours_raw.includes("TODO")) {
                warnings.push(`⏰ [${ctx}] Horaires manquants ou TODO.`);
            }

            // Badge Ferme Tard
            const isLate = place.practical.opening_hours_raw?.includes("00:00") || 
                           place.practical.opening_hours_raw?.includes("01:00") || 
                           place.practical.opening_hours_raw?.includes("02:00");
            if (isLate && !place.practical.ferme_tard) {
                warnings.push(`🌙 [${ctx}] Horaires nocturnes détectés mais badge ferme_tard=false.`);
            }

            // Badge Terrasse
            if (place.practical.terrace === undefined) {
                warnings.push(`☀️  [${ctx}] Badge terrasse non défini.`);
            }
            if (!place.practical.terrace && (place.description?.toLowerCase().includes("terrasse") || place.insider_tip?.toLowerCase().includes("terrasse"))) {
                warnings.push(`☀️  [${ctx}] Terrasse mentionnée dans le texte mais badge=false.`);
            }

            // Moods génériques
            const moodValues = Object.values(place.moods);
            if (moodValues.every(v => v === 50)) {
                warnings.push(`🎭 [${ctx}] Moods génériques 50/50/50.`);
            }

            // Insider Tip (3 puces)
            if (!place.insider_tip || place.insider_tip.includes("TODO")) {
                warnings.push(`💡 [${ctx}] Insider Tip manquant.`);
            } else {
                const bulletCount = (place.insider_tip.match(/•/g) || []).length;
                if (bulletCount < 3) {
                    warnings.push(`💡 [${ctx}] Insider Tip : ${bulletCount}/3 puces '•'.`);
                }
            }

            // Must Eat
            const mustEat = place.specials?.must_eat;
            if (!mustEat || mustEat.includes("TODO")) {
                warnings.push(`🍴 [${ctx}] must_eat manquant.`);
            } else if (!mustEat.includes('.') || mustEat.split('.')[0].length < 3) {
                warnings.push(`🍴 [${ctx}] must_eat : préfixe cuisine manquant ("${mustEat}").`);
            }

            // Real Talk
            if (!place.real_talk) {
                warnings.push(`📖 [${ctx}] real_talk manquant.`);
            }

            // Nearest Metro
            if (!place.location.nearest_metro || place.location.nearest_metro === "TODO") {
                warnings.push(`🚇 [${ctx}] nearest_metro manquant.`);
            }

            // Prix en centimes (détection ancien format string)
            (place.pricing.menu_items || []).forEach(cat => {
                cat.items?.forEach(item => {
                    if ((item as any).price !== undefined && (item as any).price_cents === undefined) {
                        warnings.push(`💰 [${ctx}] Format obsolète pour "${item.name}" — Utilisez price_cents.`);
                    }
                });
            });

        } catch (e) {
            blocking.push(`💥 [${path.basename(file)}] Erreur de parsing / import.`);
        }
    }

    // ════════════════════════════════════════
    // RAPPORT FINAL
    // ════════════════════════════════════════

    console.log('═'.repeat(60));
    
    if (blocking.length > 0) {
        console.error(`\n🚨 ${blocking.length} ERREUR(S) BLOQUANTE(S) :`);
        blocking.forEach(err => console.error(err));
    }
    
    if (warnings.length > 0) {
        console.warn(`\n⚠️  ${warnings.length} AVERTISSEMENT(S) :`);
        warnings.forEach(w => console.warn(w));
    }

    if (blocking.length === 0 && warnings.length === 0) {
        console.log(`\n✅ AUDIT PARFAIT : ${files.length} lieux certifiés Moelle Totale.`);
    } else if (blocking.length === 0) {
        console.log(`\n✅ AUDIT OK (${warnings.length} warnings non-bloquants).`);
    }

    // Exit 1 UNIQUEMENT si erreurs bloquantes
    process.exit(blocking.length > 0 ? 1 : 0);
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
