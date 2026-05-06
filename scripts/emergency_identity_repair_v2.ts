
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

console.log("🛠️ Emergency Repair V2: Absolute Identity Sync...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Detection plus large (gère "name": "...", name: "...", 'name': '...')
  const nameMatch = content.match(/["']?name["']?\s*:\s*["']([^"']*)["']/);
  const slugMatch = content.match(/["']?slug["']?\s*:\s*["']([^"']+)["']/);
  
  if (nameMatch && slugMatch) {
    let name = nameMatch[1];
    const slug = slugMatch[1];
    
    let changed = false;

    // CAS 1: Nom vide
    if (name.trim() === "") {
      name = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      console.log(`🔧 Fixed Empty Name: ${slug} -> ${name}`);
      changed = true;
    }

    // CAS 2: Pollution Silencio
    if (slug === "silencio" && name.includes("Mouche")) {
      name = "Silencio";
      console.log(`🔥 Fixed Pollution: Silencio corrected`);
      changed = true;
    }

    if (changed) {
      const newContent = content.replace(/(["']?name["']?\s*:\s*["'])([^"']*)(["'])/, `$1${name}$3`);
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
    }
  }
});

console.log(`\n✅ Repair Complete. ${fixedCount} fiches fixed.`);
