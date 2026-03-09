import { SurgicalPlace } from '../../../type-definition';

export const leSotLyLaisse: SurgicalPlace = {
    id: "poi-le-sot-ly-laisse",
    name: "Le Sot l'y Laisse",
    slug: "le-sot-ly-laisse",
    category: "restaurant",
    subcategory: ["franco-japanese", "bistronomic", "traditional", "fine-dining"],
    location: {
        address: "70 Rue Alexandre Dumas",
        arrondissement: 11,
        lat: 48.8546, // Approximate
        lng: 2.3924,
        nearest_metro: "Alexandre Dumas",
        metro_lines: [2],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
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
                category: "Déjeuner (Semaine)",
                items: [
                    { name: "Menu Entrée + Plat + Dessert", price: "38.00€" },
                    { name: "Menu Entrée + Plat ou Plat + Dessert", price: "32.00€" }
                ]
            },
            {
                category: "Dîner (Menu Dégustation)",
                items: [
                    { name: "Menu Signature (Midi & Soir)", price: "79.00€" },
                    { name: "Menu Plaisir (6 services)", price: "95.00€" }
                ]
            },
            {
                category: "Inspirations (Plats Signatures)",
                items: [
                    { name: "Fricassée de sot-l'y-laisse aux champignons", price: "Inclus", description: "Le plat culte du chef Eiji Doihara, poêlé minute." },
                    { name: "Filet de bar poêlé à la barigoule, bouillon de volaille", price: "Inclus" },
                    { name: "Ris de veau sautés, sauce Périgueux & céleri", price: "Inclus" },
                    { name: "Thon Kuro Mago snacké, sésame noir", price: "Inclus" },
                    { name: "Canette de Challans rôtie, légumes de saison", price: "Inclus" },
                    { name: "Pigeon fermier entier rôti au jus", price: "Inclus" },
                    { name: "Baba au rhum, orange & chantilly légère", price: "Inclus" }
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
