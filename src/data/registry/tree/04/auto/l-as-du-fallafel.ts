import { SurgicalPlace } from "../../../type-definition";

export const l_as_du_fallafel: SurgicalPlace = {
  id: "poi-l-as-du-fallafel",
  slug: "l-as-du-fallafel",
  name: "L’As du Fallafel",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "34 Rue des Rosiers, 75004 Paris, France",
    arrondissement: 4,
    lat: 48.8574067,
    lng: 2.3591962,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJL5QZXQJu5kcRwsTfM6YEA3E"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:00 – 23:30 | mardi: 11:00 – 23:30 | mercredi: 11:00 – 23:30 | jeudi: 11:00 – 23:30 | vendredi: 11:00 – 15:30 | samedi: Fermé | dimanche: 11:00 – 23:30",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://asdufallafel.com/",
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
  description: `Un établissement authentique qui cultive l'art de vivre et la convivialité au quotidien.`,
  expert_catchline: `Un établissement authentique qui cultive l'art de vivre et la convivialité au quotidien.`,
  insider_tip: `• **Timing Stratégique** : Arriver au moment de l'ouverture pour savourer le calme du lieu.
  • **Combo Moelle** : La suggestion du jour accompagnée d'une boisson artisanale.
  • **Expérience Culturelle** : Une immersion dans l'ambiance unique de ce quartier historique.`,
  specials: {
    cuisine: ["Français"],
    drinks: [],
    must_eat: "Cuisine de quartier. Le Sandwich Fallafel Spécial.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-as-du-fallafel/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. Le Sandwich Fallafel Spécial.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_as_du_fallafel;
