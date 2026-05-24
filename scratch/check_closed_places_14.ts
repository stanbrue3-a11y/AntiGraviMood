import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  console.error('❌ Google Maps API key missing in .env');
  process.exit(1);
}

async function main() {
  console.log('📡 Fetching places in the 14th arrondissement...');
  const { data: places, error } = await supabase
    .from('places')
    .select('name, slug, google_id, status')
    .eq('arrondissement', 14);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`🔍 Found ${places.length} places in 14th arrondissement. Checking status via Google Maps API...`);

  let checkedCount = 0;
  let closedPermanently: any[] = [];
  let closedTemporarily: any[] = [];
  let noGoogleId: any[] = [];
  let errors: any[] = [];

  for (const place of places) {
    if (!place.google_id) {
      noGoogleId.push(place);
      continue;
    }

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.google_id}&fields=business_status,name&key=${apiKey}&language=fr`;
      const response = await fetch(url);
      const json: any = await response.json();

      if (json.status !== 'OK') {
        console.error(`❌ Google API error for ${place.name} (${place.slug}): ${json.status}`, json.error_message || '');
        errors.push({ place, status: json.status, error_message: json.error_message });
        continue;
      }

      const businessStatus = json.result?.business_status;
      const gName = json.result?.name;
      checkedCount++;

      if (businessStatus === 'CLOSED_PERMANENTLY') {
        console.log(`🚨 CLOSED_PERMANENTLY: ${place.name} (${place.slug}) | Maps Name: ${gName}`);
        closedPermanently.push({ place, gName });
      } else if (businessStatus === 'CLOSED_TEMPORARILY') {
        console.log(`⏳ CLOSED_TEMPORARILY: ${place.name} (${place.slug}) | Maps Name: ${gName}`);
        closedTemporarily.push({ place, gName });
      }

      // Add a small delay to respect rate limits if needed (optional)
      await new Promise(resolve => setTimeout(resolve, 50));

    } catch (err: any) {
      console.error(`❌ Failed to check ${place.name}:`, err.message);
      errors.push({ place, error: err.message });
    }
  }

  console.log('\n==================================================');
  console.log('🏁 CHECK COMPLETED');
  console.log(`- Total places in 14th: ${places.length}`);
  console.log(`- Total checked with Google API: ${checkedCount}`);
  console.log(`- Permanently closed: ${closedPermanently.length}`);
  console.log(`- Temporarily closed: ${closedTemporarily.length}`);
  console.log(`- Missing google_id: ${noGoogleId.length}`);
  console.log(`- Errors: ${errors.length}`);
  console.log('==================================================');

  if (closedPermanently.length > 0) {
    console.log('\n🚨 DETAILS: PERMANENTLY CLOSED:');
    closedPermanently.forEach(item => {
      console.log(`- ${item.place.name} (slug: ${item.place.slug}) | DB Status: ${item.place.status} | Maps Name: ${item.gName}`);
    });
  }

  if (closedTemporarily.length > 0) {
    console.log('\n⏳ DETAILS: TEMPORARILY CLOSED:');
    closedTemporarily.forEach(item => {
      console.log(`- ${item.place.name} (slug: ${item.place.slug}) | DB Status: ${item.place.status} | Maps Name: ${item.gName}`);
    });
  }
}

main().catch(console.error);
