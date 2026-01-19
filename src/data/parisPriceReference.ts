/**
 * PARIS PRICE REFERENCE DATA
 * ===========================
 * 
 * Ces valeurs sont des estimations internes basées sur 
 * des observations terrain à Paris en 2024-2025.
 * 
 * MÉTHODOLOGIE:
 * - "average_price" = Prix moyen typique pour une expérience standard
 * - On compare le prix du lieu vs cette moyenne pour obtenir le "score pince"
 * 
 * FORMULE:
 * deviation = ((place_price - category_average) / category_average) * 100
 * pinceScore = 50 - deviation (clampé entre 0 et 100)
 * 
 * Exemple:
 * - Bouillon Chartier: 15€ (repas)
 * - Moyenne resto Paris: 28€
 * - deviation = ((15-28)/28)*100 = -46%
 * - pinceScore = 50 - (-46) = 96 → "PINCE-M'EN UNE!"
 */

export interface CategoryPriceReference {
    /** Prix moyen observé à Paris pour cette catégorie */
    average: number;
    /** Ce que ce prix représente (ex: "Repas complet avec boisson") */
    description: string;
    /** Fourchette basse (bon plan) */
    low: number;
    /** Fourchette haute (premium) */
    high: number;
    /** Source de la donnée */
    source: string;
    /** Date de dernière mise à jour */
    lastUpdated: string;
}

/**
 * MOYENNES PARIS PAR CATÉGORIE
 * Données recherchées et vérifiées - Janvier 2025
 */
export const PARIS_PRICE_REFERENCE: Record<string, CategoryPriceReference> = {

    // ═══════════════════════════════════════════════════════
    // RESTAURANTS
    // ═══════════════════════════════════════════════════════
    restaurant: {
        average: 28,
        description: "Repas complet (entrée OU dessert + plat + boisson)",
        low: 15,      // Bouillons, cantines
        high: 50,     // Bistronomie accessible
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    bistrot: {
        average: 32,
        description: "Menu du midi ou formule complète",
        low: 18,
        high: 45,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    gastronomique: {
        average: 80,
        description: "Menu dégustation ou repas gastronomique",
        low: 55,
        high: 150,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // CAFÉS
    // ═══════════════════════════════════════════════════════
    cafe: {
        average: 7,
        description: "Café + viennoiserie OU boisson chaude + petit snack",
        low: 4,       // Café PMU de quartier
        high: 12,     // Café iconique (Flore, Deux Magots)
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "coffee-shop": {
        average: 8,
        description: "Café de spécialité + petite pâtisserie",
        low: 5,
        high: 14,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "coworking-cafe": {
        average: 6,
        description: "Tarif horaire (souvent tout inclus)",
        low: 4,
        high: 10,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    bakery: {
        average: 6,
        description: "Petit-déjeuner boulangerie (pain + viennoiserie + boisson)",
        low: 3,
        high: 10,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // BARS
    // ═══════════════════════════════════════════════════════
    bar: {
        average: 8,
        description: "Pinte 50cl ou verre de vin",
        low: 5,       // Bar de quartier, happy hour
        high: 14,     // Bar à cocktails premium
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "bar-a-vin": {
        average: 8,
        description: "Verre de vin (15cl) ou ballon",
        low: 4,       // Baron Rouge, vrac
        high: 15,     // Caves premium
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "cocktail-bar": {
        average: 14,
        description: "Cocktail signature",
        low: 10,
        high: 20,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    speakeasy: {
        average: 16,
        description: "Cocktail artisanal",
        low: 12,
        high: 22,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "hotel-bar": {
        average: 18,
        description: "Cocktail ou verre de vin",
        low: 12,
        high: 28,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // CLUBS
    // ═══════════════════════════════════════════════════════
    club: {
        average: 14,
        description: "Entrée standard (sans réservation table)",
        low: 10,      // Avant minuit
        high: 25,     // Clubs premium, weekend
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "techno-club": {
        average: 15,
        description: "Entrée soirée clubbing",
        low: 12,
        high: 25,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // CULTURE
    // ═══════════════════════════════════════════════════════
    museum: {
        average: 14,
        description: "Entrée plein tarif",
        low: 0,       // Musées gratuits (1er dimanche)
        high: 22,     // Expo exceptionnelle
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    "art-gallery": {
        average: 0,
        description: "Entrée (souvent gratuit)",
        low: 0,
        high: 10,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    theatre: {
        average: 35,
        description: "Place standard (non premium)",
        low: 15,      // Petites salles, off
        high: 80,     // Théâtres nationaux
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    cinema: {
        average: 12,
        description: "Séance normale",
        low: 7,       // Tarif réduit, matin
        high: 16,     // IMAX, Dolby Cinema
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    concert: {
        average: 25,
        description: "Concert salle moyenne",
        low: 10,      // Petite jauge
        high: 80,     // Grosses productions
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // PARCS & JARDINS
    // ═══════════════════════════════════════════════════════
    park: {
        average: 0,
        description: "Accès libre",
        low: 0,
        high: 0,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    },

    // ═══════════════════════════════════════════════════════
    // HÔTELS (pour les bars d'hôtels principalement)
    // ═══════════════════════════════════════════════════════
    hotel: {
        average: 18,
        description: "Cocktail au bar de l'hôtel",
        low: 12,
        high: 30,
        source: "Estimation interne 2025",
        lastUpdated: "2025-01"
    }
};

/**
 * Récupère la référence de prix pour une catégorie donnée
 * Avec fallback intelligent
 */
export const getPriceReference = (category: string): CategoryPriceReference => {
    const normalized = category.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');

    // Cherche exact match
    if (PARIS_PRICE_REFERENCE[normalized]) {
        return PARIS_PRICE_REFERENCE[normalized];
    }

    // Fallbacks intelligents
    if (normalized.includes('cafe') || normalized.includes('coffee')) {
        return PARIS_PRICE_REFERENCE.cafe;
    }
    if (normalized.includes('bar') || normalized.includes('pub')) {
        return PARIS_PRICE_REFERENCE.bar;
    }
    if (normalized.includes('resto') || normalized.includes('bistro') || normalized.includes('bouillon')) {
        return PARIS_PRICE_REFERENCE.restaurant;
    }
    if (normalized.includes('club') || normalized.includes('techno')) {
        return PARIS_PRICE_REFERENCE.club;
    }
    if (normalized.includes('musee') || normalized.includes('museum') || normalized.includes('galerie')) {
        return PARIS_PRICE_REFERENCE.museum;
    }

    // Default
    return PARIS_PRICE_REFERENCE.restaurant;
};

/**
 * Calcule le score "Pince" (0-100)
 * 100 = Super bon plan, 0 = Très cher
 */
export const calculatePinceScore = (
    placePrice: number,
    categoryAverage: number
): number => {
    if (categoryAverage === 0) return 50; // Gratuit = neutre
    const deviation = ((placePrice - categoryAverage) / categoryAverage) * 100;
    return Math.min(100, Math.max(0, 50 - deviation));
};

/**
 * Retourne le label "Pince" en fonction du score
 */
export const getPinceLabel = (score: number): string => {
    if (score >= 85) return "PINCE-M'EN UNE !";
    if (score >= 70) return "SUPER PINCE";
    if (score >= 55) return "BONNE PINCE";
    if (score >= 45) return "PINCE STANDARD";
    if (score >= 30) return "ÇA PINCE UN PEU...";
    if (score >= 15) return "AÏE, ÇA PINCE !";
    return "ÇA PINCE SÉVÈRE !";
};
