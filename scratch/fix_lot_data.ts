import axios from 'axios';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const places = [
  {
    slug: 'la-jacobine',
    id: 'ChIJcWEX1N5x5kcRW9fEfwMFTic',
    path: 'src/data/registry/tree/06/auto/la-jacobine.ts',
  },
  {
    slug: 'le-procope',
    id: 'ChIJdQn7zN5x5kcRhKnVo8EDJS0',
    path: 'src/data/registry/tree/06/auto/le-procope.ts',
  },
  {
    slug: 'le-relais-de-lodeon',
    id: 'ChIJ14gott5x5kcRB7pH3xLn1hk',
    path: 'src/data/registry/tree/06/auto/le-relais-de-lodeon.ts',
  },
  {
    slug: 'topokki',
    id: 'ChIJzUM4Y5hx5kcRZww7LwRXFuE',
    path: 'src/data/registry/tree/06/auto/topokki.ts',
  },
  {
    slug: 'les-editeurs',
    id: 'ChIJF6_Jst5x5kcRF0sXkzeGFHI',
    path: 'src/data/registry/tree/06/auto/les-editeurs.ts',
  },
];

async function run() {
  for (const place of places) {
    console.log(`🧠 Fixing data for ${place.slug}...`);
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.id}&fields=photos,opening_hours&key=${GOOGLE_KEY}&language=fr`;
    const res = await axios.get(url);

    if (!res.data.result) {
      console.error(`❌ No result for ${place.slug}:`, res.data.status);
      continue;
    }

    const photos = res.data.result.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
    const hours = res.data.result.opening_hours?.weekday_text?.join(' | ') || '';

    let content = fs.readFileSync(place.path, 'utf-8');

    // Inject Photos
    if (photos.length > 0) {
      content = content.replace(/"REF_1"|`REF_1`/, `"${photos[0]}"`);
      const galleryRegex =
        /gallery: \["REF_2", "REF_3", "REF_4", "REF_5"\]|gallery: \[`REF_2`, `REF_3`, `REF_4`, `REF_5`\]/;
      content = content.replace(galleryRegex, `gallery: ${JSON.stringify(photos.slice(1))}`);
    }

    // Inject Hours
    if (hours) {
      const hoursRegex = /opening_hours_raw: [`"].*?[`"]/;
      content = content.replace(hoursRegex, `opening_hours_raw: \`${hours}\``);
    }

    fs.writeFileSync(place.path, content);
    console.log(`✅ Fixed ${place.slug}.`);
  }
}

run();
