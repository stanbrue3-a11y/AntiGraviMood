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
    
    // The issue is: must_eat: "Valid String"garbage.",
    // We want to keep ONLY "Valid String"
    // Regex: find must_eat: "...", followed by anything that is NOT a comma or newline, until the LAST quote before a comma or newline.
    // Actually, simpler: replace must_eat: "..." ANYTHING_UNTIL_COMMA with must_eat: "..."
    content = content.replace(/must_eat:\s*"([^"]*)"[^,\n]*",/g, (match, val) => {
        return `must_eat: "${val}",`;
    });
    
    // Also handle specials.must_eat (no comma at end sometimes)
    content = content.replace(/must_eat:\s*"([^"]*)"[^,\n]*\n/g, (match, val) => {
        return `must_eat: "${val}",\n`;
    });

    if (content !== original) {
        fs.writeFileSync(f, content);
        console.log(`Cleaned syntax in ${f}`);
    }
});
