import {
  ValidatedPlace,
  ValidatedPricing,
  ValidatedMoodScore,
  ValidatedPracticalInfo,
  ValidatedMedia,
  RealTalk,
} from '../schemas/place.schema';

/**
 * 2026 UNIFIED DATA MODELS 🏢
 * All core entities are now derived from Master Zod Schemas.
 * No more manual interface maintenance.
 */

export type MoodType = 'chill' | 'festif' | 'culturel';

// Inferred from Master Schema
export type Place = ValidatedPlace;
export type Pricing = ValidatedPricing;
export type MoodScore = ValidatedMoodScore;
export type PracticalInfo = ValidatedPracticalInfo;
export type Media = ValidatedMedia;
export { RealTalk };

// UI-Specific View Models
export interface PricingView {
  // Legacy/UI alias (some components still reference avg_price)
  avg_price?: number;
  index_price: number; // Factual price of the representative item (Pint, Coffee, Dish)
  level: 1 | 2 | 3 | 4;
  fill_percent: number; // Continuous 0-100 for the bar
  color: string; // The specific color from CrabCalculator
  hh_pint?: number;
  hh_cocktail?: number;
  hh_wine?: number;
  smart_tip?: string;
  pince_label: string;
  deviation_text?: string;
  benchmark_label?: string;
  price_context?: string;
  card_display: {
    label: string;
    price: string;
    value: number;
    highlight: boolean;
    badge?: string;
    description?: string;
  };
  confidence?: {
    score: number;
    label: string;
    color: string;
  };
  menu: {
    category: string;
    items: { name: string; price: string; highlight?: boolean }[];
  }[];
}

/**
 * Raw SQLite Row Interface
 * Matches the actual database columns 1:1.
 */
export interface PlaceRow {
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
  verified: number; // SQLite boolean
  hero_image: string;
  instagram_handle: string | null;
  google_id: string | null;
  rating: number | null;
  user_ratings_total: number | null;
  budget_avg: number | null;
  is_free: number; // SQLite boolean
  budget_unit: string | null;
  pint_price: number | null;
  cocktail_price: number | null;
  wine_glass: number | null;
  coffee_price: number | null;
  main_dish_price: number | null;
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
  insider_tip: string | null;
  michelin_stars: number | null;
}

/**
 * Partial Place for search results and map pins
 */
export interface PlaceSkeleton {
  id: string;
  name: string;
  slug: string;
  location: {
    address: string;
    arrondissement: number;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: string;
  subcategories: string[];
  dominant_mood?: MoodType;
  media: {
    hero_image: string;
  };
  pricing: Pricing;
  google_rating?: number;
  google_user_ratings_total?: number;
  michelin_stars?: number;
}

// User & Moments
export interface User {
  id: string;
  email?: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  location?: string;
}

export interface Moment {
  id: string;
  placeId: string;
  placeName: string;
  imageUri: string;
  caption: string;
  mood: MoodType;
  type: 'image' | 'video';
  timestamp: number;
  user: User;
  likes: number;
  isLikedByMe: boolean;
  verbatimDate?: string;
  is_verified?: boolean;
}
