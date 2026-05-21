require('dotenv').config();
const axios = require('axios');

async function run() {
  const query = encodeURIComponent('Zhao Montparnasse Paris');
  const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${key}`;
  const res = await axios.get(url);
  res.data.results.forEach((p) => {
    console.log(`Name: ${p.name}, Address: ${p.formatted_address}, PlaceID: ${p.place_id}`);
  });
}
run();
