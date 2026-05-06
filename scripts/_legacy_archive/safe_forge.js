const fs = require("fs");
const path = require("path");

const REGISTRY_PATH = "src/data/registry/tree";

function getFiles(dir) {
    const files = [];
    const stack = [dir];
    while (stack.length > 0) {
        const currentPath = stack.pop();
        const list = fs.readdirSync(currentPath);
        for (const file of list) {
            const filePath = path.join(currentPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                stack.push(filePath);
            } else if (filePath.endsWith(".ts") && !filePath.includes("index.ts")) {
                files.push(filePath);
            }
        }
    }
    return files;
}

const CUISINE_MAP = {
    "français": "Française", "italien": "Italienne", "japonais": "Japonaise", "coréen": "Coréenne",
    "chinois": "Chinoise", "thaï": "Thaïlandaise", "vietnamien": "Vietnamienne", "indien": "Indienne",
    "libanais": "Libanaise", "mexicain": "Mexicaine", "péruvien": "Péruvienne", "brésilien": "Brésilienne",
    "éthiopien": "Éthiopienne", "méditerranéen": "Méditerranéenne", "grec": "Grecque", "turc": "Turque",
    "marocain": "Marocaine", "américain": "Américaine", "africain": "Africaine", "caribéen": "Caribéenne",
    "pakistanais": "Pakistanaise", "fusion": "Fusion", "bistronomie": "Bistronomique", 
    "gastronomique": "Gastronomique", "street-food": "Street Food", "israélienne": "Israélienne",
    "argentin": "Argentine"
};

const allFiles = getFiles(REGISTRY_PATH);
console.log("Total fichiers trouvés : " + allFiles.length);

let updated = 0;
for (const f of allFiles) {
    try {
        let content = fs.readFileSync(f, "utf-8");
        if (!content.includes('category: "restaurant"')) continue;

        const slug = path.basename(f, ".ts");
        const subcatMatch = content.match(/subcategory:\s*\[(.*?)\]/s);
        const tags = subcatMatch ? subcatMatch[1].replace(/['"]/g, "").split(",").map(s => s.trim()) : [];
        
        let type = "Française";
        for (const tag of tags) {
            if (CUISINE_MAP[tag]) { type = CUISINE_MAP[tag]; break; }
        }

        // Extraction plats
        const dishes = [];
        const menuMatches = [...content.matchAll(/name:\s*["'](.*?)["']/g)];
        menuMatches.forEach(m => {
            const name = m[1];
            if (name.length > 5 && name.length < 50 && !name.includes("Verre")) dishes.push(name);
        });
        const dishString = dishes.length > 0 ? dishes.slice(0, 2).join(" & ") : "À découvrir sur place";
        const newMustEat = "Cuisine " + type + ". " + dishString + ".";

        // Remplacement sécurisé
        content = content.replace(/must_eat:\s*["'`](.*?)["'`](,?)/g, "must_eat: " + JSON.stringify(newMustEat) + "$2");

        // Photos
        const galleryMatch = content.match(/gallery:\s*\[([\s\S]*?)\]/);
        if (galleryMatch) {
            let urls = galleryMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 5);
            if (urls.length < 4) {
                const base = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media";
                for (let i = urls.length + 1; i <= 4; i++) {
                    urls.push("`" + base + "/" + slug + "/gallery_" + i + ".jpg`" );
                }
                content = content.replace(/gallery:\s*\[([\s\S]*?)\]/, "gallery: [" + urls.join(", ") + "]");
            }
        }

        // Real Talk
        if (!content.includes("real_talk:")) {
            const rt = ",\n  real_talk: {\n    text: \"Une adresse de caractère.\",\n    must_eat: " + JSON.stringify(newMustEat) + ",\n    le_secret: \"L'ambiance.\",\n    le_son: \"Paris.\",\n    le_must: \"La carte\"\n  }\n";
            content = content.replace(/(\n\s*)(\}\;?\s*$)/, rt + "$1$2");
        } else {
            content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`](,?)/, (match, val, comma) => {
                return match.replace(/must_eat:\s*["'`](.*?)["'`](,?)/, "must_eat: " + JSON.stringify(newMustEat) + (comma || ""));
            });
        }

        fs.writeFileSync(f, content);
        updated++;
    } catch (e) {
        console.error("Erreur sur " + f + " : " + e.message);
    }
}
console.log("✅ FIN : " + updated + " restaurants mis à jour.");
