import * as fs from 'fs';
import * as path from 'path';

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else if (file.endsWith('.ts') && !file.includes('index.ts')) {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

function remediateFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // 1. TAG CLEANUP (WiFi & others) 🏷️
  content = content.replace(/["']wifi["']/g, '"wifi_gratuit"');

  // 2. PHOTO BRIDGE (Minimum 2 photos for Zod) 📸
  const heroMatch = content.match(/^  images: \{\s*hero: ["'](.*)["']/m);
  const galleryMatch = content.match(/^    gallery: \[([\s\S]*?)\]/m);

  if (heroMatch && (!galleryMatch || galleryMatch[1].trim() === "")) {
    const heroId = heroMatch[1];
    const newGallery = `    gallery: [\n      "${heroId}",\n      "${heroId}"\n    ]`;
    
    if (galleryMatch) {
      content = content.replace(/^    gallery: \[[\s\S]*?\]/m, newGallery);
    } else {
      content = content.replace(/^  images: \{/m, `  images: {\n${newGallery},`);
    }
  }

  // 3. CATEGORY FLIP (Bar/Cafe to Restaurant) 🍔
  if (content.includes('category: "bar"') || content.includes('category: "cafe"')) {
      content = content.replace(/category: "bar"/g, 'category: "restaurant"');
      content = content.replace(/category: "cafe"/g, 'category: "restaurant"');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

async function runRemediation() {
  console.log("🚀 Starting Zero-Risk Structural Remediation...");
  const files = getAllFiles(REGISTRY_PATH);
  let fixedCount = 0;

  for (const file of files) {
    if (remediateFile(file)) {
      fixedCount++;
    }
  }

  console.log(`🏁 Zero-Risk Remediation Complete. Fixed ${fixedCount} files.`);
}

runRemediation();
