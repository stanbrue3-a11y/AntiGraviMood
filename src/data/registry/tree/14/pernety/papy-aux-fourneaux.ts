import { SurgicalPlace } from "../../../type-definition";

export const papy_aux_fourneaux: SurgicalPlace = {
    id: "poi-papy-aux-fourneaux-75014",
    name: "Papy aux Fourneaux",
    slug: "papy-aux-fourneaux-paris",
    category: "restaurant",
    subcategory: ["table-d-hotes", "convivial", "partage", "fait-maison", "terroir", "denfert"],
    location: {
        address: "70 Rue de l'Ouest, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.834925,
        lng: 2.321896,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJFfkFjkpw5kcRVy2kmvlINzs"
    },
    moods: {
        chill: 95,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Tuesday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Saturday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Sunday: Closed | Monday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://www.papyauxfourneaux.fr/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 22,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "sharing",
                display_label: "Cocottes à Partager",
                items: [
                    { name: "Sauté de Veau à la Corse, Olives & Ail", price_cents: 2190, description: "Servi en cocotte de fonte au centre de la table." },
                    { name: "Paleron de 15h, Charolais du Bourbonnais", price_cents: 2600 },
                    { name: "Poisson du jour, Bisque de Crabe & Pastis", price_cents: 2090 },
                    { name: "Croustillants de Pont L'Evêque AOP & Miel", price_cents: 1000 },
                    { name: "Volaille de Vendée aux Pleurotes", price_cents: 1950 },
                    { name: "Potée de Jarret de Cochon Bio aux Lentilles", price_cents: 2100 },
                    { name: "Tartiflette de Légumes au Reblochon Fermier", price_cents: 1950 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de Papy",
                items: [
                    { name: "Oeufs Bio 'Jolie Cocotte' au Comté", price_cents: 650 },
                    { name: "Velouté de Carottes au Cumin & Raclette", price_cents: 1000 },
                    { name: "Assiette de Couteaux en Persillade", price_cents: 850 },
                    { name: "Velouté de Potimarron & Chips de Lard", price_cents: 750 },
                    { name: "Tranché de Galabar & Pomme Rôtie", price_cents: 700 },
                    { name: "Assiette de Fromages AOP (Comté 18 mois)", price_cents: 800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs de Famille",
                items: [
                    { name: "Brioche Perdue au Caramel Beurre Salé", price_cents: 950 },
                    { name: "Tarte Bourdaloue à la Pistache", price_cents: 990 },
                    { name: "Crème Brûlée à la Fève de Tonka", price_cents: 800 },
                    { name: "Flan Pâtissier à la Vanille de Madagascar", price_cents: 990 },
                    { name: "Poires Pochées au Vin Rouge & Amandes", price_cents: 700 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVJ2UwDQgKY6RY_c_9L4jVlL09SUZ_RCkOYUsCDHHkN4LG02-nfdjfP2KrDo_-fb18FpwU9oMYkMB7CzQFOe4xpw5zZxEOUfE7vU3u2lxaLz4DmN6Zr68kCxWK666371N3D-2klfmxwYT3Hpal3DAk_dtDpkI-Y7C1XEiIfqBxrsXwacH4YJ5BlBdlpvxJgK693eo-Ml1IttBBPgMCjWJZekCmo0iCR76GBNlteMiclt2zoulpTzIFByQZx2nBKEizO2dUIEqyKWfX30We0M-NMUGZIEVcQteVHCqs8C6u2gsNR80lvKdxDab1lsIFTEKgdFgf-lKrNb5exifcEOmmRs9L2hKJs4r3VPIfNPsYr3YL9u6M-Hn3qBXbnmKQubspcvXUfRrtf5NwD9yCFCb8eYCGO2wgm6pQNFwbhd_cpZyKIaT8TKtPLxVkKcp7n&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXtHWJ8G-W2d8RRUmAnZD4PB3ByTR55GE8N_XYodFqT3jC6uhANZFAkqhDEs6IAINrMt_D5AYzUm2Gu5sHLCybRSjg1yWqdp9PMJy7mHze9-ChhL4RcbcaoY1KDXOuHVF9_itAkPfBb1w93CXYzndE3ahFwjFf7eZUlBodjsRydc7hY9bUCd4BXuV8TaPsyMgFc6UPr1r7QS7Yc8cCVLut4JAriGdzgciU3YJPmEm9uks1CJeQutsSIQAXqKLVnOKXMLYj9yA40r9JorjiLSv3eEcHL5DcfsnAre_vcUgTsRA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Papy aux Fourneaux réinvente le concept de la table d'hôtes avec une modernité et une chaleur désarmantes. Ici, pas d'assiettes individuelles dressées au millimètre, mais de grandes cocottes en fonte posées au centre de la table, invitant au partage et à la gourmandise. La cuisine est une déclaration d'amour aux produits français, sourcés directement auprès de petits producteurs. Le décor, mêlant vintage et industriel, crée une atmosphère de salon familial où l'on prend le temps de vivre. C'est l'adresse ultime pour un repas entre amis ou en famille qui finit toujours par se prolonger autour d'un bon dessert maison.",
    insider_tip: "Le restaurant fonctionne sur le principe de la cocotte unique par table, idéal à partir de deux personnes. Ne faites pas l'impasse sur la brioche perdue, c'est le doudou culinaire de la maison.",
    expert_catchline: "La convivialité régressive et généreuse d'un repas de famille.",
    specials: {
        cuisine: ["Table d'Hôtes", "Produits de Terroir"],
        drinks: ["Vins de Producteurs", "Limonades Artisanales"],
        must_eat: "La Cocotte de Sauté de Veau et la Brioche Perdue.",
        must_drink: "Un vin de partage servi en carafe."
    },
    source: "expert_human"
};
