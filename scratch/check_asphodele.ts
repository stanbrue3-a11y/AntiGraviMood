import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const name = "Crêperie L'Asphodèle 15 Rue Delambre Paris";
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(name)}&inputtype=textquery&fields=name,place_id,rating,formatted_address&key=${GOOGLE_KEY}`;
  const res = await axios.get(searchUrl);
  const candidates = res.data.candidates || [];
  if (candidates.length === 0) {
    console.log("❌ No candidate found");
    return;
  }
  const place = candidates[0];
  const { data, error } = await supabase
    .from('places')
    .select('slug, status')
    .eq('google_id', place.place_id)
    .single();

  if (error) {
    console.log(`✅ NOT IN DB: ${place.name} | Rating: ${place.rating} | Address: ${place.formatted_address} | ID: ${place.place_id}`);
  } else {
    console.log(`❌ ALREADY IN DB: ${place.name} (slug: ${data.slug}, status: ${data.status})`);
  }
}

main().catch(console.error);
