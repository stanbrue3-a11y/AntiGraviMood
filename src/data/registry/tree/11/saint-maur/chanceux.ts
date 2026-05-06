import { SurgicalPlace } from '../../../type-definition';

export const chanceux: SurgicalPlace = {
    id: "poi-chanceux",
    name: "Chanceux",
    slug: "chanceux",
    category: "restaurant",
    subcategory: ['bistronomie', 'français'],
    location: {
        address: "57 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8623269,
        lng: 2.3798678,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJwY_sxkxt5kcRm1rEQRvtGqc"
    },
    moods: {
        chill: 80,
        festif: 0,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 09:30–17:00\nmardi: 09:30–17:00\nmercredi: 09:30–17:00\njeudi: 09:30–23:00\nvendredi: 09:30–23:00\nsamedi: 09:30–23:00\ndimanche: 10:00–23:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/chanceux.paris/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 17, // MANUAL: Plats du midi autour de 17-18.50€. Le soir plus "tapas" (16 - 33€)
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "other",
                display_label: "Petit-Déjeuner & Espresso Bar (jusqu’à 12h)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Tartine baguette fraîche, beurre et confiture maison", price_cents: 500 },
                    { name: "Chèvre frais mariné", price_cents: 700 },
                    { name: "Granola maison, fromage blanc et purée de fruits", price_cents: 900 },
                    { name: "Oeuf coque, mouillettes, beurre sarrasin, Cantal", price_cents: 1100 }
                ]
            },
            {
                category_type: "other",
                display_label: "Café de Spécialité & Pâtisseries",
                items: [
                    { name: "Viennoiseries du jour", price_cents: 350 },
                    { name: "Cookie du jour", price_cents: 400 },
                    { name: "Lemon cake", price_cents: 500 },
                    { name: "Banana bread", price_cents: 500 },
                    { name: "Muxu aux noisettes", price_cents: 500 },
                    { name: "Gâteaux chocolat et tahini (sans gluten)", price_cents: 500 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Déjeuner (12h - 15h) : Les Entrées",
                items: [
                    { name: "Œuf dur, mayonnaise à l’estragon", price_cents: 700 },
                    { name: "Truite gravlax maison, aneth, crème crue", price_cents: 700 },
                    { name: "Terrine de cochon noir de Bigorre, pickles maison", price_cents: 800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Déjeuner : Sandwichs Chauds & Froids",
                items: [
                    { name: "Bun jambon ou Bun tuna mix", price_cents: 1200 },
                    { name: "Mushroom melt (pain rye, champignons rôtis, gorgonzola)", price_cents: 1400 },
                    { name: "Pickled beef (pain rye, pastrami, fromage suisse, moutarde miel)", price_cents: 1500, description: "L’arme de destruction massive du midi." }
                ]
            },
            {
                category_type: "main",
                display_label: "Déjeuner : Les Plats",
                items: [
                    { name: "Couscous bowl (panisse, légumes rôtis/crus, tzatziki)", price_cents: 1700 },
                    { name: "Risotto potimarron, roquette, tuile parmesan sauge", price_cents: 1700 },
                    { name: "Épaule d’agneau confite, purée, jus d'agneau", price_cents: 1750 },
                    { name: "Ragoût de confit de canard, tagliatelles, jaune d’œuf", price_cents: 1850 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dîner & Soirée (Soirs J/V/S/D)",
                items: [
                    { name: "Gravelax de truite maison grand format", price_cents: 1000 },
                    { name: "Falafels maison au labneh", price_cents: 1700 },
                    { name: "Saucisse, crème champignons, purée beurre salé, pickles", price_cents: 1800 },
                    { name: "Crumble aux fruits de saison, flocons sarrasin", price_cents: 700 },
                    { name: "Mont d’Or chaud à partager", price_cents: 4400, description: "L’option conviviale gourmande des soirs froids." }
                ]
            },
            {
                category_type: "other",
                display_label: "Brunch du Dimanche",
                items: [
                    { name: "Brunch Complet du Dimanche (par personne)", price_cents: 3200, description: "Inclus viennoiseries, plats chauds, boissons." }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chanceux/gallery_4.jpg"
    ]
  },
    instagram_handle: "chanceux.paris",
    verified: true,
    google_rating: 4.6,
    description: "Une petite merveille de quartier hybride sur la rue Saint-Maur : épicerie, coffee shop le matin (merveilleux granola), cantine bistronomique le midi (avec ses fameux melts) et bar à tapas à prix doux en fin de semaine. La comfort food est ici élevée au rang d’art du quotidien.",
    insider_tip: "• Les horaires sont trompeurs : Chanceux est un vrai coffee-shop diurne du lundi au mercredi et ne devient un restaurant du soir qu’à partir du jeudi.\n• Leurs sandwichs chauds (\"Melt\") du midi avec un croisement de fromages fondants et pastrami sont d’authentiques tueries.\n• Excellente alternative pour le petit-déjeuner ou le télétravail léger grâce au WiFi gratuit le matin.",
    expert_catchline: "Superbe adresse hybride diurne/nocturne misant sur une comfort-food ultra généreuse. L’âme du 11ème.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Café de spécialité le matin", "Vins natures le soir"],
        must_eat: "Cuisine française. Le Pickled Beef le midi : du gros pastrami relevé par un fromage suisse texturé dans un pain rye hyper moelleux.",
        must_drink: "Un flat white exécuté dans les règles de l’art le matin, pour démarrer du bon pied."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Pickled Beef le midi : du gros pastrami relevé par un fromage suisse texturé dans un pain rye hyper moelleux.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
