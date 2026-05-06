import { SurgicalPlace } from "../../../type-definition";

export const solstice: SurgicalPlace = {
  "id": "poi-solstice",
  slug: "solstice",
  "name": "Solstice",
  category: "restaurant",
  subcategory: ["gastronomique"],
  location: {
    address: "45 Rue Claude Bernard, 75005 Paris",
    arrondissement: 5,
    lng: 2.345689,
    nearest_metro: "Censier-Daubenton",
    metro_lines: [7],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 19:30–22:00",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://solstice-paris.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 80,
    is_free: false,
    dish_price: 65,
    menu_items: [
      {
        category_type: "main",
        display_label: "Menu Dégustation",
        items: [
          { "name": "Menu Signature", price_cents: 7500 }
        ]
      }
    ]
  },
  description: "Solstice est une parenthèse enchantée dans le 5ème arrondissement. La cuisine, d'une grande finesse, met en avant des produits d'exception travaillés avec une créativité sans faille. Un lieu calme et élégant pour une expérience gastronomique mémorable.",
        google_id: "TODO",  expert_catchline: "L'élégance gastronomique et la poésie culinaire au cœur du 5ème.",
  insider_tip: "Une adresse parfaite pour une occasion spéciale. Le menu dégustation est une véritable voyage sensoriel.",
  specials: {
    cuisine: ["Gastronomique"],
    must_eat: "Cuisine Gastronomique. Menu Dégustation & Plats de Saison.",
  },
  real_talk: {
    text: "Une expérience gastronomique d'exception.",
    must_eat: "Cuisine Gastronomique. Menu Dégustation & Plats de Saison.",
    le_secret: "La cave à vins composée de pépites de vignerons indépendants.",
    le_son: "Feutré et élégant.",
    le_must: "Le service impeccable."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/solstice/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.9
};

export default solstice;
