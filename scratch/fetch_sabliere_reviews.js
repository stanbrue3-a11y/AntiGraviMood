const axios = require('axios');
require('dotenv').config();

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
const placeId = 'ChIJnUQurR9x5kcRLulcnQz23IE';

async function main() {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${GOOGLE_KEY}&language=fr`;
    const res = await axios.get(detailsUrl);
    console.log(JSON.stringify(res.data.result.reviews, null, 2));
}

main().catch(console.error);
