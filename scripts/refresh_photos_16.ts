import axios from 'axios';
import fs from 'fs';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const placeIds: Record<string, string> = {
  'andia': 'ChIJ6RIysFRl5kcRgTQU1vLwwWg',
  'brasserie-auteuil': 'ChIJEcNXrLB65kcR6leyh3yLQpk',
  'carette': 'ChIJXQvlQftv5kcROZUkVMlEAdo',
  'corail-restaurant': 'ChIJDRF7MPJv5kcRAU7WwN5UruE',
  'geoelia': 'ChIJI15J0wVl5kcRJ15AKiwqxfM',
  'zostera': 'ChIJmc1-M0xv5kcRc7IR1byBo7U',
  'restaurant-don-juan-ii-yachts-de-paris': 'ChIJV893WNdx5kcRId2B1-rDEZU',
  'cravan': 'ChIJy6Q5-Xt75kcRBwOzxoT5aNo',
  'maison-russe': 'ChIJj5j2zzVv5kcR7B_8Fvb4_Sk',
};

// Forest needs a separate search
async function findForest() {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent('Forest Paris Palais Tokyo restaurant 16eme')}&inputtype=textquery&fields=place_id,name&key=${KEY}`;
  const res = await axios.get(url);
  const c = res.data?.candidates?.[0];
  if (c) {
    console.log(`🌲 Forest found as "${c.name}" → ${c.place_id}`);
    placeIds['forest'] = c.place_id;
  }
}

async function getPhotos() {
  await findForest();
  
  const results: any = {};
  
  for (const [slug, pid] of Object.entries(placeIds)) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${pid}&fields=name,photos&key=${KEY}`;
      const res = await axios.get(url);
      const photos = res.data?.result?.photos || [];
      
      if (photos.length >= 3) {
        results[slug] = {
          hero: photos[0].photo_reference,
          gallery: [photos[1].photo_reference, photos[2].photo_reference]
        };
        console.log(`✅ ${slug}: ${photos.length} photos (hero + ${Math.min(photos.length-1, 2)} gallery)`);
      } else if (photos.length > 0) {
        results[slug] = {
          hero: photos[0].photo_reference,
          gallery: photos.slice(1).map((p: any) => p.photo_reference)
        };
        console.log(`⚠️  ${slug}: Only ${photos.length} photo(s)`);
      } else {
        console.log(`❌ ${slug}: No photos`);
      }
    } catch (e: any) {
      console.log(`❌ ${slug}: ${e.message}`);
    }
  }
  
  fs.writeFileSync('/tmp/fresh_gallery_16.json', JSON.stringify(results, null, 2));
  console.log(`\n📦 Saved to /tmp/fresh_gallery_16.json`);
}

getPhotos();
