
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Liste étendue des cuisines pour une couverture maximale
const CUISINE_MAP: Record<string, string> = {
  'japonais': 'Japonais',
  'italien': 'Italien',
  'français': 'Français',
  'asiatique': 'Asiatique',
  'bistrot': 'Bistrot',
  'brasserie': 'Brasserie',
  'street-food': 'Street-food',
  'libanais': 'Libanais',
  'méditerranéen': 'Méditerranéen',
  'coréen': 'Coréen',
  'thaï': 'Thaï',
  'vietnamien': 'Vietnamien',
  'mexicain': 'Mexicain',
  'grec': 'Grec',
  'indien': 'Indien',
  'végétarien': 'Végétarien',
  'gastronomique': 'Gastronomique',
  'pizzeria': 'Pizzeria',
  'trattoria': 'Trattoria',
  'boulangerie': 'Boulangerie',
  'pâtisserie': 'Pâtisserie',
  'coffee-shop': 'Coffee-shop',
  'burger': 'Burgers',
  'israélien': 'Israélien',
  'marocain': 'Marocain',
  'espagnol': 'Espagnol',
  'chinois': 'Chinois',
  'ramen': 'Ramen',
  'bouillon': 'Bouillon',
  'crêperie': 'Crêperie',
  'tapas': 'Tapas'
};

function walk(dir: string, callback: (file: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log("🧬 Starting Advanced Cuisine Recovery...");

let updatedCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extraire les subcategories
  const subcatMatch = content.match(/subcategory:\s*\[([^\]]*)\]/);
  if (!subcatMatch) return;
  
  const subcats = subcatMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '').toLowerCase());
  
  // Trouver la meilleure cuisine correspondante
  const foundCuisines = subcats
    .map(s => CUISINE_MAP[s])
    .filter(Boolean);
  
  if (foundCuisines.length > 0) {
    const cuisineValue = foundCuisines[0];
    
    // On cherche la section specials: { ... }
    const specialsMatch = content.match(/specials:\s*{([^}]+)}/);
    if (!specialsMatch) return;
    
    const specialsContent = specialsMatch[1];
    
    // On vérifie si cuisine est déjà là et non-vide
    const cuisineExistMatch = specialsContent.match(/cuisine:\s*\[\s*["']([^"']+)["']\s*\]/);
    if (cuisineExistMatch) return; // Ne pas écraser une donnée existante spécifique
    
    let newSpecials;
    if (specialsContent.includes('cuisine: [')) {
      newSpecials = specialsContent.replace(/cuisine:\s*\[[^\]]*\]/, `cuisine: ["${cuisineValue}"]`);
    } else {
      newSpecials = `cuisine: ["${cuisineValue}"],\n    ` + specialsContent;
    }
    
    const newContent = content.replace(specialsContent, newSpecials);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      updatedCount++;
    }
  }
});

console.log(`✅ Recovery Complete. Updated ${updatedCount} files.`);
