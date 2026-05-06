import { SurgicalPlace } from "../../../type-definition";

export const villa_verdi: SurgicalPlace = {
  "id": "poi-villa-verdi",
  slug: "villa-verdi",
  "name": "Villa Verdi",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "20 Rue de la Croix Nivert, 75015 Paris",
    arrondissement: 15,
    lng: 2.301258,
    nearest_metro: "Cambronne",
    metro_lines: [6],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 20,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–14:30, 19:00–22:30",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.villaverdi.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 35,
    is_free: false,
    dish_price: 22,
    menu_items: [
      {
        category_type: "main",
        display_label: "Saveurs d'Italie",
        items: [
          { "name": "Pizza artisanale", price_cents: 1500 },
          { "name": "Pasta à la norma", price_cents: 1600 }
        ]
      }
    ]
  },
  description: "Villa Verdi est une escale italienne d'une grande sincérité et d'une gourmandise absolue située rue de la Croix Nivert. Spécialisée dans les pizzas artisanales et les plats de tradition, l'adresse propose une cuisine généreuse, préparée avec des produits sourcés avec soin. Dans un cadre accueillant, contemporain et d'une belle clarté, on y déguste le goût vrai de l'Italie dans une ambiance de quartier d'une grande douceur. Une adresse de cœur pour un moment savoureux.",
  expert_catchline: "L'authenticité de la cuisine italienne artisanale et le charme de Grenelle.",
  insider_tip: "Leurs pizzas sont d'une belle légèreté et riches en saveurs. L'ambiance y est très calme et sereine, idéale pour un repas apaisant. Une adresse parfaite pour les amoureux de gastronomie italienne sincère dans le 15ème.",
  specials: {
    cuisine: ["Italien"],
    must_eat: "Cuisine italienne. Pizza Artisanale & Pâtes Maison.",
  },
  real_talk: {
    text: "Une adresse de quartier fiable, authentique et d'une grande générosité culinaire.",
    must_eat: "Cuisine italienne. Pizza Artisanale & Pâtes Maison.",
    le_secret: "L'équipe travaille exclusivement avec des produits frais et des recettes transmises avec passion pour garantir une expérience produit irréprochable.",
    le_son: "Calme, discret et serein.",
    le_must: "La fraîcheur des produits."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-verdi/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default villa_verdi;
