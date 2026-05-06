import { SurgicalPlace } from "../../../type-definition";

export const le_bouchon_parisien: SurgicalPlace = {
  "id": "poi-le-bouchon-parisien",
  slug: "le-bouchon-parisien",
  "name": "Le Bouchon Parisien",
  category: "restaurant",
  subcategory: ["bistrot", "lyonnais"],
  location: {
    address: "24 Rue de l'Arrivée, 75015 Paris",
    arrondissement: 15,
    lng: 2.321258,
    nearest_metro: "Montparnasse-Bienvenüe",
    metro_lines: [4, 6, 12, 13],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–14:30, 19:00–22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/lebouchonparisien/",
      label: "VOIR FACEBOOK"
    }
  },
  pricing: {
    avg_budget: 35,
    is_free: false,
    dish_price: 22,
    menu_items: [
      {
        category_type: "main",
        display_label: "Spécialités de Bouchon",
        items: [
          { "name": "Andouillette tirée à la corde", price_cents: 1800 },
          { "name": "Quenelle de brochet", price_cents: 1600 }
        ]
      }
    ]
  },
  description: "Le Bouchon Parisien est une escale gourmande d'une grande sincérité située au cœur de Montparnasse. Fidèle à l'esprit des bouchons lyonnais, l'adresse propose une cuisine de terroir généreuse et honnête. Dans un cadre classique, boisé et d'une belle énergie, on y déguste des classiques de la gastronomie française aux saveurs justes. Une adresse de quartier d'une grande fiabilité pour un repas décontracté et savoureux dans l'effervescence du quartier.",
  expert_catchline: "La générosité du bouchon lyonnais et la convivialité de Montparnasse.",
  insider_tip: "Une adresse parfaite pour un déjeuner convivial ou un dîner entre amis. Leur andouillette est une référence de gourmandise pour les amateurs. L'ambiance y est toujours joyeuse et d'une grande simplicité. Très bon rapport qualité-prix pour le quartier. Profitez de leur terrasse pour observer la vie de Montparnasse.",
  specials: {
    cuisine: ["Bistrot"],
    must_eat: "Cuisine de Tradition. Andouillette & Quenelle de Brochet.",
  },
  real_talk: {
    text: "Une adresse de quartier fiable, authentique et d'une grande générosité culinaire.",
    must_eat: "Cuisine de Tradition. Andouillette & Quenelle de Brochet.",
    le_secret: "L'établissement respecte scrupuleusement les codes du bouchon traditionnel, privilégiant les produits frais et les recettes transmises avec passion.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "La convivialité."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bouchon-parisien/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2
};

export default le_bouchon_parisien;
