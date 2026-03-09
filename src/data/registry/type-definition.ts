/**
 * SURGICAL PLACE DEFINITION 🧬
 * Strict TypeScript types for Data-as-Code pipeline.
 * Forces validation at compile time.
 */

// Basic Types
export type MoodType = 'chill' | 'festif' | 'culturel';
export type PlaceCategory = 'bar' | 'restaurant' | 'café' | 'club' | 'museum' | 'exhibition' | 'parc' | 'monument' | 'culture';

// Strict Enums for Structured Data
export type CuisineType =
    | 'Français'
    | 'Italien'
    | 'Japonais'
    | 'Coréen'
    | 'Mexicain'
    | 'Végétarien'
    | 'Burger'
    | 'Pizza'
    | 'Fruits de mer'
    | 'Street Food'
    | 'Patrimoine'
    | 'Autre'
    | (string & {});

export type BeverageType =
    | 'Bière'
    | 'Vin'
    | 'Cocktail'
    | 'Café'
    | 'Thé'
    | 'Soft';

// Allow registry to carry free-form beverage taxons during migration
export type BeverageTypeFlexible = BeverageType | (string & {});

export interface Location {
    address: string;          // Must be > 5 chars
    arrondissement: number;   // 1-20
    lat: number;
    lng: number;
    nearest_metro: string;    // MAX 60 chars
    metro_lines?: (string | number)[]; // Array of short strings/numbers
    google_id?: string;       // For deep links & persistence
}

export interface PracticalInfo {
    reservation_policy: 'sans_resa' | 'resa_conseillee' | 'resa_obligatoire' | null;
    accessibility: boolean;
    wifi: boolean;
    vegan_friendly?: boolean;
    terrace?: boolean;
    opening_hours_raw: string; // "Lundi: 10h-20h..."

    // Actions (Industrial 2026 Standard) 🧬
    main_action?: {
        type: 'book' | 'shotgun' | 'site';
        url: string;
        label?: string; // e.g. "RÉSERVER", "SHOTGUN"
    };
    menu_url?: string; // Direct link to PDF/Menu page
    cuisine_type?: string;
    price_info?: {
        smart_tip?: string;
        items: {
            category: string;
            items: { name: string; price: string; description?: string }[];
        }[];
    };
}

// Surgical Price Index (Fact-Only Prices)
export interface Pricing {
    is_free?: boolean;

    // Legacy/registry-level budget index (1..4 etc)
    avg_budget?: number;

    // Core representative prices (MANDATORY for industrial scaling)
    index_price?: number;     // Factual price of the representative item
    primary_price_type?: string;
    pint_price?: number;     // Standard pint (Beer bars)
    cocktail_price?: number; // Signature cocktail (Bar/Club)
    wine_glass?: number;     // Standard glass (Wine bars)
    coffee_price?: number;   // Espresso price (Cafés)
    dish_price?: number;     // Main representative dish (Restaurants)
    force_manual_dish_price?: boolean; // Bypass algorithmic median calculation when required
    menu_type?: 'fixed' | 'standard'; // 'fixed' = tasting/set menu only (Septime, Pianovins). Exempts from minimum items gate.

    // Extended prices
    shot_price?: number;
    soft_price?: number;
    planche_price?: number;

    // Happy Hour
    hh_pint?: number;
    hh_cocktail?: number;
    hh_wine?: number;
    hh_time?: string;        // "18h-20h" or "lun-ven 18h-20h"

    // Full menu (Strictly factual)
    menu_items?: {
        category: string;
        items: { name: string; price: string; description?: string }[];
    }[];
    smart_tip?: string;

    // Reliability Metadata
    verified_at?: string;    // ISO Date "YYYY-MM-DD"
    last_updated?: string;   // ISO Date (Internal pipeline)
}

// THE MASTER INTERFACE
export interface SurgicalPlace {
    id: string;               // "poi-XXX"
    name: string;
    slug: string;             // "nom-du-lieu"
    category: PlaceCategory;
    subcategory: string[];    // Keep for legacy/search tags

    // Data
    location: Location;
    pricing: Pricing;
    practical: PracticalInfo;

    // Content (Simplified & Rich 2026 Standard)
    description: string;      // "Histoire et lieu (Mini Fiche)" - Paragraph format
    expert_catchline?: string; // "On mange quoi ?" - Editorial summary (Ami qui sait)
    insider_tip: string;      // "L'apparté de l'initié" - Tips & Must Eat

    // Structured Offerings
    specials: {
        cuisine?: CuisineType[];
        drinks?: BeverageTypeFlexible[];
        must_eat?: string;    // Moved to insider_tip but kept here for data pipeline logic
        must_drink?: string;
        expert_catchline?: string;
    };

    // Moods (0-100)
    moods: {
        chill: number;
        festif: number;
        culturel: number;
    };

    // Media
    images: {
        hero: string;         // URL
        gallery?: string[];
    };

    // Metadata
    verified: boolean;
    google_rating?: number;
    instagram_handle?: string;
    michelin_stars?: number; // 1, 2, or 3 stars

    // Data Provenance 🧬
    source?: 'expert_human' | 'research_ai' | 'to_be_verified';
}
