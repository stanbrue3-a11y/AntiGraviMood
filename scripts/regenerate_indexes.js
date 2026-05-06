const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const f of list) {
        const fp = path.join(dir, f);
        if (fs.statSync(fp).isDirectory()) {
            results.push(fp);
            results = results.concat(walk(fp));
        }
    }
    return results;
}

const allDirs = walk('src/data/registry/tree');

allDirs.forEach(dir => {
    const indexPath = path.join(dir, 'index.ts');
    if (fs.existsSync(indexPath)) {
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
        const subdirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory() && fs.existsSync(path.join(dir, f, 'index.ts')));
        
        let content = "";
        const exports = [];

        files.forEach(f => {
            const name = f.replace('.ts', '');
            let varName = name.replace(/-/g, '_').replace(/’/g, '_').replace(/'/g, '_').replace(/ /g, '_').replace(/\./g, '_');
            if (/^\d/.test(varName)) varName = `n_${varName}`;
            content += `import { ${varName} } from "./${name}";\n`;
            exports.push(varName);
        });

        subdirs.forEach(d => {
            let varName = d.replace(/-/g, '_');
            if (/^\d/.test(varName)) varName = `tree_${varName}`;
            content += `import { ${varName} } from "./${d}";\n`;
            exports.push(varName);
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

        fs.writeFileSync(indexPath, content);
    }
});
console.log("✅ All index.ts files regenerated with Standard Moelle nomenclature.");
