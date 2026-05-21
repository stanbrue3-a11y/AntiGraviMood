import path from 'path';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

/**
 * 🛰️ RESYNC GPS — Source de vérité : Google Places API
 *
 * MODES :
 *   --recent [N]  → Audite uniquement les fiches des N derniers jours (défaut: 7). 💡 RECOMMANDÉ
 *   --slug <slug> → Audite une seule fiche précise.
 *   --all         → ⚠️  Audite TOUT le registre. Coûteux en quota Google.
 *
 * Usage :
 *   npx tsx scripts/resync_coords.ts              → mode --recent 7
 *   npx tsx scripts/resync_coords.ts --recent 14  → 14 derniers jours
 *   npx tsx scripts/resync_coords.ts --slug la-rotonde-montparnasse
 *   npx tsx scripts/resync_coords.ts --all        → ⚠️  quota danger
 */

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Seuil : toute dérive > 10m est corrigée
const DRIFT_THRESHOLD_METERS = 10;

async function resyncPlace(place: {
  slug: string;
  name: string;
  google_id: string;
  lat: number;
  lng: number;
}) {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.google_id}&fields=geometry&key=${GOOGLE_KEY}`,
  );
  const loc = res.data.result?.geometry?.location;
  if (!loc) {
    console.log(`⚠️  SKIP  ${place.name} — géométrie Google absente`);
    return false;
  }

  const deltaLat = Math.abs(place.lat - loc.lat) * 111000;
  const deltaLng = Math.abs(place.lng - loc.lng) * 78000;
  const maxDrift = Math.max(deltaLat, deltaLng);

  if (maxDrift > DRIFT_THRESHOLD_METERS) {
    await supabase.from('places').update({ lat: loc.lat, lng: loc.lng }).eq('slug', place.slug);
    console.log(
      `🔧 CORRIGÉ  ${place.name} — dérive ${deltaLat.toFixed(0)}m lat / ${deltaLng.toFixed(0)}m lng`,
    );
    return true;
  } else {
    console.log(`✅ OK       ${place.name} (dérive max ${maxDrift.toFixed(1)}m)`);
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes('--all');
  const slugIdx = args.indexOf('--slug');
  const recentIdx = args.indexOf('--recent');
  const recentDays = recentIdx !== -1 ? parseInt(args[recentIdx + 1]) || 7 : 7;

  console.log('🛰️  [RESYNC GPS] Source de vérité : Google Places API');

  let query = supabase
    .from('places')
    .select('slug, name, google_id, lat, lng')
    .not('google_id', 'is', null);

  if (slugIdx !== -1) {
    const targetSlug = args[slugIdx + 1];
    console.log(`🎯 Mode : fiche unique → ${targetSlug}`);
    query = query.eq('slug', targetSlug);
  } else if (isAll) {
    console.log(`⚠️  Mode : GLOBAL (tout le registre). Quota Google engagé.`);
  } else {
    const since = new Date(Date.now() - recentDays * 86400000).toISOString();
    console.log(
      `📅 Mode : --recent ${recentDays}j (depuis ${since.substring(0, 10)}). Quota protégé.`,
    );
    query = query.gte('created_at', since);
  }

  console.log('='.repeat(60));

  const { data: places, error } = await query.order('name');
  if (error) throw error;

  if (!places || places.length === 0) {
    console.log('ℹ️  Aucune fiche à auditer pour cette période.');
    return;
  }

  console.log(`📋 ${places.length} fiche(s) à auditer...\n`);
  let fixed = 0,
    ok = 0,
    errors = 0;

  for (const place of places as any[]) {
    try {
      const corrected = await resyncPlace(place);
      corrected ? fixed++ : ok++;
      await new Promise((r) => setTimeout(r, 200)); // Protection quota : 5 req/s max
    } catch (e: any) {
      console.log(`❌ ERREUR   ${place.name} : ${e.message}`);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`🏁 RÉSULTAT : ${fixed} corrigées | ${ok} OK | ${errors} erreurs`);
  console.log(`💡 Pour un audit global (rare) : npx tsx scripts/resync_coords.ts --all`);
}

main().catch(console.error);
