import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function repair() {
    const files = await glob('src/data/registry/tree/**/*.ts');
    console.log(`🛠️ [Auto-Repair] Scanning ${files.length} files...`);

    let fixedCount = 0;

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');

        // Match action_type and action_url (and optionally cuisine_type)
        const regex = /action_type:\s*"(book|shotgun|site)",\s*action_url:\s*"([^"]+)"/g;

        if (regex.test(content)) {
            const newContent = content.replace(regex, (match, type, url) => {
                return `main_action: {\n            type: "${type}",\n            url: "${url}"\n        }`;
            });

            fs.writeFileSync(file, newContent);
            console.log(`✅ Fixed: ${file}`);
            fixedCount++;
        }
    }

    console.log(`\n🎉 [Auto-Repair] Migration complete. ${fixedCount} files updated.`);
}

repair();
