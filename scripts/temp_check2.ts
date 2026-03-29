import { createClient } from '@supabase/supabase-js';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function check() {
    const { data } = await supabase.from('places').select('*').in('slug', ['l-antre-amis', 'afaria', 'le-beurre-noisette']);
    console.log("Found:", data?.length);
    data?.forEach(p => {
        console.log("-------");
        console.log(p.slug, "- Verified:", p.verified, "- Status:", p.primary_status);
    });
}
check();
