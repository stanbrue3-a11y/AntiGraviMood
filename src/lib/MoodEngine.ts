import { logger } from './logger';
// @ts-ignore
import * as FlexSearch from 'flexsearch';
import { Place, MoodType } from '../types/model';

/**
 * MOOD ENGINE v2.0 (Haussmann Edition)
 * Unified semantic search engine based on FlexSearch.
 * Combines full-text indexing with specific MoodMap relevance scoring.
 */

// Singleton instance
let index: any = null;
let lastDataLength = 0;
let searchCache: Record<string, Place[]> = {};

const MOOD_KEYWORDS: Record<MoodType, string[]> = {
    chill: ['calme', 'cosy', 'posé', 'détente', 'lecture', 'café', 'silence', 'intimiste', 'douceur', 'repos'],
    festif: ['ambiance', 'fête', 'danse', 'cocktails', 'musique', 'bouge', 'rencontre', 'bruit', 'vibrant', 'énergie'],
    culturel: ['art', 'histoire', 'expo', 'musée', 'savoir', 'découverte', 'patrimoine', 'exposition', 'galerie', 'théâtre']
};

export const MoodEngine = {
    /**
     * Initialise ou met à jour l'index si les données ont changé
     */
    init: (places: Place[]) => {
        if (index && places.length === lastDataLength) return;

        const FlexSearchClass = (FlexSearch as any).default || FlexSearch;
        const DocumentClass = (FlexSearchClass as any).Document || (FlexSearch as any).Document;

        index = new DocumentClass({
            cache: true,
            doc: {
                id: "id",
                field: [
                    "name",
                    "vibes",
                    "category",
                    "subcategory",
                    "description",
                    "specialty"
                ]
            }
        });

        places.forEach(place => {
            const vibes = place.vibes?.join(" ") || "";
            const specialty = place.practical_info?.specialty || "";

            index.add({
                id: place.id,
                name: place.name,
                vibes: vibes,
                category: place.category,
                subcategory: Array.isArray(place.subcategory) ? place.subcategory.join(" ") : place.subcategory,
                description: place.description || "",
                specialty: specialty
            });
        });

        lastDataLength = places.length;
        logger.log('🧠 [MoodEngine] Haussmann Index Ready.');
    },

    /**
     * Recherche les lieux correspondant à la query avec calcul de pertinence
     */
    search: (places: Place[], query: string, limit = 20): Place[] => {
        if (!index || !query || query.length < 2) return [];

        const cacheKey = `${query}_${places.length}`;
        if (searchCache[cacheKey]) return searchCache[cacheKey];

        const lowQuery = query.toLowerCase();
        // ... index.search etc ...
        const results = index.search(query, { limit: limit * 2, enrich: true, bool: "or" });

        const matchIds = new Set<string>();
        results.forEach((fieldResult: any) => {
            fieldResult.result.forEach((item: any) => matchIds.add(item.id));
        });

        const scoredPlaces = places
            .filter(p => matchIds.has(p.id))
            .map(place => {
                let score = 0;
                const name = place.name.toLowerCase();
                const category = (place.category || '').toLowerCase();
                const vibes = (place.vibes || []).join(' ').toLowerCase();

                if (name === lowQuery) score += 100;
                else if (name.includes(lowQuery)) score += 50;
                if (category.includes(lowQuery)) score += 40;

                Object.entries(MOOD_KEYWORDS).forEach(([mood, keywords]) => {
                    if (keywords.some(k => lowQuery.includes(k) || k.includes(lowQuery))) {
                        if (place.dominant_mood === mood) score += 30;
                    }
                });

                if (vibes.includes(lowQuery)) score += 20;
                return { place, score };
            });

        const finalResult = scoredPlaces
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(s => s.place);

        searchCache[cacheKey] = finalResult;
        return finalResult;
    }
};
