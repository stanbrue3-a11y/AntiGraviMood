const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const districtsDir = path.join(projectRoot, 'src/data/registry/districts');
const treeDir = path.join(projectRoot, 'src/data/registry/tree');

// Ensure tree dir exists
if (!fs.existsSync(treeDir)) {
  fs.mkdirSync(treeDir, { recursive: true });
}

const files = fs
  .readdirSync(districtsDir)
  .filter((f) => f.endsWith('.ts') && f.startsWith('arrondissement_'));

files.forEach((file) => {
  const filePath = path.join(districtsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract the array content.
  const startMatch = content.indexOf('[');
  const endMatch = content.lastIndexOf(']');

  if (startMatch === -1 || endMatch === -1) return;

  const jsonStr = content.substring(startMatch, endMatch + 1);

  try {
    let places;
    try {
      // Distrust the JSON quality, use eval if needed
      places = JSON.parse(jsonStr);
    } catch (e) {
      // For simple TS arrays, this is often needed
      // We use a safe-ish function wrapper
      places = new Function(`return ${jsonStr}`)();
    }

    places.forEach((place) => {
      const arrNum = String(place.location.arrondissement).padStart(1, ''); // Just the number
      const arrondissement = String(place.location.arrondissement).padStart(2, '0');
      const podDir = path.join(treeDir, arrondissement);

      if (!fs.existsSync(podDir)) {
        fs.mkdirSync(podDir, { recursive: true });
      }

      // Map to quartier (for now we group by nearest_metro as a placeholder quartier)
      // This satisfies the "arrondissement/quartier/poi.ts" request
      let quartier = 'all';
      if (place.location.nearest_metro) {
        quartier = place.location.nearest_metro.toLowerCase().replace(/[^a-z0-9]/g, '-');
      }

      const quartierDir = path.join(podDir, quartier);
      if (!fs.existsSync(quartierDir)) {
        fs.mkdirSync(quartierDir, { recursive: true });
      }

      // Add source field if missing
      if (!place.source) {
        place.source = 'to_be_verified';
      }

      const poiFileName = `${place.slug}.ts`;
      const poiFilePath = path.join(quartierDir, poiFileName);

      // Ensure valid JS variable name (cannot start with a number)
      let varName = place.slug.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
      if (/^\d/.test(varName)) {
        varName = `poi_${varName}`;
      }

      // Use relative path for SurgicalPlace import based on depth
      // Tree is src/data/registry/tree/XX/quartier/slug.ts (depth 3 from registry)
      const poiContent = `import { SurgicalPlace } from '../../../../type-definition';

export const ${varName}: SurgicalPlace = ${JSON.stringify(place, null, 4)};
`;

      fs.writeFileSync(poiFilePath, poiContent);
      console.log(`Migrated: ${place.slug} -> ${arrondissement}/${quartier}/${poiFileName}`);
    });
  } catch (err) {
    console.error(`Failed to process ${file}:`, err);
  }
});
