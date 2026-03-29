import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });
    return arrayOfFiles;
}

function resolveCategoryType(label: string): string {
    const l = label.toLowerCase();
    if (l.includes('entré') || l.includes('commenc') || l.includes('prélude') || l.includes('amuse') || l.includes('starter') || l.includes('antipast') || l.includes('salade')) return 'starter';
    if (l.includes('plat') || l.includes('suite') || l.includes('pizza') || l.includes('burger') || l.includes('résistance') || l.includes('pasta') || l.includes('viande') || l.includes('poisson') || l.includes('barbecue')) return 'main';
    if (l.includes('dessert') || l.includes('douceur') || l.includes('sucré') || l.includes('fromage')) return 'dessert';
    if (l.includes('cave') || l.includes('boisson') || l.includes('vin') || l.includes('cocktail') || l.includes('soif')) return 'drink';
    if (l.includes('partager') || l.includes('tapas') || l.includes('planche') || l.includes('snack') || l.includes('grignot')) return 'sharing';
    if (l.includes('menu') || l.includes('formule') || l.includes('dégustation') || l.includes('temps')) return 'tasting_menu';
    return 'other';
}

const files = getAllFiles(REGISTRY_PATH).filter(f => f.endsWith('.ts'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    let changed = false;
    
    // Fix { category: "...", items: [
    const inlineRegex = /\{\s*category:\s*(["'])(.+?)\1,\s*items:\s*\[/g;
    content = content.replace(inlineRegex, (match, quote, label) => {
        changed = true;
        const catType = resolveCategoryType(label);
        return `{\n        category_type: "${catType}",\n        display_label: "${label}",\n        items: [`;
    });

    // Fix category: "..." followed by items in next lines
    const multilineRegex = /category:\s*(["'])(.+?)\1,/g;
    content = content.replace(multilineRegex, (match, quote, label) => {
        if (['restaurant', 'bar', 'café', 'club', 'museum', 'exhibition', 'parc', 'monument', 'culture'].includes(label)) return match;
        changed = true;
        const catType = resolveCategoryType(label);
        return `category_type: "${catType}",\n                display_label: "${label}",`;
    });


    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Fixed inline category in ${file}`);
    }
}
