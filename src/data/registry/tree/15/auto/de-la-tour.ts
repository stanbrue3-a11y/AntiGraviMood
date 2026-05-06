import { SurgicalPlace } from "../../../type-definition";

export const de_la_tour: SurgicalPlace = {
  "id": "poi-de-la-tour",
  slug: "de-la-tour",
  "name": "De la Tour",
  category: "restaurant",
  subcategory: ["brasserie", "historique"],
  location: {
    address: "24 Boulevard de Grenelle, 75015 Paris",
    arrondissement: 15,
    lng: 2.291258,
    nearest_metro: "Bir-Hakeim",
    metro_lines: [6],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 07:00–02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.brasseriedelatour.paris/",
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
        display_label: "Brasserie Classique",
        items: [
          { "name": "Steak frites maison", price_cents: 1800 },
          { "name": "Confit de canard", price_cents: 2200 }
        ]
      }
    ]
  },
  description: "La Brasserie De la Tour est une institution parisienne d'une grande sincérité située boulevard de Grenelle, à deux pas de la Tour Eiffel. L'adresse propose une cuisine de terroir honnête et généreuse, servie avec une efficacité remarquable. Dans un cadre classique, boisé et d'une belle clarté, avec sa grande terrasse vibrante, on y déguste des classiques de brasserie aux saveurs justes. Une adresse de quartier d'une grande fiabilité pour un repas décontracté dans l'effervescence touristique.",
  expert_catchline: "La brasserie parisienne sincère, généreuse et la terrasse vibrante au pied de la Tour Eiffel.",
  insider_tip: "Une adresse parfaite pour un déjeuner rapide ou un café en terrasse en profitant de l'animation du quartier. L'ambiance y est toujours conviviale et d'une grande simplicité. Très bon rapport qualité-prix pour l'emplacement. Idéal pour une pause gourmande lors d'une visite de la Dame de Fer.",
  specials: {
    cuisine: ["Brasserie"],
    must_eat: "Cuisine de brasserie. Steak Frites & Desserts Traditionnels.",
  },
  real_talk: {
    text: "Une adresse de quartier fiable, authentique et d'une grande efficacité gourmande.",
    must_eat: "Cuisine de brasserie. Steak Frites & Desserts Traditionnels.",
    le_secret: "L'établissement est un point de repère historique pour les voyageurs et les habitants du quartier depuis de nombreuses années, offrant un refuge authentique à deux pas des monuments.",
    le_son: "Brouhaha joyeux et cosmopolite.",
    le_must: "La proximité de la Tour Eiffel."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/de-la-tour/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2
};

export default de_la_tour;
