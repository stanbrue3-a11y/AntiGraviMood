import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  console.log('📡 Fetching all places from Supabase...');
  const { data: places, error } = await supabase
    .from('places')
    .select('id, name, slug, status, description, insider_tip, dominant_mood, nearest_metro, metro_lines, subcategories, has_terrace, reservation_policy, hero_image, closes_late, internal_audit_logs, on_mange_quoi_ici, plat_median_cents, arrondissement');

  if (error) {
    console.error('❌ Error fetching places:', error);
    return;
  }

  console.log(`Found ${places.length} places in database.`);

  const scaffoldedList: any[] = [];
  const incompletePhase1List: any[] = [];
  const incompletePhase2List: any[] = [];
  const publishedList: any[] = [];

  for (const p of places) {
    const errors: string[] = [];

    // Phase 1 check
    if (!p.description || p.description.length < 200) {
      errors.push(`description too short (${p.description?.length || 0} chars, min 200)`);
    }
    const bulletsCount = (p.insider_tip?.match(/•/g) || []).length;
    if (!p.insider_tip || bulletsCount < 3) {
      errors.push(`insider_tip missing or has too few bullets (${bulletsCount}/3)`);
    }
    if (!p.dominant_mood) errors.push('missing dominant_mood');
    if (!p.nearest_metro) errors.push('missing nearest_metro');
    if (!p.metro_lines || p.metro_lines.length === 0) errors.push('missing metro_lines');
    if (!p.subcategories || p.subcategories.length === 0) errors.push('missing subcategories');
    if (p.has_terrace === null || p.has_terrace === undefined) errors.push('missing has_terrace');
    if (!p.reservation_policy) errors.push('missing reservation_policy');
    if (!p.hero_image) errors.push('missing hero_image');
    if (p.closes_late === null || p.closes_late === undefined) errors.push('missing closes_late');

    const hasFIPP = p.internal_audit_logs && p.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'));
    if (!hasFIPP) {
      errors.push('missing [AUDIT F.I.P.P OK] in internal_audit_logs');
    }

    // Phase 2 check
    const menuErrors: string[] = [];
    if (!p.on_mange_quoi_ici) menuErrors.push('missing on_mange_quoi_ici');
    if (!p.plat_median_cents) menuErrors.push('missing plat_median_cents');

    if (errors.length > 0) {
      incompletePhase1List.push({
        name: p.name,
        slug: p.slug,
        arrondissement: p.arrondissement,
        status: p.status,
        errors
      });
    } else if (menuErrors.length > 0) {
      incompletePhase2List.push({
        name: p.name,
        slug: p.slug,
        arrondissement: p.arrondissement,
        status: p.status,
        menuErrors
      });
    } else {
      publishedList.push(p);
    }
  }

  console.log('\n============================================================');
  console.log(`📊 SUMMARY OF REGISTERED PLACES`);
  console.log(`============================================================`);
  console.log(`✅ Fully Complete & Published: ${publishedList.length}`);
  console.log(`❌ Incomplete Phase 1 (Editorial): ${incompletePhase1List.length}`);
  console.log(`⏳ Incomplete Phase 2 (Menu & Ingestion): ${incompletePhase2List.length}`);
  console.log('============================================================\n');

  if (incompletePhase1List.length > 0) {
    console.log(`❌ INCOMPLETE PHASE 1 EDITORIAL (${incompletePhase1List.length}):`);
    incompletePhase1List.forEach(item => {
      console.log(`- [${item.arrondissement}e] ${item.name} (${item.slug}) [Status: ${item.status}]`);
      item.errors.forEach((err: string) => console.log(`    ⚠️  ${err}`));
    });
    console.log('\n');
  }

  if (incompletePhase2List.length > 0) {
    console.log(`⏳ INCOMPLETE PHASE 2 MENU INGESTION (${incompletePhase2List.length}):`);
    incompletePhase2List.forEach(item => {
      console.log(`- [${item.arrondissement}e] ${item.name} (${item.slug}) [Status: ${item.status}]`);
      item.menu_Errors = item.menuErrors || [];
      item.menuErrors.forEach((err: string) => console.log(`    ⚠️  ${err}`));
    });
    console.log('\n');
  }
}

main().catch(console.error);
