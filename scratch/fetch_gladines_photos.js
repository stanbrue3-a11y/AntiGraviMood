/* eslint-disable no-undef */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

async function run() {
  const { data } = await supabase
    .from('places')
    .select('google_photos')
    .eq('slug', 'chez-gladines-butte-aux-cailles')
    .single();
  if (data && data.google_photos) {
    const auditDir = path.join(__dirname, 'vision_audit', 'chez-gladines-butte-aux-cailles');
    if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir, { recursive: true });

    for (let i = 0; i < Math.min(5, data.google_photos.length); i++) {
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.google_photos[i]}&key=${GOOGLE_KEY}`;
      try {
        const response = await axios({ url: photoUrl, responseType: 'stream' });
        const writer = fs.createWriteStream(path.join(auditDir, `photo_${i}.jpg`));
        response.data.pipe(writer);
      } catch (e) {
        console.error('Failed to download photo', i);
      }
    }
    console.log('Photos downloaded to', auditDir);
  } else {
    console.log('No photos found in DB');
  }
}
run();
