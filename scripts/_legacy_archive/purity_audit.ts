
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Liste de mots-clés qui NE DEVRAIENT PAS être dans une fiche purement "Française"
const INTERNATIONAL_KEYWORDS = [
  'taco', 'burrito', 'pizza', 'pasta', 'ramen', 'sushi', 'dim sum', 'bao', 
  'couscous', 'tajine', 'hummus', 'falafel', 'mezzé', 'méditerranéen', 'libanais',
  'vietnam', 'thaï', 'japonais', 'italien', 'mexicain', 'indien', 'coréen',
  'burger', 'hot-dog', 'tapas', 'ceviche', 'guacamole', 'curry'
];

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🕵️‍♂️ Deep Audit: Searching for hidden identities in 'Français' category...");

let suspiciousCount = 0;
let pureFrenchCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const subcat = content.match(/subcategory:\s*\[\s*['"]([^'"]+)['"]\s*\]/)?.[1] || "";
  
  if (subcat === 'français') {
    const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
    const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
    const fullText = (name + " " + description).toLowerCase();
    
    const flag = INTERNATIONAL_KEYWORDS.find(kw => fullText.includes(kw));
    
    if (flag) {
      console.log(`⚠️ SUSPICIOUS [${flag}]: ${name} (${filePath})`);
      suspiciousCount++;
    } else {
      pureFrenchCount++;
    }
  }
});

console.log(`\n📊 AUDIT RESULTS:`);
console.log(`- Pure 'Français' entries: ${pureFrenchCount}`);
console.log(`- Suspicious entries found: ${suspiciousCount}`);
