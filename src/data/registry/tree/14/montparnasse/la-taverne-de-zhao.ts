import { SurgicalPlace } from "../../../type-definition";

export const la_taverne_de_zhao: SurgicalPlace = {
  id: "poi-la-taverne-de-zhao",
  slug: "la-taverne-de-zhao",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "11 Rue Delambre, 75014 Paris, France",
    arrondissement: 14,
    lat: 48.8416463,
    lng: 2.3283367,
    nearest_metro: "Edgar Quinet / Vavin",
    metro_lines: [6, 4],
    google_id: "ChIJTxzcA9Nx5kcRJyR_2DjInGY"
  },
  moods: {
    chill: 85,
    festif: 20,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 22:30 | samedi: 12:00 – 22:30 | dimanche: 12:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://zhaogroupe.com/",
      label: "SITE WEB"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Incontournables (Plats Mo - Sandwiches Xi’an)",
        items: [
          { name: "MO Traditionnel (Porc mijoté)", price_cents: 750, description: "Pain maison croustillant, viande fondante" },
          { name: "MO - JI (Poulet)", price_cents: 750 },
          { name: "MO Végé", price_cents: 750, description: "Tofu & légumes" }
        ]
      },
      {
        category_type: "main",
        display_label: "Pâtes Fraîches (Plats Biang Biang & Handmade)",
        items: [
          { name: "Pâte Biangbiang Bœuf Braisé", price_cents: 1380, description: "Larges nouilles tirées à la main" },
          { name: "Pâte Biangbiang Porc", price_cents: 1380 },
          { name: "Pâte Biangbiang Tomate & Œuf", price_cents: 1280 },
          { name: "Pâte Biangbiang Mixte (Bœuf & Tomate)", price_cents: 1380 },
          { name: "Pâte Biangbiang Mixte (Porc & Tomate)", price_cents: 1380 },
          { name: "Nouilles Froides Liangpi Classiques", price_cents: 1180, description: "Idéal en été" },
          { name: "Nouilles Froides Liangpi Sauce XO", price_cents: 1280 }
        ]
      },
      {
        category_type: "main",
        display_label: "Raviolis (Plats Artisanaux)",
        items: [
          { name: "Classic Fried Dumplings (6pc)", price_cents: 780 },
          { name: "Steam Chicken Dumplings (6pc)", price_cents: 780 },
          { name: "Vegetable Fried Dumplings (6pc)", price_cents: 780 },
          { name: "Xiao Long Bao (4pc)", price_cents: 850 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées Froides (Cold Appetizers)",
        items: [
          { name: "Platycodon (Racine croquante)", price_cents: 780 },
          { name: "Black Forest (Champignons)", price_cents: 680 },
          { name: "Salad Kelp (Algues)", price_cents: 680 },
          { name: "Spicy Beef", price_cents: 780 }
        ]
      },
      {
        category_type: "main",
        display_label: "Marmites (Plats)",
        items: [
          { name: "Clay Pot Rice Noodles", price_cents: 1380 },
          { name: "Clay Pot Sweet Potato Noodles", price_cents: 1380 },
          { name: "Clay Pot Chinese Udon", price_cents: 1380 }
        ]
      },
      {
        category_type: "other",
        display_label: "Spécialités & Poulet Sauté",
        items: [
          { name: "ZHAO’s Fried Chicken", price_cents: 850 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs",
        items: [
          { name: "Riz Noir, Mangue & Lait de Coco", price_cents: 700 },
          { name: "Perles de Coco", price_cents: 600 }
        ]
      },
    ]
  },
  description: "La Taverne de Zhao est une escale vibrante dédiée à la gastronomie de Xi’an. Ici, l’art du Biang Biang (nouilles tirées à la main) et du Mo (pain traditionnel) est élevé au rang de religion. L’ambiance ’taverne’ invite au partage dans un décor boisé et authentique, à deux pas de la tour Montparnasse.",
  insider_tip: "• **Timing Stratégique** : Visez le créneau de 12h pour éviter l’affluence des bureaux.\n• **Combo Moelle** : Les Biang Biang Bœuf sont une référence en termes de texture et de goût.\n• **Détail Secret** : Demandez le niveau de piment ’moyen’ pour apprécier toute la complexité des épices de Xi'an.",
  specials: {
    cuisine: ["Asiatique"],
    drinks: ["Softs", "Thé"],
    must_eat: "Cuisine chinoise. Biang Biang Noodles Bœuf Braisé",
  },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.8,

    real_talk: {
    text: "Une taverne vibrante dédiée aux saveurs de Xi'an, où l'authenticité se goûte dans chaque bol de nouilles tirées à la main.",
    must_eat: "Cuisine chinoise. Biang Biang & Mo (Pain traditionnel).",
    le_secret: "La pâte est pétrie et étirée sous vos yeux, une technique ancestrale qui donne aux nouilles cette mâche unique.",
    le_son: "Le bruit sourd des pâtes que l'on claque sur le plan de travail et l'animation joyeuse des convives.",
    le_must: "Le Mo au porc mijoté, un réconfort absolu."
  }

};

export default la_taverne_de_zhao;
