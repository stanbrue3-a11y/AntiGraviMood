import path from 'path';
import fs from 'fs';
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
        const arrFlagIndex = args.indexOf('--arrondissement');
        const statusFlagIndex = args.indexOf('--status');
        
        const arr = arrFlagIndex !== -1 ? parseInt(args[arrFlagIndex + 1]) : null;
        const status = statusFlagIndex !== -1 ? args[statusFlagIndex + 1] : null;

        console.log(`📡 Récupération des fiches ${arr ? 'dans le ' + arr + 'ème ' : 'récentes'}...`);
        let query = supabase
            .from('places')
            .select('slug, name, status, dominant_mood, arrondissement')
            .order('created_at', { ascending: false });
        
        if (arr) {
            query = query.eq('arrondissement', arr);
        }
        if (status) {
            query = query.eq('status', status);
        }
        
        if (!arr && !status) {
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

        // 🛑 VALIDATION : Fracture Structurelle de l'insider_tip
        if (payload.insider_tips) {
            if (!Array.isArray(payload.insider_tips) || payload.insider_tips.length !== 3) {
                console.error("🛑 ERREUR FATALE (ÉDITORIAL) : 'insider_tips' DOIT être un tableau JSON strict contenant EXACTEMENT 3 éléments.");
                process.exit(1);
            }
            // 🛑 ANTI-TITRES RIGIDES
            const forbiddenTitles = [/Le Dogme\s*:/i, /Mon conseil\s*:/i, /Timing\s*:/i, /Conseil\s*:/i];
            for (const tip of payload.insider_tips) {
                const foundTitle = forbiddenTitles.find(p => p.test(tip));
                if (foundTitle) {
                    console.error(`🛑 ERREUR ÉDITORIALE (RIGIDITÉ) : Ne mettez pas de titres type "${foundTitle.source}" dans l'insider tip. Parlez naturellement.`);
                    process.exit(1);
                }
            }
            // Concaténation pour Supabase (qui attend un string)
            payload.insider_tip = payload.insider_tips.map((tip: string) => `• ${tip.replace(/^•\s*/, '')}`).join('\n');
            delete payload.insider_tips;
        } else if (payload.insider_tip) {
             console.error("🛑 ERREUR FATALE (ÉDITORIAL) : L'ancien format 'insider_tip' (string) est obsolète. Utilisez 'insider_tips' (tableau strict de 3 éléments).");
             process.exit(1);
        }

        if (payload.description) {
            // 🛑 VALIDATION : Fact-Extract First
            if (!payload.raw_facts || !Array.isArray(payload.raw_facts) || payload.raw_facts.length === 0) {
                console.error("🛑 ERREUR FATALE (PROCESS) : Vous devez obligatoirement fournir un tableau 'raw_facts' contenant vos extractions brutes AVANT de rédiger la description.");
                process.exit(1);
            }

            // 🛑 VALIDATION : Champs Sensoriels Obligatoires
            if (!payload.sensory_material || !payload.sensory_noise) {
                console.error("🛑 ERREUR FATALE (SENSORY) : Vous devez fournir 'sensory_material' (ex: 'bois patiné') et 'sensory_noise' (ex: 'brouhaha de brasserie') dans le payload.");
                process.exit(1);
            }

            if (payload.description.length < 200) {
                console.error('❌ ERREUR QUALITÉ : La description est trop courte (min 200 car.). Soyez plus immersif.');
                process.exit(1);
            }
        }

        const combinedText = (payload.description || '') + ' ' + (payload.insider_tip || '');

        // 🛡️ DÉTECTEUR DE RACINES (ANTI-BULLSHIT AMÉLIORÉ)
        const FORBIDDEN_ROOTS = [
            'généreu', 'authentiq', 'convivial', 'traditionnel', 'pépite', 'incontournable', 
            'chaleur', 'impeccable', 'perle rare', 'vaut le détour', 'expérience unique',
            'institution', 'spectaculaire', 'véritable', 'écrin', 'chic', 'cosy', 'élégance', 'parisien', 'cadre', 'nostalgi'
        ];
        const foundForbidden = FORBIDDEN_ROOTS.find(root => {
            const regex = new RegExp(`\\b${root}`, 'i');
            return regex.test(combinedText);
        });
        if (foundForbidden) {
            console.error(`🛑 ERREUR ÉDITORIALE (MOTS CREUX) : Votre texte contient des clichés interdits (racine détectée : "${foundForbidden}")`);
            process.exit(1);
        }

        // 🛡️ GARDE-FOU ADN (4.0) — Bloque l'enrichissement si le lieu ne respecte pas le standard
        const { data: ratingData } = await supabase.from('places').select('google_rating, name').eq('slug', slug).single();
        if (ratingData && ratingData.google_rating < 4.0) {
            console.error(`🛑 REJET ADN (agent_bridge) : "${ratingData.name}" (${ratingData.google_rating}) est en dessous du standard 4.0.`);
            console.error(`   👉 Ce lieu ne peut plus être enrichi éditorialement.`);
            process.exit(1);
        }

        if (payload.description) {
            // 🛡️ DÉTECTEUR DE LYRISME (ANTI-BULLSHIT)
            const LYRISME_PATTERNS = [
                /moment suspendu/i, /voyage sensoriel/i, /explosion de saveurs/i, 
                /éveil des sens/i, /sublimer le produit/i, /invitation au voyage/i,
                /paradis des gourmets/i, /pépite gastronomique/i, /magie opère/i,
                /capsule temporelle/i, /véritable ambassade/i, /escale (levantine|asiatique|italienne)/i
            ];
            const foundLyrisme = LYRISME_PATTERNS.find(p => p.test(combinedText));
            if (foundLyrisme) {
                console.error(`🛑 ERREUR ÉDITORIALE (LYRISME) : Le texte est trop "marketing" (pattern détecté : "${foundLyrisme.source}"). Soyez plus factuel et naturel.`);
                process.exit(1);
            }

            // 🛡️ DÉTECTEUR CORPORATE / RP / BIOGRAPHIE (ANTI-BULLSHIT)
            const CORPORATE_PATTERNS = [
                /groupe \w+/i, /signé par/i, /appartenant au/i, /nouvelle adresse de/i, /petit frère de/i, /en face de/i, /face à/i,
                /le chef \w+/i, /la cheffe \w+/i, /fondé par/i, /créé par/i, /ouvert par/i, /imaginé par/i, /pensé par/i, /l'histoire de/i
            ];
            const foundCorporate = CORPORATE_PATTERNS.find(p => p.test(combinedText));
            if (foundCorporate) {
                console.error(`🛑 ERREUR ÉDITORIALE (CORPORATE/RP/BIO) : Le texte contient du name-dropping, des biographies ou des références externes ("${foundCorporate.source}"). Racontez l'expérience du lieu, pas la vie des fondateurs, et ne citez pas la concurrence.`);
                process.exit(1);
            }

            // 🛡️ DÉTECTEUR DE CONTRADICTION DE MOOD
            if (payload.dominant_mood === 'chill' || (!payload.dominant_mood && (await supabase.from('places').select('dominant_mood').eq('slug', slug).single()).data?.dominant_mood === 'chill')) {
                const noisePatterns = [/bruyant/i, /agité/i, /foule/i, /complet/i, /serré/i, /animé/i, /vivant/i];
                const foundNoise = noisePatterns.find(p => p.test(combinedText));
                if (foundNoise) {
                    console.error(`🛑 CONTRADICTION DÉTECTÉE : Vous décrivez un lieu "${foundNoise.source}" mais le mood est "chill". Un lieu chill DOIT être calme et posé.`);
                    process.exit(1);
                }
            }

            // 🛡️ DÉTECTEUR DE MATIÈRE (SENSORY CHECK)
            const sensoryPatterns = [/zinc/i, /bois/i, /pierre/i, /velours/i, /bruit/i, /odeur/i, /vacarme/i, /froid/i, /chaud/i, /matière/i, /marbre/i, /cuivre/i, /céramique/i, /brique/i, /béton/i, /zinc/i];
            const hasSensory = sensoryPatterns.some(p => p.test(combinedText));
            if (!hasSensory) {
                console.error(`🛑 ERREUR QUALITÉ (SENSORY) : Votre description manque de "matière". Mentionnez au moins un élément physique (zinc, bois, pierre, vacarme, odeur...).`);
                process.exit(1);
            }

            // 🛡️ GARDE-FOU ANTI-HALLUCINATION (DURCI AVEC PREUVE EXACTE)
            const HALLUCINATION_PATTERNS = [
                /même filière/i, /même fournisseur/i, /approvisionné (chez|par|auprès)/i, /livré (en|par|depuis|directement)/i,
                /pêché (en|par|à|dans)/i, /élevé (en|par|à|dans)/i, /maturation de \d+/i, /en provenance de/i, /sourcé (chez|auprès|directement)/i,
                /provenance (de|du|des)/i, /producteur/i, /éleveur/i, /maraîcher/i, /pêcheur/i, /charcutier/i, /boulanger/i
            ];
            const riskyMatch = HALLUCINATION_PATTERNS.find(p => p.test(combinedText));
            if (riskyMatch && (!payload.dogme_source_ref || !payload.dogme_exact_quote)) {
                console.error(`🛑 ERREUR ANTI-HALLUCINATION : Le texte contient une affirmation technique (pattern : "${riskyMatch.source}").`);
                console.error(`   ➡️  AJOUTEZ "dogme_source_ref" (URL/ID) ET "dogme_exact_quote" (phrase copiée-collée) pour PROUVER le sourcing.`);
                process.exit(1);
            }
            if (payload.dogme_source_ref) {
                const validRefs = ['GOOGLE_REVIEWS', 'SITE_OFFICIEL', 'MENU_PHOTO'];
                if (!validRefs.includes(payload.dogme_source_ref) && !payload.dogme_source_ref.startsWith('http://') && !payload.dogme_source_ref.startsWith('https://')) {
                    console.error("🛑 ERREUR ANTI-HALLUCINATION : La source fournie doit être soit une URL valide (http/https), soit l'une des valeurs autorisées (GOOGLE_REVIEWS, SITE_OFFICIEL, MENU_PHOTO).");
                    process.exit(1);
                }
            }

            // 🛡️ VÉRIFICATION CRYPTOGRAPHIQUE DE LA CITATION GOOGLE REVIEWS
            if (payload.dogme_source_ref === 'GOOGLE_REVIEWS' && payload.dogme_exact_quote) {
                const { data: placeData } = await supabase.from('places').select('google_id').eq('slug', slug).single();
                if (placeData && placeData.google_id) {
                    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
                    if (apiKey) {
                        try {
                            const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeData.google_id}&fields=reviews&key=${apiKey}&language=fr`);
                            const json = await res.json();
                            const reviews = json.result?.reviews || [];
                            
                            // Normalisation stricte pour la comparaison (lettres/chiffres uniquement)
                            const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
                            const normalizedQuote = normalize(payload.dogme_exact_quote);
                            
                            // On vérifie si un des 5 derniers avis contient la citation (au moins partiellement, min 10 chars)
                            if (normalizedQuote.length > 10) {
                                const isQuoteReal = reviews.some((r: any) => normalize(r.text || '').includes(normalizedQuote));
                                
                                if (!isQuoteReal) {
                                    console.error(`🛑 ERREUR ANTI-HALLUCINATION FATALE : La citation ("${payload.dogme_exact_quote}") est introuvable dans les avis Google Maps récents !`);
                                    console.error(`   👉 L'IA A HALLUCINÉ LA SOURCE. Vous DEVEZ copier-coller une vraie phrase issue d'un vrai client.`);
                                    process.exit(1);
                                }
                            }
                        } catch (e) {
                            console.error("⚠️ Impossible de vérifier la citation avec l'API Google, vérification manuelle requise.");
                        }
                    }
                }
            }

            // 🛡️ GARDE-FOU GÉOGRAPHIQUE : Anti-Hallucination d'arrondissement
            const { data: placeData } = await supabase.from('places').select('arrondissement').eq('slug', slug).single();
            const realArr = placeData?.arrondissement;
            if (realArr) {
                const arrNames = ["premier", "deuxième", "troisième", "quatrième", "cinquième", "sixième", "septième", "huitième", "neuvième", "dixième", "onzième", "douzième", "treizième", "quatorzième", "quinzième", "seizième", "dix-septième", "dix-huitième", "dix-neuvième", "vingtième"];
                for (let i = 1; i <= 20; i++) {
                    if (i === realArr) continue;
                    const digitRegex = new RegExp(`\\b${i}\\s*(e|ème|eme)\\b`, 'i');
                    if (digitRegex.test(combinedText)) {
                        console.error(`🛑 CONTRADICTION GÉO : Le texte mentionne le ${i}e arrondissement, mais ce lieu est dans le ${realArr}e.`);
                        process.exit(1);
                    }
                }
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
                console.error(`   👉 RAPPEL ORDRE : 1. Façade -> 2. Intérieur -> 3. Plats (Ne jamais mettre un plat en 2ème si un intérieur est dispo).`);
                process.exit(1);
            }
        }

        // 🛑 VALIDATION : Enum Dominant Mood
        const validMoods = ['chill', 'festif', 'culturel'];
        if (payload.dominant_mood !== undefined && !validMoods.includes(payload.dominant_mood)) {
            console.error(`🛑 ERREUR FATALE (ENUM) : dominant_mood doit être l'un de : ${validMoods.join(', ')}`);
            process.exit(1);
        }
        
        if (payload.tags && payload.tags.includes('pastille_bleue') && !payload.dominant_mood) {
            const { data: existingPlace } = await supabase.from('places').select('dominant_mood').eq('slug', slug).single();
            if (!existingPlace?.dominant_mood) {
                console.error("🛑 ERREUR QUALITÉ : Impossible de certifier (pastille_bleue) sans définir un 'dominant_mood'.");
                process.exit(1);
            }
        }

        // 🛑 VALIDATION : Garde-Fou Titan (Anti-Omission)
        // Si l'agent enrichit l'éditorial (Phase 1 bis), il DOIT obligatoirement auditer le métro, la terrasse et les sous-catégories.
        if (payload.description || payload.insider_tip) {
            if (!payload.subcategories || !Array.isArray(payload.subcategories) || payload.subcategories.length === 0) {
                console.error("🛑 ERREUR FATALE (TITAN) : Le tableau 'subcategories' est obligatoire (ex: ['brunch', 'coffee_shop']).");
                process.exit(1);
            }
            if (payload.nearest_metro === undefined || !Array.isArray(payload.metro_lines)) {
                console.error("🛑 ERREUR FATALE (TITAN) : L'audit du métro (nearest_metro et metro_lines en tableau) est OBLIGATOIRE lors de l'enrichissement éditorial !");
                process.exit(1);
            }
            if (payload.has_terrace === undefined) {
                console.error("🛑 ERREUR FATALE (TITAN) : L'audit visuel de la terrasse (has_terrace en boolean) est OBLIGATOIRE ! Ne vous fiez pas aveuglément à Google.");
                process.exit(1);
            }
        }

        // 🛑 VALIDATION : Ontologie Stricte (subcategories.json) toujours exécutée si subcategories est fourni
        if (payload.subcategories) {
            const subcatRefPath = path.join(__dirname, 'data/subcategories.json');
            if (fs.existsSync(subcatRefPath)) {
                const subcatData = JSON.parse(fs.readFileSync(subcatRefPath, 'utf8'));
                const allowedSubcats = [
                    ...subcatData.format,
                    ...subcatData.cuisine,
                    ...subcatData.specialite
                ];
                const invalidSubcat = payload.subcategories.find((s: string) => !allowedSubcats.includes(s));
                if (invalidSubcat) {
                    console.error(`🛑 ERREUR FATALE (ONTOLOGIE) : La sous-catégorie "${invalidSubcat}" n'existe pas dans le référentiel strict.`);
                    console.error(`   👉 Consultez scripts/data/subcategories.json pour choisir parmi les tags autorisés (format, cuisine, specialite).`);
                    process.exit(1);
                }
            } else {
                console.error("⚠️ Fichier data/subcategories.json introuvable. Validation de l'ontologie ignorée.");
            }
        }

        // 🛑 VALIDATION : Enum Category
        const validCategories = ['restaurant', 'bar', 'café'];
        if (payload.category && !validCategories.includes(payload.category)) {
            console.error(`🛑 ERREUR FATALE (ADN) : Un lieu DOIT être l'un de : ${validCategories.join(', ')}. Pas de club, boulangerie ou autre !`);
            process.exit(1);
        }

        // 🛑 VALIDATION : Enum Reservation Policy
        const validResa = ['sans_resa', 'resa_conseillee', 'resa_obligatoire'];
        if (payload.reservation_policy && !validResa.includes(payload.reservation_policy)) {
            console.error(`🛑 ERREUR FATALE (ENUM) : reservation_policy doit être l'un de : ${validResa.join(', ')}`);
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

        // 🛡️ GARDE-FOU F.I.P.P (Protocole Média Titan)
        // La hero_image et google_photos sont traités séparément par le frontend (maxwidth=1600 vs maxwidth=800).
        // On s'assure donc que la hero_image N'EST PAS dans google_photos pour éviter les doublons UI.
        if (payload.hero_image && payload.google_photos && Array.isArray(payload.google_photos)) {
            if (payload.google_photos.includes(payload.hero_image)) {
                payload.google_photos = payload.google_photos.filter((p: string) => p !== payload.hero_image);
                console.log('📸 [F.I.P.P] Auto-correction : hero_image retirée de google_photos pour éviter les doublons UI.');
            }
        }

        // 🛡️ AUTO-TAGGING : Marquage automatique des lots pour l'UI
        const { data: current } = await supabase.from('places').select('tags').eq('slug', slug).single();
        let existingTags = current?.tags || [];
        let incomingTags = payload.tags || [];
        
        // On fusionne les tags existants et les nouveaux en évitant les doublons
        let finalTags = Array.from(new Set([...existingTags, ...incomingTags]));
        
        // On ajoute new_lot et pastille_rouge par défaut UNIQUEMENT si aucune pastille spécifique n'est présente
        if (finalTags.length === 0 || (!finalTags.includes('new_lot') && !finalTags.includes('pastille_bleue') && !finalTags.includes('pastille_rouge'))) {
            finalTags.push('new_lot', 'pastille_rouge');
        }
        payload.tags = finalTags;

        // 🛡️ GARDE-FOU ANTI-HALLUCINATION : Persistance de la Preuve dans les logs
        if (payload.dogme_source_ref && payload.dogme_exact_quote) {
            const { data: logData } = await supabase.from('places').select('internal_audit_logs').eq('slug', slug).single();
            const existingLogs = logData?.internal_audit_logs || [];
            const proofLog = `[DOGME PROOF] Ref: ${payload.dogme_source_ref} | Citation exacte: "${payload.dogme_exact_quote}"`;
            payload.internal_audit_logs = [...existingLogs, ...(payload.internal_audit_logs || []), proofLog];
        }

        // 🧹 Nettoyage : champs de validation locale, pas des colonnes Supabase
        delete payload.dogme_source;
        delete payload.dogme_source_ref;
        delete payload.dogme_exact_quote;
        delete payload.raw_facts;
        delete payload.sensory_material;
        delete payload.sensory_noise;

        const { data, error } = await supabase.from('places').update(payload).eq('slug', slug).select();
        
        if (error) throw error;
        if (!data || data.length === 0) {
            console.error(`❌ ERREUR FATALE : Aucun lieu trouvé avec le slug "${slug}". La mise à jour a échoué (0 ligne affectée). Vérifiez le slug !`);
            process.exit(1);
        }
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

        if (!payload.Url_Photos_Menu || !Array.isArray(payload.Url_Photos_Menu) || payload.Url_Photos_Menu.length === 0) {
            console.error("🛑 ERREUR FATALE (ANTI-HALLUCINATION) : Passage en Phase 2 refusé. Vous DEVEZ fournir la preuve visuelle dans 'Url_Photos_Menu'. Pas de photo = pas de publication.");
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
            Url_Photos_Menu: payload.Url_Photos_Menu,
            status: 'PUBLISHED'
        }).eq('slug', slug).select();
        
        if (error) throw error;
        console.log(`✅ [PHASE 2] Menu validé et lieu PUBLIÉ pour ${slug} !`);
    }
    else if (action === '--delete') {
        const { error } = await supabase.from('places').delete().eq('slug', slug);
        if (error) throw error;
        console.log(`🗑️ [ANTIGRAVITY] Lieu supprimé avec succès : ${slug}`);
    }
}

main().catch(console.error);
