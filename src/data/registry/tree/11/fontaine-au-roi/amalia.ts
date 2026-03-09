import { SurgicalPlace } from '../../../type-definition';

export const amalia: SurgicalPlace = {
    id: "poi-amalia",
    name: "AMÂLIA",
    slug: "amalia",
    category: "restaurant",
    subcategory: ["étoilé", "gastronomique", "italien", "dégustation", "restaurant"],
    location: {
        address: "32 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.86815470000001,
        lng: 2.3717885,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJv0-JCeNt5kcRaV9ngQ1Eu64"
    },
    moods: {
        chill: 55,
        festif: 10,
        culturel: 35
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:30–21:30\njeudi: 19:30–21:30\nvendredi: 19:30–21:30\nsamedi: 19:30–21:30\ndimanche: 12:30–13:30, 19:30–21:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://amaliarestaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 145,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Site officiel — accord vins 80€ pour ~5 verres → ~16€/verre
        wine_glass: 16.00,
        coffee_price: 0,
        dish_price: 40.00, // MANUAL: Median des plats à la carte du déjeuner (25, 32, 34, 38)
        menu_type: 'fixed',
        last_updated: "2026-03-08",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS (Source: site officiel 2025)
            // ═══════════════════════════════════════════
            {
                category: "Menus Dégustation",
                items: [
                    { name: "Grand Menu AMÂLIA", price: "145.00€", description: "Expérience complète en plusieurs étapes." },
                    { name: "Menu Végétarien", price: "120.00€", description: "Déclinaison végétale du grand menu." },
                    { name: "Menu Déjeuner (Semaine)", price: "60.00€", description: "Formule midi rapide." },
                    { name: "Menu Déjeuner (Week-end)", price: "90.00€", description: "Menu complet en 3 temps." },
                    { name: "Accord Mets & Vins (Grand Menu)", price: "80.00€" },
                    { name: "Accord Mets & Vins (Végétarien)", price: "70.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // À LA CARTE - DÉJEUNER (Source: GaultMillau/Guide Michelin)
            // ═══════════════════════════════════════════
            {
                category: "Entrées",
                items: [
                    { name: "Cappuccino d'araignée de mer, agrumes, amandes", price: "25.00€" },
                    { name: "Tartare de veau fumé, cacahuètes, glace oursin", price: "28.00€" },
                    { name: "Gnocchis au beurre de tabasco, coques marinière", price: "26.00€" },
                    { name: "Spaghettoni au citron, sauce huître épicée", price: "32.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "Barbue rôtie, tomates datterino fumées, olives", price: "38.00€" },
                    { name: "Cuisse de canard challandais, poivron, abricot", price: "34.00€" },
                    { name: "Ris de veau croustillant, condiment anchois", price: "42.00€" },
                    { name: "Turbot sauvage, artichauts, jus de coquillages", price: "45.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Sorbet gingembre, nuage citron, Espelette", price: "15.00€" },
                    { name: "Feuille à feuille ananas rôti, pomme de terre", price: "18.00€" },
                    { name: "Rhubarbe, fraises, fontainebleau, coquelicot", price: "18.00€" },
                    { name: "Chocolat grand cru, noisettes du Piémont", price: "17.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVtnFqNBO0_OR7hQ33nZaz5ov57wnojeBqmzdvpri4hH6NXFFWBs0wmsYpq1vEV-IQuEMSfFp81NYromOfQZaBlO9ZMoSHmqv_BaCYNr33ZacJXGHVpjhFTvq_rB2tJkNrGptYzvK50daMBhP8XZQzb8giVSM5gDNaiy2No2W5gdS0NqSqd1M0FTnrTCBkkD2GUC3NN03Ef-cOAoWcz62IOU9tUw8w15ZZ6t98ri6lyuoaxBsYofP2Lw6qafnwlvrpthuCnzrWJAbPAqPjXH16EZiDz_Ua5W4n-AFQXohDkMA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWuVkxbBECbOlchJYmkIoUvRJG-RJr_099QjcSKpqesG-mOuxlR647sjlOEiWhm8iqW4yOpT1OAgZSOHu5QsrNXIVl8zBG-Q8KZDMqOcf6pM-sGmVXrRZrGVAhlY_NPy6s21HuHGsZ2O3uClBqhWTYSgq7c4QhKuzZ3ZhqGY7SRce3TOae89mYhKy-iBpAqgWGgNQGiH_YTeVzpUbcdKpgF1IXGXeCMf2XmeEOkXfnAjZkPzv-fZmt0qQVa6ZT8D6jkPzCjsvsGxZvUYb3JgYpq57RnyzgSL7D1VHTz5d1KhSx78Zd4qnynlGf61NM0FU6qh5X0jYC_J-D5meHxM80L3X8URlK1TXKDD7q2Tgivt3YnpqrJBx43QCXEdw9RKApoyZiCXKPyYtcQjkca3tY8ZRjdCloaK0Ivw1SdLWI4F8IHjTkOXtQGW4_6U9Ua&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXewsvPf8mytICZ3CWX6-Yw40cvt7sLEazjVmVxBFInAjbbYgkSCMK6xe2q0YZXQiQ3O-VHigG2ZiI2RUHW6xJ3ROxe58PIW5yhy6PMk8qEcHgDF8XnKX15hg6vmVOx33SIoilvdkfaPxaOvbkQtJC1EV8LkyEbkx9IF4KkS87a1nmBmYb5QKxSz_05zECTzWO4zPmFteK0SGvhOBxEY1OiqHSb66z4M0NCi7wjDRUMFLFGI9KwsDgZWdzcLu-1cT_PF_3cj02gJQnBLd51b4XsYdU-cn5UOQTJNah0ORWSFQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "amalia_restaurant_paris",
    michelin_stars: 1,
    verified: true,
    google_rating: 4.9,
    description: "AMÂLIA est le restaurant étoilé Michelin (2025) des chefs italiens Eugenio Anfuso et Cecilia Spurio, dans l'ancien local du restaurant Robert. La cuisine est un mariage magistral entre technique française et âme italienne : spaghettoni citronnés sauce huître, barbue aux tomates fumées beurre vanillé, canard confit au jus de mezcal. C'est probablement la plus belle table du 11ème avec 4.9 étoiles Google.",
    insider_tip: "• Le Grand Menu AMÂLIA à 145€ est l'expérience complète — comptez 225€ avec l'accord vins.\n• Le Menu Saison à 90€ offre un parcours plus court mais tout aussi précis.\n• Le déjeuner propose une carte à la volée avec des plats entre 25-45€ — l'occasion de goûter à moindre coût.\n• La réservation est OBLIGATOIRE et les créneaux sont limités — réservez tôt.\n• C'est un étoilé Michelin 2025 avec 4.9 étoiles Google — un exploit rare.",
    expert_catchline: "L'étoilé Michelin 2025 franco-italien du 11ème : 4.9 étoiles Google, le sommet du quartier.",
    specials: {
        cuisine: ["Spaghettoni citronnés sauce huître", "Barbue aux olives Taggiasche", "Canard confit jus mezcal", "Araignée de mer cappuccino"],
        drinks: ["Accord mets-vins 80€", "Sélection franco-italienne", "Sommelier expert"],
        must_eat: "Le Grand Menu AMÂLIA (145€) est le parcours signature. Le dimanche midi, la carte offre des plats individuels entre 25-45€ — le deal du siècle pour un étoilé.",
        must_drink: "L'accord mets-vins à 80€ est calibré pour chaque plat du menu — indispensable pour profiter pleinement de l'expérience."
    }
};
