import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const searchPoints14 = [
  { lat: 48.8329, lng: 2.3260, radius: 800 },
  { lat: 48.8400, lng: 2.3220, radius: 600 },
  { lat: 48.8250, lng: 2.3280, radius: 700 },
  { lat: 48.8300, lng: 2.3120, radius: 700 },
  { lat: 48.8350, lng: 2.3400, radius: 700 },
];

const searchPoints6 = [
  { lat: 48.8496, lng: 2.3332, radius: 600 },
  { lat: 48.8540, lng: 2.3300, radius: 500 },
  { lat: 48.8430, lng: 2.3380, radius: 500 },
];

async function getGooglePlaces(points: typeof searchPoints14, postcode: string): Promise<any[]> {
  const uniquePlaces = new Map<string, any>();

  console.log("🔑 GOOGLE_KEY length:", GOOGLE_KEY ? GOOGLE_KEY.length : 0);
  for (const point of points) {
    let nextPageToken = '';
    let pageCount = 0;

    do {
      try {
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${point.lat},${point.lng}&radius=${point.radius}&type=restaurant&key=${GOOGLE_KEY}`;
        if (nextPageToken) {
          url += `&pagetoken=${nextPageToken}`;
          await new Promise(r => setTimeout(r, 2000));
        }

        const res = await axios.get(url);
        console.log(`📡 GET ${url.substring(0, 100)}... Status: ${res.data.status}, Results count: ${res.data.results ? res.data.results.length : 'none'}`);
        if (res.data.status !== 'OK') {
          console.log(`⚠️ Full API response:`, JSON.stringify(res.data));
        }
        const results = res.data.results || [];
        nextPageToken = res.data.next_page_token || '';
        
        for (const place of results) {
          uniquePlaces.set(place.place_id, place);
        }

        pageCount++;
      } catch (e: any) {
        console.error('Error fetching Google Places:', e.message);
        break;
      }
    } while (nextPageToken && pageCount < 3);
  }

  return Array.from(uniquePlaces.values());
}

const fastFoodKeywords = [
  'mcdonald', 'burger king', 'kfc', 'subway', 'domino', 'pizza hut',
  'boulangerie', 'patisserie', 'paul', 'starbucks', 'monoprix', 'carrefour',
  'franprix', 'sushi shop', 'daily monop', 'bagelstein', 'pomme de pain',
  'brioche doree', 'exki', 'pret a manger', 'class croute', 'cojean'
];

function filterPlaces(places: any[], ratingThreshold: number): any[] {
  return places.filter(p => {
    if (!p.rating || p.rating < ratingThreshold) return false;
    
    const lowerName = p.name.toLowerCase();
    if (fastFoodKeywords.some(kw => lowerName.includes(kw))) return false;

    return true;
  });
}

async function main() {
  console.log('📡 Loading all Google IDs from DB...');
  const { data: dbPlaces, error } = await supabase
    .from('places')
    .select('google_id, name, status, arrondissement');

  if (error) {
    console.error('Error fetching from DB:', error);
    return;
  }

  const dbIds = new Set(dbPlaces.map(p => p.google_id).filter(Boolean));
  console.log(`Loaded ${dbIds.size} places from DB.`);

  // 14th arrondissement
  console.log('\n📡 Auditing Paris 14...');
  const raw14 = await getGooglePlaces(searchPoints14, '75014');
  const filtered14 = filterPlaces(raw14, 4.3);
  const missing14 = filtered14.filter(p => !dbIds.has(p.place_id));

  // 6th arrondissement
  console.log('\n📡 Auditing Paris 6...');
  const raw6 = await getGooglePlaces(searchPoints6, '75006');
  const filtered6 = filterPlaces(raw6, 4.3);
  const missing6 = filtered6.filter(p => !dbIds.has(p.place_id));

  console.log('\n=========================================');
  console.log(`📊 SUMMARY OF MISSING RESTAURANTS (Rating >= 4.3)`);
  console.log(`=========================================`);
  console.log(`Paris 14 (75014) :`);
  console.log(`  - Found on Maps (>= 4.3): ${filtered14.length}`);
  console.log(`  - Missing in DB: ${missing14.length}`);
  console.log(`Paris 6 (75006) :`);
  console.log(`  - Found on Maps (>= 4.3): ${filtered6.length}`);
  console.log(`  - Missing in DB: ${missing6.length}`);
  console.log(`=========================================`);

  console.log('\n📝 Detail of Missing in Paris 14:');
  missing14.slice(0, 15).forEach((p, idx) => {
    console.log(`  ${idx + 1}. ${p.name} (Rating: ${p.rating}, Reviews: ${p.user_ratings_total}) - ${p.vicinity}`);
  });
  if (missing14.length > 15) console.log(`  ... and ${missing14.length - 15} others`);

  console.log('\n📝 Detail of Missing in Paris 6:');
  missing6.slice(0, 15).forEach((p, idx) => {
    console.log(`  ${idx + 1}. ${p.name} (Rating: ${p.rating}, Reviews: ${p.user_ratings_total}) - ${p.vicinity}`);
  });
  if (missing6.length > 15) console.log(`  ... and ${missing6.length - 15} others`);
}

main().catch(console.error);
