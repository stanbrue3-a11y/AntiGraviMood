import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function findOpla() {
    const { data, error } = await supabase
        .from('places')
        .select('name, slug, google_rating')
        .ilike('name', '%opla%');

    if (error) {
        console.error(error);
        return;
    }

    console.log(JSON.stringify(data, null, 2));
}

findOpla();
