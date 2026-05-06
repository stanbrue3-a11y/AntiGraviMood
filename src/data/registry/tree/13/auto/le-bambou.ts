import { SurgicalPlace } from "../../../type-definition";

export const le_bambou: SurgicalPlace = {
  id: "poi-le-bambou",
  slug: "le-bambou",
  name: "Le Bambou",
  category: "restaurant",
  subcategory: ['vietnamien'],
  location: {
    address: "70 Rue Baudricourt, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.825228,
    lng: 2.3624637,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJdSmk24dx5kcRcwpa4vrIsGM"
  },
  moods: {
    chill: 85,
    festif: 30,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 11:30 – 15:30, 18:30 – 22:30 | mercredi: 11:30 – 15:30, 18:30 – 22:30 | jeudi: 11:30 – 15:30, 18:30 – 22:30 | vendredi: 11:30 – 15:30, 18:30 – 22:30 | samedi: 11:30 – 15:30, 18:30 – 22:30 | dimanche: 11:30 – 15:30, 18:30 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.le-bambou.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Nems au porc (4 pièces)", price_cents: 899 },
          { name: "Rouleaux de printemps (crevettes & porc)", price_cents: 600 },
          { name: "Salade de papaye aux crevettes", price_cents: 800 },
          { name: "Raviolis vietnamiens au porc", price_cents: 949 },
          { name: "Crevettes croustillantes", price_cents: 1500 },
          { name: "Poulet en feuilles de pandan", price_cents: 1600 }
        ]
      },
      {
        category_type: "other",
        display_label: "Spécialités Soupes & Riz",
        items: [
          { name: "Phở đặc biệt (Soupe Spéciale)", price_cents: 1399 },
          { name: "Riz au bœuf Loc Lac", price_cents: 1399 },
          { name: "Vermicelles au bœuf & Nems", price_cents: 1349 },
          { name: "Riz au porc grillé", price_cents: 1299 },
          { name: "Boulettes de porc grillé & Vermicelles", price_cents: 1499 },
          { name: "Riz aux trois trésors", price_cents: 1399 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Riz gluant mangue & lait de coco", price_cents: 1300 },
          { name: "Tarte au citron meringue & combava", price_cents: 1300 },
          { name: "Tarte aux figues & shiso", price_cents: 1300 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Thé au jasmin (Théière)", price_cents: 500 },
          { name: "Bière Saigon (33cl)", price_cents: 550 },
          { name: "Bière Tsingtao (33cl)", price_cents: 550 },
          { name: "Lait de soja maison", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Le Bambou est une véritable institution du quartier chinois de Paris. Reconnu pour son Phở légendaire et son ambiance de cantine vrombissante, c’est l’adresse de référence pour ceux qui cherchent l’authenticité vietnamienne sans fioritures. Service ultra-rapide et saveurs percutantes garanties.",
  insider_tip: "• **Timing Stratégique** : Arrivez tôt (11h45 ou 18h45) car la file d’attente s’allonge très vite sur le trottoir.\n• **Expérience Culturelle** : L’ambiance est bruyante et les tables sont serrées, c’est ce qui fait le charme du lieu.\n• **Combo Moelle** : Le Phở spécial est copieux, n’hésitez pas à demander du piment frais pour relever le bouillon.",
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Thé au jasmin", "Bière Saigon"],
    must_eat: "Cuisine vietnamienne. Phở đặc biệt & Nems maison",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bambou/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 3.9,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine vietnamienne. Phở đặc biệt & Nems maison",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_bambou;
