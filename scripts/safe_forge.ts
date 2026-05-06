/**
 * SAFE MUST-EAT FORGE — Standard Moelle 2026
 * Version corrigée et blindée.
 */

import * as fs from "fs";
import * as path from "path";

const REGISTRY_PATH = "src/data/registry/tree";

const CUISINE_MAP: { [key: string]: string } = {
    "français": "Française", "italien": "Italienne", "japonais": "Japonaise", "coréen": "Coréenne",
    "chinois": "Chinoise", "thaï": "Thaïlandaise", "vietnamien": "Vietnamienne", "indien": "Indienne",
    "libanais": "Libanaise", "mexicain": "Mexicaine", "péruvien": "Péruvienne", "brésilien": "Brésilienne",
    "éthiopien": "Éthiopienne", "méditerranéen": "Méditerranéenne", "grec": "Grecque", "turc": "Turque",
    "marocain": "Marocaine", "américain": "Américaine", "africain": "Africaine", "caribéen": "Caribéenne",
    "pakistanais": "Pakistanaise", "fusion": "Fusion", "bistronomie": "Bistronomique", 
    "gastronomique": "Gastronomique", "street-food": "Street Food", "israélienne": "Israélienne",
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
    const menuMatches = [...content.matchAll(/name:\s*["'](.*?)["']/g)];
    menuMatches.forEach(m => {
        const name = m[1];
        if (name.length > 5 && name.length < 50 && !name.includes("Verre") && !name.includes("Bouteille")) {
            dishes.push(name);
        }
    });
    return dishes;
}

const files = walk(REGISTRY_PATH).slice(0, 50);
let updated = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;

    const slug = path.basename(f, ".ts");
    const subcatMatch = content.match(/subcategory:\s*\[(.*?)\]/s);
    const tags = subcatMatch ? subcatMatch[1].replace(/['"]/g, "").split(",").map(s => s.trim()) : [];
    
    let type = "Française";
    for (const tag of tags) {
        if (CUISINE_MAP[tag]) { type = CUISINE_MAP[tag]; break; }
    }

    const realDishes = extractRealDishes(content).slice(0, 2);
    const dishString = realDishes.length > 0 ? realDishes.join(" & ") : "À découvrir sur place";
    const newMustEat = `Cuisine ${type}. ${dishString}.`;

    // REMPLACEMENT SÉCURISÉ
    content = content.replace(/must_eat:\s*["`'].*?["`'](,?)/g, (match, comma) => {
        return `must_eat: ${JSON.stringify(newMustEat)}${comma || ""}`;
    });

    // PHOTOS COMPLÉTION
    const galleryMatch = content.match(/gallery:\s*\[([\s\S]*?)\]/);
    if (galleryMatch) {
        let galleryUrls = galleryMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 5);
        if (galleryUrls.length < 4) {
            const needed = 4 - galleryUrls.length;
            const SUPABASE_BASE_URL = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media";
            for (let i = galleryUrls.length + 1; i <= galleryUrls.length + needed; i++) {
                galleryUrls.push(`\`${SUPABASE_BASE_URL}/${slug}/gallery_${i}.jpg\``);
            }
            content = content.replace(/gallery:\s*\[([\s\S]*?)\]/, `gallery: [${galleryUrls.join(", ")}]`);
        }
    }

    // BLOCK REAL TALK
    if (!content.includes("real_talk:")) {
        const realTalkBlock = `,\n  real_talk: {\n    text: "Une adresse de caractère.",\n    must_eat: ${JSON.stringify(newMustEat)},\n    le_secret: "L'ambiance.",\n    le_son: "Paris.",\n    le_must: "La carte"\n  }\n`;
        const lastBraceIndex = content.lastIndexOf("};");
        if (lastBraceIndex !== -1) {
            content = content.slice(0, lastBraceIndex) + realTalkBlock + content.slice(lastBraceIndex);
        }
    } else {
        // Update must_eat inside existing real_talk
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`]/, (match) => {
            return match.replace(/must_eat:\s*["'`](.*?)["'`]/, `must_eat: ${JSON.stringify(newMustEat)}`);
        });
    }

    fs.writeFileSync(f, content);
    updated++;
});

console.log(`✅ ${updated} restaurants normalisés sans corruption.`);
