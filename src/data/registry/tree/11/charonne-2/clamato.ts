import { SurgicalPlace } from '../../../type-definition';

export const clamato: SurgicalPlace = {
    id: "poi-clamato",
    name: "Clamato",
    slug: "clamato",
    category: "restaurant",
    subcategory: ["poisson", "bistronomie", "sans reservation", "restaurant"],
    location: {
        address: "80 Rue de Charonne",
        arrondissement: 11,
        lat: 48.854064,
        lng: 2.3804812,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJW5fGmmxz5kcRM4j3Wq79o5o"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–22:30\ndimanche: 12:00–22:30",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://clamato-charonne.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 3.00,
        dish_price: 35, // MANUAL: Équivalent d'un plat complet (Assiettes à partager, 2-3 par personne).
        force_manual_dish_price: true,
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Les Petites Assiettes (Entrées & Tapas Marins)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Rillette de bonite", price: "7.00€" },
                    { name: "Tarama d'œuf de cabillaud fumé au zaatar", price: "8.00€" },
                    { name: "Bulots de Dieppe, aïoli à l'ail rôti", price: "9.00€" },
                    { name: "Coques de Roscoff, beurre au vinaigre fumé", price: "9.00€" },
                    { name: "Accras de morue sauce chien", price: "11.00€" },
                    { name: "Oursins de Galice (les 3)", price: "15.00€" },
                    { name: "Huîtres Marennes Oléron N°3 (les 6)", price: "18.00€" },
                    { name: "Huîtres Utah Beach N°2 (les 6)", price: "20.00€" },
                    { name: "Huîtres plates de Belon (les 6)", price: "24.00€" }
                ]
            },
            {
                category: "Le Cru & Les Assiettes Moyennes (Crudos)",
                items: [
                    { name: "Ceviche de mulet noir, courge musquée, coriandre", price: "14.00€" },
                    { name: "Carpaccio de mulet, huile de sésame, piment", price: "14.50€" },
                    { name: "Maigre de ligne, poire et chou-rave", price: "15.00€" },
                    { name: "Saint-Jacques crues, cédrat et clémentine", price: "16.00€" },
                    { name: "Tartare de thon rouge, stracciatella, anchois", price: "18.00€" },
                    { name: "Truite de Banka, sauce matelote et lard fumé", price: "18.00€" }
                ]
            },
            {
                category: "Les Grandes Assiettes (À partager)",
                items: [
                    { name: "Poulpe grillé, pommes grenailles, aïoli", price: "29.00€" },
                    { name: "Lotte rôtie, jus de viande, champignons sauvages", price: "34.00€" },
                    { name: "Bar entier d'Oléron, sauce béarnaise", price: "39.00€" },
                    { name: "Plateau panaché (crabes, bulots, oursins, coques, huîtres)", price: "65.00€", description: "Le plateau signature hyper iodé de l'écailler." }
                ]
            },
            {
                category: "Desserts & Boissons",
                items: [
                    { name: "Tartelette au sirop d'érable, crème fouettée", price: "8.00€", description: "L'incontournable dessert signature, cultissime." },
                    { name: "Glace au sarrasin, caramel beurre salé", price: "7.00€" },
                    { name: "Clamato Bloody Mary", price: "12.00€", description: "Le cocktail signature, parfait avec les huîtres." },
                    { name: "Michelada (Bière, jus de tomate, épices)", price: "10.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW9fcwhhyzTiHXywtWNIaNViOmZXBZnpgt9ChW2xs6bFzOIU3P1tlD8Swm7g5FioyccGdIohK3kKqK27_dtGuroHH_-eum7x5pdFPvIOfpgGj3kJ4rS7ZKtcUF08rtaqczZW5pFF-ZUywdfILY8WmRjc-G-r_jNfHe_voZx2JQ5rdsVmottu5k5QAqlq32aMM_7OOnvQuyRYIJlkq3EnZw5ZV5KqWsfonVSJ5I4TCQjl5LSXy-h5MsSDB0Wn3wRp4fESaM_-IRDfJQhiYCEhgJgcQ0MlZvwaK4vttQ40NkPrbt3yu9xGHxjbhqjbewl1YNDBRfEuD4o1pKs3fzRDorSIX62LLcAYvK_EErVhNEmwGSDG_q7OUcw11lC9ISy98y0eS4ajPGFUW80YdJ-Hwmfjdocw38ehzBW-VTKezpxDeveROv_jXWHb-hRsswp&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUqfKk03m39s_k8W1kUv1eX04RIfO-Q5c3mJc7R1Vb4x0zE8_1kOQhB7U-3G9P4X1v8T3Z1Q2x2mR0kXqZ8Hn8P7sE-R6x8t9B6I6R_-H9Z5h3N3gP8V6R_-T5F7H8jD8P_wQ0K6U-z3L1D5Z7U8T6H5oZ7j-fO0g-P9cK9D9Z7v0E9-N3Z8oQ8Z9H-sB6V4cI3R5H9I5cK9s7Z7_4R1_3J0R3Q7Y0Z8tV7i9kF7Q6f_4&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVplcP_I5tpAaBfHd725nSrtqQiHZAX1_1cYr8SzqHrsgYuDpZiGTux-RiPGJNzOHc-ZR58GJDt6l9DCpJ7GMUAIhmElBPuy8BUQ4NQXFrqIelKvT2SnQj-VOj0Rb6Iy6c85rCfMtFz7GFIuTl3Un6H3DuchtrhTEYcdwKQmbmsk-erE8ptFXCoMVj1if5Ty9tCf4ySpd8QPJvHnF3zquN_icAWyaoCxhgUx9_bKb9DbcmzxLi2xarBhmF4nrsRE5Av-QEqjlGJUItWXqd4bA-EmR64OuOwNuwxtNcyy6LYYb58CvhcRPdbuQnSp6c9jUBg25A-fx-vwwhVc7OGKvPXtbdBj3Fs_UjvDFDEtiC_bd77BURXu3W09ycu168M7TbRPoQixEOXQcEyfxm1BwafC1u6Q1vMK9cmw3GtPLd3Og&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "clamato_paris",
    verified: true,
    google_rating: 4.5,
    description: "Le petite frère marin du Septime (situé juste à côté). Le Clamato, inspiré des oyster bars de la côte est américaine, propose une carte exclusivement iodée hyper fraîche, conçue sous forme de petites assiettes à partager dans une ambiance enfiévrée.",
    insider_tip: "• Attention : Pas de réservation possible ! Il faut venir tôt, donner son nom, et idéalement patienter au café d'en face ou à la cave du Septime.\n• Commandez le Bloody Mary maison, il est conçu spécifiquement pour accompagner la salinité des huîtres.\n• Ne partez surtout pas sans avoir commandé la célèbre tarte au sirop d'érable en dessert.",
    expert_catchline: "L'Oyster bar de la galaxie Septime : iode pure, assiettes percutantes et aucune réservation.",
    specials: {
        cuisine: ["Tarte au sirop d'érable", "Plateau panaché", "Ceviche du moment"],
        drinks: ["Clamato Bloody Mary"],
        must_eat: "La cultissime tarte au sirop d'érable surmontée de sa crème fouettée non sucrée, le contraste parfait pour finir.",
        must_drink: "Le Bloody Mary maison, pour se mettre dans l'ambiance US East Coast iodée assumée."
    }
};
