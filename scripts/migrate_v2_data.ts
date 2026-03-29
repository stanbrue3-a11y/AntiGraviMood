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
    if (l.includes('entré') || l.includes('commenc') || l.includes('prélude') || l.includes('amuse') || l.includes('starter')) return 'starter';
    if (l.includes('plat') || l.includes('suite') || l.includes('pizza') || l.includes('burger') || l.includes('résistance') || l.includes('pasta') || l.includes('viande') || l.includes('poisson')) return 'main';
    if (l.includes('dessert') || l.includes('douceur') || l.includes('sucré') || l.includes('fromage')) return 'dessert';
    if (l.includes('cave') || l.includes('boisson') || l.includes('vin') || l.includes('cocktail') || l.includes('soif')) return 'drink';
    if (l.includes('partager') || l.includes('tapas') || l.includes('planche') || l.includes('snack') || l.includes('grignot')) return 'sharing';
    if (l.includes('menu') || l.includes('formule') || l.includes('dégustation') || l.includes('temps')) return 'tasting_menu';
    return 'other';
}

function convertPrice(priceStr: string): number {
    // extract numbers and commas/dots
    const match = priceStr.match(/(\d+)[,\.]?(\d*)/);
    if (!match) return 0;
    const euros = parseInt(match[1] || '0', 10);
    const centsStr = match[2] || '0';
    let cents = 0;
    if (centsStr.length === 1) cents = parseInt(centsStr, 10) * 10;
    else if (centsStr.length >= 2) cents = parseInt(centsStr.substring(0, 2), 10);
    return euros * 100 + cents;
}

const files = getAllFiles(REGISTRY_PATH).filter(f => f.endsWith('.ts') && !f.endsWith('index.ts'));

console.log(`Starting migration on ${files.length} files...`);

let migratedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Process line by line to inject category_type and convert prices
    const lines = content.split('\n');
    const newLines = [];
    
    let insideMenuItems = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        if (line.includes('menu_items: [')) insideMenuItems = true;
        if (insideMenuItems && line.includes('expert_catchline')) insideMenuItems = false; // crude boundary check
        
        // Match `category: "Some Label",` ONLY inside menu_items
        const catMatch = line.match(/^(\s*)category:\s*(["'])(.+)\2,?$/);
        if (insideMenuItems && catMatch) {
            const indent = catMatch[1];
            const label = catMatch[3];
            const catType = resolveCategoryType(label);
            newLines.push(`${indent}category_type: "${catType}",`);
            newLines.push(`${indent}display_label: "${label}",`);
            continue;
        }
        
        // Match item inside items array
        // We only want to convert `price: "XX€"` to `price_cents: XX00`
        // We can use a general regex for the line, but we must be careful with `highlight:` -> `is_highlight:`
        
        // Convert highlight -> is_highlight
        if (line.includes('highlight: true')) {
            line = line.replace('highlight: true', 'is_highlight: true');
        } else if (line.includes('highlight: false')) {
            line = line.replace('highlight: false', 'is_highlight: false');
        }

        // Convert price: "XX€" -> price_cents: XX00
        const priceRegex = /price:\s*(["'])([^"']+)\1/g;
        line = line.replace(priceRegex, (match, quote, priceVal) => {
            if (priceVal && priceVal.includes('€') || /^[\d,\.]+/.test(priceVal)) {
                const cents = convertPrice(priceVal);
                if (cents > 0) {
                    return `price_cents: ${cents}`;
                }
            }
            // Fallback for weird string prices (will be mapped to 0 or manual cleanup later)
            // But if it's "À la carte €", we convert it to 0
            if (priceVal === "À la carte €" || priceVal === "Tapas €" || Number.isNaN(convertPrice(priceVal))) {
                return `price_cents: 0`;
            }
            return `price_cents: ${convertPrice(priceVal)}`;
        });
        
        newLines.push(line);
    }
    
    fs.writeFileSync(file, newLines.join('\n'));
    migratedCount++;
}

console.log(`Migration complete! Modified ${migratedCount} files.`);
