import { execSync } from 'child_process';
import path from 'path';

const slugs = [
  'mosugo-mory-sacko-14',
  'oggi',
  'les-tontons',
  'les-fauves-restaurant',
  'mr-chow-paris-14',
  'mian-fan',
  'maison-binder',
  'les-petits-parisiens-paris-14',
  'ma-shi-ta',
  'madame-ngo',
  'maison-peret'
];

console.log(`Running quality audits for ${slugs.length} restaurants...`);

for (const slug of slugs) {
  try {
    const cmd = `npx tsx scripts/agent_bridge.ts --audit ${slug}`;
    const output = execSync(cmd, { cwd: path.join(__dirname, '..'), encoding: 'utf-8' });
    console.log(output.trim());
  } catch (err: any) {
    console.error(`❌ Error auditing ${slug}:`, err.message);
  }
}
