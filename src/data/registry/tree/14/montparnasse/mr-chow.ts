import { SurgicalPlace } from "../../../type-definition";

export const mr_chow: SurgicalPlace = {
  id: "poi-mr-chow",
  slug: "mr-chow-paris-14",
  name: "MR CHOW",
  category: "restaurant",
  subcategory: ['chinois'],
  location: {
    address: "12 Rue Delambre, 75014 Paris, France",
    arrondissement: 14,
    lat: 48.8418261,
    lng: 2.3281676,
    nearest_metro: "Vavin / Edgar Quinet",
    metro_lines: [4, 6],
    google_id: "ChIJO-O_SIdw5kcRxIe_hE3_hEw"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "Lundi: 12:00–14:30, 19:00–22:15 | Mardi: 12:00–14:30, 19:00–22:15 | Mercredi: 12:00–14:30, 19:00–22:15 | Jeudi: 12:00–14:30, 19:00–22:15 | Vendredi: 12:00–14:30, 19:00–22:15 | Samedi: 12:00–14:30, 19:00–22:15 | Dimanche: 12:00–14:30, 19:00–22:15",
    reservation_policy: "resa_conseillee",
    terrace: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.pandapandagroup.com/fr/mr-chow",
      label: "RÉSERVER"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Wontons pochés crevettes (x5)", price_cents: 850, description: "Juteux et parfumés" },
          { name: "Shrimp Toast", price_cents: 1350, description: "Légendaire toast aux crevettes" },
          { name: "Popcorn Fried Chicken", price_cents: 1300, description: "Poulet frit ultra crispy" },
          { name: "Smashed Cucumber sesame", price_cents: 450, description: "Concombre écrasé" },
          { name: "Aubergines Hong Shao", price_cents: 1250, description: "Aubergines fondantes façon HK" },
          { name: "Jiaozi Porc & Chou (x5)", price_cents: 900 },
          { name: "Har Gow Crevettes (x4)", price_cents: 950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Biang Biang Noodles Boeuf", price_cents: 1450, description: "Pâtes larges tirées main" },
          { name: "Creamy Dandan Noodles", price_cents: 1450, description: "Sauce sésame & piment" },
          { name: "Biang Biang Noodles Agneau Confit", price_cents: 1550, description: "Agneau ultra fondant" },
          { name: "Biang Biang Noodles Poulet", price_cents: 1400 },
          { name: "Veggie Noodles Sesame", price_cents: 1350 },
          { name: "Fried Rice Mr Chow", price_cents: 1250 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Bao au Chocolat fondu", price_cents: 550, description: "Cœur coulant" },
          { name: "Mango Sago Dessert", price_cents: 700, description: "Mangue & perles de sagou" },
          { name: "Mochi Glacé Passion (x2)", price_cents: 600 }
        ]
      }
    ]
  },
  description: "MR CHOW est l’escale hongkongaise immersive du groupe Panda Panda à Montparnasse. Dans un décor haché inspiré du Hong Kong des années 60 (façon In the Mood for Love), on y déguste une cuisine chinoise traditionnelle faite maison, généreuse et vibrante.",
  insider_tip: "• **Timing Stratégique** : Arrivez très tôt, la file d’attente s'allonge vite sur le boulevard.\n• **Combo Moelle** : Les Biang Biang Bœuf sont la signature, à commander sans hésiter.\n• **Expérience Culturelle** : Admirez le travail des chefs qui tirent les pâtes en direct derrière le comptoir.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Softs", "Thé"],
    must_eat: "Cuisine chinoise. Biang Biang Noodles Boeuf",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mr-chow-paris-14/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine chinoise. Biang Biang Noodles Boeuf",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default mr_chow;
