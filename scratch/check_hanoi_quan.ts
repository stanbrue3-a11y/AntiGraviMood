import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .eq('slug', 'hanoi-quan-montparnasse')
    .single();

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Hanoi Quan in database:');
  console.log(JSON.stringify(data, null, 2));
}

check();
