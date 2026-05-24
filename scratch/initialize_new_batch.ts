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
  'pizzeria-i-briganti',
  'hanoi-quan-montparnasse'
];

console.log(`Initializing Phase 2 for ${slugs.length} restaurants...`);

for (const slug of slugs) {
  try {
    console.log(`\n--------------------------------------------`);
    console.log(`Initializing: ${slug}`);
    console.log(`--------------------------------------------`);
    
    // Rétrocompatibilité : l'init ne demande pas d'action utilisateur si le JSON n'existe pas,
    // il crée le fichier et quitte avec le code 0.
    const cmd = `npx tsx scripts/ingest_menu_pipeline.ts ${slug}`;
    const output = execSync(cmd, { cwd: path.join(__dirname, '..'), encoding: 'utf-8' });
    console.log(output);
  } catch (err: any) {
    console.error(`❌ Error initializing ${slug}:`, err.message);
    if (err.stdout) console.log('Stdout:', err.stdout);
    if (err.stderr) console.error('Stderr:', err.stderr);
  }
}
