import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Inspecting database columns and checking location field...');

  const { data: placesColumns, error: err1 } = await supabase
    .from('places')
    .select('*')
    .limit(1);

  if (err1) {
    console.error('Error fetching from places:', err1);
    return;
  }

  if (placesColumns && placesColumns.length > 0) {
    const keys = Object.keys(placesColumns[0]);
    console.log('Columns in places table:', keys);
    const hasLocation = keys.includes('location');
    console.log(`-> Has location column? ${hasLocation ? '✅ YES' : '❌ NO'}`);
    
    if (hasLocation) {
      console.log(`Sample place location value:`, (placesColumns[0] as any).location);
    }
  }
}

main().catch(console.error);
