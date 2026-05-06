
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

console.log("🕵️‍♂️ Ultimate Identity Audit: Detecting Hard Mismatches...");

let results: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const nameMatch = content.match(/["']?name["']?\s*:\s*["']([^"']*)["']/);
  const slugMatch = content.match(/["']?slug["']?\s*:\s*["']([^"']+)["']/);
  
  if (nameMatch && slugMatch) {
    const name = nameMatch[1];
    const slug = slugMatch[1];
    
    const normName = name.toLowerCase().replace(/[^a-z]/g, '');
    const normSlug = slug.toLowerCase().replace(/[^a-z]/g, '');

    // On cherche les cas où le nom ne contient AUCUN mot du slug
    // C'est le signe d'une erreur de copier-coller ou de pollution
    const slugWords = slug.split('-');
    const isMismatch = !slugWords.some(word => word.length > 3 && name.toLowerCase().includes(word));

    if (isMismatch || name.trim() === "") {
      results.push({ path: filePath, name, slug });
    }
  }
});

// Tri par path pour la lecture
results.sort((a, b) => a.path.localeCompare(b.path));

console.log(`\n🚨 FOUND ${results.length} SEVERE IDENTITY MISMATCHES:\n`);
results.slice(0, 30).forEach(r => {
  console.log(`- [${r.slug}] vs Name: "${r.name}" (${r.path})`);
});
