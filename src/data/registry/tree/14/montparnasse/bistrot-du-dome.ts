import { SurgicalPlace } from "../../../type-definition";

export const bistrotDuDome: SurgicalPlace = {
    id: "poi-bistrot-du-dome-75014",
    name: "Le Bistrot du Dôme",
    slug: "le-bistrot-du-dome-paris-14",
    category: "restaurant",
    subcategory: ["seafood", "poissons", "élégant", "institution", "gastronomique"],
    location: {
        address: "1 Rue Delambre, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8417221,
        lng: 2.329005,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJQ0M91s5x5kcRIxMlRQkwoqU"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Tuesday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Wednesday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Thursday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Friday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Saturday: 12:00 – 2:15 PM, 7:00 – 10:30 PM | Sunday: 12:00 – 2:15 PM, 7:00 – 10:30 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.restaurant-ledome.com/", // Souvent lié au grand dôme
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        dish_price: 34, // MÉDIAN des plats (Poissons)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "L'Art des Poissons",
                items: [
                    { name: "Sole Meunière Façon Dôme (selon poids)", price_cents: 4800 },
                    { name: "Pavé de Turbot à la Plancha, Purée de Céleri", price_cents: 3800 },
                    { name: "Bouillabaisse 'Petit Bateau' Individuelle", price_cents: 4200 },
                    { name: "Filet de Bar Bio au Sel de Guérande", price_cents: 3200 },
                    { name: "Noix de Saint-Jacques Snackées, Risotto", price_cents: 3500 },
                    { name: "Brandade de Morue Fraîche à l'Huile d'Olive", price_cents: 2800 },
                    { name: "Thon Rouge en Tataki aux Sésames", price_cents: 3000 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Préludes Marins (Entrées)",
                items: [
                    { name: "Soupe de Poissons de Roche et sa Rouille", price_cents: 1800 },
                    { name: "Huîtres Fines de Claire n°3 (les 6)", price_cents: 1950 },
                    { name: "Calamars à la Romaine, Sauce Tartare", price_cents: 1600 },
                    { name: "Saumon Fumé d'Écosse 'Maison'", price_cents: 2200 },
                    { name: "Carpaccio de Saint-Jacques au Citron Vert", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Classiques",
                items: [
                    { name: "Millefeuille à la Vanille de Tahiti", price_cents: 1400 },
                    { name: "Soufflé au Grand Marnier (Signé)", price_cents: 1600 },
                    { name: "Baba au Rhum Ambré et sa Crème Fouettée", price_cents: 1200 },
                    { name: "Sorbets Maison Fraîcheur du Jour", price_cents: 1000 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW90dhZubQizzsonRoUzv9K3tzq61MMlBbl3YNmLBHgNRgj7mQ4bLpkUu2thF-1csNHC891YkeiR7IxzLL60ufctRwz024timIFvKuFjklBcbv-rTNPWh5Z0airiGERvgtFNNwNnN_DdZusxb605mJpC5LSG-DECglCT3YPCadWa9lkSJRRkWgo6TUzOxMIceXb_eL9LUH6vgD1aIHBk4pn7hCxE3uEaicz-hG7iPyq8AzO5LS6d0buacbH_AF758Zu9s-ZNaRu0pp_xPjVuu8CLEngAG6mNQAhh9GIY4V63Z5odm26-hLYJ82728ZD9Pk1qQRUS_lIYwLaYzJFg5gK6JnHv4_kXO6gD01g2qJQFikufn34uJbeYL6qFfUDntQbbPYmd7xqs5w2my4ZgXRd9FyUYBPOTcVCFplz3Uga-NTr&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU4G-oL1wXmD0S4iHz3P6Ggv9q1z3qIMFkO8ASxWncf99m2GY11KxZzlD6E7mfuiFSzIfaFxa6wQK8QuKKJcfmi2QH0ilqptPhp1pS76FvYxSrZfg3lqEthIXaQCMQzyYA8Fks1fro1nSGh5w4fq6-NVZSd3qxXusdcSv1yO-mj6X4jQ9C0CCNt0rPMV7GygbFb2QY2Tq_jr-AWtMEEp6hsE_pJ6nfrLKTizHM3Gi4372xKQGXED2IRBWLPiOSIxCGV8bw9wdQ7ssAoCkhqwgGni1idRuHrNdwes7isbIRaYjDqTBVErjH0YNk354x-b8C42URXRmCZEGhQk_nYk3fCEWDo7EigOEuPb_7Hr6lCDdSaVKN6hBZRwFZNJE2IkfNvxcRsl06EfnDXASpOAyfag3tFMGz8-qTA72VbznGi-g&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Bistrot du Dôme est le digne héritier du mythique restaurant Le Dôme, voisin et frère d'armes. Moins guindé mais tout aussi exigeant sur la qualité maritime, il offre un cadre élégant à la décoration nautique raffinée. La spécialité ici est sans conteste le poisson : arrivages quotidiens directs, cuissons millimétrées et saveurs iodées préservées. C'est l'endroit parfait pour déguster des huîtres d'exception ou une sole meunière légendaire dans une atmosphère de brasserie parisienne chic et feutrée.",
    insider_tip: "La bouillabaisse est l'une des meilleures de la capitale, servie dans les règles de l'art. Pour le dessert, le millefeuille est une institution qu'il faut absolument avoir goûté une fois dans sa vie.",
    expert_catchline: "L'élégance maritime et l'excellence du poisson à Montparnasse.",
    specials: {
        cuisine: ["Seafood de Luxe", "Gastronomie Marine"],
        drinks: ["Muscadet de Sèvre et Maine", "Chablis de Collection"],
        must_eat: "La Sole Meunière et la Soupe de Poissons.",
        must_drink: "Un vin blanc minéral pour accompagner l'iode."
    },
    source: "expert_human"
};
