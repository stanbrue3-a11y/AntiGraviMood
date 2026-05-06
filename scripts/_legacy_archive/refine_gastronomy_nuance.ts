
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

console.log("🌟 Refining Haute Gastronomie nuances...");

let refinedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
  const subcats = content.match(/subcategory:\s*\[([^\]]*)\]/)?.[1].toLowerCase() || "";
  
  if (description.includes('michelin') || description.includes('étoilé') || subcats.includes('gastronomique')) {
    // On remplace "Cuisine française. " ou "Cuisine de bistrot. " par "Haute gastronomie. "
    const newContent = content.replace(/must_eat:\s*["'](Cuisine française\.|Cuisine de bistrot\.)\s*/g, 'must_eat: "Haute gastronomie. ');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      refinedCount++;
    }
  }
});

console.log(`✅ Refinement complete. ${refinedCount} places upgraded to Haute gastronomie.`);
