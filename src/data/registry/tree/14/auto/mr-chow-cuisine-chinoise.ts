import { SurgicalPlace } from "../../../type-definition";

export const mr_chow_cuisine_chinoise: SurgicalPlace = {
  "id": "poi-mr-chow-cuisine-chinoise",
  slug: "mr-chow-cuisine-chinoise",
  "name": "Mr Chow Cuisine Chinoise",
  category: "restaurant",
  subcategory: ["chinois", "authentique"],
  location: {
    address: "24 Rue Daguerre, 75014 Paris",
    arrondissement: 14,
    lat: 48.8418261,
    lng: 2.333258,
    nearest_metro: "Denfert-Rochereau",
    metro_lines: [4, 6],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:00–22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/Mr-Chow-Cuisine-Chinoise-105553904586221/",
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
        display_label: "Spécialités Chinoises",
        items: [
          { "name": "Poulet impérial", price_cents: 1400 },
          { "name": "Dim Sum maison", price_cents: 800 }
        ]
      }
    ]
  },
  description: "Mr Chow Cuisine Chinoise est une escale asiatique d'une grande sincérité et d'une authenticité rare située rue Daguerre. Dans un cadre épuré, accueillant et d'une grande propreté, on y déguste une cuisine familiale soignée, mettant à l'honneur les saveurs vraies de la Chine. Plats équilibrés, dim sum artisanaux et accueil d'une grande douceur font de ce lieu une adresse de quartier d'une grande fiabilité pour un voyage culinaire serein.",
  expert_catchline: "L'authenticité de la cuisine chinoise familiale et la douceur de l'accueil à Daguerre.",
  insider_tip: "Leur poulet impérial est une merveille de saveurs. L'ambiance y est très calme et sereine, idéale pour un déjeuner apaisant. Une adresse de cœur pour les amateurs de gastronomie chinoise authentique dans le 14ème.",
  specials: {
    cuisine: ["Chinois"],
    must_eat: "Cuisine de Tradition. Poulet Impérial & Dim Sum Maison.",
  },
  real_talk: {
    text: "Une adresse de quartier fiable, authentique et d'une grande douceur culinaire.",
    must_eat: "Cuisine de Tradition. Poulet Impérial & Dim Sum Maison.",
    le_secret: "L'équipe prépare chaque plat à la minute pour garantir une fraîcheur et une justesse de goût absolues.",
    le_son: "Calme, discret et serein.",
    le_must: "La justesse des saveurs."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-cuisine-chinoise/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default mr_chow_cuisine_chinoise;
