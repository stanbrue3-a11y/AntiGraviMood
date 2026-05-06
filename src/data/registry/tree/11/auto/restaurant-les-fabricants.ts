import { SurgicalPlace } from "../../../type-definition";

export const restaurant_les_fabricants: SurgicalPlace = {
  "id": "poi-restaurant-les-fabricants",
  slug: "restaurant-les-fabricants",
  "name": "Restaurant Les Fabricants",
  category: "restaurant",
  subcategory: ["sud-ouest", "brasserie"],
  location: {
    address: "61 Rue Jean-Pierre Timbaud, 75011 Paris",
    arrondissement: 11,
    lng: 2.378965,
    nearest_metro: "Parmentier",
    metro_lines: [3],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 70,
    festif: 60,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:00–15:00, 19:00–23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lesfabricants.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 15,
    menu_items: [
      {
        category_type: "main",
        display_label: "Spécialités du Sud-Ouest",
        items: [
          { "name": "Escalope de veau à la montagnarde", price_cents: 1800 },
          { "name": "Confit de canard", price_cents: 1600 }
        ]
      }
    ]
  },
  description: "Les Fabricants est une institution du 11ème arrondissement, célèbre pour ses portions gargantuesques et sa cuisine généreuse du Sud-Ouest. L'ambiance y est conviviale, bruyante et sans chichis. C'est le lieu idéal pour une grande tablée entre amis où la gourmandise est le maître-mot.",
        google_id: "TODO",  expert_catchline: "La générosité du Sud-Ouest et les portions XXL au cœur du 11ème.",
  insider_tip: "Arrivez tôt ou soyez patients, il y a souvent foule. L'escalope à la montagnarde est un défi pour les plus gros appétits.",
  specials: {
    cuisine: ["Sud-ouest"],
    must_eat: "Cuisine du Sud-Ouest. Escalope Montagnarde & Confit de Canard.",
  },
  real_talk: {
    text: "Une institution conviviale aux portions légendaires.",
    must_eat: "Cuisine du Sud-Ouest. Escalope Montagnarde & Confit de Canard.",
    le_secret: "Ici, on ne réserve pas, on vient comme on est.",
    le_son: "Brouhaha joyeux de grande tablée.",
    le_must: "La générosité des assiettes."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-les-fabricants/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default restaurant_les_fabricants;
