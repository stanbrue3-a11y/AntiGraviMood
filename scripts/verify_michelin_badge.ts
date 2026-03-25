import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { mapPlaceToDetailViewModel } from '../src/viewmodels/PlaceDetailViewModel';
dotenv.config();

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function verifyDameBadge() {
  const { data, error } = await supabase
    .from('places')
    .select('*')
    .eq('slug', 'la-dame-de-pic')
    .single();

  if (error) {
    console.error('Error:', error);
    return;
  }

  // Simulate frontend mapping
  const viewModel = mapPlaceToDetailViewModel(data as any);
  
  console.log('--- DAME DE PIC VIEWMODEL BADGES ---');
  console.log(JSON.stringify(viewModel.actions.badges, null, 2));

  const hasMichelin = viewModel.actions.badges.some(b => b.label.includes('Michelin'));
  if (hasMichelin) {
    console.log('✅ SUCCESS: Michelin Badge detected!');
  } else {
    console.log('❌ FAILED: Michelin Badge missing.');
  }
}

verifyDameBadge();
