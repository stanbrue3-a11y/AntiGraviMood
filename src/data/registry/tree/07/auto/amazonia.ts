import { SurgicalPlace } from "../../../type-definition";

export const amazonia: SurgicalPlace = {
  "id": "poi-amazonia",
  slug: "amazonia",
  "name": "Amazonia",
  category: "restaurant",
  subcategory: ["mexicain", "latino"],
  location: {
    address: "33 Av. de Suffren, 75007 Paris, France",
    arrondissement: 7,
    lng: 2.2950844,
    nearest_metro: "La Motte-Picquet - Grenelle",
    metro_lines: [6, 8, 10],
    google_id: "ChIJB2bFCgBx5kcRusgGK1ULtTs"
  },
  moods: {
    chill: 50,
    festif: 80,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 11:00–02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://amazoniaparis.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    dish_price: 18,
    menu_items: [
      {
        category_type: "main",
        display_label: "Spécialités Latino",
        items: [
          { "name": "Ceviche de bar", price_cents: 1600 },
          { "name": "Burger Amazonia", price_cents: 1700 }
        ]
      }
    ]
  },
  description: "Amazonia propose une évasion culinaire vibrante, mêlant saveurs latino-américaines authentiques et ambiance tropicale. C'est un lieu chaleureux et convivial où l'on savoure des plats faits maison généreux, accompagnés d'une excellente ambiance musicale.",
  expert_catchline: "L'escale gourmande et festive pour un voyage immédiat en Amérique Latine, à deux pas de la Tour Eiffel.",
  insider_tip: "L'immense terrasse est un must aux beaux jours pour profiter de l'ambiance du quartier. Ne manquez pas les cocktails signature.",
  specials: {
    cuisine: ["Mexicain"],
    must_eat: "Cuisine Latino-Américaine. Ceviche & Cocktails Tropicaux.",
  },
  real_talk: {
    text: "Un lieu chaleureux et convivial aux saveurs latino-américaines.",
    must_eat: "Cuisine Latino-Américaine. Ceviche de bar & Cocktails exotiques.",
    le_secret: "La qualité des produits faits maison et la générosité des assiettes.",
    le_son: "Excellente ambiance musicale, actuelle et entraînante.",
    le_must: "Les cocktails exotiques et les grillades."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/amazonia/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8
};

export default amazonia;
