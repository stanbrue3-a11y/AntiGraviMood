
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Liste de mots-clés ultra-sensible (Niveau 2)
const DETAILED_KEYWORDS = [
  'taco', 'burrito', 'pizza', 'pasta', 'ramen', 'sushi', 'dim sum', 'bao', 
  'couscous', 'tajine', 'hummus', 'falafel', 'mezzé', 'méditerranéen', 'libanais',
  'vietnam', 'thaï', 'japonais', 'italien', 'mexicain', 'indien', 'coréen',
  'burger', 'hot-dog', 'tapas', 'ceviche', 'guacamole', 'curry', 'miso', 'dashi',
  'teriyaki', 'wasabi', 'udon', 'chimichurri', 'asado', 'empanada', 'kebab', 'pita'
];

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let report: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const subcat = content.match(/subcategory:\s*\[\s*['"]([^'"]+)['"]\s*\]/)?.[1] || "";
  
  if (subcat === 'français') {
    const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
    const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
    const fullText = (name + " " + description).toLowerCase();
    
    const foundKw = DETAILED_KEYWORDS.find(kw => fullText.includes(kw));
    
    if (foundKw) {
      // Déduction de la vraie catégorie
      let trueIdentity = "Cuisine française";
      if (foundKw === 'ceviche') trueIdentity = "Cuisine de la mer";
      else if (foundKw === 'coréen') trueIdentity = "Cuisine coréenne";
      else if (foundKw === 'falafel' || name.toLowerCase().includes('soya')) trueIdentity = "Gastronomie bio";
      else if (foundKw === 'tapas') trueIdentity = "Cuisine de partage";
      else if (foundKw === 'curry' || foundKw === 'thaï') trueIdentity = "Cuisine thaïlandaise";
      else if (foundKw === 'burger') trueIdentity = "Burgers de terroir";
      else if (foundKw === 'italien' || foundKw === 'pizza' || foundKw === 'pasta') trueIdentity = "Cuisine italienne";
      
      report.push({ name, path: filePath, foundKw, trueIdentity });
    }
  }
});

console.log(JSON.stringify(report, null, 2));
