
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

console.log("🛠️ Final Sealing: Fixing Mismatches & UNKNOWNs...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const mustEatMatch = content.match(/must_eat:\s*["']([^.]+)\./);
  if (!mustEatMatch) return;
  
  const prefix = mustEatMatch[1].trim().toLowerCase();
  
  // LOGIQUE DE SCELLÉ : On synchronise le tag technique sur le préfixe visuel
  let targetSubcat = "";
  if (prefix.includes('italien') || prefix.includes('pizza')) targetSubcat = "italien";
  else if (prefix.includes('argentin')) targetSubcat = "argentin";
  else if (prefix.includes('mexicain')) targetSubcat = "mexicain";
  else if (prefix.includes('vietnamien')) targetSubcat = "vietnamien";
  else if (prefix.includes('coréen')) targetSubcat = "coréen";
  else if (prefix.includes('japonais')) targetSubcat = "japonais";
  else if (prefix.includes('bistrot')) targetSubcat = "bistrot";
  else if (prefix.includes('brasserie')) targetSubcat = "brasserie";
  else if (prefix.includes('gastronomie')) targetSubcat = "gastronomique";

  if (targetSubcat) {
    let newContent = content;
    // On remplace UNKNOWN ou les tags incohérents
    newContent = newContent.replace(/subcategory:\s*\[\s*['"](UNKNOWN|français|pizzeria|pizzas)?['"]\s*\]/g, `subcategory: ['${targetSubcat}']`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
    }
  }
});

console.log(`\n🎉 Registry Sealed. ${fixedCount} technical tags synchronized. Compilation starting...`);
