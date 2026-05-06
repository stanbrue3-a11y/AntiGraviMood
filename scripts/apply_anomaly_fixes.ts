
import fs from 'fs';
import path from 'path';

const ANOMALIES = [
  { path: 'src/data/registry/tree/14/montparnasse/grillades-buenos-aires.ts', prefix: 'Cuisine argentine. ' },
  { path: 'src/data/registry/tree/11/bastille/east-mamma.ts', prefix: 'Cuisine italienne. ' },
  { path: 'src/data/registry/tree/11/roquette/sama-bistro.ts', prefix: 'Cuisine libanaise. ' },
  { path: 'src/data/registry/tree/13/auto/il-etait-un-square-burger-paris.ts', prefix: 'Burgers de terroir. ' },
  { path: 'src/data/registry/tree/14/gaite/umami-burger.ts', prefix: 'Burgers (Concept US). ' },
  { path: 'src/data/registry/tree/14/pernety/saut-du-crapaud.ts', prefix: 'Cuisine mexicaine. ' },
  { path: 'src/data/registry/tree/09/auto/condesa.ts', prefix: 'Haute gastronomie (Mexique). ' },
  { path: 'src/data/registry/tree/17/auto/oxte.ts', prefix: 'Haute gastronomie (Mexique). ' },
  { path: 'src/data/registry/tree/12/bastille/auto/virtus.ts', prefix: 'Haute gastronomie (Argentine). ' },
  { path: 'src/data/registry/tree/06/auto/ducky-s.ts', prefix: 'Street-food asiatique. ' }
];

ANOMALIES.forEach(patch => {
  const fullPath = path.join(process.cwd(), patch.path);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Remplacement forcé du préfixe erroné
  // On remplace tout ce qui est avant le premier point par le nouveau préfixe
  const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
  
  const newContent = content.replace(mustEatRegex, (match, p1, p2) => {
    return `must_eat: "${patch.prefix}${p2.trim()}"`;
  });
  
  if (newContent !== content) {
    fs.writeFileSync(fullPath, newContent);
    console.log(`✅ Corrected Anomaly: ${patch.path}`);
  }
});
