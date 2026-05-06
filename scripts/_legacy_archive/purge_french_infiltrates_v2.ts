
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// MAPPING DE VÉRITÉ PHASE 2
const TRUTH_MAP_V2: Record<string, { prefix: string, sub: string, spec: string }> = {
  'le-feria': { prefix: 'Cuisine espagnole (Tapas)', sub: 'tapas', spec: 'Espagnol' },
  'pierre-sang-gambey': { prefix: 'Cuisine coréenne fusion', sub: 'coréen', spec: 'Coréen Fusion' },
  'gramme-11': { prefix: 'Cuisine créative (Banh Mi)', sub: 'fusion', spec: 'Cuisine d\'auteur' },
  'l-alicheur': { prefix: 'Cuisine saine & bio', sub: 'bio', spec: 'Cuisine saine' },
  'vaisseau': { prefix: 'Haute gastronomie', sub: 'gastronomique', spec: 'Gastronomie' },
  'epopee': { prefix: 'Cuisine de marché', sub: 'bistrot', spec: 'Bistronomie' },
  'lacigne': { prefix: 'Cuisine créative', sub: 'fusion', spec: 'Cuisine d\'auteur' },
  'radioeat': { prefix: 'Cuisine cosmopolite', sub: 'fusion', spec: 'Cosmopolite' },
  'perchoir': { prefix: 'Cuisine de partage', sub: 'fusion', spec: 'Cuisine festive' },
  'bouche': { prefix: 'Cuisine de partage', sub: 'tapas', spec: 'Petites assiettes' },
  'superfine': { prefix: 'Cuisine italienne (Sandwichs)', sub: 'italien', spec: 'Italien' },
  'tram-130': { prefix: 'Cuisine de marché', sub: 'bistrot', spec: 'Bistronomie' },
  'corail-restaurant': { prefix: 'Cuisine de la mer', sub: 'mer', spec: 'Poisson' }
};

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🛠️ Purging 'Français' infiltrates (Phase 2)...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.ts');
  
  const truth = Object.entries(TRUTH_MAP_V2).find(([key]) => fileName.includes(key))?.[1];
  
  if (truth) {
    let newContent = content;
    newContent = newContent.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${truth.sub}']`);
    newContent = newContent.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${truth.spec}"]`);
    const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
    newContent = newContent.replace(mustEatRegex, (m, p1, p2) => {
      return `must_eat: "${truth.prefix}. ${p2.trim()}"`;
    });

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
      console.log(`✅ Fixed Identity (P2): ${filePath}`);
    }
  }
});

console.log(`\n🎉 Phase 2 Complete. ${fixedCount} more restaurants correctly re-tagged.`);
