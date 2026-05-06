import { SurgicalPlace } from "../../../type-definition";

export const bon_jo: SurgicalPlace = {
  id: "poi-bon-jo",
  slug: "bon-jo",
  name: "Bon Jo",
  category: "restaurant",
  subcategory: ['café'],
  location: {
    address: "10 Rue Lamarck, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.88691,
    lng: 2.3446142,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJc2wcL11u5kcRtyYExUrr41o"
  },
  moods: {
    chill: 85,
    festif: 25,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 09:30 – 16:00 | mardi: 09:30 – 16:00 | mercredi: 09:30 – 16:00 | jeudi: 09:30 – 16:00 | vendredi: 09:30 – 16:00 | samedi: 09:30 – 16:30 | dimanche: 09:30 – 16:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://bon-jo.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Savory Brunch (Plats)",
        items: [
        { name: "Baked Eggs Spinach & Cheese", price_cents: 1450, description: "Œufs au four, épinards, fromage fondant, pain grillé" },
        { name: "Salmon Toast Avocado", price_cents: 1650, description: "Saumon fumé, avocat écrasé, crème d’aneth" },
        { name: "BLT Bagel Scallion", price_cents: 1300, description: "Bacon, laitue, tomate, cream cheese aux oignons verts" },
        { name: "Eggs Royale Benedict", price_cents: 1700, description: "Œufs pochés, saumon, sauce hollandaise maison" },
        { name: "Shakshuka Tradition", price_cents: 1500, description: "Tomates épicées, œufs pochés, feta, coriandre" },
        { name: "Breakfast Burrito XXL", price_cents: 1400 },
        { name: "Halloumi Veggie Wrap", price_cents: 1350 },
        { name: "Classic Avocado Toast", price_cents: 1250 }
      ]},
      {
        category_type: "dessert",
        display_label: "Sweet & Pastries (Desserts)",
        items: [
        { name: "French Toast Banana Caramel", price_cents: 1150, description: "Pain perdu brioché, banane rôtie, sauce caramel" },
        { name: "Hazelnut Blintzes", price_cents: 1050 },
        { name: "NY Cheesecake Berry Coulis", price_cents: 850 },
        { name: "Tarte Citron Meringuée", price_cents: 700 },
        { name: "Granola Maison & Fruits", price_cents: 950 },
        { name: "Double Chocolate Cookie", price_cents: 350 },
        { name: "Blueberry Muffin", price_cents: 400 }
      ]}
    ]
  },
  description: "Niché au pied du Sacré-Cœur, Bon Jo est l’escale brunch par excellence du 18e. Entre influences australiennes et élégance parisienne, ce café baigné de lumière propose une carte courte mais ultra-maîtrisée, où le café de spécialité côtoie des assiettes généreuses. Un lieu calme et serein, loin du tumulte touristique de la place du Tertre.",
  insider_tip: "• **Timing Stratégique** : Arrivez pile à l’ouverture (09h30) le week-end, le lieu est petit et se remplit en 15 minutes.\n• **Combo Gagnant** : Les Baked Eggs suivis du French Toast Banana Caramel forment l'unité de satiété absolue.\n• **Détail Secret** : Demandez la table près de la fenêtre pour la vue discrète sur les toits de Montmartre.",
  specials: {
    cuisine: ["Brunch"],
    drinks: ["Flat White", "Matcha Latte", "Mimosa"],
    must_eat: "Cuisine de café. Brunch maison. Salmon Avocado Toast & Baked Eggs",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bon-jo/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de café. Brunch maison. Salmon Avocado Toast & Baked Eggs",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default bon_jo;
