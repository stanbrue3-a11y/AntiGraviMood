import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const slugs = ['aux-plumes', 'bistro-palyma', 'shinotaku', 'kimura', 'hanoi-quan-montparnasse'];

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('name, slug, arrondissement, status, description, insider_tip, dominant_mood, has_terrace, Url_Photos_Menu, tags')
    .in('slug', slugs);

  if (error) {
    console.error('Error:', error);
    return;
  }

  data.forEach((p) => {
    console.log(`=== ${p.name} (${p.slug}) ===`);
    console.log(`Status: ${p.status}`);
    console.log(`Tags: ${JSON.stringify(p.tags)}`);
    console.log(`Description: ${p.description?.substring(0, 100)}...`);
    console.log(`Insider Tip: ${p.insider_tip?.substring(0, 100)}...`);
    console.log(`Mood: ${p.dominant_mood} | Terrace: ${p.has_terrace}`);
    console.log(`Menu URLs: ${JSON.stringify(p.Url_Photos_Menu)}`);
  });
}

main().catch(console.error);
