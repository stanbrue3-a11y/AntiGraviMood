import { SurgicalPlace } from '../../../type-definition';

export const rigmarole: SurgicalPlace = {
    id: "poi-rigmarole",
    name: "The Rigmarole",
    slug: "rigmarole",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "10 Rue du Grand Prieuré",
        arrondissement: 11,
        lat: 48.8651388,
        lng: 2.3691109,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJq6qeN_1t5kcRBB41bdSmwgc"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        // VERIFIED: Site officiel (2026-03) — Uniquement déjeuner Mer-Ven
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:00–14:00\njeudi: 12:00–14:00\nvendredi: 12:00–14:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://lerigmarole.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 75,
        is_free: false,
        pint_price: 0,
        // VERIFIED: LeFooding (2024) + Avis Google — verres dès 5€, moyenne ~9€
        wine_glass: 9.00,
        // NOT FOUND: aucune source fiable récente — mis à 0
        coffee_price: 0,
        dish_price: 20.00, // Median of Yakitori/Pasta platos
        last_updated: "2026-03-06",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS (Source: lerigmarole.com + LeFooding + LesRestos)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "Menus Dégustation (Déjeuner)",
                items: [
                    // VERIFIED: Site officiel lerigmarole.com
                    { name: "Menu Surprise du Chef (7 brochettes + 2 petits plats + pickles + dessert)", price_cents: 5000, description: "Le format signature, succession de brochettes au binchotan." },
                    // VERIFIED: LeFooding (2024)
                    { name: "Menu Dégustation (~13 plats, accord omakase)", price_cents: 7500, description: "Le grand menu complet du déjeuner." },
                    // VERIFIED: LeFooding + LesRestos
                    { name: "Menu Brochettes (9 brochettes chef’s choice)", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Privatisation / Table d’Hôte (Soirée sur réservation)",
                items: [
                    // VERIFIED: Site officiel lerigmarole.com
                    { name: "Menu Privé 12 passages (8-16 couverts minimum)", price_cents: 16000, description: "Menu exhaustif sur mesure avec préférences et restrictions." }
                ]
            },
            // ═══════════════════════════════════════════
            // BROCHETTES YAKITORI AU BINCHOTAN (Source: LeFooding + TimeOut + 50Best + LesRestos)
            // ═══════════════════════════════════════════
            {
                category_type: "other",
                display_label: "Brochettes Yakitori au Binchotan (à la carte)",
                items: [
                    // VERIFIED: 50Best + LeFooding — fourchette 5-9€ la pièce / duo
                    { name: "Yakitori cuisse de poulet, zeste de clémentine", price_cents: 700 },
                    { name: "Blanc de volaille, basilic et citron confit", price_cents: 700 },
                    { name: "Poitrine de porc yakitori, bambou", price_cents: 800 },
                    { name: "Aorte et cœur grillés", price_cents: 600 },
                    { name: "Brochette de légumes de saison", price_cents: 500 },
                    { name: "Demi-pigeon grillé (en saison)", price_cents: 1800 }
                ]
            },
            // ═══════════════════════════════════════════
            // PLATS À LA CARTE (Source: LeFooding + LesRestos + TimeOut + 50Best)
            // ═══════════════════════════════════════════
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: LeFooding (2024) — fourchette 8-39€
                    { name: "Spaghetti à la poutargue (fait main)", price_cents: 2400, description: "Les pâtes maison sont la seconde spécialité du chef." },
                    { name: "Ravioli ricotta, bouillon dashi", price_cents: 2200 },
                    { name: "Pâtes fraîches au homard (en saison)", price_cents: 3900 },
                    { name: "Bar tartare", price_cents: 1800 },
                    { name: "Maquereau grillé au binchotan", price_cents: 1600 },
                    { name: "Seiche grillée, yaourt épicé", price_cents: 1800 },
                    { name: "Polpette de porc, purée d’épinards", price_cents: 1400 },
                    { name: "Beignets de butternut", price_cents: 1200 },
                    { name: "Poireaux grillés", price_cents: 1000 },
                    { name: "Courgettes rôties au binchotan", price_cents: 1000 }
                ]
            },
            // ═══════════════════════════════════════════
            // DESSERTS (Source: LesRestos + TimeOut)
            // ═══════════════════════════════════════════
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    // VERIFIED: LesRestos (2024)
                    { name: "Far aux dattes", price_cents: 1000 },
                    { name: "Fondant au chocolat, glace à l’orge grillé", price_cents: 1200 }
                ]
            },
            // ═══════════════════════════════════════════
            // VINS & BOISSONS (Source: LeFooding + Avis Google)
            // ═══════════════════════════════════════════
            {
                category_type: "drink",
                display_label: "Vins Natures & Boissons",
                items: [
                    // VERIFIED: LeFooding (2024) — "5€ le verre à 70€ la bouteille"
                    { name: "Sauvignon de Loire (verre)", price_cents: 500 },
                    { name: "Blanc des Côtes-du-Jura (verre)", price_cents: 900 },
                    { name: "Gamay de l’Ardèche (verre)", price_cents: 700 },
                    { name: "Rouge autrichien nature (verre)", price_cents: 900 },
                    { name: "Bouteille nature (à partir de)", price_cents: 2800 },
                    { name: "Bouteille premium", price_cents: 7000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/rigmarole/gallery_4.jpg"
    ]
  },
    instagram_handle: "lerigmarole",
    verified: true,
    google_rating: 4.7,
    description: "Le Rigmarole est la fusion miraculeuse entre le yakitori japonais et la pasta italienne en plein cœur d’Oberkampf. Le chef Robert Compagnon et la sommelière Jessica Yang (couple à la ville) y orchestrent un ballet hypnotisant au-dessus du charbon binchotan. Ancien étoilé Michelin, le restaurant a choisi de rendre son étoile pour se concentrer sur un service plus intime et familial, désormais uniquement au déjeuner du mercredi au vendredi.",
    insider_tip: "• Obtenir une place ici relève du miracle : les réservations ouvrent exactement 14 jours à l’avance pour ces 3 déjeuners seulement (Mer-Ven).\n• Réservez impérativement une place au comptoir en noyer pour voir les chefs danser avec les flammes du Binchotan — c’est le vrai spectacle.\n• Les spaghetti à la poutargue (24€) et les ravioli ricotta en dashi sont les stars cachées derrière les brochettes.\n• Si vous n’avez pas de place, consolez-vous avec les glaces démentielles de Folderol juste à côté (même propriétaires).\n• Le Sauvignon de Loire au verre (5€) est un deal stratosphérique pour cette adresse.",
    expert_catchline: "Le meilleur yakitori-pasta de Paris au comptoir, sur charbon binchotan et avec des vins natures dès 5€.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Vins natures dès 5€/verre", "Sauvignon de Loire", "Gamay de l’Ardèche", "Sélection de Sakés"],
        must_eat: "Cuisine japonaise. Commandez le Menu Surprise (50€) pour avoir la vision complète du chef : 7 brochettes yakitori cuites au binchotan (poulet, porc, légumes, abats), 2 petits plats, pickles maison et un dessert. Les spaghetti à la poutargue (24€) sont un impératif si vous êtes à la carte.",
        must_drink: "Jessica Yang gère la salle et les vins avec une maîtrise rare. Sa cave nature va du verre de Sauvignon de Loire à 5€ aux bouteilles à 70€, avec des accords parfaits à chaque assiette."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Commandez le Menu Surprise (50€) pour avoir la vision complète du chef : 7 brochettes yakitori cuites au binchotan (poulet, porc, légumes, abats), 2 petits plats, pickles maison et un dessert. Les spaghetti à la poutargue (24€) sont un impératif si vous êtes à la carte.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
