import { Place, Pricing, PricingView } from '../../types/model';
import { CrabCalculator } from '../../lib/CrabCalculator';
import {
  resolveDrinkType,
  resolveReferencePrice,
  getDrinkTypeInfo,
  BENCHMARKS,
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
  ): { price: string; label: string; highlight: boolean; badge?: string } {
    const drinkType = resolveDrinkType(place.category, place.subcategories || [], activeCategories);
    const resolved = resolveReferencePrice(pricing, drinkType);
    const info = getDrinkTypeInfo(resolved.type);

    // SMARTEST PRICE (Standard Industriel 2026)
    // Rule: If we are in "bar" mode and have a HH price that covers the main usage or is mentioned as permanent
    const isBarContext = drinkType === 'pint' || drinkType === 'cocktail' || drinkType === 'wine';

    if (isBarContext) {
      if (resolved.type === 'pint' && pricing.hh_pint) {
        return { price: `${pricing.hh_pint}€`, label: 'Pinte (HH)', highlight: true, badge: 'PRIX COOL' };
      }
      if (resolved.type === 'cocktail' && pricing.hh_cocktail) {
        return { price: `${pricing.hh_cocktail}€`, label: 'Cocktail (HH)', highlight: true, badge: 'PRIX COOL' };
      }
      if (resolved.type === 'wine' && pricing.hh_wine) {
        return { price: `${pricing.hh_wine}€`, label: 'Verre (HH)', highlight: true, badge: 'PRIX COOL' };
      }
    }

    if (resolved.price > 0) {
      return { price: `${resolved.price}€`, label: info.label, highlight: false };
    }

    return { price: 'N/A', label: 'Prix', highlight: false };
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

    // --- AUTO MENU ---
    let menu = pricing.menu_items || [];
    if (!menu || menu.length === 0) {
      const essentials = [];
      if (pricing.pint_price) essentials.push({ name: 'Pinte', price: `${pricing.pint_price}€` });
      if (pricing.wine_glass)
        essentials.push({ name: 'Verre de vin', price: `${pricing.wine_glass}€` });
      if (pricing.cocktail_price)
        essentials.push({ name: 'Cocktail', price: `${pricing.cocktail_price}€` });
      if (pricing.coffee_price)
        essentials.push({ name: 'Café', price: `${pricing.coffee_price}€` });
      if (pricing.dish_price) essentials.push({ name: 'Plat', price: `${pricing.dish_price}€` });
      if (pricing.shot_price) essentials.push({ name: 'Shot', price: `${pricing.shot_price}€` });
      if (pricing.soft_price) essentials.push({ name: 'Soft', price: `${pricing.soft_price}€` });
      if (pricing.planche_price)
        essentials.push({ name: 'Planche', price: `${pricing.planche_price}€` });

      const categories = [];
      if (essentials.length > 0) categories.push({ category: 'Les Essentiels', items: essentials });

      // Happy Hour section
      const hhItems = [];
      if (pricing.hh_pint) hhItems.push({ name: 'Pinte HH', price: `${pricing.hh_pint}€` });
      if (pricing.hh_cocktail)
        hhItems.push({ name: 'Cocktail HH', price: `${pricing.hh_cocktail}€` });
      if (pricing.hh_wine) hhItems.push({ name: 'Verre HH', price: `${pricing.hh_wine}€` });
      if (hhItems.length > 0)
        categories.push({
          category: `Happy Hour${pricing.hh_time ? ` (${pricing.hh_time})` : ''}`,
          items: hhItems,
        });

      if (categories.length > 0) menu = categories;
    }

    // --- LEVEL: based on CrabCalculator deviation, not raw price ---
    let level: 1 | 2 | 3 | 4;
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

    // --- AUTO-INJECTION OF ESSENTIALS (Standard 2026: No Technical Laziness) ---
    const isBarContext = drinkType === 'pint' || drinkType === 'cocktail' || drinkType === 'wine';
    const menuFlatNames = (menu || []).flatMap(cat => cat.items.map(i => i.name.toLowerCase()));

    if (isBarContext && menu && menu.length > 0) {
      const injectedItems = [];

      // Inject Pinte if missing and exists in data
      if (pricing.hh_pint && !menuFlatNames.some(n => n.includes('pinte') || n.includes('bière'))) {
        injectedItems.push({ name: `Pinte (HH)`, price: `${pricing.hh_pint}€`, description: 'Prix de référence Happy Hour' });
      } else if (pricing.pint_price && !menuFlatNames.some(n => n.includes('pinte') || n.includes('bière'))) {
        injectedItems.push({ name: `Pinte`, price: `${pricing.pint_price}€` });
      }

      // Inject Cocktail if missing
      if (pricing.hh_cocktail && !menuFlatNames.some(n => n.includes('cocktail'))) {
        injectedItems.push({ name: `Cocktail (HH)`, price: `${pricing.hh_cocktail}€` });
      }

      // If we found missing essentials, inject them at the top
      if (injectedItems.length > 0) {
        menu = [{ category: 'Les Incontournables Bar', items: injectedItems }, ...menu];
      }
    }

    // --- CONTEXTUAL SORTING (Standard Industriel 2026) ---

    if (menu && menu.length > 1) {
      menu = [...menu].sort((a, b) => {
        const catA = a.category.toLowerCase();
        const catB = b.category.toLowerCase();

        // Keywords for bar prioritization
        const barKeywords = ['bar', 'drink', 'boisson', 'vin', 'cocktail', 'pint', 'happy hour', 'hh'];
        // Keywords for food prioritization
        const foodKeywords = ['plat', 'cuisine', 'entrée', 'dessert', 'food', 'snack', 'planche', 'resto'];

        if (isBarContext) {
          const scoreA = barKeywords.some(kw => catA.includes(kw)) ? 1 : 0;
          const scoreB = barKeywords.some(kw => catB.includes(kw)) ? 1 : 0;
          return scoreB - scoreA;
        } else {
          // Food context (Restaurant)
          const scoreA = foodKeywords.some(kw => catA.includes(kw)) ? 1 : 0;
          const scoreB = foodKeywords.some(kw => catB.includes(kw)) ? 1 : 0;
          return scoreB - scoreA;
        }
      });
    }

    return {
      avg_price: resolved.price,
      index_price: resolved.price,
      level,
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
        description: getDescription(),
      },
      confidence: CrabCalculator.getConfidenceMetrics(pricing.last_updated),
      menu,
    };
  }
}
