import { SurgicalPlace } from "../../../type-definition";

export const les_botanistes: SurgicalPlace = {
  id: "poi-les-botanistes",
  slug: "les-botanistes",
  name: "Les Botanistes",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "11 Rue Chomel, 75007 Paris, France",
    arrondissement: 7,
    lat: 48.85207930000001,
    lng: 2.325686,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJJ3EsctRx5kcR23c6Gmx5QYE"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lesbotanistes.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici
    ]
  },
  description: `Un établissement authentique qui incarne l'art de vivre parisien avec sincérité.`,
  expert_catchline: `Un établissement authentique qui incarne l'art de vivre parisien avec sincérité.`,
  insider_tip: `• **Timing Stratégique** : Profiter de l'ouverture pour une expérience privilégiée.
  • **Combo Moelle** : La suggestion du chef, gage de qualité et de fraîcheur.
  • **Expérience Culturelle** : Une immersion au cœur de l'histoire du quartier.`,
  specials: {
    cuisine: [],
    drinks: [],
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/les-botanistes/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default les_botanistes;
