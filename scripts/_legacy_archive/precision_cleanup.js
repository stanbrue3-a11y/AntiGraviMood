const fs = require("fs");
const path = require("path");

const REGISTRY_PATH = "src/data/registry/tree";

function getFiles(dir) {
    const files = [];
    const stack = [dir];
    while (stack.length > 0) {
        const cp = stack.pop();
        const list = fs.readdirSync(cp);
        for (const f of list) {
            const fp = path.join(cp, f);
            if (fs.statSync(fp).isDirectory()) stack.push(fp);
            else if (fp.endsWith(".ts") && !fp.includes("index.ts")) files.push(fp);
        }
    }
    return files;
}

const CUISINE_PRIORITY = {
    "japonais": "Japonaise", "éthiopien": "Éthiopienne", "italien": "Italienne", "mexicain": "Mexicaine",
    "chinois": "Chinoise", "argentin": "Argentine", "israélien": "Israélienne", "coréen": "Coréenne",
    "vietnamien": "Vietnamienne", "thaï": "Thaïlandaise", "indien": "Indienne", "libanais": "Libanaise"
};

const allFiles = getFiles(REGISTRY_PATH);

allFiles.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;

    const name = content.match(/name:\s*["'](.*?)["']/)?.[1] || "";
    const subcat = (content.match(/subcategory:\s*\[(.*?)\]/)?.[1] || "").toLowerCase();
    const budget = parseInt(content.match(/avg_budget:\s*(\d+)/)?.[1] || "0");

    // 1. Détection du type avec priorité
    let type = "Française";
    if (budget > 100) type = "Gastronomique";
    else if (content.includes("bistronomie") || subcat.includes("bistronomie")) type = "Bistronomique";

    for (const [tag, val] of Object.entries(CUISINE_PRIORITY)) {
        if (subcat.includes(tag) || content.toLowerCase().includes(tag)) {
            type = val;
            break;
        }
    }

    // 2. Nettoyage Must-Eat (Enlever les répétitions du nom)
    content = content.replace(/must_eat:\s*["'`](.*?)["'`](,?)/g, (match, val, comma) => {
        let cleanVal = val.replace(/^Cuisine .*?\.\s*/, "");
        // Supprimer le nom du lieu s'il est au début du texte
        if (name && cleanVal.startsWith(name)) {
            cleanVal = cleanVal.substring(name.length).replace(/^[\s&,.]+/, "").trim();
        }
        if (cleanVal.length < 5) cleanVal = "À découvrir sur place";
        
        const final = `Cuisine ${type}. ${cleanVal}.`.replace(/\.\./g, ".");
        return `must_eat: ${JSON.stringify(final)}${comma || ""}`;
    });

    // 3. Sync Real Talk
    if (content.includes("real_talk:")) {
        content = content.replace(/real_talk:\s*\{[\s\S]*?must_eat:\s*["'`](.*?)["'`](,?)/, (match, val, comma) => {
            let cleanVal = val.replace(/^Cuisine .*?\.\s*/, "");
            if (name && cleanVal.startsWith(name)) {
                cleanVal = cleanVal.substring(name.length).replace(/^[\s&,.]+/, "").trim();
            }
            if (cleanVal.length < 5) cleanVal = "À découvrir sur place";
            const final = `Cuisine ${type}. ${cleanVal}.`.replace(/\.\./g, ".");
            return match.replace(/must_eat:\s*["'`](.*?)["'`](,?)/, `must_eat: ${JSON.stringify(final)}${comma || ""}`);
        });
    }

    fs.writeFileSync(f, content);
});

console.log("✅ Nettoyage de précision terminé.");
