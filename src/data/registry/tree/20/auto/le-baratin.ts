import { SurgicalPlace } from "../../../type-definition";

export const le_baratin: SurgicalPlace = {
  "id": "poi-le-baratin",
  slug: "le-baratin",
  "name": "Le Baratin",
  category: "restaurant",
  subcategory: ["bistrot", "authentique"],
  location: {
    address: "3 Rue Jouye-Rouve, 75020 Paris",
    arrondissement: 20,
    lng: 2.381258,
    nearest_metro: "Pyrénées",
    metro_lines: [11],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–22:30",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lebaratin.paris/",
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
        display_label: "Bistronomie de Terroir",
        items: [
          { "name": "Plat canaille du jour", price_cents: 2600 },
          { "name": "Sélection de vins nature", price_cents: 800 }
        ]
      }
    ]
  },
  description: "Le Baratin est une institution absolue de la bistronomie parisienne d'une grande sincérité située rue Jouye-Rouve. La cheffe Raquel Carena propose une cuisine de terroir d'une intelligence et d'une technicité éblouissantes, célébrant le produit avec une ferveur exemplaire. Dans un cadre accueillant, simple et d'une belle énergie, on y déguste des plats aux saveurs justes et à la profondeur remarquable. Une adresse magnifique, habitée et d'une grande intensité culinaire au cœur de Belleville.",
  expert_catchline: "La gastronomie sincère, l'excellence du vin nature et l'âme de Raquel Carena au Baratin.",
  insider_tip: "Une adresse pour les passionnés de goût vrai en quête de sincérité et de calme. Chaque plat est une démonstration de précision technique et d'équilibre des saveurs. L'ambiance y est d'une grande douceur et d'une rare élégance humaine. Leur sélection de vins nature est une référence absolue dans le monde entier. Réservation vivement conseillée des semaines à l'avance car le lieu est une icône.",
  specials: {
    cuisine: ["Bistrot"],
    must_eat: "Cuisine de Saison. Plats Canailles & Vins Nature d'Exception.",
  },
  real_talk: {
    text: "Une expérience gastronomique intense, authentique et d'une rare élégance culinaire.",
    must_eat: "Cuisine de Saison. Plats Canailles & Vins Nature d'Exception.",
    le_secret: "Raquel Carena, autodidacte de génie, a su imposer sa vision d'une cuisine libre et instinctive, faisant du Baratin un lieu de pèlerinage pour les plus grands chefs et les amateurs de vins vivants.",
    le_son: "Calme, discret et serein.",
    le_must: "La justesse des saveurs."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-baratin/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default le_baratin;
