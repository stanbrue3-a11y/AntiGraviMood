import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function fixJosselinPhoto() {
  const { data, error } = await supabase
    .from('places')
    .select('google_photos, hero_image')
    .eq('slug', 'la-creperie-de-josselin')
    .single();

  if (error) {
    console.error('Error fetching photos:', error);
    return;
  }

  const photos = data.google_photos;
  // Photo 3 is the correct one (index 3 in the array)
  const correctHero = photos[3];

  console.log('Current Hero:', data.hero_image);
  console.log('Switching to Photo 3:', correctHero);

  const { error: updateError } = await supabase
    .from('places')
    .update({
      hero_image: correctHero,
      internal_audit_logs: [
        ' [CRITICAL FIX] Switched Hero Image to Photo 3 (Real Facade n°67) after manual audit of annex error.',
      ],
    })
    .eq('slug', 'la-creperie-de-josselin');

  if (updateError) {
    console.error('Error updating hero:', updateError);
  } else {
    console.log('✅ Hero Image successfully updated to real facade (n°67).');
  }
}

fixJosselinPhoto();
