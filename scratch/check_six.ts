import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'la-chope-daguerre',
  'la-cantine-du-troquet-pernety-paris-14',
  'la-contre-allee',
  'l-opportun-paris-14',
  'la-basilicata',
  'la-cagouille'
];

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, google_rating, description, insider_tip, subcategories, nearest_metro, metro_lines, has_terrace, Url_Photos_Menu, internal_audit_logs, dominant_mood')
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
    console.log(`Google Rating: ${p.google_rating}`);
    console.log(`Description: ${p.description}`);
    console.log(`Insider Tip:`, p.insider_tip);
    console.log(`Subcategories:`, p.subcategories);
    console.log(`Nearest Metro: ${p.nearest_metro} | Lines:`, p.metro_lines);
    console.log(`Has Terrace: ${p.has_terrace}`);
    console.log(`Dominant Mood: ${p.dominant_mood}`);
    console.log(`Internal Audit Logs:`, p.internal_audit_logs);
  });
}

check();
