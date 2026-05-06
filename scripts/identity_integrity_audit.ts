
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

console.log("🕵️‍♂️ Auditing Name/Slug/File Consistency...");

let pollutionCount = 0;

walk(REGISTRY_PATH, (filePath) => {
  if (!filePath.endsWith('.ts') || filePath.endsWith('index.ts')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const name = content.match(/name:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
  const slug = content.match(/slug:\s*[`"']([^`"']+)[`"']/)?.[1] || "";
  const fileName = path.basename(filePath, '.ts').replace(/-/g, '');
  
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Si le slug ne ressemble pas au nom, ou si le nom du fichier ne ressemble pas au slug
  if (normalizedName !== normalizedSlug || !normalizedSlug.includes(fileName) && !fileName.includes(normalizedSlug)) {
    console.log(`⚠️ POLLUTION: ${filePath}`);
    console.log(`   - Name: ${name}`);
    console.log(`   - Slug: ${slug}`);
    pollutionCount++;
  }
});

console.log(`\n📊 POLLUTION REPORT: ${pollutionCount} files identified with identity mismatches.`);
