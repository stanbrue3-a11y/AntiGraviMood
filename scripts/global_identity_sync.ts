
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Table de vérité pour la synchronisation des tags
const SYNC_MAP: Record<string, { sub: string, spec: string }> = {
  'Cuisine argentine': { sub: 'argentin', spec: 'Argentin' },
  'Cuisine italienne': { sub: 'italien', spec: 'Italien' },
  'Cuisine japonaise': { sub: 'japonais', spec: 'Japonais' },
  'Cuisine vietnamienne': { sub: 'vietnamien', spec: 'Vietnamien' },
  'Cuisine libanaise': { sub: 'libanais', spec: 'Libanais' },
  'Cuisine marocaine': { sub: 'marocain', spec: 'Marocain' },
  'Cuisine mexicaine': { sub: 'mexicain', spec: 'Mexicain' },
  'Burgers de terroir': { sub: 'burger', spec: 'Burgers' },
  'Street-food asiatique': { sub: 'street-food', spec: 'Asiatique' }
};

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🔄 Starting Global Identity Sync...");

let syncCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const mustEatMatch = content.match(/must_eat:\s*["']([^.]+)\./);
  if (!mustEatMatch) return;
  
  const prefix = mustEatMatch[1].trim();
  const syncData = SYNC_MAP[prefix];
  
  if (syncData) {
    let newContent = content;
    // Sync subcategory
    newContent = newContent.replace(/subcategory:\s*\[\s*['"]français['"]\s*\]/g, `subcategory: ['${syncData.sub}']`);
    // Sync specials.cuisine
    newContent = newContent.replace(/cuisine:\s*\[\s*['"]Français['"]\s*\]/g, `cuisine: ["${syncData.spec}"]`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      syncCount++;
    }
  }
});

console.log(`✅ Identity Sync Complete. ${syncCount} files synchronized with their real cuisine type.`);
