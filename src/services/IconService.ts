import { Place } from '../types/model';

/**
 * IconService
 * Centralizes the chameleon logic for category icons.
 * Ensuring consistency between the Map, List, and Detail views.
 */

export type IconCategory =
    | 'beer'
    | 'wine'
    | 'cocktail'
    | 'cafe'
    | 'restaurant'
    | 'lodging'
    | 'music'
    | 'palette'
    | 'leaf'
    | 'museum'
    | 'star';

export const IconService = {
    /**
     * Resolve the icon category based on the place data.
     */
    getIconCategory: (place: Place): IconCategory => {
        const cat = (place.category || '').toLowerCase();
        const subString = (Array.isArray(place.subcategory)
            ? place.subcategory.join(' ')
            : (place.subcategory || '')).toLowerCase();

        // 1. Bars & Drinks
        if (['bar', 'pub', 'biergarten', 'wine_bar', 'rooftop'].includes(cat)) {
            if (subString.includes('wine') || subString.includes('vin') || subString.includes('cave')) return 'wine';
            if (subString.includes('cocktail') || subString.includes('mixolog')) return 'cocktail';
            return 'beer';
        }

        // 2. Coffee & Sweets
        if (['cafe', 'café', 'coffee_shop', 'tea_house', 'bakery', 'boulangerie', 'patisserie', 'ice_cream', 'salon-de-the'].includes(cat)) {
            return 'cafe';
        }

        // 3. Food
        if (['restaurant', 'food', 'meal', 'bistro', 'snack', 'fast_food', 'brasserie', 'italian-restaurant'].includes(cat)) {
            return 'restaurant';
        }

        // 4. Nightlife & Music
        if (['club', 'nightclub', 'disco', 'concert', 'live_music', 'boite-de-nuit'].includes(cat)) {
            return 'music';
        }

        // 5. Arts & Culture
        if (['espace-culturel', 'art_gallery', 'workshop', 'exhibition', 'arts_centre', 'library', 'theatre', 'cinema', 'gallery'].includes(cat)) {
            return 'palette';
        }

        // 6. Parks & Outdoors
        if (['parc', 'park', 'garden', 'forest', 'plaza', 'square', 'gym', 'yoga', 'sport', 'beach', 'lake'].includes(cat)) {
            return 'leaf';
        }

        // 7. Sights & Landmarks
        if (['museum', 'monument', 'landmark', 'church', 'castle', 'tourist_attraction', 'point_of_interest'].includes(cat)) {
            return 'museum';
        }

        // 8. Hotels
        if (['hotel'].includes(cat)) {
            return 'lodging';
        }

        return 'star';
    }
};
