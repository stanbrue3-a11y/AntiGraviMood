const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
    const { data: taverne } = await supabase.from('places').select('slug, name, address, google_photos').eq('slug', 'la-taverne-de-zhao').single();
    const { data: chow } = await supabase.from('places').select('slug, name, address, google_photos').eq('slug', 'mr-chow-cuisine-chinoise').single();
    
    console.log("TAVERNE:", taverne.google_photos && taverne.google_photos[0]);
    console.log("MR CHOW:", chow.google_photos && chow.google_photos[0]);
}
run();
