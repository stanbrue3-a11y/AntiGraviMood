/**
 * Bayesian Average Score
 *
 * Produces a confidence-weighted rating that prevents places with very few
 * reviews from ranking above battle-tested establishments.
 *
 * Formula:  score = (v / (v + m)) × R + (m / (v + m)) × C
 *
 * Where:
 *   R = place's Google rating
 *   v = number of Google reviews
 *   m = confidence threshold (reviews needed before we fully trust the rating)
 *   C = prior mean (the "default" rating assumed before any evidence)
 *
 * The result is always between C and R, converging to R as v → ∞.
 */

/** Minimum reviews before the raw rating is fully trusted. */
const CONFIDENCE_THRESHOLD = 300;

/** The rating every place starts at with zero evidence. */
const PRIOR_MEAN = 4.3;

/**
 * Compute a Bayesian-smoothed relevance score for a place.
 *
 * @param rating   - Google rating (1-5). Null/undefined → returns 0.
 * @param reviews  - Number of Google reviews. Null/undefined → returns 0.
 * @returns A score roughly in [PRIOR_MEAN, 5], suitable for sorting/rendering.
 */
export function bayesianScore(
  rating: number | null | undefined,
  reviews: number | null | undefined,
): number {
  if (!rating || !reviews || reviews <= 0) return 0;

  const v = reviews;
  const m = CONFIDENCE_THRESHOLD;
  const R = rating;
  const C = PRIOR_MEAN;

  return (v / (v + m)) * R + (m / (v + m)) * C;
}

/**
 * Returns true when a place is "premium" enough to show its full pin
 * earlier than the default zoom threshold.
 *
 * Current rule: bayesian score ≥ 4.5  OR  has a premium tag.
 */
export function isPremiumPlace(
  rating: number | null | undefined,
  reviews: number | null | undefined,
  tags?: string[],
): boolean {
  if (tags?.includes('pastille_bleue') || tags?.includes('pastille_rouge')) {
    return true;
  }
  return bayesianScore(rating, reviews) >= 4.5;
}
