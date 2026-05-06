/**
 * MOELLE EXTRACTION ENGINE — V1
 * Extrait intelligemment le type de cuisine et les plats signatures
 * depuis le contenu brut des fiches.
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

function extractInfo(content: string) {
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
            if (val.includes("&")) return { type, dishes: val.split("&").map(s => s.trim()) };
            const cleanPlat = val.replace(/^Cuisine .*?\.\s*/, "");
            return { type, dishes: [cleanPlat] };
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

const files = walk(REGISTRY_PATH).slice(0, 20);
const results = files.map(f => {
    const content = fs.readFileSync(f, "utf-8");
    const info = extractInfo(content);
    const must_eat = `Cuisine ${info.type}. ${info.dishes.join(" & ")}.`;
    return { slug: path.basename(f, ".ts"), must_eat };
});
console.log(JSON.stringify(results, null, 2));
