
import fs from 'fs';
import path from 'path';

const PATCHES = [
  { slug: 'bistrot-a-cote', prefix: 'Cuisine de bistrot. ' },
  { slug: 'mosugo-mory-sacko-14', prefix: 'Street-food (Afro-fusion). ' },
  { slug: 'bistrotters-paris-14', prefix: 'Cuisine de bistrot. ' },
  { slug: 'le-bistrot-des-campagnes-paris-14', prefix: 'Cuisine de bistrot. ' },
  { slug: 'plomb-du-cantal', prefix: 'Cuisine de terroir. ' },
  { slug: 'la-manifattura', prefix: 'Cuisine italienne (Pizzeria). ' },
  { slug: 'tripletta-gaite', prefix: 'Cuisine italienne (Pizzeria). ' },
  { slug: 'jazz-cafe-montparnasse', prefix: 'Cuisine de bistrot. ' },
  { slug: 'la-closerie-des-lilas', prefix: 'Cuisine de brasserie. ' },
  { slug: 'le-select', prefix: 'Cuisine de brasserie. ' },
  { slug: 'la-rotonde-montparnasse', prefix: 'Cuisine de brasserie. ' },
  { slug: 'le-dome-montparnasse', prefix: 'Cuisine française traditionnelle. ' },
  { slug: 'i-grappoli', prefix: 'Cuisine italienne. ' },
  { slug: 'baladna', prefix: 'Cuisine méditerranéenne. ' },
  { slug: 'creperie-de-pont-aven', prefix: 'Cuisine française. ' },
  { slug: 'augustin', prefix: 'Cuisine de bistrot. ' },
  { slug: 'le-petit-sommelier', prefix: 'Cuisine de bistrot (Bar à vin). ' }
];

function findFile(dir: string, slug: string): string | null {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      const res = findFile(fullPath, slug);
      if (res) return res;
    } else if (f.includes(slug) && f.endsWith('.ts')) {
      return fullPath;
    }
  }
  return null;
}

const REGISTRY_PATH = path.join(process.cwd(), 'src/data/registry/tree/14');

PATCHES.forEach(patch => {
  const fullPath = findFile(REGISTRY_PATH, patch.slug);
  if (!fullPath) {
    console.log(`❌ Not found: ${patch.slug}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Regex plus permissive pour attraper le must_eat
  const mustEatRegex = /must_eat:\s*["'](?!Cuisine|Street-food|Haute|Gastronomie|Street Food)([^"']+)["']/g;
  
  const newContent = content.replace(mustEatRegex, (match, p1) => {
    return `must_eat: "${patch.prefix}${p1}"`;
  });
  
  if (newContent !== content) {
    fs.writeFileSync(fullPath, newContent);
    console.log(`✅ Patched: ${fullPath}`);
  } else {
    console.log(`⚠️ No change needed for: ${fullPath}`);
  }
});
