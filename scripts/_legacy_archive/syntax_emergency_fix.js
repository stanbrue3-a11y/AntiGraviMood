const fs = require('fs');
const path = require('path');

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

const allFiles = walk('src/data/registry/tree');

allFiles.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');
    let original = content;
    
    // Pattern to fix: must_eat: "..."text.",
    // This happens when JSON.stringify is used on something already quoted or when replacement logic double dips.
    content = content.replace(/must_eat:\s*"([^"]*)"[^",\n]+",/g, (match, val) => {
        return `must_eat: "${val}",`;
    });

    if (content !== original) {
        fs.writeFileSync(f, content);
        console.log(`Fixed syntax in ${f}`);
    }
});
