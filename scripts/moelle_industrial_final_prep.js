const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = "src/data/registry/tree";
const GOLD_TYPES = [
    "Française", "Bistronomique", "Gastronomique", "Italienne", "Japonaise", 
    "Chinoise", "Coréenne", "Thaïlandaise", "Vietnamienne", "Indienne", 
    "Libanaise", "Mexicaine", "Argentine", "Israélienne", "Africaine", "Street Food"
];

function getFiles(dir) {
    let results = [];
    const stack = [dir];
    while (stack.length > 0) {
        const cp = stack.pop();
        const list = fs.readdirSync(cp);
        for (const f of list) {
            const fp = path.join(cp, f);
            if (fs.statSync(fp).isDirectory()) stack.push(fp);
            else if (fp.endsWith(".ts") && !fp.includes("index.ts")) results.push(fp);
        }
    }
    return results;
}

async function processBatch(files, gemini) {
    const results = [];
    for (const f of files) {
        const content = fs.readFileSync(f, 'utf-8');
        if (!content.includes('category: "restaurant"')) continue;
        
        const name = content.match(/name:\s*["'`](.*?)["'`](,?)/)?.[1] || "";
        const prompt = `Analyze this restaurant data for "${name}". 
        Extract from the description and tips:
        1. One cuisine type from this list: ${GOLD_TYPES.join(', ')}.
        2. Exactly two specific dishes or specialties.
        3. No invention. If only one dish, use one. If none, use 'Spécialités de la maison'.
        4. No repetition of the restaurant name.
        5. Return ONLY a JSON: {"type": "...", "dishes": ["...", "..."]}
        
        Data:
        ${content}`;

        // This is a placeholder for the actual AI call I will make in the next step
        results.push({ file: f, name, content });
    }
    return results;
}

// Logic to identify all files to fix
const allFiles = getFiles(REGISTRY_PATH);
const toFix = allFiles.filter(f => {
    const c = fs.readFileSync(f, 'utf-8');
    return c.includes('category: "restaurant"') && (c.includes('À découvrir sur place') || c.includes('Cuisine Française'));
});

console.log(`Found ${toFix.length} restaurants to potentially re-standardize.`);
console.log(`Top 20 for Batch 1:`, toFix.slice(0, 20).map(f => path.basename(f)));
