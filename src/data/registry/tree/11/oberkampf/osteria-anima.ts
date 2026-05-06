import { SurgicalPlace } from '../../../type-definition';

export const osteria_anima: SurgicalPlace = {
    id: "poi-osteria-anima",
    name: "L’Osteria dell’anima",
    slug: "osteria-anima",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "37 Rue Oberkampf",
        arrondissement: 11,
        lat: 48.8639985,
        lng: 2.3704555,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJR2qQ4vxt5kcRzIR3m9By5VQ"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:30–23:00\nmardi: 12:00–14:30, 19:30–23:00\nmercredi: 12:00–14:30, 19:30–23:00\njeudi: 12:00–14:30, 19:30–23:00\nvendredi: 12:00–14:30, 19:30–23:00\nsamedi: 19:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "tel:+33143384003",
            label: "APPELER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 22, // MANUAL: Fresh pastas are generally 18-26€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Antipasti & Entrées",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Focaccia artisanale", price_cents: 800 },
                    { name: "Crème de Tomate maison", price_cents: 900 },
                    { name: "Burrata onctueuse des pouilles", price_cents: 1200 },
                    { name: "Asperges au Parmesan (Saison)", price_cents: 1300 },
                    { name: "Carpaccio de bœuf", price_cents: 1450 },
                    { name: "Salade de Roquette au Parmesan", price_cents: 1400 },
                    { name: "Poulpe et petit Orzo", price_cents: 1600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Pizzas (Spécialités complémentaires)",
                items: [
                    { name: "Margherita", price_cents: 1500 },
                    { name: "Bufala", price_cents: 1700 },
                    { name: "Diavola", price_cents: 1800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtes Fraîches Artisanales (Signature)",
                items: [
                    { name: "Pâtes Cacio e Pepe", price_cents: 1800, description: "Minimalisme romain : Fromage Pecorino & poivre de qualité." },
                    { name: "La Vraie Carbonara", price_cents: 1900 },
                    { name: "Gnocchi maison", price_cents: 1900 },
                    { name: "Lasagne Traditionnelle au four", price_cents: 2000 },
                    { name: "Pappardelle au ragout de bœuf lent", price_cents: 2200 },
                    { name: "Pâtes fraîches aux fruits de mer", price_cents: 2400, description: "Le grand classique de la maison, garni de crustacés." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts (Dolci) & Boissons",
                items: [
                    { name: "Pudding au Caramel", price_cents: 850 },
                    { name: "Tiramisu de L’Osteria", price_cents: 1000 },
                    { name: "Bière Extraomnes / Montestella", price_cents: 800 },
                    { name: "Limoncello (Digeo)", price_cents: 600 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/osteria-anima/gallery_4.jpg"
    ]
  },
    instagram_handle: "", // Not well known/prominent. Emphasize standard practical interaction.
    verified: true,
    google_rating: 4.6,
    description: "Une discrète Osteria nichée au cœur de la rue Oberkampf qui résiste aux modes avec brio. C’est l'un des rares temples totalement dédiés à la confection manuelle des pâtes fraîches, dans une salle au cadre rudimentaire mais hyper romantique.",
    insider_tip: "• La devanture ne paie pas de mine, mais le lieu est très intime et petit : une réservation par téléphone est chaudement recommandée.\n• Regardez vers la cuisine ouverte : on y façonne les pâtes toute la journée à la main.\n• Si vous êtes deux, prenez une assiette de Cacio e Pepe et une assiette Fruit de Mer, et partagez.",
    expert_catchline: "L’artisanat brut de la pâte fraîche italienne, servie copieusement dans une salle minuscule et vivante.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Montepulciano rouge"],
        must_eat: "Cuisine italienne. L’énorme assiette fumante de Pâtes fraîches enrobées d’ail, d’huile d’olive, de palourdes et fruits de mer.",
        must_drink: "Un chaleureux vin Toscan à prix doux pour escorter les glucides."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. L’énorme assiette fumante de Pâtes fraîches enrobées d’ail, d’huile d",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
