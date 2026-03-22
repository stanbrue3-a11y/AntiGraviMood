import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: './moodmap/.env' });

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function addColumn() {
    console.log('👷 AJOUT COLONNE force_manual_dish_price...');
    // Note: We use a simple UPDATE to check if column exists, but really we need SQL.
    // If we can't run SQL, we might have to rely on a different strategy.
    // However, Supabase often has an 'exec_sql' function if created.
    
    try {
        const { data, error } = await supabase.rpc('exec_sql', {
            sql_query: 'ALTER TABLE places ADD COLUMN IF NOT EXISTS force_manual_dish_price BOOLEAN DEFAULT FALSE;'
        });
        if (error) throw error;
        console.log('✅ Colonne ajoutée (ou déjà présente).');
    } catch (e) {
        console.error('❌ Impossible d\'ajouter la colonne via RPC. Elle doit être ajoutée manuellement dans le dashboard Supabase.', e);
    }
}

addColumn();
