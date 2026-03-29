import { SurgicalPlace } from '../../../type-definition';

export const confluence: SurgicalPlace = {
    id: "poi-confluence",
    name: "Confluence",
    slug: "confluence",
    category: "restaurant",
    subcategory: ["bistronomie", "fusion", "franco-asiatique", "gastronomique"],
    location: {
        address: "79 Rue de Charonne",
        arrondissement: 11,
        lat: 48.853243,
        lng: 2.381254,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJ-8eXUxtz5kcR8qhr1b31dXk"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://confluence-restaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 8, // Estimé craft
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 24, // MANUAL: Median des plats (Tom Cakod/Scallops)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Confluence 2025 Standard (French-Asian Fusion)
            {
                category_type: "starter",
                display_label: "Entrées (Small Plates / Starters)",
                items: [
                    { name: "Crème de pois chiches & coco", price_cents: 1200, description: "Poitrine de porc croustillante, salade d'agrumes, pickles." },
                    { name: "Nems de Saucisse Moto", price_cents: 1400, description: "Crème au bleu, salade croquante, pickles maison." },
                    { name: "Ceviche de bar au calamansi", price_cents: 1600 },
                    { name: "Carpaccio de bœuf façon Shabu-Shabu", price_cents: 1500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Signatures (Main Courses)",
                items: [
                    { name: "Cabillaud Tom Cakod", price_cents: 2400, description: "Lait de coco, galanga, riz gluant, emulsion coco." },
                    { name: "Noix de Saint-Jacques au beurre pistache", price_cents: 2800, description: "Emulsion légumes, tempura de chou-fleur." },
                    { name: "Côte d'Agneau Shashu", price_cents: 3200, description: "Croûte pistache/herbes, purée patate douce violette." },
                    { name: "Risotto d'épeautre aux champignons Shiitaké", price_cents: 2200 },
                    { name: "Plat du jour (Midi)", price_cents: 1900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Créatifs",
                items: [
                    { name: "Poire pochée Citronnelle", price_cents: 1000, description: "Servie avec crumble croquant." },
                    { name: "Riz Gluant Coco & Ananas rôtis", price_cents: 1200 },
                    { name: "Gâteau Chocolat & Gingembre confit", price_cents: 1100 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWje9DICcWWw1szPTGHnZayUQHsGpiwh4P49KcfbLId_m_FhgDiPceSB_tCU047y-WM7jTSc7RW42fF8UoEiVGBKcf77rGIxO5qMgipBy-c6ckME-sB728LBnbWHlBwyAFjtyCSxrIWy-KF8-2ArgdEyY1qmFCIIxNrJpNPSuDAhGUAm2o7Ruz0DvA-r_me7S1KMyvF3_geiEez2EA1ci55oKq_ek1T3plrBYstR56BSfXXXsyO57rslGQG5kq6_6tO0A1jq_w81aRCy7lGGn8QPYgBQBVro4Tgzsz9sCubJYwu4Hk&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXMYTVLFcO7mcufV7LlnBhMImN6IL3Z37Seoz0wMLTtq0Wn_8pUgszc_QVXu8vjfwTNvznA3DRuFwbY7RO-JLvNITJrq4TCBz54BcT1BcGfMm4-DmuRGNpZfJ2CZJKajPFLVxPn810P1IhJK9zq4hUM8jmVl58QdFDs7RbvZMrOtL76CYckQQMWAKPX2iXgRG-jxOUnkPAc77_qOD6W0H4e9h7WSUsLfIMSLU9X_oclQQud7_AshFeflsXyCeSF5fg0yj2aspLf2p6_ktEkGAXDrmZL2sEJ29X7OFnVLg2jyaSRVlanprPav8fT6RWYeF05i007Kv8_dQn4nXyhlpqYnIrIGtAjWKf3jJxW_y6WIb_d6j7cj_wuOYfmny1ZhNdsUo2D42fO16_d8vtW2Gr0bck2BNgldyYDqnp18vW4Eh6kqX3t7hqHkoTjRh0e&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.9,
    description: "Une prouesse de fusion par le chef Hung Luan Nguyen. Confluence mêle la finesse de la gastronomie française aux saveurs vibrantes de l'Asie (Vietnam, Thaïlande). Le dressage est aussi précis que les goûts sont justes.",
    insider_tip: "Le Cabillaud Tom Cakod est le plat qui définit le lieu : un équilibre parfait entre l'onctuosité de la coco et le peps du galanga. Réservez une table près de la cuisine pour voir le ballet du chef.",
    expert_catchline: "L'Asie et la France en parfaite harmonie rue de Charonne.",
    specials: {
        cuisine: ["Fusion Franco-Asiatique", "Bistronomie technique", "Dressages artistiques"],
        drinks: ["Sélection de vins nature", "Thés asiatiques premium"],
        must_eat: "Le Cabillaud Tom Cakod à l'émulsion de coco.",
        must_drink: "Un vin blanc minéral de la Loire pour accompagner les Saint-Jacques."
    }
};
