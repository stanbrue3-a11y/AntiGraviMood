/**
 * MOELLE MUST-EAT FORGE — Standard Moelle 2026
 * Applique le dogme : Cuisine [Type]. [Plat 1] & [Plat 2].
 */

import * as fs from "fs";
import * as path from "path";

const REGISTRY_PATH = "src/data/registry/tree";

const CUISINE_MAP: { [key: string]: string } = {
    "français": "Française",
    "italien": "Italienne",
    "japonais": "Japonaise",
    "coréen": "Coréenne",
    "chinois": "Chinoise",
    "thaï": "Thaïlandaise",
    "vietnamien": "Vietnamienne",
    "indien": "Indienne",
    "libanais": "Libanaise",
    "mexicain": "Mexicaine",
    "péruvien": "Péruvienne",
    "brésilien": "Brésilienne",
    "éthiopien": "Éthiopienne",
    "méditerranéen": "Méditerranéenne",
    "grec": "Grecque",
    "turc": "Turque",
    "marocain": "Marocaine",
    "américain": "Américaine",
    "africain": "Africaine",
    "caribéen": "Caribéenne",
    "pakistanais": "Pakistanaise",
    "fusion": "Fusion",
    "bistronomie": "Bistronomique",
    "gastronomique": "Gastronomique",
    "street-food": "Street Food",
    "israélienne": "Israélienne",
    "argentin": "Argentine"
};

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

function extractRealDishes(content: string): string[] {
    const dishes: string[] = [];
    // 1. Chercher dans menu_items
    const menuMatches = [...content.matchAll(/name:\s*["'](.*?)["']/g)];
    menuMatches.forEach(m => {
        const name = m[1];
        if (name.length > 5 && name.length < 50 && !name.includes("Verre") && !name.includes("Bouteille") && !name.includes("Vins")) {
            dishes.push(name);
        }
    });

    // 2. Si pas de menu, chercher dans le must_eat actuel s'il a déjà des plats
    if (dishes.length < 1) {
        const currentMatch = content.match(/must_eat:\s*["'](.*?)["']/);
        if (currentMatch) {
            const val = currentMatch[1].replace(/^Cuisine .*?\.\s*/, "");
            if (val.length > 5 && !val.includes("TODO") && !val.includes("À découvrir")) {
                return val.split(/[&,]/).map(s => s.trim());
            }
        }
    }
    
    return dishes;
}

const files = walk(REGISTRY_PATH);
let updated = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;

    const subcatMatch = content.match(/subcategory:\s*\[(.*?)\]/s);
    const tags = subcatMatch ? subcatMatch[1].replace(/['"]/g, "").split(",").map(s => s.trim()) : [];
    
    let type = "Française";
    for (const tag of tags) {
        if (CUISINE_MAP[tag]) { type = CUISINE_MAP[tag]; break; }
    }

    const realDishes = extractRealDishes(content).slice(0, 2);
    const dishString = realDishes.length > 0 ? realDishes.join(" & ") : "À découvrir sur place";
    const newMustEat = `Cuisine ${type}. ${dishString}.`;

    // Remplacement chirurgical
    const mustEatRegex = /must_eat:\s*["'](.*?)["']/;
    content = content.replace(mustEatRegex, `must_eat: "${newMustEat}"`);

    // Mise à jour dans Real Talk aussi
    if (content.includes("real_talk:")) {
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'](.*?)["']/, (match) => {
            return match.replace(/must_eat:\s*["'](.*?)["']/, `must_eat: "${newMustEat}"`);
        });
    }

    fs.writeFileSync(f, content);
    updated++;
});

console.log(`✅ ${updated} restaurants mis à jour avec le Dogme Must-Eat.`);
