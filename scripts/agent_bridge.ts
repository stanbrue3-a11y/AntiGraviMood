import path from 'path';
import { createClient } from '@supabase/supabase-js';
import metroData from './data/paris_metro_stations.json';

// Ce script est la "Télécommande" exclusive de l'Agent IA (Antigravity).
// Il permet de lire et d'enrichir les fiches Supabase sans générer de fichiers locaux.

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Clés API Supabase manquantes dans le .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
    const args = process.argv.slice(2);
    const action = args[0]; // --list, --get, --update, --menu, --audit
    const slug = args[1];

    if (action === '--list') {
        console.log(`📡 Récupération des derniers lieux (SCAFFOLDED)...`);
        const { data, error } = await supabase
            .from('places')
            .select('slug, name, status, dominant_mood')
            .order('created_at', { ascending: false })
            .limit(10);
        if (error) throw error;
        console.log(JSON.stringify(data, null, 2));
        return;
    }

    if (!slug && (action === '--get' || action === '--update' || action === '--audit')) {
        console.error('❌ Précisez un slug. Ex: npx tsx scripts/agent_bridge.ts --audit le-cornichon-paris-14');
        process.exit(1);
    }

    if (action === '--audit') {
        const { data: p, error } = await supabase.from('places').select('*').eq('slug', slug).single();
        if (error || !p) { console.error(`❌ Fiche "${slug}" introuvable.`); process.exit(1); }

        // Phase 1 : champs que l'Agent doit remplir (obligatoires avant publication)
        const phase1 = [
            { label: 'description (200 car. min)', ok: !!(p.description && p.description.length >= 200) },
            { label: 'insider_tip (3 • min)',      ok: !!(p.insider_tip && (p.insider_tip.match(/•/g) || []).length >= 3) },
            { label: 'dominant_mood',              ok: !!p.dominant_mood },
            { label: 'nearest_metro',              ok: !!p.nearest_metro },
            { label: 'metro_lines',                ok: !!(p.metro_lines && p.metro_lines.length > 0) },
            { label: 'subcategories',              ok: !!(p.subcategories && p.subcategories.length > 0) },
            { label: 'has_terrace',                ok: p.has_terrace !== null },
            { label: 'reservation_policy',         ok: !!p.reservation_policy },
            { label: 'hero_image',                 ok: !!p.hero_image },
            { label: 'closes_late',                ok: p.closes_late !== null },
        ];
        // Phase 2 : champs menu — NORMALEMENT vides jusqu'à réception de la photo du menu
        const phase2 = [
            { label: 'on_mange_quoi_ici', ok: !!p.on_mange_quoi_ici },
            { label: 'plat_median_cents', ok: !!p.plat_median_cents },
        ];

        const p1score = phase1.filter(c => c.ok).length;
        const p1total = phase1.length;
        const p1pct = Math.round((p1score / p1total) * 100);

        console.log(`\n📋 AUDIT — ${p.name} [${p.status}]`);
        console.log('='.repeat(50));
        console.log('  — PHASE 1 (Enrichissement éditorial) —');
        phase1.forEach(c => console.log(`  ${c.ok ? '✅' : '❌'} ${c.label}`));
        console.log(`  Score Phase 1 : ${p1score}/${p1total} (${p1pct}%)`);
        console.log('  — PHASE 2 (Menu — requiert photo) —');
        phase2.forEach(c => console.log(`  ${c.ok ? '✅' : '⏳'} ${c.label}`));
        console.log('='.repeat(50));

        if (p.status === 'SCAFFOLDED' && p1pct < 100) {
            console.log(`  ⚠️  Phase 1 incomplète — ${p1total - p1score} champ(s) manquant(s).`);
        } else if (p.status === 'SCAFFOLDED' && !p.on_mange_quoi_ici) {
            console.log(`  🟡 Phase 1 complète. En attente de la photo du menu (Phase 2).`);
        } else if (p.status === 'PUBLISHED') {
            console.log(`  🟢 Fiche publiée et complète.`);
        }
        return;
    }

    if (action === '--get') {
        const { data, error } = await supabase.from('places').select('*').eq('slug', slug).single();
        if (error) throw error;
        console.log(JSON.stringify(data, null, 2));
    }
    else if (action === '--update') {
        const payloadStr = args.slice(2).join(' ');
        if (!payloadStr) {
            console.error('❌ Payload JSON manquant pour la mise à jour.');
            process.exit(1);
        }
        const payload = JSON.parse(payloadStr);
        
        // 🛑 BOUCLIER ANTI-BÊTISE : Interdiction formelle de remplir le plat avant la Phase 2
        if (payload.on_mange_quoi_ici !== undefined) {
            console.error("🛑 ERREUR FATALE (ANTI-BÊTISE) : Il est strictement interdit de remplir 'on_mange_quoi_ici' pendant la Phase 1. Ce champ est réservé à la Phase 2 (Photo du Menu). La transaction a été bloquée pour protéger la base de données.");
            process.exit(1);
        }

        // 🛑 VALIDATION : Format de l'Insider Tip
        if (payload.insider_tip && !payload.insider_tip.includes('•')) {
            console.error("🛑 ERREUR FATALE (ÉDITORIAL) : L'insider_tip DOIT utiliser des bullet points avec le caractère '•'.");
            process.exit(1);
        }
        if (payload.insider_tip) {
            const bullets = payload.insider_tip.split('•').filter((b: string) => b.trim().length > 0);
            if (bullets.length < 3) {
                console.error('❌ ERREUR QUALITÉ : L\'insider_tip doit contenir STRICTEMENT au moins 3 points (•).');
                process.exit(1);
            }
        }

        if (payload.description) {
            if (payload.description.length < 200) {
                console.error('❌ ERREUR QUALITÉ : La description est trop courte (min 200 car.). Soyez plus immersif.');
                process.exit(1);
            }
            const forbidden = ['généreux', 'authentique', 'convivial', 'traditionnel', 'pépite', 'incontournable'];
            const found = forbidden.filter(f => payload.description!.toLowerCase().includes(f));
            if (found.length > 1) {
                console.error('❌ ERREUR QUALITÉ : Trop de mots creux. Soyez spécifique. Évitez : ' + found.join(', '));
                process.exit(1);
            }
        }

        // 🛑 VALIDATION : Enum Dominant Mood
        const validMoods = ['chill', 'festif', 'culturel'];
        if (payload.dominant_mood && !validMoods.includes(payload.dominant_mood)) {
            console.error(`🛑 ERREUR FATALE (ENUM) : dominant_mood doit être l'un de : ${validMoods.join(', ')}`);
            process.exit(1);
        }

        // 🛑 VALIDATION : Enum Category
        const validCategories = ['restaurant', 'bar', 'café'];
        if (payload.category && !validCategories.includes(payload.category)) {
            console.error(`🛑 ERREUR FATALE (ADN) : Un lieu DOIT être l'un de : ${validCategories.join(', ')}. Pas de club, boulangerie ou autre !`);
            process.exit(1);
        }

        // 🛑 VALIDATION : Métro parisien — source : paris_metro_stations.json (250+ stations, 0 appel API)
        const METRO_MAP = (metroData as any).stations as Record<string, string[]>;
        if (payload.nearest_metro && !METRO_MAP[payload.nearest_metro]) {
            console.error(`🛑 ERREUR GÉO : Station "${payload.nearest_metro}" inconnue dans le référentiel RATP.`);
            console.error(`   Vérifiez l'orthographe exacte (accents inclus). Ex: "Châtelet", "Denfert-Rochereau".`);
            process.exit(1);
        }
        if (payload.metro_lines && payload.nearest_metro && METRO_MAP[payload.nearest_metro]) {
            const validLines = METRO_MAP[payload.nearest_metro];
            const invalidLines = payload.metro_lines.filter((l: string) => !validLines.includes(l));
            if (invalidLines.length > 0) {
                console.error(`🛑 ERREUR GÉO : La ligne ${invalidLines.join(', ')} ne dessert pas "${payload.nearest_metro}". Lignes valides : ${validLines.join(', ')}.`);
                process.exit(1);
            }
        }

        // 🛡️ AUTO-TAGGING : Marquage automatique des derniers lots pour le point vert UI
        const { data: current } = await supabase.from('places').select('tags').eq('slug', slug).single();
        let finalTags = current?.tags || [];
        if (!finalTags.includes('new_lot')) {
            finalTags.push('new_lot');
        }
        payload.tags = finalTags;

        const { data, error } = await supabase.from('places').update(payload).eq('slug', slug).select();
        
        if (error) throw error;
        console.log(`✅ [ANTIGRAVITY] Mise à jour éditoriale réussie pour ${slug}`);
        console.log(JSON.stringify(data[0], null, 2));
    }
    else if (action === '--menu') {
        // Nouvelle action dédiée EXCLUSIVEMENT à la Phase 2 (quand la photo du menu est fournie)
        const payloadStr = args.slice(2).join(' ');
        const payload = JSON.parse(payloadStr);
        
        if (!payload.on_mange_quoi_ici) {
            console.error("❌ La commande --menu exige le champ 'on_mange_quoi_ici'.");
            process.exit(1);
        }

        const { data: currentPlace } = await supabase.from('places').select('description, insider_tip').eq('slug', slug).single();
        if (!currentPlace?.description || !currentPlace?.insider_tip) {
            console.error("❌ ERREUR : Impossible de publier (PUBLISHED). La Phase 2 (Description + Insider Tip) doit être complétée d'abord.");
            process.exit(1);
        }

        const { data, error } = await supabase.from('places').update({
            on_mange_quoi_ici: payload.on_mange_quoi_ici,
            plat_median_cents: payload.plat_median_cents || null,
            status: 'PUBLISHED'
        }).eq('slug', slug).select();
        
        if (error) throw error;
        console.log(`✅ [PHASE 2] Menu validé et lieu PUBLIÉ pour ${slug} !`);
    }
}

main().catch(console.error);
