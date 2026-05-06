import { SurgicalPlace } from "../../../type-definition";

export const zhao_menilmontant: SurgicalPlace = {
  id: "poi-zhao-menilmontant",
  slug: "la-taverne-de-zhao-menilmontant",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "42 rue de Ménilmontant, 75020 Paris, France",
    arrondissement: 20,
    lat: 48.8679487, 
    lng: 2.3870272,
    nearest_metro: "Ménilmontant",
    metro_lines: [2],
    google_id: "ChIJcym0MbBt5kcRw7JmOhJfHek"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/menilmontant/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Salade de Tofu frité", price_cents: 480 },
          { name: "Algues marinées au sésame", price_cents: 450 },
          { name: "Pommes de terre à la vinaigrette de Xi’an", price_cents: 420 },
          { name: "Oreilles de porc pimentées", price_cents: 550 },
          { name: "Concombre frappé à l’ail", price_cents: 450 },
          { name: "Raviolis Porc & Chou (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Végétariens (8 pièces)", price_cents: 1150 },
          { name: "Assiette dégustation (12 pièces)", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Mo au Porc mijoté", price_cents: 650, description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price_cents: 700 },
          { name: "Mo au Canard laqué", price_cents: 750 },
          { name: "Mo Végétarien", price_cents: 600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price_cents: 1280, description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price_cents: 1150 },
          { name: "Biang Biang Poulet croustillant", price_cents: 1300 },
          { name: "Biang Biang Tomate & Œuf", price_cents: 1080, description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price_cents: 1450 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mochi glacé (2)", price_cents: 450 },
          { name: "Perles de coco", price_cents: 480 },
        ]
      }
    ]
  },
  description: "Dernière-née du groupe, la Taverne Ménilmontant apporte les saveurs de Xi’an dans l’est parisien. Le décor y est particulièrement chaleureux, parfaitement intégré à l’esprit populaire et artistique du 20e arrondissement. On y retrouve l'excellence des Biang Biang tirées à la main.",
  insider_tip: "• Sa salle spacieuse en fait l’adresse la plus confortable du groupe pour les grandes tablées d’amis.\n• Ne ratez pas les raviolis Poulet & Champignon, la farce y est particulièrement savoureuse et juteuse.\n• C’est l’endroit idéal pour un déjeuner tardif le week-end, l’ambiance y est détendue et conviviale.",
  specials: {
    cuisine: ["Asiatique"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Mo Porc",
  },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-menilmontant/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.9,

    real_talk: {
    text: "Une taverne vibrante dédiée aux saveurs de Xi'an, où l'authenticité se goûte dans chaque bol de nouilles tirées à la main.",
    must_eat: "Cuisine chinoise. Biang Biang & Mo (Pain traditionnel).",
    le_secret: "La pâte est pétrie et étirée sous vos yeux, une technique ancestrale qui donne aux nouilles cette mâche unique.",
    le_son: "Le bruit sourd des pâtes que l'on claque sur le plan de travail et l'animation joyeuse des convives.",
    le_must: "Le Mo au porc mijoté, un réconfort absolu."
  }

};

export default zhao_menilmontant;
