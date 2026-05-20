import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function test(id: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=geometry,name,status&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  console.log(`ID: ${id}`);
  console.log(JSON.stringify(res.data, null, 2));
}

async function main() {
  await test('ChIJb_I5S0hx5kcR0Q2nQ0qH2Q');
  await test('ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q');
}

main();
