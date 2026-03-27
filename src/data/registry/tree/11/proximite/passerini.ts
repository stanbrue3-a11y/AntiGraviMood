import { SurgicalPlace } from '../../../type-definition';

export const passerini: SurgicalPlace = {
    id: "poi-passerini",
    name: "Passerini",
    slug: "passerini",
    category: "restaurant",
    subcategory: ["italian", "gastronomic", "pasta-specialist", "institution"],
    location: {
        address: "65 Rue de Charenton",
        arrondissement: 11,
        lat: 48.8504043,
        lng: 2.3739797,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJ_U67bYtt5kcRdYt9_U67bYt"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mer-Ven: 12:00–14:15, 19:30–22:15; Mar & Sam: 19:30–22:15; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.passerini.paris",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.00,
        dish_price: 30.00, // MANUAL: Median for Pasta/Plats
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Passerini 2024-2025 (Michelin Guide)
            {
                category: "Formules Déjeuner (Semaine)",
                items: [
                    { name: "Entrée + Pasta", price: "34.00€" },
                    { name: "Entrée + Pasta + Dessert", price: "42.00€" },
                    { name: "Entrée + Main Course", price: "37.00€" },
                    { name: "Entrée + Main Course + Dessert", price: "45.00€" },
                    { name: "Menu Complet (E+P+M+D)", price: "52.00€" }
                ]
            },
            {
                category: "Antipasti (Entrées)",
                items: [
                    { name: "Trippa alla Romana", price: "22.00€", description: "Tripes à la romaine, menthe et pecorino." },
                    { name: "Carpaccio de poisson de ligne", price: "24.00€" },
                    { name: "Artichauts frits & crème de parmesan", price: "20.00€" }
                ]
            },
            {
                category: "Primi (Pâtes Maison)",
                items: [
                    { name: "Tagliatelle au ragoût de canard", price: "28.00€" },
                    { name: "Ravioli del giorno", price: "31.00€", description: "Fait main chaque matin." },
                    { name: "Gnudi ricotta & épinards, beurre de sauge", price: "27.00€" }
                ]
            },
            {
                category: "Secondi (Plats)",
                items: [
                    { name: "Pigeon entier rôti & abats", price: "38.00€" },
                    { name: "Poisson de roche grillé, sauce aux herbes", price: "34.00€" },
                    { name: "Epaule d'agneau de lait (à partager)", price: "80.00€" }
                ]
            },
            {
                category: "Dolci",
                items: [
                    { name: "Tiramisu Passerini", price: "12.00€" },
                    { name: "Gelato artisanal minute", price: "10.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWFpIDM5V9_74eM-SJiP_8eivedBJBGZ4-Lco24aiNHVDFRrGlQVKocOEHT34o5OUQMcgJ2KI2P7BBFukGHqkeDKlNwSAlIZFbyghaSZ67MShuRH1b8P1372_geYGYyXTVa2kbkoEFLg7tIhwhi-_No_tFcOJKSINWkECAypAVWadWeqQOS6f-N0s3mgzbEMLJTnT1gEE12VHSDsTiCuNfc3oV_ju7P90jBQKCyj6pBrrKQaJ5i-czbG-oAtmW2N-UxrWyE19_Y&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Giovanni Passerini est le maître incontesté de la cuisine italienne à Paris. Dans son restaurant épuré et lumineux du 11ème, il sublime le produit brut avec une technique de haute volée. Ses pâtes fraîches, réalisées avec précision, sont devenues une référence absolue pour les amateurs. Pas de folklore ici, juste l'Italie dans ce qu'elle a de plus élégant, moderne et sincère.",
    insider_tip: "Si les réservations au restaurant sont complètes, essayez 'Passerini & Figli' juste à côté : c'est sa boutique de pâtes fraîches où l'on peut aussi manger sur le pouce (même si le restaurant reste l'expérience ultime).",
    expert_catchline: "Le temple de la pasta et l'élégance italienne par le maestro Giovanni Passerini.",
    specials: {
        cuisine: ["Gastronomie italienne", "Pâtes faites main", "Cuisine de marché"],
        drinks: ["Sélection pointue de vins italiens", "Grappa de collection"],
        must_eat: "Les raviolis du jour, une démonstration technique et gustative.",
        must_drink: "Un Barolo ou un vin nature de Sicile."
    }
};
