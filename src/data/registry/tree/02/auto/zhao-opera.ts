import { SurgicalPlace } from "../../../type-definition";

export const zhao_opera: SurgicalPlace = {
  id: "poi-zhao-opera",
  slug: "la-taverne-de-zhao-opera",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "16 Rue Saint-Augustin, 75002 Paris, France",
    arrondissement: 2,
    lat: 48.8689464,
    lng: 2.336424,
    nearest_metro: "Quatre-Septembre",
    metro_lines: [3],
    google_id: "ChIJ33wI4iNv5kcRSUFFfd3qLeA"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:30 – 22:30 | mardi: 11:30 – 22:30 | mercredi: 11:30 – 22:30 | jeudi: 11:30 – 22:30 | vendredi: 11:30 – 23:00 | samedi: 11:30 – 23:00 | dimanche: 11:30 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/opera/",
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
  description: "À deux pas de l’Opéra Garnier, cette taverne décline l’univers ZHAO dans une version épurée et moderne. C’est l'adresse idéale pour un déjeuner business authentique ou une pause Biang Biang élégante avant un spectacle. Le décor mêle tradition et modernité avec finesse.",
  insider_tip: "• C’est l’adresse la plus ’chic’ de la famille : idéale si vous voulez faire découvrir les saveurs de Xi’an dans un cadre soigné.\n• Les raviolis y sont particulièrement bien exécutés, ne passez pas à côté de la version Poulet & Champignon.\n• Si vous venez à deux, partagez un Mo et un plat de nouilles pour goûter à tout sans exploser votre budget.",
  specials: {
    cuisine: ["Asiatique"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Raviolis maison",
  },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-taverne-de-zhao-opera/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

    real_talk: {
    text: "Une taverne vibrante dédiée aux saveurs de Xi'an, où l'authenticité se goûte dans chaque bol de nouilles tirées à la main.",
    must_eat: "Cuisine chinoise. Biang Biang & Mo (Pain traditionnel).",
    le_secret: "La pâte est pétrie et étirée sous vos yeux, une technique ancestrale qui donne aux nouilles cette mâche unique.",
    le_son: "Le bruit sourd des pâtes que l'on claque sur le plan de travail et l'animation joyeuse des convives.",
    le_must: "Le Mo au porc mijoté, un réconfort absolu."
  }

};

export default zhao_opera;
