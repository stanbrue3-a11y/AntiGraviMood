import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

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

  console.log('📡 Performing Text Search for restaurants near Montparnasse...');
  // Text search allows more specific results than nearby search sometimes
  const queryText = 'restaurant near Montparnasse Paris';
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(queryText)}&key=${GOOGLE_KEY}`;

  const res = await axios.get(url);
  const results = res.data.results || [];
  console.log(`Found ${results.length} raw results from text search.`);

  const candidates = [];
  for (const place of results) {
    if (!place.rating || place.rating < 4.3) continue;
    if (dbIds.has(place.place_id)) continue;

    // Filter out chains
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

  console.log(`\nFound ${candidates.length} candidate restaurants:`);
  candidates.forEach((c, idx) => {
    console.log(`${idx + 1}. ${c.name} | Rating: ${c.rating} | Address: ${c.formatted_address} | ID: ${c.place_id}`);
  });
}

main().catch(console.error);
