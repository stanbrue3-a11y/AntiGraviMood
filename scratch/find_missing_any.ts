import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function getGooglePlaces(): Promise<any[]> {
  const uniquePlaces = new Map<string, any>();
  // Center of Paris 6 (Vavin / Saint-Germain)
  const lat = 48.8496;
  const lng = 2.3332;

  let nextPageToken = '';
  let pageCount = 0;

  console.log(`📡 Searching Google Places around Paris 6 (${lat}, ${lng})...`);

  do {
    try {
      let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=restaurant&key=${GOOGLE_KEY}`;
      if (nextPageToken) {
        url += `&pagetoken=${nextPageToken}`;
        await new Promise(r => setTimeout(r, 2000));
      }

      const res = await axios.get(url);
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

  return Array.from(uniquePlaces.values());
}

async function main() {
  const { data: dbPlaces, error } = await supabase
    .from('places')
    .select('google_id, slug, name');
    
  if (error) {
    console.error('Error fetching DB places:', error);
    return;
  }

  const dbIds = new Set(dbPlaces.map(p => p.google_id).filter(Boolean));
  console.log(`Loaded ${dbIds.size} unique google_ids from DB.`);

  const googlePlaces = await getGooglePlaces();
  console.log(`Found ${googlePlaces.length} unique restaurants.`);

  const filtered = googlePlaces.filter(p => {
    if (!p.rating || p.rating < 4.4) return false;
    if (!p.user_ratings_total || p.user_ratings_total < 50) return false; // Must be popular enough
    
    const lowerName = p.name.toLowerCase();
    const isFastFood = 
      lowerName.includes('mcdonald') || 
      lowerName.includes('burger king') || 
      lowerName.includes('kfc') || 
      lowerName.includes('subway') ||
      lowerName.includes('domino') ||
      lowerName.includes('pizza hut') ||
      lowerName.includes('boulangerie') ||
      lowerName.includes('patisserie') ||
      lowerName.includes('paul') ||
      lowerName.includes('starbucks');
      
    if (isFastFood) return false;
    return true;
  });

  const missing = filtered.filter(p => !dbIds.has(p.place_id));

  console.log('\n=========================================');
  console.log(`🏁 MISSING RESTAURANTS (Rating >= 4.4)`);
  console.log(`=========================================`);
  console.log(`Total missing identified: ${missing.length}`);
  console.log('=========================================');
  
  missing.slice(0, 15).forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} | Rating: ${p.rating} (${p.user_ratings_total} reviews) | Address: ${p.vicinity} | ID: ${p.place_id}`);
  });
}

main().catch(console.error);
