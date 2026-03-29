import { SurgicalPlace } from "../../../type-definition";

export const cafe_du_rendez_vous: SurgicalPlace = {
    id: "poi-cafe-du-rendez-vous",
    name: "Café du Rendez-Vous",
    slug: "cafe-du-rendez-vous",
    category: "café",
    subcategory: ["bistrot", "terrasse", "brasserie", "denfert-rochereau", "parisien", "cocktails"],
    location: {
        address: "2 Avenue du Général Leclerc, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8336678,
        lng: 2.3315991,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: ["4", "6", "RER B"],
        google_id: "ChIJEYElfrdx5kcR8NJ6jn7CDG8"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 1:00 AM | Tuesday: 7:00 AM – 2:00 AM | Wednesday: 7:00 AM – 2:00 AM | Thursday: 7:00 AM – 2:00 AM | Friday: 7:00 AM – 2:00 AM | Saturday: 8:00 AM – 2:00 AM | Sunday: 8:00 AM – 1:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.lecafedurendezvous.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        dish_price: 17,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Brasserie Maison",
                items: [
                    { name: "Tartare de Boeuf Charolais 'Rendez-Vous'", price_cents: 1750 },
                    { name: "Hamburger Maison au Cantal", price_cents: 1800 },
                    { name: "Poulet Fermier Rôti, Frites Maison", price_cents: 1850 },
                    { name: "Saucisse au couteau de l'Aveyron", price_cents: 1650 },
                    { name: "Tartare de Saumon Frais aux Herbes", price_cents: 1900 },
                    { name: "Entrecôte Grillée (300g), Sauce Poivre", price_cents: 2200 },
                    { name: "Linguine à la Tomate et Basilic Frais", price_cents: 1550 },
                    { name: "Plat du Semainier (du jour)", price_cents: 1500 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Salades & Planches (Happy Hour)",
                items: [
                    { name: "Salade César au Poulet Croustillant", price_cents: 1420 },
                    { name: "Salade Niçoise au Thon Frais", price_cents: 1450 },
                    { name: "Oeuf Cocotte à la Tomate Confite", price_cents: 1150 },
                    { name: "Asperges Rôties au Parmesan", price_cents: 750 },
                    { name: "Grande Planche Mixte Rendez-Vous", price_cents: 2400 },
                    { name: "Tapas du moment (l'unité)", price_cents: 600 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Glaces",
                items: [
                    { name: "Nougat Glacé Maison aux Fruits Secs", price_cents: 680 },
                    { name: "Coulant au Chocolat Coeur Fondant", price_cents: 800 },
                    { name: "Tarte du Jour", price_cents: 750 },
                    { name: "Glaces Artisanales (2 boules)", price_cents: 700 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXjeFAahcOYVQmfUWcW2kgK__vTQVHAILXCe2uX3FOg2O6zF7tE94sZplgwIoSZ8HjSAjJhKCWvfccR_xnOTYoMMxx9c27RENq-8Vx7TeQqMgWzCmlT7Rw3eoplWBQe75fjjtipn68iU4sC5l0xOd_s2myA1A4Oha1_c6veVjnEqnOES4LL2rlgDLsF48vJxGVErnvngaki-H1KBfzfdJkGBfssUdSSXLM0p35K1VAWJGvQ3oEL3fbJy3-wwfyeH8Itm39EroZwdif_k5Un0CPl1nKyPCGQs8z75Hz1N7Y&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWGi0s6e2cbJkuqiu9L2SyHESaYsJ_Ny5P9W_AVE9h3j-SKEU8Ovnio0YKL_D6_YUXxbmpj--9TZj1N2jSNSQia4hagl72HvmkR-1J04TIbchD_8jew31SLGu3--babB09H5tKsdHD10BewZKcowsoV4-jhpFcvxDscObbrsnZJRVL34MC3q6EkWw_VT3UdwhsZMuanRnPbQmXupZt-0brxjp4YuSdM7YIvlTMLoncitql3j8FzQSibF3mBdQf8pk_RFdmDeGw0csvbFiMrb5p85NsBTjjIotBQYuqs8ZY&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 3.8,
    description: "Posté à l'angle stratégique de la place Denfert-Rochereau, le Café du Rendez-Vous est le point de ralliement incontournable du quartier. Ce grand bistrot parisien, avec sa terrasse chauffée qui s'étire généreusement sur le trottoir, offre une animation constante du petit-déjeuner au dernier verre nocturne. L'ambiance y est cosmopolite, vibrante et décontractée, attirant aussi bien les voyageurs en transit que les habitués du 14ème. C'est le lieu idéal pour une pause rapide, un déjeuner de travail efficace ou un Happy Hour prolongé entre amis, le tout dans un décor de brasserie moderne et chaleureuse.",
    insider_tip: "Leur Happy Hour est l'un des plus généreux du quartier, incluant des cocktails créatifs et des planches de produits sourcés. C'est aussi l'endroit parfait pour observer le tumulte parisien depuis la terrasse sans être pressé par le service.",
    expert_catchline: "L'escale vibrante et conviviale face à Denfert-Rochereau.",
    specials: {
        cuisine: ["Bistrot Français", "Tapas"],
        drinks: ["Large choix de Bières", "Cocktails Happy Hour"],
        must_eat: "L'Hamburger maison au Cantal et les Oeufs Cocotte.",
        must_drink: "Une bière pression rafraîchissante en terrasse."
    },
    source: "expert_human"
};
