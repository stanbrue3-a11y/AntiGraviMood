import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';
import { calculateMoodAndTerrace } from './mood_engine';

// Chargement des variables d'environnement
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
const GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

if (!GOOGLE_KEY || !SUPABASE_URL || !SUPABASE_KEY || !GEMINI_KEY) {
    console.error('❌ Clés API manquantes dans le .env (Google, Supabase ou Gemini)');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const GPS_CENTERS: Record<number, { lat: number; lng: number; radius: number }> = {
    1:  { lat: 48.8602, lng: 2.3477, radius: 800  },
    2:  { lat: 48.8666, lng: 2.3477, radius: 700  },
    3:  { lat: 48.8637, lng: 2.3599, radius: 800  },
    4:  { lat: 48.8534, lng: 2.3567, radius: 900  },
    5:  { lat: 48.8462, lng: 2.3508, radius: 1000 },
    6:  { lat: 48.8496, lng: 2.3332, radius: 900  },
    7:  { lat: 48.8566, lng: 2.3179, radius: 1200 },
    8:  { lat: 48.8752, lng: 2.3087, radius: 1200 },
    9:  { lat: 48.8775, lng: 2.3399, radius: 900  },
    10: { lat: 48.8756, lng: 2.3607, radius: 1100 },
    11: { lat: 48.8589, lng: 2.3780, radius: 1300 },
    12: { lat: 48.8401, lng: 2.3910, radius: 1800 },
    13: { lat: 48.8317, lng: 2.3620, radius: 1800 },
    14: { lat: 48.8329, lng: 2.3260, radius: 1500 },
    15: { lat: 48.8421, lng: 2.2986, radius: 2000 },
    16: { lat: 48.8638, lng: 2.2750, radius: 2500 },
    17: { lat: 48.8884, lng: 2.3116, radius: 1800 },
    18: { lat: 48.8917, lng: 2.3444, radius: 1500 },
    19: { lat: 48.8823, lng: 2.3808, radius: 1500 },
    20: { lat: 48.8637, lng: 2.3975, radius: 1500 },
};

async function main() {
    const args = process.argv.slice(2);
    let targetArr: number | null = null;
    const arrFlagIndex = args.findIndex(a => a === '--arr');
    if (arrFlagIndex !== -1 && args[arrFlagIndex + 1]) targetArr = parseInt(args[arrFlagIndex + 1]);

    let forcePlaceId: string | null = null;
    const placeIdFlagIndex = args.findIndex(a => a === '--place-id');
    if (placeIdFlagIndex !== -1 && args[placeIdFlagIndex + 1]) forcePlaceId = args[placeIdFlagIndex + 1];

    const cleanArgs: string[] = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--arr') { i++; continue; }
        if (args[i] === '--place-id') { i++; continue; }
        if (args[i].startsWith('--')) continue;
        cleanArgs.push(args[i]);
    }
    const query = cleanArgs.join(' ');

    if (!query && !forcePlaceId) { 
        console.error('❌ Manque Query ou PlaceID');
        process.exit(1); 
    }

    let placeId = forcePlaceId;
    let candidateName = '';
    let candidateAddress = '';

    try {
        if (!placeId) {
            console.log(`🚀 Recherche : "${query}"`);
            let findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id,name,formatted_address&key=${GOOGLE_KEY}`;
            if (targetArr && GPS_CENTERS[targetArr]) {
                const { lat, lng, radius } = GPS_CENTERS[targetArr];
                findUrl += `&locationbias=circle:${radius}@${lat},${lng}`;
            }
            const searchRes = await axios.get(findUrl);
            if (searchRes.data.status !== 'OK' || !searchRes.data.candidates[0]) { 
                console.error(`❌ Non trouvé : ${searchRes.data.status}`);
                process.exit(1); 
            }
            placeId = searchRes.data.candidates[0].place_id;
            candidateName = searchRes.data.candidates[0].name;
            candidateAddress = searchRes.data.candidates[0].formatted_address;
        }

        console.log(`🎯 Place ID : ${placeId}`);
        const { data: existingById } = await supabase.from('places').select('slug, name').eq('google_id', placeId).single();
        if (existingById) { 
            console.warn(`🛑 Déjà en base : ${existingById.slug}`);
            process.exit(1); 
        }

        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry,opening_hours,rating,user_ratings_total,website,url,address_components,photos,types,price_level,business_status,reviews&key=${GOOGLE_KEY}&language=fr`;
        const detailsRes = await axios.get(detailsUrl);
        const details = detailsRes.data.result;
        
        if (!candidateName) candidateName = details.name;
        if (!candidateAddress) candidateAddress = details.formatted_address;

        // 🛡️ GARDE-FOU #0 — Statut opérationnel Google (anti-lieux fermés)
        const businessStatus = details.business_status;
        if (businessStatus === 'CLOSED_PERMANENTLY' || businessStatus === 'CLOSED_TEMPORARILY') {
            console.error(`🛑 REJET STATUT : "${candidateName}" est signalé comme FERMÉ par Google Maps (${businessStatus}).`);
            process.exit(1);
        }

        // 🛡️ GARDE-FOU #1 — Note Google ≥ 4.0 (Standard Moelle 2026)
        if (details.rating !== undefined && details.rating !== null && details.rating < 4.0) {
            console.error(`🛑 REJET ADN : Note Google ${details.rating} < 4.0 — Lieu non éligible.`);
            console.error(`   👉 Nom : ${candidateName}`);
            process.exit(1);
        }

        // 🛡️ GARDE-FOU #2 — Type d'établissement (filtre non-restaurant)
        // Google renvoie des bibliothèques, pharmacies, musées avec de bonnes notes.
        // On accepte uniquement les types liés à la restauration.
        const FOOD_TYPES = ['restaurant', 'food', 'meal_takeaway', 'meal_delivery', 'bar', 'cafe', 'bakery'];
        const placeTypes: string[] = details.types || [];
        const isFood = placeTypes.some((t: string) => FOOD_TYPES.includes(t));
        if (!isFood) {
            console.error(`🛑 REJET TYPE : "${candidateName}" n'est pas un établissement de restauration.`);
            console.error(`   Types Google détectés : ${placeTypes.join(', ') || 'aucun'}`);
            process.exit(1);
        }

        // 🛡️ GARDE-FOU #3 — Détection des noms qui sont en réalité des adresses
        // Google retourne parfois un nom comme "93 Rue Saint-Maur" qui n'est pas un nom de restaurant.
        // Pattern : commence par un chiffre suivi d'un mot de voirie (Rue, Boulevard, Avenue...)
        const ADDRESS_PATTERN = /^\d+\s+(rue|boulevard|avenue|place|impasse|allée|passage|square|villa)/i;
        if (ADDRESS_PATTERN.test(candidateName.trim())) {
            console.error(`🛑 REJET NOM : "${candidateName}" ressemble à une adresse, pas un nom de restaurant.`);
            process.exit(1);
        }

        // Nettoyage du nom : on retire uniquement les suffixes parasites après " - " ou " | "
        // On NE split plus sur le tiret simple pour ne pas tronquer les noms composés
        let cleanName = candidateName
            .replace(/\s*[-|]\s*(Paris|restaurant|resto|bar|bistro|café|brasserie).*$/i, '')
            .replace(/Paris\s*\d*/i, '')
            .replace(/[.…]+$/, '')   // retire la ponctuation finale
            .trim();
        const slug = cleanName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        const safeName = cleanName.replace(/'/g, "'");

        // 🛡️ GARDE-FOU #4 — Slug minimum viable (évite les slugs vides ou trop courts)
        if (slug.length < 2) {
            console.error(`🛑 REJET SLUG : Slug généré "${slug}" trop court — vérifier le nom source : "${candidateName}"`);
            process.exit(1);
        }

        const postalCode = details.address_components?.find((c: any) => c.types.includes('postal_code'))?.short_name || '75000';
        let arrondissement = parseInt(postalCode.slice(-2)) || 0;

        if (forcePlaceId && targetArr) {
            console.warn(`⚠️ Force Arrondissement : ${arrondissement} -> ${targetArr}`);
            arrondissement = targetArr;
        } else if (targetArr && arrondissement !== targetArr) {
            console.error(`🛑 Mauvais arrondissement : ${arrondissement} (attendu ${targetArr})`);
            process.exit(1);
        }

        const photoRefs = details.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
        const hoursText = details.opening_hours?.weekday_text?.join(' ') || '';
        const latePatterns = [/12:00\s*AM/i, /1:00\s*AM/i, /2:00\s*AM/i, /00:00/, /01:00/];
        const closes_late = latePatterns.some(p => p.test(hoursText));

        // 🧠 MOOD ENGINE — Calcul IA basé sur les avis et les photos
        const moodResult = await calculateMoodAndTerrace(details, GOOGLE_KEY, GEMINI_KEY);
        console.log(`🧠 [MOOD ENGINE] ${moodResult.dominant_mood.toUpperCase()} (Confiance: ${moodResult.confidence}%) — Terrasse visuelle: ${moodResult.has_terrace}`);
        console.log(`💬 Justification: ${moodResult.justification}`);

        const newPlace = {
            slug, name: safeName, category: 'restaurant', subcategories: [], dominant_mood: moodResult.dominant_mood,
            address: details.formatted_address, arrondissement, lat: details.geometry.location.lat, lng: details.geometry.location.lng,
            google_id: placeId, google_rating: details.rating, google_reviews_count: details.user_ratings_total,
            opening_hours_raw: details.opening_hours?.weekday_text?.join(' | ') || null,
            opening_hours_json: details.opening_hours || null,
            closes_late, has_terrace: moodResult.has_terrace, hero_image: photoRefs[0] || null, google_photos: photoRefs.slice(1), status: 'SCAFFOLDED',
        };

        const { data, error } = await supabase.from('places').insert(newPlace).select();
        if (error) { 
            console.error(`❌ Erreur Supabase : ${error.message}`);
            process.exit(1); 
        }

        console.log(`✨ SUCCÈS : ${safeName} (${arrondissement}ème) enregistré !`);
    } catch (error: any) { 
        console.error(`❌ Erreur Critique : ${error.message}`);
        process.exit(1); 
    }
}

main();
