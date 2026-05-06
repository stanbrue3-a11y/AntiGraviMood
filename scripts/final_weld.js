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
            if (stat.isDirectory()) stack.push(filePath);
            else if (filePath.endsWith(".ts") && !filePath.includes("index.ts")) files.push(filePath);
        }
    }
    return files;
}

const allFiles = getFiles(REGISTRY_PATH);

allFiles.forEach(f => {
    let content = fs.readFileSync(f, "utf-8");
    if (!content.includes('category: "restaurant"')) return;
    if (content.includes("real_talk:")) return; // Déjà fait

    // Extraction du must_eat actuel pour le réutiliser
    const meMatch = content.match(/must_eat:\s*["'`](.*?)["'`](,?)/);
    const mustEat = meMatch ? meMatch[1] : "Cuisine Française. À découvrir sur place.";

    const rtBlock = `,\n  real_talk: {\n    text: "Une adresse de caractère.",\n    must_eat: ${JSON.stringify(mustEat)},\n    le_secret: "L'ambiance.",\n    le_son: "Paris.",\n    le_must: "La carte"\n  }\n`;

    // On cherche la DERNIÈRE accolade fermante de l'objet principal
    // On remplace le dernier }; ou } par le bloc + };
    const lastBraceIndex = content.lastIndexOf("}");
    if (lastBraceIndex !== -1) {
        // On vérifie s'il y a un point-virgule après
        const hasSemicolon = content.substring(lastBraceIndex).includes(";");
        content = content.substring(0, lastBraceIndex) + rtBlock + (hasSemicolon ? "};" : "}");
        fs.writeFileSync(f, content);
    }
});

console.log("Soudure finale terminée.");
