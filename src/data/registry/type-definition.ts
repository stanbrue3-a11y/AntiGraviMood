/**
 * SURGICAL PLACE DEFINITION 🧬
 * Standard Moelle 2026 — Source de Vérité Absolue
 * 
 * RÈGLES FONDAMENTALES :
 * - Seuls les `restaurant`, `bar` et `café` sont autorisés.
 * - Les subcategories définissent le TYPE DE CUISINE (affiché dans le header de la fiche).
 * - Les prix sont EXCLUSIVEMENT en centimes (`price_cents`).
 * - Le `real_talk` est OBLIGATOIRE sur toute fiche.
 * - Le `must_eat` vit dans `specials.must_eat` (format: "Cuisine [Type]. [Plats]").
 */

// ══════════════════════════════════════════════
// CATÉGORIES STRICTES
// ══════════════════════════════════════════════

/** Seules 3 catégories autorisées dans MoodMap */
export type PlaceCategory = 'restaurant' | 'bar' | 'café';

/**
 * Type de cuisine — Affiché dans le header de la fiche, à droite du mood.
 * Liste fermée. Interdiction d'inventer.
 */
export type CuisineType =
    | 'Français'
    | 'Italien'
    | 'Japonais'
    | 'Coréen'
    | 'Chinois'
    | 'Thaïlandais'
    | 'Vietnamien'
    | 'Indien'
    | 'Libanais'
    | 'Mexicain'
    | 'Péruvien'
    | 'Brésilien'
    | 'Éthiopien'
    | 'Méditerranéen'
    | 'Grec'
    | 'Turc'
    | 'Marocain'
    | 'Américain'
    | 'Africain'
    | 'Caribéen'
    | 'Pakistanais'
    | 'Fusion'
    | 'Fruits de mer'
    | 'Bistronomie'
    | 'Gastronomique'
    | 'Street Food'
    | 'Végétarien'
    | (string & {});

/**
 * Subcategories — Tags de recherche affichés dans le header.
 * Doivent correspondre aux CuisineType en minuscule + quelques descripteurs.
 * Liste fermée (whitelist dans audit_registry.ts).
 */
export type SubcategoryTag =
    | 'français'
    | 'italien'
    | 'japonais'
    | 'coréen'
    | 'chinois'
    | 'thaï'
    | 'vietnamien'
    | 'indien'
    | 'libanais'
    | 'mexicain'
    | 'péruvien'
    | 'brésilien'
    | 'éthiopien'
    | 'méditerranéen'
    | 'grec'
    | 'turc'
    | 'marocain'
    | 'américain'
    | 'africain'
    | 'caribéen'
    | 'pakistanais'

    | 'fruits de mer'
    | 'bistronomie'
    | 'gastronomique'
    | 'street-food'
    | 'végétarien'
    | 'bistrot'
    | 'brasserie'
    | 'pizzeria'
    | 'bar à vin'
    | 'tapas'
    | 'bouillon'
    | (string & {});

export type MoodType = 'chill' | 'festif' | 'culturel';

// ══════════════════════════════════════════════
// STRUCTURES DE DONNÉES
// ══════════════════════════════════════════════

export interface Location {
    address: string;
    arrondissement: number;   // 1-20
    lat: number;
    lng: number;
    nearest_metro: string;
    metro_lines?: (string | number)[];
    google_id: string;        // OBLIGATOIRE — clé d'ancrage unique
}

export interface PracticalInfo {
    reservation_policy: 'sans_resa' | 'resa_conseillee' | 'resa_obligatoire' | null;
    terrace?: boolean;
    viande_exception?: boolean;
    ferme_tard?: boolean;
    accessibility?: boolean;
    opening_hours_raw: string;

    main_action?: {
        type: 'book' | 'shotgun' | 'site';
        url: string;
        label?: string;
    };
    menu_url?: string;
    [key: string]: any;
}

// ══════════════════════════════════════════════
// MOTEUR DE PRIX (price_cents UNIQUEMENT)
// ══════════════════════════════════════════════

export interface MenuItem {
    name: string;
    price_cents?: number;       // Prix en centimes (2400 = 24€)
    description?: string;
    is_highlight?: boolean;     // 2-3 plats signatures max
    format?: 'assiette' | 'verre' | 'bouteille' | 'planche';
}

export interface MenuCategory {
    category_type: 'starter' | 'main' | 'dessert' | 'sharing' | 'drink' | 'tasting_menu' | 'other';
    display_label: string;      // Recopié de la VRAIE carte
    items: MenuItem[];
}

export interface Pricing {
    is_free?: boolean;
    avg_budget?: number;

    // Prix de référence (calculés automatiquement par PriceEngine)
    index_price?: number;
    primary_price_type?: string;
    dish_price?: number;        // Médiane auto-calculée depuis menu_items

    // Prix unitaires observés
    pint_price?: number;
    cocktail_price?: number;
    wine_glass?: number;
    coffee_price?: number;
    force_manual_dish_price?: boolean;
    menu_type?: 'fixed' | 'standard';

    // Extended
    shot_price?: number;
    soft_price?: number;
    planche_price?: number;

    // Happy Hour
    hh_pint?: number | null;
    hh_cocktail?: number | null;
    hh_wine?: number | null;
    hh_time?: string | null;

    // Menu complet (price_cents UNIQUEMENT)
    menu_items?: MenuCategory[];
    smart_tip?: string;

    // Fiabilité
    certification?: 'gold' | 'silver' | 'bronze';
    verified_at?: string;
    last_updated?: string;
}

// ══════════════════════════════════════════════
// FICHE LIEU — INTERFACE MAÎTRE
// ══════════════════════════════════════════════

export interface SurgicalPlace {
    id: string;                 // "poi-XXX"
    name: string;
    slug: string;               // "nom-du-lieu"
    category: PlaceCategory;
    subcategory: SubcategoryTag[];

    // Data
    location: Location;
    pricing: Pricing;
    practical: PracticalInfo;

    // Contenu Éditorial
    description: string;
    expert_catchline?: string;
    insider_tip: string;

    // On Mange Quoi Ici
    specials: {
        cuisine?: CuisineType[];
        drinks?: string[];
        must_eat?: string;        // "Cuisine [Type]. [Plat 1] & [Plat 2]"
        must_drink?: string;
        expert_catchline?: string;
    };

    // Moods (0-100, somme ≈ 100)
    moods: {
        chill: number;
        festif: number;
        culturel: number;
    };

    // Media
    images: {
        hero: string;
        gallery?: string[];
    };

    // Metadata
    verified: boolean;
    google_rating?: number;
    google_reviews_count?: number;
    instagram_handle?: string;
    michelin_stars?: number;

    // Real Talk — OBLIGATOIRE
    real_talk: {
        text: string;
        must_eat: string;
        le_secret: string;
        le_son: string;
        le_must: string;
    };

    [key: string]: any;
}
