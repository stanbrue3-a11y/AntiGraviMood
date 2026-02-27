import { Generated } from 'kysely';

export interface Database {
  places: PlaceTable;
  places_fts: PlacesFtsTable;
}

export interface PlaceTable {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  dominant_mood: string;
  lat: number;
  lng: number;
  arrondissement: number;
  address: string;
  main_color: string;
  map_icon: string;
  hero_image: string;
  instagram_handle: string | null;
  google_id: string | null;
  rating: number | null;
  user_ratings_total: number | null;
  budget_avg: number | null;
  is_free: number;
  budget_unit: string | null;
  pint_price: number | null;
  cocktail_price: number | null;
  wine_glass: number | null;
  coffee_price: number | null;
  main_dish_price: number | null;
  verified: number | null;
  category_percentile: number;
  mood_scores_json: string | null;
  social_json: string | null;
  categories_json: string | null;
  hours_json: string | null;
  nearest_metro: string | null;
  metro_line_json: string | null;
  editorial_json: string | null;
  vibes_json: string | null;
  google_photos_json: string | null;
  pricing_json: string | null;
  media_json: string | null;
  ai_insights_json: string | null;
  real_talk_json: string | null;
  description: string | null;
}

export interface PlacesFtsTable {
  id: string;
  name: string;
  description: string;
  rank?: number; // Returned implicitly in FTS matching
  places_fts: string; // The hidden match column
}
