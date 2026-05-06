import { SurgicalPlace } from "../../../type-definition";

export const zhao_grands_boulevards: SurgicalPlace = {
  id: "poi-zhao-grands-boulevards",
  slug: "la-taverne-de-zhao-grands-boulevards",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "166 Rue Montmartre, 75002 Paris, France",
    arrondissement: 2,
    lat: 48.8705055,
    lng: 2.3430087,
    nearest_metro: "Grands Boulevards",
    metro_lines: [8, 9],
    google_id: "ChIJd95Puj1u5kcR1lKZc0aDuWU"
  },
  moods: {
    chill: 30,
    festif: 70,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 22:30 | mardi: 12:00 – 22:30 | mercredi: 12:00 – 22:30 | jeudi: 12:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/montmartre/",
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
  description: "Située sur l’artère vibrante de la rue Montmartre, cette taverne est le point de ralliement des amateurs de Biang Biang en plein cœur des Grands Boulevards. L'ambiance y est électrique et urbaine, parfaite pour un déjeuner de quartier rapide ou un dîner avant une sortie cinéma dans le 2e.",
  insider_tip: "• Arrivée conseillée dès 12h pour éviter le rush des bureaux alentours qui s’y pressent chaque midi.\n• Le service est ultra-rapide, idéal pour un repas de haute qualité chrono en main.\n• Ne repartez pas sans avoir goûté les Oreilles de porc pimentées, un délice croquant typique de Xi'an.",
  specials: {
    cuisine: ["Asiatique"],
    must_eat: "Cuisine chinoise. Biang Biang Poulet & Mo Bœuf",
  },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-grands-boulevards/gallery_4.jpg"
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

export default zhao_grands_boulevards;
