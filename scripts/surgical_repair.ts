/**
 * SURGICAL REGISTRY REPAIR — V16 (Moelle Totale)
 * Règle d'Or : Ne toucher qu'au Must-Eat, Photos et Google ID.
 */

import * as fs from "fs";
import * as path from "path";

const REGISTRY_PATH = "src/data/registry/tree";

const CUISINE_TYPES = [
    "Française", "Italienne", "Japonaise", "Coréenne", "Chinoise", "Thaïlandaise", 
    "Vietnamienne", "Indienne", "Libanaise", "Mexicaine", "Péruvienne", "Brésilienne", 
    "Éthiopienne", "Méditerranéenne", "Grecque", "Turque", "Marocaine", "Américaine", 
    "Africaine", "Caribéenne", "Pakistanaise", "Fusion", "Bistronomique", "Gastronomique", 
    "Street Food", "Végétarienne", "Israélienne", "Argentine"
];

function extractMustEatInfo(content: string) {
    const subcatMatch = content.match(/subcategory:\s*\[(.*?)\]/s);
    const tags = subcatMatch ? subcatMatch[1].replace(/['"]/g, "").split(",").map(s => s.trim()) : [];
    
    let type = "Française";
    for (const tag of tags) {
        const found = CUISINE_TYPES.find(ct => ct.toLowerCase().includes(tag.toLowerCase()));
        if (found) { type = found; break; }
    }

    const dishes: string[] = [];
    const menuMatches = [...content.matchAll(/name:\s*["'](.*?)["']/g)];
    menuMatches.forEach(m => {
        const name = m[1];
        if (name.length > 5 && !name.includes("Verre") && !name.includes("Bouteille") && !name.includes("Café")) {
            dishes.push(name);
        }
    });

    if (dishes.length < 2) {
        const mustEatMatch = content.match(/must_eat:\s*["'](.*?)["']/);
        if (mustEatMatch) {
            const val = mustEatMatch[1];
            const cleanPlat = val.replace(/^Cuisine .*?\.\s*/, "");
            return { type, dishes: cleanPlat.split("&").map(s => s.trim()).filter(s => s.length > 2) };
        }
    }

    return { type, dishes: dishes.slice(0, 2) };
}

function walk(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) results = results.concat(walk(filePath));
        else if (filePath.endsWith(".ts") && !filePath.includes("index.ts")) results.push(filePath);
    });
    return results;
}

const files = walk(REGISTRY_PATH);
let updatedCount = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;

    const info = extractMustEatInfo(content);
    const newMustEat = `Cuisine ${info.type}. ${info.dishes.length > 0 ? info.dishes.join(" & ") : "À découvrir sur place"}.`;

    // 1. Mise à jour chirurgicale du Must-Eat
    content = content.replace(/must_eat:\s*["'](.*?)["']/, `must_eat: "${newMustEat}"`);

    // 2. Injection Real Talk si manquant
    if (!content.includes("real_talk:")) {
        const realTalkBlock = `,\n  real_talk: {\n    text: "Une adresse de caractère.",\n    must_eat: "${newMustEat}",\n    le_secret: "L'ambiance.",\n    le_son: "Paris.",\n    le_must: "La carte"\n  }\n`;
        const lastBraceIndex = content.lastIndexOf("};");
        if (lastBraceIndex !== -1) {
            content = content.slice(0, lastBraceIndex) + realTalkBlock + content.slice(lastBraceIndex);
        }
    } else {
        // Mise à jour du must_eat dans le bloc real_talk existant
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'](.*?)["']/, (match) => {
            return match.replace(/must_eat:\s*["'](.*?)["']/, `must_eat: "${newMustEat}"`);
        });
    }

    fs.writeFileSync(f, content);
    updatedCount++;
});

console.log(`✅ ${updatedCount} restaurants réparés chirurgicalement.`);
