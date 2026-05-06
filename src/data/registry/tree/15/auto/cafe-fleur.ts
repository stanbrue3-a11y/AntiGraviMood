import { SurgicalPlace } from "../../../type-definition";

export const cafe_fleur: SurgicalPlace = {
  "id": "poi-cafe-fleur",
  slug: "cafe-fleur",
  "name": "Café Fleur",
  category: "restaurant",
  subcategory: ["café", "bistrot"],
  location: {
    address: "47 Rue de Lourmel, 75015 Paris",
    arrondissement: 15,
    lng: 2.293258,
    nearest_metro: "Dupleix",
    metro_lines: [6],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 07:30–22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/cafefleurparis/",
      label: "VOIR FACEBOOK"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 15,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Café",
        items: [
          { "name": "Salade de saison", price_cents: 1400 },
          { "name": "Plat du jour", price_cents: 1600 }
        ]
      }
    ]
  },
  description: "Le Café Fleur est un café-bistrot d'une grande sincérité situé rue de Lourmel. L'adresse propose une cuisine décontractée et généreuse, servie avec une efficacité remarquable. Dans un cadre classique, fleuri et d'une belle clarté, on y déguste des classiques de café aux saveurs justes. Une adresse de quartier d'une grande fiabilité pour une pause gourmande dans la douceur du 15ème.",
  expert_catchline: "Le café parisien sincère, fleuri et la convivialité de quartier à Lourmel.",
  insider_tip: "Une adresse parfaite pour un café matinal ou un déjeuner rapide sur le pouce. L'ambiance y est toujours d'une belle sincérité et d'une grande simplicité. Très bon rapport qualité-prix pour le quartier. Leur terrasse est particulièrement agréable aux beaux jours.",
  specials: {
    cuisine: ["Café"],
    must_eat: "Cuisine de bistrot. Salades Fraîches & Plat du Jour.",
  },
  real_talk: {
    text: "Une adresse de quartier fiable, authentique et d'une grande douceur culinaire.",
    must_eat: "Cuisine de bistrot. Salades Fraîches & Plat du Jour.",
    le_secret: "L'établissement est connu pour son accueil chaleureux et son décor fleuri qui change selon les saisons.",
    le_son: "Calme et convivial.",
    le_must: "Le cadre fleuri."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/cafe-fleur/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3
};

export default cafe_fleur;
