import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const failedSlugs = [
  'mosugo-mory-sacko-14',
  'les-tontons',
  'les-fauves-restaurant',
  'mr-chow-paris-14',
  'mian-fan',
  'ma-shi-ta',
  'maison-peret'
];

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, description, insider_tip, subcategories, nearest_metro, metro_lines, has_terrace, reservation_policy, internal_audit_logs, dominant_mood, status')
    .in('slug', failedSlugs);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  data.forEach((p) => {
    console.log(`========================================`);
    console.log(`Slug: ${p.slug} | Name: ${p.name} | Status: ${p.status}`);
    console.log(`Description: ${p.description}`);
    console.log(`Insider Tip: ${p.insider_tip}`);
    console.log(`Subcats: ${JSON.stringify(p.subcategories)}`);
    console.log(`Metro: ${p.nearest_metro} | Lines: ${JSON.stringify(p.metro_lines)}`);
    console.log(`Terrace: ${p.has_terrace} | Resa: ${p.reservation_policy} | Mood: ${p.dominant_mood}`);
    console.log(`Logs: ${JSON.stringify(p.internal_audit_logs)}`);
  });
}

check();
