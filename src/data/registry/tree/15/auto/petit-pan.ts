import { SurgicalPlace } from "../../../type-definition";

export const petit_pan: SurgicalPlace = {
  id: "poi-petit-pan",
  slug: "petit-pan",
  name: "Petit Pan",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "18 Rue Rosenwald, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8332133,
    lng: 2.3057479,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJWZnR9EZw5kcR3uNlZjC54T4"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lepetitpan.fr/",
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
  description: `Une adresse de caractère, authentique et d'une grande sincérité pour une expérience culinaire mémorable.`,
  expert_catchline: `Une adresse de caractère, authentique et d'une grande sincérité pour une expérience culinaire mémorable.`,
  insider_tip: `• **Timing Stratégique** : Arriver tôt pour profiter de l'ambiance calme.
  • **Combo Moelle** : La spécialité du chef accompagnée d'un verre de vin sélectionné.
  • **Expérience Culturelle** : L'art de vivre à la parisienne dans un cadre unique.`,
  specials: {
    cuisine: [],
    drinks: [],
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/petit-pan/gallery_4.jpg"
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

export default petit_pan;
