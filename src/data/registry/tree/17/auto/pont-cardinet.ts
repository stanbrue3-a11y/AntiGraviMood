import { SurgicalPlace } from "../../../type-definition";

export const pont_cardinet: SurgicalPlace = {
  id: "poi-pont-cardinet",
  slug: "pont-cardinet",
  name: "Pont Cardinet",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "Rue Cardinet, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.887858,
    lng: 2.3130191,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJJw61Iv5x5kcRYWQAy29vqJk_FIXED"
  },
  moods: {
    chill: 100,
    festif: 0,
    culturel: 0
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=7962778015210757114",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: true,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
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
    cuisine: ["Français"],
    drinks: [],
    must_eat: `Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.`,
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pont-cardinet/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Français. Pont Cardinet.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default pont_cardinet;
