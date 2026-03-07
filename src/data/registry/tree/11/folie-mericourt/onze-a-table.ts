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
                category: "Brunch du Dimanche (10h-16h)",
                items: [
                    // VERIFIED: OuBruncher (2024)
                    { name: "Brunch complet (salé + sucré)", price: "34.00€", description: "Brunch généreux avec large choix salé et sucré." }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES (Source: site officiel onzeatable.paris)
            // ═══════════════════════════════════════════
            {
                category: "Entrées",
                items: [
                    // VERIFIED: Site officiel (2024)
                    { name: "Œufs mayo façon César", price: "9.00€" },
                    { name: "Champignons farcis", price: "10.00€" },
                    { name: "Soupe à l'oignon", price: "10.00€" },
                    { name: "Velouté de butternut", price: "12.00€" },
                    { name: "Carpaccio de bar", price: "13.00€" },
                    { name: "Foie gras de canard mi-cuit maison", price: "18.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // À PARTAGER / APÉRO (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category: "À Partager / Apéro",
                items: [
                    { name: "Croque à la truffe", price: "18.00€" },
                    { name: "Planche de charcuteries", price: "19.00€" },
                    { name: "Planche mixte (charcuterie + fromage)", price: "20.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: site officiel onzeatable.paris)
            // ═══════════════════════════════════════════
            {
                category: "Plats",
                items: [
                    // VERIFIED: Site officiel (2024) — plats 20-37€
                    { name: "Tartare de bœuf", price: "20.00€" },
                    { name: "Spaghetti à la crème de truffe", price: "21.00€" },
                    { name: "Burger de bœuf effiloché", price: "23.00€" },
                    { name: "Tataki de thon crispy", price: "27.00€" },
                    { name: "Effiloché d'épaule d'agneau confite", price: "28.00€" },
                    { name: "Dos de saumon laqué au soja", price: "29.00€" },
                    { name: "Noix de Saint-Jacques", price: "35.00€" },
                    { name: "Noix d'entrecôte d'Argentine 250g", price: "37.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS & FROMAGES (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category: "Desserts & Fromages",
                items: [
                    // VERIFIED: Site officiel (2024) — desserts 10-13€
                    { name: "Brioche façon pain perdu", price: "10.00€" },
                    { name: "Crème brûlée", price: "10.00€" },
                    { name: "Tartelette au citron meringuée", price: "10.00€" },
                    { name: "Fondant au chocolat", price: "11.00€" },
                    { name: "Assortiment de 3 fromages", price: "11.00€" },
                    { name: "Café gourmand", price: "13.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS — VIGNERONS INDÉPENDANTS (Source: site officiel)
            // ═══════════════════════════════════════════
            {
                category: "Vins (Vignerons Indépendants)",
                items: [
                    { name: "Verre de vin (sélection du moment)", price: "8.00€" },
                    { name: "Bouteille (à partir de)", price: "28.00€" },
                    { name: "Cocktails créations", price: "13.00€" }
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
