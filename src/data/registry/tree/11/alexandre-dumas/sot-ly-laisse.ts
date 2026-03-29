import { SurgicalPlace } from '../../../type-definition';

export const leSotLyLaisse: SurgicalPlace = {
    id: "poi-le-sot-ly-laisse",
    name: "Sot l'y Laisse",
    slug: "le-sot-ly-laisse",
    category: "restaurant",
    subcategory: ["franco-japanese", "bistronomic", "traditional", "fine-dining"],
    location: {
        address: "70 Rue Alexandre Dumas",
        arrondissement: 11,
        lat: 48.8540972,
        lng: 2.3954806,
        nearest_metro: "Alexandre Dumas",
        metro_lines: [2],
        google_id: "0x47e6727611f7ba69:0x9a2c3e941a7bf882"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–13:45, 19:30–21:45; Fermé Dim-Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://restaurantlesotlylaisse.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 38.00, // MANUAL: Based on lunch menu
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Le Sot l'y Laisse 2024-2025
            {
                category_type: "other",
                display_label: "Déjeuner (Semaine)",
                items: [
                    { name: "Menu Entrée + Plat + Dessert", price_cents: 3800 },
                    { name: "Menu Entrée + Plat ou Plat + Dessert", price_cents: 3200 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Dîner (Menu Dégustation)",
                items: [
                    { name: "Menu Signature (Midi & Soir)", price_cents: 7900 },
                    { name: "Menu Plaisir (6 services)", price_cents: 9500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Inspirations (Plats Signatures)",
                items: [
                    { name: "Fricassée de sot-l'y-laisse aux champignons", price_cents: 0, description: "Le plat culte du chef Eiji Doihara, poêlé minute." },
                    { name: "Filet de bar poêlé à la barigoule, bouillon de volaille", price_cents: 0 },
                    { name: "Ris de veau sautés, sauce Périgueux & céleri", price_cents: 0 },
                    { name: "Thon Kuro Mago snacké, sésame noir", price_cents: 0 },
                    { name: "Canette de Challans rôtie, légumes de saison", price_cents: 0 },
                    { name: "Pigeon fermier entier rôti au jus", price_cents: 0 },
                    { name: "Baba au rhum, orange & chantilly légère", price_cents: 0 }
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
    description: "Le Sot l'y Laisse est un joyau de la rue Alexandre Dumas. Le chef Eiji Doihara y pratique une cuisine française de haute volée, magnifiée par l'épure et la précision japonaises. Son plat signature, qui donne son nom au restaurant, est une ode aux textures et aux saveurs boisées. Le cadre est sobre, intime, mettant tout l'accent sur les assiettes d'une finesse rare.",
    insider_tip: "Ne manquez pas leur menu déjeuner, sans doute l'un des meilleurs rapports qualité-prix gastronomiques du quartier. Pensez à réserver plusieurs jours à l'avance, le lieu étant petit et très prisé.",
    expert_catchline: "L'art de la haute gastronomie française magnifié par la précision japonaise.",
    specials: {
        cuisine: ["Franco-Japonais", "Technique Bocuse", "Produits d'exception"],
        drinks: ["Belle sélection de vins de Bourgogne", "Sakis sélectionnés"],
        must_eat: "La fricassée de Sot-l'y-laisse bien sûr.",
        must_drink: "Un saki pour accompagner les entrées de poisson."
    }
};
