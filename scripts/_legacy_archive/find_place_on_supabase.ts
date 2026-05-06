
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

async function findPlace() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .eq('id', 'poi-le-vrai-paris')
    .single();

  if (error) {
    console.error("❌ Error finding Le Vrai Paris:", error.message);
    
    // Try by slug
    const { data: data2, error: error2 } = await supabase
      .from('places')
      .select('*')
      .eq('slug', 'le-vrai-paris')
      .single();
      
    if (error2) {
      console.error("❌ Error finding by slug:", error2.message);
    } else {
      console.log("✅ Found by slug! Keys:", Object.keys(data2 || {}));
      console.log("✅ Data:", JSON.stringify(data2, null, 2));
    }
  } else {
    console.log("✅ Found by ID! Keys:", Object.keys(data || {}));
    console.log("✅ Data:", JSON.stringify(data, null, 2));
  }
}

findPlace();
