import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function test() {
  const placeId = 'ChIJUReilo1o5kcRrwVa3I33kiE';
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,address_components&key=${GOOGLE_KEY}&language=fr`;
  const res = await axios.get(detailsUrl);
  console.log(JSON.stringify(res.data.result, null, 2));
}

test().catch(console.error);
