import { SurgicalPlace } from "../../../type-definition";

export const moulin_vert: SurgicalPlace = {
    id: "poi-moulin-vert-75014",
    name: "Auberge du Moulin Vert",
    slug: "auberge-du-moulin-vert-paris-14",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "33 Rue du Moulin Vert, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.82986,
        lng: 2.322848,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJ96VlpLNx5kcR6Q53NohE-Nk"
    },
    moods: {
        chill: 90,
        festif: 30,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Tuesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Wednesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Thursday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Friday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Saturday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Sunday: 12:00 – 3:00 PM, 7:00 – 11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.auberge-moulin-vert.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        dish_price: 38, // MÉDIAN des plats gastronomiques
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "L’Excellence du Moulin (Plats)",
                items: [
                    { name: "Filet de Boeuf grillé, Sauce Béarnaise", price_cents: 4200 },
                    { name: "Noisette d’Agneau en Croûte d'Herbes", price_cents: 3600 },
                    { name: "Homard Bleu décortiqué à l’Armoricaine", price_cents: 4800 },
                    { name: "Ris de Veau dorés au Sautoir, Morilles", price_cents: 4500 },
                    { name: "Bar de Ligne cuit à la Vapeur Douce", price_cents: 3800 },
                    { name: "Risotto Noir aux Gambas et Calamars", price_cents: 3400 },
                    { name: "Suggestion Gastronomique du Chef", price_cents: 3750 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Signature",
                items: [
                    { name: "Foie Gras de Canard Maison, Chutney de Mangue", price_cents: 2400 },
                    { name: "Saint-Jacques à la Nage de Safran", price_cents: 2200 },
                    { name: "Tartare de Saumon aux Baies Roses", price_cents: 1800 },
                    { name: "Velouté de Châtaignes et son Émulsion", price_cents: 1600 },
                    { name: "Escargots de Bourgogne (les 12)", price_cents: 2100 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs de l’Auberge",
                items: [
                    { name: "Profiteroles au Chocolat Chaud Maison", price_cents: 1200 },
                    { name: "Soufflé Glacé au Grand Marnier", price_cents: 1400 },
                    { name: "Tarte Sablée aux Figues Rôties", price_cents: 1300 },
                    { name: "Délice au Chocolat Noir et Praliné", price_cents: 1500 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-moulin-vert-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 3.7,
    description: "L’Auberge du Moulin Vert est une institution historique du 14ème arrondissement, offrant un cadre bucolique absolument unique avec son jardin de curé et sa terrasse ombragée. Si le passé de l’établissement fut parfois irrégulier, sa transformation récente en fait à nouveau une destination privilégiée pour ceux qui cherchent l’apaisement en ville. La cuisine, d'inspiration gastronomique classique, privilégie les belles pièces de viande et les poissons nobles, servis dans une verrière lumineuse qui donne sur la verdure.",
    insider_tip: "Demandez impérativement une table dans le jardin si le temps le permet, c’est l'atout maître de la maison. Les ris de veau sont particulièrement soignés, un retour aux sources de la grande cuisine française.",
    expert_catchline: "Un jardin d’Eden gastronomique caché dans le quartier d'Alésia.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Grands Crus classés", "Champagnes de Marque"],
        must_eat: "Cuisine française. Les Ris de Veau aux Morilles et les Poissons Fins de Ligne.",
        must_drink: "Un grand vin rouge de Bordeaux."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Les Ris de Veau aux Morilles et les Poissons Fins de Ligne.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
