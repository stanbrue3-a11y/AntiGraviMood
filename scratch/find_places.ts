import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function find() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, Url_Photos_Menu')
    .ilike('name', '%hanoi%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Matching places:');
  console.log(data);
}

find();
