import { SurgicalPlace } from '../../../type-definition';

export const onze_a_table: SurgicalPlace = {
    id: "poi-onze-a-table",
    name: "Onze à Table",
    slug: "onze-a-table",
    category: "restaurant",
    subcategory: ['français'],
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
                    { name: "Soupe à l’oignon", price_cents: 1000 },
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
                    { name: "Effiloché d’épaule d'agneau confite", price_cents: 2800 },
                    { name: "Dos de saumon laqué au soja", price_cents: 2900 },
                    { name: "Noix de Saint-Jacques", price_cents: 3500 },
                    { name: "Noix d’entrecôte d'Argentine 250g", price_cents: 3700 }
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
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/onze-a-table/gallery_4.jpg"
    ]
  },
    instagram_handle: "onzeatable",
    verified: true,
    google_rating: 4.7,
    description: "Onze à Table est le bistrot fait maison parfait de la Folie Méricourt : une carte généreuse qui va du tartare de bœuf au tataki de thon crispy, en passant par une entrecôte d’Argentine et un foie gras mi-cuit maison. Le dimanche, le brunch copieux à 34€ attire tout le quartier. Le cadre est chaleureux et moderne, avec une carte de vins de vignerons indépendants.",
    insider_tip: "• Le brunch du dimanche à 34€ est un rendez-vous incontournable du 11ème — venez tôt (dès 11h) pour avoir une table.\n• Le Tataki de thon crispy (27€) est le plat signature — la cuisson est parfaite.\n• Les Spaghetti à la crème de truffe (21€) sont une valeur sûre prix/plaisir.\n• La noix d’entrecôte d'Argentine (37€) est un beau morceau de 250g pour les amateurs de viande.\n• Le foie gras mi-cuit maison (18€) en entrée est fait sur place et change la donne vs les versions industrielles.",
    expert_catchline: "Le bistrot fait maison du 11ème : du tartare au tataki, brunch copieux et vins de vignerons.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Vins de vignerons indépendants", "Cocktails créations", "Carte accessible"],
        must_eat: "Cuisine française. Le Tataki de thon crispy (27€) est incontournable. En viande, l’entrecôte d’Argentine 250g (37€) est un classique. Le foie gras mi-cuit maison (18€) vaut le détour en entrée. Le dimanche : brunch complet à 34€.",
        must_drink: "La carte des vins est courte mais pointue — uniquement des vignerons indépendants. Les cocktails créations à 13€ surprennent aussi."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Tataki de thon crispy (27€) est incontournable. En viande, l’entrecôte d",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
