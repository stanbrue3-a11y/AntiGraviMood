import { createClient } from '@supabase/supabase-js';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function check() {
    const { data, error } = await supabase.from('places').select('*').eq('slug', 'l-antre-amis');
    console.log("DB Errors:", error);
    console.log("Found:", data?.length);
    if(data && data.length > 0) {
        const p = data[0];
        console.log("Name:", p.name);
        console.log("Price:", p.index_price);
        console.log("Subcategories:", p.subcategories);
        console.log("Verified:", p.verified);
    }
}
check();
