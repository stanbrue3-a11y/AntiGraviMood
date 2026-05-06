import { SurgicalPlace } from "../../../type-definition";

export const le_bonheur_de_cardinet: SurgicalPlace = {
  id: "poi-le-bonheur-de-cardinet",
  slug: "le-bonheur-de-cardinet",
  name: "Le bonheur de Cardinet",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "138 Rue Cardinet, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8868351,
    lng: 2.313555,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJQ0Hafrhv5kcRNDi4Ct2TUUU"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:30 – 15:00, 18:30 – 23:00 | mardi: 11:30 – 15:00, 18:30 – 23:00 | mercredi: 11:30 – 15:00, 18:30 – 23:00 | jeudi: 11:30 – 15:00, 18:00 – 23:00 | vendredi: 11:30 – 15:00, 18:30 – 23:00 | samedi: 12:00 – 15:00, 18:30 – 23:00 | dimanche: 18:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://le-bonheur-de-cardinet.eatbu.com/?lang=fr",
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
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bonheur-de-cardinet/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Français. Le bonheur de Cardinet.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_bonheur_de_cardinet;
