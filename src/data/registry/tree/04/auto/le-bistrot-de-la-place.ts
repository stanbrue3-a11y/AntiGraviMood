import { SurgicalPlace } from "../../../type-definition";

export const le_bistrot_de_la_place: SurgicalPlace = {
  id: "poi-le-bistrot-de-la-place",
  slug: "le-bistrot-de-la-place",
  name: "Le Bistrot de la Place",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "2 Pl. du Marché Sainte-Catherine, 75004 Paris, France",
    arrondissement: 4,
    lat: 48.8553203,
    lng: 2.3630125,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJJw61Iv5x5kcRYWQAy29vqJk"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 00:00 | mardi: 09:00 – 00:00 | mercredi: 09:00 – 00:00 | jeudi: 09:00 – 00:00 | vendredi: 09:00 – 00:00 | samedi: 09:00 – 00:00 | dimanche: 09:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://bistrotdelaplaceparis.fr/fr",
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
  description: `Un établissement authentique qui cultive l'art de vivre et la convivialité au quotidien.`,
  expert_catchline: `Un établissement authentique qui cultive l'art de vivre et la convivialité au quotidien.`,
  insider_tip: `• **Timing Stratégique** : Arriver au moment de l'ouverture pour savourer le calme du lieu.
  • **Combo Moelle** : La suggestion du jour accompagnée d'une boisson artisanale.
  • **Expérience Culturelle** : Une immersion dans l'ambiance unique de ce quartier historique.`,
  specials: {
    cuisine: ["Bistronomie"],
    drinks: [],
    must_eat: "Cuisine de bistrot. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-de-la-place/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_bistrot_de_la_place;
