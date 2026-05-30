import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const cutoffDate = '2026-05-19T00:00:00.000Z';

  console.log(`📡 Fetching places created before ${cutoffDate} that have 'new_lot' tag...`);
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, tags, created_at')
    .lt('created_at', cutoffDate)
    .contains('tags', ['new_lot']);

  if (error) {
    console.error('Error fetching places:', error);
    return;
  }

  console.log(`Found ${places.length} old places to clean up.`);

  if (places.length === 0) {
    console.log('No cleanup needed.');
    return;
  }

  // Update in batches/sequentially
  let updatedCount = 0;
  for (const p of places) {
    const newTags = p.tags.filter((t: string) => t !== 'new_lot');
    
    const { error: updateError } = await supabase
      .from('places')
      .update({ tags: newTags })
      .eq('id', p.id);

    if (updateError) {
      console.error(`Error updating place ${p.slug}:`, updateError);
    } else {
      updatedCount++;
    }
  }

  console.log(`Successfully removed 'new_lot' tag from ${updatedCount} old places.`);
}

main().catch(console.error);
