
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

function walk(dir: string, callback: (file: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const SAMPLE_SIZE = 20;
let results: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (results.length >= SAMPLE_SIZE || !filePath.endsWith('.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
  const subcatMatch = content.match(/subcategory:\s*\[([^\]]*)\]/);
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  const mustEatMatch = content.match(/must_eat:\s*["']([^"']+)["']/);
  
  if (nameMatch && subcatMatch) {
    const name = nameMatch[1];
    const subcats = subcatMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    const description = descMatch ? descMatch[1] : "";
    const mustEat = mustEatMatch ? mustEatMatch[1] : "";
    
    // LOGIQUE DE NUANCE (Simulation d'IA immersive)
    let nuance = "Cuisine française"; // Default
    
    if (subcats.includes('italien') || name.toLowerCase().includes('trattoria')) nuance = "Cuisine italienne";
    if (subcats.includes('japonais') || name.toLowerCase().includes('izakaya')) nuance = "Cuisine japonaise";
    if (subcats.includes('bistrot') || name.toLowerCase().includes('bistrot')) nuance = "Cuisine de bistrot";
    if (subcats.includes('gastronomique')) nuance = "Haute gastronomie";
    if (subcats.includes('street-food')) nuance = "Street-food d'auteur";
    if (subcats.includes('asiatique') && description.toLowerCase().includes('xi\'an')) nuance = "Cuisine chinoise (Xi'an)";
    if (subcats.includes('libanais')) nuance = "Cuisine levantine";
    if (description.toLowerCase().includes('brasserie') || subcats.includes('brasserie')) nuance = "Cuisine de brasserie";
    if (description.toLowerCase().includes('terroir')) nuance = "Cuisine de terroir";
    
    results.push({
      name,
      subcats,
      currentMustEat: mustEat,
      proposedPrefix: nuance + ". ",
      isNuanced: nuance !== "Cuisine française"
    });
  }
});

console.log(JSON.stringify(results, null, 2));
