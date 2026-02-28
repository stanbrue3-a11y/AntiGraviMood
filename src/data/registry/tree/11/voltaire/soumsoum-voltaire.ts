import { SurgicalPlace } from '../../../../type-definition';

export const soumsoum_voltaire: SurgicalPlace = {
    id: "poi-soumsoum-voltaire",
    name: "SoumSoum Voltaire",
    slug: "soumsoum-voltaire",
    category: "restaurant",
    subcategory: ["israelien", "levantin", "street-food", "pita", "houmous", "kasher"],
    verified: true,
    google_rating: 4.5,
    instagram_handle: "soumsoumparis",
    location: {
        address: "144 Boulevard Voltaire",
        arrondissement: 11,
        lat: 48.856532,
        lng: 2.381943,
        nearest_metro: "Voltaire",
        metro_lines: [9],
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        opening_hours_raw: "Lundi: 11:45 – 22:45\nMardi: 11:45 – 22:45\nMercredi: 11:45 – 22:45\nJeudi: 11:45 – 22:45\nVendredi: 11:45 – 14:30\nSamedi: Fermé\nDimanche: 11:45 – 22:45",
        main_action: {
            type: "site",
            url: "https://soumsoum.bykomdab.com/"
        },
        cuisine_type: "Israélienne & Levantine"
    },
    pricing: {
        is_free: false,
        index_price: 20,
        primary_price_type: "dish",
        // VERIFIED: TheFork Menu 2026 (July 2025 update) — 18.99€
        dish_price: 18.99,
        // VERIFIED: Deliveroo/Official Site 2026 — 3.50€
        soft_price: 3.50,
        // NOT FOUND: No verified source for wine glass price — set to 0
        wine_glass: 0,
        // NOT FOUND: No verified source for coffee price — set to 0
        coffee_price: 0,
        // NOT FOUND: No mention of a pint price for this branch — set to 0
        pint_price: 0,
        menu_items: [
            {
                category: "Pitas Maison (Pain artisanal)",
                items: [
                    { name: "Pita Falafel", price: "12.99€", description: "Falafels maison, houmous, aubergines frites, chou blanc, salade israélienne, cornichons et tehina" },
                    { name: "Pita Sabich", price: "11.99€", description: "Aubergines frites, œuf dur, pomme de terre, houmous, tehina et amba (mangue épicée)" },
                    { name: "Pita Keftas", price: "15.00€", description: "Viande de bœuf et agneau hachée, épices levantines, houmous et salade" },
                    { name: "Pita Burger", price: "17.99€", description: "Steak de bœuf, oignons rouges, cornichons, tehina et frites" }
                ]
            },
            {
                category: "Shakshuka Bowls (Servis avec pita)",
                items: [
                    { name: "Shakshuka Classique", price: "18.99€", description: "Confit de tomates, poivrons, ail, oignons, œuf poché et herbes fraîches" },
                    { name: "Shakshuka Royale", price: "22.99€", description: "La classique agrémentée de viande de bœuf hachée et épicée" },
                    { name: "Shakshuka Merguez", price: "25.00€", description: "Variante généreuse avec merguez grillées" }
                ]
            },
            {
                category: "Houmous & Assiettes",
                items: [
                    { name: "Houmous Bassar", price: "21.99€", description: "Houmous tiède, viande hachée sautée, oignons et pignons de pin" },
                    { name: "Houmous Massabaha", price: "14.00€", description: "Pois chiches entiers, tehina, citron et persil" },
                    { name: "Assiette Falafel", price: "21.99€", description: "Grande assiette composée avec houmous, falafels et mezzés" }
                ]
            },
            {
                category: "Mezzés & Accompagnements",
                items: [
                    { name: "Babaganush", price: "8.99€", description: "Caviar d'aubergine fumé, tehina et grenade" },
                    { name: "Labane vegan", price: "9.00€", description: "Spécialité crémeuse au lait végétal et zaatar" },
                    { name: "Frites de patate douce", price: "6.50€" }
                ]
            },
            {
                category: "Les Boissons Signature",
                items: [
                    { name: "Limonana Maison", price: "6.50€", description: "Citronnade fraîchement pressée à la menthe" },
                    { name: "Bière Goldstar (Bouteille)", price: "7.00€", description: "L'incontournable bière blonde israélienne" },
                    { name: "Bière Maccabi (Bouteille)", price: "7.00€" }
                ]
            }
        ],
        smart_tip: "Une pita falafel (12.99€) suffit largement pour un déjeuner. Le lieu est Kasher (Beth Din) et fermé le samedi."
    },
    moods: { chill: 20, festif: 40, culturel: 90 },
    description: "SoumSoum Voltaire est l'une des ambassades les plus réussies de la street-food de Tel-Aviv à Paris. Dans un cadre boisé et chaleureux, on y savoure des pitas artisanales d'une souplesse rare, garnies de produits ultra-frais. Le houmous, servi tiède, est d'une onctuosité remarquable. C'est un lieu vibrant, particulièrement prisé pour ses shakshukas généreuses et son ambiance de cantine levantine moderne.",
    expert_catchline: "Le temple de la pita moelleuse et du houmous tiède au cœur de Voltaire.",
    insider_tip: "- Le vendredi, le restaurant ferme tôt (14h30) pour Shabbat. Ne comptez pas y dîner ce jour-là.\n- La Limonana maison est indispensable pour équilibrer les saveurs épicées de la pita Kefta.\n- Les portions sont massives : si vous prenez une assiette de houmous, partagez les mezzés.",
    specials: {
        cuisine: ["Israélien", "Moyen-Orient", "Kasher"],
        drinks: ["Limonana (6.50€)", "Bière Goldstar (7€)"],
        must_eat: "Cuisine méditerranéenne & levantine. La Pita Sabich (11.99€) et le Houmous Bassar (21.99€).",
    },
    images: { hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXghPBMH_IXzrQ2SGF0LUBzvb_KPlJtOFMzU2wOHH_ybC9GO1_Q-oDZNweIkoZV-syWJ1GvBsrWeWFWybD8jiV1Hg9_9l5Ji3QlFaPxCdtDxe6gd8L_NfN1kjpbUOOzmJ3Xobhn-ERt2QHNO-LVxGOgY_M6I_I0K3F2iXJfc7kh0MjCp1TIpFWq9egXqRm64hLMhHzUZIp3gUgZM75fFqzXvtXla3EEK2846IBqx-VzbRSgG9Wwc0h6tEhxGNgTcjtaLxcx1cmbkSav7ukHiyPU2HKEfkg6PbBvbba6H13GgxuCoy0GLXBT2T7BtfSB98wpdq0psqHTeqtg-EfT2ajsFRg6XmCkK5DiRcZqugKJpzgUf04jn2BnygIynoQpdZI7kHS2g9Q3egU8TlJu0t_VwdZmNzgbWgDeU4vcdpWhP6ViPWCIvg2fVkIlKh18dh29YrbhIndPXOnt7tXalxtL29wQsT9eVXrUwFk1ox9OwNcMYwc1zVDqyrPRg3ssv1xw3DxEFP2O7HkAb76NaRcV2s4j0oLiLaqOn0ZYHrEcyL4U-RcXfrUWk8AFXEohMywv7GPU&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM", gallery: [] },
    source: "research_ai"
};
