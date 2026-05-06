import fs from 'fs';
import path from 'path';
import axios from 'axios';

// CRITICAL: dotenv MUST load before any logic.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_KEY) {
    console.error('❌ Missing EXPO_PUBLIC_GOOGLE_MAPS_API_KEY in .env');
    process.exit(1);
}

/**
 * 🤖 INDUSTRIAL INSERTION SCRIBE v2.1 (SURGICAL MERGE)
 * Standard 2026: Unified Metadata Management with Place ID override.
 */

async function main() {
    const args = process.argv.slice(2);
    const query = args.filter(a => !a.startsWith('--')).join(' ');
    const isForced = args.includes('--force');
    const placeIdArg = args.find(a => a.startsWith('--place_id='))?.split('=')[1];

    if (!query && !placeIdArg) {
        console.log('Usage: npx tsx scripts/industrial_add.ts "Nom du Lieu, Adresse" [--force] [--place_id=ID]');
        process.exit(1);
    }

    let placeId = placeIdArg;
    let candidateName = query;

    try {
        if (!placeId) {
            console.log(`🚀 RECHERCHE CHIRURGICALE (v2.1) : "${query}"`);
            console.log('='.repeat(60));

            // --- BOUCLIER PRÉ-REQUÊTE 0.00$ (Anti-Doublon par Nom) ---
            const querySlug = query.split(',')[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
            const registryRoot = path.join(__dirname, '../src/data/registry/tree');
            
            function findFileBySlug(dir: string, slugToFind: string): string | null {
                if (!fs.existsSync(dir)) return null;
                for (const item of fs.readdirSync(dir)) {
                    const fullP = path.join(dir, item);
                    if (fs.statSync(fullP).isDirectory()) {
                        const found = findFileBySlug(fullP, slugToFind);
                        if (found) return found;
                    } else if (item === `${slugToFind}.ts` || item === `${slugToFind}.tsx`) {
                        return fullP;
                    }
                }
                return null;
            }

            const existingPreFetch = findFileBySlug(registryRoot, querySlug);
            if (existingPreFetch && !isForced) {
                console.warn(`🛡️  BOUCLIER PRÉ-REQUÊTE ACTIVÉ : Vous avez économisé 0.02 $.`);
                console.error(`🛑 Ce lieu ("${querySlug}") semble déjà exister ici :`);
                console.error(`   👉 ${existingPreFetch}`);
                console.error('   Utilisez --force pour ignorer, ou utilisez son ID directement.');
                process.exit(1);
            }

            console.warn('💡 INFO FACTURATION : Cette recherche va consommer ~0.02$ (Text Search + Details).');

            // 1. FIND PLACE (Get Place ID and Basic Geometry)
            const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id,name,geometry,rating,photos,formatted_address&key=${GOOGLE_KEY}`;
            const searchRes = await axios.get(findUrl);
            
            if (searchRes.data.status !== 'OK' || !searchRes.data.candidates[0]) {
                console.error('❌ Lieu non trouvé sur Google Maps.');
                process.exit(1);
            }

            const candidate = searchRes.data.candidates[0];
            placeId = candidate.place_id;
            candidateName = candidate.name;

            // --- NOUVELLE MESURE DE PROTECTION ANTI-DOUBLON (ANTI-COÛT) ---
            const duplicateCheck = (dir: string): string | null => {
                const items = fs.readdirSync(dir);
                for (const item of items) {
                    const fullP = path.join(dir, item);
                    if (fs.statSync(fullP).isDirectory()) {
                        const found = duplicateCheck(fullP);
                        if (found) return found;
                    } else if (item.endsWith('.ts')) {
                        const content = fs.readFileSync(fullP, 'utf-8');
                        if (content.includes(placeId!)) return fullP;
                    }
                }
                return null;
            };

            const duplicateFile = duplicateCheck(registryRoot);
            
            if (duplicateFile && !isForced) {
                console.error(`🛑 ARRÊT DE SÉCURITÉ : Ce lieu (${placeId}) existe déjà dans :`);
                console.error(`   👉 ${duplicateFile}`);
                console.error('   Utilisez --force pour ignorer cette sécurité.');
                process.exit(1);
            }

            console.log(`✅ Lieu Identifié : ${candidateName} (${placeId})`);
        } else {
            console.log(`🚀 ANCRAGE DIRECT PAR PLACE ID : "${placeId}"`);
            console.warn('💡 INFO FACTURATION : Cet appel va consommer ~0.017$ (Details).');
        }

        // 2. GET DETAILS (Hours, Website, Photos, Reviews pour le Cerveau IA)
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry,opening_hours,rating,user_ratings_total,website,url,address_components,photos,reviews,editorial_summary&key=${GOOGLE_KEY}&language=fr`;
        const detailsRes = await axios.get(detailsUrl);
        const details = detailsRes.data.result;

        if (!details) {
            console.error('❌ Impossible de récupérer les détails. Status:', detailsRes.data.status);
            process.exit(1);
        }

        if (!candidateName) candidateName = details.name;

        // 3. EXTRACT NEW DATA
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        const address = details.formatted_address;
        const rating = details.rating || 0;
        const reviewsCount = details.user_ratings_total || 0;
        const website = details.website || details.url;
        const hours = details.opening_hours?.weekday_text?.join(' | ') || "Non renseigné";
        
        const isLate = hours.includes("00:00") || hours.includes("01:00") || hours.includes("02:00");
        const reservationPolicy = details.website?.includes('thefork') || details.website?.includes('zenchef') ? 'resa_conseillee' : 'sans_resa';
        
        const postalCode = details.address_components?.find((c: any) => c.types.includes('postal_code'))?.short_name || '75000';
        const arrondissement = parseInt(postalCode.slice(-2)) || 0;

        const photoRefs = details.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
        const hero = photoRefs[0] || 'REF_MISSING';
        const gallery = photoRefs.slice(1);
        
        let aiTerrace = false;

        const slug = details.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        
        // --- SÉCURITÉ NOMENCLATURE 2026 (Anti-Crash) ---
        // 1. Apostrophes typographiques obligatoires dans le 'name'
        const safeName = details.name.replace(/'/g, "’");
        // 2. Export-Name (Interdiction de commencer par un chiffre)
        let exportName = slug.replace(/-/g, '_');
        if (/^\d/.test(exportName)) {
            exportName = `place__${exportName}`;
        }
        
        // GLOBAL SLUG SEARCH
        function findExistingFile(dir: string, currentSlug: string): string | null {
            if (!fs.existsSync(dir)) return null;
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    const found = findExistingFile(fullPath, currentSlug);
                    if (found) return found;
                } else if (file === `${currentSlug}.ts` || file === `${currentSlug}.tsx`) {
                    return fullPath;
                }
            }
            return null;
        }

        const registryRoot = path.join(__dirname, '../src/data/registry/tree');
        const existingFilePath = findExistingFile(registryRoot, slug);
        
        const targetDir = path.join(__dirname, `../src/data/registry/tree/${arrondissement < 10 ? '0' + arrondissement : arrondissement}/auto/`);
        const filePath = existingFilePath || path.join(targetDir, `${slug}.ts`);

        // 4. SMART MERGE LOGIC (Moelle V11.3)
        let menuItems = `[]`;
        let description = "TODO: Description riche (3 phrases minimum).";
        let catchline = "TODO: Expert catchline. [Punchy !]";
        let tip = "• **Timing Stratégique** : TODO\n  • **Combo Moelle** : TODO\n  • **Expérience Culturelle** : TODO";
        let subcategories = '["restaurant"]';
        let specials = `{\n    cuisine: ["Française"],\n    drinks: [],\n    must_eat: "Cuisine [Type]. TODO",\n  }`;
        let moods = `{\n    chill: 60,\n    festif: 40,\n    culturel: 50\n  }`;
        let verified = "false";
        let nearest_metro = "TODO";
        let metro_lines = "[]";

        // --- 🧠 CERVEAU IA (Gemini 2.5 Flash) ---
        const GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
        if (GEMINI_KEY && details.reviews && existingFilePath === null) {
            console.log(`🧠 Analyse sémantique des ${details.reviews.length} avis Google en cours par l'IA...`);
            const reviewsText = details.reviews.map((r: any) => r.text).join(" | ");
            const prompt = `
            Lieu : ${candidateName}
            Avis clients : ${reviewsText}

            Tu es un critique gastronomique pointu (façon Le Fooding) pour l'application exigeante 'MoodMap'.
            Ta mission est de fournir une description HYPER précise et sourcée sur ce lieu. 
            NE TE LIMITE PAS aux avis fournis. Utilise ta propre base de connaissances sur ce restaurant parisien pour donner des détails précis (nom du chef, plats signatures réels, histoire du lieu, type de vin, etc.). Si tu ne le connais pas intimement, sois le plus factuel et appétissant possible avec les avis.
            Si le lieu a une terrasse, précise-le (has_terrace: true).
            Ton output DOIT être un JSON strict et valide, sans formattage markdown, prêt pour un JSON.parse().
            
            Format attendu:
            {
                "description": "3 phrases qualitatives décrivant l'expérience et le lieu (sans apostrophes droites, utilise ’).",
                "expert_catchline": "1 phrase très punchy (on y mange quoi ?). Ex: Le bistrot de quartier indémodable.",
                "insider_tip": "• [Astuce 1 basée sur les reviews]\\n• [Astuce 2]\\n• [Astuce 3]",
                "must_eat": "Cuisine [Type]. [Plat mentionné 1] & [Plat mentionné 2]",
                "has_terrace": true, // Boolean. Mets true UNIQUEMENT si les avis ou le contexte mentionnent explicitement une terrasse ou extérieur.
                "moods": { "chill": 60, "festif": 20, "culturel": 20 },
                "subcategories": ["bistronomie"],
                "real_talk": {
                    "le_secret": "Une phrase courte sur l'astuce secrète du lieu",
                    "le_son": "Le type d'ambiance sonore",
                    "le_must": "Ce qu'il faut absolument prendre"
                },
                "nearest_metro": "Nom exact de la station de métro la plus proche",
                "metro_lines": ["9", "11"] // Tableau de strings avec les numéros/lettres des lignes
            }
            La somme des moods doit être environ 100.`;

            try {
                const aiRes = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
                    { 
                        contents: [{ parts: [{ text: prompt }] }],
                        tools: [{ googleSearch: {} }]
                    }
                );
                let jsonText = aiRes.data.candidates[0].content.parts[0].text;
                jsonText = jsonText.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
                const aiData = JSON.parse(jsonText);

                description = (aiData.description || description).replace(/'/g, "’");
                catchline = (aiData.expert_catchline || catchline).replace(/'/g, "’");
                tip = (aiData.insider_tip || tip).replace(/'/g, "’");
                subcategories = JSON.stringify(aiData.subcategories || ["bistronomie"]);
                if (aiData.must_eat) {
                   specials = `{\n    cuisine: ${JSON.stringify(aiData.subcategories || ["Française"])},\n    drinks: [],\n    must_eat: "${aiData.must_eat.replace(/'/g, "’")}",\n  }`;
                }
                if (aiData.moods) {
                   moods = JSON.stringify(aiData.moods, null, 2);
                }
                if (typeof aiData.has_terrace === 'boolean') {
                   aiTerrace = aiData.has_terrace;
                }
                
                let realTalkObj = {
                   text: (aiData.description || description).replace(/'/g, "’"),
                   must_eat: (aiData.must_eat || "").replace(/'/g, "’"),
                   le_secret: (aiData.real_talk?.le_secret || "").replace(/'/g, "’"),
                   le_son: (aiData.real_talk?.le_son || "").replace(/'/g, "’"),
                   le_must: (aiData.real_talk?.le_must || "").replace(/'/g, "’")
                };
                var real_talk_str = JSON.stringify(realTalkObj, null, 4);
                
                nearest_metro = aiData.nearest_metro || nearest_metro;
                metro_lines = JSON.stringify(aiData.metro_lines || []);

                console.log(`✅ Éditorial, Badges et Moods déduits avec succès par l'IA. (Terrasse auto-détectée: ${aiTerrace})`);
            } catch (e: any) {
                console.error(`❌ ÉCHEC CRITIQUE IA : ${e.message}`);
                console.error(`Le mode "TODO" est désactivé par sécurité Standard Moelle 2026.`);
                process.exit(1);
            }
        }

        if (existingFilePath && !isForced) {
            console.log(`⚠️  Fichier existant détecté : ${existingFilePath}`);
            console.log(`📡 Fusion Chirurgicale en cours...`);
            const existingContent = fs.readFileSync(existingFilePath, 'utf-8');
            
            // Regex Extraction (Surgical Blocks - Line Anchored)
            const menuMatch = existingContent.match(/^    menu_items: (\[[\s\S]*?^    \])/m);
            const descMatch = existingContent.match(/^  description: "([\s\S]*?)",/m);
            const tipMatch = existingContent.match(/^  insider_tip: "([\s\S]*?)",/m);
            const subMatch = existingContent.match(/^  subcategory: (\[[\s\S]*?\]),/m);
            const specMatch = existingContent.match(/^  specials: ({[\s\S]*?^  },)/m);
            const moodMatch = existingContent.match(/^  moods: ({[\s\S]*?^  },)/m);
            const verMatch = existingContent.match(/^  verified: (true|false),/m);

            if (menuMatch) {
                menuItems = menuMatch[1];
                // Auto-Correction Moelle V12.0 : Convert old format to price_cents if needed (simple heuristic)
                menuItems = menuItems.replace(/price: "(\d+)(?:,\d+)?€"/g, (m, p) => `price_cents: ${parseInt(p) * 100}`);
            }
            if (descMatch) description = descMatch[1].replace(/"/g, '\\"');
            if (tipMatch) tip = tipMatch[1].replace(/"/g, '\\"');
            if (subMatch) subcategories = subMatch[1];
            if (specMatch) specials = specMatch[1];
            if (moodMatch) moods = moodMatch[1];
            if (verMatch) verified = verMatch[1];

            console.log(`✅ Menu et Description extraits avec succès.`);
        }

        // 5. GENERATE FINAL TEMPLATE
        const template = `import { SurgicalPlace } from "../../../type-definition";

export const ${exportName}: SurgicalPlace = {
  id: "poi-${slug}",
  slug: "${slug}",
  name: "${safeName}",
  category: "restaurant",
  subcategory: ${subcategories},
  location: {
    address: "${address}",
    arrondissement: ${arrondissement},
    lat: ${lat},
    lng: ${lng},
    nearest_metro: "${nearest_metro}",
    metro_lines: ${metro_lines},
    google_id: "${placeId}"
  },
  moods: ${moods.endsWith(',') ? moods.slice(0, -1) : moods},
  practical: {
    opening_hours_raw: "${hours}",
    reservation_policy: "${reservationPolicy}",
    terrace: ${aiTerrace},
    ferme_tard: ${isLate},
    accessibility: true,
    main_action: {
      type: "site",
      url: "${website}",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "${new Date().toISOString().split('T')[0]}",
    verified_at: "${new Date().toISOString().split('T')[0]}",
    menu_items: ${menuItems}
  },
  description: \`${description}\`,
  expert_catchline: \`${catchline}\`,
  insider_tip: \`${tip}\`,
  specials: ${specials.endsWith(',') ? specials.slice(0, -1) : specials},
  real_talk: ${typeof real_talk_str !== 'undefined' ? real_talk_str : "{}"},
  images: {
    hero: "${hero}",
    gallery: ${JSON.stringify(gallery)}
  },
  verified: ${verified},
  google_rating: ${rating},
  google_reviews_count: ${reviewsCount}
};

export default ${exportName};
`;

        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(filePath, template);

        console.log('='.repeat(60));
        console.log(`✨ OPÉRATION RÉUSSIE`);
        console.log(`📍 Lieu   : ${candidateName}`);
        console.log(`🌐 GPS    : ${lat}, ${lng} (SYNCHRONISÉ)`);
        console.log(`📂 Fichier : ${filePath}`);
        console.log('='.repeat(60));

    } catch (error: any) {
        console.error('❌ Erreur :', error.message);
        process.exit(1);
    }
}

main();
