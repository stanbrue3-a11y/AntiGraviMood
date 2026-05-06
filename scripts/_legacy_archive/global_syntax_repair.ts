
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

console.log("🛠️ Starting Global Syntax Repair...");

let fixedFiles = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChange = false;

  // On cherche les lignes must_eat: "..."
  // La regex capture must_eat: " [le contenu] "
  const mustEatLineRegex = /(must_eat:\s*")([^"]+)(")/g;

  // On traite les lignes qui pourraient avoir des quotes internes mal formées
  // En TS, si on a "abc " def " ghi", esbuild râle.
  // Mon industrial_patcher a peut-être inséré des " par erreur.
  
  // Correction spécifique pour les d" ou l" ou les quotes orphelines
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    if (line.includes('must_eat:')) {
      // Si la ligne contient plus de 2 doubles quotes, il y a un loupé
      const quoteCount = (line.match(/"/g) || []).length;
      if (quoteCount > 2) {
        // On garde la première et la dernière, on transforme les autres en ’
        let firstQuoteIndex = line.indexOf('"');
        let lastQuoteIndex = line.lastIndexOf('"');
        let newLine = line.substring(0, firstQuoteIndex + 1);
        let middle = line.substring(firstQuoteIndex + 1, lastQuoteIndex);
        let end = line.substring(lastQuoteIndex);
        
        middle = middle.replace(/"/g, '’');
        hasChange = true;
        return newLine + middle + end;
      }
    }
    return line;
  });

  if (hasChange) {
    fs.writeFileSync(filePath, newLines.join('\n'));
    fixedFiles++;
    console.log(`✅ Fixed syntax in: ${filePath}`);
  }
});

console.log(`\n🎉 Repair Complete. ${fixedFiles} files fixed.`);
