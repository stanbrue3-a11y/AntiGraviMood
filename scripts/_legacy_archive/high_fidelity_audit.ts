
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

console.log("🕵️‍♂️ Starting HIGH FIDELITY Audit...");

let stats = {
  totalFiles: 0,
  mustEatTodos: 0,
  prefixCount: 0,
  subcategories: {} as Record<string, number>,
  syntaxErrors: 0,
  syncMismatches: [] as string[],
  unknownFiles: [] as string[]
};

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  stats.totalFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Extraction propre des subcategories (gère les tableaux)
  const subcatMatch = content.match(/subcategory:\s*\[([^\]]+)\]/);
  const subcats = subcatMatch ? subcatMatch[1].replace(/['"\s]/g, '').split(',') : ["UNKNOWN"];
  if (subcats.includes("UNKNOWN")) stats.unknownFiles.push(filePath);
  subcats.forEach(s => {
    stats.subcategories[s] = (stats.subcategories[s] || 0) + 1;
  });
  
  // 2. Check TODO UNIQUEMENT dans must_eat
  const mustEatLines = content.match(/must_eat:.*TODO/g);
  if (mustEatLines) stats.mustEatTodos += mustEatLines.length;
  
  // 3. Check Prefixes & Synchro
  const mustEatMatch = content.match(/must_eat:\s*["']([^.]+)\./);
  if (mustEatMatch) {
    stats.prefixCount++;
    const prefix = mustEatMatch[1].trim().toLowerCase();
    
    // Vérification de cohérence
    const isItalian = prefix.includes('italien') || prefix.includes('pizza');
    const isArgentine = prefix.includes('argentin');
    const isMexican = prefix.includes('mexicain');
    
    if (isItalian && !subcats.includes('italien')) stats.syncMismatches.push(`${filePath} (Prefix: ${prefix} vs Subcat: ${subcats})`);
    if (isArgentine && !subcats.includes('argentin')) stats.syncMismatches.push(`${filePath} (Prefix: ${prefix} vs Subcat: ${subcats})`);
  }
});

console.log("\n==========================================");
console.log("🏆 HIGH-FIDELITY AUDIT REPORT (MOELLE 2026)");
console.log("==========================================");
console.log(`✅ Total Places Audited : ${stats.totalFiles}`);
console.log(`✅ Prefixes Detected    : ${stats.prefixCount} / ${stats.totalFiles}`);
console.log(`✅ TODOs in must_eat    : ${stats.mustEatTodos} (CIBLE: 0)`);
console.log(`✅ Sync Mismatches      : ${stats.syncMismatches.length} (CIBLE: 0)`);

if (stats.syncMismatches.length > 0) {
  console.log("\n⚠️ MISMATCH LIST:");
  stats.syncMismatches.slice(0, 5).forEach(m => console.log(`- ${m}`));
}

if (stats.unknownFiles.length > 0) {
  console.log("\n⚠️ UNKNOWN FILES LIST:");
  stats.unknownFiles.forEach(f => console.log(`- ${f}`));
}

console.log("\n🌍 SUB-CATEGORIES (Top 10):");
Object.entries(stats.subcategories)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([cat, count]) => {
    console.log(`- ${cat.padEnd(15)}: ${count}`);
  });
console.log("==========================================");
