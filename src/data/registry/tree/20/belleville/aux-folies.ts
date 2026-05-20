import { SurgicalPlace } from "../../../type-definition";

export const aux_folies: SurgicalPlace = {
  "id": "poi-aux-folies",
  slug: "aux-folies",
  "name": "Aux Folies",
  category: "restaurant",
  subcategory: ["bar", "historique"],
  location: {
    address: "8 Rue de Belleville, 75020 Paris",
    arrondissement: 20,
    lat: 48.8722442,
    lng: 2.378965,
    nearest_metro: "Belleville",
    metro_lines: [2, 11],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 90,
    festif: 100,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 07:00–02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.aux-folies-belleville.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    dish_price: 10,
    menu_items: [
      {
        category_type: "main",
        display_label: "Bar & Grignotages",
        items: [
          { "name": "Bière pression", price_cents: 450 },
          { "name": "Planette de charcuterie", price_cents: 1200 }
        ]
      }
    ]
  },
  description: "Aux Folies est un lieu de vie légendaire d'une grande sincérité et d'une splendeur populaire situé rue de Belleville. Ancien music-hall où chanta Maurice Chevalier, ce bar-brasserie propose une expérience vibrante, célébrant l'âme de Belleville avec une énergie exemplaire. On y vient pour siroter un verre sur la terrasse immense, se mêler à une foule cosmopolite et joyeuse, et profiter d'une ambiance d'une rare intensité. Une adresse magnifique, habitée et d'une grande poésie urbaine.",
  expert_catchline: "La légende de Belleville, l'énergie populaire et la terrasse vibrante aux Folies.",
  insider_tip: "Une adresse incontournable pour s'immerger dans la vie de quartier. L'ambiance y est toujours dynamique, conviviale et d'une grande liberté. Idéal pour un verre en fin de journée ou un café matinal dans l'effervescence du 20ème. Profitez de la terrasse, véritable cœur battant du quartier, pour observer le spectacle permanent de la rue de Belleville. L'accueil y est toujours d'une grande sincérité.",
  specials: {
    cuisine: ["Bar"],
    must_eat: "Cuisine de Bar. Boissons & Grignotages Populaires.",
  },
  real_talk: {
    text: "Une expérience monumentale, majestueuse et d'une grande poésie sensorielle.",
    must_eat: "Cuisine de Bar. Boissons & Grignotages Populaires.",
    le_secret: "Le lieu a conservé son décor de bar des années 50, avec ses néons rouges iconiques, témoignant d'une époque où Belleville était le centre névralgique de la fête parisienne.",
    le_son: "Brouhaha joyeux et dynamique.",
    le_must: "L'ambiance populaire."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/aux-folies/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.1
};

export default aux_folies;
