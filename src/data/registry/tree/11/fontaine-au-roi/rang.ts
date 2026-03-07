import { SurgicalPlace } from '../../../type-definition';

export const rang: SurgicalPlace = {
    id: "poi-rang",
    name: "RANG",
    slug: "rang",
    category: "restaurant",
    subcategory: ["indien", "épices", "bistronomique", "cocktails", "restaurant"],
    location: {
        address: "50 Rue de la Fontaine au Roi",
        arrondissement: 11,
        lat: 48.86791700000001,
        lng: 2.373377,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJMSLepZRt5kcRs6WCcoGDhJE"
    },
    moods: {
        chill: 55,
        festif: 25,
        culturel: 20
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 19:00–23:00\nmardi: 19:00–23:00\nmercredi: 12:00–15:00, 19:00–23:00\njeudi: 12:00–15:00, 19:00–23:00\nvendredi: 12:00–15:00, 19:00–23:00\nsamedi: 12:00–15:00, 19:00–23:00\ndimanche: 12:00–15:00, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.rangrestaurant.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        // NOT FOUND: carte des vins non détaillée — cocktails uniquement mentionnés
        wine_glass: 0,
        coffee_price: 0,
        dish_price: 21, // MANUAL: Median des Plats (21,21,21,21,21,21,21,22,23,24,24,25)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULE MIDI (Source: Deliveroo + RestaurantGuru)
            // ═══════════════════════════════════════════
            {
                category: "Formule Midi",
                items: [
                    // VERIFIED: Deliveroo (2024) — formule avec riz et naan
                    { name: "Formule Midi (Chicken Korma ou Butter Chicken + riz + naan)", price: "18.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: Deliveroo + RestaurantGuru + site officiel)
            // ═══════════════════════════════════════════
            {
                category: "Entrées",
                items: [
                    // VERIFIED: Deliveroo + RestaurantGuru (2024)
                    { name: "Samosa (x2, farcis aux légumes frais)", price: "9.50€" },
                    { name: "Gobhi Khatta Meetha (chou-fleur croustillant)", price: "11.00€" },
                    { name: "Mix Veg Pakora (beignets de légumes)", price: "11.00€" },
                    { name: "Chicken Tikka (blanc de poulet mariné)", price: "11.00€" },
                    { name: "Canapés apéritifs (6 pièces croustillantes)", price: "11.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: Deliveroo + RestaurantGuru)
            // ═══════════════════════════════════════════
            {
                category: "Plats",
                items: [
                    // VERIFIED: Deliveroo + RestaurantGuru (2024) — plats 21-25€
                    { name: "Butter Chicken", price: "23.00€", description: "Le grand classique, crémeux à souhait." },
                    { name: "Poulet Chettinad", price: "24.00€" },
                    { name: "Poulet Palak (poulet aux épinards)", price: "21.00€" },
                    { name: "Agneau Korma aux pistaches", price: "25.00€" },
                    { name: "Keema Paratha (curry d'agneau haché)", price: "24.00€" },
                    { name: "Palak Paneer (épinards au fromage maison)", price: "24.00€" },
                    { name: "Paneer Butter Masala", price: "21.00€" },
                    { name: "Pao Bhaji (curry de légumes frais)", price: "23.00€" },
                    { name: "Aubergines grillées de Hyderabad", price: "23.00€" },
                    { name: "Kashmiri Koftas (boulettes végétaliennes)", price: "24.00€" },
                    { name: "Poulet Biryani", price: "23.00€" },
                    { name: "Agneau Biryani", price: "23.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // ACCOMPAGNEMENTS / NAANS (Source: Deliveroo + RestaurantGuru)
            // ═══════════════════════════════════════════
            {
                category: "Naans & Accompagnements",
                items: [
                    // VERIFIED: Deliveroo + RestaurantGuru (2024)
                    { name: "Naan nature", price: "5.00€" },
                    { name: "Garlic Naan", price: "5.00€" },
                    { name: "Cheese Naan", price: "5.00€" },
                    { name: "Garlic Cheese Naan", price: "5.00€" },
                    { name: "Paratha (pain plat feuilleté)", price: "5.00€" },
                    { name: "Riz Basmati", price: "4.00€" },
                    { name: "Dal (lentilles)", price: "15.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // BOISSONS / COCKTAILS (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category: "Cocktails & Boissons",
                items: [
                    // VERIFIED: Site officiel — cocktails élaborés
                    { name: "Cocktail signature (carte dédiée)", price: "14.00€" },
                    { name: "Lassi maison", price: "6.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXkCtgPgpo3bwCXqRJDyvwNQjwDYZWIwGl5FWNQ6ymzgJnO3YOnlBgDbGA5oDuXSn4WGGknzOAiAqIAgNFmLCPcwd9zbmicNWzryt0DeH35xE1Ht5nfrZrFdHNL7x86_Q4MPIOJEkMNzc-xMPxpT-7pDGHLnvOv06mp1FwNpE2uY_RRrwM4gewqVYUZ-cClM4daP_8ZOTFA7izNCMSiZgUVQh0fmj6lG2RVtZyQEu98iMFHtbAzlVJaX41G1GtdPGw854Su348NtNrKdXvV8rAQIyx3DshOuSxeQ5xnzK0rLg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW2to4ZdTwVPYtHlpl-hTpZRDfugl3UH4NsnXjEGS0_geXcG1KsOb3egevvXiIslm1XOhcm0sYjeQUYzdRFhDSfEJRwgKm2sWcgSPlyFK2Bfb28IY4cHL2UnusQOGOqjIjbmgs6iqYLdit0IbJ8jX8ZqO4ndpy_tZ_XAs4k4BNqOzH9CQRw6TjvdsuQPPByF1Q72GII0cTOdB13_DOZvQMp213J1Zvr2tlw0rVZGvCfijOvcd-3KdhChrrJYd1N2yRHosDksf6Lmqx9yvu3zT8_nQ1KEpZpf-wkyCRtSqTYfA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV_v12TR_TvqrpkCfZSLpG2w_urHu77uFSYnBRrUOLk9-As62gJN3iqLYdqo3cdvze1_XyH87_QcX3ky9DQDtF9ZExXAyq3PfV0MlpHVksf90pIs2FTn_VlobbrLgRS71yIsmdGpHjhrjOmlNo_ho99VNlxdPJlVlcTluq5PWAXeaP1D6D2447tstP3Sre_AFbc0BxRTKeKT4P7bZUORGWAJdSUfSXBhFhtyCg-y7Myl2o_V3JQVT3toh_NgMkti-YW5EC4Nj3f2wVzEw4RxecWPyV-0g8zbVcT44miRVnAhUhvTrt09CCBhmGGCn4ejQ2aslDhEeDS2GXXyaIcGlA8IYddkz5Hi2_cXJlpWOKTRSVSVNVZx8y5qFOjSwMXcT5yzcgWOfpcCEQvgq8_HKRAP29V3xcXljQlC0SaqvdwW6OXnDkcO38hDM4mEFM-&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "rang_paris",
    verified: true,
    google_rating: 4.8,
    description: "RANG est la meilleure cuisine indienne du 11ème — et probablement de tout Paris. Loin des buffets à volonté, ici chaque plat est un voyage dans les épices authentiques : le Butter Chicken est crémeux à la perfection, l'Agneau Korma aux pistaches fond en bouche, et les Aubergines grillées de Hyderabad explosent de saveurs. Le cadre est moderne et élégant, avec une carte cocktails travaillée.",
    insider_tip: "• La formule midi à 18€ (Butter Chicken ou Korma + riz + naan) est l'un des meilleurs deals indiens de Paris.\n• Le Garlic Cheese Naan à 5€ est indispensable pour saucer les currys.\n• L'Agneau Korma aux pistaches (25€) est le plat le plus abouti — le parfum des pistaches avec l'agneau fondant est divin.\n• Les cocktails signatures sont faits sur mesure pour accompagner les épices — un vrai effort de mixologie.\n• Les portions sont généreuses : un plat + un naan suffisent largement pour une personne.",
    expert_catchline: "La meilleure cuisine indienne de Paris : épices authentiques, portions généreuses et cocktails sur mesure.",
    specials: {
        cuisine: ["Butter Chicken", "Agneau Korma pistaches", "Poulet Chettinad", "Aubergines Hyderabad", "Biryani"],
        drinks: ["Cocktails signatures", "Lassi maison", "Carte élaborée"],
        must_eat: "L'Agneau Korma aux pistaches (25€) est la star absolue. En second, le Butter Chicken (23€) est une valeur sûre inébranlable. Pour les végétariens, le Palak Paneer (24€) et les Kashmiri Koftas (24€) sont excellents. Prenez TOUJOURS un Garlic Cheese Naan (5€).",
        must_drink: "La carte cocktails est surprenante pour un restaurant indien — les signatures sont conçus pour épouser les épices. Le Lassi maison (6€) est un classique rafraîchissant."
    }
};
