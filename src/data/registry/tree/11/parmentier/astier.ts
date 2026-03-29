import { SurgicalPlace } from '../../../type-definition';

export const astier: SurgicalPlace = {
    id: "poi-astier",
    name: "Astier",
    slug: "astier",
    category: "restaurant",
    subcategory: ["bistrot", "terroir", "fromages", "vins", "restaurant"],
    location: {
        address: "44 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8662143,
        lng: 2.37203,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJl7wVSONt5kcRoHde85_JmhI"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 20
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 12:30–14:15, 19:00–21:30\nmardi: 12:30–14:15, 19:00–21:30\nmercredi: 12:30–14:15, 19:00–21:30\njeudi: 12:30–14:15, 19:00–21:30\nvendredi: 12:30–14:15, 19:00–22:30\nsamedi: 12:30–14:15, 19:00–22:30\ndimanche: 12:30–15:00, 19:00–21:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.restaurant-astier.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Restaurant-astier.com + ParisGourmand (2024) — vins accessibles
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 32, // MANUAL: Median des Plats (22, 25, 32, 39, 42)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULES (Source: TheFork + RestoAParis + site officiel)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Formules",
                items: [
                    // VERIFIED: TheFork + site officiel (2024)
                    { name: "Plat du jour canaille (midi)", price_cents: 1500 },
                    { name: "Menu Déjeuner E+P ou P+D", price_cents: 2500 },
                    { name: "Menu Déjeuner E+P+D", price_cents: 2900 },
                    { name: "Menu Soir E+P+D", price_cents: 3500 },
                    { name: "Menu Soir E+P+Fromages+D", price_cents: 4500 }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: site officiel + TheFork + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: Site officiel (2024) — entrées 10-16€
                    { name: "Pâté en croûte de pintade et foie gras", price_cents: 1600 },
                    { name: "Harengs marinés d'Astier, pommes grenaille", price_cents: 1200, description: "Le classique de la maison depuis 1956." },
                    { name: "Cuisses de grenouilles en persillade", price_cents: 1400 },
                    { name: "Saint-Jacques en coquille (en saison)", price_cents: 1600 },
                    { name: "Œuf en meurette", price_cents: 1000 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: site officiel + TheFork + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Site officiel + TheFork (2024) — plats 22-42€
                    { name: "Quenelle de daurade royale, sauce crustacés", price_cents: 2200 },
                    { name: "Quasi de veau rôti", price_cents: 2500 },
                    { name: "Demi-pigeonneau de Pornic rôti", price_cents: 3200 },
                    { name: "Tronçon de turbot rôti", price_cents: 3900 },
                    { name: "Filet de boeuf Simmental", price_cents: 4200 }
                ]
            },
            // ═══════════════════════════════════════════
            // FROMAGES — LA STAR DE LA MAISON (Source: site officiel + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Fromages (affinés Maison Anthès)",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Assiette de 5 fromages", price_cents: 1600 },
                    { name: "Plateau de fromages par personne", price_cents: 2600, description: "Le légendaire plateau à volonté, affiné par la Maison Anthès." },
                    { name: "Plateau à partager", price_cents: 2900 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: LeFooding + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    // VERIFIED: LeFooding (2024) — desserts 9-12€
                    { name: "Mousse au chocolat", price_cents: 900 },
                    { name: "Clafoutis aux abricots", price_cents: 1000 },
                    { name: "Riz au lait cannelle et orange", price_cents: 900 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS — 400 RÉFÉRENCES (Source: site officiel + ParisGourmand)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Cave (400 références)",
                items: [
                    { name: "Verre de vin (à partir de)", price_cents: 800 },
                    { name: "Bouteille (à partir de)", price_cents: 2800 },
                    { name: "Grands Bourgognes et Rhône", price_cents: 8000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXlTDlhdYFbv1_o0xUhu15xfVLDPfkON2Z1l2mvxQPvVy_kvKQQTOFqrWgCgpw_p715YIaI-WWBbBE6lSNyd_BiRw_XWB4vl0FnHhF4nPhPvvhChCoAV1iqvmwYrKo-nr2urjf-AHmc9B2U4SO6zrqPHUtyOXoavTwqBXP8owzL2UFLX3tPDcqfaBqaZoYhdQyz05Ex_To9PKB5A-dnLqhhszqC3OihLAGNd31NBLoNd_tDZNfrTNEXmeIKukq-BO1PN9phqCgC2ssGNapSW2lRA8KQewBGBZ0PGTREOdjgdw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUq0fJxDN9S8I1LNeTeTbIPoqtIMG2Y0-DKpfTj7xSXQGS9A4A5j_rbwZ9CUC8_tHjlT5icMN76IVkIH81MZsvmxNvGfQ-mTgVzbWQ3OVcdK5LMzRwwiIruSdVrtvvf8eCbVnU4fdP5H5nzUba1fq4jxGOl4wN1leH4FYw7VDI8eS4VgsDfyvtaxx56gCHemITYPcfP90w14BXuRmMnvWSP6L5o4xbv57wFo_q11a8rjU6d-gA3gQIa3q3T05lP22mqvQwBBg_qDrRCHqJiVifhRX227vgnCy-Klt6Us7aZfw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU_rt7iZcpEzy-uirAKetjGK9ZWH7SobLE6LOdpHZ2GKVeaLfFO3TQ6sF1XdGv2F7d5IV17AMtirjw0JEbcWIAWFoE7WgZwt8UEKDIpILFwZUf3_6wKiKIRKJUO5Z-6g_Uq-xgFU4xPvH1A-HHc1J74R9whSvPX61rqwYcCo3oh4irxm7mw9cYVaHuVGz-quRJdZrjPo9_A9UanUWBlJ5qOKqhxYgrEOkAWKmj3Ccr5k77yacEFo6VtgfwbTLh2_81IlHwnysUFhnBo0-XbpL5zPyYpHJ4vxd7mkYJSTdODO5MLbDO5QQVbUbNbwInCsf618TjHYNeM2sKfrs6CgosRt7aR9HHkwO0r0Ru-zHPalEThDy1_WvS_bKKwE3BeUyJ-8xsa7yofzgW1gXdxS0fzBJSVUyWGaSofkVjCjWdM94_u1602rbAq_If2Q4Yj&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "restaurant_astier",
    verified: true,
    google_rating: 4.3,
    description: "Astier est l'un des derniers vrais bistrots parisiens, une institution depuis 1956 sur la rue Jean-Pierre Timbaud. La cuisine est celle de la France profonde : pâté en croûte, harengs marinés, quasi de veau, pigeon rôti. Le tout servi dans un décor authentique avec nappes à carreaux et serveurs en tablier. Mais la vraie star, c'est le plateau de fromages affinés par la Maison Anthès — un monument à lui seul.",
    insider_tip: "• Le plateau de fromages à 26€/personne est LA raison pour laquelle les gens reviennent : c'est un buffet d'affinés exceptionnels, probablement le meilleur rapport qualité-prix de Paris pour le fromage.\n• Le menu E+P+Fromages+Dessert à 45€ est le sweet spot absolu : 4 temps pour moins de 50€ dans un bistrot historique.\n• Les harengs marinés d'Astier (12€) sont un classique qui n'a pas bougé depuis 1956.\n• La cave de 400 références est excellente et les prix restent accessibles.",
    expert_catchline: "L'institution bistrot de 1956 : pâté en croûte, pigeon rôti et le légendaire plateau de fromages.",
    specials: {
        cuisine: ["Pâté en croûte pintade-foie gras", "Harengs marinés d'Astier", "Demi-pigeonneau rôti", "Filet de boeuf Simmental"],
        drinks: ["Cave de 400 références", "Grands Bourgognes", "Vins du Rhône accessibles"],
        must_eat: "Le menu à 45€ avec fromages est le meilleur deal de la maison. Les plats signatures : demi-pigeonneau de Pornic (32€), quenelle de daurade (22€), filet de boeuf Simmental (42€). Et surtout, ne JAMAIS skipper le plateau de fromages Anthès à 26€.",
        must_drink: "La cave de 400 références est l'une des plus complètes du 11ème. Demandez conseil au sommelier pour un Bourgogne ou un Rhône qui se marie avec le plateau de fromages."
    }
};
