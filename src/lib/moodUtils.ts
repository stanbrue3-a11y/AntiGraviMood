import { Place, PlaceSkeleton } from '../types/model';
import { MoodType } from '../design/tokens/colors';

export const CATEGORIES_CULTUREL = [
  'museum',
  'exhibition',
  'workshop',
  'theatre',
  'gallery',
  'espace-culturel',
  'monument',
  'library',
  'arts_centre',
  'monument',
  'church',
  'castle',
  'tourist_attraction',
  'point_of_interest',
];
export const CATEGORIES_CHILL = [
  'café',
  'coffee-shop',
  'salon-de-the',
  'bakery',
  'boulangerie',
  'patisserie',
  'ice_cream',
  'parc',
  'park',
  'garden',
  'forest',
  'plaza',
  'square',
  'gym',
  'yoga',
  'sport',
  'beach',
  'lake',
];
export const CATEGORIES_FESTIF = [
  'club',
  'boite-de-nuit',
  'nightclub',
  'disco',
  'concert',
  'live_music',
];

/**
 * getDominantMood
 * THE single source of truth for mood categorization.
 * Brutally enforced across Map, List, and Search.
 */
export const getDominantMood = (place: Place | PlaceSkeleton): MoodType => {
  // 0. V2 Pure Model Shortcut (Skeleton already has pre-computed dominant_mood)
  if (place.dominant_mood) return place.dominant_mood;

  const cat = (place.category || '').toLowerCase();
  const sub = Array.isArray(place.subcategories)
    ? place.subcategories.map((s: string) => s.toLowerCase())
    : [];

  // 1. Hard Rules (Category Based)
  if (
    CATEGORIES_CULTUREL.includes(cat) ||
    sub.some((s: string) => CATEGORIES_CULTUREL.includes(s))
  ) {
    return 'culturel';
  }

  if (CATEGORIES_CHILL.includes(cat) || sub.some((s: string) => CATEGORIES_CHILL.includes(s))) {
    return 'chill';
  }

  if (CATEGORIES_FESTIF.includes(cat) || sub.some((s: string) => CATEGORIES_FESTIF.includes(s))) {
    return 'festif';
  }

  // 2. Score Comparison (Vibe Based) - Only for full Place objects
  const fullPlace = place as Place;
  if (!fullPlace.mood_scores) return 'chill';
  const { chill, festif, culturel } = fullPlace.mood_scores;

  const chillScore = chill?.overall || 0;
  const festifScore = festif?.overall || 0;
  const culturelScore = culturel?.overall || 0;

  // Prioritize Festif vs Chill for bars/restos
  if (festifScore >= chillScore && festifScore >= culturelScore) return 'festif';
  if (culturelScore >= chillScore) return 'culturel';

  return 'chill';
};
