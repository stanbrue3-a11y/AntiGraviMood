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
    | 'Autre';

export type BeverageType =
    | 'Bière'
    | 'Vin'
    | 'Cocktail'
    | 'Café'
    | 'Thé'
    | 'Soft';

export interface Location {
    address: string;          // Must be > 5 chars
    arrondissement: number;   // 1-20
    lat: number;
    lng: number;
    nearest_metro: string;    // MAX 60 chars
    metro_lines?: (string | number)[]; // Array of short strings/numbers
}

export interface PracticalInfo {
    reservation_policy: 'sans_resa' | 'resa_conseillee' | 'resa_obligatoire' | null;
    accessibility: boolean;
    wifi: boolean;
    vegan_friendly?: boolean;
    terrace?: boolean;
    opening_hours_raw: string; // "Lundi: 10h-20h..."

    // Actions
    action_type?: 'book' | 'shotgun' | 'site';
    action_url?: string;
    cuisine_type?: string;
    price_info?: {
        smart_tip?: string;
        items: {
            category: string;
            items: { name: string; price: string }[];
        }[];
    };
}

export interface Pricing {
    avg_budget: number; // 1-4
    is_free?: boolean;
    pint_price?: number;
    cocktail_price?: number;
    coffee_price?: number;
    dish_price?: number;
    last_updated?: string; // ISO Date "YYYY-MM-DD"
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

    // Content (Simplified & Rich)
    description: string;      // "Histoire et lieu (Mini Fiche)" - Paragraph format
    insider_tip: string;      // "L'apparté de l'initié"

    // Structured Offerings (New)
    specials: {
        cuisine?: CuisineType[];
        drinks?: BeverageType[];
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
}
