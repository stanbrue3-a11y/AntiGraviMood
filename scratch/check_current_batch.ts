import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'la-coupole',
  'le-cornichon-paris-14',
  'le-dome-montparnasse',
  'le-duc-paris-14',
  'le-florissant',
  'le-jeroboam',
  'le-layon',
  'le-petit-amazigh',
  'le-petit-baigneur',
  'le-petit-broc',
  'le-saut-du-crapaud',
  'le-plomb-du-cantal-gaite',
  'le-severo-paris-14',
];

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, arrondissement, status, google_rating, description, insider_tip, subcategories, nearest_metro, metro_lines, has_terrace, Url_Photos_Menu, internal_audit_logs, dominant_mood')
    .in('slug', slugs);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${data.length} places of interest:`);
  data.forEach((p) => {
    console.log(`========================================`);
    console.log(`Name: ${p.name} (${p.slug})`);
    console.log(`Arr: ${p.arrondissement} | Status: ${p.status} | Rating: ${p.google_rating}`);
    console.log(`Desc (${p.description?.length || 0} chars): ${p.description}`);
    console.log(`Tip: ${p.insider_tip}`);
    console.log(`Subcats: ${JSON.stringify(p.subcategories)}`);
    console.log(`Metro: ${p.nearest_metro} (${p.metro_lines?.join(', ')}) | Terrace: ${p.has_terrace} | Mood: ${p.dominant_mood}`);
    console.log(`Logs: ${JSON.stringify(p.internal_audit_logs)}`);
  });
}

check();
