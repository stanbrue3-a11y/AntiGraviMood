
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

async function inspectZhao() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .ilike('name', '%Zhao%')
    .limit(5);

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log(`✅ Found ${data.length} Zhao entries`);
    data.forEach((row, i) => {
      console.log(`--- Entry ${i} ---`);
      console.log("Keys:", Object.keys(row));
      console.log("Full Data Snapshot:", JSON.stringify(row, null, 2));
    });
  }
}

inspectZhao();
