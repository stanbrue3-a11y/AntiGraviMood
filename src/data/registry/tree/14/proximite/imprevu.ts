import { SurgicalPlace } from "../../../type-definition";

export const imprevu: SurgicalPlace = {
    id: "poi-imprevu-alesia",
    name: "L’Imprévu",
    slug: "l-imprevu-paris-14",
    category: "restaurant",
    subcategory: ["bistrot", "terrasse", "brasserie", "quartier", "moderne", "nocturne"],
    location: {
        address: "13 Rue d'Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8286469,
        lng: 2.333464,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJ8-pIt7Rx5kcRpwgzTmg1MCQ"
    },
    moods: {
        chill: 70,
        festif: 60,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 2:00 AM | Tuesday: 7:00 AM – 2:00 AM | Wednesday: 7:00 AM – 2:00 AM | Thursday: 7:00 AM – 2:00 AM | Friday: 7:00 AM – 2:00 AM | Saturday: 8:00 AM – 2:00 AM | Sunday: 8:00 AM – 2:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.limprevu-06.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        dish_price: 18,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de l'Imprévu",
                items: [
                    { name: "Asian Flank Steak & Noodles", price_cents: 2290 },
                    { name: "Wok de Crevettes aux Légumes", price_cents: 2290 },
                    { name: "Pavé de Saumon Grillé, Purée Maison", price_cents: 2300 },
                    { name: "Tartare de Saumon-Avocat Frais", price_cents: 2000 },
                    { name: "Croque-Madame Campagnard & Salade", price_cents: 1700 },
                    { name: "Linguine aux Gambas & Tomates", price_cents: 1890 },
                    { name: "Salade Pêcheur (Saumon & Crevettes)", price_cents: 2000 },
                    { name: "Omelette Truffe et Fromage", price_cents: 1800 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Starters & Tapas Maison",
                items: [
                    { name: "Tarama Truffé et Pain Toasté", price_cents: 1400 },
                    { name: "Burrata, Tomates et Jambon de Pays", price_cents: 1600 },
                    { name: "Camembert d'Isigny Rôti au Miel", price_cents: 1400 },
                    { name: "6 Escargots de Bourgogne", price_cents: 1600 },
                    { name: "Guacamole Maison & Chips Tortilla", price_cents: 1300 },
                    { name: "Planche Mixte de Charcuterie & Fromage", price_cents: 2500 },
                    { name: "Os à Moelle Grillé", price_cents: 1000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Brunch & Crêpes",
                items: [
                    { name: "Avocado Toast & Oeuf Poché", price_cents: 1500 },
                    { name: "Pancakes Egg, Bacon & Sirop d'Erable", price_cents: 1500 },
                    { name: "Pain Perdu Maison de l'Imprévu", price_cents: 1200 },
                    { name: "Crêpe Caramel Beurre Salé Maison", price_cents: 750 },
                    { name: "Crêpe Nutella-Banane", price_cents: 900 }
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
    google_rating: 4.1,
    description: "L'Imprévu est le caméléon gourmand de la rue d'Alésia. Que ce soit pour un brunch tardif, un déjeuner aux accents asiatiques ou une soirée tapas-cocktails sur sa terrasse toujours animée, l'établissement s'adapte à tous les moments de la vie parisienne. Son décor moderne, son accueil chaleureux et sa carte éclectique en font un lieu de passage privilégié pour ceux qui aiment la diversité. C'est l'endroit où l'on s'arrête par hasard et d'où l'on repart avec l'envie de revenir, séduit par la justesse des saveurs et la décontraction du service.",
    insider_tip: "Leur sélection de tapas est idéale pour accompagner les cocktails en début de soirée. En hiver, ne manquez pas leur raclette à volonté, un moment de pure convivialité montagnarde en plein 14ème.",
    expert_catchline: "Le bistrot éclectique et vibrant de la rue d'Alésia.",
    specials: {
        cuisine: ["Bistrot Moderne", "Fusion Asian", "Brunch"],
        drinks: ["Cocktails Créatifs", "Vins au Verre"],
        must_eat: "L'Asian Flank Steak et les Pancakes bacon-sirop.",
        must_drink: "Un cocktail signature en terrasse."
    },
    source: "expert_human"
};
