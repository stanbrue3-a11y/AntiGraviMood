import { SurgicalPlace } from "../../../type-definition";

export const chez_maman: SurgicalPlace = {
  "id": "poi-chez-maman",
  slug: "chez-maman",
  "name": "Chez Maman",
  category: "restaurant",
  subcategory: ["bistrot", "authentique"],
  location: {
    address: "24 Rue de la Folie-Méricourt, 75011 Paris",
    arrondissement: 11,
    lat: 48.860123,
    lng: 2.371258,
    nearest_metro: "Saint-Ambroise",
    metro_lines: [9],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-samedi: 12:00–14:30, 19:30–22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.chezmaman.paris/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 30,
    is_free: false,
    dish_price: 18,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Maman",
        items: [
          { "name": "Plat mijoté du jour", price_cents: 1600 },
          { "name": "Dessert maison", price_cents: 800 }
        ]
      }
    ]
  },
  description: "Chez Maman est une adresse d'une grande sincérité et d'une générosité absolue située rue de la Folie-Méricourt. Fidèle à son nom, l'établissement propose une cuisine familiale honnête, mettant à l'honneur les recettes de tradition avec talent et simplicité. Dans un cadre convivial, boisé et d'une belle énergie, on y déguste des plats aux saveurs justes qui rappellent les repas de l'enfance. Une adresse de quartier d'une grande fiabilité pour un moment savoureux et sans chichis.",
  expert_catchline: "La générosité de la cuisine familiale, les saveurs de l'enfance et la convivialité de quartier.",
  insider_tip: "Une adresse parfaite pour un déjeuner réconfortant ou un dîner entre amis. L'ambiance y est toujours joyeuse, décontractée et d'une grande simplicité. Très bon rapport qualité-prix pour le quartier. Leur plat mijoté est une référence de gourmandise. L'accueil y est d'une grande sincérité, comme à la maison.",
  specials: {
    cuisine: ["Bistrot"],
    must_eat: "Cuisine de Tradition. Plats Mijotés & Desserts Maison.",
  },
  real_talk: {
    text: "Une expérience gourmande conviviale, authentique et d'une grande générosité culinaire.",
    must_eat: "Cuisine de Tradition. Plats Mijotés & Desserts Maison.",
    le_secret: "L'équipe prépare chaque matin des bouillons et des sauces maison, signature d'un savoir-faire artisanal qui donne tout son relief à cette cuisine du cœur.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "Les portions généreuses."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-maman/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3
};

export default chez_maman;
