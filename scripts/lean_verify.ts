import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Force load env from moodmap/.env
dotenv.config({ path: './moodmap/.env' });

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ MISSING ENV VARS.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function leanVerify() {
  console.log('🧪 LEAN VERIFICATION : Supabase Direct Check');
  
  try {
    // 1. Fetch count
    const { count, error: countError } = await supabase
      .from('places')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;
    console.log(`📍 Nombre total de lieux en base : ${count}`);

    if (count === 296) {
      console.log('✅ NOMBRE DE LIEUX CORRECT (296).');
    } else {
      console.warn(`⚠️ ATTENTION : ${count} lieux au lieu de 296.`);
    }

    // 2. Sample data check
    const { data, error: selectError } = await supabase
      .from('places')
      .select('name, slug, media, index_price')
      .limit(5);

    if (selectError) throw selectError;

    console.log('📋 SAMPLE LIEUX :');
    data?.forEach(p => {
        const isCdn = p.media?.hero?.includes('supabase.co');
        console.log(`   - ${p.name.padEnd(30)} | Price: ${String(p.index_price).padEnd(2)} | CDN: ${isCdn ? '✅' : '❌'}`);
    });

    // 3. Search check
    const { data: searchData, error: searchError } = await supabase
      .from('places')
      .select('name')
      .ilike('name', '%Bourse%');

    if (searchError) throw searchError;
    console.log(`🔎 Recherche "Bourse" : ${searchData?.length} résultats.`);

  } catch (error) {
    console.error('💀 ERROR:', error);
  } finally {
    process.exit();
  }
}

leanVerify();
