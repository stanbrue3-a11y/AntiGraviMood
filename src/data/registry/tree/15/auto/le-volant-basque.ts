import { SurgicalPlace } from "../../../type-definition";

export const le_volant_basque: SurgicalPlace = {
  id: "poi-le-volant-basque",
  slug: "le-volant-basque",
  name: "Le Volant Basque",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "13 Rue Béatrix Dussane, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8499212,
    lng: 2.2913047,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJRSHAtBtw5kcRXZuOHzJj8a0"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 18:45 – 22:30 | mardi: 12:00 – 14:30, 18:45 – 22:30 | mercredi: 12:00 – 14:30, 18:45 – 22:30 | jeudi: 12:00 – 14:30, 18:45 – 22:30 | vendredi: 12:00 – 14:30, 18:45 – 22:30 | samedi: 12:00 – 14:15, 18:45 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://linktr.ee/levolantbasque",
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
    must_eat: "Cuisine de quartier. L'Axoa de Veau et le Gâteau Basque.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-volant-basque/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. L'Axoa de Veau et le Gâteau Basque.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_volant_basque;
