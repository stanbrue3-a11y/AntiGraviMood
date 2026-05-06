
import fs from 'fs';
import path from 'path';

const FINAL_PURGE_P3 = [
  { path: 'src/data/registry/tree/18/auto/bon-jo.ts', identity: 'Cuisine de café', sub: 'café', spec: 'Brunch' },
  { path: 'src/data/registry/tree/18/martyrs/bulot-bulot.ts', identity: 'Cuisine de la mer', sub: 'mer', spec: 'Poisson' }
];

FINAL_PURGE_P3.forEach(patch => {
  const fullPath = path.join(process.cwd(), patch.path);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${patch.sub}']`);
  content = content.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${patch.spec}"]`);
  
  const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
  content = content.replace(mustEatRegex, (m, p1, p2) => {
    return `must_eat: "${patch.identity}. ${p2.trim()}"`;
  });

  fs.writeFileSync(fullPath, content);
  console.log(`✅ Patched P3: ${patch.path}`);
});
