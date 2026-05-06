
import fs from 'fs';
import path from 'path';

const REPORT_PATH = './scratch/master_cuisine_report_v3.json';

function run() {
  if (!fs.existsSync(REPORT_PATH)) {
    console.error("❌ Rapport introuvable ! Lancez l'audit V3 d'abord.");
    return;
  }

  const rawData = fs.readFileSync(REPORT_PATH, 'utf8');
  // Extraire la partie JSON après le texte des stats
  const jsonStart = rawData.indexOf('--- RAPPORT DÉTAILLÉ V3 ---') + '--- RAPPORT DÉTAILLÉ V3 ---'.length;
  const jsonContent = rawData.substring(jsonStart).trim();
  const patches = JSON.parse(jsonContent);

  console.log(`🚀 Starting Industrial Patch for ${patches.length} files...`);

  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  patches.forEach((patch: any) => {
    const fullPath = path.join(process.cwd(), patch.path);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${patch.path}`);
      errorCount++;
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Regex pour attraper le must_eat (specials et real_talk)
    const mustEatRegex = /must_eat:\s*["'](?!Cuisine|Street-food|Haute|Gastronomie|Street Food|Burgers)([^"']+)["']/g;
    
    const newContent = content.replace(mustEatRegex, (match, p1) => {
      return `must_eat: "${patch.suggestion}${p1}"`;
    });

    if (newContent !== content) {
      fs.writeFileSync(fullPath, newContent);
      successCount++;
    } else {
      skippedCount++;
    }
  });

  console.log(`\n✅ Injection Complete:`);
  console.log(`- Patched: ${successCount}`);
  console.log(`- Already Correct/Skipped: ${skippedCount}`);
  console.log(`- Errors: ${errorCount}`);
}

run();
