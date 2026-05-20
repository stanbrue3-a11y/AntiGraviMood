import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

async function search(query: string) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  const result = res.data.results?.[0];
  if (!result) {
    console.log(`❌ No result for "${query}"`);
    return;
  }
  console.log(`🎯 "${query}" ->`);
  console.log(`   Name: ${result.name}`);
  console.log(`   Place ID: ${result.place_id}`);
  console.log(`   Address: ${result.formatted_address}`);
  console.log(`   Rating: ${result.rating} (reviews: ${result.user_ratings_total})`);
}

async function main() {
  await search("Pizzeria I Briganti 72 Avenue Jean Moulin Paris");
}

main().catch(console.error);
