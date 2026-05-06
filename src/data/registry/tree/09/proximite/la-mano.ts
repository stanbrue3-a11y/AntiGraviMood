import { SurgicalPlace } from "../../../type-definition";

export const la_mano: SurgicalPlace = {
  id: "poi-la-mano",
  slug: "la-mano",
  name: "La Mano",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "10 Rue Papillon, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8762485,
    lng: 2.3474099,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJq6rGShVu5kcR-lvtjWp4gW4"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: 23:45 – 06:00 | jeudi: 23:45 – 06:00 | vendredi: 23:45 – 06:00 | samedi: 23:45 – 06:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
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
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mano/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 3.2,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default la_mano;
