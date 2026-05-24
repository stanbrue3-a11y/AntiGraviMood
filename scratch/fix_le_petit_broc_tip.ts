import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

async function run() {
  const newTip = `• Ne passez pas à côté de leur spécialité, le 'Tigre qui pleure', qui fait la renommée du lieu.
• Privilégiez la terrasse sur le boulevard Raspail, particulièrement agréable pour clore la journée.
• Le camembert rôti à la truffe et les nems croustillants sont parfaits pour accompagner les premiers verres du Happy Hour.`;

  const { error } = await supabase
    .from('places')
    .update({ insider_tip: newTip })
    .eq('slug', 'le-petit-broc');

  if (error) {
    console.error('Failed to update insider_tip for le-petit-broc:', error);
  } else {
    console.log('Successfully updated insider_tip for le-petit-broc');
  }
}

run();
