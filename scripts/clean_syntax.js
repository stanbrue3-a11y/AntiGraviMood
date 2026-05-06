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
            if (fs.statSync(filePath).isDirectory()) stack.push(filePath);
            else if (filePath.endsWith(".ts") && !filePath.includes("index.ts")) files.push(filePath);
        }
    }
    return files;
}

const allFiles = getFiles(REGISTRY_PATH);

for (const f of allFiles) {
    let lines = fs.readFileSync(f, "utf-8").split("\n");
    let changed = false;
    
    // On parcourt les lignes et on remplace TOUTE la ligne qui contient must_eat
    const newLines = lines.map(line => {
        if (line.trim().startsWith("must_eat:")) {
            const indent = line.match(/^\s*/)[0];
            // On cherche à récupérer la valeur pour extraire les plats si possible
            const currentValMatch = line.match(/must_eat:\s*["'`](.*?)["'`](,?)/);
            let dishes = "À découvrir sur place";
            if (currentValMatch) {
                const val = currentValMatch[1].replace(/^Cuisine .*?\.\s*/, "");
                if (val.length > 3 && !val.includes("TODO")) dishes = val;
            }
            // On reconstruit une ligne propre
            changed = true;
            const cuisine = line.includes("Italienne") ? "Italienne" : "Française"; // Simplifié pour le fix
            return indent + "must_eat: " + JSON.stringify("Cuisine " + cuisine + ". " + dishes + ".") + ",";
        }
        return line;
    });

    if (changed) fs.writeFileSync(f, newLines.join("\n"));
}
console.log("Syntaxe nettoyée.");
