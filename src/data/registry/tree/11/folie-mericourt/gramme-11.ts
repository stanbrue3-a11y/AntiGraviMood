import { SurgicalPlace } from '../../../type-definition';

export const gramme_11: SurgicalPlace = {
    id: "poi-gramme-11",
    name: "Gramme 11",
    slug: "gramme-11",
    category: "restaurant",
    subcategory: ['fusion'],
    location: {
        address: "96 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8688, // Approx
        lng: 2.3785,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJR8uwROJt5kcR_8BfBGXFgzY"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 09:00–18:00, Dim: 10:00–17:00 (Brunch)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://grammeparis.fr/",
            label: "CARTE"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 4.50,
        dish_price: 24, // MANUAL: Plat principal déjeuner typique
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Gramme 11 (2025 Menu & Brunch)
            {
                category_type: "other",
                display_label: "Le Brunch & Le Midi",
                items: [
                    { name: "Bowl Saisonnier (Végé/Carné)", price_cents: 1800, description: "Légumes rôtis, céréales anciennes, pickles maison." },
                    { name: "Gramme’s Banh Mi", price_cents: 1600, description: "Pain brioché, porc effiloché aux épices, légumes croquants." },
                    { name: "Pancakes Salés au Kimchi", price_cents: 1700, description: "Œuf au plat, avocat, sauce gochujang." },
                    { name: "Plateau Lunch (E+P+D)", price_cents: 2800 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Grignotages & Sides",
                items: [
                    { name: "Poireaux brûlés au miso", price_cents: 1200 },
                    { name: "Soupe Dashi & Noisettes", price_cents: 1000 },
                    { name: "Pickles Maison", price_cents: 600 }
                ]
            },
            {
                category_type: "other",
                display_label: "Coffee & Pastries (Fait Maison)",
                items: [
                    { name: "Cookie Chocolat & Fleur de Sel", price_cents: 450 },
                    { name: "Banana Bread toasté", price_cents: 650 },
                    { name: "Flat White", price_cents: 500 },
                    { name: "Homemade Granola Bowl", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gramme-11/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Gramme est bien plus qu’une cantine, c’est une véritable institution de la rue Jean-Pierre Timbaud. On y vient pour un brunch créatif le dimanche, ou pour un lunch sain et gourmand en semaine. Tout est fait maison avec des produits sourcés en circuit court : des banh mi revisités aux pancakes au kimchi, en passant par leur pâtisserie réconfortante. L’espace est chaleureux, boisé et respire la convivialité parisienne.",
    insider_tip: "• Les pâtisseries du dimanche changent chaque semaine, arrivez tôt pour le brunch ! (Pas de résa).\n• Le Banh Mi de chez Gramme est devenu une référence absolue dans le quartier.\n• Leurs pickles maison sont une petite addiction à ramener chez soi.",
    expert_catchline: "La néo-cantine iconique du 11ème, temple du brunch créatif et du fait-maison.",
    specials: {
        cuisine: ["Cuisine d'auteur"],
        drinks: ["Café de spécialité (Lomi)", "Jus pressés", "Vins de soif"],
        must_eat: "Cuisine créative (Banh Mi). Le Gramme’s Banh Mi, une relecture ultra-gourmande sur pain brioché.",
        must_drink: "Un Flat White parfaitement exécuté avec les grains du torréfacteur Lomi."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine créative (Banh Mi). Le Gramme’s Banh Mi, une relecture ultra-gourmande sur pain brioché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
