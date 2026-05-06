import { SurgicalPlace } from "../../../type-definition";

export const le_relais_de_lodeon: SurgicalPlace = {
  "id": "poi-le-relais-de-lodeon",
  slug: "le-relais-de-lodeon",
  "name": "Le Relais de l'Odéon",
  category: "restaurant",
  subcategory: ["brasserie", "français"],
  location: {
    address: "132 Boulevard Saint-Germain, 75006 Paris",
    arrondissement: 6,
    lng: 2.338965,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 07:00–02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.relais-odeon.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 35,
    is_free: false,
    dish_price: 24,
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Brasserie",
        items: [
          { "name": "Steak Tartare", price_cents: 1900 },
          { "name": "Confit de Canard", price_cents: 2200 }
        ]
      }
    ]
  },
  description: "Le Relais de l'Odéon est une brasserie parisienne vibrante située sur le Boulevard Saint-Germain. Avec sa grande terrasse et son service continu, c'est le lieu idéal pour observer le ballet incessant du quartier tout en dégustant des classiques de la gastronomie française.",
  expert_catchline: "La brasserie parisienne pur jus sur le Boulevard Saint-Germain.",
  insider_tip: "Leur terrasse est chauffée en hiver, parfaite pour un café ou un verre en fin de journée.",
  specials: {
    cuisine: ["Brasserie"],
    must_eat: "Cuisine Française. Steak Tartare & Confit de Canard.",
  },
  real_talk: {
    text: "Une brasserie vibrante au cœur de Saint-Germain.",
    must_eat: "Cuisine Française. Steak Tartare & Confit de Canard.",
    le_secret: "Le service est l'un des plus rapides du quartier.",
    le_son: "Brouhaha parisien typique.",
    le_must: "La grande terrasse."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-relais-de-lodeon/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.1
};

export default le_relais_de_lodeon;
