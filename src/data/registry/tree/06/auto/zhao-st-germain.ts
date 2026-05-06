import { SurgicalPlace } from "../../../type-definition";

export const zhao_st_germain: SurgicalPlace = {
  id: "poi-zhao-st-germain",
  slug: "la-taverne-de-zhao-saint-germain",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "82 rue Mazarine, 75006 Paris, France",
    arrondissement: 6,
    lat: 48.8538648, 
    lng: 2.3382294,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJ9UILDIlx5kcR3sL8aFTmOXE"
  },
  moods: {
    chill: 40,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 22:30 | mardi: 12:00 – 22:30 | mercredi: 12:00 – 22:30 | jeudi: 12:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/stgermain/",
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
  description: "À deux pas de l’Odéon, cette taverne est l’une des plus esthétiques du groupe. Inaugurée en juillet 2024, elle s’intègre au chic du 6e arrondissement tout en conservant l’âme brute de Xi’an. Le lieu est idéal pour un dîner élégant, sublimant l'art des nouilles Biang Biang dans un cadre épuré.",
  insider_tip: "• C’est l’adresse la plus ’cosy’ de la Rive Gauche : idéale pour faire découvrir la cuisine chinoise authentique dans un cadre soigné.\n• Leur thé au jasmin est servi dans de jolies théières traditionnelles, parfait pour accompagner la puissance des épices.\n• Ne ratez pas l’assiette de raviolis dégustation pour goûter aux trois farces différentes faites maison.",
  specials: {
    cuisine: ["Asiatique"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Raviolis maison",
  },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-saint-germain/gallery_4.jpg"
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

export default zhao_st_germain;
