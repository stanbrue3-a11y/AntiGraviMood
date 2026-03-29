import { SurgicalPlace } from '../../../type-definition';

export const chulita: SurgicalPlace = {
    id: "poi-chulita",
    name: "Chulita",
    slug: "chulita",
    category: "restaurant",
    subcategory: ["mexican", "torteria", "street-food", "fusion"],
    location: {
        address: "41 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8660342,
        lng: 2.3734007,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJKZp8N6Vz5kcRp6L3VPGprU0"
    },
    moods: {
        chill: 85,
        festif: 60,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30; Fermé Lun-Dim",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/chulitaparis",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 18,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 17.50, // 3 Tacos + drink
        // Unité de Satiété (Torta + Share side equivalent)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Chulita Paris 2024-2025 (Torteria Mexicana)
            {
                category_type: "other",
                display_label: "Les Tortas (Sandwichs Mexicains)",
                items: [
                    { name: "Torta Barbacoa", price_cents: 1200, description: "Joue & langue de boeuf confites 6h, haricots, avocat." },
                    { name: "Torta Cochinita", price_cents: 1150, description: "Porc mariné à l'achiote et orange, oignons pickles." },
                    { name: "Torta Milanesa de Pollo", price_cents: 1250, description: "Poulet pané, fromage fondu, chipotle mayo." },
                    { name: "Torta Veggie de Saison", price_cents: 1100, description: "Légumes grillés, fromage frais, guacamole." }
                ]
            },
            {
                category_type: "other",
                display_label: "Street Food & Sides",
                items: [
                    { name: "Guacamole & Chips Noirs", price_cents: 750 },
                    { name: "Aguachile (Ceviche Mexicain)", price_cents: 1400 },
                    { name: "Quesadilla du moment", price_cents: 900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs",
                items: [
                    { name: "Churros & Dulce de Leche", price_cents: 650 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Agua Fresca Hibiscus", price_cents: 450 },
                    { name: "Jarritos (Sodas Mexicains)", price_cents: 500 },
                    { name: "Mezcal Sour", price_cents: 1100 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVnMrgLoUzMfKmc-bEu6VicptuxWJ77mFq-AwAHQZdMwolTX9ltWkCQbdScYw3Ly_8tA-hiIgJBzyKap3MRHvZIMI2YAjDLwrN2BLiQiLh-gJlmt10Y4sNdJmFCbZFypaddb5JTLc71A9DtuuQlu7_lrOCQyCYTg3mEefzeM7SH2UFOFgR4mne-QwNUQWZXjNSD-rRA2mrccicC4m8J1C_9_EUJ-Mgh-tcyvwgKOm4qZSD9XAYj3sCsmD4mnGIn5nysPTg-cB3RfhBGWWU0CIhxj7YMRKmlupRb2Yy_8GxYQA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Chulita est la première véritable torteria de Paris. Oubliez les tacos, ici la star est la 'torta', ce sandwich mexicain généreux servi dans un pain telera rond et moelleux. Fondé par une équipe de passionnés, le lieu propose des recettes traditionnelles (Barbacoa, Cochinita) revisitées avec des produits de haute qualité. Un comptoir vibrant sur la rue Jean-Pierre Timbaud.",
    insider_tip: "Le pain est incroyablement aérien mais il absorbe vite les jus. Mangez votre torta sur place pour profiter du contraste entre le pain toasté et la garniture fondante. Accompagnez le tout d'une Agua Fresca maison.",
    expert_catchline: "La révolution de la torta mexicaine au coeur du 11ème.",
    specials: {
        cuisine: ["Tortas artisanales", "Mexica street food", "Telera bread"],
        drinks: ["Agua Fresca", "Jarritos", "Mexican Cocktails"],
        must_eat: "La Torta Barbacoa, une profondeur de goût exceptionnelle.",
        must_drink: "L'Agua Fresca Hibiscus, très désaltérante."
    }
};
