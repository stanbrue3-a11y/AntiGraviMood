export interface MoodCriteria {
    noise_level?: number;
    seating_comfort?: number;
    natural_light?: number;
    crowd_density?: number;
    music_tempo?: number;
    event_programming?: number;
    dance_space?: number;
    cocktail_offering?: number;
    crowd_energy?: number;
    late_hours?: number;
    architectural_originality?: number;
    artistic_presence?: number;
    cultural_programming?: number;
    creative_clientele?: number;
    workspace_facilities?: number;
}

export interface MoodScore {
    overall: number;
    criteria: MoodCriteria;
}

export type MoodType = 'chill' | 'festif' | 'culturel';

// ====== NEW PRICING SYSTEM ======

/** Price highlight for signature items */
export interface PriceHighlight {
    name: string;
    price: number;
}

/** Core pricing data shared by all categories */
export interface PricingBase {
    budget_avg: number;
    value_score: number;
    category_percentile: number;
    is_free?: boolean;
    unit?: string;
    pint_price?: number;
    cocktail_price?: number;
    wine_glass?: number;
    coffee_price?: number;
    main_dish_price?: number;
    standing_level?: number;
    pint_hh?: number;
    dish_hh?: number;
    coffee_hh?: number;
    hh_time?: string;
    confidence_score?: number;
    last_updated?: string;
    fair_price?: number;
    anchor?: {
        price: number;
        label: string;
        source: string;
    };
}

/** Restaurant-specific pricing */
export interface RestaurantPricing extends PricingBase {
    type: 'restaurant';
    /** Price range for starters [min, max] */
    starter_range?: [number, number];
    /** Price range for mains [min, max] */
    main_range?: [number, number];
    /** Price range for desserts [min, max] */
    dessert_range?: [number, number];
    /** Signature dishes */
    highlights?: {
        signature_dish?: PriceHighlight;
        best_deal?: PriceHighlight;
        must_try_dessert?: PriceHighlight;
    };
}

/** Bar-specific pricing */
export interface BarPricing extends PricingBase {
    type: 'bar';
    /** Cheapest pint price in € */
    pint_price?: number;
    /** Average cocktail price in € */
    cocktail_price?: number;
    /** Happy hour info */
    happy_hour?: {
        start: string;
        end: string;
        discount_percent?: number;
    };
}

/** Café-specific pricing */
export interface CafePricing extends PricingBase {
    type: 'cafe';
    /** Coffee (espresso/allongé) price in € */
    coffee_price?: number;
    /** Lunch formula price in € */
    lunch_formula?: number;
    /** Croissant/pastry price in € */
    pastry_price?: number;
}

/** Club-specific pricing */
export interface ClubPricing extends PricingBase {
    type: 'club';
    /** Entry fee in € */
    entry_fee?: number;
    /** Minimum drink price in € */
    drink_min?: number;
    /** Bottle service starting price in € */
    bottle_service?: number;
}

/** Generic pricing for other categories */
export interface GenericPricing extends PricingBase {
    type: 'generic';
}

/** Union type for all pricing variants */
export type Pricing = RestaurantPricing | BarPricing | CafePricing | ClubPricing | GenericPricing;

export interface RealTalk {
    le_secret?: string;
    le_son?: string;
    la_faune?: string;
    le_must?: string;
    must_eat?: string;
}

// ====== PLACE INTERFACE ======

export interface Place {
    id: string;
    name: string;
    description?: string;
    slug: string;
    location: {
        address: string;
        arrondissement: number;
        coordinates: {
            lat: number;
            lng: number;
        };
        nearest_metro: string;
        metro_lines?: (string | number)[];
        google_id?: string;
    };
    category: string;
    categories?: string[];
    subcategory: string;
    mood_scores: {
        chill: MoodScore;
        festif: MoodScore;
        culturel: MoodScore;
    };
    vibes: string[];
    dominant_mood?: MoodType;
    ui_theme: {
        main_color: string;
        map_icon: string;
    };
    social_preview: {
        like_count: number;
        moment_count: number;
        top_vibe_tags: string[];
    };
    discovery_radius_meters: number;
    min_stay_time_minutes: number;
    editorial?: any;
    pricing?: Pricing;
    real_talk?: RealTalk;
    practical_info: {
        primary_status: 'sans_resa' | 'resa_conseillee' | 'resa_obligatoire' | null;
        tags: string[];
        main_action: {
            type: 'book' | 'shotgun' | 'site';
            url: string;
            label: string;
        } | null;
        accessibility: boolean;
        wifi_available: boolean;
        opening_hours: string;
        price_range: number;
        happy_hour?: string | {
            start: string;
            end: string;
            price: string;
        };
        must_eat?: string;
        signature_drink?: string | { name: string; price: string };
        ambiance_vibe?: string;
        specialty?: string;
        smart_tip?: string;
        entry_fee?: string;
    };
    opening_hours?: {
        standard: string;
        display?: string;
        detailed?: string;
        is_open_now?: boolean;
    };
    media: {
        hero_image: string;
        instagram_handle: string | null;
        google_photos?: string[];
    };
    google_rating?: number;
    google_user_ratings_total?: number;
    ai_insights?: {
        best_moment?: { text: string; icon?: string; tag?: string };
        social_vibe?: { text: string; icon?: string; tag?: string };
        culture_snack?: { text: string; icon?: string; tag?: string };
        vivant_tip?: { text: string; icon?: string; tag?: string };
    };
}

// ====== SOCIAL MODELS ======

export interface User {
    id: string;
    email?: string;
    name: string;
    username: string;
    avatar: string;
    bio?: string;
    location?: string;
}

export interface Moment {
    id: string;
    placeId: string;
    placeName: string;
    imageUri: string;
    caption: string;
    mood: MoodType;
    type: 'image' | 'video';
    timestamp: number;
    user: User;
    likes: number;
    isLikedByMe: boolean;
    verbatimDate?: string;
}
