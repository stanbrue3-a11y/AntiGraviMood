import { Place, Pricing, PricingView } from '../../types/model';
import { CrabCalculator } from '../../lib/CrabCalculator';
import {
  resolveDrinkType,
  resolveReferencePrice,
  getDrinkTypeInfo,
  getHHDuration,
} from '../../lib/drinkTypeResolver';
import { isHappyHourActive } from '../../lib/timeUtils';

export class PricingMapper {
  /**
   * Smart Anchor: determines the HEADLINE price for a place.
   * Delegates drink-type detection to drinkTypeResolver (single source of truth).
   */
  static getSmartAnchor(
    pricing: Pricing,
    place: Pick<Place, 'category' | 'subcategories' | 'pricing'>,
    activeCategories: string[] = []
  ): { price: string; label: string; highlight: boolean; badge?: string; description?: string } {
    const drinkType = resolveDrinkType(place.category, place.subcategories || [], activeCategories);
    const resolved = resolveReferencePrice(pricing, drinkType);
    const info = getDrinkTypeInfo(resolved.type);

    const isLongHH = getHHDuration(pricing.hh_time ?? undefined) > 3;
    const priceLabel = resolved.price > 0 ? `${resolved.price}€` : '-';

    // Logic: If it's a long HH and the price we found matches the HH price for that drink type
    const isActuallyHH = isLongHH && (
      (resolved.type === 'pint' && resolved.price === pricing.hh_pint) ||
      (resolved.type === 'cocktail' && resolved.price === pricing.hh_cocktail) ||
      (resolved.type === 'wine' && resolved.price === pricing.hh_wine)
    );

    return {
      label: isActuallyHH ? `${info.label} (HH)` : info.label,
      price: priceLabel,
      highlight: isActuallyHH,
      badge: isActuallyHH ? 'Happy Hour' : undefined,
      description: info.descriptionLabel,
    };
  }

  static mapPricingView(
    pricing: Pricing,
    place: Pick<Place, 'category' | 'subcategories'> & { practical_info?: any; pricing?: Pricing },
    testDate?: Date,
    activeCategories: string[] = []
  ): PricingView {
    const drinkType = resolveDrinkType(place.category, place.subcategories || [], activeCategories);
    const drinkInfo = getDrinkTypeInfo(drinkType);
    const resolved = resolveReferencePrice(pricing, drinkType);

    const metrics = CrabCalculator.getMetrics(pricing, drinkType);
    const anchor = this.getSmartAnchor(pricing, { ...place, pricing }, activeCategories);

    let menu = pricing.menu_items || [];

    // --- LEVEL: based on CrabCalculator deviation, not raw price ---
    let level: 1 | 2 | 3 | 4;
    // We use the continuous percent from metrics
    if (metrics.percent <= 35)
      level = 1; // Cheap relative to benchmark
    else if (metrics.percent <= 65)
      level = 2; // Standard
    else if (metrics.percent <= 85)
      level = 3; // Expensive
    else level = 4; // Luxury

    // --- DESCRIPTION: uses drinkTypeResolver ---
    const getDescription = (): string => {
      const info = getDrinkTypeInfo(resolved.type);
      if (isHappyHourActive(place.practical_info?.happy_hour, testDate) && pricing.hh_pint) {
        return `${info.label} (Happy Hour)`;
      }
      return info.descriptionLabel;
    };

    const sign = metrics.deviationPercent > 0 ? '+' : '';


    // --- CONTEXTUAL SORTING (Standard Industriel 2026) ---
    if (menu && menu.length > 1) {
      const isBarContext = drinkType === 'pint' || drinkType === 'cocktail' || drinkType === 'wine';
      menu = [...menu].sort((a, b) => {
        const catA = a.category.toLowerCase();
        const catB = b.category.toLowerCase();

        const barKeywords = ['bar', 'drink', 'boisson', 'vin', 'cocktail', 'pint', 'happy hour', 'hh', 'champagne', 'bière', 'pression'];
        const foodKeywords = ['plat', 'cuisine', 'entrée', 'dessert', 'food', 'snack', 'planche', 'resto', 'pâtes', 'burger', 'italien', 'bistrot', 'suggestion'];

        if (isBarContext) {
          const scoreA = barKeywords.some(kw => catA.includes(kw)) ? 2 : (foodKeywords.some(kw => catA.includes(kw)) ? -1 : 0);
          const scoreB = barKeywords.some(kw => catB.includes(kw)) ? 2 : (foodKeywords.some(kw => catB.includes(kw)) ? -1 : 0);
          return scoreB - scoreA;
        } else {
          const scoreA = foodKeywords.some(kw => catA.includes(kw)) ? 2 : (barKeywords.some(kw => catA.includes(kw)) ? -1 : 0);
          const scoreB = foodKeywords.some(kw => catB.includes(kw)) ? 2 : (barKeywords.some(kw => catB.includes(kw)) ? -1 : 0);
          return scoreB - scoreA;
        }
      });
    }

    return {
      avg_price: resolved.price,
      index_price: resolved.price,
      level,
      fill_percent: metrics.percent,
      color: metrics.color,
      smart_tip: pricing.smart_tip,
      pince_label: metrics.label,
      hh_pint: pricing.hh_pint,
      hh_cocktail: pricing.hh_cocktail,
      hh_wine: pricing.hh_wine,
      deviation_text:
        metrics.deviationPercent === 0
          ? `Prix Juste (${metrics.currentPrice}€)`
          : `${metrics.currentPrice}€ (${sign}${metrics.deviationPercent}% vs ${metrics.benchmarkPrice}€)`,
      benchmark_label: 'par rapport au benchmark Paris',
      price_context: `pour un ${drinkInfo.label.toLowerCase()} à Paris`,
      card_display: {
        label: anchor.label,
        price: anchor.price,
        value: parseFloat(anchor.price.replace('€', '')) || 0,
        highlight: anchor.highlight,
        badge: anchor.badge,
        description: anchor.description || getDescription(),
      },
      confidence: CrabCalculator.getConfidenceMetrics(pricing.last_updated),
      menu,
    };
  }
}
