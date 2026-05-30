import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Fetching all places...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, dominant_mood, lat, lng');

  if (error) {
    console.error('Error:', error);
    return;
  }

  const counts: Record<string, number> = {};
  const moods: Record<string, number> = {};
  const invalidCoordinates: any[] = [];
  const invalidMoods: any[] = [];

  places.forEach((p) => {
    counts[p.status] = (counts[p.status] || 0) + 1;
    moods[p.dominant_mood || 'undefined'] = (moods[p.dominant_mood || 'undefined'] || 0) + 1;

    if (p.lat === null || p.lat === undefined || p.lng === null || p.lng === undefined) {
      invalidCoordinates.push(p);
    }
    if (p.status === 'PUBLISHED' && (!p.dominant_mood || !['chill', 'festif', 'culturel'].includes(p.dominant_mood))) {
      invalidMoods.push(p);
    }
  });

  console.log('\n--- STATUS COUNTS ---');
  console.log(counts);

  console.log('\n--- DOMINANT MOOD COUNTS ---');
  console.log(moods);

  console.log('\n--- INVALID COORDINATES ---');
  console.log(invalidCoordinates.map(p => p.slug));

  console.log('\n--- INVALID MOODS ON PUBLISHED ---');
  console.log(invalidMoods.map(p => ({ slug: p.slug, mood: p.dominant_mood })));

  console.log('\n--- NON-PUBLISHED PLACES IN DB (first 10) ---');
  console.log(places.filter(p => p.status !== 'PUBLISHED').slice(0, 10).map(p => ({ slug: p.slug, status: p.status, mood: p.dominant_mood })));
}

main().catch(console.error);
