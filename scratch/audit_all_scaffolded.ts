import { createClient } from '@supabase/supabase-js';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data: places, error } = await supabase
    .from('places')
    .select('*')
    .eq('status', 'SCAFFOLDED')
    .order('name');

  if (error) {
    console.error(error);
    return;
  }

  const placesWithMenus = places?.filter((p: any) => {
    if (!p.Url_Photos_Menu) return false;
    if (Array.isArray(p.Url_Photos_Menu)) return p.Url_Photos_Menu.length > 0;
    if (typeof p.Url_Photos_Menu === 'string') {
      try {
        const parsed = JSON.parse(p.Url_Photos_Menu);
        return Array.isArray(parsed) && parsed.length > 0;
      } catch (e) {
        return p.Url_Photos_Menu.trim().length > 0;
      }
    }
    return false;
  }) || [];

  for (const p of placesWithMenus) {
    const phase1 = [
      { label: 'description', ok: !!(p.description && p.description.length >= 200) },
      { label: 'insider_tip', ok: !!(p.insider_tip && (p.insider_tip.match(/•/g) || []).length >= 3) },
      { label: 'dominant_mood', ok: !!p.dominant_mood },
      { label: 'nearest_metro', ok: !!p.nearest_metro },
      { label: 'metro_lines', ok: !!(p.metro_lines && p.metro_lines.length > 0) },
      { label: 'subcategories', ok: !!(p.subcategories && p.subcategories.length > 0) },
      { label: 'has_terrace', ok: p.has_terrace !== null },
      { label: 'reservation_policy', ok: !!p.reservation_policy },
      { label: 'hero_image', ok: !!p.hero_image },
      { label: 'closes_late', ok: p.closes_late !== null },
      {
        label: 'Audit F.I.P.P',
        ok: !!(
          p.internal_audit_logs &&
          p.internal_audit_logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))
        ),
      },
    ];

    const p1score = phase1.filter((c) => c.ok).length;
    const p1total = phase1.length;
    console.log(`- ${p.name} (${p.slug}): ${p1score}/${p1total} items OK`);
    if (p1score < p1total) {
      const missing = phase1.filter((c) => !c.ok).map((c) => c.label);
      console.log(`  Missing: ${missing.join(', ')}`);
    }
  }
}

main().catch(console.error);
