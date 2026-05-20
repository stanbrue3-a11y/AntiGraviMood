require('dotenv').config();
const axios = require('axios');

async function run() {
    const query = encodeURIComponent("restaurant rue delambre paris 14");
    const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${key}`;
    const res = await axios.get(url);
    res.data.results.forEach(p => {
        if (p.name.toLowerCase().includes('zhao') || p.formatted_address.includes('Delambre')) {
            console.log(`Name: ${p.name}, Address: ${p.formatted_address}, PlaceID: ${p.place_id}`);
        }
    });
}
run();
