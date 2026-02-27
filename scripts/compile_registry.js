const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const treeDir = path.join(projectRoot, 'src/data/registry/tree');
const typeDefinitionPath = '../../type-definition';

function getDirectories(srcpath) {
  if (!fs.existsSync(srcpath)) return [];
  return fs.readdirSync(srcpath).filter((file) => {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function getFiles(srcpath) {
  if (!fs.existsSync(srcpath)) return [];
  return fs.readdirSync(srcpath).filter((file) => {
    return (
      fs.statSync(path.join(srcpath, file)).isFile() && file.endsWith('.ts') && file !== 'index.ts'
    );
  });
}

function walkTree(dir) {
  const arrondissements = getDirectories(dir);
  const allImports = [];

  arrondissements.forEach((arr) => {
    const arrPath = path.join(dir, arr);
    const quartiers = getDirectories(arrPath);
    const arrPlaces = [];

    quartiers.forEach((q) => {
      const qPath = path.join(arrPath, q);
      const pois = getFiles(qPath);

      pois.forEach((poi) => {
        const slug = poi.replace('.ts', '');
        let varName = slug.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        if (/^\d/.test(varName)) {
          varName = `poi_${varName}`;
        }
        const relPath = `./${q}/${slug}`;
        arrPlaces.push({ varName, relPath });
      });
    });

    // Generate arrondissement index.ts
    if (arrPlaces.length > 0) {
      const indexContent = `import { SurgicalPlace } from '../../../type-definition';
${arrPlaces.map((p) => `import { ${p.varName} } from '${p.relPath}';`).join('\n')}

export const arrondissement_${parseInt(arr)}Places: SurgicalPlace[] = [
${arrPlaces.map((p) => `    ${p.varName}`).join(',\n')}
];
`;
      fs.writeFileSync(path.join(arrPath, 'index.ts'), indexContent);
      allImports.push({
        arr: parseInt(arr),
        importName: `arrondissement_${parseInt(arr)}Places`,
        relPath: `./tree/${arr}`,
      });
    }
  });

  // Generate main registry index.ts
  const mainRegistryIndexPath = path.join(projectRoot, 'src/data/registry/index.ts');
  const mainContent = `import { SurgicalPlace } from './type-definition';
${allImports
  .sort((a, b) => a.arr - b.arr)
  .map((i) => `import { ${i.importName} } from '${i.relPath}';`)
  .join('\n')}

// AGGREGATE ALL DATA FROM REGISTRY TREE 🌳
const allPlaces: SurgicalPlace[] = [
${allImports
  .sort((a, b) => a.arr - b.arr)
  .map((i) => `    ...${i.importName}`)
  .join(',\n')}
];

// VALIDATION LAYER (Runtime)
const seenIds = new Set<string>();
allPlaces.forEach(p => {
    if (seenIds.has(p.id)) {
        console.warn(\`Duplicate ID found -> \${p.id}\`);
    }
    seenIds.add(p.id);
});

export default allPlaces;
`;
  fs.writeFileSync(mainRegistryIndexPath, mainContent);
  console.log(`Registry compiled successfully! ${allImports.length} districts aggregated.`);
}

walkTree(treeDir);
