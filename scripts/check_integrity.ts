// @ts-ignore
global.__DEV__ = true;
// @ts-ignore
global.window = {};

const { PlaceMapper } = require('../src/services/PlaceMapper');
const { PlaceSchema } = require('../src/schemas/place.schema');
const sqlite3 = require('sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '../assets/moodmap_v31.db');
const db = new sqlite3.Database(DB_PATH);

console.log('🔍 [Integrity Check] Starting audit of moodmap_v31.db...');

db.all('SELECT * FROM places', (err, rows) => {
  if (err) {
    console.error('❌ Failed to read database:', err);
    process.exit(1);
  }

  console.log(`📊 Found ${rows.length} rows in 'places' table.`);

  let successCount = 0;
  let failCount = 0;

  rows.forEach((row) => {
    try {
      const mapped = PlaceMapper.mapRowToPlace(row);
      const validation = PlaceSchema.safeParse(mapped);

      if (validation.success) {
        successCount++;
      } else {
        failCount++;
        console.error(`❌ [Audit Fail] ${row.name || row.id} (${row.slug}):`);
        // Print specific errors for Bouillon Racine or a sample of failures
        if (row.slug === 'bouillon-racine' || failCount < 10) {
          console.error(JSON.stringify(validation.error.format(), null, 2));
        }
      }
    } catch (e) {
      failCount++;
      if (failCount < 5) console.error(`💥 [Crash] ${row.name || row.id} (${row.slug}):`, e);
    }
  });

  console.log('\n--- FINAL REPORT ---');
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failures: ${failCount}`);
  console.log(`📈 Coverage: ${((successCount / rows.length) * 100).toFixed(1)}%`);

  db.close();
});
