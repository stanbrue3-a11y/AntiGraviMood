import { SurgicalPlace } from "../../../type-definition";

export const le_saint_sebastien: SurgicalPlace = {
  id: "poi-le-saint-sebastien",
  slug: "le-saint-sebastien",
  name: "Le Saint Sébastien",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "42 Rue Saint-Sébastien, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.8615061,
    lng: 2.3710352,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJfeigXs9t5kcRtpeq9DfcWXk"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 18:30 – 23:00 | mardi: 18:30 – 23:00 | mercredi: 18:30 – 23:00 | jeudi: 18:30 – 23:00 | vendredi: 18:30 – 23:00 | samedi: 18:30 – 23:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lesaintsebastien.paris/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      // TODO: MOELLE INDUSTRIELLE - Saisir le menu complet ici
    ]
  },
  description: "Un établissement authentique qui incarne l'art de vivre parisien avec sincérité.",
  insider_tip: `• **Timing Stratégique** : Arriver pour l'ouverture à 18h30 pour choper une place au comptoir sans réservation.
  • **Combo Moelle** : Accorder les assiettes de légumes rôtis avec leur sélection de vins au verre.
  • **Expérience Culturelle** : Discuter avec l’équipe pour comprendre l'origine de leurs produits ultra-locaux.`,
  specials: {
    cuisine: ["Français"],
    drinks: [],
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-saint-sebastien/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_saint_sebastien;
