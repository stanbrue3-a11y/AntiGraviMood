import { Place } from '../types/model';
import { MoodType } from '../design/tokens/colors';

export const getDominantMood = (place: Place): MoodType => {
    // 1. Enforce Category Rules
    if (['museum', 'exhibition', 'gallery', 'theatre', 'espace-culturel', 'workshop', 'monument'].includes(place.category) ||
        (place.subcategory && ['musee-art-contemporain', 'musee-science', 'centre-art', 'friche-culturelle'].some(sub => place.subcategory.includes(sub)))) {
        return 'culturel';
    }

    if (['café', 'coffee-shop', 'salon-de-the'].includes(place.category)) {
        return 'chill';
    }

    if (['club', 'boite-de-nuit'].includes(place.category)) {
        return 'festif';
    }

    // 2. Score Comparison for others (Bar, Restaurant, Park)
    if (!place.mood_scores) return 'chill';
    const { chill, festif, culturel } = place.mood_scores;

    // Default fallback scores if missing
    const chillScore = chill?.overall || 0;
    const festifScore = festif?.overall || 0;
    const culturelScore = culturel?.overall || 0;

    // Prioritize Festif vs Chill for bars/restos
    // Culturel score is largely ignored for these unless it's overwhelmingly high and relevant (rare)
    if (festifScore >= chillScore) return 'festif';
    return 'chill';
};
