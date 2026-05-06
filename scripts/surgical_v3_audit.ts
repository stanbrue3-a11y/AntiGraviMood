
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree/14'; // On se concentre sur le 14e pour le test

const WHITELIST_MAPPING: Record<string, string> = {
  'français': 'Cuisine française',
  'italien': 'Cuisine italienne',
  'japonais': 'Cuisine japonaise',
  'chinois': 'Cuisine chinoise',
  'thaï': 'Cuisine thaïlandaise',
  'vietnamien': 'Cuisine vietnamienne',
  'libanais': 'Cuisine libanaise',
  'méditerranéen': 'Cuisine méditerranéenne',
  'bistrot': 'Cuisine de bistrot',
  'brasserie': 'Cuisine de brasserie',
  'bouillon': 'Cuisine française traditionnelle',
  'street-food': 'Street-food',
  'gastronomique': 'Haute gastronomie',
  'pizzeria': 'Cuisine italienne (Pizzeria)',
  'mexicain': 'Cuisine mexicaine'
};

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let results: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
  const subcatMatch = content.match(/subcategory:\s*\[([^\]]*)\]/);
  const mustEatMatch = content.match(/must_eat:\s*["']([^"']+)["']/);
  
  if (nameMatch && subcatMatch && mustEatMatch) {
    const name = nameMatch[1];
    const subcats = subcatMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '').toLowerCase());
    const currentMustEat = mustEatMatch[1];
    
    // Si ça commence déjà par "Cuisine", on ne propose rien pour ne pas polluer
    if (currentMustEat.startsWith('Cuisine') || currentMustEat.startsWith('Street-food')) {
       return;
    }

    // Déduction selon Whitelist
    let prefix = "";
    
    // Cas spéciaux
    if (subcats.includes('bouillon')) prefix = WHITELIST_MAPPING['bouillon'];
    else if (subcats.includes('gastronomique') && subcats.includes('bio')) prefix = "Gastronomie bio";
    else {
      // On cherche la première correspondance dans la whitelist
      for (const cat of subcats) {
        if (WHITELIST_MAPPING[cat]) {
          prefix = WHITELIST_MAPPING[cat];
          break;
        }
      }
    }
    
    if (prefix) {
      results.push({
        name,
        currentMustEat,
        proposedMustEat: `${prefix}. ${currentMustEat}`
      });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
