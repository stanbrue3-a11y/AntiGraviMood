import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const queries = [
  "bistrot Rue Delambre Paris",
  "restaurant Rue Delambre Paris",
  "crêperie Rue d'Odessa Paris",
  "restaurant Rue d'Odessa Paris",
  "bistrot Rue du Cherche-Midi Paris",
  "restaurant Rue Vavin Paris",
  "restaurant Daguerre Paris",
  "bistrot Montparnasse Paris"
];

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

  const candidatesMap = new Map<string, any>();

  for (const q of queries) {
    console.log(`📡 Performing Text Search: "${q}"...`);
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(q)}&key=${GOOGLE_KEY}`;
    
    try {
      const res = await axios.get(url);
      const results = res.data.results || [];
      console.log(`Found ${results.length} raw results.`);

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
          lowerName.includes('sushi shop') ||
          lowerName.includes('pitaya') ||
          lowerName.includes('bagelstein') ||
          lowerName.includes('class croute') ||
          lowerName.includes('exki') ||
          lowerName.includes('paul');
        if (isChain) continue;

        candidatesMap.set(place.place_id, place);
      }
    } catch (e: any) {
      console.error(`Error searching "${q}":`, e.message);
    }
  }

  console.log(`\nFound ${candidatesMap.size} unique candidate restaurants with rating >= 4.3 not in DB:`);
  let idx = 1;
  for (const [id, c] of candidatesMap.entries()) {
    console.log(`${idx++}. ${c.name} | Rating: ${c.rating} | Address: ${c.formatted_address} | ID: ${c.place_id}`);
  }
}

main().catch(console.error);
