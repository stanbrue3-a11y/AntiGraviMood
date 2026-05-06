
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// MAPPING DE VÉRITÉ POUR LES 27 INFILTRÉS
const TRUTH_MAP: Record<string, { prefix: string, sub: string, spec: string }> = {
  'osteria-goto': { prefix: 'Cuisine italienne', sub: 'italien', spec: 'Italien' },
  'passerini': { prefix: 'Cuisine italienne', sub: 'italien', spec: 'Italien' },
  'tagine': { prefix: 'Cuisine marocaine', sub: 'marocain', spec: 'Marocain' },
  'l-homme-bleu': { prefix: 'Cuisine berbère', sub: 'marocain', spec: 'Berbère' },
  'el-comal': { prefix: 'Cuisine mexicaine', sub: 'mexicain', spec: 'Mexicain' },
  'chulita': { prefix: 'Cuisine mexicaine', sub: 'mexicain', spec: 'Mexicain' },
  'zaoka': { prefix: 'Cuisine chinoise', sub: 'chinois', spec: 'Chinois' },
  'mokonuts': { prefix: 'Cuisine fusion', sub: 'fusion', spec: 'Cuisine Fusion' },
  'mokoloco': { prefix: 'Cuisine fusion', sub: 'fusion', spec: 'Cuisine Fusion' },
  'tarantula': { prefix: 'Cuisine créative', sub: 'fusion', spec: 'Cuisine d\'auteur' },
  'sot-ly-laisse': { prefix: 'Cuisine franco-japonaise', sub: 'japonais', spec: 'Franco-Japonais' },
  'geosmine': { prefix: 'Haute gastronomie', sub: 'gastronomique', spec: 'Gastronomie' },
  'chakaiseki-akiyoshi': { prefix: 'Haute gastronomie (Japon)', sub: 'japonais', spec: 'Kaiseki' }
};

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🛠️ Purging 'Français' infiltrates...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.ts');
  
  // On cherche une correspondance dans notre Truth Map
  const truth = Object.entries(TRUTH_MAP).find(([key]) => fileName.includes(key))?.[1];
  
  if (truth) {
    let newContent = content;
    // 1. Correction Subcategory
    newContent = newContent.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${truth.sub}']`);
    // 2. Correction Specials Cuisine
    newContent = newContent.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${truth.spec}"]`);
    // 3. Correction Must Eat Prefix
    const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
    newContent = newContent.replace(mustEatRegex, (m, p1, p2) => {
      return `must_eat: "${truth.prefix}. ${p2.trim()}"`;
    });

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
      console.log(`✅ Fixed Identity: ${filePath}`);
    }
  }
});

console.log(`\n🎉 Purge Complete. ${fixedCount} international restaurants correctly re-tagged.`);
