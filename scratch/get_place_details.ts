import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

const placeIds = {
  jools: 'ChIJtyCvRgBx5kcRDicVh793gls',
  cantinella: 'ChIJO235vMBx5kcRrHbZaiYJUXU',
  bistrot15: 'ChIJ1aA85VJx5kcRH_Jo6mIkLhY',
};

async function getDetails(name: string, id: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,formatted_address,geometry,rating,user_ratings_total,formatted_phone_number,website,opening_hours,photos,editorial_summary&key=${GOOGLE_KEY}`;
  const res = await axios.get(url);
  const result = res.data.result;
  console.log(`\n=================== ${name} ===================`);
  console.log(JSON.stringify(result, null, 2));
}

async function main() {
  for (const [name, id] of Object.entries(placeIds)) {
    await getDetails(name, id);
  }
}

main().catch(console.error);
