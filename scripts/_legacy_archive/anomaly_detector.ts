
import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = './src/data/registry/tree';

// Mapping de vérité basé sur des mots-clés forts
const TRUTH_MAP: Record<string, string> = {
  'buenos aires': 'Cuisine argentine',
  'argentin': 'Cuisine argentine',
  'mamma': 'Cuisine italienne',
  'trattoria': 'Cuisine italienne',
  'pizzeria': 'Cuisine italienne (Pizzeria)',
  'izakaya': 'Cuisine japonaise',
  'ramen': 'Cuisine japonaise (Ramen)',
  'sushi': 'Cuisine japonaise',
  'vietnam': 'Cuisine vietnamienne',
  'phở': 'Cuisine vietnamienne',
  'liban': 'Cuisine libanaise',
  'mezzé': 'Cuisine levantine',
  'burger': 'Burgers',
  'couscous': 'Cuisine marocaine',
  'tajine': 'Cuisine marocaine',
  'mexique': 'Cuisine mexicaine',
  'taco': 'Cuisine mexicaine',
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

let anomalies: any[] = [];

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "Inconnu";
  const mustEatMatch = content.match(/must_eat:\s*[`"']([^`"']+)[`"']/);
  const mustEat = mustEatMatch ? mustEatMatch[1] : "";
  const description = content.match(/description:\s*[`"']([^`"']+)[`"']/)?.[1].toLowerCase() || "";
  
  // On cherche une contradiction entre le préfixe actuel (souvent français) et le contenu
  const currentPrefix = mustEat.split('.')[0].trim();
  const fullText = (name + " " + description).toLowerCase();
  
  let detectedTruth = "";
  for (const [kw, truth] of Object.entries(TRUTH_MAP)) {
    if (fullText.includes(kw)) {
      detectedTruth = truth;
      break;
    }
  }

  if (detectedTruth && currentPrefix !== detectedTruth) {
    anomalies.push({
      name,
      path: filePath,
      currentPrefix,
      detectedTruth,
      originalMustEat: mustEat
    });
  }
});

console.log(JSON.stringify(anomalies, null, 2));
