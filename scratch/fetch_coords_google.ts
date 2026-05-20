import fs from 'fs';
import path from 'path';
import axios from 'axios';

// Setup dotenv
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const GOOGLE_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_KEY) {
  console.error('❌ EXPO_PUBLIC_GOOGLE_MAPS_API_KEY is missing from .env');
  process.exit(1);
}

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

async function fetchFromGoogle(googleId: string): Promise<{ lat: number; lng: number } | null> {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googleId}&fields=geometry&key=${GOOGLE_KEY}`;
    const res = await axios.get(url);
    const loc = res.data.result?.geometry?.location;
    if (loc && loc.lat && loc.lng) {
      return { lat: loc.lat, lng: loc.lng };
    }
  } catch (e: any) {
    console.error(`Error querying Google for place_id ${googleId}:`, e.message);
  }
  return null;
}

async function fixLats() {
  console.log('📡 Scanning local registry files...');

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
        
        const googleIdMatch = content.match(/google_id\s*:\s*["']([^"']+)["']/);
        const google_id = googleIdMatch ? googleIdMatch[1].trim() : '';

        if (!google_id) {
          console.log(`   ❌ No google_id found in file.`);
          continue;
        }

        console.log(`   Querying Google Places API for ID: ${google_id}...`);
        const loc = await fetchFromGoogle(google_id);
        
        if (loc) {
          console.log(`   Found coordinates on Google: lat=${loc.lat}, lng=${loc.lng}`);
          
          const originalLocation = locationMatch[0];
          let updatedLocation = originalLocation;
          
          if (originalLocation.includes('lng:')) {
            updatedLocation = originalLocation.replace(
              /lng\s*:\s*([0-9.-]+)/,
              `lat: ${loc.lat},\n        lng: $1`
            );
          } else {
            updatedLocation = originalLocation.replace(
              /arrondissement\s*:\s*([0-9]+)/,
              `arrondissement: $1,\n        lat: ${loc.lat}`
            );
          }

          content = content.replace(originalLocation, updatedLocation);
          fs.writeFileSync(file, content, 'utf8');
          console.log(`   ✅ Patched file!`);
          fixCount++;
          
          // Delay to prevent hitting rate limits
          await new Promise(r => setTimeout(r, 150));
        } else {
          console.log(`   ❌ Could not retrieve geometry from Google API.`);
        }
      }
    }
  }

  console.log(`\n🏁 Finished. Patched ${fixCount} files.`);
}

fixLats().catch(console.error);
