import { createClient } from '@supabase/supabase-js';
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function statusAudit() {
  const { data, error } = await supabase
    .from('places')
    .select('status');
  
  if (error) {
    console.error(error);
    return;
  }

  const stats = data.reduce((acc: any, curr: any) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});

  console.log(JSON.stringify(stats, null, 2));
}

statusAudit();
