import { createClient } from '@supabase/supabase-js';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function count() {
  const { count, error } = await supabase
    .from('places')
    .select('*', { count: 'exact', head: true });
  
  if (error) console.error(error);
  else console.log(`TOTAL_COUNT: ${count}`);
}

count();
