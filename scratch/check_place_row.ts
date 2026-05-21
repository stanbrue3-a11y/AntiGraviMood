import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function main() {
  const { data, error } = await supabase
    .from('places')
    .select('slug, name, status, description, insider_tip, on_mange_quoi_ici, Url_Photos_Menu')
    .eq('slug', 'assanabel-alesia')
    .single();

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('description:', data?.description ? '✅ PRESENT' : '❌ MANQUANT');
    console.log('insider_tip:', data?.insider_tip ? '✅ PRESENT' : '❌ MANQUANT');
    console.log('on_mange_quoi_ici:', data?.on_mange_quoi_ici ?? null);
    console.log('status:', data?.status);
  }
}

main().catch(console.error);
