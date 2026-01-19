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

// ====== NEW PRICING SYSTEM ======

/** Price highlight for signature items */
export interface PriceHighlight {
    name: string;
    price: number;
}

/** Core pricing data shared by all categories */
export interface PricingBase {
    /** Average budget per person in € */
    budget_avg: number;
    /** Value/quality ratio score (0-100, higher = better deal) */
    value_score: number;
    /** Position in category (0-100, lower = more accessible) */
    category_percentile: number;
    /** Is this a free venue (parks, galleries, etc.) */
    is_free?: boolean;
    /** Display unit for the budget_avg (e.g. "Cocktail signature") */
    unit?: string;
    /** Common price anchors for quick UI access */
    pint_price?: number;     // Prix d'une pinte (pour bar)
    cocktail_price?: number; // Prix d'un cocktail (pour bar/club)
    coffee_price?: number;   // Prix d'un café (pour cafe/coffee-shop)
    main_dish_price?: number; // Prix d'un plat signature/moyen (pour resto)
    fair_price?: number;     // Prix "Juste" estimé par l'IA (pour comparaison contextuelle)
    standing_level?: number; // 0=Populaire, 1=Casual, 2=Hype, 3=Premium, 4=Luxe
    // Happy Hour specific
    pint_hh?: number;
    dish_hh?: number;
    coffee_hh?: number;
    hh_time?: string; // e.g. "17:00-20:00"
    /** Unified Anchor for precise comparison */
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
    /** Glass of wine price in € */
    wine_glass?: number;
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
        metro_line: number[];
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
    /** NEW: Enhanced pricing system */
    pricing?: Pricing;
    practical_info: {
        /** @deprecated Use pricing.budget_avg instead */
        price_range: number;
        reservation_required: boolean;
        wifi_available?: boolean;
        outdoor_seating: boolean;
        accessibility: boolean;
        happy_hour?: string | {
            start: string;
            end: string;
            price: string;
        };
        music_vibe?: string;
        signature_drink?: { name: string; price: string };
        spot_type?: string;
        must_eat?: string;
        average_bill?: string;
        ambiance_vibe?: string;
        booking_policy?: string;
        laptop_policy?: string;
        specialty?: string;
        power_outlets?: string;
        noise_level?: string;
        door_policy?: string;
        entry_fee?: string;
        smoking_area?: string;
        music_genre?: string;
        website?: string;
        price_info?: {
            average_price: number;
            currency: string;
            price_range: number;
            sociology_factor?: number;
            smart_tip?: string;
            items?: Array<{
                category: string;
                items: Array<{ name: string; price: string }>;
            }>;
        };
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
