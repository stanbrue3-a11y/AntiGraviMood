import { SurgicalPlace } from "../../../type-definition";

export const le_duc: SurgicalPlace = {
    id: "poi-le-duc-75014",
    name: "Le Duc",
    slug: "le-duc-paris-14",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "243 Boulevard Raspail, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8387481,
        lng: 2.3312101,
        nearest_metro: "Raspail",
        metro_lines: ["4", "6"],
        google_id: "ChIJqXbHfMhx5kcRT_MHosKnfWw"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Tuesday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Wednesday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Thursday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Friday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Saturday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.restaurantleduc.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        dish_price: 52, // MÉDIAN des plats de la mer (Tartare/Bar/Dorade/Sole/Pates)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "L’Art des Poissons",
                items: [
                    { name: "Carpaccio de Bar au Citron Vert et Huile d’Olive", price_cents: 4800 },
                    { name: "Tartare de Bar ’Le Duc' (Signé Minchelli)", price_cents: 5200 },
                    { name: "Sashimi de Thon Rouge d’Exception", price_cents: 5500 },
                    { name: "Dorade Royale Crue à la Fleur de Sel", price_cents: 4600 },
                    { name: "Sole Meunière Façon Le Duc (entière)", price_cents: 8500 },
                    { name: "Turbot Grillé aux Herbes (pour 2)", price_cents: 18000 },
                    { name: "Pâtes au Homard de Bretagne", price_cents: 7500 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de la Mer",
                items: [
                    { name: "Huîtres Belon n°00 (les 6)", price_cents: 3600 },
                    { name: "Palourdes Farcies à la façon du chef", price_cents: 2800 },
                    { name: "Soupe de Poissons de Roche", price_cents: 2400 },
                    { name: "Salade de Homard Tiède", price_cents: 6200 },
                    { name: "Friture de Petits Poissons", price_cents: 2200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Classiques",
                items: [
                    { name: "Soufflé au Grand Marnier (Signé)", price_cents: 2200 },
                    { name: "Sorbet Citron Arrosé de Vodka", price_cents: 1800 },
                    { name: "Mille-Feuille à la Vanille de Tahiti", price_cents: 2000 },
                    { name: "Ardoise de Fromages de chez Cantin", price_cents: 2400 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-duc-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Le Duc est plus qu’un restaurant, c’est le lieu où a été inventé l’art de manger le poisson cru à Paris dans les années 60, bien avant la mode des sushis. Fondé par Jean Minchelli, ce temple de la mer conserve un décor intramontable de yacht luxueux des années 70, avec ses boiseries vernies et ses hublots. Ici, le produit est sacré : le poisson n’est jamais dénaturé, simplement sublimé par une découpe parfaite ou une cuisson à la seconde près. C’est l’adresse favorite du Paris littéraire et artistique qui cherche l’épure et l'exceptionnel.",
    insider_tip: "Commencez impérativement par le carpaccio de bar, le plat qui a fait la légende du lieu. La carte des vins propose des Chablis et des Meursaults de collection qui sont les parfaits compagnons de ces assiettes iodées. Ambiance feutrée et très select.",
    expert_catchline: "L’inventeur mythique du poisson cru à Paris.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Grands Vins Blancs de Bourgogne", "Sancerres d’Exception"],
        must_eat: "Cuisine japonaise. Le Carpaccio de Bar et la Sole Meunière.",
        must_drink: "Un Chablis Grand Cru."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Le Carpaccio de Bar et la Sole Meunière.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
