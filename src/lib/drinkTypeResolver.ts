/**
 * DrinkType Resolver 🎯
 * Single source of truth for determining a place's primary drink type.
 * Used by: PricingMapper, CrabCalculator, FloatingMapSliders, compile_registry.
 *
 * RULE: All drink-type detection MUST go through this module.
 * Never check subcategory for pricing logic anywhere else.
 */

import { Pricing } from '../types/model';
import { ContextualEngine } from '../services/ContextualEngine';

export type DrinkType = 'pint' | 'wine' | 'cocktail' | 'coffee' | 'dish' | 'generic';

export interface DrinkTypeInfo {
  type: DrinkType;
  label: string; // "Pinte", "Verre", "Cocktail", "Café", "Plat"
  descriptionLabel: string; // "Pinte (50cl)", "Verre de vin", "Cocktail Signature"
  benchmark: number; // Paris average for this drink type
  icon: string; // Ionicons icon name
}

/** Benchmarks Paris — one source of truth */
export const BENCHMARKS: Record<DrinkType, number> = {
  pint: 7,
  wine: 6,
  cocktail: 12,
  coffee: 2.5,
  dish: 18,
  generic: 15,
};

const DRINK_TYPE_INFO: Record<DrinkType, DrinkTypeInfo> = {
  pint: {
    type: 'pint',
    label: 'Pinte',
    descriptionLabel: 'Pinte (50cl)',
    benchmark: 7,
    icon: 'beer-outline',
  },
  wine: {
    type: 'wine',
    label: 'Verre',
    descriptionLabel: 'Verre de vin',
    benchmark: 6,
    icon: 'wine-outline',
  },
  cocktail: {
    type: 'cocktail',
    label: 'Cocktail',
    descriptionLabel: 'Cocktail Signature',
    benchmark: 12,
    icon: 'flask-outline',
  },
  coffee: {
    type: 'coffee',
    label: 'Café',
    descriptionLabel: 'Café',
    benchmark: 2.5,
    icon: 'cafe-outline',
  },
  dish: {
    type: 'dish',
    label: 'Plat',
    descriptionLabel: 'Plat du jour',
    benchmark: 18,
    icon: 'restaurant-outline',
  },
  generic: {
    type: 'generic',
    label: 'Prix',
    descriptionLabel: 'Consommation',
    benchmark: 15,
    icon: 'pricetag-outline',
  },
};

/**
 * Resolves the drink type from SUBCATEGORY (not category).
 * Order of specificity: subcategory match > category match > fallback.
 */
export function resolveDrinkType(
  category: string,
  subcategories: string[],
  activeCategories: string[] = []
): DrinkType {
  const sub = subcategories.join(' ').toLowerCase();

  // Intelligence Situationnelle : Le filtre actif DOIT primer sur la donnée statique (Standard Industriel 2026)
  const contextualCategory = ContextualEngine.resolveContextualCategory({ category, subcategories } as any, activeCategories);

  // 1. Maintain specialty specificity even in generic context
  if (
    sub.includes('vin') ||
    sub.includes('cave') ||
    sub.includes('nature') ||
    category === 'cave_a_manger'
  ) {
    return 'wine';
  }

  if (
    sub.includes('cocktail') ||
    sub.includes('speakeasy') ||
    sub.includes('mixo') ||
    sub.includes('palace')
  ) {
    return 'cocktail';
  }

  // 2. Resolve based on Contextual Category
  if (contextualCategory === 'restaurant') return 'dish';
  if (contextualCategory === 'bar') return 'pint';
  if (contextualCategory === 'club') return 'cocktail';
  if (contextualCategory === 'café' || contextualCategory === 'coffee_shop') return 'coffee';

  // 3. Last resort fallbacks
  if (
    sub.includes('café') ||
    sub.includes('salon-de-the')
  ) {
    return 'coffee';
  }

  if (
    sub.includes('restaurant') ||
    sub.includes('bouillon') ||
    sub.includes('bistro') ||
    sub.includes('brasserie')
  ) {
    return 'dish';
  }

  return 'generic';
}

/** Returns the reference price for a given drink type from pricing data */
export function getReferencePrice(
  pricing: Partial<Pricing>,
  drinkType: DrinkType,
): number | undefined {
  switch (drinkType) {
    case 'pint':
      return pricing.pint_price ?? undefined;
    case 'wine':
      return pricing.wine_glass ?? undefined;
    case 'cocktail':
      return pricing.cocktail_price ?? undefined;
    case 'coffee':
      return pricing.coffee_price ?? undefined;
    case 'dish':
      return pricing.dish_price ?? undefined;
    default:
      return undefined;
  }
}

/** Returns the full DrinkTypeInfo for a resolved type */
export function getDrinkTypeInfo(drinkType: DrinkType): DrinkTypeInfo {
  return DRINK_TYPE_INFO[drinkType];
}

/**
 * Resolves the best available reference price from pricing data.
 * Uses drinkType as primary, then falls through any available price.
 */
export function resolveReferencePrice(
  pricing: Partial<Pricing>,
  drinkType: DrinkType,
): { price: number; type: DrinkType } {
  // Try the primary drink type first
  const primary = getReferencePrice(pricing, drinkType);
  if (primary !== undefined && primary > 0) return { price: primary, type: drinkType };

  // Fallback chain: pint → wine → cocktail → coffee → dish → generic fallback
  const fallbacks: DrinkType[] = ['pint', 'wine', 'cocktail', 'coffee', 'dish'];
  for (const fb of fallbacks) {
    const p = getReferencePrice(pricing, fb);
    if (p !== undefined && p > 0) return { price: p, type: fb };
  }

  return { price: 0, type: 'generic' };
}
