require('dotenv').config({ path: '.env' });
const fs = require('fs');
const axios = require('axios');

const GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function checkTerrace(photos, placeName) {
  const parts = [];
  
  for (let i = 0; i < Math.min(3, photos.length); i++) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photos[i]}&key=${GOOGLE_KEY}`;
      const res = await axios.get(url, { responseType: 'arraybuffer' });
      const base64 = Buffer.from(res.data, 'binary').toString('base64');
      parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: base64
        }
      });
    } catch (e) {
      console.error('Error fetching photo ' + i + ' for ' + placeName);
    }
  }

  if (parts.length === 0) return 'NO_PHOTOS';

  parts.unshift({
    text: "Réponds uniquement par 'OUI' ou 'NON'. Est-ce qu'on voit clairement une terrasse extérieure (tables et chaises dehors sur le trottoir ou dans une cour) sur au moins une de ces photos de restaurant ?"
  });

  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        contents: [{ parts }]
      }
    );
    const answer = res.data.candidates[0].content.parts[0].text.trim();
    return answer;
  } catch (e) {
    console.error('Error calling Gemini for ' + placeName, e.response?.data || e.message);
    return 'ERROR';
  }
}

async function run() {
  const data = JSON.parse(fs.readFileSync('tmp_photos.json', 'utf8'));
  console.log('--- DÉBUT DE L\'AUDIT VISION ---');
  for (const place of data) {
    if (!place.google_photos || place.google_photos.length === 0) {
      console.log(`${place.name.padEnd(20)} : PAS DE PHOTOS`);
      continue;
    }
    process.stdout.write(`${place.name.padEnd(20)} : Analyse en cours... `);
    const result = await checkTerrace(place.google_photos, place.name);
    console.log(`Terrasse trouvée ? ${result}`);
  }
  console.log('--- FIN ---');
}

run();
