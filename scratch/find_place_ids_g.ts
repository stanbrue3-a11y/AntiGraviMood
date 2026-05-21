import axios from 'axios';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function searchGems() {
  const queries = [
    "Fi'lia Paris Montparnasse",
    "Restaurant Hokkaido Paris 14 Rue d'Odessa",
    "L'Ardoise du 14 Paris Maine",
    'Sette Pizza Paris Alésia',
  ];

  for (const q of queries) {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(q)}&inputtype=textquery&fields=place_id,name,formatted_address&key=${key}`,
    );
    console.log(`${q} -> ${JSON.stringify(res.data.candidates[0], null, 2)}`);
  }
}

searchGems();
