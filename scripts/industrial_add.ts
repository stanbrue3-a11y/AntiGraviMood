import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// Chargement des variables d'environnement
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!GOOGLE_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Clés API manquantes dans le .env (Google ou Supabase)');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * 🤖 INDUSTRIAL INSERTION SCRIBE v4.1 (RAW GOOGLE -> SUPABASE)
 * L'enrichissement éditorial est désormais confié à l'Agent IA (Antigravity) en direct,
 * et non plus à un appel API automatisé aveugle.
 */

async function main() {
    const args = process.argv.slice(2);
    const query = args.filter(a => !a.startsWith('--')).join(' ');

    if (!query) {
        console.log('Usage: npx tsx scripts/industrial_add.ts "Nom du Lieu, Adresse"');
        process.exit(1);
    }

    console.log(`\n🚀 [PHASE 1 : RAW SCAFFOLDING] Recherche de "${query}"`);
    console.log('='.repeat(60));

    try {
        // 1. RECHERCHE GOOGLE MAPS
        const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id,name&key=${GOOGLE_KEY}`;
        const searchRes = await axios.get(findUrl);
        
        if (searchRes.data.status !== 'OK' || !searchRes.data.candidates[0]) {
            console.error('❌ Lieu non trouvé sur Google Maps.');
            process.exit(1);
        }

        const placeId = searchRes.data.candidates[0].place_id;
        let candidateName = searchRes.data.candidates[0].name;

        // --- BOUCLIER ANTI-DOUBLON SUPABASE ---
        const { data: existingPlace } = await supabase
            .from('places')
            .select('slug, name')
            .eq('google_id', placeId)
            .single();

        if (existingPlace) {
            console.error(`🛑 ARRÊT DE SÉCURITÉ : Ce lieu existe déjà dans Supabase !`);
            console.error(`   👉 Nom : ${existingPlace.name}`);
            process.exit(1);
        }

        console.log(`✅ Google Place ID trouvé : ${placeId}`);

        // 2. RÉCUPÉRATION DES DÉTAILS
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,geometry,opening_hours,rating,user_ratings_total,website,url,address_components,photos&key=${GOOGLE_KEY}&language=fr`;
        const detailsRes = await axios.get(detailsUrl);
        const details = detailsRes.data.result;

        if (!candidateName) candidateName = details.name;
        
        // Nettoyage du Slug et du Nom
        const slug = candidateName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        const safeName = candidateName.replace(/'/g, "’");

        // Extraction géographique
        const postalCode = details.address_components?.find((c: any) => c.types.includes('postal_code'))?.short_name || '75000';
        const arrondissement = parseInt(postalCode.slice(-2)) || 0;

        // Photos
        const photoRefs = details.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
        const hero = photoRefs[0] || null;
        const gallery = photoRefs.slice(1);

        // 3. INSERTION SUPABASE (Données Brutes)
        console.log(`💾 [PHASE 2 : PUSH DB] Envoi des données brutes vers Supabase...`);
        
        const newPlace = {
            slug: slug,
            name: safeName,
            category: 'restaurant', // Catégorie par défaut, l'Agent IA affinera
            subcategories: [], // L'Agent IA remplira
            dominant_mood: null, // L'Agent IA remplira
            
            address: details.formatted_address,
            arrondissement: arrondissement,
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            nearest_metro: null,
            metro_lines: [],
            
            google_id: placeId,
            google_rating: details.rating,
            google_reviews_count: details.user_ratings_total,
            
            description: null, // L'Agent IA remplira
            insider_tip: null, // L'Agent IA remplira
            
            opening_hours_raw: details.opening_hours?.weekday_text?.join(' | ') || null,
            opening_hours_json: details.opening_hours || null,
            closes_late: false,
            has_terrace: false,
            reservation_policy: null,
            michelin_stars: null,
            
            hero_image: hero,
            google_photos: gallery,
            status: 'SCAFFOLDED' // Indique que la fiche est brute
        };

        const { data, error } = await supabase
            .from('places')
            .insert(newPlace)
            .select();

        if (error) {
            console.error('❌ ERREUR SUPABASE LORS DE L\'INSERTION :');
            console.error(error.message);
            process.exit(1);
        }

        console.log('='.repeat(60));
        console.log(`✨ SUCCÈS : Lieu brut enregistré en base !`);
        console.log(`📍 Nom    : ${safeName}`);
        console.log(`🆔 ID DB  : ${data[0].id}`);
        console.log(`🤖 Action requise : Demander à l'Agent Antigravity d'enrichir la fiche.`);
        console.log('='.repeat(60));

    } catch (error: any) {
        console.error('❌ Erreur Critique :', error.message);
        process.exit(1);
    }
}

main();
