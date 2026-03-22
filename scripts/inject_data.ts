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

    const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf-8'));
    console.log(`📍 ${report.length} lieux à injecter.`);

    for (const place of report) {
        // Transformation : extraire pricing_pillar du root price_index si possible
        // En vérité, le sync_to_supabase a déjà aplati les champs comme pint_price, main_dish_price etc.
        // On injecte tel quel dans la table 'places'
        
        const { error } = await supabase
            .from('places')
            .upsert(place, { onConflict: 'slug' });

        if (error) {
            console.error(`   ❌ Error injecting ${place.slug}:`, error.message);
        } else {
            process.stdout.write('.'); // Progrès discret
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('✨ INJECTION TERMINÉE');
    console.log('='.repeat(60));
}

injectData().catch(console.error);
