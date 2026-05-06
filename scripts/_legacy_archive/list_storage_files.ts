
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

async function listFiles() {
  const { data, error } = await supabase
    .storage
    .from('place-media')
    .list('le-vrai-paris');

  if (error) {
    console.error("❌ Error listing files:", error.message);
  } else {
    console.log("✅ Files found in 'le-vrai-paris':");
    data.forEach(f => console.log(`- ${f.name} (${f.metadata?.size} bytes)`));
  }
}

listFiles();
