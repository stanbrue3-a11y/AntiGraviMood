import { createClient } from '@supabase/supabase-js';
import path from 'path';
import fs from 'fs';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const FORBIDDEN_ROOTS = [
  'chic',
  'cosy',
  'authentiq',
  'traditionnel',
  'convivial',
  'incontournable',
  'institution',
  'véritable',
  'elegance',
  'élégance',
  'parisien',
  'perle rare',
  'genereux',
  'généreux',
  'chaleureu',
  'chaleureux',
  'impeccable',
  'vaut le détour',
  'expérience unique',
  'spectaculaire',
  'écrin',
  'nostalgie',
  'cadre',
  'pépite',
  'pepite',
];

async function main() {
  const slugs = ['bistrot-jools', 'cantinella', 'bistrot-15', 'le-petit-sommelier-paris-14'];

  console.log(`🔍 Auditing ${slugs.length} recent places...\n`);

  for (const slug of slugs) {
    const { data: p, error } = await supabase.from('places').select('*').eq('slug', slug).single();
    if (error || !p) {
      console.log(`❌ ${slug}: Not found in DB.`);
      continue;
    }

    console.log(`📋 PLACE: ${p.name} (${p.slug})`);
    console.log(`   Status: ${p.status}`);
    console.log(`   Arrondissement: ${p.arrondissement}`);
    console.log(`   Dominant Mood: ${p.dominant_mood}`);
    console.log(`   Nearest Metro: ${p.nearest_metro} (${p.metro_lines?.join(', ')})`);
    console.log(`   Terrace: ${p.has_terrace} | Reservation Policy: ${p.reservation_policy}`);
    console.log(`   Hero Image: ${p.hero_image}`);
    console.log(`   Google Photos Count: ${p.google_photos?.length || 0}`);
    console.log(`   Subcategories: ${p.subcategories?.join(', ') || 'None'}`);

    // Check description
    const desc = p.description || '';
    console.log(`   Description Length: ${desc.length} chars`);
    if (desc.length < 200) {
      console.log(`      ⚠️ WARNING: Description too short! (${desc.length} < 200)`);
    }

    // Check forbidden words
    const foundForbidden: string[] = [];
    for (const word of FORBIDDEN_ROOTS) {
      const regex = new RegExp(word, 'gi');
      if (regex.test(desc) || regex.test(p.insider_tip || '')) {
        foundForbidden.push(word);
      }
    }
    if (foundForbidden.length > 0) {
      console.log(`      ⚠️ WARNING: Contains forbidden words: ${foundForbidden.join(', ')}`);
    }

    // Check chef name-dropping
    const chefRegex = /(chef|cheffe|propriétaire|fondateur|dirigé par|tenu par)\s+([A-Z][a-z]+)/;
    if (chefRegex.test(desc) || chefRegex.test(p.insider_tip || '')) {
      console.log(`      ⚠️ WARNING: Possible chef name-dropping detected.`);
    }

    // Check insider tips format
    const tipsStr = p.insider_tip || '';
    const tips = tipsStr.split('\n').filter((t) => t.trim().length > 0);
    console.log(`   Insider Tips Count: ${tips.length}`);
    let tipsFormatOk = true;
    for (const tip of tips) {
      if (!tip.startsWith('•')) {
        tipsFormatOk = false;
      }
    }
    if (tips.length !== 3 || !tipsFormatOk) {
      console.log(
        `      ⚠️ WARNING: Insider tips formatting incorrect (Must be exactly 3 bullet points starting with •)`,
      );
    }

    // Check if hero image is in the bucket
    if (p.hero_image && !p.hero_image.includes('place-media')) {
      console.log(
        `      ⚠️ WARNING: Hero image is not in Supabase Storage bucket ('place-media')! Url: ${p.hero_image}`,
      );
    }

    // Check if google_photos are in the bucket
    const externalPhotos = (p.google_photos || []).filter(
      (url: string) => !url.includes('place-media'),
    );
    if (externalPhotos.length > 0) {
      console.log(
        `      ⚠️ WARNING: ${externalPhotos.length} photos in google_photos are not in Supabase Storage!`,
      );
    }

    // Check audit logs
    console.log(`   Audit logs: ${JSON.stringify(p.internal_audit_logs)}`);
    console.log('');
  }
}

main().catch(console.error);
