import { execSync } from 'child_process';
import path from 'path';

const slugs = [
  'pny-gaite',
  'poincon',
  'ramen-wang-take-away-ramen',
  'restaurant-14-juillet',
  'restaurant-a-mi-chemin-paris-14-eme',
  'restaurant-aiyara',
  'restaurant-korean-barbecue',
  'pizzeria-i-briganti'
];

console.log(`🚀 Starting batch ingestion for ${slugs.length} restaurants...`);

for (const slug of slugs) {
  console.log(`\n==================================================`);
  console.log(`PROCESSING: ${slug.toUpperCase()}`);
  console.log(`==================================================`);

  try {
    console.log(`⏳ Running Ingestion Pipeline for ${slug}...`);
    // Pipe "yes" to confirm multiple prompts (editorial, injection, etc.)
    const ingestCmd = `yes | npx tsx scripts/ingest_menu_pipeline.ts ${slug}`;
    const ingestOutput = execSync(ingestCmd, { cwd: path.join(__dirname, '..'), encoding: 'utf8' });
    console.log(ingestOutput);

    console.log(`✅ Ingested. Running Audit for ${slug}...`);
    const auditCmd = `npx tsx scripts/agent_bridge.ts --audit ${slug}`;
    const auditOutput = execSync(auditCmd, { cwd: path.join(__dirname, '..'), encoding: 'utf8' });
    console.log(auditOutput);
  } catch (err: any) {
    console.error(`❌ ERROR processing ${slug}:`, err.message);
    if (err.stdout) console.log('Stdout:', err.stdout);
    if (err.stderr) console.error('Stderr:', err.stderr);
  }
}

console.log('\n🏁 Finished batch ingestion!');
