import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

async function search(query: string) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=name,formatted_address,rating,place_id&key=${GOOGLE_KEY}`;
    const res = await axios.get(url);
    console.log(`Query: "${query}"`);
    console.log(JSON.stringify(res.data, null, 2));
    console.log('='.repeat(40));
  } catch (err: any) {
    console.error('Error fetching details:', err.message);
  }
}

async function main() {
  await search("L'Inconnu Paris");
}

main();
