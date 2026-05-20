import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function viewContent() {
    const slugs = ['opla-paris-14', 'ma-shi-ta', 'jjin-korean-barbecue', 'ramen-wang-take-away-ramen'];
    const { data, error } = await supabase
        .from('places')
        .select('slug, name, address, google_rating, description, insider_tip')
        .in('slug', slugs);

    if (error) {
        console.error(error);
        return;
    }

    console.log(JSON.stringify(data, null, 2));
}

viewContent();
