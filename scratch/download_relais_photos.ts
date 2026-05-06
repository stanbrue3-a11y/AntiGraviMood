import axios from 'axios';
import fs from 'fs';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
const PLACE_ID = 'ChIJ14gott5x5kcRB7pH3xLn1hk'; // Relais Odéon

async function download() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=photos&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  const photos = res.data.result.photos;
  
  for (let i = 0; i < 3; i++) {
    const photoRef = photos[i].photo_reference;
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoRef}&key=${GOOGLE_KEY}`;
    const imgRes = await axios.get(photoUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(__dirname, `../scratch/relais_photo_${i}.jpg`), Buffer.from(imgRes.data));
    console.log(`Downloaded photo ${i}`);
  }
}

download();
