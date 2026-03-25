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
            console.log(`✅ Lieu Identifié : ${candidateName} (${placeId})`);
        } else {
            console.log(`🚀 ANCRAGE DIRECT PAR PLACE ID : "${placeId}"`);
        }

        // 2. GET DETAILS (Hours, Website, Photos)
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry,opening_hours,rating,user_ratings_total,website,url,address_components,photos&key=${GOOGLE_KEY}&language=fr`;
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
        const website = details.website || details.url;
        const hours = details.opening_hours?.weekday_text?.join(' | ') || "Non renseigné";
        
        const isLate = hours.includes("00:00") || hours.includes("01:00") || hours.includes("02:00");
        const reservationPolicy = details.website?.includes('thefork') || details.website?.includes('zenchef') ? 'resa_conseillee' : 'sans_resa';
        
        const postalCode = details.address_components?.find((c: any) => c.types.includes('postal_code'))?.short_name || '75000';
        const arrondissement = parseInt(postalCode.slice(-2)) || 0;

        const photoRefs = details.photos?.slice(0, 3).map((p: any) => p.photo_reference) || [];
        const hero = photoRefs[0] || 'REF_MISSING';
        const gallery = photoRefs.slice(1);

        const slug = details.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        
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
        let menuItems = "[\n      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici\n    ]";
        let description = "TODO: Description riche (3 phrases minimum).";
        let tip = "• **Timing Stratégique** : TODO\n  • **Combo Moelle** : TODO\n  • **Expérience Culturelle** : TODO";
        let subcategories = "[]";
        let specials = `{\n    cuisine: [],\n    drinks: [],\n    must_eat: "Cuisine [Type]. TODO",\n  }`;
        let moods = `{\n    chill: 60,\n    festif: 40,\n    culturel: 50\n  }`;
        let verified = "false";

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
                // Auto-Correction Moelle V11.3 : Add € if missing
                menuItems = menuItems.replace(/price: "(\d+(?:\.\d+)?)"/g, 'price: "$1€"');
            }
            if (descMatch) description = descMatch[1].replace(/"/g, '\\"');
            if (tipMatch) tip = tipMatch[1].replace(/"/g, '\\"');
            if (subMatch) subcategories = subMatch[1];
            if (specMatch) specials = specMatch[1];
            if (moodMatch) moods = moodMatch[1];
            if (verMatch) verified = verMatch[1];

            console.log(`✅ Menu et Description extraits avec succès (Auto-correction € appliquée).`);
        }

        // 5. GENERATE FINAL TEMPLATE
        const template = `import { SurgicalPlace } from "../../../type-definition";

export const ${slug.replace(/-/g, '_')}: SurgicalPlace = {
  id: "poi-${slug}",
  slug: "${slug}",
  name: "${details.name}",
  category: "restaurant",
  subcategory: ${subcategories},
  location: {
    address: "${address}",
    arrondissement: ${arrondissement},
    lat: ${lat},
    lng: ${lng},
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "${placeId}"
  },
  moods: ${moods.endsWith(',') ? moods.slice(0, -1) : moods},
  practical: {
    opening_hours_raw: "${hours}",
    reservation_policy: "${reservationPolicy}",
    wifi: false,
    terrace: true,
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
  description: "${description}",
  insider_tip: "${tip}",
  specials: ${specials.endsWith(',') ? specials.slice(0, -1) : specials},
  images: {
    hero: "${hero}",
    gallery: ${JSON.stringify(gallery)}
  },
  verified: ${verified},
  google_rating: ${rating}
};

export default ${slug.replace(/-/g, '_')};
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
