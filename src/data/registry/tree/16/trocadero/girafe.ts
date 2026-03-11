import { SurgicalPlace } from '../../../type-definition';

export const girafe: SurgicalPlace = {
    id: "poi-girafe",
    name: "Girafe",
    slug: "girafe",
    category: "restaurant",
    subcategory: ["seafood", "chic", "vue tour eiffel", "institution", "terrasse", "festif-chic"],
    location: {
        address: "1 Place du Trocadéro et du 11 Novembre, 75016 Paris",
        arrondissement: 16,
        lat: 48.8624231, // EXACT GPS
        lng: 2.2871034,  // EXACT GPS
        nearest_metro: "Trocadéro",
        metro_lines: [6, 9],
        google_id: "ChIJW53n2yRv5kcRW9A-W2t5Bmg"
    },
    moods: {
        chill: 10,
        festif: 85,
        culturel: 5
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-11)
        opening_hours_raw: "Monday: 12:00 – 3:00 PM, 7:00 PM – 2:00 AM | Tuesday: 12:00 – 3:00 PM, 7:00 PM – 2:00 AM | Wednesday: 12:00 – 3:00 PM, 7:00 PM – 2:00 AM | Thursday: 12:00 – 3:00 PM, 7:00 PM – 2:00 AM | Friday: 12:00 – 3:00 PM, 7:00 PM – 2:00 AM | Saturday: 12:00 – 3:30 PM, 7:00 PM – 2:00 AM | Sunday: 12:00 – 3:30 PM, 7:00 PM – 2:00 AM",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://girafe-restaurant.com/paris/fr/reservation/",
            label: "RÉSERVER (ANTICIPER)"
        }
    },
    pricing: {
        avg_budget: 150,
        is_free: false,
        pint_price: 14,
        wine_glass: 20.00,
        coffee_price: 6.00,
        dish_price: 58.00, // MÉDIAN des Plats (Sole 64, Black Cod 59, Filet de Bœuf 52)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Entrées / Raw Bar)",
                items: [
                    { name: "Caviar Osciètre (50g), blinis maison", price: "240.00€" },
                    { name: "Sériole en sashimi, ponzu et truffe noire", price: "34.00€" },
                    { name: "Carpaccio de Saint-Jacques, citron caviar", price: "28.00€" },
                    { name: "Avocat au crabe, mayonnaise au yuzu", price: "32.00€" },
                    { name: "Langoustines croustillantes, sauce basilic", price: "38.00€" },
                    { name: "Les 6 Huîtres Tarbouriech n°3", price: "36.00€" }
                ]
            },
            {
                category: "Les Plats de l'Océan et de la Terre (Plats)",
                items: [
                    { name: "Black Cod laqué au miso, pak choï", price: "59.00€", description: "Le plat iconique de la maison." },
                    { name: "Sole meunière entière, purée truffée", price: "68.00€" },
                    { name: "Homard bleu rôti au beurre demi-sel", price: "85.00€" },
                    { name: "Linguine au homard et tomates confites", price: "56.00€" },
                    { name: "Filet de bar rôti, artichauts poivrades", price: "48.00€" },
                    { name: "Tataki de thon rouge, sésame et soja", price: "42.00€" },
                    { name: "Véritable Filet de Bœur au poivre", price: "52.00€" }
                ]
            },
            {
                category: "Garnitures Essentielles (Accompagnements)",
                items: [
                    { name: "Purée de pommes de terre de Joël Robuchon", price: "12.00€" },
                    { name: "Grosse frites allumettes", price: "10.00€" },
                    { name: "Épinards frais tombés au beurre", price: "12.00€" }
                ]
            },
            {
                category: "La Fin Douce (Desserts)",
                items: [
                    { name: "Pavlova spectaculaire aux fruits rouges", price: "22.00€" },
                    { name: "Millefeuille vanille de Madagascar", price: "19.00€" },
                    { name: "Chouquettes à partager, sauce chocolat chaud", price: "24.00€" }
                ]
            },
            {
                category: "Cocktails Signatures & Vins",
                items: [
                    { name: "Cocktail 'Le Girafe' (Vodka, Litchi, Rose, Champagne)", price: "26.00€" },
                    { name: "Verre de Chablis 1er Cru", price: "22.00€" },
                    { name: "Coupe de Champagne Ruinart Blanc de Blancs", price: "35.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aap_uEDQe85I1O0u_k4G_mU-L4wI2D3gB1bZ0C9x0uH4zE8X2i9xP_D0K_t0uG0D_C0Z1g0A_D_T_uK0Y0P9a0iJ_Y_Q1e1_aD1eG9Z0O_V_-&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aap_uED7VfQ9_eC2jY3hB8hZ_G0_N0J3t-w9tI0T0-qJ_V-9iY-2A_B1s9p9_5N_nC_O0X_A2R_m0Y9K0U9E2f_T_W_v_C1x1O1o9-G0X1N_P9Q_m9A2j9N99&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=Aap_uED9I_S_o1o2G2lX_-t4t_J9tM0T_-Q1N_H_T9v_-K1G2u0w_8Y_-A9a0u1a9Q_G1w_w9y0s0l9R9u_m_i_X0V_3L2d_mG1D0c2u3-i0N_T8T9Y9n_O-Z0v_K0D4y2v2W9t99&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "girafe_paris",
    verified: true,
    google_rating: 4.1,
    description: "La brasserie mondaine par excellence. Situé au cœur de la Cité de l'Architecture au Trocadéro, Girafe est un écrin Art Déco spectaculaire signé Joseph Dirand. Mais le clou du spectacle reste sa terrasse sublime, offrant sans doute la vue la plus cinématographique de Paris sur la Tour Eiffel. Au menu : une obsession pour les produits de la mer d'exception (raw bar, caviar, homard) dans une ambiance chic, feutrée et toujours vibrante. Le 'place to be' absolu pour éblouir.",
    insider_tip: "• La réservation est une guerre : il faut s'y prendre plusieurs semaines à l'avance pour la terrasse en été.\n• Le Black Cod au miso est le plat signature absolu, d'un fondant incroyable.\n• Si vous n'avez pas de table, tentez le bar pour un cocktail à l'intérieur, l'architecture Art Déco vaut le détour à elle seule.\n• Attention : tenue élégante exigée, la sélection à l'entrée est stricte.",
    expert_catchline: "Seafood d'exception et la plus belle vue sur la Tour Eiffel au cœur d'un décor Art Déco.",
    specials: {
        cuisine: ["Seafood", "Black Cod Miso", "Caviar", "Linguine Homard"],
        drinks: ["Cocktails Signatures", "Champagne Ruinart", "Vins de Prestige"],
        must_eat: "Le Black Cod laqué au miso et pak choï (59€) ou la Sole meunière entière.",
        must_drink: "Le Cocktail signature 'Le Girafe' à base de Vodka, litchi, rose et champagne."
    }
};
