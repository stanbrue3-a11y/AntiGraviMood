import allPlaces from './src/data/registry/index';
console.log(`Total venues in compiled registry: ${allPlaces.length}`);
if (allPlaces.length === 228) {
  console.log('SUCCESS: All 228 venues migrated and aggregated.');
} else {
  console.log(`WARNING: Expected 228, found ${allPlaces.length}`);
}
