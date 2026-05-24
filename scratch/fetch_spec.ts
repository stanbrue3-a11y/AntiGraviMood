import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

async function main() {
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  const response = await fetch(`${url}/rest/v1/`, {
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`
    }
  });
  
  const spec = await response.json();
  console.log('Available paths in Supabase REST API:');
  console.log(Object.keys(spec.paths).filter(p => p.startsWith('/rpc/')));
}

main().catch(console.error);
