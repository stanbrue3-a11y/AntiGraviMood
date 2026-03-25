
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(process.cwd(), '.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing ENV:', { SUPABASE_URL: !!SUPABASE_URL, SUPABASE_KEY: !!SUPABASE_KEY });
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function check() {
    console.log('--- SUPABASE AUDIT (TSX) ---');
    const { data: countData, error: countError } = await supabase
        .from('places')
        .select('*', { count: 'exact', head: true });
    
    if (countError) {
        console.error('Error counting:', countError);
        return;
    }
    
    const { data, error } = await supabase
        .from('places')
        .select('slug, arrondissement, index_price, google_rating')
        .order('arrondissement', { ascending: true });

    if (error) {
        console.error('Error fetching slugs:', error);
        return;
    }

    console.log(`Found ${data.length} total places on Supabase.`);
    
    const d13 = data.filter(p => p.arrondissement === 13);
    console.log(`13th Arrondissement (${d13.length} places):`);
    
    const targetSlugs = ['pepe-rosso', 'l-ourcine', 'sukhothai', 'au-petit-marguery', 'tempero-epicerie', 'chez-gino-pizza-feu-de-bois'];
    
    targetSlugs.forEach(ts => {
        const found = data.find(p => p.slug === ts);
        if (found) {
            console.log(` ✅ ${ts.padEnd(30)} | Price: ${found.index_price}€ | Rating: ${found.google_rating}`);
        } else {
            console.log(` ❌ ${ts.padEnd(30)} | NOT FOUND`);
        }
    });

    const zeros = data.filter(p => p.index_price === 0 || p.index_price === null);
    console.log(`Warning: ${zeros.length} places have 0 or NULL index_price.`);
}

check();
