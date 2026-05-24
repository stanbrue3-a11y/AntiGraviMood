import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const PLACE_ID = 'ChIJNdSMoxNx5kcR0__fDCJMZqw';

async function main() {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,formatted_address,url,website,reviews&key=${GOOGLE_KEY}`;
    const res = await axios.get(url);
    console.log('Google Places API Response:', JSON.stringify(res.data.result, null, 2));
  } catch (err: any) {
    console.error('Error fetching details:', err.message);
  }
}

main();
