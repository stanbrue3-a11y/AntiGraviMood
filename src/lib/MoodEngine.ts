import { logger } from './logger';
import * as FlexSearch from 'flexsearch';
import { PlaceSkeleton, MoodType } from '../types/model';

/**
 * MOOD ENGINE v3.0 (V2 Architecture - Pure Model / Nominal Search)
 * FlexSearch index stripped down to NAME + CATEGORY + SUBCATEGORIES only.
 * This reduces RAM consumption by ~10x compared to indexing full descriptions.
 */

// Singleton instance
let index: FlexSearch.Document<any> | null = null;
let lastDataLength = 0;
let searchCache: Record<string, PlaceSkeleton[]> = {};
const MAX_CACHE_SIZE = 100;

const MOOD_KEYWORDS: Record<MoodType, string[]> = {
  chill: [
    'calme',
    'cosy',
    'posé',
    'détente',
    'lecture',
    'café',
    'silence',
    'intimiste',
    'douceur',
    'repos',
  ],
  festif: [
    'ambiance',
    'fête',
    'danse',
    'cocktails',
    'musique',
    'bouge',
    'rencontre',
    'bruit',
    'vibrant',
    'énergie',
  ],
  culturel: [
    'art',
    'histoire',
    'expo',
    'musée',
    'savoir',
    'découverte',
    'patrimoine',
    'exposition',
    'galerie',
    'théâtre',
  ],
};

export const MoodEngine = {
  /**
   * Initialise ou met à jour l'index avec des PlaceSkeletons légers.
   * V2: On n'indexe QUE le nom, la catégorie et les sous-catégories.
   */
  init: (places: PlaceSkeleton[]) => {
    if (index && places.length === lastDataLength) return;

    const DocumentClass = FlexSearch.Document || (FlexSearch as any).default?.Document;

    index = new DocumentClass({
      cache: true,
      doc: {
        id: 'id',
        field: ['name', 'category', 'subcategories'],
      },
    });

    places.forEach((place) => {
      if (index) {
        index.add({
          id: place.id,
          name: place.name,
          category: place.category,
          subcategories: Array.isArray(place.subcategories) ? place.subcategories.join(' ') : '',
        });
      }
    });

    lastDataLength = places.length;
    searchCache = {}; // Invalidate cache when data changes
    logger.log('🧠 [MoodEngine/V3] Nominal Index Ready (Name + Category Only).');
  },

  /**
   * Recherche les lieux correspondant à la query avec calcul de pertinence.
   * V2: Operates on PlaceSkeleton[] for O(1) memory.
   */
  search: (places: PlaceSkeleton[], query: string, limit = 20): PlaceSkeleton[] => {
    if (!index || !query || query.length < 2) return [];

    const cacheKey = `${query}_${places.length}`;
    if (searchCache[cacheKey]) return searchCache[cacheKey];

    const lowQuery = query.toLowerCase();
    const results = index.search(query, { limit: limit * 2, enrich: true, bool: 'or' });

    const matchIds = new Set<string>();
    results.forEach((fieldResult) => {
      if (fieldResult && Array.isArray(fieldResult.result)) {
        fieldResult.result.forEach((item) => matchIds.add(String(item.id)));
      }
    });

    const scoredPlaces = places
      .filter((p) => matchIds.has(p.id))
      .map((place) => {
        let score = 0;
        const name = place.name.toLowerCase();
        const category = (place.category || '').toLowerCase();

        if (name === lowQuery) score += 100;
        else if (name.includes(lowQuery)) score += 50;
        if (category.includes(lowQuery)) score += 40;

        // Mood keyword boosting
        Object.entries(MOOD_KEYWORDS).forEach(([mood, keywords]) => {
          if (keywords.some((k) => lowQuery.includes(k) || k.includes(lowQuery))) {
            if (place.dominant_mood === mood) score += 30;
          }
        });

        return { place, score };
      });

    const finalResult = scoredPlaces
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((s) => s.place);

    // Limit cache size
    if (Object.keys(searchCache).length > MAX_CACHE_SIZE) {
      const keys = Object.keys(searchCache);
      delete searchCache[keys[0]];
    }
    searchCache[cacheKey] = finalResult;
    return finalResult;
  },
};
