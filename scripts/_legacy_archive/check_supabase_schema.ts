
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

async function checkSchema() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .limit(1);

  if (error) {
    console.error("❌ Error fetching place:", error.message);
  } else {
    console.log("✅ Sample Place Keys:", Object.keys(data[0] || {}));
    console.log("✅ Sample Place Data:", JSON.stringify(data[0], null, 2));
  }
}

checkSchema();
