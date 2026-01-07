const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    blue: "\x1b[34m"
};

const API_KEY = 'AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM'; // Provided by user
const POI_PATH = path.join(__dirname, '../src/data/pois.json');

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPlaceData(poi) {
    // 1. Get Place ID if we don't have it (or re-verify)
    let placeId = poi.location.google_id;

    if (!placeId) {
        const searchQuery = `${poi.name} ${poi.location.address} Paris`;
        const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(searchQuery)}&inputtype=textquery&fields=place_id&key=${API_KEY}`;
        try {
            const response = await fetch(findUrl);
            const data = await response.json();
            if (data.status === 'OK' && data.candidates && data.candidates.length > 0) {
                placeId = data.candidates[0].place_id;
            } else {
                console.warn(`${colors.red}No place ID found for ${poi.name}${colors.reset}`);
                return null;
            }
        } catch (error) {
            console.error(`${colors.red}Error finding ${poi.name}:${colors.reset}`, error);
            return null;
        }
    }

    // 2. Fetch Place Details (Photos) - Basic Field (Free/Cheap metadata)
    // We explicitly ask for 'photos' to get up to 10 references
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${API_KEY}`;

    try {
        const response = await fetch(detailsUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.result) {
            const allPhotos = data.result.photos || [];

            // FILTRE PAYSAGE : On ne garde que les photos dont la largeur est > hauteur
            // C'est l'astuce pour éviter les photos de plats (souvent verticales) et avoir le décor
            const landscapePhotos = allPhotos.filter(p => p.width > p.height);

            // On prend les 3 meilleures photos paysage
            const finalPhotos = landscapePhotos.slice(0, 3).map(p => p.photo_reference);

            if (finalPhotos.length > 0) {
                console.log(`${colors.green}Updated ${poi.name}: ${finalPhotos.length} Landscape photos found (out of ${allPhotos.length} total)${colors.reset}`);
                return {
                    google_place_id: placeId,
                    google_photos: finalPhotos
                };
            } else {
                // Fallback: Si pas de photos paysage, on prend n'importe lesquelles pour ne pas avoir rien
                console.log(`${colors.yellow}${poi.name}: No landscape photos. Fallback to any photos.${colors.reset}`);
                const fallbackPhotos = allPhotos.slice(0, 3).map(p => p.photo_reference);
                return { google_place_id: placeId, google_photos: fallbackPhotos };
            }
        } else {
            console.warn(`${colors.red}Details error for ${poi.name}: ${data.status}${colors.reset}`);
            return null;
        }
    } catch (error) {
        console.error(`${colors.red}Error fetching details for ${poi.name}:${colors.reset}`, error);
        return null;
    }
}

async function hydrate() {
    console.log(`${colors.blue}Starting Hydration...${colors.reset}`);

    // Read JSON
    const rawData = fs.readFileSync(POI_PATH, 'utf-8');
    const pois = JSON.parse(rawData);

    let updatedCount = 0;

    for (let i = 0; i < pois.length; i++) {
        const poi = pois[i];

        // Economy Mode: Process strictly to test for now, or all if confirmed. 
        // User asked not to waste. We will process.

        const googleData = await fetchPlaceData(poi);

        if (googleData) {
            // Update POI
            if (!poi.media) poi.media = {};
            poi.media.google_photos = googleData.google_photos;
            poi.location.google_id = googleData.google_place_id;

            updatedCount++;
        }

        // Be nice to the API rate limit
        await delay(200);
    }

    if (updatedCount > 0) {
        fs.writeFileSync(POI_PATH, JSON.stringify(pois, null, 2));
        console.log(`${colors.green}Successfully updated ${updatedCount} POIs!${colors.reset}`);
    } else {
        console.log(`${colors.yellow}No updates made.${colors.reset}`);
    }
}

hydrate();
