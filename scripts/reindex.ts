import fs from 'fs';
import path from 'path';

/**
 * 🛠️ Registry Auto-Indexer
 * Scans directories and regenerates all index.ts files to ensure all places are loaded.
 */

const TREE_ROOT = 'src/data/registry/tree';
const MAIN_INDEX = 'src/data/registry/index.ts';

function getAllTSFiles(dir: string, baseDir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file: string) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllTSFiles(filePath, baseDir));
        } else if (file.endsWith('.ts') && file !== 'index.ts') {
            results.push(path.relative(baseDir, filePath));
        }
    });
    return results;
}

function getExportName(dir: string, relativePath: string): string | null {
    const fullPath = path.join(dir, relativePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    // Match "export const name: SurgicalPlace" or just "export const name ="
    const match = content.match(/export const (\w+)(?::\s*SurgicalPlace)?\s*=/);
    return match ? match[1] : null;
}

function reindexArrondissement(arrDir: string) {
    const arrName = path.basename(arrDir);
    const files = getAllTSFiles(arrDir, arrDir);
    
    const imports: string[] = [];
    const exports: string[] = [];

    files.forEach((file: string) => {
        const name = getExportName(arrDir, file);
        if (name) {
            const importPath = './' + file.replace('.ts', '');
            imports.push(`import { ${name} } from '${importPath}';`);
            exports.push(`    ${name}`);
        }
    });

    const indexContent = `${imports.join('\n')}

export const arrondissement_${parseInt(arrName)}Places = [
${exports.join(',\n')}
];
`;

    fs.writeFileSync(path.join(arrDir, 'index.ts'), indexContent);
    console.log(`✅ Indexed ${arrName} (${exports.length} places)`);
}

function reindexGlobal() {
    const arrondissements = fs.readdirSync(TREE_ROOT)
        .filter((f: string) => fs.statSync(path.join(TREE_ROOT, f)).isDirectory() && /^\d+$/.test(f))
        .sort((a: string, b: string) => parseInt(a) - parseInt(b));

    const imports: string[] = ["import { SurgicalPlace } from './type-definition';"];
    const spreads: string[] = [];

    arrondissements.forEach((arr: string) => {
        const num = parseInt(arr);
        imports.push(`import { arrondissement_${num}Places } from './tree/${arr}';`);
        spreads.push(`    ...arrondissement_${num}Places`);
    });

    const indexContent = `${imports.join('\n')}

// AGGREGATE ALL DATA FROM REGISTRY TREE 🌳
const allPlaces: SurgicalPlace[] = [
${spreads.join(',\n')}
];

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (!p) return;
    if (seenIds.has(p.id)) {
        console.warn(\`Duplicate ID found -> \${p.id}\`);
    }
    seenIds.add(p.id);
});

export default allPlaces;
`;

    fs.writeFileSync(MAIN_INDEX, indexContent);
    console.log(`🚀 Global Index Regenerated (${arrondissements.length} districts)`);
}

// MAIN EXECUTION
console.log('🔍 Starting Registry Re-indexing...');
const arrondissements = fs.readdirSync(TREE_ROOT).filter((f: string) => fs.statSync(path.join(TREE_ROOT, f)).isDirectory() && /^\d+$/.test(f));
arrondissements.forEach((arr: string) => reindexArrondissement(path.join(TREE_ROOT, arr)));
reindexGlobal();
console.log('✨ All indexes are now 100% accurate.');
