import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function run() {
  console.log('Reading bucket info...');
  const { data: buckets, error: listErr } = await supabase.storage.listBuckets();
  if (listErr) {
    console.error('Error listing buckets:', listErr);
    return;
  }

  const targetBucket = buckets.find(b => b.id === 'place-media');
  if (!targetBucket) {
    console.error('place-media bucket not found!');
    return;
  }

  console.log('Current bucket configuration:', targetBucket);

  console.log('Updating place-media bucket file size limit to 100MB...');
  const { data, error } = await supabase.storage.updateBucket('place-media', {
    public: true,
    fileSizeLimit: 104857600, // 100MB
  });

  if (error) {
    console.error('Error updating bucket:', error);
  } else {
    console.log('Successfully updated bucket! Result:', data);
  }
}

run();
