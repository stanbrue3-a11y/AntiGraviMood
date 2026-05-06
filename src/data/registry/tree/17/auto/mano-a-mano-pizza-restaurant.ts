import { SurgicalPlace } from "../../../type-definition";

export const mano_a_mano_pizza_restaurant: SurgicalPlace = {
  id: "poi-mano-a-mano-pizza-restaurant",
  slug: "mano-a-mano-pizza-restaurant",
  name: "Mano a Mano Pizza Restaurant",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "8 Rue Jouffroy d’Abbans, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8872347,
    lng: 2.3128551,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJzanHFwBv5kcRqLIG63fEjgA"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.manoamano.paris/",
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
    cuisine: ["Italien"],
    drinks: [],
    must_eat: `Cuisine italienne. La spécialité du chef selon l’arrivage du marché.`,
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mano-a-mano-pizza-restaurant/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Mano a Mano Pizza Restaurant.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default mano_a_mano_pizza_restaurant;
