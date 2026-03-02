/**
 * 🏎️ PRICE ENGINE - INDUSTRIAL 2026 STANDARD
 * Single source of truth for all pricing logic in MoodMap.
 * Handles DrinkType resolution, Benchmark comparisons, and Happy Hour weighting.
 */

import { Pricing, PlaceCategory } from '../../data/registry/type-definition';
import { OpeningHours } from '../timeUtils';

export type DrinkType = 'pint' | 'wine' | 'cocktail' | 'coffee' | 'dish' | 'generic';

export interface DrinkTypeInfo {
    type: DrinkType;
    label: string;
    descriptionLabel: string;
    benchmark: number;
    icon: string;
}

/** Paris Benchmarks 2026 */
export const BENCHMARKS: Record<DrinkType, number> = {
    pint: 7.0,
    wine: 6.5,
    cocktail: 12.0,
    coffee: 2.5,
    dish: 18.0,
    generic: 15.0,
};

const DRINK_TYPE_INFO: Record<DrinkType, DrinkTypeInfo> = {
    pint: {
        type: 'pint',
        label: 'Pinte',
        descriptionLabel: 'Pinte (50cl)',
        benchmark: BENCHMARKS.pint,
        icon: 'beer-outline',
    },
    wine: {
        type: 'wine',
        label: 'Verre',
        descriptionLabel: 'Verre de vin',
        benchmark: BENCHMARKS.wine,
        icon: 'wine-outline',
    },
    cocktail: {
        type: 'cocktail',
        label: 'Cocktail',
        descriptionLabel: 'Cocktail Signature',
        benchmark: BENCHMARKS.cocktail,
        icon: 'flask-outline',
    },
    coffee: {
        type: 'coffee',
        label: 'Café',
        descriptionLabel: 'Café / Espresso',
        benchmark: BENCHMARKS.coffee,
        icon: 'cafe-outline',
    },
    dish: {
        type: 'dish',
        label: 'Plat',
        descriptionLabel: 'Plat principal',
        benchmark: BENCHMARKS.dish,
        icon: 'restaurant-outline',
    },
    generic: {
        type: 'generic',
        label: 'Prix',
        descriptionLabel: 'Prix moyen',
        benchmark: BENCHMARKS.generic,
        icon: 'pricetag-outline',
    },
};

export class PriceEngine {
    /**
   * canonize types for HH duration
   */
    static getHHDuration(hhTime: string | null | undefined): number {
        if (!hhTime) return 0;
        const match = hhTime.match(/(\d{1,2}[:h]?\d{0,2})\s?[-–|à]\s?(\d{1,2}[:h]?\d{0,2})/);
        if (match) {
            try {
                const oh = new OpeningHours(`${match[1]}-${match[2]}`);
                return oh.end - oh.start;
            } catch (e) {
                return 0;
            }
        }
        return 0;
    }

    /**
     * Resolves the primary drink type based on category, subcategories AND user filters.
     * @param category Main category of the place
     * @param subcategories Subcategories of the place
     * @param activeCategories User-selected filters on the map/search
     */
    static resolveDrinkType(category: PlaceCategory, subcategories: string[], activeCategories: string[] = []): DrinkType {
        const sub = subcategories.join(' ').toLowerCase();
        const active = activeCategories.map(c => c.toLowerCase());

        // 1. Contextual Override (Standard Janus 2026)
        // If user is explicitly filtering by "bar" or "boisson", we pivot to drinks even for restaurants
        if (active.some(c => c.includes('bar') || c.includes('boisson') || c.includes('vin') || c.includes('cocktail'))) {
            if (sub.includes('vin')) return 'wine';
            if (sub.includes('cocktail')) return 'cocktail';
            return 'pint'; // Default drink pivot
        }

        // If user is explicitly filtering by "restaurant" or "food", we pivot to dishes even for bars
        if (active.some(c => c.includes('restaurant') || c.includes('food') || c.includes('plat'))) {
            return 'dish';
        }

        // 2. Mandatory Category Primacy (Standard 2026)
        if (category === 'restaurant') {
            if (sub.includes('vin') || sub.includes('cocktail') || sub.includes('bar-a-vin')) {
                // Keep sub-specialty for hybrid wine/cocktail dining if no explicit filter
            } else {
                return 'dish';
            }
        }

        if (category === 'bar') return 'pint';
        if (category === 'club') return 'cocktail';

        // 3. Specialty Specificity (Subcategories)
        if (sub.includes('vin') || sub.includes('cave') || sub.includes('nature')) return 'wine';
        if (sub.includes('cocktail') || sub.includes('speakeasy') || sub.includes('mixo')) return 'cocktail';
        if (sub.includes('café') || sub.includes('coffee') || sub.includes('salon-de-the')) return 'coffee';

        // 4. Fallbacks
        if (sub.includes('bouillon') || sub.includes('bistro') || sub.includes('brasserie')) return 'dish';

        return category === 'café' ? 'coffee' : 'generic';
    }

    /**
   * Returns the canonical reference price for a given type.
   * Handles HH weighting (Long HH > 3h = HH price is the reference).
   */
    static getReferencePrice(pricing: Partial<Pricing> | null | undefined, type: DrinkType): number | undefined {
        if (!pricing) return undefined;
        const isLongHH = this.getHHDuration(pricing.hh_time) >= 3;

        if (pricing.is_free) return 0;

        switch (type) {
            case 'pint':
                return (isLongHH && pricing.hh_pint) ? pricing.hh_pint : pricing.pint_price || undefined;
            case 'wine':
                return (isLongHH && pricing.hh_wine) ? pricing.hh_wine : pricing.wine_glass || undefined;
            case 'cocktail':
                return (isLongHH && pricing.hh_cocktail) ? pricing.hh_cocktail : pricing.cocktail_price || undefined;
            case 'coffee':
                return pricing.coffee_price || undefined;
            case 'dish':
                return pricing.dish_price || undefined;
            case 'generic':
                return pricing.index_price || undefined;
            default:
                return undefined;
        }
    }

    /**
   * Resolves the best available price point for a place.
   */
    static resolveReferencePrice(pricing: Partial<Pricing> | null | undefined, primaryType: DrinkType): { price: number; type: DrinkType } {
        if (!pricing) return { price: 0, type: 'generic' };
        const primary = this.getReferencePrice(pricing, primaryType);
        if (primary && primary > 0) return { price: primary, type: primaryType };

        // New Fallback Order: Dish and Pint first, Coffee last.
        const fallbacks: DrinkType[] = ['dish', 'pint', 'cocktail', 'wine', 'coffee'];
        for (const fb of fallbacks) {
            const p = this.getReferencePrice(pricing, fb);
            if (p && p > 0) return { price: p, type: fb };
        }

        return { price: 0, type: 'generic' };
    }

    static getInfo(type: DrinkType): DrinkTypeInfo {
        return DRINK_TYPE_INFO[type];
    }
}
