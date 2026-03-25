import axios from 'axios';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function test() {
    const query = "6 Rue des Trois Frères, 75018 Paris";
    const findUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${GOOGLE_KEY}`;
    const res = await axios.get(findUrl);
    console.log(JSON.stringify(res.data.results.map((r: any) => ({ name: r.name, address: r.formatted_address, id: r.place_id })), null, 2));
}
test();
