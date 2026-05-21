require('dotenv').config();
const axios = require('axios');

async function run() {
  const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  const place_id = 'ChIJkaroF1Nx5kcRwtSaDYsIELU';
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=reviews&key=${key}&language=fr`,
  );
  const reviews = res.data.result.reviews || [];
  reviews.forEach((r, i) => {
    console.log(`--- REVIEW ${i} ---`);
    console.log(r.text);
  });
}
run();
