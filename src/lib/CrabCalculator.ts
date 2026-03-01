/**
 * CrabCalculator 🦀
 * Calculates the "Barre des Pinces" metrics.
 * Uses drinkTypeResolver for benchmark selection (no duplicated logic).
 */

import { Pricing } from '../types/model';
import { PriceEngine, DrinkType, BENCHMARKS } from './pricing/PriceEngine';
import { palette, moodColors } from '../design/tokens/colors';

export interface PriceMetrics {
  percent: number; // 0-100 (50 = Standard)
  label: string; // "STANDARD", "PINCE", etc.
  color: string; // Hex color
  currentPrice: number;
  benchmarkPrice: number;
  deviationPercent: number;
}

export class CrabCalculator {
  /**
   * @param pricing - Pricing data from the place
   * @param drinkType - Resolved drink type from drinkTypeResolver (NOT raw category string)
   */
  static getMetrics(pricing: Pricing, drinkType: DrinkType = 'generic'): PriceMetrics {
    if (pricing.is_free) {
      return {
        percent: 5,
        label: 'GRATUIT',
        color: palette.success,
        currentPrice: 0,
        benchmarkPrice: 0,
        deviationPercent: 0,
      };
    }

    // Use PriceEngine for reference price + benchmark
    const resolved = PriceEngine.resolveReferencePrice(pricing as any, drinkType);
    const current = resolved.price;
    const fair = pricing.fair_price || BENCHMARKS[resolved.type];

    const deviation = fair > 0 ? (current - fair) / fair : 0;
    // Smoother scaling curve: a +50% increase results in a score of 80 instead of 100.
    const percent = Math.max(5, Math.min(95, 50 + deviation * 60));
    const deviationPercent = Math.round(deviation * 100);

    return {
      percent,
      label: this.getLabel(percent),
      color: this.getColor(percent),
      currentPrice: current,
      benchmarkPrice: fair,
      deviationPercent,
    };
  }

  private static getLabel(percent: number): string {
    if (percent >= 85) return 'AÏE, ÇA PINCE SÉVÈRE !'; // Excessively Expensive
    if (percent >= 65) return 'ÇA PINCE !'; // Expensive
    if (percent >= 35) return 'STANDARD'; // Normal
    if (percent >= 15) return 'SUPER PINCE'; // Cheap
    return 'ROI DES PINCES 👑'; // Extremely Cheap
  }

  private static getColor(percent: number): string {
    if (percent <= 25) return palette.success; // Bon Plan
    if (percent <= 50) return palette.warning; // Cool Price
    if (percent <= 85) return palette.error;   // Ça Pince
    return moodColors.culturel.primary; // Rolls Mode (Purple)
  }

  static getConfidenceMetrics(lastUpdated?: string): {
    score: number;
    label: string;
    color: string;
  } {
    if (!lastUpdated) return { score: 0, label: 'Non vérifié', color: '#9CA3AF' };

    const date = new Date(lastUpdated);
    const now = new Date();
    const diffMonths =
      (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());

    if (diffMonths <= 3) return { score: 100, label: 'VÉRIFIÉ RÉCEMMENT', color: palette.success };
    if (diffMonths <= 6) return { score: 70, label: 'VÉRIFIÉ IL Y A 6 MOIS', color: palette.warning };

    return { score: 40, label: 'VÉRIFICATION ANCIENNE', color: palette.error };
  }
}
