import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const slugs = ['yaki', 'wako'];
  for (const slug of slugs) {
    console.log(`Adding FIPP audit log for ${slug}...`);
    const { data: place, error: fetchErr } = await supabase
      .from('places')
      .select('internal_audit_logs')
      .eq('slug', slug)
      .single();

    if (fetchErr || !place) {
      console.error(`Error fetching ${slug}:`, fetchErr);
      continue;
    }

    const currentLogs = place.internal_audit_logs || [];
    const newLog = `[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]`;
    if (!currentLogs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))) {
      currentLogs.push(newLog);
      const { error: updateErr } = await supabase
        .from('places')
        .update({ internal_audit_logs: currentLogs })
        .eq('slug', slug);

      if (updateErr) {
        console.error(`Error updating logs for ${slug}:`, updateErr);
      } else {
        console.log(`Successfully added FIPP log for ${slug}`);
      }
    } else {
      console.log(`FIPP log already exists for ${slug}`);
    }
  }
}

main().catch(console.error);
