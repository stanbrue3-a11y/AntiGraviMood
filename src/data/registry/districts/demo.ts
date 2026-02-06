import { SurgicalPlace } from '../type-definition';

export const demoPlaces: SurgicalPlace[] = [
    {
        id: "poi-demo-001",
        name: "Le Perchoir Marais",
        slug: "le-perchoir-marais",
        category: "bar",
        subcategory: ["rooftop", "cocktail"],

        verified: true,
        google_rating: 4.5,

        location: {
            address: "33 Rue de la Verrerie, 75004 Paris",
            arrondissement: 4,
            lat: 48.8573,
            lng: 2.3533,
            nearest_metro: "Hôtel de Ville", // ✅ CLEAN (Short)
            metro_lines: [1, 11]
        },

        practical: {
            reservation_policy: "resa_obligatoire", // Typed Enum
            accessibility: false,
            wifi: true,
            opening_hours_raw: "Mar-Sam: 20h15-01h30",
            action_type: "site",
            action_url: "https://leperchoir.fr"
        },

        pricing: {
            avg_budget: 3,
            cocktail_price: 15,
            is_free: false
        },

        moods: {
            festif: 90,
            chill: 40,
            culturel: 10
        },

        description: "Un rooftop incontournable avec vue sur l'Hôtel de Ville.", // Short fallback

        // ✨ THE RICH CONTENT
        real_talk: {
            text: "Perché sur le toit du BHV, c'est l'un des rooftops les plus convoités. La vue est dingue, l'ambiance électrique.",
            le_secret: "Arrivez 15min avant l'ouverture pour éviter la queue de 2h.",
            le_son: "Electro-chill puis House progressive.",
            must_eat: "La planche mixte (chère mais bonne)."
        },

        images: {
            hero: "https://example.com/perchoir_hero.jpg",
            gallery: []
        }
    }
];
