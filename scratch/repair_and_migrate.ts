import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import path from 'path';
import sharp from 'sharp';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const BUCKET_NAME = 'place-media';
const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function uploadToSupabase(ref: string, storagePath: string): Promise<string | null> {
  try {
    const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${ref}&key=${GOOGLE_KEY}`;
    const response = await axios.get(googleUrl, { responseType: 'arraybuffer' });
    let buffer = Buffer.from(response.data);

    // Optimize image on-the-fly using sharp
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      let pipeline = image;
      if (metadata.width && metadata.width > 1000) {
        pipeline = pipeline.resize({ width: 1000, withoutEnlargement: true });
      }
      buffer = await pipeline.jpeg({ quality: 75, progressive: true }).toBuffer();
    } catch (compressErr: any) {
      console.warn(`      ⚠️ Failed to compress ${storagePath}, uploading raw:`, compressErr.message);
    }

    const { error } = await supabase.storage.from(BUCKET_NAME).upload(storagePath, buffer, {
      contentType: 'image/jpeg',
      upsert: true,
    });

    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from(BUCKET_NAME).getPublicUrl(storagePath);
    return publicUrl;
  } catch (e: any) {
    console.error(`   ❌ Failed upload ${storagePath}: ${e.message}`);
    return null;
  }
}

async function repairPlace(slug: string, facadeIndex: number, galleryIndices: number[]) {
  console.log(`\n⚙️ Repairing photos for ${slug}...`);

  // 1. Fetch place details from Supabase to get google_id
  const { data: place, error: fetchErr } = await supabase
    .from('places')
    .select('google_id, name')
    .eq('slug', slug)
    .single();

  if (fetchErr || !place) {
    console.error(`❌ Place ${slug} not found in database:`, fetchErr);
    return;
  }

  // 2. Fetch fresh photos from Google Places API
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.google_id}&fields=photos&key=${GOOGLE_KEY}&language=fr`;
  const detailsRes = await axios.get(detailsUrl);
  const photos = detailsRes.data.result?.photos || [];

  if (photos.length < 5) {
    console.error(`❌ Google returned less than 5 photos for ${slug} (${photos.length})`);
    return;
  }

  // 3. Reorder references based on F.I.P.P instructions
  const photoRefs = photos.slice(0, 5).map((p: any) => p.photo_reference);
  const heroRef = photoRefs[facadeIndex];
  const galleryRefs = galleryIndices.map(idx => photoRefs[idx]);

  console.log(`   Fetched ${photoRefs.length} references from Google.`);

  // 4. Migrate and upload to Supabase Storage
  console.log(`   🖼️ Uploading new Hero Image (Facade) to Storage...`);
  const heroUrl = await uploadToSupabase(heroRef, `${slug}/hero.jpg`);
  if (!heroUrl) {
    console.error(`❌ Failed to upload hero image for ${slug}`);
    return;
  }
  console.log(`   ✅ Hero Image uploaded successfully: ${heroUrl}`);

  console.log(`   📸 Uploading gallery photos to Storage...`);
  const galleryUrls: string[] = [];
  for (let i = 0; i < galleryRefs.length; i++) {
    const url = await uploadToSupabase(galleryRefs[i], `${slug}/photo_${i + 1}.jpg`);
    if (url) {
      galleryUrls.push(url);
    }
  }
  console.log(`   ✅ Gallery uploaded successfully: ${galleryUrls.length}/${galleryRefs.length} photos`);

  // 5. Update database record
  const { error: updateErr } = await supabase
    .from('places')
    .update({
      hero_image: heroUrl,
      google_photos: galleryUrls
    })
    .eq('slug', slug);

  if (updateErr) {
    console.error(`❌ Error updating database for ${slug}:`, updateErr.message);
  } else {
    console.log(`✨ Successfully repaired and migrated photos for ${place.name}!`);
  }
}

async function main() {
  // Roger La Grenouille: Facade is index 4, gallery is [0, 1, 2, 3]
  await repairPlace('roger-la-grenouille', 4, [0, 1, 2, 3]);

  // Azabu: Facade is index 2, gallery is [0, 1, 3, 4]
  await repairPlace('azabu', 2, [0, 1, 3, 4]);
}

main().catch(console.error);
