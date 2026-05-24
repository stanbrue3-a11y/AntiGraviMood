import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'le-tonnerre',
  'le-verre-siffleur-paris',
  'le-zeyer-paris',
  'les-grillades-de-buenos-aires'
];

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, arrondissement, status, google_rating, description, insider_tip, subcategories, nearest_metro, metro_lines, has_terrace, Url_Photos_Menu, internal_audit_logs, dominant_mood, reservation_policy')
    .in('slug', slugs);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${data.length} places of interest:`);
  data.forEach((p) => {
    console.log(`========================================`);
    console.log(`Name: ${p.name} (${p.slug})`);
    console.log(`Status: ${p.status}`);
    console.log(`Rating: ${p.google_rating}`);
    console.log(`Desc: ${p.description}`);
    console.log(`Tip: ${p.insider_tip}`);
    console.log(`Subcats: ${JSON.stringify(p.subcategories)}`);
    console.log(`Metro: ${p.nearest_metro} | Lines: ${JSON.stringify(p.metro_lines)}`);
    console.log(`Terrace: ${p.has_terrace} | Resa: ${p.reservation_policy} | Mood: ${p.dominant_mood}`);
    console.log(`Logs: ${JSON.stringify(p.internal_audit_logs)}`);
  });
}

check();
