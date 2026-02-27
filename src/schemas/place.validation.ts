import { z } from 'zod';

/** Strips null to undefined for TypeScript interface compatibility */
const nullToUndefined = <T>(val: T | null | undefined): T | undefined => val ?? undefined;

/**
 * Validation Schemas for Place JSON Helper Fields
 * Designed to handle SQLite quirks (0/1 vs boolean, nulls, loose types)
 */

// Helper to coerce 1/0/"true"/"false" to boolean
const FlexibleBoolean = z
  .union([
    z.boolean(),
    z.number().transform((n) => n === 1),
    z.string().transform((s) => {
      const lower = s.toLowerCase().trim();
      return lower !== 'false' && lower !== '0' && lower.length > 0;
    }),
  ])
  .catch(false)
  .optional()
  .default(false);

const TagSchema = z.string();

export const PlaceEditorialSchema = z
  .object({
    // Status
    primary_status: z.string().optional().nullable(),
    reservation_policy: z.string().optional().nullable(),

    // Actions
    action_type: z.string().optional().nullable(),
    action_url: z.string().optional().nullable(),
    link_shotgun: z.string().optional().nullable(),
    bouton_réserver: z.string().optional().nullable(),
    bouton_label: z.string().optional().nullable(),
    link_agenda: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    instagram: z.string().optional().nullable(),

    // Core Infos
    opening_hours: z.string().optional().nullable(),
    happy_hour: z
      .union([
        z.string(),
        z.object({ start: z.string(), end: z.string() }),
        z.boolean(), // Handle "true" or boolean from legacy
        z.null(),
      ])
      .optional()
      .nullable(),

    // Tags / Badges flags
    terrace: FlexibleBoolean,
    terrasse: FlexibleBoolean, // Spelling var
    wifi: FlexibleBoolean,
    laptop_friendly: FlexibleBoolean, // Spelling var
    vins_nature: FlexibleBoolean,
    shotgun: FlexibleBoolean,
    gratuit_moins_26: FlexibleBoolean,
    pelouse: FlexibleBoolean,
    pelouse_autorisee: FlexibleBoolean,

    // Metro
    metro_lines: z
      .array(z.union([z.string(), z.number()]))
      .optional()
      .nullable(), // Can be numbers in JSON
    cuisine_type: z.string().optional().nullable(),
  })
  .passthrough();

export const PlaceRealTalkSchema = z
  .object({
    insider_tip: z.string().optional().nullable().transform(nullToUndefined),
    must_eat: z.string().optional().nullable().transform(nullToUndefined),
    specials: z
      .object({
        cuisine: z.array(z.string()).optional(),
        drinks: z.array(z.string()).optional(),
        must_eat: z.string().optional(),
        expert_catchline: z.string().optional(),
      })
      .optional(),
  })
  .catchall(z.any().transform((v) => (v === null ? undefined : v)));

export const PlacePricingSchema = z
  .object({
    menu_items: z
      .array(
        z.object({
          category: z.string().optional().nullable(),
          items: z.array(
            z.object({
              name: z.string(),
              price: z.union([z.string(), z.number()]).transform(String),
              description: z.string().optional().nullable(),
            }),
          ),
        }),
      )
      .optional()
      .nullable()
      .default([]),

    // Surgical Price Index (Fact-Only)
    // Surgical Price Index (Fact-Only)
    pint_price: z.number().optional().nullable(),
    wine_glass: z.number().optional().nullable(),
    cocktail_price: z.number().optional().nullable(),
    coffee_price: z.number().optional().nullable(),
    dish_price: z.number().optional().nullable(),

    // Extended prices
    shot_price: z.number().optional().nullable(),
    soft_price: z.number().optional().nullable(),
    planche_price: z.number().optional().nullable(),

    // Happy Hour
    hh_pint: z.number().optional().nullable(),
    hh_cocktail: z.number().optional().nullable(),
    hh_wine: z.number().optional().nullable(),
    hh_time: z.string().optional().nullable(),

    // Reliability Metadata
    smart_tip: z.string().optional().nullable(),
    verified_at: z.string().optional().nullable(),
    last_updated: z.string().optional().nullable(),
  })
  .passthrough();

export const PlaceMoodScoresSchema = z.record(
  z.string(),
  z
    .object({
      overall: z
        .number()
        .optional()
        .nullable()
        .transform((v) => v ?? 0),
      tags: z.array(z.string()).optional().nullable().transform(nullToUndefined),
    })
    .catch({ overall: 0, tags: undefined }),
);

export type PlaceEditorial = z.infer<typeof PlaceEditorialSchema>;
export type PlacePricing = z.infer<typeof PlacePricingSchema>;

/**
 * MASTER SCHEMA FOR SURGICAL DATA (TS Registry) 🧬
 * Enforces strict rules during compilation of districts files.
 */
export const SurgicalPlaceSchema = z.object({
  id: z.string().regex(/^poi-[a-z0-9-]+$/),
  name: z.string().min(2),
  slug: z
    .string()
    .min(2)
    .regex(/^[a-z0-9-]+$/),
  category: z.enum([
    'bar',
    'restaurant',
    'café',
    'club',
    'museum',
    'exhibition',
    'parc',
    'monument',
    'culture',
  ]),
  subcategory: z.array(z.string()),

  location: z.object({
    address: z.string().min(5),
    arrondissement: z.number().int().min(1).max(20),
    lat: z.number().min(48.8).max(48.95), // Paris bounds approx
    lng: z.number().min(2.2).max(2.5),
    nearest_metro: z.string(),
    metro_lines: z.array(z.union([z.string(), z.number()])).optional(),
    google_id: z.string().optional(),
  }),

  pricing: PlacePricingSchema,

  practical: z
    .object({
      reservation_policy: z.enum(['sans_resa', 'resa_conseillee', 'resa_obligatoire']).nullable(),
      accessibility: z.boolean().default(false),
      wifi: z.boolean().default(false),
      opening_hours_raw: z.string(),
      action_type: z.enum(['book', 'shotgun', 'site']).optional(),
      action_url: z.string().optional().nullable(),
      terrace: z.boolean().optional(),
      cuisine_type: z.string().optional().nullable(),
    })
    .passthrough(),

  description: z.string().optional().nullable(),
  expert_catchline: z.string().optional().nullable(),
  insider_tip: z.string().optional().nullable(),

  specials: z.object({
    cuisine: z.array(z.string()).optional(),
    drinks: z.array(z.string()).optional(),
    must_eat: z.string().optional(),
    expert_catchline: z.string().optional(),
  }),

  moods: z.object({
    chill: z.number().min(0).max(100),
    festif: z.number().min(0).max(100),
    culturel: z.number().min(0).max(100),
  }),

  images: z.object({
    hero: z.string().min(1),
    gallery: z.array(z.string()).optional(),
  }),

  verified: z.boolean(),
  google_rating: z.number().optional(),
  instagram_handle: z.string().optional(),
});

export type SurgicalPlaceValidation = z.infer<typeof SurgicalPlaceSchema>;
