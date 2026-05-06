
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🛠️ Aggressive Sealing: Forcing Synchronicity...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const mustEatMatch = content.match(/must_eat:\s*["']([^.]+)\./);
  if (!mustEatMatch) return;
  
  const prefix = mustEatMatch[1].trim().toLowerCase();
  
  let targetSubcat = "";
  if (prefix.includes('italien') || prefix.includes('pizza')) targetSubcat = "italien";
  else if (prefix.includes('argentin')) targetSubcat = "argentin";
  else if (prefix.includes('mexicain')) targetSubcat = "mexicain";
  else if (prefix.includes('vietnamien')) targetSubcat = "vietnamien";
  else if (prefix.includes('coréen')) targetSubcat = "coréen";
  else if (prefix.includes('japonais')) targetSubcat = "japonais";
  else if (prefix.includes('marocain')) targetSubcat = "marocain";
  else if (prefix.includes('libanais')) targetSubcat = "libanais";
  else if (prefix.includes('thaï')) targetSubcat = "thaï";
  else if (prefix.includes('chinois')) targetSubcat = "chinois";

  if (targetSubcat) {
    let newContent = content;
    // REMPLACEMENT AGRESSIF : On remplace TOUT le tableau subcategory
    newContent = newContent.replace(/subcategory:\s*\[[^\]]+\]/g, `subcategory: ['${targetSubcat}']`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
    }
  }
});

console.log(`\n🎉 Registry Aggressively Sealed. ${fixedCount} technical tags forced. Compilation starting...`);
