import { SurgicalPlace } from '../../../type-definition';

export const ama: SurgicalPlace = {
    id: "poi-ama",
    name: "Ama",
    slug: "ama",
    category: "restaurant",
    subcategory: ["tibetan", "asian", "momos", "authentic"],
    location: {
        address: "28 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.8695859,
        lng: 2.3693877, // Precise geometry from Fontaine au Roi
        nearest_metro: "Bonsergent / Goncourt",
        metro_lines: [5, 11],
        google_id: "ChIJy2v_U6Vz5kcR_p_uE-Ff2-Q"
    },
    moods: {
        chill: 100,
        festif: 20,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Mar-Dim: 12:00–14:30, 19:00–22:30; Fermé Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "https://www.ama-restaurant.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 6.00,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 16.00, // Cambodian bowl + buffer
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Ama 2025 Standard (Tibetan)
            {
                category_type: "other",
                display_label: "Les Momos (Raviolis Tibétains)",
                items: [
                    { name: "Momos Boeuf (x8)", price_cents: 1100, description: "Vapeur ou grillés, avec sauce piquante maison." },
                    { name: "Momos Poulet (x8)", price_cents: 1100 },
                    { name: "Momos Légumes (x8)", price_cents: 1000 },
                    { name: "Momos Fromage & Epinards (x8)", price_cents: 1200 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Signatures",
                items: [
                    { name: "Shaptra", price_cents: 1600, description: "Boeuf sauté au gingembre et piments, servi avec du pain tibétain." },
                    { name: "Thenthuk", price_cents: 1450, description: "Soupe de nouilles tirées à la main, légumes et viande." },
                    { name: "Gyathuk", price_cents: 1500, description: "Nouilles sautées à la tibétaine." }
                ]
            },
            {
                category_type: "other",
                display_label: "Accompagnements",
                items: [
                    { name: "Tingmo (Pain vapeur)", price_cents: 350 },
                    { name: "Salade Tibétaine", price_cents: 600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Thés",
                items: [
                    { name: "Tsampa au miel", price_cents: 700 },
                    { name: "Thé Tibétain (au beurre salé)", price_cents: 450 },
                    { name: "Lassi Maison", price_cents: 550 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXW_a9vHMH8fuWg1i-Tb_Zq_xM_b538cHgDR3P0QaMzsASIOAQ6t7GL3VPGprU6Uzv0TBxHAkmbkypyaAe7K7i6SuxHdtfnxh_0xjTRFllSGXTJzaRUeSuJCdDq_zEXdYXz2G235yZ8gUpxkdkChR_EGwgTibqy-p1nLvbT8s5kgGxE9ncB5Uwf2fHqzboWjkURIyHmeqepPNSH3AAC18FZUAD1KFyccbyYsk249p4ehVVrzvkHoW1J8fmYmJw4nEfR3UFWSXaccjp88mmrzP_32hhJs1eo6OEIYqnYaFMM_Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Une immersion authentique au Tibet au coeur du 11ème. Ama (qui signifie 'mère' en tibétain) propose une cuisine familiale et généreuse. Leurs momos, ces célèbres raviolis farcis, sont préparés chaque jour avec amour et servis avec une sauce piquante dont ils ont le secret. L'ambiance y est calme et spirituelle, parfaite pour une parenthèse loin du tumulte parisien.",
    insider_tip: "Ne partez pas sans goûter le thé au beurre salé (Po Cha), c'est une expérience clivante mais incontournable pour comprendre la culture tibétaine.",
    expert_catchline: "La poésie des momos tibétains et de la cuisine d'altitude.",
    specials: {
        cuisine: ["Tibetan Momos", "Hand-pulled Noodles", "Tingmo Bread"],
        drinks: ["Tibetan Butter Tea", "Homemade Lassi"],
        must_eat: "Les Momos Boeuf grillés.",
        must_drink: "Le thé au beurre salé pour les aventuriers."
    }
};
