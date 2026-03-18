
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseServiceKey) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY in environment');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const REGISTRY_PATH = path.join(__dirname, '../src/data/registry/tree');

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') && file !== 'index.ts') {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

async function migrate() {
  const files = await getAllFiles(REGISTRY_PATH);
  console.log(`Found ${files.length} files to migrate.`);

  for (const file of files) {
    try {
      // Use dynamic import for the .ts file
      // Note: We might need to compile or use ts-node/tsx to run this
      const module = await import(file);
      const placeKey = Object.keys(module).find(key => typeof module[key] === 'object' && module[key].id);
      
      if (!placeKey) {
        console.warn(`Could not find exported place in ${file}`);
        continue;
      }

      const place = module[placeKey];
      
      const dbRow = {
        id: place.id,
        name: place.name,
        slug: place.slug,
        category: place.category,
        subcategory: place.subcategory,
        address: place.location.address,
        arrondissement: place.location.arrondissement,
        latitude: place.location.lat,
        longitude: place.location.lng,
        nearest_metro: place.location.nearest_metro,
        metro_lines: place.location.metro_lines || [],
        google_id: place.location.google_id || null,
        description: place.description,
        expert_catchline: place.expert_catchline || place.specials?.expert_catchline || null,
        insider_tip: place.insider_tip,
        mood_chill: place.moods.chill,
        mood_festif: place.moods.festif,
        mood_culturel: place.moods.culturel,
        pricing: place.pricing,
        practical: place.practical,
        specials: place.specials,
        image_hero: place.images.hero,
        image_gallery: place.images.gallery || [],
        verified: place.verified,
        google_rating: place.google_rating || null,
        instagram_handle: place.instagram_handle || null,
        michelin_stars: place.michelin_stars || 0,
        source: place.source || 'expert_human'
      };

      const { error } = await supabase
        .from('places')
        .upsert(dbRow, { onConflict: 'id' });

      if (error) {
        console.error(`Error upserting ${place.name}:`, error.message);
      } else {
        console.log(`Successfully migrated: ${place.name}`);
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e);
    }
  }
}

migrate().catch(console.error);
