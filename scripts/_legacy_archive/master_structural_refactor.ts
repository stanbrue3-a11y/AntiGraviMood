
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// MAPPING STRUCTUREL DE HAUTE PRÉCISION
const TRUTH_TABLE = [
  { keywords: ['argentin', 'buenos aires', 'asado'], prefix: 'Cuisine argentine', sub: 'argentin', spec: 'Argentin' },
  { keywords: ['mexique', 'mexicain', 'taco', 'mole'], prefix: 'Cuisine mexicaine', sub: 'mexicain', spec: 'Mexicain' },
  { keywords: ['italien', 'pizz', 'pasta', 'trattoria'], prefix: 'Cuisine italienne', sub: 'italien', spec: 'Italien' },
  { keywords: ['japonais', 'sushi', 'ramen', 'izakaya', 'udon'], prefix: 'Cuisine japonaise', sub: 'japonais', spec: 'Japonais' },
  { keywords: ['vietnam', 'phở', 'banh mi'], prefix: 'Cuisine vietnamienne', sub: 'vietnamien', spec: 'Vietnamien' },
  { keywords: ['liban', 'mezzé', 'hommos', 'levantine'], prefix: 'Cuisine libanaise', sub: 'libanais', spec: 'Libanais' },
  { keywords: ['michelin', 'étoilé', 'gastronomique'], prefix: 'Haute gastronomie', sub: 'gastronomique', spec: 'Haute Gastronomie' },
  { keywords: ['burger', 'smash'], prefix: 'Burgers de terroir', sub: 'burger', spec: 'Burgers' },
  { keywords: ['street-food', 'bao', 'gua bao'], prefix: 'Street-food', sub: 'street-food', spec: 'Street-food' },
  { keywords: ['bistrot', 'terroir', 'traditionnel'], prefix: 'Cuisine de bistrot', sub: 'bistrot', spec: 'Bistronomie' },
  { keywords: ['brasserie'], prefix: 'Cuisine de brasserie', sub: 'brasserie', spec: 'Brasserie' },
  { keywords: ['bouillon'], prefix: 'Cuisine française traditionnelle', sub: 'bouillon', spec: 'Bouillon' }
];

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🏗️ Starting Master Structural Refactor (414 files)...");

let processedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const name = (content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "").toLowerCase();
  const description = (content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1] || "").toLowerCase();
  const fullContext = name + " " + description;
  
  let match = TRUTH_TABLE.find(t => t.keywords.some(kw => fullContext.includes(kw)));
  
  if (match) {
    let newContent = content;
    
    // 1. Refactor Subcategory
    newContent = newContent.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${match.sub}']`);
    
    // 2. Refactor Specials Cuisine
    newContent = newContent.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${match.spec}"]`);
    
    // 3. Refactor Must Eat Prefixes (Specials & Real Talk)
    // On nettoie d'abord les anciens préfixes injectés ou erronés
    const mustEatRegex = /must_eat:\s*["']([^.]+)\.(.*)["']/g;
    newContent = newContent.replace(mustEatRegex, (m, p1, p2) => {
      return `must_eat: "${match.prefix}. ${p2.trim()}"`;
    });

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      processedCount++;
    }
  }
});

console.log(`\n✅ Master Refactor Complete. ${processedCount} files structurally updated.`);
