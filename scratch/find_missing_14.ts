import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Overlapping search circles to cover Paris 14 (Center: 48.8329, 2.3260)
const searchPoints = [
  { lat: 48.8329, lng: 2.3260 }, // Center (Mairie)
  { lat: 48.8400, lng: 2.3220 }, // North (Montparnasse / Vavin)
  { lat: 48.8250, lng: 2.3280 }, // South (Porte d'Orléans)
  { lat: 48.8300, lng: 2.3120 }, // West (Pernety / Plaisance)
  { lat: 48.8350, lng: 2.3400 }, // East (Denfert / Saint-Jacques)
];

async function getGooglePlaces(): Promise<any[]> {
  const uniquePlaces = new Map<string, any>();

  for (const point of searchPoints) {
    let nextPageToken = '';
    let pageCount = 0;

    console.log(`📡 Searching Google Places around ${point.lat}, ${point.lng}...`);

    do {
      try {
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${point.lat},${point.lng}&radius=600&type=restaurant&key=${GOOGLE_KEY}`;
        if (nextPageToken) {
          url += `&pagetoken=${nextPageToken}`;
          // Wait 2s for token to become active
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
  }

  return Array.from(uniquePlaces.values());
}

async function main() {
  console.log('📡 Fetching all Google IDs from our DB...');
  const { data: dbPlaces, error } = await supabase
    .from('places')
    .select('google_id, slug, name');
    
  if (error) {
    console.error('Error fetching DB places:', error);
    return;
  }

  const dbIds = new Set(dbPlaces.map(p => p.google_id).filter(Boolean));
  console.log(`Loaded ${dbIds.size} unique google_ids from DB.`);

  console.log('📡 Fetching Google Places in Paris 14...');
  const googlePlaces = await getGooglePlaces();
  console.log(`Found ${googlePlaces.length} unique restaurants in the search circles.`);

  // Filter: Paris 14, rating >= 4.0, not fast food
  const filtered = googlePlaces.filter(p => {
    // Basic filter for rating
    if (!p.rating || p.rating < 4.0) return false;
    
    // Filter for fast food / bakeries in name
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

    // Filter by address to ensure it's in 75014
    const is14 = p.vicinity && p.vicinity.includes('75014');
    return is14;
  });

  console.log(`Filtered down to ${filtered.length} valid 14e restaurants with rating >= 4.0.`);

  const missing = filtered.filter(p => !dbIds.has(p.place_id));

  console.log('\n=========================================');
  console.log(`🏁 MISSING RESTAURANTS IN PARIS 14 (Rating >= 4.0)`);
  console.log(`=========================================`);
  console.log(`Total missing identified: ${missing.length}`);
  console.log('=========================================');
  
  missing.forEach((p, idx) => {
    console.log(`${idx + 1}. ${p.name} | Rating: ${p.rating} | Address: ${p.vicinity} | ID: ${p.place_id}`);
  });
}

main().catch(console.error);
