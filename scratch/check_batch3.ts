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
  'le-severo-paris-14'
];

async function check() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, status, google_rating, description, insider_tip, subcategories, nearest_metro, metro_lines, has_terrace, Url_Photos_Menu, internal_audit_logs, dominant_mood, reservation_policy')
    .in('slug', slugs);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${data.length} places of interest:`);
  data.forEach((p) => {
    console.log(`- Slug: ${p.slug}`);
    console.log(`  Name: ${p.name}`);
    console.log(`  Status: ${p.status}`);
    console.log(`  Desc length: ${p.description ? p.description.length : 0} | Has forbidden words: ${/chaleur|véritable|institution|cadre|élégance|parisien/i.test(p.description || '')}`);
    console.log(`  Subcategories: ${JSON.stringify(p.subcategories)}`);
    console.log(`  Metro: ${p.nearest_metro} | Lines: ${JSON.stringify(p.metro_lines)}`);
    console.log(`  Resa: ${p.reservation_policy}`);
    console.log(`  Audit Logs: ${JSON.stringify(p.internal_audit_logs)}`);
    console.log(`  Menu Photos count: ${p.Url_Photos_Menu ? p.Url_Photos_Menu.length : 0}`);
  });
}

check();
