import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import sharp from 'sharp';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const BUCKET_NAME = 'place-media';
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);
const ref = "Ab43m-tKkk8ICWY1uxhSEVAz7mEURdnn-CKnCvyvzDkxQQPOgwhN7agaDk2KyUL5RgMp3B8CffasBFywEqQcgo4f0FxFs9Hr-6Par1UZzdp3qHiBBAYyCG9GmVrjpLNw8Kxsi5-RIqdre9v1X51kyn21ohfBE5x0sFtQR-oMoNcuDJOloi2yWMZPiwDzM1GhlFuQuRQf6uMZ2O_sS9445Wo8oEKF_tCe535d88qlMzkVh5rjj1mvQkIOvE1wWwk5lqQalZ-YvTXF4bYfBFK567XhLTUHopxSe8Ju05UOoukhnNMVLyh_uSf8pPNqscSBAuGTeF0VcuxLjYe47aCo4PtYcBTmdyBOXdNfxCNDyWkuR1iMdLb3ov36h2svQkzr7XCHyaxaUzH9GdId0ynDSLZJl6DcydGT7AcXjg-B4bUWywE9UeykBbH9cGKv3e12XYBN";
const storagePath = "pizzeria-positano/photo_3.jpg";

async function main() {
  const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${ref}&key=${GOOGLE_KEY}`;
  
  console.log('1. Fetching from Google...');
  const response = await axios.get(googleUrl, { responseType: 'arraybuffer' });
  let buffer = Buffer.from(response.data);

  console.log('2. Compressing using sharp...');
  const image = sharp(buffer);
  const metadata = await image.metadata();
  let pipeline = image;
  if (metadata.width && metadata.width > 1000) {
    pipeline = pipeline.resize({ width: 1000, withoutEnlargement: true });
  }
  buffer = await pipeline.jpeg({ quality: 75, progressive: true }).toBuffer();

  console.log('3. Uploading to Supabase...', storagePath);
  const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(storagePath, buffer, {
    contentType: 'image/jpeg',
    upsert: true,
  });

  if (error) {
    console.error('❌ Supabase Upload Failed:', error);
  } else {
    console.log('✅ Supabase Upload Success:', data);
  }
}

main().catch(console.error);
