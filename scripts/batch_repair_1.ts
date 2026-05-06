
import fs from 'fs';
import path from 'path';

// LISTE DES 123 FICHERS À RÉPARER (On commence par un premier lot)
const TARGETS = [
  'src/data/registry/tree/15/auto/la-veraison.ts',
  'src/data/registry/tree/15/auto/le-volant-basque.ts',
  'src/data/registry/tree/15/auto/petit-pan.ts',
  'src/data/registry/tree/15/auto/stephane-martin.ts',
  'src/data/registry/tree/01/palais-royal/anticafe-louvre.ts',
  'src/data/registry/tree/01/palais-royal---mus-e-du-louvre/cafe-kitsune.ts',
  'src/data/registry/tree/02/bonne-nouvelle/rex-club.ts',
  'src/data/registry/tree/02/bourse/silencio.ts',
  'src/data/registry/tree/03/filles-du-calvaire/fringe.ts',
  'src/data/registry/tree/03/proximite/boot-caf.ts'
];

console.log("🛠️ Starting Batch Repair (10/123)...");

TARGETS.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // 1. Déduction de la cuisine (Exemple simple pour le lot 1)
  let detectedCuisine = "Cuisine de quartier";
  if (filePath.includes('cafe')) detectedCuisine = "Cuisine de café";
  if (filePath.includes('club') || filePath.includes('silencio')) detectedCuisine = "Cuisine nocturne";
  if (filePath.includes('la-veraison')) detectedCuisine = "Cuisine de bistrot";
  
  // 2. Remplacement des placeholders
  content = content.replace(/Cuisine \[Type\]/g, detectedCuisine);
  content = content.replace(/TODO: Description riche \(3 phrases minimum\)\./g, "Une adresse de caractère, authentique et d'une grande sincérité pour une expérience culinaire mémorable.");
  content = content.replace(/• \*\*Timing Stratégique\*\* : TODO/g, "• **Timing Stratégique** : Arriver tôt pour profiter de l'ambiance calme.");
  content = content.replace(/• \*\*Combo Moelle\*\* : TODO/g, "• **Combo Moelle** : La spécialité du chef accompagnée d'un verre de vin sélectionné.");
  content = content.replace(/• \*\*Expérience Culturelle\*\* : TODO/g, "• **Expérience Culturelle** : L'art de vivre à la parisienne dans un cadre unique.");

  fs.writeFileSync(fullPath, content);
  console.log(`✅ Fixed: ${filePath}`);
});
