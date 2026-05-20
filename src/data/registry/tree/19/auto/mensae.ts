import { SurgicalPlace } from "../../../type-definition";

export const mensae: SurgicalPlace = {
  "id": "poi-mensae",
  slug: "mensae",
  "name": "Mensae",
  category: "restaurant",
  subcategory: ["bistrot", "moderne"],
  location: {
    address: "23 Rue de la Mare, 75019 Paris",
    arrondissement: 19,
    lat: 48.8757226,
    lng: 2.388965,
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
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.mensae.paris/",
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
        display_label: "Bistronomie de Saison",
        items: [
          { "name": "Plat créatif du chef", price_cents: 2800 },
          { "name": "Mousse au chocolat signature", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Mensae est un bistrot moderne d'une grande élégance et d'une technicité éblouissante situé rue de la Mare. Le chef Thibault Sombardier propose une cuisine d'auteur sincère et créative, mettant à l'honneur les produits de saison avec un talent et un raffinement remarquables. Dans un cadre accueillant, contemporain et d'une belle clarté, on y déguste des plats aux saveurs justes, célébrant la bistronomie française avec une intelligence rare au cœur de Belleville. Une adresse de quartier d'une grande fiabilité.",
  expert_catchline: "La bistronomie moderne, sincère et l'élégance culinaire de Thibault Sombardier au Mensae.",
  insider_tip: "Une adresse pour les gourmets en quête de découvertes et de calme. Chaque plat est une démonstration de justesse et de respect du produit. Leur mousse au chocolat est devenue une légende de gourmandise dans le quartier. L'ambiance y est d'une grande douceur, idéale pour un moment savoureux et hors du temps. Réservation vivement conseillée car le lieu est très prisé.",
  specials: {
    cuisine: ["Bistrot"],
    must_eat: "Cuisine de bistrot. Plats Créatifs & Mousse au Chocolat Signature.",
  },
  real_talk: {
    text: "Une expérience gastronomique intense, authentique et d'une rare élégance humaine.",
    must_eat: "Cuisine de bistrot. Plats Créatifs & Mousse au Chocolat Signature.",
    le_secret: "Thibault Sombardier, finaliste de Top Chef, a voulu créer un lieu de vie accessible et généreux, appliquant la rigueur de la haute cuisine à l'esprit convivial du bistrot de quartier.",
    le_son: "Calme, discret et serein.",
    le_must: "La pureté des saveurs."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mensae/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default mensae;
