import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

async function main() {
  const query = 'best restaurants near Montparnasse Paris 14';
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  const results = res.data.results || [];

  console.log(`Found ${results.length} places near Montparnasse 14th:`);
  for (const r of results) {
    if (r.rating >= 4.4 && r.user_ratings_total > 50) {
      console.log(`- ${r.name} (${r.formatted_address})`);
      console.log(`  Rating: ${r.rating} | Reviews: ${r.user_ratings_total}`);
      console.log(`  Place ID: ${r.place_id}`);
      console.log(`  Types: ${r.types?.join(', ')}`);
    }
  }
}

main().catch(console.error);
