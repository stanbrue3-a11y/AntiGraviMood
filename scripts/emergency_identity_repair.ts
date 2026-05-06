
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

console.log("🛠️ Emergency Repair: Fixing Empty Names & Identity Pollution...");

let fixedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const nameMatch = content.match(/name:\s*[`"']([^`"']*)[\s\S]*?slug:\s*[`"']([^`"']+)[`"']/);
  
  if (nameMatch) {
    let name = nameMatch[1];
    const slug = nameMatch[2];
    
    // CAS 1: Nom vide -> On utilise le slug
    if (name.trim() === "") {
      name = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      console.log(`🔧 Restoring Name for ${slug}: ${name}`);
    }

    // CAS 2: Silencio / Mademoiselle Mouche Fix spécifique
    if (slug === "silencio" && name.includes("Mouche")) {
      name = "Silencio";
      console.log(`🔥 Critical Fix: Silencio recovered from Mademoiselle Mouche`);
    }

    const newContent = content.replace(/name:\s*[`"'][^`"']*[`"']/, `name: "${name}"`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      fixedCount++;
    }
  }
});

console.log(`\n✅ Emergency Repair Complete. ${fixedCount} files identity-synchronized.`);
