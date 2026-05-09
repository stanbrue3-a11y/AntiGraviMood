import path from 'path';
import { createClient } from '@supabase/supabase-js';
import metroData from './data/paris_metro_stations.json';

// Ce script est la "Télécommande" exclusive de l'Agent IA (Antigravity).
// Il permet de lire et d'enrichir les fiches Supabase sans générer de fichiers locaux.

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Clés API Supabase manquantes dans le .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
    const args = process.argv.slice(2);
    const action = args[0]; // --list, --get, --update, --menu, --audit
    const slug = args[1];

    if (action === '--list') {
        const arr = args[1] ? parseInt(args[1]) : null;
        console.log(`📡 Récupération des fiches ${arr ? 'dans le ' + arr + 'ème ' : 'récentes'}...`);
        let query = supabase
            .from('places')
            .select('slug, name, status, dominant_mood, arrondissement')
            .order('created_at', { ascending: false });
        
        if (arr) {
            query = query.eq('arrondissement', arr);
        } else {
            query = query.limit(10);
        }

        const { data, error } = await query;
        if (error) throw error;
        console.log(JSON.stringify(data, null, 2));
        return;
    }

    if (!slug && (action === '--get' || action === '--update' || action === '--audit')) {
        console.error('❌ Précisez un slug. Ex: npx tsx scripts/agent_bridge.ts --audit le-cornichon-paris-14');
        process.exit(1);
    }

    if (action === '--audit') {
        const { data: p, error } = await supabase.from('places').select('*').eq('slug', slug).single();
        if (error || !p) { console.error(`❌ Fiche "${slug}" introuvable.`); process.exit(1); }

        // Phase 1 : champs que l'Agent doit remplir (obligatoires avant publication)
        const phase1 = [
            { label: 'description (200 car. min)', ok: !!(p.description && p.description.length >= 200) },
            { label: 'insider_tip (3 • min)',      ok: !!(p.insider_tip && (p.insider_tip.match(/•/g) || []).length >= 3) },
            { label: 'dominant_mood',              ok: !!p.dominant_mood },
            { label: 'nearest_metro',              ok: !!p.nearest_metro },
            { label: 'metro_lines',                ok: !!(p.metro_lines && p.metro_lines.length > 0) },
            { label: 'subcategories',              ok: !!(p.subcategories && p.subcategories.length > 0) },
            { label: 'has_terrace',                ok: p.has_terrace !== null },
            { label: 'reservation_policy',         ok: !!p.reservation_policy },
            { label: 'hero_image',                 ok: !!p.hero_image },
            { label: 'closes_late',                ok: p.closes_late !== null },
            { label: 'Audit F.I.P.P (Façade #1)',  ok: !!(p.internal_audit_logs && p.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))) },
        ];
        // Phase 2 : champs menu — NORMALEMENT vides jusqu'à réception de la photo du menu
        const phase2 = [
            { label: 'on_mange_quoi_ici', ok: !!p.on_mange_quoi_ici },
            { label: 'plat_median_cents', ok: !!p.plat_median_cents },
        ];

        const p1score = phase1.filter(c => c.ok).length;
        const p1total = phase1.length;
        const p1pct = Math.round((p1score / p1total) * 100);

        console.log(`\n📋 AUDIT — ${p.name} [${p.status}]`);
        console.log('='.repeat(50));
        console.log('  — PHASE 1 (Enrichissement éditorial) —');
        phase1.forEach(c => console.log(`  ${c.ok ? '✅' : '❌'} ${c.label}`));
        console.log(`  Score Phase 1 : ${p1score}/${p1total} (${p1pct}%)`);
        console.log('  — PHASE 2 (Menu — requiert photo) —');
        phase2.forEach(c => console.log(`  ${c.ok ? '✅' : '⏳'} ${c.label}`));
        console.log('='.repeat(50));

        if (p.status === 'SCAFFOLDED' && p1pct < 100) {
            console.log(`  ⚠️  Phase 1 incomplète — ${p1total - p1score} champ(s) manquant(s).`);
        } else if (p.status === 'SCAFFOLDED' && !p.on_mange_quoi_ici) {
            console.log(`  🟡 Phase 1 complète. En attente de la photo du menu (Phase 2).`);
        } else if (p.status === 'PUBLISHED') {
            console.log(`  🟢 Fiche publiée et complète.`);
        }
        return;
    }

    if (action === '--get') {
        const { data, error } = await supabase.from('places').select('*').eq('slug', slug).single();
        if (error) throw error;
        console.log(JSON.stringify(data, null, 2));
    }
    else if (action === '--update') {
        const payloadStr = args.slice(2).join(' ');
        if (!payloadStr) {
            console.error('❌ Payload JSON manquant pour la mise à jour.');
            process.exit(1);
        }
        const payload = JSON.parse(payloadStr);
        
        // 🛑 BOUCLIER ANTI-BÊTISE : Interdiction formelle de remplir le plat avant la Phase 2
        if (payload.on_mange_quoi_ici !== undefined) {
            console.error("🛑 ERREUR FATALE (ANTI-BÊTISE) : Il est strictement interdit de remplir 'on_mange_quoi_ici' pendant la Phase 1. Ce champ est réservé à la Phase 2 (Photo du Menu). La transaction a été bloquée pour protéger la base de données.");
            process.exit(1);
        }

        if (payload.insider_tip) {
            if (!payload.insider_tip.includes('•')) {
                console.error("🛑 ERREUR FATALE (ÉDITORIAL) : L'insider_tip DOIT utiliser des bullet points avec le caractère '•'.");
                process.exit(1);
            }
            
            // 🛑 ANTI-TITRES RIGIDES
            const forbiddenTitles = [/Le Dogme\s*:/i, /Mon conseil\s*:/i, /Timing\s*:/i, /Conseil\s*:/i];
            const foundTitle = forbiddenTitles.find(p => p.test(payload.insider_tip!));
            if (foundTitle) {
                console.error(`🛑 ERREUR ÉDITORIALE (RIGIDITÉ) : Ne mettez pas de titres type "${foundTitle.source}" dans l'insider tip. Parlez naturellement, comme à un ami.`);
                process.exit(1);
            }
        }

        if (payload.description) {
            if (payload.description.length < 200) {
                console.error('❌ ERREUR QUALITÉ : La description est trop courte (min 200 car.). Soyez plus immersif.');
                process.exit(1);
            }
            const forbidden = [
                'généreux', 'authentique', 'convivial', 'traditionnel', 'pépite', 'incontournable', 
                'chaleur de l\'accueil', 'service impeccable', 'cadre chaleureux', 'accueil chaleureux',
                'service aux petits soins', 'perle rare', 'vaut le détour', 'expérience unique',
                'institution', 'spectaculaire', 'véritable', 'écrin', 'chic', 'cosy', 'élégance', 'parisien', 'cadre'
            ];
            const found = forbidden.filter(f => payload.description!.toLowerCase().includes(f));
            if (found.length > 0) {
                console.error('🛑 ERREUR ÉDITORIALE (MOTS CREUX) : Votre description contient des clichés interdits : ' + found.join(', '));
                process.exit(1);
            }

            // 🛡️ DÉTECTEUR DE LYRISME (ANTI-BULLSHIT)
            const LYRISME_PATTERNS = [
                /moment suspendu/i, /voyage sensoriel/i, /explosion de saveurs/i, 
                /éveil des sens/i, /sublimer le produit/i, /invitation au voyage/i,
                /paradis des gourmets/i, /pépite gastronomique/i, /magie opère/i,
                /capsule temporelle/i, /véritable ambassade/i, /escale (levantine|asiatique|italienne)/i
            ];
            const foundLyrisme = LYRISME_PATTERNS.find(p => p.test(payload.description!));
            if (foundLyrisme) {
                console.error(`🛑 ERREUR ÉDITORIALE (LYRISME) : La description est trop "marketing" (pattern détecté : "${foundLyrisme.source}"). Soyez plus factuel et naturel.`);
                process.exit(1);
            }

            // 🛡️ DÉTECTEUR DE CONTRADICTION DE MOOD
            if (payload.dominant_mood === 'chill') {
                const noisePatterns = [/bruyant/i, /agité/i, /foule/i, /complet/i, /serré/i, /animé/i, /vivant/i];
                const foundNoise = noisePatterns.find(p => p.test(payload.description!) || p.test(payload.insider_tip || ''));
                if (foundNoise) {
                    console.error(`🛑 CONTRADICTION DÉTECTÉE : Vous décrivez un lieu "${foundNoise.source}" mais le mood est "chill". Un lieu chill DOIT être calme et posé.`);
                    process.exit(1);
                }
            }

            // 🛡️ GARDE-FOU ANTI-HALLUCINATION
            // Détecte les patterns factuels risqués (relations fournisseur, filière, provenance spécifique)
            // qui ne peuvent pas être vérifiés sans source. Exige un dogme_source traçable.
            const HALLUCINATION_PATTERNS = [
                /même filière/i,
                /même fournisseur/i,
                /approvisionné (chez|par|auprès)/i,
                /livré (en|par|depuis|directement)/i,
                /pêché (en|par|à|dans)/i,
                /élevé (en|par|à|dans)/i,
                /maturation de \d+/i,
                /en provenance de/i,
                /sourcé (chez|auprès|directement)/i,
            ];
            const riskyMatch = HALLUCINATION_PATTERNS.find(p => p.test(payload.description!));
            if (riskyMatch && !payload.dogme_source) {
                console.error(`🛑 ERREUR ANTI-HALLUCINATION : La description contient une affirmation factuelle vérifiable (pattern : "${riskyMatch.source}").`);
                console.error(`   ➡️  Ajoutez "dogme_source": "<URL ou GOOGLE_REVIEWS>" dans le payload pour prouver la source.`);
                console.error(`   ➡️  Si vous ne pouvez pas sourcer ce fait, reformulez sans affirmation de provenance spécifique.`);
                process.exit(1);
            }
            if (payload.dogme_source) {
                console.log(`✅ [TRAÇABILITÉ] Dogme sourcé : ${payload.dogme_source}`);
            }

            // 🛡️ DÉTECTEUR DE MATIÈRE (SENSORY CHECK)
            const sensoryPatterns = [/zinc/i, /bois/i, /pierre/i, /velours/i, /bruit/i, /odeur/i, /vacarme/i, /froid/i, /chaud/i, /matière/i, /marbre/i, /cuivre/i];
            const hasSensory = sensoryPatterns.some(p => p.test(payload.description!));
            if (!hasSensory) {
                console.error(`🛑 ERREUR QUALITÉ (SENSORY) : Votre description manque de "matière". Mentionnez au moins un élément physique (zinc, bois, pierre, vacarme, odeur...).`);
                process.exit(1);
            }
        }

        // 🛡️ GARDE-FOU F.I.P.P (VISUAL AUDIT)
        if (payload.tags && payload.tags.includes('pastille_bleue')) {
            const hasAuditLog = payload.internal_audit_logs && payload.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'));
            const { data: existing } = await supabase.from('places').select('internal_audit_logs').eq('slug', slug).single();
            const alreadyHasAudit = existing?.internal_audit_logs && existing.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'));

            if (!hasAuditLog && !alreadyHasAudit) {
                console.error(`🛑 ERREUR QUALITÉ (F.I.P.P) : La pastille_bleue exige un audit visuel systématique.`);
                console.error(`   ➡️  Ajoutez "[AUDIT F.I.P.P OK] Ordre validé : [X, Y, Z]" dans vos internal_audit_logs.`);
                process.exit(1);
            }
        }

        // 🛑 VALIDATION : Enum Dominant Mood
        const validMoods = ['chill', 'festif', 'culturel'];
        if (payload.dominant_mood && !validMoods.includes(payload.dominant_mood)) {
            console.error(`🛑 ERREUR FATALE (ENUM) : dominant_mood doit être l'un de : ${validMoods.join(', ')}`);
            process.exit(1);
        }

        // 🛑 VALIDATION : Enum Category
        const validCategories = ['restaurant', 'bar', 'café'];
        if (payload.category && !validCategories.includes(payload.category)) {
            console.error(`🛑 ERREUR FATALE (ADN) : Un lieu DOIT être l'un de : ${validCategories.join(', ')}. Pas de club, boulangerie ou autre !`);
            process.exit(1);
        }

        // 🛑 VALIDATION : Métro parisien — source : paris_metro_stations.json (250+ stations, 0 appel API)
        const METRO_MAP = (metroData as any).stations as Record<string, string[]>;
        if (payload.nearest_metro && !METRO_MAP[payload.nearest_metro]) {
            console.error(`🛑 ERREUR GÉO : Station "${payload.nearest_metro}" inconnue dans le référentiel RATP.`);
            console.error(`   Vérifiez l'orthographe exacte (accents inclus). Ex: "Châtelet", "Denfert-Rochereau".`);
            process.exit(1);
        }
        if (payload.metro_lines && payload.nearest_metro && METRO_MAP[payload.nearest_metro]) {
            const validLines = METRO_MAP[payload.nearest_metro];
            const invalidLines = payload.metro_lines.filter((l: string) => !validLines.includes(l));
            if (invalidLines.length > 0) {
                console.error(`🛑 ERREUR GÉO : La ligne ${invalidLines.join(', ')} ne dessert pas "${payload.nearest_metro}". Lignes valides : ${validLines.join(', ')}.`);
                process.exit(1);
            }
        }

        // 🛡️ AUTO-TAGGING : Marquage automatique des lots pour l'\''UI
        const { data: current } = await supabase.from('places').select('tags').eq('slug', slug).single();
        let existingTags = current?.tags || [];
        let incomingTags = payload.tags || [];
        
        // On fusionne les tags existants et les nouveaux en évitant les doublons
        let finalTags = Array.from(new Set([...existingTags, ...incomingTags]));
        
        // On ajoute new_lot par défaut UNIQUEMENT si aucune pastille spécifique n'\''est présente
        if (finalTags.length === 0 || (!finalTags.includes('new_lot') && !finalTags.includes('pastille_bleue'))) {
            finalTags.push('new_lot');
        }
        payload.tags = finalTags;

        // 🧹 Nettoyage : dogme_source est un champ de validation locale, pas une colonne Supabase
        delete payload.dogme_source;

        const { data, error } = await supabase.from('places').update(payload).eq('slug', slug).select();
        
        if (error) throw error;
        console.log(`✅ [ANTIGRAVITY] Mise à jour éditoriale réussie pour ${slug}`);
        console.log(JSON.stringify(data[0], null, 2));
    }
    else if (action === '--menu') {
        // Nouvelle action dédiée EXCLUSIVEMENT à la Phase 2 (quand la photo du menu est fournie)
        const payloadStr = args.slice(2).join(' ');
        const payload = JSON.parse(payloadStr);
        
        if (!payload.on_mange_quoi_ici) {
            console.error("❌ La commande --menu exige le champ 'on_mange_quoi_ici'.");
            process.exit(1);
        }

        const { data: currentPlace } = await supabase.from('places').select('description, insider_tip').eq('slug', slug).single();
        if (!currentPlace?.description || !currentPlace?.insider_tip) {
            console.error("❌ ERREUR : Impossible de publier (PUBLISHED). La Phase 2 (Description + Insider Tip) doit être complétée d'abord.");
            process.exit(1);
        }

        const { data, error } = await supabase.from('places').update({
            on_mange_quoi_ici: payload.on_mange_quoi_ici,
            plat_median_cents: payload.plat_median_cents || null,
            status: 'PUBLISHED'
        }).eq('slug', slug).select();
        
        if (error) throw error;
        console.log(`✅ [PHASE 2] Menu validé et lieu PUBLIÉ pour ${slug} !`);
    }
}

main().catch(console.error);
