import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// CRITICAL: dotenv MUST load before any logic.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_KEY) {
    console.error('❌ Missing EXPO_PUBLIC_GOOGLE_MAPS_API_KEY in .env');
    process.exit(1);
}

/**
 * 🤖 INDUSTRIAL INSERTION SCRIBE v1.0
 * Standard 2026: Surgical Precision & Automation.
 */

async function main() {
    const args = process.argv.slice(2);
    const query = args.join(' ');

    if (!query || query.startsWith('--')) {
        console.log('Usage: npx tsx scripts/industrial_add.ts "Nom du Lieu, Adresse"');
        process.exit(1);
    }

    console.log(`🚀 RECHERCHE CHIRURGICALE : "${query}"`);
    console.log('='.repeat(60));

    try {
        // 1. FIND PLACE (Get Place ID and Basic Geometry)
        const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id,name,geometry,rating,photos,formatted_address&key=${GOOGLE_KEY}`;
        const searchRes = await axios.get(findUrl);
        
        if (searchRes.data.status !== 'OK' || !searchRes.data.candidates[0]) {
            console.error('❌ Lieu non trouvé sur Google Maps.');
            process.exit(1);
        }

        const candidate = searchRes.data.candidates[0];
        const placeId = candidate.place_id;
        console.log(`✅ Lieu Identifié : ${candidate.name} (${placeId})`);

        // 2. GET DETAILS (Hours, Website, Photos)
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry,opening_hours,rating,user_ratings_total,website,url,address_components,photos&key=${GOOGLE_KEY}&language=fr`;
        const detailsRes = await axios.get(detailsUrl);
        const details = detailsRes.data.result;

        if (!details) {
            console.error('❌ Impossible de récupérer les détails du lieu.');
            process.exit(1);
        }

        // 3. EXTRACT DATA
        const lat = details.geometry.location.lat;
        const lng = details.geometry.location.lng;
        const address = details.formatted_address;
        const rating = details.rating || 0;
        const ratingsTotal = details.user_ratings_total || 0;
        const website = details.website || details.url;
        const hours = details.opening_hours?.weekday_text?.join(' | ') || "Non renseigné";
        
        // Extract Arrondissement from address components
        const postalCode = details.address_components?.find((c: any) => c.types.includes('postal_code'))?.short_name || '75000';
        const arrondissement = parseInt(postalCode.slice(-2)) || 0;

        // Extract Photos (3 refs)
        const photoRefs = details.photos?.slice(0, 3).map((p: any) => p.photo_reference) || [];
        const hero = photoRefs[0] || 'REF_MISSING';
        const gallery = photoRefs.slice(1);

        // Generate Slug and ID
        const slug = candidate.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        const id = `poi-${slug}`;

        // 4. GENERATE CONTENT
        const template = `import { SurgicalPlace } from "../../../type-definition";

export const ${slug.replace(/-/g, '_')}: SurgicalPlace = {
  id: "${id}",
  slug: "${slug}",
  name: "${details.name}",
  category: "restaurant", // TODO: Vérifier la catégorie
  subcategory: [], // TODO: Ajouter tags (ex: cantine, noodles)
  location: {
    address: "${address}",
    arrondissement: ${arrondissement},
    lat: ${lat},
    lng: ${lng},
    nearest_metro: "TODO", // TODO: Renseigner le métro
    metro_lines: [],
    google_id: "${placeId}"
  },
  moods: {
    chill: 50,
    festif: 50,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "${hours}",
    reservation_policy: null,
    wifi: true,
    terrace: false, // TODO: Vérifier si terrasse
    accessibility: true,
    main_action: {
      type: "site",
      url: "${website}",
      label: "RÉSERVER"
    }
  },
  pricing: {
    avg_budget: 0,
    is_free: false,
    last_updated: "${new Date().toISOString().split('T')[0]}",
    menu_items: [
      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici
    ]
  },
  description: "TODO: Description riche (3 phrases minimum).",
  insider_tip: "TODO: L'apparté de l'initié.",
  specials: {
    cuisine: [],
    drinks: [],
    must_eat: "TODO",
  },
  images: {
    hero: "${hero}",
    gallery: ${JSON.stringify(gallery)}
  },
  verified: false,
  google_rating: ${rating}
};

export default ${slug.replace(/-/g, '_')};
`;

        // 5. SAVE FILE
        const targetDir = path.join(__dirname, `../src/data/registry/tree/${arrondissement}/auto/`);
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
        
        const filePath = path.join(targetDir, `${slug}.ts`);
        fs.writeFileSync(filePath, template);

        console.log('='.repeat(60));
        console.log(`✨ GÉNÉRATION RÉUSSIE`);
        console.log(`📍 Lieu   : ${details.name}`);
        console.log(`🌐 GPS    : ${lat}, ${lng} (CHIRURGICAL)`);
        console.log(`📸 Photos : ${photoRefs.length} références extraites`);
        console.log(`📂 Fichier : ${filePath}`);
        console.log('='.repeat(60));
        console.log(`\n👉 Étape suivante : "Opération Moelle" (Remplir le menu dans le fichier).`);

    } catch (error: any) {
        console.error('❌ Erreur Critique :', error.message);
        process.exit(1);
    }
}

main();
