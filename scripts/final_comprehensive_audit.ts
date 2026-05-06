
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

console.log("🕵️‍♂️ Starting Final Comprehensive Audit...");

let stats = {
  totalFiles: 0,
  todoCount: 0,
  prefixCount: 0,
  subcategories: {} as Record<string, number>,
  syntaxErrors: 0,
  mismatches: 0
};

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  stats.totalFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Check subcategory distribution
  const subcatMatch = content.match(/subcategory:\s*\[\s*['"]([^'"]+)['"]\s*\]/);
  const subcat = subcatMatch ? subcatMatch[1] : "UNKNOWN";
  stats.subcategories[subcat] = (stats.subcategories[subcat] || 0) + 1;
  
  // 2. Check for TODOs in must_eat
  if (content.includes('must_eat') && content.includes('TODO')) {
    stats.todoCount++;
  }
  
  // 3. Check for Prefixes
  const mustEatMatch = content.match(/must_eat:\s*["']([^.]+)\./);
  if (mustEatMatch) {
    stats.prefixCount++;
    const prefix = mustEatMatch[1].trim();
    
    // Check for mismatch between prefix and subcat (logic check)
    if (prefix.toLowerCase().includes('italien') && subcat !== 'italien') stats.mismatches++;
    if (prefix.toLowerCase().includes('argentin') && subcat !== 'argentin') stats.mismatches++;
    if (prefix.toLowerCase().includes('mexicain') && subcat !== 'mexicain') stats.mismatches++;
  }
  
  // 4. Check for Syntax (Double quotes internal)
  const mustEatLine = content.match(/must_eat:\s*"(.*)"/);
  if (mustEatLine && mustEatLine[1].includes('"')) {
    stats.syntaxErrors++;
  }
});

console.log("\n==========================================");
console.log("🏆 FINAL AUDIT REPORT (STANDARD MOELLE 2026)");
console.log("==========================================");
console.log(`✅ Total Places Audited : ${stats.totalFiles}`);
console.log(`✅ Prefixes Applied      : ${stats.prefixCount} / ${stats.totalFiles}`);
console.log(`✅ Residual TODOs        : ${stats.todoCount} (Doit être 0)`);
console.log(`✅ Syntax Integrity      : ${stats.syntaxErrors} errors (Doit être 0)`);
console.log(`✅ Structural Mismatches : ${stats.mismatches} (Doit être 0)`);
console.log("\n🌍 CUISINE DISTRIBUTION:");
Object.entries(stats.subcategories)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`- ${cat.padEnd(15)}: ${count}`);
  });
console.log("==========================================");
