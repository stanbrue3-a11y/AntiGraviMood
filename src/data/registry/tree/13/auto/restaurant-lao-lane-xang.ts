import { SurgicalPlace } from "../../../type-definition";

export const restaurant_lao_lane_xang: SurgicalPlace = {
  id: "poi-restaurant-lao-lane-xang",
  slug: "restaurant-lao-lane-xang",
  name: "Restaurant Lao Lane Xang",
  category: "restaurant",
  subcategory: ['vietnamien'],
  location: {
    address: "102 Av. d’Ivry, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8256088,
    lng: 2.3614423,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJwym-LIZx5kcRgA1fevt2Qjo"
  },
  moods: {
    chill: 80,
    festif: 45,
    culturel: 65
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 23:00 | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: Fermé | jeudi: 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.facebook.com/Lao-Lane-Xang-2-24474506332/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Nems végétariens", price_cents: 500 },
          { name: "Crêpes de riz aux crevettes", price_cents: 600 },
          { name: "Salade de riz croustillant", price_cents: 800 },
          { name: "Soupe épicée de crevettes", price_cents: 700 },
          { name: "Bœuf séché traditionnel", price_cents: 840 },
          { name: "Salade de papaye verte", price_cents: 800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Steak Lao (Entrecôte grillée)", price_cents: 1300 },
          { name: "Bar entier à la vapeur", price_cents: 2000 },
          { name: "Crevettes frites au lait de coco", price_cents: 1100 },
          { name: "Canard laqué au curry rouge", price_cents: 1100 },
          { name: "Curry de porc caramélisé", price_cents: 820 },
          { name: "Maquereau entier aux herbes", price_cents: 1480 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Riz gluant à la mangue fraîche", price_cents: 700 },
          { name: "Flan au lait de coco", price_cents: 400 },
          { name: "Riz gluant noir au flan", price_cents: 400 },
          { name: "Gélatines au lait de coco", price_cents: 300 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Thé glacé thaï (Maison)", price_cents: 450 },
          { name: "Bière Singha (33cl)", price_cents: 580 },
          { name: "Bière Beerlao (33cl)", price_cents: 600 },
          { name: "Jus de coco frais", price_cents: 500 }
        ]
      }
    ]
  },
  description: "Lao Lane Xang 2 est l’une des tables les plus respectées du 13ème arrondissement. Proposant un voyage culinaire entre le Laos, la Thaïlande et le Vietnam, le lieu est célèbre pour son équilibre parfait entre épices et fraîcheur. Un cadre plus soigné que les cantines voisines, idéal pour découvrir des spécialités comme le riz croustillant ou le canard au curry.",
  insider_tip: "• **Combo Moelle** : La salade de riz croustillant (Nam Khao) est un incontournable absolu pour commencer le repas.\n• **Expérience Culturelle** : Le service est efficace et la carte est extrêmement riche, laissez-vous tenter par le Steak Lao.\n• **Timing Stratégique** : Le restaurant est très populaire le soir, prévoyez d’arriver à l’ouverture pour éviter l’attente.",
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Thé glacé thaï", "Bière Singha"],
    must_eat: "Cuisine vietnamienne. Salade de riz croustillant & Steak Lao",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/restaurant-lao-lane-xang/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine vietnamienne. Salade de riz croustillant & Steak Lao",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default restaurant_lao_lane_xang;
