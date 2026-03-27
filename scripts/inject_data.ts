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

    for (const place of report) {
        // Nettoyage de l'objet pour l'injection
        const payload = { ...place };
        
        // Tentative d'injection standard
        let { error } = await supabase
            .from('places')
            .upsert(payload, { onConflict: 'slug' });

        // Si erreur spécifique sur une colonne manquante (ex: michelin_stars)
        if (error && error.message.includes('michelin_stars')) {
            console.warn(`   ⚠️ Supabase : Colonne 'michelin_stars' manquante. Tentative sans cette colonne...`);
            delete (payload as any).michelin_stars;
            const retry = await supabase
                .from('places')
                .upsert(payload, { onConflict: 'slug' });
            error = retry.error;
        }

        if (error) {
            console.error(`   ❌ Error injecting ${place.slug}:`, error.message);
        } else {
            console.log(`   ✅ ${place.slug} injecté.`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('✨ INJECTION TERMINÉE');
    console.log('='.repeat(60));
}

injectData().catch(console.error);
