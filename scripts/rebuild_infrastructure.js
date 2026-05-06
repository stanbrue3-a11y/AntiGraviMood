const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const items = fs.readdirSync(dir);
    const files = items.filter(f => f.endsWith('.ts') && f !== 'index.ts');
    const subdirs = items.filter(f => fs.statSync(path.join(dir, f)).isDirectory());

    // Recursively process subdirs first
    subdirs.forEach(sd => processDir(path.join(dir, sd)));

    // Now build index for THIS dir
    const exports = [];
    let content = "";

    files.forEach(f => {
        const name = f.replace('.ts', '');
        let varName = name.replace(/-/g, '_').replace(/’/g, '_').replace(/'/g, '_').replace(/ /g, '_').replace(/\./g, '_');
        if (/^\d/.test(varName)) varName = `n_${varName}`;
        content += `import { ${varName} } from "./${name}";\n`;
        exports.push(varName);
    });

    subdirs.forEach(d => {
        const indexPath = path.join(dir, d, 'index.ts');
        if (fs.existsSync(indexPath)) {
            let varName = d.replace(/-/g, '_');
            if (/^\d/.test(varName)) varName = `tree_${varName}`;
            content += `import { ${varName} } from "./${d}";\n`;
            exports.push(`...${varName}`); // Spread sub-arrays
        }
    });

    const dirName = path.basename(dir);
    let exportName = "";
    if (/^\d+$/.test(dirName)) {
        exportName = `arrondissement_${parseInt(dirName)}Places`;
    } else {
        exportName = dirName.replace(/-/g, '_');
        if (/^\d/.test(exportName)) exportName = `tree_${exportName}`;
    }

    content += `\nexport const ${exportName} = [\n  ${exports.join(',\n  ')}\n];\n`;

    fs.writeFileSync(path.join(dir, 'index.ts'), content);
    console.log(`🏗️ Built index.ts for ${dir}`);
}

processDir('src/data/registry/tree');
console.log("✅ Registry Tree Infrastructure Restored.");
