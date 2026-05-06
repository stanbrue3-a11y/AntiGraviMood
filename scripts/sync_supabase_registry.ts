
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import allPlaces from '../src/data/registry/index';

dotenv.config();

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌ Supabase credentials not found in .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sync() {
  console.log(`🚀 Starting Cloud Sync for ${allPlaces.length} places...`);
  
  for (const p of allPlaces) {
    const { error } = await supabase
      .from('places')
      .upsert({
        id: p.id,
        name: p.name,
        slug: p.slug,
        description: p.description,
        category: p.category,
        subcategories: p.subcategory,
        dominant_mood: p.moods ? (p.moods.festif > p.moods.chill && p.moods.festif > p.moods.culturel ? 'festif' : p.moods.culturel > p.moods.chill ? 'culturel' : 'chill') : 'chill',
        address: p.location.address,
        arrondissement: p.location.arrondissement,
        lat: p.location.lat,
        lng: p.location.lng,
        nearest_metro: p.location.nearest_metro,
        metro_lines: p.location.metro_lines,
        google_id: p.location.google_id,
        media: {
          hero_image: p.images.hero,
          google_photos: p.images.gallery
        },
        practical_info: {
          reservation_policy: p.practical.reservation_policy,
          opening_hours: p.practical.opening_hours_raw,
          terrace: p.practical.terrace,
          main_action: p.practical.main_action
        },
        real_talk: {
          insider_tip: p.insider_tip,
          must_eat: p.specials?.must_eat,
          must_drink: p.specials?.must_drink,
          cuisine: p.specials?.cuisine || []
        },
        google_rating: p.google_rating,
        verified: p.verified,
        index_price: p.pricing.avg_budget || p.pricing.dish_price || 0,
        pint_price: p.pricing.pint_price || 0,
        cocktail_price: p.pricing.cocktail_price || 0,
        coffee_price: p.pricing.coffee_price || 0,
        main_dish_price: p.pricing.dish_price || 0
      });

    if (error) {
      console.error(`❌ Failed to sync ${p.name}:`, error.message);
    } else {
      process.stdout.write('.');
    }
  }

  console.log("\n✅ Cloud Sync Complete!");
}

sync();
