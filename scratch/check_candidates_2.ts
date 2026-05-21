import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
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
  await checkDb('Le Petit Sommelier');
  await checkDb('Le Bistro des Campagnes');
  await checkDb('Le Petit Baigneur');

  console.log('\n--- Fetching Google Place IDs ---');
  await searchGoogle('Le Petit Sommelier Avenue du Maine Paris');
  await searchGoogle('Le Bistro des Campagnes Rue de la Gaîté Paris');
  await searchGoogle('Le Petit Baigneur Rue de la Sablière Paris');
}

main().catch(console.error);
