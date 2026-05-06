
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

async function listTables() {
  // We can't directly list tables via the JS client easily without SQL access
  // but we can try to guess or use the rpc if defined.
  // Instead, let's try to see if 'places_industrial' or 'places_registry' exist
  const tables = ['places', 'places_v2', 'places_industrial', 'registry', 'places_registry'];
  
  for (const t of tables) {
    const { error } = await supabase.from(t).select('id').limit(1);
    if (!error) {
      console.log(`✅ Table Found: ${t}`);
    } else {
      console.log(`❌ Table Missing: ${t} (${error.message})`);
    }
  }
}

listTables();
