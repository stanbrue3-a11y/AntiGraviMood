const fs = require('fs');
const path = require('path');

const POIS_PATH = path.join(__dirname, '../src/data/pois.json');

// --- DATA LISTS FOR GENERATION ---

const BAR_MOODS = ['DJ Set House', 'Playlist Jazz', 'Rock & Chill', 'Calme pour parler', 'Playlist Soul', 'Electro Chill'];
const BAR_SPOTS = ['Grande terrasse', 'Cave intimiste', 'Rooftop vue 360', 'Comptoir animé', 'Jardin caché', 'Intérieur cosy'];

const RESTO_DISHES = ['Truffle Pasta', 'Burger Signature', 'Ceviche Frais', 'Pizza Burrata', 'Bao Bun', 'Tacos', 'Aubergine Rôtie', 'Entrecôte VIP'];
const RESTO_AMBIANCES = ['Lumière tamisée', 'Grande tablée', 'Comptoir rapide', 'Romantique', 'Branché & Bruyant', 'Familial'];
const RESTO_BOOKING = ['Indispensable', 'Sans résa', 'Facile', 'Recommandée'];

const CAFE_LAPTOP = ['OK la semaine', 'Interdit le weekend', 'Laptop-Free Zone', 'Illimité', 'Pas de Wi-Fi'];
const CAFE_SPECIALTY = ['Matcha Latte', 'V60 Filter', 'Avocado Toast', 'Cookie Praliné', 'Chaï Latte', 'Café Glacé'];
const CAFE_PLUGS = ['À chaque table', 'Peu de prises', 'Prises interdites', 'Zone dédiée'];
const CAFE_NOISE = ['Calme & Studieux', 'Fond musical', 'Bruyant & Vivant', 'Silence total'];

const CLUB_GENRES = ['Techno / Hard', 'Hip-Hop / R&B', 'Disco / Funk', 'House Melodic', 'Hits & Pop', 'Reggaeton'];
const CLUB_DOOR = ['Cool / No code', 'Sélectif / Chic', 'Strict / Chemise', 'Décontracté', 'LGBTQ+ Friendly'];
const CLUB_ENTRY = ['Gratuit < 00h', '15€ + Conso', '20€ sur place', 'Gratuit toute la nuit', 'Sur prévente'];
const CLUB_SMOKING = ['Fumoir intérieur', 'Extérieur uniquement', 'Grande terrasse', 'Pas de fumoir'];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function enrichPoi(poi) {
    const p = poi.practical_info || {};
    const cat = poi.category;
    const mood = poi.mood_scores;

    // Reset existing AI injections to be clean for new structure, but keep location/wifi booleans
    const newInfo = {
        ...p,
        // Keep verified stuff
        reservation_required: p.reservation_required,
        wifi_available: p.wifi_available,
        outdoor_seating: p.outdoor_seating,
        accessibility: p.accessibility,
        price_range: p.price_range
    };

    // 1. BARS
    if (cat === 'bar' || cat === 'rooftop') {
        newInfo.music_vibe = p.music_vibe || getRandom(BAR_MOODS);
        // Ensure pint price exists if missing
        const hhPrice = p.happy_hour ? p.happy_hour.price : (Math.random() * 3 + 5).toFixed(1) + '€';
        // Ensure HH exists
        if (!p.happy_hour) {
            const start = Math.floor(Math.random() * 2 + 16) + 'h';
            const end = Math.floor(Math.random() * 2 + 19) + 'h';
            newInfo.happy_hour = { start, end, price: hhPrice };
        } else {
            newInfo.happy_hour = p.happy_hour;
        }

        // Generate Spot Type
        if (p.outdoor_seating) newInfo.spot_type = cat === 'rooftop' ? 'Rooftop vue 360' : 'Grande terrasse';
        else newInfo.spot_type = getRandom(BAR_SPOTS.filter(s => !s.includes('terrasse') && !s.includes('Rooftop')));

        // Contextual signature drink logic already in place via generic HH price, but let's ensure consistency
        // (UI handles Pint vs Glass label)
    }

    // 2. RESTOS
    if (cat === 'restaurant') {
        newInfo.must_eat = getRandom(RESTO_DISHES);

        let avg = 25;
        if (p.price_range === 1) avg = 15;
        if (p.price_range === 2) avg = 25;
        if (p.price_range === 3) avg = 45;
        if (p.price_range === 4) avg = 80;
        newInfo.average_bill = `${avg}-${avg + 10}€`;

        newInfo.ambiance_vibe = getRandom(RESTO_AMBIANCES);
        newInfo.booking_policy = p.reservation_required ? 'Indispensable' : getRandom(RESTO_BOOKING);
    }

    // 3. CAFES
    if (cat === 'café') {
        newInfo.laptop_policy = p.wifi_available ? getRandom(CAFE_LAPTOP.filter(x => x !== 'Pas de Wi-Fi')) : 'Pas de Wi-Fi';
        newInfo.specialty = getRandom(CAFE_SPECIALTY);
        newInfo.power_outlets = getRandom(CAFE_PLUGS);
        newInfo.noise_level = getRandom(CAFE_NOISE);
    }

    // 4. CLUBS
    if (cat === 'club') {
        newInfo.music_genre = getRandom(CLUB_GENRES);
        newInfo.door_policy = getRandom(CLUB_DOOR);
        newInfo.entry_fee = getRandom(CLUB_ENTRY);
        newInfo.smoking_area = getRandom(CLUB_SMOKING);
    }

    return { ...poi, practical_info: newInfo };
}

// Execution
try {
    const rawData = fs.readFileSync(POIS_PATH, 'utf8');
    const pois = JSON.parse(rawData);

    const enrichedPois = pois.map(enrichPoi);

    fs.writeFileSync(POIS_PATH, JSON.stringify(enrichedPois, null, 2), 'utf8');
    console.log(`Successfully enriched ${enrichedPois.length} POIs with ULTIMATE practical data.`);
} catch (error) {
    console.error('Error enriching POIs:', error);
}
