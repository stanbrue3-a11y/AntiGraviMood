import {
  Place,
  MoodType,
  Pricing,
  RealTalk,
  PlaceSkeleton,
  PricingView,
  PlaceRow,
} from '../types/model';
import { PlaceSchema } from '../schemas/place.schema';
import {
  PlaceEditorialSchema,
  PlacePricingSchema,
  PlaceRealTalkSchema,
  PlaceMoodScoresSchema,
} from '../schemas/place.validation';
import { z } from 'zod';
import { logger } from '../lib/logger';
import { IconService } from './IconService';
import { OpeningHours, isHappyHourActive } from '../lib/timeUtils';
import { CrabCalculator } from '../lib/CrabCalculator';
import { moodColors } from '../design';
import { PricingMapper } from './mappers/PricingMapper';
import { TimeMapper } from './mappers/TimeMapper';
import { MetaMapper } from './mappers/MetaMapper';
import { BadgeMapper } from './mappers/BadgeMapper';
import { isValidString, extractInstagramHandle } from '../utils/sanitization';

/**
 * PlaceMapper
 * Surgically maps raw SQLite rows to the high-fidelity Place model.
 * Part of the Great Haussmann Reconstruction.
 */

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

  private static safeValidate<T>(data: string | null, schema: z.ZodType<T>, defaultValue: T): T {
    if (!data) return defaultValue;
    try {
      const parsed = JSON.parse(data);
      const result = schema.safeParse(parsed);
      if (result.success) {
        return result.data;
      } else {
        console.error(
          `🚨 ZOD VALIDATION ERROR 🚨:`,
          JSON.stringify(result.error.format(), null, 2),
        );
        logger.log(`⚠️ Zod Validation Error: ${JSON.stringify(result.error.format())}`);
        return defaultValue;
      }
    } catch (e) {
      logger.log(
        `⚠️ Database Parse Error in Validation: ${e instanceof Error ? e.message : 'Unknown'}`,
      );
      return defaultValue;
    }
  }

  private static cleanText(text: string | null | undefined): string {
    if (!text) return '';
    const trimmed = text.trim();
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed.text) return parsed.text;
        if (parsed.description) return parsed.description;
        return '';
      } catch (e) {
        return text;
      }
    }
    return text;
  }

  private static sanitizeMetro(text: string | null | undefined): string {
    const cleaned = this.cleanText(text);
    if (cleaned.length > 60) return '';
    return cleaned;
  }

  private static determineDominantMood(
    scores: Record<string, { overall?: number }>,
    fallback: string,
  ): string {
    if (!scores || typeof scores !== 'object') return fallback;
    const moodValues = [
      { mood: 'chill', score: scores.chill?.overall || 0 },
      { mood: 'festif', score: scores.festif?.overall || 0 },
      { mood: 'culturel', score: scores.culturel?.overall || 0 },
    ];
    moodValues.sort((a, b) => b.score - a.score);
    const primary = moodValues[0];
    const secondary = moodValues[1];
    if (primary.mood === 'culturel' && secondary.mood === 'festif' && secondary.score > 0) {
      return 'festif';
    }
    return primary.score > 0 ? primary.mood : fallback;
  }

  static mapRowToPlace(row: PlaceRow): Place {
    const categories = this.safeJsonParse<string[]>(row.categories_json, []);
    const moodScores = this.safeValidate(row.mood_scores_json, PlaceMoodScoresSchema, {});
    const socialPreview = this.safeJsonParse<NonNullable<Place['social_preview']>>(
      row.social_json,
      { like_count: 0, moment_count: 0, top_vibe_tags: [] },
    );
    const editorial = this.safeValidate(
      row.editorial_json,
      PlaceEditorialSchema,
      {} as z.infer<typeof PlaceEditorialSchema>,
    );
    const vibes = this.safeJsonParse<string[]>(row.vibes_json, []);
    const nearestMetro = this.sanitizeMetro(row.nearest_metro);
    const metroLines = this.safeJsonParse<string[]>(row.metro_line_json, []);
    const validMetroLines = (metroLines || [])
      .map((l) => String(l).trim())
      .filter((l) => l.length > 0 && l.length < 10);

    const EMPTY_REAL_TALK = { insider_tip: undefined, must_eat: undefined };
    const realTalkRaw = this.safeValidate(row.real_talk_json, PlaceRealTalkSchema, EMPTY_REAL_TALK);

    const pricingData = this.safeValidate(row.pricing_json, PlacePricingSchema, { menu_items: [] });

    const nullToUndefined = <T>(v: T | null): T | undefined => (v === null ? undefined : v);

    // PRICING: Unified Construction (No casts)
    const pricing: Pricing = {
      type: (row.category === 'café'
        ? 'cafe'
        : ['bar', 'restaurant', 'club'].includes(row.category)
          ? row.category
          : 'generic') as Pricing['type'],
      unit: row.budget_unit || '€',
      is_free: row.budget_avg === 0 || row.is_free === 1,
      category_percentile: row.category_percentile || 0,
      value_score: 80,

      // Item prices
      pint_price: nullToUndefined(row.pint_price ?? pricingData.pint_price),
      cocktail_price: nullToUndefined(row.cocktail_price ?? pricingData.cocktail_price),
      wine_glass: nullToUndefined(row.wine_glass ?? pricingData.wine_glass),
      coffee_price: nullToUndefined(row.coffee_price ?? pricingData.coffee_price),
      dish_price: nullToUndefined(row.main_dish_price ?? pricingData.dish_price),

      // Extended prices
      shot_price: nullToUndefined(pricingData.shot_price),
      soft_price: nullToUndefined(pricingData.soft_price),
      planche_price: nullToUndefined(pricingData.planche_price),

      // HH (Standardized 2026)
      hh_time: nullToUndefined(pricingData.hh_time),
      hh_pint: nullToUndefined(pricingData.hh_pint),
      hh_cocktail: nullToUndefined(pricingData.hh_cocktail),
      hh_wine: nullToUndefined(pricingData.hh_wine),

      // Metadata
      smart_tip: nullToUndefined(pricingData.smart_tip),
      verified_at: nullToUndefined(pricingData.verified_at),
      last_updated: nullToUndefined(pricingData.last_updated),

      menu_items: (pricingData.menu_items || []).map((cat) => ({
        category: cat.category || 'Menu',
        items: (cat.items || []).map((item) => ({
          name: item.name,
          price: item.price,
          description: item.description || undefined,
        })),
      })),
    };

    const primaryPrice = this.getPrimaryPrice(pricing);
    pricing.index_price = primaryPrice.price;
    pricing.primary_price_type = primaryPrice.type;

    const practical_info = {
      primary_status: (editorial.primary_status ||
        editorial.reservation_policy ||
        null) as Place['practical_info']['primary_status'],
      opening_hours: editorial.opening_hours || row.hours_json || 'Voir sur place',
      happy_hour: (editorial.happy_hour ||
        pricing.hh_time ||
        null) as Place['practical_info']['happy_hour'],
      tags: BadgeMapper.extractTags(editorial),
      main_action: (() => {
        if (isValidString(editorial.action_url) && isValidString(editorial.action_type)) {
          const type = editorial.action_type as string;
          const url = editorial.action_url as string;
          let label = editorial.bouton_label;
          if (!label || label === 'false') {
            label = type === 'shotgun' ? 'SHOTGUN' : type === 'book' ? 'RÉSERVER' : 'SITE WEB';
          }
          return { type, url, label };
        }
        return undefined;
      })(),
      terrace: editorial.terrace || undefined,
      cuisine_type: editorial.cuisine_type || undefined,
    };

    const media = {
      hero_image: row.hero_image,
      instagram_handle: extractInstagramHandle(row.instagram_handle || editorial.instagram),
      google_photos: this.safeJsonParse<string[] | undefined>(row.google_photos_json, undefined),
    };

    const place: Place = {
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description || '',
      expert_catchline: (realTalkRaw.expert_catchline ||
        realTalkRaw.specials?.expert_catchline ||
        realTalkRaw.must_eat ||
        '') as string,
      insider_tip: (realTalkRaw.insider_tip || row.insider_tip || '') as string,
      category: row.category,
      subcategories:
        typeof row.subcategory === 'string' ? row.subcategory.split(',').map((s) => s.trim()) : [],
      dominant_mood: this.determineDominantMood(
        moodScores,
        row.dominant_mood,
      ) as Place['dominant_mood'],

      location: {
        address: row.address,
        arrondissement: row.arrondissement,
        coordinates: { lat: row.lat, lng: row.lng },
        nearest_metro:
          nearestMetro ||
          (editorial.bouche_metro as string) ||
          (editorial.metro as string) ||
          undefined,
        metro_lines:
          validMetroLines.length > 0
            ? validMetroLines
            : ((editorial.metro_lines || []) as (string | number)[])
                .map((l) => String(l).replace(/[{}]/g, '').trim())
                .filter((l) => l.length > 0),
        google_id: row.google_id || undefined,
      },

      mood_scores: {
        chill: { overall: moodScores.chill?.overall || 50, criteria: undefined },
        festif: { overall: moodScores.festif?.overall || 50, criteria: undefined },
        culturel: { overall: moodScores.culturel?.overall || 50, criteria: undefined },
      },

      vibes: vibes,
      pricing: pricing,

      practical_info: practical_info,
      media: media,

      real_talk: {
        insider_tip: realTalkRaw.insider_tip || undefined,
        must_eat: realTalkRaw.must_eat || realTalkRaw.specials?.must_eat || undefined,
      },

      specials: {
        cuisine: realTalkRaw.specials?.cuisine || [],
        drinks: realTalkRaw.specials?.drinks || [],
        must_eat: realTalkRaw.specials?.must_eat || undefined,
        expert_catchline: realTalkRaw.specials?.expert_catchline || undefined,
      },

      social_preview: socialPreview,
      ai_insights: this.safeJsonParse<Record<string, any>>(row.ai_insights_json, {}),

      google_rating: row.rating || undefined,
      google_user_ratings_total: row.user_ratings_total || undefined,
      verified: row.verified === 1,
    };

    // Final Verification against the Master Contract 📜
    const result = PlaceSchema.safeParse(place);
    if (!result.success) {
      logger.log(`🚨 CONTRACT BREACH [${place.id}]: ${JSON.stringify(result.error.format())}`);
    }

    return place;
  }

  static mapRowToSkeleton(row: PlaceRow): PlaceSkeleton {
    const moodScores = this.safeValidate(row.mood_scores_json, PlaceMoodScoresSchema, {});
    const dominantMood = this.determineDominantMood(moodScores, row.dominant_mood) as MoodType;

    const pricing: Pricing = {
      type: (row.category === 'café'
        ? 'cafe'
        : ['bar', 'restaurant', 'club'].includes(row.category)
          ? row.category
          : 'generic') as Pricing['type'],
      unit: row.budget_unit || '€',
      is_free: row.is_free === 1,
      pint_price: row.pint_price === null ? undefined : row.pint_price,
      cocktail_price: row.cocktail_price === null ? undefined : row.cocktail_price,
      wine_glass: row.wine_glass === null ? undefined : row.wine_glass,
      coffee_price: row.coffee_price === null ? undefined : row.coffee_price,
      dish_price: row.main_dish_price === null ? undefined : row.main_dish_price,
      category_percentile: row.category_percentile || 0,
      value_score: 80,
      menu_items: [],
    };

    const primaryPrice = this.getPrimaryPrice(pricing);
    pricing.index_price = primaryPrice.price;
    pricing.primary_price_type = primaryPrice.type;

    const skeleton: PlaceSkeleton = {
      id: row.id,
      name: row.name,
      slug: row.slug,
      location: {
        address: row.address,
        arrondissement: row.arrondissement,
        coordinates: { lat: row.lat, lng: row.lng },
      },
      category: row.category,
      subcategories:
        typeof row.subcategory === 'string' ? row.subcategory.split(',').map((s) => s.trim()) : [],
      dominant_mood: dominantMood,
      media: { hero_image: row.hero_image },
      pricing: pricing,
      google_rating: row.rating || undefined,
      google_user_ratings_total: row.user_ratings_total || undefined,
    };

    return skeleton;
  }

  static hydrateDetails(place: Place, detailsRow: PlaceRow): Place {
    const pricingData = this.safeValidate(detailsRow.pricing_json, PlacePricingSchema, {
      menu_items: [],
    });

    const EMPTY_REAL_TALK = { insider_tip: undefined, must_eat: undefined };
    const realTalkRaw = this.safeValidate(
      detailsRow.real_talk_json,
      PlaceRealTalkSchema,
      EMPTY_REAL_TALK,
    );

    const editorial = this.safeValidate(detailsRow.editorial_json, PlaceEditorialSchema, {
      terrace: false,
      terrasse: false,
      wifi: false,
      laptop_friendly: false,
      vins_nature: false,
      shotgun: false,
      gratuit_moins_26: false,
      pelouse: false,
      pelouse_autorisee: false,
    });

    const nullToUndefined = <T>(v: T | null): T | undefined => (v === null ? undefined : v);

    const updatedPricing: Pricing = {
      ...place.pricing,
      is_free: place.pricing.is_free,
      unit: place.pricing.unit,
      type: place.pricing.type,
      pint_price: nullToUndefined(pricingData.pint_price ?? place.pricing.pint_price),
      cocktail_price: nullToUndefined(pricingData.cocktail_price ?? place.pricing.cocktail_price),
      wine_glass: nullToUndefined(pricingData.wine_glass ?? place.pricing.wine_glass),
      coffee_price: nullToUndefined(pricingData.coffee_price ?? place.pricing.coffee_price),
      dish_price: nullToUndefined(pricingData.dish_price ?? place.pricing.dish_price),
      hh_pint: nullToUndefined(pricingData.hh_pint ?? place.pricing.hh_pint),
      hh_cocktail: nullToUndefined(pricingData.hh_cocktail ?? place.pricing.hh_cocktail),
      hh_wine: nullToUndefined(pricingData.hh_wine ?? place.pricing.hh_wine),
      hh_time: nullToUndefined(pricingData.hh_time ?? place.pricing.hh_time),
      verified_at: nullToUndefined(pricingData.verified_at || place.pricing.verified_at),
      smart_tip: nullToUndefined(pricingData.smart_tip || place.pricing.smart_tip),
      menu_items:
        (pricingData.menu_items || []).length > 0
          ? (pricingData.menu_items || []).map((cat) => ({
              category: cat.category || 'Menu',
              items: (cat.items || []).map((item) => ({
                name: item.name,
                price: item.price,
                description: item.description || undefined,
              })),
            }))
          : place.pricing.menu_items,
    };

    const primaryPrice = this.getPrimaryPrice(updatedPricing);
    updatedPricing.index_price = primaryPrice.price;
    updatedPricing.primary_price_type = primaryPrice.type;

    const hydratedPlace: Place = {
      ...place,
      pricing: updatedPricing,
      opening_hours: detailsRow.hours_json
        ? this.safeJsonParse<Place['opening_hours']>(detailsRow.hours_json, place.opening_hours)
        : place.opening_hours,
      real_talk: {
        ...place.real_talk,
        insider_tip: realTalkRaw.insider_tip || place.real_talk?.insider_tip,
        must_eat:
          realTalkRaw.must_eat || realTalkRaw.specials?.must_eat || place.real_talk?.must_eat,
      },
      specials: realTalkRaw.specials
        ? {
            cuisine: realTalkRaw.specials.cuisine || [],
            drinks: realTalkRaw.specials.drinks || [],
            must_eat: realTalkRaw.specials.must_eat || undefined,
            expert_catchline: realTalkRaw.specials.expert_catchline || undefined,
          }
        : place.specials,
      insider_tip: realTalkRaw.insider_tip || detailsRow.insider_tip || place.insider_tip,
      expert_catchline:
        realTalkRaw.specials?.expert_catchline || realTalkRaw.must_eat || place.expert_catchline,
    };

    return hydratedPlace;
  }

  /**
   * Helper to extract the primary index price from pricing data.
   * Order of preference: pint -> wine -> cocktail -> coffee -> dish
   */
  private static getPrimaryPrice(pricing: Pricing): {
    price: number;
    type: 'generic' | 'pint' | 'wine' | 'cocktail' | 'coffee' | 'dish';
  } {
    if (pricing.pint_price) return { price: pricing.pint_price, type: 'pint' };
    if (pricing.wine_glass) return { price: pricing.wine_glass, type: 'wine' };
    if (pricing.cocktail_price) return { price: pricing.cocktail_price, type: 'cocktail' };
    if (pricing.coffee_price) return { price: pricing.coffee_price, type: 'coffee' };
    if (pricing.dish_price) return { price: pricing.dish_price, type: 'dish' };
    return { price: 0, type: 'generic' };
  }
}
