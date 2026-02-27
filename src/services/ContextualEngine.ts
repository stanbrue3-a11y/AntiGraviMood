import { Place, PlaceSkeleton, MoodType } from '../types/model';
import { IconService, IconCategory } from './IconService';

export const ContextualEngine = {
    /**
     * Resolves the primary category for rendering logic based on active filters and place properties.
     */
    resolveContextualCategory(place: Place | PlaceSkeleton, activeCategories: string[]): string {
        const pCat = (place.category || '').toLowerCase();
        const subs = Array.isArray(place.subcategories) ? place.subcategories : [];
        const subStr = subs.join(' ').toLowerCase();

        // If the active filter specifically looks for 'bar' and this place supports it
        if (activeCategories.includes('bar') && !activeCategories.includes('restaurant')) {
            if (
                pCat === 'bar' ||
                subs.includes('bar') ||
                subs.includes('pub') ||
                subStr.includes('wine') ||
                subStr.includes('cocktail') ||
                subStr.includes('brasserie') ||
                subStr.includes('bistro') ||
                pCat === 'café'
            ) {
                return 'bar';
            }
        }

        // If the active filter looks for 'restaurant'
        if (activeCategories.includes('restaurant') && !activeCategories.includes('bar')) {
            if (
                pCat === 'restaurant' ||
                subs.includes('restaurant') ||
                subStr.includes('brasserie') ||
                subStr.includes('bistro') ||
                pCat === 'bouillon'
            ) {
                return 'restaurant';
            }
        }

        // Fall back to its primary category
        return pCat;
    },

    /**
     * Resolves the mood based on the active contextual category.
     * Bars tend to be festive, restaurants tend to be chill or culturel.
     */
    resolveMood(place: Place | PlaceSkeleton, activeCategories: string[]): MoodType {
        const contextualCategory = this.resolveContextualCategory(place, activeCategories);
        const pCat = (place.category || '').toLowerCase();

        // If it's a restaurant primarily but we are viewing it as a bar context -> make it festive or chill
        if (contextualCategory === 'bar' && pCat !== 'bar') {
            return 'festif'; // Hybrid resto-bar viewed as a bar is festive
        }

        // If it's a bar primarily but we view it as a restaurant context -> make it chill
        if (contextualCategory === 'restaurant' && pCat !== 'restaurant') {
            return 'chill'; // Hybrid bar-resto viewed as a restaurant is chill
        }

        return place.dominant_mood || 'chill';
    },

    /**
     * Resolves the icon based on the active contextual category.
     */
    resolveIconCategory(place: Place | PlaceSkeleton, activeCategories: string[]): IconCategory {
        const contextualCategory = this.resolveContextualCategory(place, activeCategories);
        const subs = Array.isArray(place.subcategories) ? place.subcategories : [];

        if (contextualCategory === 'bar') {
            if (subs.includes('wine') || subs.includes('vin') || subs.includes('cave') || subs.includes('wine_bar')) return 'wine';
            if (subs.includes('cocktail') || subs.includes('mixolog')) return 'cocktail';
            return 'beer';
        }

        if (contextualCategory === 'restaurant') {
            return 'restaurant';
        }

        return IconService.getIconCategory(place);
    }
};
