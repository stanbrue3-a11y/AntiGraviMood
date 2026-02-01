import { Place, MoodType, Pricing, RealTalk } from '../types/model';
import { PlaceSchema } from '../schemas/place.schema';
import { logger } from '../lib/logger';

/**
 * PlaceMapper
 * Surgically maps raw SQLite rows to the high-fidelity Place model.
 * Part of the Great Haussmann Reconstruction.
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
    description: string | null;
}

export class PlaceMapper {
    private static safeJsonParse<T>(data: string | null, defaultValue: T): T {
        if (!data) return defaultValue;
        try {
            return JSON.parse(data);
        } catch (e) {
            logger.log(`⚠️ Database JSON Parse Error: ${e instanceof Error ? e.message : 'Unknown'}`);
            return defaultValue;
        }
    }

    /**
     * CULTURAL PIVOT 🎭
     * Logic: If Cultural is #1 but Festive is #2, Festive wins.
     * If Cultural is #1 but Chill is #2, Cultural stays.
     */
    private static determineDominantMood(scores: any, fallback: string): string {
        if (!scores || typeof scores !== 'object') return fallback;

        // Extract scores for the three core moods
        const moodValues = [
            { mood: 'chill', score: scores.chill?.overall || 0 },
            { mood: 'festif', score: scores.festif?.overall || 0 },
            { mood: 'culturel', score: scores.culturel?.overall || 0 }
        ];

        // Sort by score descending
        moodValues.sort((a, b) => b.score - a.score);

        const primary = moodValues[0];
        const secondary = moodValues[1];

        // BUSINESS RULE: "Cultural Pivot"
        // If Cultural is the king, but Festive is the prince... make the prince the king.
        if (primary.mood === 'culturel' && secondary.mood === 'festif' && secondary.score > 0) {
            return 'festif';
        }

        return primary.score > 0 ? primary.mood : fallback;
    }

    /**
     * Maps a raw SQL row to a sanitized Place object.
     */
    static mapRowToPlace(row: PlaceRow): Place {
        const categories = this.safeJsonParse<string[]>(row.categories_json, []);
        const moodScores = this.safeJsonParse<Record<string, any>>(row.mood_scores_json, {});
        const socialPreview = this.safeJsonParse<{
            like_count: number;
            moment_count: number;
            top_vibe_tags: string[];
        }>(row.social_json, { like_count: 0, moment_count: 0, top_vibe_tags: [] });

        const editorial = this.safeJsonParse<any>(row.editorial_json, {});
        const vibes = this.safeJsonParse<string[]>(row.vibes_json, []);

        // Practical Info / Editorial Overlap
        const nearestMetro = row.nearest_metro || editorial.bouche_metro || editorial.metro || "";
        const metroLines = this.safeJsonParse<any[]>(row.metro_line_json, (editorial.metro_lines || []));

        // Real Talk Extraction 🗣️
        const realTalk: RealTalk = {
            le_secret: editorial.le_secret || editorial.secret || row.description,
            le_son: editorial.le_son || editorial.musique || editorial.son,
            la_faune: editorial.la_faune || editorial.clientèle || editorial.crowd,
            le_must: editorial.le_must || editorial.must_try,
            must_eat: editorial.must_eat || editorial.plat_culte
        };

        const pricingType = (row.category === 'restaurant' || row.category === 'bar' || row.category === 'cafe' || row.category === 'club')
            ? row.category as any
            : 'generic';

        const rawPlace: Place = {
            id: row.id,
            name: row.name,
            slug: row.slug,
            location: {
                address: row.address,
                arrondissement: row.arrondissement,
                coordinates: {
                    lat: row.lat,
                    lng: row.lng
                },
                nearest_metro: nearestMetro,
                metro_lines: metroLines,
                google_id: row.google_id || undefined
            },
            category: row.category,
            categories: categories,
            subcategory: row.subcategory,
            mood_scores: {
                chill: moodScores.chill || { overall: 0, criteria: {} },
                festif: moodScores.festif || { overall: 0, criteria: {} },
                culturel: moodScores.culturel || { overall: 0, criteria: {} }
            },
            vibes: vibes,
            dominant_mood: this.determineDominantMood(moodScores, row.dominant_mood) as MoodType,
            ui_theme: {
                main_color: row.main_color,
                map_icon: row.map_icon
            },
            social_preview: socialPreview,
            discovery_radius_meters: 500,
            min_stay_time_minutes: 30,
            media: {
                hero_image: row.hero_image,
                instagram_handle: row.instagram_handle,
                google_photos: this.safeJsonParse<string[] | undefined>(row.google_photos_json, undefined)
            },
            google_rating: row.rating || undefined,
            google_user_ratings_total: row.user_ratings_total || undefined,
            pricing: {
                type: pricingType,
                budget_avg: row.budget_avg || 0,
                unit: row.budget_unit || '€',
                is_free: row.budget_avg === 0,
                pint_price: row.pint_price || undefined,
                coffee_price: row.coffee_price || undefined,
                main_dish_price: row.main_dish_price || undefined,
                cocktail_price: row.cocktail_price || undefined,
                category_percentile: row.category_percentile || 0,
                value_score: 80
            } as Pricing,
            real_talk: realTalk,
            opening_hours: this.safeJsonParse<any>(row.hours_json, undefined),
            practical_info: {
                primary_status: editorial.primary_status || null,
                tags: editorial.tags || [],
                main_action: editorial.main_action || null,
                accessibility: editorial.accessibility || false,
                wifi_available: editorial.wifi_available || false,
                opening_hours: editorial.opening_hours || row.hours_json || 'Voir sur place',
                price_range: editorial.price_range || row.budget_avg || 1,
                happy_hour: editorial.happy_hour || null,
                must_eat: realTalk.must_eat,
                signature_drink: editorial.signature_drink,
                ambiance_vibe: editorial.ambiance_vibe,
                specialty: editorial.specialty,
                smart_tip: editorial.smart_tip,
                entry_fee: editorial.entry_fee,
            }
        };

        // SURGICAL VALIDATION
        const validation = PlaceSchema.safeParse(rawPlace);
        if (!validation.success) {
            logger.log(`❌ Place ${row.id} failed validation: ${validation.error.message}`);
        }

        return rawPlace;
    }

    /**
     * Hydrates a light place object with detailed information.
     */
    static hydrateDetails(place: Place, detailsRow: PlaceRow): Place {
        const editorial = this.safeJsonParse<any>(detailsRow.editorial_json, {});

        return {
            ...place,
            description: detailsRow.description || place.description,
            practical_info: {
                ...place.practical_info,
                ...editorial,
                booking_url: editorial.booking_url || editorial.bouton_réserver,
                shotgun_url: editorial.shotgun_url || editorial.bouton_shotgun,
            },
            pricing: detailsRow.pricing_json ? JSON.parse(detailsRow.pricing_json) : place.pricing,
            opening_hours: detailsRow.hours_json ? JSON.parse(detailsRow.hours_json) : place.opening_hours,
            media: {
                ...place.media,
                ...(detailsRow.media_json ? JSON.parse(detailsRow.media_json) : {})
            },
            ai_insights: detailsRow.ai_insights_json ? JSON.parse(detailsRow.ai_insights_json) : undefined
        };
    }
}
