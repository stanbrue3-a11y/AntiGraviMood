import fs from 'fs';
import path from 'path';

/**
 * ✍️ INDUSTRIAL SCRIBE - THE DATA FACTORY
 * Automatically enriches registry files with missing data.
 * Version 1.2: Refined pricing rules for Industrial 2026.
 */

async function scribe() {
    const registryRoot = path.join(__dirname, '../src/data/registry/tree');
    console.log(`🏭 [Scribe] Starting auto-enrichment factory in ${registryRoot}...`);

    const files = getFiles(registryRoot).filter(f => f.endsWith('.ts') && !f.includes('index.ts'));
    console.log(`🔎 [Scribe] Found ${files.length} place records.`);

    for (const filePath of files) {
        const fileName = path.basename(filePath);
        const content = fs.readFileSync(filePath, 'utf-8');

        if (!content.includes('"verified": true')) continue;

        let updatedContent = content;

        // RULE 1: Fix missing is_free for parcs/gardens
        if ((content.includes('"category": "parc"') || content.includes('"category": "monument"')) && !content.includes('"is_free"')) {
            const isLikelyFree = content.includes('Jardin') || content.includes('Parc') || content.includes('Square');
            if (isLikelyFree) {
                console.log(`   └─ 🌳 Detected free park/monument. Scribing is_free: true.`);
                updatedContent = updatedContent.replace(/"pricing":\s*{/, '"pricing": {\n        "is_free": true,');
            }
        }

        // RULE 2: Museum/Culture pricing fallback
        if (content.includes('"category": "museum"') || content.includes('"category": "culture"')) {
            // If it's not marked as free, it MUST have an index_price
            if (!content.includes('"index_price"') && !content.includes('"is_free": true')) {
                console.log(`   └─ 🏛️ Detected museum without price. Scribing default (15€).`);
                updatedContent = updatedContent.replace(/"pricing":\s*{/, '"pricing": {\n        "index_price": 15,');
            }
        }

        // RULE 3: Fix "Fake Free" bars (like Rosa Bonheur)
        if (content.includes('"category": "bar"') && content.includes('"is_free": true')) {
            console.log(`   └─ 🍺 Detected bar marked as free. Correcting to false...`);
            updatedContent = updatedContent.replace('"is_free": true', '"is_free": false');
        }

        // RULE 4: Clean up placeholder images
        if (content.includes('placeholder')) {
            console.log(`   └─ 📸 Placeholder detected in ${fileName}.`);
        }

        if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent);
            console.log(`✅ [Scribe] ${fileName} updated successfully.`);
        }
    }
}

function getFiles(dir: string): string[] {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const files = dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    });
    return Array.prototype.concat(...files);
}

scribe();
