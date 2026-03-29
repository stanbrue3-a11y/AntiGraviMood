import { SurgicalPlace } from "../../../type-definition";

export const la_regalade: SurgicalPlace = {
    id: "poi-la-regalade-75014",
    name: "La Régalade (Origins 14)",
    slug: "la-regalade-paris-14",
    category: "restaurant",
    subcategory: ["bistronomie", "moderne", "marche", "institution", "terroir"],
    location: {
        address: "49 Avenue Jean Moulin, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8258525,
        lng: 2.3259881,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJq2raO61x5kcRjYZM61f-eT4"
    },
    moods: {
        chill: 75,
        festif: 30,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Wednesday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Saturday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://Origins-14.com/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        dish_price: 25,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Créations du Moment",
                items: [
                    { name: "Poitrine de Cochon Fermier Moelleuse de chez Ospital", price_cents: 2600, description: "Couenne croustillante, haricots de Paimpol et chorizo." },
                    { name: "Risotto Crémeux à l'Encre de Seiche", price_cents: 2400 },
                    { name: "Cabillaud Rôti sur la peau, Gnocchis à l'encre", price_cents: 2700 },
                    { name: "Suprême de Volaille Jaune des Landes", price_cents: 2700 },
                    { name: "Paleron de Boeuf braisé au Vin Noir", price_cents: 2700 },
                    { name: "Tartare de Boeuf au Couteau & Frites", price_cents: 2400 },
                    { name: "Carbonara de Céleri façon Risotto", price_cents: 2250 }
                ]
            },
            {
                category_type: "starter",
                display_label: "L'Héritage Régalade (Entrées)",
                items: [
                    { name: "Terrine de Campagne offerte à l'arrivée", price_cents: 0, description: "Le geste emblématique de la maison." },
                    { name: "Royale de Foie Gras de Canard, Bouillon Champignons", price_cents: 1800 },
                    { name: "Poêlée d'Escargots et Champignons au Chorizo", price_cents: 1500 },
                    { name: "Vitello Tonnato de La Régalade", price_cents: 1400 },
                    { name: "Soupe Crémeuse de Choux-Fleurs au Parmesan", price_cents: 1500 },
                    { name: "Rôtis d'Escargots à l'Oeuf Poché", price_cents: 1450 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Signatures Sucrées",
                items: [
                    { name: "Le Fameux Riz au Lait de Grand-Mère", price_cents: 1200, description: "Servi dans son grand saladier avec caramel laitier." },
                    { name: "Soufflé Chaud au Grand Marnier", price_cents: 1200 },
                    { name: "Guimauve Maison, Chocolat Noir & Coco", price_cents: 1100 },
                    { name: "Tarte Fine aux Pommes et Vanille", price_cents: 1200 },
                    { name: "Cheesecake Maison à la Mangue & Passion", price_cents: 1200 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXtHWJ8G-W2d8RRUmAnZD4PB3ByTR55GE8N_XYodFqT3jC6uhANZFAkqhDEs6IAINrMt_D5AYzUm2Gu5sHLCybRSjg1yWqdp9PMJy7mHze9-ChhL4RcbcaoY1KDXOuHVF9_itAkPfBb1w93CXYzndE3ahFwjFf7eZUlBodjsRydc7hY9bUCd4BXuV8TaPsyMgFc6UPr1r7QS7Yc8cCVLut4JAriGdzgciU3YJPmEm9uks1CJeQutsSIQAXqKLVnOKXMLYj9yA40r9JorjiLSv3eEcHL5DcfsnAre_vcUgTsRA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVJ2UwDQgKY6RY_c_9L4jVlL09SUZ_RCkOYUsCDHHkN4LG02-nfdjfP2KrDo_-fb18FpwU9oMYkMB7CzQFOe4xpw5zZxEOUfE7vU3u2lxaLz4DmN6Zr68kCxWK666371N3D-2klfmxwYT3Hpal3DAk_dtDpkI-Y7C1XEiIfqBxrsXwacH4YJ5BlBdlpvxJgK693eo-Ml1IttBBPgMCjWJZekCmo0iCR76GBNlteMiclt2zoulpTzIFByQZx2nBKEizO2dUIEqyKWfX30We0M-NMUGZIEVcQteVHCqs8C6u2gsNR80lvKdxDab1lsIFTEKgdFgf-lKrNb5exifcEOmmRs9L2hKJs4r3VPIfNPsYr3YL9u6M-Hn3qBXbnmKQubspcvXUfRrtf5NwD9yCFCb8eYCGO2wgm6pQNFwbhd_cpZyKIaT8TKtPLxVkKcp7n&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "La Régalade est le berceau de la bistronomie parisienne. Fondée par Yves Camdeborde et aujourd'hui perpétuée sous le nom d'Origins 14, cette institution n'a rien perdu de sa superbe. Le concept reste inchangé : une généreuse terrine de campagne déposée sur table à l'arrivée, suivie d'une cuisine de marché inventive et sincère. C'est ici que s'est inventé un luxe démocratisé, où l'excellence culinaire se savoure dans une ambiance de bistrot vibrant et décontracté. Le riz au lait final, servi à discrétion dans son saladier familial, est devenu le symbole de cette générosité jamais démentie.",
    insider_tip: "Ne mangez pas trop de pain avec la terrine d'accueil, les plats sont riches ! Le menu-carte en trois services est le meilleur moyen de découvrir toute l'étendue du talent de la brigade. Le riz au lait est une obligation morale.",
    expert_catchline: "Le berceau historique de la bistronomie parisienne.",
    specials: {
        cuisine: ["Bistronomie", "Cuisine du Marché"],
        drinks: ["Sélection de Vins de Propriété", "Digestifs Fins"],
        must_eat: "La Poitrine de Cochon Ospital et le Riz au Lait.",
        must_drink: "Un vin du Languedoc-Roussillon plein de soleil."
    },
    source: "expert_human"
};
