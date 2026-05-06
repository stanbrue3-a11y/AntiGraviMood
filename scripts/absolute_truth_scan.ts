
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Liste de mots-clés "Identité Monde" (Niveau 3 - Ultra Large)
const WORLD_IDENTITY_KEYWORDS = [
  'taco', 'burrito', 'pizza', 'pasta', 'ramen', 'sushi', 'dim sum', 'bao', 
  'couscous', 'tajine', 'hummus', 'falafel', 'mezzé', 'libanais', 'vietnam', 
  'thaï', 'japonais', 'italien', 'mexicain', 'indien', 'coréen', 'burger', 
  'hot-dog', 'tapas', 'ceviche', 'guacamole', 'curry', 'miso', 'dashi',
  'teriyaki', 'wasabi', 'udon', 'chimichurri', 'asado', 'empanada', 'kebab', 
  'pita', 'shawarma', 'tandoori', 'naan', 'gnocchi', 'risotto', 'paella', 
  'gazpacho', 'burrata', 'mozzarella', 'poke', 'ceviche', 'bao'
];

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let scanReport: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const subcatMatch = content.match(/subcategory:\s*\[\s*['"]([^'"]+)['"]\s*\]/);
  const subcat = subcatMatch ? subcatMatch[1] : "";
  
  if (subcat === 'français') {
    const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
    const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
    const fullText = (name + " " + description).toLowerCase();
    
    const matches = WORLD_IDENTITY_KEYWORDS.filter(kw => fullText.includes(kw));
    
    if (matches.length > 0) {
      scanReport.push({ name, path: filePath, keywords: matches });
    }
  }
});

console.log(JSON.stringify(scanReport, null, 2));
