import { z } from 'zod';

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
    criteria: MoodCriteriaSchema,
});

export const CoordinatesSchema = z.object({
    lat: z.number(),
    lng: z.number(),
});

export const PlaceSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    location: z.object({
        address: z.string(),
        arrondissement: z.number(),
        coordinates: CoordinatesSchema,
        nearest_metro: z.string(),
        metro_lines: z.array(z.union([z.string(), z.number()])).optional(),
        google_id: z.string().optional(),
    }),
    category: z.string(),
    subcategory: z.string(),
    dominant_mood: z.enum(['chill', 'festif', 'culturel']).optional(),
    mood_scores: z.object({
        chill: MoodScoreSchema,
        festif: MoodScoreSchema,
        culturel: MoodScoreSchema,
    }),
    pricing: z.object({
        budget_avg: z.number().nullish(),
        is_free: z.boolean().default(false),
        unit: z.string().optional(),
        pint_price: z.number().nullish(),
        cocktail_price: z.number().nullish(),
        coffee_price: z.number().nullish(),
        main_dish_price: z.number().nullish(),
        category_percentile: z.number().default(50),
    }).optional(),
    practical_info: z.record(z.string(), z.any()).optional(),
    media: z.object({
        hero_image: z.string(),
        instagram_handle: z.string().nullable(),
    }),
});

export type ValidatedPlace = z.infer<typeof PlaceSchema>;
