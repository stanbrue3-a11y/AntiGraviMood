const fs = require("fs");
const path = require("path");

const REGISTRY_PATH = "src/data/registry/tree";

function walk(dir) {
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

const CUISINE_KEYWORDS = {
    "chinois": "Chinoise", "cantonais": "Chinoise", "japonais": "Japonaise", "ramen": "Japonaise",
    "italien": "Italienne", "pasta": "Italienne", "argentin": "Argentine", "israélien": "Israélienne",
    "africain": "Africaine", "mory": "Africaine", "mexicain": "Mexicaine", "thaï": "Thaïlandaise",
    "vietnamien": "Vietnamienne", "indien": "Indienne", "libanais": "Libanaise", "coréen": "Coréenne"
};

const allFiles = walk(REGISTRY_PATH);

allFiles.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;

    // 1. Détection du type de cuisine REEL
    let type = "Française";
    const cuisineMatch = content.match(/cuisine:\s*\[(.*?)\]/);
    const descMatch = content.match(/description:\s*["'`](.*?)["'`](,?)/s);
    const combined = ((cuisineMatch ? cuisineMatch[1] : "") + (descMatch ? descMatch[1] : "")).toLowerCase();

    for (const [kw, val] of Object.entries(CUISINE_KEYWORDS)) {
        if (combined.includes(kw)) { type = val; break; }
    }

    // 2. Nettoyage du must_eat
    // On cherche ton texte original. Si mon script est passé par là, il a mis "Cuisine Française. ..."
    content = content.replace(/must_eat:\s*["'`](.*?)["'`](,?)/g, (match, val, comma) => {
        let cleanVal = val.replace(/^Cuisine .*?\.\s*/, ""); // Enlever mon erreur
        // Si le texte est "À découvrir sur place", on tente d'extraire un plat du menu
        if (cleanVal.includes("À découvrir sur place")) {
            const menuMatches = [...content.matchAll(/name:\s*["'](.*?)["']/g)];
            if (menuMatches.length > 0) {
                const dishes = menuMatches.map(m => m[1]).filter(d => d.length > 5 && !d.includes("Verre")).slice(0, 2);
                cleanVal = dishes.join(" & ");
            }
        }
        const finalMustEat = `Cuisine ${type}. ${cleanVal}.`;
        return `must_eat: ${JSON.stringify(finalMustEat)}${comma || ""}`;
    });

    // 3. Update Real Talk
    if (content.includes("real_talk:")) {
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`](,?)/, (match, val, comma) => {
            const cleanVal = val.replace(/^Cuisine .*?\.\s*/, "");
            const finalMustEat = `Cuisine ${type}. ${cleanVal}.`;
            return match.replace(/must_eat:\s*["'`](.*?)["'`](,?)/, `must_eat: ${JSON.stringify(finalMustEat)}${comma || ""}`);
        });
    }

    fs.writeFileSync(f, content);
});

console.log("✅ Restauration Gastronomique terminée (350 restaurants).");
