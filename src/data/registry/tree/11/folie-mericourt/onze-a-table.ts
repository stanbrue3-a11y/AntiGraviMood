import { SurgicalPlace } from '../../../type-definition';

export const onze_a_table: SurgicalPlace = {
    id: "poi-onze-a-table",
    name: "Onze à Table",
    slug: "onze-a-table",
    category: "restaurant",
    subcategory: ["bistrot", "fait maison", "brunch", "vins", "restaurant"],
    location: {
        address: "10 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8618461,
        lng: 2.3745113,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJ_5AjG6pt5kcRhGWe1wHOKfU"
    },
    moods: {
        chill: 65,
        festif: 20,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: Fermé\nmardi: 11:30–15:00, 18:00–00:00\nmercredi: 11:30–15:00, 18:00–00:00\njeudi: 11:30–15:00, 18:00–00:00\nvendredi: 11:30–15:00, 18:00–00:00\nsamedi: 11:30–15:00, 18:00–00:00\ndimanche: 10:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://onzeatable.paris/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        pint_price: 0,
        // VERIFIED: Site officiel — carte des vins vignerons indépendants
        wine_glass: 8.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Median des Plats (20, 21, 23, 27, 28, 29, 35, 37) = (27+28)/2
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // BRUNCH DU DIMANCHE (Source: OuBruncher + site officiel)
            // ═══════════════════════════════════════════
            {
                category_type: "other",
                display_label: "Brunch du Dimanche (10h-16h)",
                items: [
                    // VERIFIED: OuBruncher (2024)
                    { name: "Brunch complet (salé + sucré)", price_cents: 3400, description: "Brunch généreux avec large choix salé et sucré." }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: site officiel onzeatable.paris)
            // ═══════════════════════════════════════════
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Œufs mayo façon César", price_cents: 900 },
                    { name: "Champignons farcis", price_cents: 1000 },
                    { name: "Soupe à l'oignon", price_cents: 1000 },
                    { name: "Velouté de butternut", price_cents: 1200 },
                    { name: "Carpaccio de bar", price_cents: 1300 },
                    { name: "Foie gras de canard mi-cuit maison", price_cents: 1800 }
                ]
            },
            // ═══════════════════════════════════════════
            // À PARTAGER / APÉRO (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category_type: "sharing",
                display_label: "À Partager / Apéro",
                items: [
                    { name: "Croque à la truffe", price_cents: 1800 },
                    { name: "Planche de charcuteries", price_cents: 1900 },
                    { name: "Planche mixte (charcuterie + fromage)", price_cents: 2000 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: site officiel onzeatable.paris)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Site officiel (2024) — plats 20-37€
                    { name: "Tartare de bœuf", price_cents: 2000 },
                    { name: "Spaghetti à la crème de truffe", price_cents: 2100 },
                    { name: "Burger de bœuf effiloché", price_cents: 2300 },
                    { name: "Tataki de thon crispy", price_cents: 2700 },
                    { name: "Effiloché d'épaule d'agneau confite", price_cents: 2800 },
                    { name: "Dos de saumon laqué au soja", price_cents: 2900 },
                    { name: "Noix de Saint-Jacques", price_cents: 3500 },
                    { name: "Noix d'entrecôte d'Argentine 250g", price_cents: 3700 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS & FROMAGES (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts & Fromages",
                items: [
                    // VERIFIED: Site officiel (2024) — desserts 10-13€
                    { name: "Brioche façon pain perdu", price_cents: 1000 },
                    { name: "Crème brûlée", price_cents: 1000 },
                    { name: "Tartelette au citron meringuée", price_cents: 1000 },
                    { name: "Fondant au chocolat", price_cents: 1100 },
                    { name: "Assortiment de 3 fromages", price_cents: 1100 },
                    { name: "Café gourmand", price_cents: 1300 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS — VIGNERONS INDÉPENDANTS (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Vins (Vignerons Indépendants)",
                items: [
                    { name: "Verre de vin (sélection du moment)", price_cents: 800 },
                    { name: "Bouteille (à partir de)", price_cents: 2800 },
                    { name: "Cocktails créations", price_cents: 1300 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVEu5MuQcwS1BXsKRKOtVas_fQNAh2tGqPATUgk7RCWvQXTJHg_ML3-6d-uLxnFUXf3gYcJ0y9e5yAG9dGnCH4eymWmOFURcv6osMrqqw3gyLyh50Q92Ta7WzLVK6wsxXxtPFBCdelzTWln8ZysJgR8Mu8OwRjyFIyGTarMyFBCRcVzvda2-XAno_Mz80hOOQ7CJJz6lW8X7hTSelxlDT5ON5PpY764nOhh69YS_KEAWP9xhYZ2fANa1WOKubI8cHlTCIp20UUXFVT6KuLE01y0b2E_708yTt1AF8nsYG-cPw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVakS38Bb0yylVRM6hb-XOA4r2pL9NL7d-UF0zs_G-X2F7vvh_8S_fyWv1D8livANmxVXhC4h9vEqi3caabMtbEOgz-jSGjl7EZv76r5bs3Bm5gbG1YStFX0vvS014JZZE6JyH0GyGHHvIn9Hr_c8N5ZvWTCrR2IblUXo_vDq3B4It-Fxvm9MonDeeIG-QIbdLmN-K1t1CguPXjofx6yju2A7EGaoA5CDC8k8xtessH0M1v9UV6oNu5cfEaIr3ZEmcw-mXSuyBfi-Nr5F-6OKIJaXnAnVsoFz6cMSytQB0MIQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXdbOtPI5p7MvtNYp7b36tA-fIQNl7Jb98Beq-cJRp9I0HLrxLCDRYdHw4xPnQSwgluaQfaVJLdKfZHVPhlcJR28ZH0d8155VDCo1hBJ0U2WCZwDW1U3XZEDxPZt4iImawbt_gvOhaR-DonuNIybD0OR-a6xqo27YEcuKR06nwyRNf5fD3lFyFxfdtlIen9DCwR-cxKxnnRcK4unlxo4wLFdN0xATIgMdgUVT2pfzMke_ZPro5Zdx7JoWXXIM46LCC2l44BHHfJkZcAe4zEdtH51dWScIcbpY71PUijflYsUT53fa3M1GNgxP1-L0EcQFmJvrxXUG9vCY5NezzjM4DiIx1eTyE-iWlhgB0bwKutW-MnfBmsoVBM4GvKAzVtwXMiZXuJZ4R0W3jY-PmqbM0lz6erUJnEONJ37TgpxtUJRQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "onzeatable",
    verified: true,
    google_rating: 4.7,
    description: "Onze à Table est le bistrot fait maison parfait de la Folie Méricourt : une carte généreuse qui va du tartare de bœuf au tataki de thon crispy, en passant par une entrecôte d'Argentine et un foie gras mi-cuit maison. Le dimanche, le brunch copieux à 34€ attire tout le quartier. Le cadre est chaleureux et moderne, avec une carte de vins de vignerons indépendants.",
    insider_tip: "• Le brunch du dimanche à 34€ est un rendez-vous incontournable du 11ème — venez tôt (dès 11h) pour avoir une table.\n• Le Tataki de thon crispy (27€) est le plat signature — la cuisson est parfaite.\n• Les Spaghetti à la crème de truffe (21€) sont une valeur sûre prix/plaisir.\n• La noix d'entrecôte d'Argentine (37€) est un beau morceau de 250g pour les amateurs de viande.\n• Le foie gras mi-cuit maison (18€) en entrée est fait sur place et change la donne vs les versions industrielles.",
    expert_catchline: "Le bistrot fait maison du 11ème : du tartare au tataki, brunch copieux et vins de vignerons.",
    specials: {
        cuisine: ["Tataki de thon crispy", "Entrecôte d'Argentine", "Tartare de bœuf", "Foie gras mi-cuit maison"],
        drinks: ["Vins de vignerons indépendants", "Cocktails créations", "Carte accessible"],
        must_eat: "Le Tataki de thon crispy (27€) est incontournable. En viande, l'entrecôte d'Argentine 250g (37€) est un classique. Le foie gras mi-cuit maison (18€) vaut le détour en entrée. Le dimanche : brunch complet à 34€.",
        must_drink: "La carte des vins est courte mais pointue — uniquement des vignerons indépendants. Les cocktails créations à 13€ surprennent aussi."
    }
};
