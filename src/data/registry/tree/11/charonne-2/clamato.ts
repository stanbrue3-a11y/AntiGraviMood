import { SurgicalPlace } from '../../../type-definition';

export const clamato: SurgicalPlace = {
    id: "poi-clamato",
    name: "Clamato",
    slug: "clamato",
    category: "restaurant",
    subcategory: ['français', 'bistronomie'],
    location: {
        address: "80 Rue de Charonne",
        arrondissement: 11,
        lat: 48.854064,
        lng: 2.3804812,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJW5fGmmxz5kcRM4j3Wq79o5o"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–22:30\nsamedi: 12:00–22:30\ndimanche: 12:00–22:30",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://clamato-charonne.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 3.00,
        dish_price: 35, // MANUAL: Équivalent d'un plat complet (Assiettes à partager, 2-3 par personne).
        force_manual_dish_price: true,
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Banc de l’Écailler (Entrées & Plats)",
        items: [
          { name: "Huîtres Marennes Oléron N°3 (les 6)", price_cents: 1800, is_highlight: true },
          { name: "Huîtres Utah Beach N°2 (les 6)", price_cents: 2000 },
          { name: "Huîtres Plates de Belon N°0 (les 6)", price_cents: 2800 },
          { name: "Oursins de Galice sauvage (l’unité)", price_cents: 600, is_highlight: true },
          { name: "Bulots de Dieppe, aïoli maison", price_cents: 900 },
          { name: "Bigorneaux au court-bouillon", price_cents: 700 },
          { name: "Crevettes Grises à décortiquer", price_cents: 850 },
          { name: "Plateau Royal (Assortiment complet)", price_cents: 7500, is_highlight: true }
        ]
      },
      {
        category_type: "starter",
        display_label: "Assiettes à Partager (Entrées & Plats)",
        items: [
          { name: "Tarama d’œuf de cabillaud au Zaatar", price_cents: 800 },
          { name: "Ceviche de Mulet Noir, piment & coriandre", price_cents: 1400, is_highlight: true },
          { name: "Cru de Maigre, poire & chou-rave", price_cents: 1500 },
          { name: "Carpaccio de Saint-Jacques au Cédrat", price_cents: 1700 },
          { name: "Accras de Morue ’Clamato' (x6)", price_cents: 1100 },
          { name: "Poulpe grillé, pommes grenailles", price_cents: 2900, is_highlight: true },
          { name: "Seiches à la plancha, ail & persil", price_cents: 1900 },
          { name: "Lotte rôtie, jus de viande percutant", price_cents: 3200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts Signature (Desserts)",
        items: [
          { name: "Tartelette au Sirop d’Érable (Culte)", price_cents: 900, is_highlight: true },
          { name: "Glace au Sarrasin torréfié", price_cents: 700 },
          { name: "Sorbet Herbes fraîches & Citron", price_cents: 700 },
          { name: "Mousse Chocolat noir & Fleur de sel", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Mixologie Marime (Boissons)",
        items: [
          { name: "Clamato Bloody Mary (Signature)", price_cents: 1200, is_highlight: true },
          { name: "Michelada (Bière & Sauce épicée)", price_cents: 1000 },
          { name: "Pisco Sour à la péruvienne", price_cents: 1300 },
          { name: "Mocktail ’Iode & Gingembre'", price_cents: 950 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave Nature & Bulles (Boissons)",
        items: [
          { name: "Verre de Muscadet Sèvre-et-Maine", price_cents: 800, is_highlight: true },
          { name: "Pet’Nat ’La Bulle Moderne’ (Verre)", price_cents: 1000 },
          { name: "Bouteille Vin Blanc ’Vivant'", price_cents: 3800 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 450 },
          { name: "Cidre Brut Artisanal (Verre)", price_cents: 700 },
          { name: "Café Espresso (Lomi)", price_cents: 300 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/clamato/gallery_4.jpg"
    ]
  },
    instagram_handle: "clamato_paris",
    verified: true,
    google_rating: 4.5,
    description: "Le petite frère marin du Septime (situé juste à côté). Le Clamato, inspiré des oyster bars de la côte est américaine, propose une carte exclusivement iodée hyper fraîche, conçue sous forme de petites assiettes à partager dans une ambiance enfiévrée.",
    insider_tip: "• Attention : Pas de réservation possible ! Il faut venir tôt, donner son nom, et idéalement patienter au café d’en face ou à la cave du Septime.\n• Commandez le Bloody Mary maison, il est conçu spécifiquement pour accompagner la salinité des huîtres.\n• Ne partez surtout pas sans avoir commandé la célèbre tarte au sirop d'érable en dessert.",
    expert_catchline: "L’Oyster bar de la galaxie Septime : iode pure, assiettes percutantes et aucune réservation.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Clamato Bloody Mary"],
        must_eat: "Cuisine française. La cultissime tarte au sirop d’érable surmontée de sa crème fouettée non sucrée, le contraste parfait pour finir.",
        must_drink: "Le Bloody Mary maison, pour se mettre dans l’ambiance US East Coast iodée assumée."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. La cultissime tarte au sirop d’érable surmontée de sa crème fouettée non sucrée, le contraste parfait pour finir.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
