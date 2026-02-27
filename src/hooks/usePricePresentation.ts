import { PricingView } from '../types/model';
import { palette, moodColors } from '../design/tokens/colors';

/**
 * 2026 Presentation Logic for Pricing
 * Unifies Gauge and Badge visual rules (Industrial Bugatti Grade).
 */
export const usePricePresentation = (view?: PricingView) => {
  // 1. Level Color Mapping (The "Pince" Scale)
  const getLevelColor = (level: number) => {
    if (level === 1) return palette.success; // Bon Plan
    if (level === 2) return palette.warning; // Cool Price
    if (level === 3) return palette.error;   // Ça Pince
    return moodColors.culturel.primary;      // Rolls Mode (Luxe)
  };

  // 2. Level Label Mapping
  const getLevelLabel = (level: number) => {
    if (level === 1) return 'Bon Plan';
    if (level === 2) return 'Cool Price';
    if (level === 3) return 'Ça Pince';
    return 'Rolls Mode';
  };

  const level = view?.level ?? 2;
  const barFillPercent = Math.min(level * 25, 100);
  const color = getLevelColor(level);
  const label = getLevelLabel(level);
  const isFree = view?.avg_price === 0;

  // Track Alpha for background transparency (10% approx)
  const trackAlpha = color.startsWith('#') ? `${color}18` : 'rgba(128, 128, 128, 0.1)';

  return {
    level,
    color,
    label,
    barFillPercent,
    isFree,
    // UI Helpers
    headerColor: color,
    trackAlpha,
  };
};
