import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function syncOlivia() {
  const placeId = 'ChIJg-Fbo_l75kcRooWzAljPVN8';
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  console.log('🔄 Synchronisation de L-Olivia...');
  const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`);
  const res = response.data.result;
  
  if (!res) {
    console.error('❌ Erreur Google :', response.data.error_message || response.data.status);
    return;
  }

  const photoRefs = res.photos?.slice(0, 5).map((p: any) => p.photo_reference) || [];
  const lat = res.geometry.location.lat;
  const lng = res.geometry.location.lng;
  const hoursRaw = res.opening_hours?.weekday_text?.join(' | ') || '';

  const { error } = await supabase.from('places')
    .update({
      lat,
      lng,
      google_photos: photoRefs,
      hero_image: photoRefs[0],
      opening_hours_raw: hoursRaw
    })
    .eq('slug', 'l-olivia-meudon');

  if (error) {
    console.error('❌ Erreur Supabase :', error);
  } else {
    console.log(`✨ SUCCÈS : L-Olivia est maintenant localisé précisément (${lat}, ${lng}) avec ${photoRefs.length} photos.`);
  }
}

syncOlivia();
