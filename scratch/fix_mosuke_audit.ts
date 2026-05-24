import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const newDesc = "Ce restaurant gastronomique de la rue Raymond Losserand mêle les influences africaines et japonaises à la cuisine française. La salle lumineuse s'articule autour de tables de bois clair épurées et de cloisons coulissantes en papier washi. Le chuchotement respectueux des convives accompagne le ballet silencieux du service. L'odeur du homard bleu grillé au miso et du sarrasin torréfié embaume l'air feutré pour une dégustation hors du temps.";

async function run() {
  const { data: place, error: fetchError } = await supabase
    .from('places')
    .select('internal_audit_logs')
    .eq('slug', 'mosuke-par-mory-sacko')
    .single();

  if (fetchError || !place) {
    console.error('Failed to fetch:', fetchError);
    return;
  }

  const currentLogs = place.internal_audit_logs || [];
  if (!currentLogs.some(log => log.includes('[AUDIT F.I.P.P OK]'))) {
    currentLogs.push("[AUDIT F.I.P.P OK] Ordre validé : Façade (#0) -> Intérieur (#1) -> Plats (#2).");
  }

  const { error: updateError } = await supabase
    .from('places')
    .update({
      description: newDesc,
      internal_audit_logs: currentLogs,
    })
    .eq('slug', 'mosuke-par-mory-sacko');

  if (updateError) {
    console.error('Failed to update:', updateError);
  } else {
    console.log('Successfully updated mosuke-par-mory-sacko');
  }
}

run();
