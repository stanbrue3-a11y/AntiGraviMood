import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// CRITICAL: dotenv MUST load before any logic.
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY; 

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing environment variables (Supabase URL/Key).');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const REPORT_PATH = path.join(__dirname, '../../temp_screenshots/shadow_sync_report.json');

async function injectData() {
    console.log('🚀 INJECTION DES DONNÉES : Shadow Report → PostgreSQL');
    console.log('='.repeat(60));

    if (!fs.existsSync(REPORT_PATH)) {
        console.error('❌ Shadow report not found. Run sync_to_supabase.ts first.');
        return;
    }

    const args = process.argv.slice(2);
    const targetSlugArg = args.find(arg => arg.startsWith('--slug='))?.split('=')[1];
    const targetSlugs = targetSlugArg ? targetSlugArg.split(',') : [];

    let report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
    
    if (targetSlugs.length > 0) {
        report = report.filter((p: any) => targetSlugs.includes(p.slug));
    }

    console.log(`📍 ${report.length} lieux à injecter.`);

    // 🚀 L'hyper-drive (Upsert en chunk de 100 au lieu de ligne par ligne)
    const BATCH_SIZE = 100;
    for (let i = 0; i < report.length; i += BATCH_SIZE) {
        let batch = report.slice(i, i + BATCH_SIZE);
        
        let { error } = await supabase
            .from('places')
            .upsert(batch, { onConflict: 'slug' });

        // Fallback si la base de données distante n'est pas à jour
        if (error && error.message.includes('michelin_stars')) {
            console.warn(`   ⚠️ Supabase : Colonne 'michelin_stars' manquante. Retrait pour le lot en cours...`);
            batch = batch.map((p: any) => {
                const copy = { ...p };
                delete copy.michelin_stars;
                return copy;
            });
            const retry = await supabase.from('places').upsert(batch, { onConflict: 'slug' });
            error = retry.error;
        }

        if (error) {
            console.error(`   ❌ Erreur fatale sur le lot [${i} -> ${i + batch.length}] :`, error.message);
        } else {
            console.log(`   🚀✅ Lot injecté : ${batch.length} lieux en un seul appel réseau !`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('✨ INJECTION TERMINÉE');
    console.log('='.repeat(60));
}

injectData().catch(console.error);
