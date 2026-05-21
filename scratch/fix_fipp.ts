import { createClient } from '@supabase/supabase-js';
import { execSync } from 'child_process';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fixLAssiette() {
  const slug = 'l-assiette-paris-14';
  const { data, error } = await supabase
    .from('places')
    .select('hero_image, google_photos, tags')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Erreur de récupération :', error);
    return;
  }

  console.log('Données actuelles :', data);

  const payload = {
    hero_image: data.hero_image,
    google_photos: data.google_photos,
  };

  const cmd = `npx tsx scripts/agent_bridge.ts --update ${slug} '${JSON.stringify(payload)}'`;
  console.log('Exécution de la mise à jour F.I.P.P...');
  try {
    const output = execSync(cmd, { encoding: 'utf-8' });
    console.log(output);
  } catch (e: any) {
    console.error("Erreur d'exécution :", e.stdout || e.message);
  }
}

fixLAssiette();
