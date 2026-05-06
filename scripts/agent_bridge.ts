import path from 'path';
import { createClient } from '@supabase/supabase-js';

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
    const action = args[0]; // --list, --get, --update
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

    if (!slug && (action === '--get' || action === '--update')) {
        console.error('❌ Précisez un slug. Ex: npx tsx scripts/agent_bridge.ts --get la-taverne-de-zhao');
        process.exit(1);
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
