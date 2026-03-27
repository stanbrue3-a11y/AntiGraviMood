import { z } from 'zod';

/**
 * 2026 MASTER SCHEMA: LE CONTRAT 📜
 * This file is the Single Source of Truth for Place data.
 * All TypeScript types are inferred from these schemas.
 */

// --- SUB-SCHEMAS ---

export const CoordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export const MoodCriteriaSchema = z.object({
  noise_level: z.number().optional(),
  seating_comfort: z.number().optional(),
  natural_light: z.number().optional(),
  crowd_density: z.number().optional(),
  music_tempo: z.number().optional(),
  event_programming: z.number().optional(),
  dance_space: z.number().optional(),
  cocktail_offering: z.number().optional(),
  crowd_energy: z.number().optional(),
  late_hours: z.number().optional(),
  architectural_originality: z.number().optional(),
  artistic_presence: z.number().optional(),
  cultural_programming: z.number().optional(),
  creative_clientele: z.number().optional(),
  workspace_facilities: z.number().optional(),
});

export const MoodScoreSchema = z.object({
  overall: z.number(),
  criteria: MoodCriteriaSchema.optional(),
});

export const PricingSchema = z.object({
  type: z.enum(['bar', 'restaurant', 'cafe', 'club', 'generic']).default('generic'),
  is_free: z.boolean().default(false),
  unit: z.string().default('€'),

  // Core representative prices (MANDATORY for industrial scaling)
  index_price: z.number().optional(), // Factual price of the representative item
  primary_price_type: z.enum(['pint', 'wine', 'cocktail', 'coffee', 'dish', 'generic']).optional(),
  pint_price: z.number().optional(), // Standard pint (Beer bars)
  cocktail_price: z.number().optional(),
  wine_glass: z.number().optional(),
  coffee_price: z.number().optional(),
  dish_price: z.number().optional(), // Main representative dish (Restaurants)

  // Extended prices
  shot_price: z.number().optional(),
  soft_price: z.number().optional(),
  planche_price: z.number().optional(),

  // Happy Hour
  hh_pint: z.number().optional(),
  hh_cocktail: z.number().optional(),
  hh_wine: z.number().optional(),
  hh_time: z.string().optional().nullable(),

  // Reliability Metadata
  smart_tip: z.string().optional(),
  verified_at: z.string().optional(),
  last_updated: z.string().optional(),
  category_percentile: z.number().optional(),
  value_score: z.number().optional(),
  fair_price: z.number().optional(),

  menu_items: z
    .array(
      z.object({
        category: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            price: z.string(),
            description: z.string().optional(),
          }),
        ),
      }),
    )
    .optional()
    .default([]),
});

export const PracticalInfoSchema = z.object({
  primary_status: z
    .enum(['sans_resa', 'resa_conseillee', 'resa_obligatoire', 'privatisable'])
    .nullable()
    .optional(),
  opening_hours: z.string().optional(),
  opening_hours_raw: z.string().optional(),
  happy_hour: z
    .union([z.string(), z.object({ start: z.string(), end: z.string() })])
    .nullable()
    .optional(),
  tags: z.array(z.string()).default([]),
  main_action: z
    .object({
      type: z.string(),
      url: z.string(),
      label: z.string(),
    })
    .optional(),
  terrace: z.boolean().optional(),
  wifi_available: z.boolean().optional(),
  accessibility: z.boolean().optional(),
  cuisine_type: z.string().optional(),
});

export const MediaSchema = z.object({
  hero_image: z.string().min(1, 'Hero image is mandatory for industrial grade UX'),
  instagram_handle: z.string().nullable().optional(),
  google_photos: z.array(z.string()).optional(),
});

export const DiscoverySchema = z.object({
  like_count: z.number().default(0),
  moment_count: z.number().default(0),
  top_vibe_tags: z.array(z.string()).default([]),
});

// --- MASTER PLACE SCHEMA ---

export const PlaceSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional().default(''),
  expert_catchline: z.string().optional().default(''),
  insider_tip: z.string().optional().default(''),
  category: z.string().min(1),
  subcategories: z.array(z.string()).default([]),
  dominant_mood: z.enum(['chill', 'festif', 'culturel']).optional(),

  location: z.object({
    address: z.string(),
    arrondissement: z.number(),
    coordinates: CoordinatesSchema,
    nearest_metro: z.string().optional(),
    metro_lines: z.array(z.string()).default([]),
    google_id: z.string().optional(),
  }),

  mood_scores: z.object({
    chill: MoodScoreSchema,
    festif: MoodScoreSchema,
    culturel: MoodScoreSchema,
  }),

  vibes: z.array(z.string()).default([]),
  pricing: PricingSchema,
  practical_info: PracticalInfoSchema,
  media: MediaSchema,
  specials: z
    .object({
      cuisine: z.array(z.string()).default([]),
      drinks: z.array(z.string()).default([]),
      must_eat: z.string().optional(),
      must_drink: z.string().optional(),
      expert_catchline: z.string().optional(), // Keep for registry back-compat during migration
    })
    .optional(),

  real_talk: z
    .object({
      insider_tip: z.string().optional(),
      must_eat: z.string().optional(),
      must_drink: z.string().optional(),
    })
    .optional(),

  opening_hours: z
    .object({
      standard: z.string(),
      display: z.string().optional(),
      detailed: z.string().optional(),
      is_open_now: z.boolean().optional(),
    })
    .optional(),

  social_preview: DiscoverySchema,
  ai_insights: z.record(z.string(), z.any()).optional(),

  google_rating: z.number().optional(),
  google_user_ratings_total: z.number().optional(),

  verified: z.boolean().default(false),
  michelin_stars: z.number().int().min(1).max(3).optional().nullable(),
});

// --- EXPORT TYPES VIA INFERENCE ---

export type ValidatedPlace = z.infer<typeof PlaceSchema>;
export type ValidatedPricing = z.infer<typeof PricingSchema>;
export type ValidatedPracticalInfo = z.infer<typeof PracticalInfoSchema>;
export type ValidatedMoodScore = z.infer<typeof MoodScoreSchema>;
export type ValidatedMedia = z.infer<typeof MediaSchema>;
export type RealTalk = NonNullable<ValidatedPlace['real_talk']>;
