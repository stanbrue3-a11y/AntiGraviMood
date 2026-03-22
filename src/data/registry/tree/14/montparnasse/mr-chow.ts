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
        category: "Pour Commencer / À Partager",
        items: [
          { name: "Wontons pochés crevettes (x5)", price: "8.50€", description: "Juteux et parfumés" },
          { name: "Shrimp Toast", price: "13.50€", description: "Légendaire toast aux crevettes" },
          { name: "Popcorn Fried Chicken", price: "13.00€", description: "Poulet frit ultra crispy" },
          { name: "Smashed Cucumber sesame", price: "4.50€", description: "Concombre écrasé" },
          { name: "Aubergines Hong Shao", price: "12.50€", description: "Aubergines fondantes façon HK" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Biang Biang Noodles Boeuf", price: "14.50€", description: "Pâtes larges tirées main" },
          { name: "Creamy Dandan Noodles", price: "14.50€", description: "Sauce sésame & piment" },
          { name: "Biang Biang Noodles Agneau Confit", price: "15.50€", description: "Agneau ultra fondant" },
          { name: "Biang Biang Noodles Poulet", price: "14.00€", description: "Version poulet mariné" },
          { name: "Veggie Noodles Sesame", price: "13.50€", description: "100% végétal" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Cocktail Moon Palace", price: "12.00€", description: "Signé Panda Panda" },
          { name: "Bière Tsingtao", price: "5.50€", description: "Classique chinois" },
          { name: "Thé Glacé Maison", price: "4.50€" },
          { name: "Taiwanese Passion Fruit Drink", price: "4.00€" }
        ]
      }
    ]
  },
  description: "MR CHOW est l'escale hongkongaise immersive du groupe Panda Panda à Montparnasse. Dans un décor haché inspiré du Hong Kong des années 60 (façon In the Mood for Love), on y déguste une cuisine chinoise traditionnelle faite maison, généreuse et vibrante.",
  insider_tip: "Ne passe pas à côté des Biang Biang Noodles au Boeuf : c'est la spécialité qui a fait la réputation du lieu pour sa texture élastique parfaite. Tip : Le lieu possède une petite terrasse en été, hyper agréable sur la rue Delambre.",
  specials: {
    cuisine: ["Chinois", "Hongkongaise"],
    drinks: ["Cocktails", "Thé"],
    must_eat: "Biang Biang Noodles Boeuf",
  },
  images: {
    hero: "AU_ZVEFBT5BSQEVpzXkoywnuEJKePr0djCZelSHgl2MSp4ESI6zjprDUppYwvjGfr4MGPw_jT7LADFiY7zeRTAY0KLCA8zhFg1XgV46z_h6q9g7mGIkL-FWpFpy1a3DhE0PyapwvW1qjauvYh_DJO6llx2Hz_AKWVRoL5zttLUAMS8ym1PxGoWdy31CclVgGr8ZVobISOxRsNCKpZrkQZkI0conTP8Tu-E9z-sJnh_geMlWcn702qLEThEIIaQzHob1wcLwiq00i30BPIcoKtMzYEhQEopEaiLNtSWfPVyUUtbNEYw",
    gallery: [
       "AU_ZVEHwVzKgqnoFAsti5OH-7hu-9FxD8wxLGZWvYbXT56APpoNVPrLS7nRgHObYS6JpJC97t_xYSZkQOqBYedVxqRtDG-vKLz6c3-zDqNFBBNXz8kb-FeVae46Ic2ECpD6YQHmNpiSE2xwHzpSiyskohADAdb0VGV-JRPoHDudshYMTejdXQ0bRqL5ibQvCAUFkF26N6unDn2WHsoucqzf8CsTXq13S371-HWm4ITT1VoZGUwVQ0jxpRbIPcFAiorvT0CR1Qssqy-Ozo8FE-T5_53NHLw24A1ayEbRctHQvu2KE2Q",
       "AU_ZVEFBR-K2GWRyTfYhZ5Jud1L4NSq3Rg7db_ySDY4E1pLddWmXnBYzCPdkwNNCU-JAUtfLWKRyv3YHnoTRFoBKWquG5OYQQrrwb51bRBzNNqQ8G1j1BRgpJpa-bO1Nh-S7rU2JqHgvA6N_uKh8sFXQnzFvdABg-T1k2cKHgaFnBlXGbID56TFFaGMGutrGUwM6V1Dw_dXDj0v3XZUYH0VY0am4kDqD8X3TCpwsl4BGCcnmemd9GOWlJ6DHrTqhM0HHS-6WmUoFzmSgMUbEhW2y6AmhuC5E0EDc9bxKy-y7-qWpUAL8gWFTnDTjvrdthNM-Ob-4dPJoDPQTGxqLtjtnMms07q9iAVMkkGimJJ7nla7YGLx6Zjanf9RPaC7XHHJA4uOzmbP7E2frqo0QXwdCg0f6w7jbm57Hq9r-v5ViUaiiIx43Gcq_L08EG3mC5Q6r"
    ]
  },
  verified: true,
  google_rating: 4.7
};

export default mr_chow;
