import { SurgicalPlace } from "../../../type-definition";

export const mr_chow: SurgicalPlace = {
  id: "poi-mr-chow",
  slug: "mr-chow-paris-14",
  name: "MR CHOW",
  category: "restaurant",
  subcategory: ["hongkongaise", "chinois", "cantonais", "noodles", "panda-panda"],
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
    wifi: true,
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
  description: "MR CHOW est l'escale hongkongaise immersive du groupe Panda Panda à Montparnasse. Dans un décor haché inspiré du Hong Kong des années 60 (façon In the Mood for Love), on y déguste une cuisine chinoise traditionnelle faite maison, généreuse et vibrante.",
  insider_tip: "• **Timing Stratégique** : Arrivez très tôt, la file d'attente s'allonge vite sur le boulevard.\n• **Combo Moelle** : Les Biang Biang Bœuf sont la signature, à commander sans hésiter.\n• **Expérience Culturelle** : Admirez le travail des chefs qui tirent les pâtes en direct derrière le comptoir.",
  specials: {
    cuisine: ["Chinoise", "Xi'an"],
    drinks: ["Softs", "Thé"],
    must_eat: "Cuisine chinoise. Biang Biang Noodles Boeuf",
  },
  images: {
    hero: "AU_ZVEFBT5BSQEVpzXkoywnuEJKePr0djCZelSHgl2MSp4ESI6zjprDUppYwvjGfr4MGPw_jT7LADFiY7zeRTAY0KLCA8zhFg1XgV46z_h6q9g7mGIkL-FWpFpy1a3DhE0PyapwvW1qjauvYh_DJO6llx2Hz_AKWVRoL5zttLUAMS8ym1PxGoWdy31CclVgGr8ZVobISOxRsNCKpZrkQZkI0conTP8Tu-E9z-sJnh_geMlWcn702qLEThEIIaQzHob1wcLwiq00i30BPIcoKtMzYEhQEopEaiLNtSWfPVyUUtbNEYw",
    gallery: [
       "AU_ZVEHwVzKgqnoFAsti5OH-7hu-9FxD8wxLGZWvYbXT56APpoNVPrLS7nRgHObYS6JpJC97t_xYSZkQOqBYedVxqRtDG-vKLz6c3-zDqNFBBNXz8kb-FeVae46Ic2ECpD6YQHmNpiSE2xwHzpSiyskohADAdb0VGV-JRPoHDudshYMTejdXQ0bRqL5ibQvCAUFkF26N6unDn2WHsoucqzf8CsTXq13S371-HWm4ITT1VoZGUwVQ0jxpRbIPcFAiorvT0CR1Qssqy-Ozo8FE-T5_53NHLw24A1ayEbRctHQvu2KE2Q",
       "AU_ZVEFBR-K2GWRyTfYhZ5Jud1L4NSq3Rg7db_ySDY4E1pLddWmXnBYzCPdkwNNCU-JAUtfLWKRyv3YHnoTRFoBKWquG5OYQQrrwb51bRBzNNqQ8G1j1BRgpJpa-bO1Nh-S7rU2JqHgvA6N_uKh8sFXQnzFvdABg-T1k2cKHgaFnBlXGbID56TFFaGMGutrGUwM6V2Dw_dXDj0v3XZUYH0VY0am4kDqD8X3TCpwsl4BGCcnmemd9GOWlJ6DHrTqhM0HHS-6WmUoFzmSgMUbEhW2y6AmhuC5E0EDc9bxKy-y7-qWpUAL8gWFTnDTjvrdthNM-Ob-4dPJoDPQTGxqLtjtnMms07q9iAVMkkGimJJ7nla7YGLx6Zjanf9RPaC7XHHJA4uOzmbP7E2frqo0QXwdCg0f6w7jbm57Hq9r-v5ViUaiiIx43Gcq_L08EG3mC5Q6r"
    ]
  },
  verified: true,
  google_rating: 4.7
};

export default mr_chow;
