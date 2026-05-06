import { SurgicalPlace } from "../../../type-definition";

export const la_veraison: SurgicalPlace = {
  id: "poi-la-veraison",
  slug: "la-veraison",
  name: "La Véraison",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "64 Rue de la Croix Nivert, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8450239,
    lng: 2.2972629,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJc6zGyRdw5kcR4uWum3ysiA8"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:00 – 21:30 | mardi: 12:00 – 14:00, 19:00 – 21:30 | mercredi: 12:00 – 14:00, 19:00 – 21:30 | jeudi: 12:00 – 14:00, 19:00 – 21:30 | vendredi: 12:00 – 14:00, 19:00 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.laveraison.fr/",
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
    must_eat: "Cuisine de bistrot. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-veraison/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default la_veraison;
