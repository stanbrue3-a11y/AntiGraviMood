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
    real_talk_json: string | null;
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
     * FIREWALL: Clean text to ensure no JSON leaks into the UI.
     * Detects if a string is actually a JSON object (e.g. {"text": "..."}) and extracts the content.
     */
    private static cleanText(text: string | null | undefined): string {
        if (!text) return "";
        const trimmed = text.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            try {
                const parsed = JSON.parse(trimmed);
                if (parsed.text) return parsed.text;
                if (parsed.description) return parsed.description;
                return "";
            } catch (e) {
                return text;
            }
        }
        return text;
    }

    /**
     * METRO SANITIZER 🚇
     * Ensures metro station names are actual names, not full descriptions.
     */
    private static sanitizeMetro(text: string | null | undefined): string {
        const cleaned = this.cleanText(text);
        if (cleaned.length > 60) return ""; // It's a description, not a station
        return cleaned;
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
        const nearestMetro = this.sanitizeMetro(row.nearest_metro);
        const metroLines = this.safeJsonParse<any[]>(row.metro_line_json, []);

        // Cleaner: ensure lines are strings and short (not descriptions)
        const validMetroLines = metroLines
            .map(l => String(l).trim())
            .filter(l => l.length > 0 && l.length < 10);

        // Real Talk Extraction 🗣️
        const realTalkRaw = this.safeJsonParse<any>(row.real_talk_json, {});

        // ADAPTER: New Schema (insider_tip, specials) -> Old UI Model
        // We map the new clean data to the old slots so the UI displays them.
        const insiderTip = realTalkRaw.insider_tip || realTalkRaw.le_secret || editorial.le_secret;

        const cuisineStr = realTalkRaw.specials?.cuisine?.join(', ');
        const drinkStr = realTalkRaw.specials?.drinks?.join(', ');
        const specialsStr = [cuisineStr, drinkStr].filter(s => s && s.length > 0).join(' • ');

        const realTalk: RealTalk = {
            le_secret: insiderTip, // The "Insider Tip"

            le_son: realTalkRaw.le_son || editorial.le_son, // Legacy fallback
            la_faune: realTalkRaw.la_faune || editorial.la_faune,
            le_must: realTalkRaw.le_must || editorial.le_must || editorial.must_try,

            must_eat: specialsStr || realTalkRaw.must_eat || editorial.must_eat // Injects Cuisine/Drinks here
        };

        const insider_tip = realTalkRaw.insider_tip || "";
        const specials = realTalkRaw.specials || { cuisine: [], drinks: [] };

        // STRICT MAPPING: No more "Smart Recovery" hacks.
        let description = row.description || "";

        // Subcategories normalization
        const subcategories = typeof row.subcategory === 'string'
            ? row.subcategory.split(',').map(s => s.trim())
            : (Array.isArray(row.subcategory) ? row.subcategory : []);

        const pricingType = (row.category === 'restaurant' || row.category === 'bar' || row.category === 'café' || row.category === 'cafe' || row.category === 'club')
            ? (row.category === 'café' ? 'cafe' : row.category) as any
            : 'generic';

        // MOOD SCORES (Standardized)
        const mood_scores = {
            chill: { overall: typeof moodScores.chill === 'number' ? moodScores.chill : (moodScores.chill?.overall || 50) },
            festif: { overall: typeof moodScores.festif === 'number' ? moodScores.festif : (moodScores.festif?.overall || 50) },
            culturel: { overall: typeof moodScores.culturel === 'number' ? moodScores.culturel : (moodScores.culturel?.overall || 50) }
        };
        const dominant_mood = this.determineDominantMood(moodScores, row.dominant_mood) as MoodType;

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
                nearest_metro: nearestMetro || editorial.bouche_metro || editorial.metro || "",
                metro_lines: validMetroLines.length > 0 ? validMetroLines : (editorial.metro_lines || []),
                google_id: row.google_id || undefined
            },
            description: description,
            category: row.category,
            categories: categories,
            subcategories: subcategories,
            mood_scores: mood_scores,
            vibes: vibes,
            dominant_mood: dominant_mood,
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
            insider_tip,
            specials,
            pricing: (() => {
                const pricingJson = this.safeJsonParse<any>(row.pricing_json, {});
                // 🔍 CRITICAL DEBUG - trace pricing_json flow
                if (row.id === 'poi-164') {
                    console.log(`🔴 [MAPPER] poi-164 row.pricing_json type:`, typeof row.pricing_json);
                    console.log(`🔴 [MAPPER] poi-164 row.pricing_json first 100:`, String(row.pricing_json || '').substring(0, 100));
                    console.log(`🔴 [MAPPER] poi-164 pricingJson.menu_items:`, pricingJson?.menu_items?.length || 0);
                }
                return {
                    type: pricingType,
                    budget_avg: row.budget_avg || 0,
                    unit: row.budget_unit || '€',
                    is_free: row.budget_avg === 0,
                    pint_price: row.pint_price || undefined,
                    coffee_price: row.coffee_price || undefined,
                    main_dish_price: row.main_dish_price || undefined,
                    cocktail_price: row.cocktail_price || undefined,
                    category_percentile: row.category_percentile || 0,
                    value_score: 80,
                    // 🍽️ MENU ITEMS FROM PRICING_JSON
                    menu_items: pricingJson.menu_items || [],
                    last_updated: pricingJson.last_updated
                } as Pricing;
            })(),
            real_talk: realTalk,
            opening_hours: this.safeJsonParse<any>(row.hours_json, undefined),
            practical_info: {
                primary_status: editorial.primary_status || editorial.reservation_policy || null,
                main_action: editorial.main_action || null,
                opening_hours: editorial.opening_hours || row.hours_json || 'Voir sur place',
                price_range: editorial.price_range || row.budget_avg || 1,
                happy_hour: editorial.happy_hour || null,
                must_eat: realTalk.must_eat,
                signature_drink: editorial.signature_drink || (drinkStr ? drinkStr : undefined),
                ambiance_vibe: editorial.ambiance_vibe,
                specialty: editorial.specialty,
                smart_tip: editorial.smart_tip,
                entry_fee: editorial.entry_fee,
                cuisine_type: editorial.cuisine_type,
                price_info: editorial.price_info,
                // 🏷️ SURGICAL TAGS EXTRACTION
                tags: this.extractTags(editorial),
            },
            ai_insights: this.safeJsonParse<any>(row.ai_insights_json, undefined)
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
        const realTalkRaw = this.safeJsonParse<any>(detailsRow.real_talk_json, {});

        // SMART RECOVERY 🧠
        // If description is generic ("Bateau") and Real Talk text is good, PROMOTE Real Talk.
        let description = this.cleanText(detailsRow.description || place.description);
        const genericTriggers = ["Découvrez ce lieu", "Venez découvrir", "Un lieu unique", "Une expérience authentique"];
        const isGeneric = genericTriggers.some(t => description.startsWith(t));

        if ((isGeneric || !description) && realTalkRaw.text && realTalkRaw.text.length > 40) {
            console.log(`🚨 [Mapper:Hydrate] ID:${place.id} SMART RECOVERY triggered. Story was: ${isGeneric ? 'Generic' : 'Empty'}`);
            description = realTalkRaw.text;
        } else {
            console.log(`✅ [Mapper:Hydrate] ID:${place.id} Story Preserved (len: ${description?.length || 0})`);
        }

        return {
            ...place,
            description: description,
            practical_info: {
                ...place.practical_info,
                ...editorial,
                primary_status: editorial.primary_status || editorial.reservation_policy || place.practical_info.primary_status,
                description: undefined, // CRITICAL: Stop JSON leak
                booking_url: editorial.booking_url || editorial.bouton_réserver,
                shotgun_url: editorial.shotgun_url || editorial.bouton_shotgun,
            },
            pricing: (() => {
                const pricingJson = detailsRow.pricing_json ? this.safeJsonParse<any>(detailsRow.pricing_json, {}) : {};
                return {
                    ...place.pricing,
                    ...pricingJson,
                    // Ensure menu_items is always an array
                    menu_items: pricingJson.menu_items || place.pricing?.menu_items || []
                };
            })(),
            opening_hours: detailsRow.hours_json ? this.safeJsonParse<any>(detailsRow.hours_json, place.opening_hours) : place.opening_hours,
            media: {
                ...place.media,
                ...(detailsRow.media_json ? this.safeJsonParse<any>(detailsRow.media_json, {}) : {})
            },
            real_talk: {
                ...place.real_talk,
                ...realTalkRaw
            },
            ai_insights: detailsRow.ai_insights_json ? this.safeJsonParse<any>(detailsRow.ai_insights_json, place.ai_insights) : place.ai_insights
        };
    }

    /**
     * 🏷️ SURGICAL TAGS EXTRACTION
     * Derives badge tags from editorial/practical info fields
     */
    private static extractTags(editorial: any): string[] {
        const tags: string[] = [];

        // Terrace
        if (editorial.terrace === true || editorial.terrasse === true) {
            tags.push('terrasse');
        }

        // Wifi
        if (editorial.wifi === true) {
            tags.push('laptop_friendly');
        }

        // Vegan friendly
        if (editorial.vegan_friendly === true) {
            tags.push('vegan_friendly');
        }

        // Accessibility
        if (editorial.accessibility === true) {
            tags.push('accessible');
        }

        // Natural wine (check cuisine_type or drinks)
        if (editorial.cuisine_type?.toLowerCase().includes('nature') ||
            editorial.cuisine_type?.toLowerCase().includes('vin')) {
            tags.push('vins_nature');
        }

        return tags;
    }
}
