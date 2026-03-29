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
    if (l.includes('cave') || l.includes('boisson') || l.includes('vin') || l.includes('cocktail') || l.includes('soif') || l.includes('hour')) return 'drink';
    if (l.includes('partager') || l.includes('tapas') || l.includes('planche') || l.includes('snack') || l.includes('grignot')) return 'sharing';
    if (l.includes('menu') || l.includes('formule') || l.includes('dégustation') || l.includes('temps')) return 'tasting_menu';
    return 'other';
}

const files = getAllFiles(REGISTRY_PATH).filter(f => f.endsWith('.ts'));
let fixedFiles = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Now we capture optional quotes around category string
    const validPlaceModes = ['restaurant','bar','café','club','museum','exhibition','parc','monument','culture'];
    let changed = false;
    
    // Catch "category": "...", category: "..."
    content = content.replace(/(["']?)category\1\s*:\s*(["'])(.+?)\2\s*([^,\]]*)/g, (match, quote1, quote2, label, trailing) => {
        if (validPlaceModes.includes(label)) {
            return match; // Keep root category intact
        }
        
        changed = true;
        const type = resolveCategoryType(label);
        // We preserve trailing comma or space if any
        return `"category_type": "${type}",\n                "display_label": "${label}"${trailing}`;
    });
    
    // Also convert "price": "XX€" to "price_cents": XX00.
    content = content.replace(/(["']?)price\1\s*:\s*(["'])([^"']+)\2/g, (match, q1, q2, priceVal) => {
        if (priceVal && priceVal.includes('€') || /^[\d,\.]+/.test(priceVal)) {
            const numMatch = priceVal.match(/(\d+)[,\.]?(\d*)/);
            if (!numMatch) return match;
            const euros = parseInt(numMatch[1] || '0', 10);
            const centsStr = numMatch[2] || '0';
            let cents = 0;
            if (centsStr.length === 1) cents = parseInt(centsStr, 10) * 10;
            else if (centsStr.length >= 2) cents = parseInt(centsStr.substring(0, 2), 10);
            changed = true;
            return `"price_cents": ${euros * 100 + cents}`;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(file, content);
        fixedFiles++;
        console.log(`Fixed ${path.basename(file)}`);
    }
}

console.log('Fixed ' + fixedFiles + ' files.');
