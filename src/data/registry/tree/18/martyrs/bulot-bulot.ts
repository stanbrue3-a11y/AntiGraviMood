import { SurgicalPlace } from "../../../type-definition";

export const bulot_bulot: SurgicalPlace = {
  id: "poi-bulot-bulot",
  slug: "bulot-bulot",
  name: "Bulot Bulot Seafood Bar",
  category: "restaurant",
  subcategory: ['mer'],
  location: {
    address: "83 Rue des Martyrs, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.883337,
    lng: 2.3396098,
    nearest_metro: "Abbesses / Pigalle",
    metro_lines: [12, 2],
    google_id: "ChIJhdjMXERu5kcRjoZrnkbcY4g"
  },
  moods: {
    chill: 70,
    festif: 60,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 18:30 – 23:00 | mardi: 18:30 – 23:00 | mercredi: 18:30 – 23:00 | jeudi: 18:30 – 23:00 | vendredi: 18:30 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bulotbulot.com/",
      label: "SÉLECTION"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Huîtres de Blainville-sur-mer n°3 (x6)", price_cents: 1800 },
          { name: "Huîtres de Blainville-sur-mer n°3 (x12)", price_cents: 3400 },
          { name: "Portion de Bulots sauce aïoli", price_cents: 950 },
          { name: "Crevettes roses Bio de Madagascar", price_cents: 1200 },
          { name: "Tourteau entier de Bretagne", price_cents: 2200 },
          { name: "Langoustines fraîches (selon arrivage)", price_cents: 1900 },
          { name: "Plateau Bulot Bulot (Assortiment)", price_cents: 4500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Lobster Roll Classique (Homard breton)", price_cents: 2400 },
          { name: "Lobster Roll Spicy (Pimenté)", price_cents: 2450 },
          { name: "Roll à la Chair de Tourteau", price_cents: 1900 },
          { name: "Roll aux Crevettes Grises", price_cents: 1600 },
          { name: "Fish & Chips de lieu noir", price_cents: 1750 },
          { name: "Dos de cabillaud à la vapeur, algues", price_cents: 2100 },
          { name: "Tartare de thon rouge aux câpres", price_cents: 1850 }
        ]
      },
      {
        category_type: "sharing",
        display_label: "Assiettes à Partager",
        items: [
          { name: "Taramasalata maison aux œufs de cabillaud", price_cents: 850 },
          { name: "Rillettes de Lieu Jaune fumé", price_cents: 900 },
          { name: "Accras de Morue croustillants (x6)", price_cents: 1000 },
          { name: "Couteaux à la plancha ail et persil", price_cents: 1250 },
          { name: "Légumes de saison rôtis", price_cents: 600 },
          { name: "Frites maison à la fleur de sel", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Fondant au chocolat noir", price_cents: 800 },
          { name: "Riz au lait de grand-mère", price_cents: 700 },
          { name: "Sorbet Citron & Romarin", price_cents: 650 }
        ]
      }
    ]
  },
  description: "À deux pas de Pigalle, Bulot Bulot est l’ambassade de la côte normande dans le 18e. Ici, pas de chichis : on s’installe au bar ou en terrasse pour déguster des huîtres ultra-fraîches, des bulots à l’aïoli et surtout leurs célèbres Lobster Rolls. L'ambiance est iodée, conviviale et délicieusement rétro. Une escale maritime indispensable en plein Paris.",
  insider_tip: "• Pas de réservation : venez tôt pour choper une place en terrasse rue des Martyrs.\n• Le Lobster Roll Classique est le meilleur de la rive droite, testez-le absolument.\n• Accompagnez le tout d’un verre de Muscadet bien frais sélectionné par la maison.",
  specials: {
    cuisine: ["Poisson"],
    drinks: ["Vins blancs de Loire", "Cidre fermier"],
    must_eat: "Cuisine de la mer. Poissons et Crustacés. Huîtres de Blainville & Lobster Roll",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bulot-bulot/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de la mer. Poissons et Crustacés. Huîtres de Blainville & Lobster Roll",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default bulot_bulot;
