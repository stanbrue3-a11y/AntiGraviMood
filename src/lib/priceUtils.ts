import { Place } from '../types/model';
import { isTimeInRange } from './timeUtils';

/**
 * Gets the current active price for a specific item type in a place.
 * Accounts for Happy Hour if applicable.
 */
export const getCurrentPrice = (place: Place, type: 'pint' | 'dish' | 'coffee'): number | null => {
    const pricing = place.pricing;
    if (!pricing) return null;

    const isHH = pricing.hh_time && isTimeInRange(pricing.hh_time);

    switch (type) {
        case 'pint':
            return (isHH && pricing.pint_hh) ? pricing.pint_hh : (pricing.pint_price || null);
        case 'dish':
            return (isHH && pricing.dish_hh) ? pricing.dish_hh : (pricing.main_dish_price || null);
        case 'coffee':
            return (isHH && pricing.coffee_hh) ? pricing.coffee_hh : (pricing.coffee_price || null);
        default:
            return null;
    }
};

/**
 * Calculates price distributions (histograms) for the entire dataset.
 */
export const getPriceDistributions = (places: Place[]) => {
    const pints: number[] = [];
    const dishes: number[] = [];
    const coffees: number[] = [];

    places.forEach(p => {
        if (p.pricing?.pint_price) pints.push(p.pricing.pint_price);
        if (p.pricing?.main_dish_price) dishes.push(p.pricing.main_dish_price);
        if (p.pricing?.coffee_price) coffees.push(p.pricing.coffee_price);
    });

    return {
        pints: pints.sort((a, b) => a - b),
        dishes: dishes.sort((a, b) => a - b),
        coffees: coffees.sort((a, b) => a - b)
    };
};
