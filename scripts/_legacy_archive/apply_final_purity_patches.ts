
import fs from 'fs';
import path from 'path';

const FINAL_PATCHES = [
  { path: 'src/data/registry/tree/10/auto/comptoir-sur-mer.ts', identity: 'Cuisine de la mer', sub: 'mer', spec: 'Cuisine de la mer' },
  { path: 'src/data/registry/tree/11/folie-mericourt/blanca.ts', identity: 'Cuisine argentine', sub: 'argentin', spec: 'Argentin' },
  { path: 'src/data/registry/tree/11/oberkampf/pierre-sang-oberkampf.ts', identity: 'Cuisine coréenne', sub: 'coréen', spec: 'Coréen' },
  { path: 'src/data/registry/tree/11/oberkampf/soya.ts', identity: 'Gastronomie bio', sub: 'bio', spec: 'Bio' },
  { path: 'src/data/registry/tree/11/parmentier/le-dauphin.ts', identity: 'Cuisine de partage', sub: 'tapas', spec: 'Tapas d\'auteur' },
  { path: 'src/data/registry/tree/11/roquette/street-bangkok.ts', identity: 'Cuisine thaïlandaise', sub: 'thaï', spec: 'Thaïlandais' },
  { path: 'src/data/registry/tree/13/auto/thai-vien.ts', identity: 'Cuisine thaïlandaise', sub: 'thaï', spec: 'Thaïlandais' },
  { path: 'src/data/registry/tree/14/auto/restaurant-korean-barbecue.ts', identity: 'Cuisine coréenne', sub: 'coréen', spec: 'Coréen' }
];

console.log("🛠️ Applying Final Purity Patches...");

FINAL_PATCHES.forEach(patch => {
  const fullPath = path.join(process.cwd(), patch.path);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Update Subcategory
  content = content.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${patch.sub}']`);
  // Update Specials Cuisine
  content = content.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${patch.spec}"]`);
  
  // Update Must Eat Prefix
  const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
  content = content.replace(mustEatRegex, (m, p1, p2) => {
    return `must_eat: "${patch.identity}. ${p2.trim()}"`;
  });

  fs.writeFileSync(fullPath, content);
  console.log(`✅ Patched Purity: ${patch.path}`);
});
