import { SurgicalPlace } from '../../../type-definition';

export const leTagine: SurgicalPlace = {
    id: "poi-le-tagine",
    name: "Le Tagine",
    slug: "le-tagine",
    category: "restaurant",
    subcategory: ["moroccan", "traditional", "institution", "couscous-specialist"],
    location: {
        address: "13 Rue Crussol",
        arrondissement: 11,
        lat: 48.863119,
        lng: 2.366224,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder for precise ID
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 12:00–13:30, 19:00–22:30; Mar: 19:00–22:30; Fermé Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.letagine-restaurant.com",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 42,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 3.00,
        dish_price: 26.00, // MANUAL: Median for Tagines/Couscous
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Le Tagine Paris 2024-2025
            {
                category: "Entrées Traditionnelles",
                items: [
                    { name: "Pastilla au Pigeonneau", price: "26.00€", description: "Le grand classique sucré-salé, d'une finesse rare." },
                    { name: "Méchouïa (Salade de tomates et poivrons grillés)", price: "15.00€" },
                    { name: "Merguez grillées & salade marocaine", price: "15.00€" },
                    { name: "Brick à l'œuf de poule de Marans", price: "12.00€" }
                ]
            },
            {
                category: "Les Tagines (Cuisinés en poterie)",
                items: [
                    { name: "Tagine d'Agneau aux olives et citrons confits", price: "27.00€" },
                    { name: "Tagine de Poulet fermier aux poires & miel", price: "25.00€" },
                    { name: "Tagine de Saumon aux légumes frais", price: "34.00€" },
                    { name: "Tagine d'Agneau aux raisins secs & amandes", price: "27.00€" }
                ]
            },
            {
                category: "Les Couscous (Graines roulées main)",
                items: [
                    { name: "Couscous Méchoui (Gigot d'agneau de lait)", price: "34.00€" },
                    { name: "Couscous Royal (3 viandes : Poulet, Agneau, Merguez)", price: "34.00€" },
                    { name: "Couscous Merguez (x3)", price: "24.00€" },
                    { name: "Couscous Légumes frais", price: "22.00€" }
                ]
            },
            {
                category: "Desserts & Thé",
                items: [
                    { name: "Pâtisseries marocaines maison (l'assiette)", price: "12.00€" },
                    { name: "Salade d'oranges à la cannelle", price: "9.00€" },
                    { name: "Thé à la menthe traditionnel (verre)", price: "4.50€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Tagine est bien plus qu'un restaurant, c'est une institution marocaine à Paris depuis plus de 30 ans. Ici, la gastronomie du Maghreb est traitée avec un respect immense : les graines de couscous sont roulées à la main, les épices sont sourcées avec soin et les cuissons en tagine de terre cuite sont d'une tendreté absolue. Le décor, parsemé de zelliges et de lanternes, invite au voyage dans une atmosphère élégante et chaleureuse.",
    insider_tip: "Demandez leur pastilla au pigeonneau en entrée, c'est sans doute l'une des meilleures de la capitale. Et n'oubliez pas de goûter aux vins du Maroc, souvent méconnus mais excellents avec leurs plats épicés.",
    expert_catchline: "L'excellence de la cuisine marocaine traditionnelle : couscous d'orfèvre et tagines fondants.",
    specials: {
        cuisine: ["Gastronomie marocaine", "Couscous traditionnel", "Cuisine en terre cuite"],
        drinks: ["Grands vins du Maroc", "Thé à la menthe frais"],
        must_eat: "Le Couscous Méchoui (agneau de lait) et la Pastilla au Pigeonneau.",
        must_drink: "Un Guerrouane ou un vin de l'Atlas."
    }
};
