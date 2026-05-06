import { SurgicalPlace } from "../../../type-definition";

export const le_procope: SurgicalPlace = {
  "id": "poi-le-procope",
  slug: "le-procope",
  "name": "Le Procope",
  category: "restaurant",
  subcategory: ["historique", "brasserie"],
  location: {
    address: "13 Rue de l'Ancienne Comédie, 75006 Paris",
    arrondissement: 6,
    lng: 2.338876,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–00:00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.procope.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 45,
    is_free: false,
    dish_price: 32,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Tradition",
        items: [
          { "name": "Tête de Veau en cocotte", price_cents: 3100 },
          { "name": "Coq au Vin", price_cents: 2800 }
        ]
      }
    ]
  },
  description: "Fondé en 1686, le Procope est le plus vieux café de Paris. Fréquenté par Voltaire, Rousseau et les révolutionnaires, il offre un cadre historique exceptionnel. La cuisine de brasserie traditionnelle y est servie avec élégance dans des salons chargés d'histoire.",
  expert_catchline: "Dîner dans l'histoire de France au cœur du plus vieux café de Paris.",
  insider_tip: "Ne manquez pas de regarder le bicorne de Napoléon exposé à l'entrée. Le salon Franklin est particulièrement majestueux.",
  specials: {
    cuisine: ["Historique"],
    must_eat: "Cuisine de bistrot. Tête de Veau & Coq au Vin.",
  },
  real_talk: {
    text: "Le plus vieux café de Paris, chargé d'histoire.",
    must_eat: "Cuisine de bistrot. Tête de Veau & Coq au Vin.",
    le_secret: "La table de Voltaire est toujours là.",
    le_son: "Ambiance feutrée de brasserie historique.",
    le_must: "Le cadre incomparable."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-procope/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3
};

export default le_procope;
