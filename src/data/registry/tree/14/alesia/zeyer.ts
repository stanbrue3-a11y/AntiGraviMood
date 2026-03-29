import { SurgicalPlace } from "../../../type-definition";

export const zeyer: SurgicalPlace = {
    id: "poi-zeyer-paris-14",
    name: "Le Zeyer",
    slug: "le-zeyer-paris",
    category: "restaurant",
    subcategory: ["brasserie", "art-deco", "institution", "fruits-de-mer", "terrasse", "parisien"],
    location: {
        address: "62 Rue d'Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8279434,
        lng: 2.3283286,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJ0-TRlrFx5kcRbNxcYuORb7A"
    },
    moods: {
        chill: 50,
        festif: 40,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 8:00 AM – 11:00 PM | Tuesday: 8:00 AM – 11:00 PM | Wednesday: 8:00 AM – 11:00 PM | Thursday: 8:00 AM – 11:00 PM | Friday: 8:00 AM – 11:30 PM | Saturday: 8:00 AM – 11:30 PM | Sunday: 8:00 AM – 11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://www.brasserielezeyer.com/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 48,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Incontournables du Zeyer",
                items: [
                    { name: "Le Burger Zeyer au Cantal & Poitrine Fumée", price_cents: 2400 },
                    { name: "Tartare de Boeuf préparé à la demande", price_cents: 2200 },
                    { name: "Faux-filet poêlé, Sauce Marchand de Vin", price_cents: 2600 },
                    { name: "Cuisse de Canard Confite, Pommes Sautées", price_cents: 2300 },
                    { name: "Poulet Fermier Rôti, Mousseline de PDT", price_cents: 2300 },
                    { name: "Cassolette de Rognons de Veau Grand-Mère", price_cents: 2400 },
                    { name: "Andouillette AAAAA grillée, Sauce Moutarde", price_cents: 2500 },
                    { name: "Souris d'Agneau confite au Romarin", price_cents: 2400 },
                    { name: "Magret de Canard à l'Orange", price_cents: 2650 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Produits de la Mer & Entrées",
                items: [
                    { name: "Plateau de Fruits de Mer Signature", price_cents: 7300 },
                    { name: "Médaillons de Lotte Poêlés au Curry", price_cents: 3200 },
                    { name: "6 Gros Escargots au Beurre d'Ail", price_cents: 1350 },
                    { name: "Foie Gras Maison, Chutney de Fruits", price_cents: 2100 },
                    { name: "Filets de Hareng Marinés, Pommes à l'Huile", price_cents: 1100 },
                    { name: "Poireaux Vinaigrette et Oeufs Mimosa", price_cents: 1100 },
                    { name: "Tartare de Saumon aux Herbes Fraîches", price_cents: 1300 },
                    { name: "Oeufs Durs Mayonnaise Tradition", price_cents: 700 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Gourmandises",
                items: [
                    { name: "Profiteroles au Chocolat Chaud", price_cents: 1050 },
                    { name: "Tarte Tatin et Crème d'Isigny", price_cents: 950 },
                    { name: "Crème Brûlée à la Vanille Bourbon", price_cents: 900 },
                    { name: "Mousse au Chocolat à l'Ancienne", price_cents: 850 },
                    { name: "Glaces & Sorbets Berthillon (3 boules)", price_cents: 1200 }
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
    google_rating: 4.0,
    description: "Le Zeyer est l'âme d'Alésia depuis 1913. Cette brasserie monumentale, avec ses plafonds de verre gravé, ses fresques Art Déco et ses banquettes de molekine, est l'un des plus beaux exemples du style montparnassien préservé. On y vient pour la chaleur de l'accueil, le service continu impeccable et une cuisine bourgeoise qui ne déçoit jamais. C'est le lieu de rendez-vous intergénérationnel du 14ème, où les habitués côtoient les curieux sous les lueurs dorées des lustres d'époque, dans une atmosphère qui respire le Paris d'autrefois.",
    insider_tip: "Ne manquez pas leur choucroute alsacienne, l'une des spécialités qui fait la renommée du lieu depuis des décennies. Pour les amateurs de douceur, les glaces Berthillon y sont servies dans les règles de l'art.",
    expert_catchline: "Le joyau Art Déco d'Alésia, brasserie de tradition et de coeur.",
    specials: {
        cuisine: ["Brasserie Traditionnelle", "Fruits de Mer Frais"],
        drinks: ["Sélèction Berthillon", "Grands Crus au Verre"],
        must_eat: "Le Burger Zeyer au Cantal et la Choucroute.",
        must_drink: "Un vin blanc sec avec le plateau d'écailler."
    },
    source: "expert_human"
};
