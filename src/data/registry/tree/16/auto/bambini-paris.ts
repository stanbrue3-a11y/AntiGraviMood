import { SurgicalPlace } from "../../../type-definition";

export const bambini_paris: SurgicalPlace = {
  id: "poi-bambini-paris",
  slug: "bambini-paris",
  name: "Bambini Paris",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "Palais De Tokyo, 13 Av. du Président Wilson, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8645866,
    lng: 2.2966748,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJt9VeXGRv5kcRA7kQ-xGju00"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 23:00 | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: 12:00 – 15:00, 19:00 – 23:00 | jeudi: 12:00 – 15:00, 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://bambini-restaurant.com/?utm_source=Yext&utm_medium=GMB&y_source=1_MjU3NjI3ODctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
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
    must_eat: "Cuisine de quartier. Les Arancini à la Truffe et la Pizza Rigatoni.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bambini-paris/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 3.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. Les Arancini à la Truffe et la Pizza Rigatoni.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default bambini_paris;
