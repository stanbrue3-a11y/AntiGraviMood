import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const slug = 'helene-darroze';
  console.log(`Updating ${slug} for Phase 1...`);
  const { data: place, error: fetchErr } = await supabase
    .from('places')
    .select('internal_audit_logs')
    .eq('slug', slug)
    .single();

  if (fetchErr || !place) {
    console.error(`Error fetching ${slug}:`, fetchErr);
    return;
  }

  const currentLogs = place.internal_audit_logs || [];
  const newLog = `[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3]`;
  if (!currentLogs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))) {
    currentLogs.push(newLog);
  }

  const { data, error: updateErr } = await supabase
    .from('places')
    .update({
      subcategories: ["gastronomique", "francaise", "viande", "poisson"],
      dominant_mood: "culturel",
      internal_audit_logs: currentLogs
    })
    .eq('slug', slug)
    .select();

  if (updateErr) {
    console.error(`Error updating ${slug}:`, updateErr);
  } else {
    console.log(`Successfully updated ${slug}:`, JSON.stringify(data, null, 2));
  }
}

main().catch(console.error);
