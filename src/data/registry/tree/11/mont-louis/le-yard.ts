import { SurgicalPlace } from '../../../type-definition';

export const le_yard: SurgicalPlace = {
    id: "poi-le-yard",
    name: "YARD",
    slug: "le-yard",
    category: "restaurant",
    subcategory: ["cave à vins", "bistronomique", "vins natures", "restaurant"],
    location: {
        address: "6 Rue de Mont-Louis",
        arrondissement: 11,
        lat: 48.85813109999999,
        lng: 2.3883146,
        nearest_metro: "Philippe Auguste",
        metro_lines: [2],
        google_id: "ChIJyRXT9RJt5kcR-MVQuEjbqUc"
    },
    moods: {
        chill: 70,
        festif: 15,
        culturel: 15
    },
    practical: {
        // VERIFIED: Google Maps API (2026-03-06)
        opening_hours_raw: "lundi: 12:00–14:30, 18:30–23:30\nmardi: 12:00–14:30, 18:30–23:30\nmercredi: 12:00–14:30, 18:30–23:30\njeudi: 12:00–14:30, 18:30–23:30\nvendredi: 12:00–14:30, 18:30–23:30\nsamedi: 12:00–14:30, 18:30–23:30\ndimanche: 18:30–23:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.culinaries.fr/yard-mont-louis/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        // VERIFIED: TheFork + Culinaries (2024) — verres natures disponibles
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 23, // MANUAL: Median of Plats (18, 22, 24, 28) — Côte de boeuf 130€ exclue (partage)
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // FORMULES DÉJEUNER (Source: TheFork + Yonder + LeBlogadora)
            // ═══════════════════════════════════════════
            {
                category: "Formules Déjeuner (Semaine)",
                items: [
                    // VERIFIED: TheFork (2024) — 23€ et 28€
                    { name: "Menu Midi : Plat seul", price: "23.00€" },
                    { name: "Menu Midi : Entrée + Plat ou Plat + Dessert", price: "28.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // ENTRÉES / PETITES ASSIETTES (Source: TheFork + LeBlogadora + Yonder)
            // ═══════════════════════════════════════════
            {
                category: "Entrées / Petits Plats à Partager",
                items: [
                    // VERIFIED: TheFork (2024) — entrées 8-12€
                    { name: "Huîtres, pomme Granny Smith et aneth", price: "12.00€" },
                    { name: "Brocoli croustillant, sweet chili", price: "8.00€" },
                    { name: "Croquettes de boeuf bourguignon", price: "10.00€" },
                    { name: "Assiette de fromages affinés", price: "12.00€" },
                    { name: "Terrine du moment", price: "10.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS (Source: TheFork + Yonder + LeBlogadora)
            // ═══════════════════════════════════════════
            {
                category: "Plats",
                items: [
                    // VERIFIED: TheFork + Yonder (2024) — plats 18-30€
                    { name: "Gnocchi, sauce aux champignons", price: "18.00€" },
                    { name: "Poitrine de porc confite", price: "22.00€" },
                    { name: "Bar de ligne poêlé, légumes de saison", price: "24.00€" },
                    { name: "Entrecôte grillée, sauce maison", price: "28.00€" },
                    { name: "Côte de boeuf à partager (pour 2)", price: "130.00€", description: "La pièce star, à commander en avance." }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: TheFork)
            // ═══════════════════════════════════════════
            {
                category: "Desserts",
                items: [
                    // VERIFIED: TheFork (2024) — desserts ~7-8€
                    { name: "Crémeux au chocolat", price: "8.00€" },
                    { name: "Riz au lait", price: "7.00€" },
                    { name: "Crème brûlée", price: "8.00€" }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS NATURES — 250+ RÉFÉRENCES (Source: Culinaries + TheFork)
            // ═══════════════════════════════════════════
            {
                category: "Vins Natures (250+ références en cave)",
                items: [
                    { name: "Verre de vin nature (sélection du jour)", price: "7.00€" },
                    { name: "Bouteille nature (à partir de)", price: "25.00€" },
                    { name: "Dégustation dominicale (thématique, le dimanche)", price: "30.00€", description: "Chaque dimanche, dégustation à thème avec rencontre vigneronne." }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX59QXmg3ZiVRfoxJs0AJ1PJJVakVTSUji4lXfjY27B5rhBCxGGXsjCwUPlvyUEU3A5V5_B26fUQM3XcJxInzyfD6Qy_E3JrRAnlMnf16KaDgYqB87bkVEOvmrtRvsWVFr_kNCbgbD6-ziZwz2V1JlMYeweAG0zAZy0honr65rfGowE2vHeT2E0caob_VU9zGTazXSvkjieaaj5oiFAsLvSe-L_5Rf4aFDf9VGQPoCyiD1ZgmJEs5izA_ODFZ1ebmprlz0wbHzexZPPQ3t7zXuRPNSt3R0ciyIytO-97cyPeQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWPU9rMPeLyToSK1R77S4UdUjfYKYOxR61P-HKrjd-1CP9P-gcFdR8AnWlPa04ReptFToJy13mqart-75JPIUsdmJxv-EtRTe0ra9bXp1wIwobNr_2t8J9kt45GRu0eUYFue9QoEIOgwjxsJXOqlktIB7HKNAfK8Esjt6ZF30GWeJiIPz0vPNjKe3MU8B6vi_JuKs4WnNyWtrhMog62hKUO8ASgmHE9nAkT5cPXp0YI8apP4xorDKaIfFp7K3f4iKEES7xe1uoZvxQKh9xU4KoQV1Nub9MUUiMZy-yNI0bjng&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXMxyiHhCO85VnSZYGD5xGMD-IEcjEMHuwGdDDr1f8knvprSALlFhC_a3ikEP_74ouxdjwmBda8GYUeATOkmkS9cvM574RqhtBMgpsvB69mPQZd9Xq1WmNMKu3KFmFh9zvabLX2CclQuAWlqZpATzdAdxIQDE3_3QT6dbU6hW0hysNkuKU1o4HFdBPh9oylkjrC8v140DRvHYH4v0Cepy6mLF-c3CL72uJmkbstnLnxqNGYUbQ-lgAisEZfdfX9p1PNxddWuVAsY3FeWy6fXY2IhfzGNoBIYx8gDxbG_SyYO9LFA8oMJ8g7TS4o7YJXDWe1nfiS_Gpp-6UQV2-1lv7ReP1pDzSCSsCcegJycmcj7loF793WcneUwbJfTBquCJWDq63bbqXDK1V4MBagjyZBrTJzkphteXdWuZOB2LlQZRZh&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "yard_paris",
    verified: true,
    google_rating: 4.5,
    description: "Le YARD, c'est avant tout une cave à vin naturel de 250+ références ET un restaurant bistronomique au cœur du 11ème. Le concept est malin : on choisit ses plats à la carte (viande, poisson, légumes grillés), on partage, et on se laisse guider par la sélection naturelle du jour au verre. L'ambiance est chaleureuse, sans chichi, idéale pour un dîner entre amis avec du bon vin en toile de fond.",
    insider_tip: "• Le menu midi entre 23€ et 28€ est un deal excellent pour cette qualité dans le quartier.\n• Chaque dimanche, ils organisent une dégustation thématique à 30€ avec un vigneron invité — c'est l'événement du week-end pour les amateurs de vin nature.\n• On peut acheter des bouteilles à emporter directement depuis la cave avec une réduction de 30% sur le prix restaurant.\n• La côte de bœuf à 130€ (pour 2) se commande à l'avance et se partage avec un bon rouge nature.",
    expert_catchline: "Le bistrot-cave du 11ème avec 250+ quilles natures et un menu du marché redoutable.",
    specials: {
        cuisine: ["Gnocchi champignons", "Poitrine de porc confite", "Côte de bœuf", "Huîtres Granny Smith"],
        drinks: ["250+ vins natures en cave", "Sélection au verre quotidienne", "Dégustations dominicales 30€"],
        must_eat: "Les plats changent tous les jours au gré du marché. Misez sur le menu déjeuner Entrée + Plat à 28€ pour une valeur imbattable. Le soir, les assiettes à partager s'imposent : croquettes de bourguignon (10€), brocoli croustillant (8€) et un bon plat de poisson du jour.",
        must_drink: "La cave est le vrai trésor. 250+ cuvées naturelles, dont beaucoup sont introuvables ailleurs. Les verres du jour changent quotidiennement et commencent à 7€."
    }
};
