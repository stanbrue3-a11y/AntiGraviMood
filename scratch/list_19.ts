
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

async function list() {
    const { data, error } = await supabase.from('places').select('slug, name, arrondissement').eq('arrondissement', 19).order('name');
    if (error) throw error;
    console.log(`📍 Lieux dans le 19ème (${data.length}) :`);
    data.forEach(p => console.log(`- [${p.slug}] ${p.name}`));
}

list().catch(console.error);
