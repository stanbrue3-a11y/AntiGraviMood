
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

const MAPPING: Record<string, string> = {
  'japonais': 'Cuisine japonaise',
  'italien': 'Cuisine italienne',
  'chinois': 'Cuisine chinoise',
  'thaï': 'Cuisine thaïlandaise',
  'vietnamien': 'Cuisine vietnamienne',
  'libanais': 'Cuisine libanaise',
  'méditerranéen': 'Cuisine méditerranéenne',
  'mexicain': 'Cuisine mexicaine',
  'péruvien': 'Cuisine péruvienne',
  'bistrot': 'Cuisine de bistrot',
  'brasserie': 'Cuisine de brasserie',
  'bouillon': 'Cuisine française traditionnelle',
  'pizzeria': 'Cuisine italienne (Pizzeria)',
  'trattoria': 'Cuisine italienne (Trattoria)',
  'gastronomique': 'Haute gastronomie',
  'bio': 'Gastronomie bio',
  'street-food': 'Street-food',
  'burger': 'Burgers',
  'brésilien': 'Cuisine brésilienne',
  'marocain': 'Cuisine marocaine',
  'grec': 'Cuisine grecque',
  'africain': 'Cuisine africaine',
  'coréen': 'Cuisine coréenne',
  'indien': 'Cuisine indienne',
  'israélien': 'Cuisine israélienne'
};

const KEYWORDS: Record<string, string> = {
  'gua bao': 'Street-food asiatique',
  'dim sum': 'Cuisine chinoise',
  'ramen': 'Cuisine japonaise (Ramen)',
  'sushi': 'Cuisine japonaise',
  'izakaya': 'Cuisine japonaise (Izakaya)',
  'trattoria': 'Cuisine italienne (Trattoria)',
  'pizzeria': 'Cuisine italienne (Pizzeria)',
  'burger': 'Street-food',
  'entrecôte': 'Cuisine de bistrot',
  'tartare': 'Cuisine de bistrot',
  'blanquette': 'Cuisine de bistrot',
  'couscous': 'Cuisine marocaine',
  'tajine': 'Cuisine marocaine',
  'tapas': 'Cuisine de partage',
  'mezzé': 'Cuisine levantine',
  'bao': 'Street-food asiatique'
};

function walk(dir: string, callback: (file: string) => void) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

let auditReport: any[] = [];
let stats: Record<string, number> = {};

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const nameMatch = content.match(/name:\s*[`"']([^`"']+)[`"']/);
  if (!nameMatch) return;
  
  const name = nameMatch[1];
  const subcatMatch = content.match(/subcategory:\s*\[([^\]]*)\]/);
  const subcats = subcatMatch ? subcatMatch[1].split(',').map(s => s.trim().replace(/['"]/g, '').toLowerCase()) : [];
  const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
  const mustEatMatch = content.match(/must_eat:\s*[`"']([^`"']+)[`"']/);
  const mustEat = mustEatMatch ? mustEatMatch[1] : "";
  
  // Éviter les doublons ou fiches déjà conformes
  if (mustEat.startsWith('Cuisine') || mustEat.startsWith('Street-food') || mustEat.startsWith('Haute') || mustEat.startsWith('Burgers') || mustEat.startsWith('Gastronomie') || mustEat.startsWith('Street Food')) {
    return;
  }

  let suggestion = "Cuisine française";
  
  // 1. Détection par Mots-Clés contextuels (NOM + DESCRIPTION)
  const fullText = (name + " " + description).toLowerCase();
  for (const [kw, sug] of Object.entries(KEYWORDS)) {
    if (fullText.includes(kw)) {
      suggestion = sug;
      break;
    }
  }

  // 2. Si pas de mot-clé, on utilise la Whitelist
  if (suggestion === "Cuisine française") {
    const matches = subcats.map(s => MAPPING[s]).filter(Boolean);
    if (matches.length > 0) {
      const worldCuisine = matches.find(m => m.startsWith('Cuisine ') && !m.includes('bistrot') && !m.includes('brasserie'));
      suggestion = worldCuisine || matches[0];
    }
  }

  auditReport.push({ name, path: filePath, suggestion: suggestion + ". " });
  stats[suggestion] = (stats[suggestion] || 0) + 1;
});

console.log("--- STATISTIQUES DES NUANCES V3 ---");
console.log(JSON.stringify(stats, null, 2));
console.log("\n--- RAPPORT DÉTAILLÉ V3 ---");
console.log(JSON.stringify(auditReport, null, 2));
