import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Center of Montparnasse: 48.8421, 2.3220
const LAT = 48.8421;
const LNG = 2.3220;
const RADIUS = 1000; // 1000 meters radius

async function main() {
  console.log('📡 Fetching all Google IDs from our DB...');
  const { data: dbPlaces, error } = await supabase
    .from('places')
    .select('google_id, name, slug');

  if (error) {
    console.error('Error fetching DB:', error);
    return;
  }

  const dbIds = new Set(dbPlaces.map(p => p.google_id).filter(Boolean));
  console.log(`Loaded ${dbIds.size} unique google_ids from database.`);

  console.log(`📡 Searching Google Places near Montparnasse (${LAT}, ${LNG})...`);
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LAT},${LNG}&radius=${RADIUS}&type=restaurant&key=${GOOGLE_KEY}`;
  
  const res = await axios.get(url);
  const results = res.data.results || [];
  console.log(`Found ${results.length} raw results from Google Places nearby search.`);

  const candidates = [];
  for (const place of results) {
    if (!place.rating || place.rating < 4.3) continue;
    if (dbIds.has(place.place_id)) continue;

    // Filter out fast food / chains
    const lowerName = place.name.toLowerCase();
    const isChain = 
      lowerName.includes('mcdonald') || 
      lowerName.includes('burger king') || 
      lowerName.includes('kfc') || 
      lowerName.includes('subway') ||
      lowerName.includes('starbucks') ||
      lowerName.includes('domino') ||
      lowerName.includes('paul');
    if (isChain) continue;

    candidates.push(place);
  }

  console.log(`\nFound ${candidates.length} candidate restaurants with rating >= 4.3 not in DB:`);
  candidates.forEach((c, idx) => {
    console.log(`${idx + 1}. ${c.name} | Rating: ${c.rating} | Address: ${c.vicinity} | ID: ${c.place_id}`);
  });
}

main().catch(console.error);
