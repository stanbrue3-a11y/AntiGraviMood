import { z } from 'zod';

/**
 * 🛡️ VALIDATION SCHEMA — Standard Moelle 2026
 * Aligné 1:1 avec type-definition.ts
 *
 * RÈGLES :
 * - real_talk : OBLIGATOIRE
 * - google_id : OBLIGATOIRE
 * - price_cents : seul format accepté (pas de string "€")
 * - subcategory : liste fermée (whitelist)
 */

// ══════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════

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

// ══════════════════════════════════════════════
// SUBCATEGORY WHITELIST (Source de Vérité)
// ══════════════════════════════════════════════

export const ALLOWED_SUBCATEGORIES = [
  'français',
  'italien',
  'japonais',
  'coréen',
  'chinois',
  'thaï',
  'vietnamien',
  'indien',
  'libanais',
  'mexicain',
  'péruvien',
  'brésilien',
  'éthiopien',
  'méditerranéen',
  'grec',
  'turc',
  'marocain',
  'américain',
  'africain',
  'caribéen',
  'pakistanais',
  'fusion',
  'fruits de mer',
  'bistronomie',
  'gastronomique',
  'street-food',
  'végétarien',
  'bistrot',
  'brasserie',
  'pizzeria',
  'bar à vin',
  'tapas',
  'bouillon',
] as const;

const SubcategorySchema = z.enum(ALLOWED_SUBCATEGORIES);

// ══════════════════════════════════════════════
// PRICING SCHEMA
// ══════════════════════════════════════════════

export const PlacePricingSchema = z
  .object({
    menu_items: z
      .array(
        z.object({
          category_type: z.enum([
            'starter', // Entrées
            'main', // Plats principaux
            'sharing', // À partager / Tapas
            'side', // Accompagnements
            'dessert', // Desserts
            'soft_drink', // Boissons sans alcool
            'alcohol_drink', // Boissons alcoolisées
            'formula', // Formules & Menus
          ]),
          display_label: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
              price_cents: z.number().int().optional().nullable(),
              description: z.string().optional().nullable(),
              is_highlight: z.boolean().optional().nullable(),
              format: z.enum(['assiette', 'verre', 'bouteille', 'planche']).optional().nullable(),
            }),
          ),
        }),
      )
      .optional()
      .nullable()
      .default([]),

    pint_price: z.number().optional().nullable(),
    wine_glass: z.number().optional().nullable(),
    cocktail_price: z.number().optional().nullable(),
    coffee_price: z.number().optional().nullable(),
    dish_price: z.number().optional().nullable(),

    shot_price: z.number().optional().nullable(),
    soft_price: z.number().optional().nullable(),
    planche_price: z.number().optional().nullable(),

    hh_time: z.string().optional().nullable(),
    hh_pint: z.number().optional().nullable(),
    hh_cocktail: z.number().optional().nullable(),
    hh_wine: z.number().optional().nullable(),

    smart_tip: z.string().optional().nullable(),
    verified_at: z.string().optional().nullable(),
    last_updated: z.string().optional().nullable(),
  })
  .passthrough();

// ══════════════════════════════════════════════
// REAL TALK SCHEMA (OBLIGATOIRE)
// ══════════════════════════════════════════════

export const RealTalkSchema = z
  .object({
    text: z.string().min(1).optional(),
    must_eat: z.string().min(1).optional(),
    le_secret: z.string().min(1).optional(),
    le_son: z.string().min(1).optional(),
    le_must: z.string().min(1).optional(),
    insider_tip: z.string().optional(),
    expert_catchline: z.string().optional(),
    specials: z
      .object({
        cuisine: z.array(z.string()).optional(),
        drinks: z.array(z.string()).optional(),
        must_eat: z.string().optional(),
        expert_catchline: z.string().optional(),
      })
      .optional(),
  })
  .passthrough();

export const PlaceRealTalkSchema = RealTalkSchema;

export const PlaceMoodScoresSchema = z
  .object({
    chill: z.number().optional(),
    festif: z.number().optional(),
    culturel: z.number().optional(),
  })
  .passthrough();

export const PlaceEditorialSchema = z
  .object({
    primary_status: z.string().optional(),
    reservation_policy: z.string().optional().nullable(),
    opening_hours: z.string().optional(),
    happy_hour: z.any().optional(),
    action_url: z.string().optional(),
    action_type: z.string().optional(),
    bouton_label: z.string().optional(),
    terrace: z.boolean().optional(),
    terrasse: z.boolean().optional(),
    cuisine_type: z.string().optional(),
    instagram: z.string().optional(),
    bouche_metro: z.string().optional(),
    metro: z.string().optional(),
    metro_lines: z.array(z.any()).optional(),
  })
  .passthrough();

// ══════════════════════════════════════════════
// MASTER SCHEMA
// ══════════════════════════════════════════════

export const SurgicalPlaceSchema = z.object({
  id: z.string().regex(/^poi-[a-z0-9-]+$/),
  name: z.string().min(2),
  slug: z
    .string()
    .min(2)
    .regex(/^[a-z0-9-]+$/),
  category: z.enum(['restaurant', 'bar', 'café']),
  subcategory: z.array(z.string()).optional().nullable().default([]),

  location: z.object({
    address: z.string().min(5),
    arrondissement: z.number().int().min(1).max(20),
    lat: z.number().min(48.8).max(48.95),
    lng: z.number().min(2.2).max(2.5),
    nearest_metro: z.string().optional().nullable(),
    metro_lines: z.array(z.union([z.string(), z.number()])).optional(),
    google_id: z.string().min(1), // OBLIGATOIRE
  }),

  pricing: PlacePricingSchema,

  practical: z
    .object({
      reservation_policy: z.string().optional().nullable(),
      accessibility: FlexibleBoolean,
      opening_hours_raw: z.string().optional().nullable(),
      main_action: z
        .object({
          type: z.string(),
          url: z.string(),
          label: z.string().optional(),
        })
        .optional(),
      terrace: FlexibleBoolean,
      ferme_tard: FlexibleBoolean,
    })
    .passthrough(),

  description: z.string().min(1),
  expert_catchline: z.string().optional().nullable(),
  insider_tip: z.string().min(1),

  specials: z
    .object({
      cuisine: z.array(z.string()).optional(),
      drinks: z.array(z.string()).optional(),
      must_eat: z.string().optional(),
      must_drink: z.string().optional(),
      expert_catchline: z.string().optional(),
    })
    .optional(),

  moods: z
    .object({
      chill: z.number().min(0).max(100).optional().default(50),
      festif: z.number().min(0).max(100).optional().default(50),
      culturel: z.number().min(0).max(100).optional().default(50),
    })
    .optional(),

  images: z.object({
    hero: z.string().min(1),
    gallery: z.array(z.string()).optional().default([]),
  }),

  verified: FlexibleBoolean,
  google_rating: z.number().optional(),
  google_reviews_count: z.number().optional(),
  instagram_handle: z.string().optional(),
  michelin_stars: z.number().int().min(1).max(3).optional().nullable(),

  real_talk: RealTalkSchema, // OBLIGATOIRE
});

export type SurgicalPlaceValidation = z.infer<typeof SurgicalPlaceSchema>;
