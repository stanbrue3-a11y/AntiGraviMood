import { SurgicalPlace } from "../../../type-definition";

export const benjamin_schmitt_restaurant: SurgicalPlace = {
  id: "poi-benjamin-schmitt-restaurant",
  slug: "benjamin-schmitt-restaurant",
  name: "Benjamin Schmitt Restaurant",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "41 Rue Catherine de la Rochefoucauld, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.87985279999999,
    lng: 2.3349295,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJU22EryVv5kcR3XLR1CB5D68"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:30, 19:00 – 22:00 | mercredi: 12:00 – 14:30, 19:00 – 22:00 | jeudi: 12:00 – 14:30, 19:00 – 22:00 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.hectar-paris.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
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
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/benjamin-schmitt-restaurant/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Français. Benjamin Schmitt Restaurant.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default benjamin_schmitt_restaurant;
