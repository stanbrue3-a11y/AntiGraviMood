import { SurgicalPlace } from "../../../type-definition";

export const judy: SurgicalPlace = {
  "id": "poi-judy",
  slug: "judy",
  "name": "Judy",
  category: "restaurant",
  subcategory: ["bien-être", "sans-gluten"],
  location: {
    address: "18 Rue de Fleurus, 75006 Paris",
    arrondissement: 6,
    lng: 2.331258,
    nearest_metro: "Saint-Placide",
    metro_lines: [4],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 08:00–18:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://judy-paris.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 18,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cantine Qualitarienne",
        items: [
          { "name": "Bowl du jour", price_cents: 1600 },
          { "name": "Pancakes sans gluten", price_cents: 1400 }
        ]
      }
    ]
  },
  description: "Judy est une cantine 'qualitarienne' située à deux pas du Jardin du Luxembourg. Elle propose une cuisine saine, gourmande et principalement sans gluten. Un lieu lumineux et apaisant pour un petit-déjeuner nutritif ou un déjeuner ressourçant.",
  expert_catchline: "La cantine bien-être et gourmande face au Luxembourg.",
  insider_tip: "Leurs jus pressés à froid sont une explosion de vitamines. La terrasse au soleil le matin est un pur bonheur.",
  specials: {
    cuisine: ["Bien-être"],
    must_eat: "Cuisine Bien-être. Pancakes & Bowls Vitaminés.",
  },
  real_talk: {
    text: "Une cantine saine et lumineuse.",
    must_eat: "Cuisine Bien-être. Pancakes & Bowls Vitaminés.",
    le_secret: "Tous les gâteaux sont sans gluten et sans sucre raffiné.",
    le_son: "Calme et zen.",
    le_must: "La terrasse ensoleillée."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/judy/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default judy;
