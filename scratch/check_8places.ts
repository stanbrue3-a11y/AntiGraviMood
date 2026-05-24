import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = [
  'pny-gaite',
  'poincon',
  'ramen-wang-take-away-ramen',
  'restaurant-14-juillet',
  'restaurant-a-mi-chemin-paris-14-eme',
  'restaurant-aiyara',
  'restaurant-korean-barbecue',
  'pizzeria-i-briganti'
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

  console.log(`Found ${data?.length || 0} places of interest:`);
  data?.forEach((p) => {
    console.log(`========================================`);
    console.log(`Name: ${p.name} (${p.slug})`);
    console.log(`Arr: ${p.arrondissement} | Status: ${p.status} | Rating: ${p.google_rating}`);
    console.log(`Desc (${p.description?.length || 0} chars): ${p.description}`);
    console.log(`Tip: ${p.insider_tip}`);
    console.log(`Subcats: ${JSON.stringify(p.subcategories)}`);
    console.log(`Metro: ${p.nearest_metro} (${p.metro_lines?.join(', ')}) | Terrace: ${p.has_terrace} | Mood: ${p.dominant_mood}`);
    console.log(`Photos Menu: ${JSON.stringify(p.Url_Photos_Menu)}`);
    console.log(`Logs: ${JSON.stringify(p.internal_audit_logs)}`);
  });
}

check();
