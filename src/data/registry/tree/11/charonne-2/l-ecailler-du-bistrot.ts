import { SurgicalPlace } from '../../../type-definition';

export const l_ecailler_du_bistrot: SurgicalPlace = {
    id: "poi-l-ecailler-du-bistrot",
    name: "L’Écailler du Bistrot",
    slug: "l-ecailler-du-bistrot",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "22 Rue Paul Bert",
        arrondissement: 11,
        lat: 48.8524257,
        lng: 2.3850577,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJzTMehgBz5kcRT3tG2OxEC90"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:30, 19:30–23:00\nmercredi: 12:00–14:30, 19:30–23:00\njeudi: 12:00–14:30, 19:30–23:00\nvendredi: 12:00–14:30, 19:30–23:00\nsamedi: 12:00–14:30, 19:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://lecaillerdubistrot.fr/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 34, // MANUAL: Poissons (30-46€) / Viande (38€) d'après les relevés récents
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules Midi",
                items: [
                    // VERIFIED: Relevé 2024
                    { name: "Menu Déjeuner du marché", price_cents: 2600, description: "Formule abordable le midi (Entrée/Plat/Dessert varie selon l’arrivage)." }
                ]
            },
            {
                category_type: "other",
                display_label: "Mer & Huîtres",
                items: [
                    { name: "Douzaine d’huîtres Perles Noires n°3", price_cents: 3800 },
                    { name: "Spéciales d’Utah Beach n°2 (les 6)", price_cents: 2200 },
                    { name: "Huîtres Plates du Belon (les 6)", price_cents: 2400 },
                    { name: "Langoustines du Guilvinec rôties au beurre d’algues", price_cents: 1500 },
                    { name: "Carpaccio de lieu jaune de ligne, agrumes", price_cents: 1300 },
                    { name: "Couteaux à la plancha aux épices", price_cents: 1450 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Marins & de Viande",
                items: [
                    { name: "Demi-homard bleu au Kari Gosse, frites maison", price_cents: 4600, description: "La spécialité de la maison depuis 25 ans." },
                    { name: "Sole Meunière de Petit Bateau (entière)", price_cents: 4400 },
                    { name: "Noix de St-Jacques à la plancha, purée de céleri", price_cents: 3400 },
                    { name: "Dos de lieu jaune de ligne, fondue de poireaux", price_cents: 2800 },
                    { name: "Brandade de morue au beurre demi-sel", price_cents: 2500 },
                    { name: "Filet de bœuf au poivre de Sarawak, frites maison", price_cents: 3800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Classiques",
                items: [
                    { name: "Paris-Brest de l’Écailler", price_cents: 900 },
                    { name: "Pomme au four, caramel au beurre salé", price_cents: 900 },
                    { name: "Tarte Tatin, crème crue de Normandie", price_cents: 1000 },
                    { name: "Tarte aux poires Bourdaloue", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ecailler-du-bistrot/gallery_4.jpg"
    ]
  },
    instagram_handle: "lecaillerdubistrot",
    verified: true,
    google_rating: 4.4,
    description: "La petite soeur iodée du célébrissime Bistrot Paul Bert, juste à côté. L’Écailler du Bistrot sert une partition marine parisienne intemporelle : arrivages vertueux directs de Bretagne/Normandie, soles meunières faramineuses à partager et huîtres impériales, le tout dans un jus bistrotier d'un autre temps.",
    insider_tip: "• Les cuissons des poissons (barbue de ligne, turbot) sont réputées invraisemblables de justesse.\n• Le menu déjeuner à 26€ est un énorme plan qualitatif pour tester ceux qui le trouvent inabordable le soir.\n• Attention de ne pas confondre avec le Bistrot Paul Bert attenant.",
    expert_catchline: "Soles meunières d’anthologie, homard au Kari Gosse, arrivage breton en direct. L'excellence iodée.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Muscadets pointus & sauvignons tendus"],
        must_eat: "Cuisine de bistrot. L’inévitable Sole Meunière, beurrée, fondante mais ferme, comme on en rêve depuis notre enfance.",
        must_drink: "Un grand vin blanc de Loire pour glisser délicatement sur la sole et affronter l’iode."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. L’inévitable Sole Meunière, beurrée, fondante mais ferme, comme on en rêve depuis notre enfance.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
