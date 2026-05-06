import axios from 'axios';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const places = [
  { slug: 'la-jacobine', id: 'ChIJcWEX1N5x5kcRW9fEfwMFTic' },
  { slug: 'le-procope', id: 'ChIJdQn7zN5x5kcRhKnVo8EDJS0' },
  { slug: 'le-relais-de-lodeon', id: 'ChIJ14gott5x5kcRB7pH3xLn1hk' },
  { slug: 'topokki', id: 'ChIJzUM4Y5hx5kcRZww7LwRXFuE' },
  { slug: 'les-editeurs', id: 'ChIJF6_Jst5x5kcRF0sXkzeGFHI' }
];

async function check() {
  for (const place of places) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.id}&fields=name,geometry,photos,opening_hours&key=${GOOGLE_KEY}`;
    const res = await axios.get(url);
    const data = res.data.result;
    console.log(`--- ${place.slug} ---`);
    console.log(`Name: ${data.name}`);
    console.log(`Lat/Lng: ${data.geometry.location.lat}, ${data.geometry.location.lng}`);
    console.log(`Photo 1: ${data.photos?.[0]?.photo_reference.substring(0, 20)}...`);
    console.log(`Hours: ${data.opening_hours?.weekday_text?.[0]}`);
  }
}

check();
