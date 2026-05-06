import { SurgicalPlace } from "../../../type-definition";

export const grillades_buenos_aires: SurgicalPlace = {
    id: "poi-grillades-buenos-aires",
    name: "Les Grillades de Buenos Aires",
    slug: "les-grillades-de-buenos-aires",
    category: "restaurant",
    subcategory: ['argentin'],
    location: {
        address: "54 Rue du Montparnasse",
        arrondissement: 14,
        lat: 48.8420982,
        lng: 2.325433,
        nearest_metro: "Montparnasse-Bienvenüe",
        metro_lines: [4, 6, 12, 13],
        google_id: "ChIJIVDDEcxx5kcRNdC36XGfaBA"
    },
    moods: {
        chill: 30,
        festif: 20,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–14:00, 19:30–23:00 | Mardi: 12:00–14:00, 19:30–23:00 | Mercredi: 12:00–14:00, 19:30–23:00 | Jeudi: 12:00–14:00, 19:30–23:00 | Vendredi: 12:00–14:00, 19:30–23:00 | Samedi: 12:00–14:00, 19:30–23:00 | Dimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.lesgrilladesdebuenosaires.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.00,
        dish_price: 23.50, // MÉDIAN des plats de terroir
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de Terroir",
                items: [
                    { name: "Bife de Lomo (Filet de bœuf, 250g)", price_cents: 3800, description: "Le summum de la tendreté argentine." },
                    { name: "Ojo de Bife (Noix d’entrecôte, 300g)", price_cents: 3200 },
                    { name: "Bife de Cuadril (Cœur de rumsteck)", price_cents: 2600 },
                    { name: "Bife de Chorizo (Faux-filet, 300g)", price_cents: 2900 },
                    { name: "Asado de Tira (Plat de côtes)", price_cents: 2400 },
                    { name: "Entraña (Hampe savoureuse)", price_cents: 2500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Entradas (Tradition)",
                items: [
                    { name: "Empanadas de carne (les 2)", price_cents: 1200, description: "Faites maison selon la recette familiale." },
                    { name: "Mollejas de Ternera (Ris de veau grillés)", price_cents: 1800 },
                    { name: "Chorizo Argentino", price_cents: 1000 },
                    { name: "Morcilla (Boudin noir)", price_cents: 950 },
                    { name: "Provoleta au grill", price_cents: 1100 }
                ]
            },
            {
                category_type: "other",
                display_label: "Guarniciones & Postres",
                items: [
                    { name: "Papas Fritas a la provenzal (ail & persil)", price_cents: 600 },
                    { name: "Ensalada mixta", price_cents: 700 },
                    { name: "Panqueque con Dulce de Leche", price_cents: 950 },
                    { name: "Don Pedro (Glace vanille, whisky, noix)", price_cents: 1100 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-grillades-de-buenos-aires/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Une véritable ’estancia’ argentine au cœur de Montparnasse. Depuis plus de 20 ans, cet établissement fait figure de référence pour les amoureux de viande d’exception, exclusivement importée de la Pampa argentine. Dans un décor rustique et chaleureux peuplé de guitares et de souvenirs, les parrilladas sont orchestrées avec une précision chirurgicale, portées par les notes de tango qui flottent dans l'air.",
    insider_tip: "Le ’Bife de Lomo’ est d’une tendreté légendaire, mais ne passez pas à côté des empanadas maison en entrée et demandez leur chimichurri spécial.",
    expert_catchline: "L’ambassade de la viande argentine à Paris.",
    specials: {
        cuisine: ["Argentin"],
        drinks: ["Malbec Argentin", "Vins de Mendoza"],
        must_eat: "Cuisine argentine. L’Asado de Tira et les Papas Fritas a la provenzal.",
        must_drink: "Un Malbec puissant pour accompagner la viande rouge."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine argentine. L’Asado de Tira et les Papas Fritas a la provenzal.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
