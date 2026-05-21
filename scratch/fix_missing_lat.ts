import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Setup dotenv
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else if (file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

async function fixLats() {
  console.log('📡 Fetching places from Supabase to match by google_id / slug...');
  const { data: dbPlaces, error } = await supabase
    .from('places')
    .select('slug, name, google_id, lat, lng');

  if (error) {
    console.error('Error fetching from Supabase:', error);
    return;
  }

  console.log(`✅ Loaded ${dbPlaces.length} places from Supabase.`);

  const registryDir = path.join(__dirname, '../src/data/registry/tree');
  const files = getFilesRecursively(registryDir);
  console.log(`📂 Found ${files.length} TypeScript files in registry.`);

  let fixCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // Check if "lat:" is missing inside the location block
    const locationMatch = content.match(/location\s*:\s*\{([^}]+)\}/);
    if (locationMatch) {
      const locationContent = locationMatch[1];
      if (!locationContent.includes('lat:')) {
        console.log(`\n⚠️  File missing lat: ${path.basename(file)}`);

        // Match google_id
        const googleIdMatch = content.match(/google_id\s*:\s*["']([^"']+)["']/);
        const slugMatch = content.match(/slug\s*:\s*["']([^"']+)["']/);
        const nameMatch = content.match(/name\s*:\s*["']([^"']+)["']/);

        const google_id = googleIdMatch ? googleIdMatch[1] : '';
        const slug = slugMatch ? slugMatch[1] : '';
        const name = nameMatch ? nameMatch[1] : '';

        // Find in database
        let dbPlace = dbPlaces.find(
          (p) => p.google_id && google_id && p.google_id.trim() === google_id.trim(),
        );
        if (!dbPlace) {
          dbPlace = dbPlaces.find((p) => p.slug === slug || p.name === name);
        }

        if (dbPlace && dbPlace.lat) {
          console.log(
            `   Found match in DB: name="${dbPlace.name}", lat=${dbPlace.lat}, lng=${dbPlace.lng}`,
          );

          // Inject "lat: <lat>," inside the location block, right before or after "lng:"
          const originalLocation = locationMatch[0];
          let updatedLocation = originalLocation;

          if (originalLocation.includes('lng:')) {
            updatedLocation = originalLocation.replace(
              /lng\s*:\s*([0-9.-]+)/,
              `lat: ${dbPlace.lat},\n    lng: $1`,
            );
          } else {
            updatedLocation = originalLocation.replace(
              /arrondissement\s*:\s*([0-9]+)/,
              `arrondissement: $1,\n        lat: ${dbPlace.lat}`,
            );
          }

          content = content.replace(originalLocation, updatedLocation);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`   ✅ Patched file!`);
          fixCount++;
        } else {
          console.log(
            `   ❌ No matching place found in database (google_id: "${google_id}", slug: "${slug}")`,
          );
        }
      }
    }
  }

  console.log(`\n🏁 Finished. Patched ${fixCount} files.`);
}

fixLats().catch(console.error);
