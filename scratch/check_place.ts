import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'la-creperie-de-josselin',
  'la-manifattura',
  'la-petite-soeur',
  'la-taverne-de-zhao',
  'le-bistrot-des-campagnes-paris-14',
  'le-bistrot-du-dome-paris-14'
];

async function checkPlaces() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .in('slug', slugs);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${data?.length || 0} places:`);
  data?.forEach(p => {
    console.log(JSON.stringify(p, null, 2));
  });
}

checkPlaces();

