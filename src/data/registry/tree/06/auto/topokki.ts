import { SurgicalPlace } from "../../../type-definition";

export const topokki: SurgicalPlace = {
  "id": "poi-topokki",
  slug: "topokki",
  "name": "Topokki",
  category: "restaurant",
  subcategory: ['coréen'],
  location: {
    address: "20 Rue Mazarine, 75006 Paris",
    arrondissement: 6,
    lng: 2.338965,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–15:00, 19:00–22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.topokki.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 20,
    is_free: false,
    dish_price: 14,
    menu_items: [
      {
        category_type: "main",
        display_label: "Street Food Coréenne",
        items: [
          { "name": "Topokki Original", price_cents: 1200 },
          { "name": "Kimbap", price_cents: 1000 }
        ]
      }
    ]
  },
  description: "Topokki est une petite adresse dédiée à la street food coréenne au cœur de Saint-Germain-des-Prés. On y déguste les célèbres gâteaux de riz épicés dans un cadre simple et convivial. Rapide, efficace et authentique.",
  expert_catchline: "La street-food coréenne authentique et piquante à Odéon.",
  insider_tip: "Leurs Topokki au fromage sont un délice réconfortant. Idéal pour un déjeuner rapide sur le pouce.",
  specials: {
    cuisine: ["Coréen"],
    must_eat: "Cuisine Coréenne. Topokki & Kimbap.",
  },
  real_talk: {
    text: "Une adresse simple et authentique.",
    must_eat: "Cuisine Coréenne. Topokki & Kimbap.",
    le_secret: "La sauce est préparée chaque matin selon une recette familiale.",
    le_son: "Ambiance de cantine animée.",
    le_must: "Le goût authentique."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/topokki/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2
};

export default topokki;
