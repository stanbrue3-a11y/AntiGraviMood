import { SurgicalPlace } from "../../../type-definition";

export const restaurant_l_oyat: SurgicalPlace = {
  id: "poi-restaurant-l-oyat",
  slug: "restaurant-l-oyat",
  name: "Restaurant L’Oyat",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "11 Rue Notre Dame de Nazareth, 75003 Paris, France",
    arrondissement: 3,
    lat: 48.8670676,
    lng: 2.3605553,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJZR5X0h1v5kcRKHX-v-Duw_Y"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:30 – 23:00 | mercredi: 12:00 – 14:00, 19:30 – 23:00 | jeudi: 12:00 – 14:00, 19:30 – 23:00 | vendredi: 12:00 – 14:00, 19:30 – 23:00 | samedi: 12:00 – 14:00, 19:30 – 23:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://restaurantloyat.fr/",
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
    cuisine: ["Français"],
    drinks: [],
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-l-oyat/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de quartier. La spécialité du chef selon l’arrivage du marché.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default restaurant_l_oyat;
