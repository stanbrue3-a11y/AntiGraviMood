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
    practical_info: {
        price_range: number;
        reservation_required: boolean;
        wifi_available: boolean;
        outdoor_seating: boolean;
        accessibility: boolean;
        happy_hour?: {
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
    };
    media: {
        hero_image: string;
        instagram_handle: string | null;
        google_photos?: string[];
    };
    ai_insights?: {
        best_moment?: { text: string; icon?: string; tag?: string };
        social_vibe?: { text: string; icon?: string; tag?: string };
        culture_snack?: { text: string; icon?: string; tag?: string };
        vivant_tip?: { text: string; icon?: string; tag?: string };
    };
}
