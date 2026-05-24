import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function upload() {
  const slug = 'jjin-korean-barbecue';
  const filePath = '/Users/stanbrue/Downloads/feafaefezfzafg.pdf';
  const filename = 'feafaefezfzafg.pdf';
  const storagePath = `menus/${slug}/${filename}`;

  console.log(`Reading file from ${filePath}...`);
  const buffer = fs.readFileSync(filePath);

  console.log(`Uploading to Supabase Storage at ${storagePath}...`);
  const { error: uploadError } = await supabase.storage
    .from('place-media')
    .upload(storagePath, buffer, {
      contentType: 'application/pdf',
      upsert: true,
    });

  if (uploadError) {
    console.error('❌ Upload error:', uploadError.message);
    return;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('place-media')
    .getPublicUrl(storagePath);

  console.log(`🔗 Public URL: ${publicUrl}`);

  // Fetch current Url_Photos_Menu
  const { data: placeData, error: selectError } = await supabase
    .from('places')
    .select('Url_Photos_Menu')
    .eq('slug', slug)
    .single();

  if (selectError) {
    console.error('❌ Select error:', selectError.message);
    return;
  }

  let currentUrls: string[] = [];
  if (placeData?.Url_Photos_Menu) {
    if (Array.isArray(placeData.Url_Photos_Menu)) {
      currentUrls = placeData.Url_Photos_Menu;
    } else if (typeof placeData.Url_Photos_Menu === 'string') {
      try {
        currentUrls = JSON.parse(placeData.Url_Photos_Menu);
      } catch {
        currentUrls = [placeData.Url_Photos_Menu];
      }
    }
  }

  if (!currentUrls.includes(publicUrl)) {
    currentUrls.push(publicUrl);
  }

  console.log('Updating Url_Photos_Menu in database...');
  const { error: dbError } = await supabase
    .from('places')
    .update({ Url_Photos_Menu: currentUrls })
    .eq('slug', slug);

  if (dbError) {
    console.error('❌ DB update error:', dbError.message);
  } else {
    console.log(`🎉 SUCCESS! Linked menu file to ${slug}.`);
  }
}

upload();
