import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function audit14() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, google_rating, status')
    .eq('arrondissement', 14);

  if (error) {
    console.error(error);
    return;
  }

  const scaffolded = data.filter(p => p.status === 'SCAFFOLDED');
  const published = data.filter(p => p.status === 'PUBLISHED');
  const elite = scaffolded.filter(p => (p.google_rating || 0) > 4.3);

  console.log('--- STATISTIQUES 14e ---');
  console.log(`Total en base : ${data.length}`);
  console.log(`PUBLISHED : ${published.length}`);
  console.log(`SCAFFOLDED : ${scaffolded.length}`);
  console.log(`CIBLES ELITE (> 4.3) : ${elite.length}`);
  console.log('\n--- LISTE ELITE ---');
  elite.sort((a, b) => b.google_rating - a.google_rating).forEach(p => {
    console.log(`[${p.google_rating}] ${p.name} (${p.slug})`);
  });
}

audit14();
