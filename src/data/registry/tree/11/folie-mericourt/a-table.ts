import { SurgicalPlace } from '../../../type-definition';

export const a_table: SurgicalPlace = {
    id: "poi-a-table",
    name: "À Table",
    slug: "a-table",
    category: "restaurant",
    subcategory: ['français'],
    location: {
        address: "10 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8618461,
        lng: 2.3745113,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJ_5AjG6pt5kcRhGWe1wHOKfU"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 15
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 11:30–15:00, 18:00–00:00\nmercredi: 11:30–15:00, 18:00–00:00\njeudi: 11:30–15:00, 18:00–00:00\nvendredi: 11:30–15:00, 18:00–00:00\nsamedi: 11:30–15:00, 18:00–00:00\ndimanche: 10:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://onzeatable.paris/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 6.50, // Approximation standard 11ème
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 27, // MANUAL: Plats à la carte évalués autour de 22-38€ le soir (Saumon 28, Thon 27, Canard 25).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules",
                items: [
                    // VERIFIED: Source TheFork & Site officiel
                    { name: "Formule Déjeuner", price_cents: 2400, description: "Entrée + Plat ou Plat + Dessert" },
                    { name: "Brunch Complet (Dimanche)", price_cents: 3400 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Planches",
                items: [
                    { name: "Œufs mayo façon César", price_cents: 900 },
                    { name: "Carpaccio de bar", price_cents: 1300 },
                    { name: "Croque à la truffe et pastrami", price_cents: 1800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    { name: "Mi-cuit de saumon, mousseline chou-fleur, beurre blanc", price_cents: 2800 },
                    { name: "Demi-magret de canard cuit basse température", price_cents: 2500 },
                    { name: "Gnocchis à la crème de truffe", price_cents: 2200 },
                    { name: "Noix d’entrecôte argentine (300g)", price_cents: 3800 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Dessert du jour", price_cents: 900 },
                    { name: "Fondant au chocolat", price_cents: 1000 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Pinte de bière (approximation quartier)", price_cents: 650 },
                    { name: "Verre de vin (à partir de)", price_cents: 700 },
                    { name: "Cocktail classique", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/a-table/gallery_4.jpg"
    ]
  },
    instagram_handle: "onzeatable_paris",
    verified: true,
    google_rating: 4.7,
    description: "Une excellente surprise de quartier rue de la Folie Méricourt. À Table (anciennement ’Onze à Table’) joue la carte de la bistronomie de réconfort : une cuisine française modernisée, généreuse et très soignée visuellement. Les viandes (comme l’entrecôte argentine) y sont particulièrement bien traitées.",
    insider_tip: "• Le restaurant sert en continu en fin de semaine et ferme à minuit, ce qui en fait un excellent plan pour les dîners tardifs dans le quartier.\n• Leur brunch du dimanche (34€) est de plus en plus populaire, pensez à réserver.\n• Si vous venez à l’apéro, commencez par partager le croque à la truffe et au pastrami (18€), diablement efficace.",
    expert_catchline: "Une bistronomie de réconfort aux assiettes généreuses et au sourcing soigné, parfaite pour un dîner tardif.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Cocktails classiques bien dosés"],
        must_eat: "Cuisine française. Le magret de canard en basse température (25€), fondant à cœur avec sa peau saisie.",
        must_drink: "Une pinte bien fraîche pour accompagner le fameux croque à la truffe et au pastrami."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le magret de canard en basse température (25€), fondant à cœur avec sa peau saisie.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
