import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const candidates = [
  'La Cerisaie 70 Av. du Maine Paris 14',
  'L\'Inattendu 35 Rue de l\'Ouest Paris 14',
  'Creperie L\'Asphodele 15 Rue Delambre Paris 14',
  'Pizzeria Positano 9 Rue Bd Edgar Quinet Paris 14'
];

async function checkCandidate(name: string) {
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(name)}&inputtype=textquery&fields=name,place_id,rating,formatted_address&key=${GOOGLE_KEY}`;
  const res = await axios.get(searchUrl);
  const candidates = res.data.candidates || [];
  if (candidates.length === 0) {
    console.log(`❌ No candidate found for "${name}"`);
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

async function main() {
  for (const c of candidates) {
    await checkCandidate(c);
  }
}

main().catch(console.error);
