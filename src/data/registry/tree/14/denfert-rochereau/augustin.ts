import { SurgicalPlace } from "../../../type-definition";

export const augustin: SurgicalPlace = {
    id: "poi-augustin",
    name: "Augustin",
    slug: "augustin-bistrot-14",
    category: "restaurant",
    subcategory: ["bistronomique", "français", "moderne", "produits de saison", "restaurant"],
    location: {
        address: "79 Rue Daguerre, 75014 Paris",
        arrondissement: 14,
        lat: 48.8355077,
        lng: 2.3249323,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6],
        google_id: "ChIJjRK57rVx5kcRGrW2O9Bq6XQ"
    },
    moods: {
        chill: 60,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:30, 19:30–22:30 | Mardi: 12:00–14:30, 19:30–22:30 | Mercredi: 12:00–14:30, 19:30–22:30 | Jeudi: 12:00–14:30, 19:30–22:30 | Vendredi: 12:00–14:30, 19:30–22:30 | Samedi: Fermé | Dimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.augustin-bistrot.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 3.00,
        dish_price: 24.00, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Entrées (Sourcing Direct)",
                items: [
                    { name: "Terrine de lapin de chez 'Pépé', compotée d'oignons rouges", price: "14.00€" },
                    { name: "Tartare de dorade royale aux agrumes & aneth", price: "14.00€" },
                    { name: "Six escargots de Bourgogne au beurre persillé Maison", price: "14.00€" },
                    { name: "Velouté de châtaignes, éclats de noisettes, croûtons", price: "14.00€" },
                    { name: "Burratina des Pouilles, huile de basilic", price: "14.00€" },
                    { name: "Salade de haricots verts, amandes & fêta", price: "12.00€" }
                ]
            },
            {
                category: "Plats de Résistance (Bistronomie du Chef)",
                items: [
                    { name: "Côte de Cochon du Cantal, purée à la truffe noire", price: "32.00€", description: "Le plat emblématique du bistrot." },
                    { name: "Filet de bar rôti à la plancha, légumes oubliés", price: "24.00€" },
                    { name: "Pavé de cabillaud sauvage, risotto crémeux aux petits pois", price: "24.00€" },
                    { name: "Tartare de bœuf charolais préparé au couteau", price: "24.00€" },
                    { name: "Quasi de veau fermier déglacé au porto", price: "24.00€" },
                    { name: "Magret de canard rôti au miel & épices", price: "24.00€" },
                    { name: "Risotto Arborio aux champignons des bois (Végé)", price: "22.00€" }
                ]
            },
            {
                category: "Formules & Menus Gourmets",
                items: [
                    { name: "Menu Carte Complet (E+P+D)", price: "42.00€" },
                    { name: "Formule Déjeuner (E+P ou P+D)", price: "34.00€" },
                    { name: "Assiette de fromages affinés par nos soins", price: "15.00€" }
                ]
            },
            {
                category: "Desserts Signature",
                items: [
                    { name: "Vacherin glacé aux framboises fraîches", price: "12.00€" },
                    { name: "Moelleux au chocolat Guanaja, glace vanille", price: "14.00€" },
                    { name: "Authentique Baba au rhum 'Augustin'", price: "12.00€" },
                    { name: "Riz au lait grand-mère au caramel beurre salé", price: "12.00€" },
                    { name: "Ile flottante à la fève tonka", price: "10.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV8wF4Ox9DtQIw0h85RrezXge2dVEjR4lv_8fJw6CRiW8P4G92rCGP6R6FQC6dwSK0SbTq2DG66d0aEiswxcO1ewsCY9wBnWjS0iU8_OfLHvJ_w8vGUDg9KmiXAk1E_7698IFuIRoT2CCJAK6HYRZbVdL-jiADl5FqAJ6u35e6SrWMfS-k7Bc-lDdeTGwCUsaESd6o3Mk6ohw2t8C-l7ctADbfMwusYeLElFzxL-EYZ3PZ_MnzM5wwKo3EMQAc-PZOFGb3uUWaDCA3KQ3jannDbBtYJdY-4Pp5H3UOsb5NyIg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWeLBAIOwEreFVzA_9T5aX3o1rd9yrBEdPOxaF52XoXNXViOBDOXTS2MXEc-rG_vwYZP3PQi85rfhNEkHhjtkeHHZc_IsqCEm8J5qgXonS5X-Qrri-8Qb5aje2I2sXkK3OP0Vk2P82bYQAov_55QF4mYhkkJ5GaDbzwXZo9F8kkJzAiv2wiRM0KYxfR_tZ_gmdVLCBQntalDf5pnlgzd1TqcULy7HdAG8mkexeKQUSDP3UB60f6qG_UgJxiG6zgX9RJW5PaBK7EAirjsciI8AD4Q3vqnjQa1abvfqV8ELuiDBCrunUDS5QeNHoMLzvmB1PIqVBXO0gsEojZSmcPwPG0dnzoaaRW_4hu9B-P8DbSU78IAjQ5RJp-VWA1YHQ__yMm35eBk04VYH4QbRnEP-oEHwhrM4A30jRzLbKvXCLzk1_qVTEz7rmBcNw3X5-l&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXhkMt-nyyemnY1coPnbXJabKfBaKNndmfFD-ZNJ6N9NdMfbhYB-qPYC6zdYrxH8pikcGniR5uFdbrm9AKVdfF55G8K8AHM7XDA22rrTFiDpxchOUk87JDDE8ROTkxNOafGBwvYrd-wv_h22IROqEL9wd7Su9xPX9VvMmWbFE8bNBocsHQwA4rRXj6Rvasa3nGcKH7G9FVwRR-GnLFihSLt1IJTBxPcyehufAECnePFjevq6LCyehGxKwSKYNXyGl2V0ByaUhHaC4GuiRvce_BQkWjOn0Vg08oYWHqtiBrOIDNskgoJmm4o8EhafY9TjWUWw92sq9NU_Xfv0gXIz2u5IAiBzmcLP0YCRdPqSufBoEOarxZfVHFVL8mfr93ynQykm4jrJ0yo1lrdkjksyU26XFJgE0epwshRqnY-9Oh0xo3s&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Augustin est le joyau chic du quartier Daguerre. Sous la houlette du chef Vincent Deyres, ce bistrot réinvente les codes de la gastronomie française avec une modernité rafraîchissante. Le décor est feutré, l'accueil soigné, et chaque assiette est un tableau où le produit noble est roi. C'est l'adresse idéale pour un dîner intimiste ou un déjeuner d'affaires au calme, loin du tumulte des grandes brasseries montparnassiennes.",
    insider_tip: "Le menu à 42€ est d'un équilibre remarquable, laissez-vous guider par les suggestions du chef qui changent tous les mois. La purée à la truffe qui accompagne le cochon est une expérience en soi.",
    expert_catchline: "La bistronomie d'exception du quartier Daguerre : raffinement, saisonnalité et justesse.",
    specials: {
        cuisine: ["Bistronomie", "Cuisine de Saison", "Sourcing direct"],
        drinks: ["Cave à vins pointue", "Champagnes de niche"],
        must_eat: "La Côte de Cochon à la purée de truffe.",
        must_drink: "Un verre de Bourgogne blanc sélectionné par Vincent Deyres."
    }
};
