import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkDb(name: string) {
  const { data, error } = await supabase
    .from('places')
    .select('slug, name, status')
    .ilike('name', `%${name}%`);

  if (error) throw error;
  console.log(`🔍 DB Check for "${name}":`, data);
  return data;
}

async function searchGoogle(query: string) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  const result = res.data.results?.[0];
  if (!result) {
    console.log(`❌ Google Maps: No result for "${query}"`);
    return;
  }
  console.log(`🎯 Google Maps: "${query}" ->`);
  console.log(`   Name: ${result.name}`);
  console.log(`   Place ID: ${result.place_id}`);
  console.log(`   Address: ${result.formatted_address}`);
  console.log(`   Rating: ${result.rating} (reviews: ${result.user_ratings_total})`);
}

async function main() {
  const queries = [
    "bistrot 75015 Paris",
    "italien 75014 Paris",
    "japonais 75014 Paris"
  ];
  for (const q of queries) {
    console.log(`\n🔍 Searching Google for: "${q}"`);
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(q)}&key=${GOOGLE_KEY}`;
    const res = await axios.get(url);
    const results = res.data.results || [];
    for (const r of results.slice(0, 5)) {
      if (r.rating >= 4.3) {
        console.log(`- Name: ${r.name} | Rating: ${r.rating} (${r.user_ratings_total} reviews) | Address: ${r.formatted_address} | PlaceID: ${r.place_id}`);
        const dbMatch = await checkDb(r.name);
        if (dbMatch.length === 0) {
          console.log(`   👉 NOT IN DB! Suitable candidate!`);
        } else {
          console.log(`   ❌ In DB: ${dbMatch.map((d: any) => d.slug).join(', ')}`);
        }
      }
    }
  }
}

main().catch(console.error);
