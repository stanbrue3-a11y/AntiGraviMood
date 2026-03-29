import { SurgicalPlace } from '../../../type-definition';

export const reyna: SurgicalPlace = {
    id: "poi-reyna",
    name: "Reyna",
    slug: "reyna",
    category: "restaurant",
    subcategory: ["filipino", "fusion", "bistronomie", "fried chicken"],
    location: {
        address: "41 Rue de Montreuil",
        arrondissement: 11,
        lat: 48.8509,
        lng: 2.3862,
        nearest_metro: "Faidherbe - Chaligny",
        metro_lines: [8],
        google_id: "ChIJ3zdcq7tz5kcRfW6Zro7wWgk"
    },
    moods: {
        chill: 50,
        festif: 70,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://reyna.paris/en/reservations/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 9, // Estimé craft
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 18, // MANUAL: Median des petites assiettes (11€-21€)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Reyna 2025 Standard (Filipino Fusion Bistronomy)
            {
                category_type: "main",
                display_label: "Small Plates (À partager)",
                items: [
                    { name: "Hainan Burrata", price_cents: 1600, description: "Kecap manis, gingembre, piment, herbes." },
                    { name: "Patis Caramel Wings (x3)", price_cents: 1100, description: "Poulet frit laqué au nuoc mam." },
                    { name: "Tuna Kinilaw", price_cents: 1800, description: "Ceviche philippin, calamansi, coco." },
                    { name: "Grilled Hispi Cabbage", price_cents: 1400, description: "Mayo gochujang, copeaux de boutargue." },
                    { name: "Sisig Traditionnel", price_cents: 1500 },
                    { name: "Kare-Kare Aubergine", price_cents: 1300, description: "Sauce arachide, bagoong butter." },
                    { name: "Green Asparagus Bagoong", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Signatures",
                items: [
                    { name: "Pork Belly Bicol Express", price_cents: 2100, description: "Poitrine fondante, sauce épicée piment/coco." },
                    { name: "Fried Chicken Adobo", price_cents: 1900, description: "Yaourt à l'ail, glaçage soja-balsamique." },
                    { name: "Beef Braisé Special", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Calamansi Cheesecake", price_cents: 800, description: "Le dessert culte, acidulé et onctueux." },
                    { name: "Pavlova Fruits Exotiques", price_cents: 900 },
                    { name: "Leche Flan au café", price_cents: 800 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVeVHU3zFzoEbNC5zhMhxVdIe1pXOTU8RPYBI6e2NCQxGry40eZ01_9PKOoop8j1mhGlxWq8HDbKjBssWAOnogfXOZxmP39jEX0jNq9of2SfTXzi-0N8rGRObRcYxzODskZo8-uYUNdnXnwvm_CQwdRhsJF6E11nPYop2ah0TmQMK2ZBjsKRKY9Zqcn9TqOszDZqc8O5PniSfb2ZnizYyXKQCYwFf5BsKnlm8Nq0v8kb01I6DM3jhU8WOSbXnNjZoBkc05-uvfYKZ0Lzciphm9qg0nRO3QqD-0wqID-eDGuoTrZDSvl1aArXt1IwwmkEZcFzDd0SnjFQ8K0WuwZVpsl5hyKyk-2AaT8p57Qsz5gMTYSI5PGgO-btJ2y0Xg7GVGBZQP9_uUKnuyjN-m8pw-CsE2CraLYipPImUL7u95b5vLpovNa3PnIJEMnNkqrDe-WHZXbEO4qH47wsRS_JmHmP2OrscR52zjTtxaz5u48FqkeVy5Up0t7CSOiMSWt5MxLUP0AKANb2J5go2VSySXLCP__0GyjkNZgHTr8LrrFQ4UuVdhN9P_C1UNDB3Bs0BFkjPux&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "La 'Reine' de la fusion philippine par Erica Paredes. Une cuisine de tripes et de cœur qui bouscule les codes : ingrédients saisonniers français rencontrant les punchy saveurs de Manille.",
    insider_tip: "La Hainan Burrata est l'entrée incontournable : un choc thermique et gustatif génial. Le lieu est petit et très prisé, réservations impératives.",
    expert_catchline: "L'explosion des saveurs philippines revisitées avec élégance.",
    specials: {
        cuisine: ["Filipino Fusion", "Kare-Kare", "Lechon Kawali"],
        drinks: ["Natural Wines", "Asian Infusions"],
        must_eat: "La Hainan Burrata au kecap manis.",
        must_drink: "Un vin blanc minéral pour équilibrer les épices."
    }
};
