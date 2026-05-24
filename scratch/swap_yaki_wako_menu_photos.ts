import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function swap() {
  console.log('🔄 Swapping yaki and wako in Supabase database...');

  // 1. Fetch URLs
  const { data: yakiData, error: yakiErr } = await supabase
    .from('places')
    .select('Url_Photos_Menu')
    .eq('slug', 'yaki')
    .single();

  const { data: wakoData, error: wakoErr } = await supabase
    .from('places')
    .select('Url_Photos_Menu')
    .eq('slug', 'wako')
    .single();

  if (yakiErr || wakoErr || !yakiData || !wakoData) {
    console.error('❌ Failed to fetch urls:', yakiErr, wakoErr);
    return;
  }

  const yakiUrls = yakiData.Url_Photos_Menu;
  const wakoUrls = wakoData.Url_Photos_Menu;

  // 2. Update yaki with wako urls
  const { error: updYakiErr } = await supabase
    .from('places')
    .update({ Url_Photos_Menu: wakoUrls })
    .eq('slug', 'yaki');

  // 3. Update wako with yaki urls
  const { error: updWakoErr } = await supabase
    .from('places')
    .update({ Url_Photos_Menu: yakiUrls })
    .eq('slug', 'wako');

  if (updYakiErr || updWakoErr) {
    console.error('❌ Failed to swap database fields:', updYakiErr, updWakoErr);
    return;
  }
  console.log('✅ Swapped database fields successfully.');

  // 4. Swap local directories
  const baseDir = path.join(__dirname, '../scratch/tmp_menu_downloads');
  const yakiDir = path.join(baseDir, 'yaki');
  const wakoDir = path.join(baseDir, 'wako');
  const tempDir = path.join(baseDir, 'temp_yaki');

  console.log('🔄 Swapping local directories...');
  if (fs.existsSync(yakiDir) && fs.existsSync(wakoDir)) {
    fs.renameSync(yakiDir, tempDir);
    fs.renameSync(wakoDir, yakiDir);
    fs.renameSync(tempDir, wakoDir);
    console.log('✅ Swapped local downloaded folders.');
  } else {
    console.warn('⚠️ One or both directories do not exist locally. Skipping folder swap.');
  }
}

swap().catch(console.error);
