import { SurgicalPlace } from "../../../type-definition";

export const zhao_menilmontant: SurgicalPlace = {
  id: "poi-zhao-menilmontant",
  slug: "la-taverne-de-zhao-menilmontant",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "quartier"],
  location: {
    address: "42 rue de Ménilmontant, 75020 Paris, France",
    arrondissement: 20,
    lat: 48.8679487, 
    lng: 2.3870272,
    nearest_metro: "Ménilmontant",
    metro_lines: [2],
    google_id: "ChIJcym0MbBt5kcRw7JmOhJfHek"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/menilmontant/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Entrées & Raviolis (Jiaozi)",
        items: [
          { name: "Salade de Tofu frité", price: "4.80€" },
          { name: "Algues marinées au sésame", price: "4.50€" },
          { name: "Pommes de terre à la vinaigrette de Xi'an", price: "4.20€" },
          { name: "Oreilles de porc pimentées", price: "5.50€" },
          { name: "Concombre frappé à l'ail", price: "4.50€" },
          { name: "Raviolis Porc & Chou (8 pièces)", price: "12.00€" },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price: "12.00€" },
          { name: "Raviolis Végétariens (8 pièces)", price: "11.50€" },
          { name: "Assiette dégustation (12 pièces)", price: "16.00€" }
        ]
      },
      {
        category: "Burgers Chinois (Mo's)",
        items: [
          { name: "Mo au Porc mijoté", price: "6.50€", description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price: "7.00€" },
          { name: "Mo au Canard laqué", price: "7.50€" },
          { name: "Mo Végétarien", price: "6.00€" }
        ]
      },
      {
        category: "Plats de Résistance (Biang Biang)",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price: "12.80€", description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price: "11.50€" },
          { name: "Biang Biang Poulet croustillant", price: "13.00€" },
          { name: "Biang Biang Tomate & Œuf", price: "10.80€", description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price: "14.50€" }
        ]
      },
      {
        category: "Desserts & Boissons Maison",
        items: [
          { name: "Mochi glacé (2)", price: "4.50€" },
          { name: "Perles de coco", price: "4.80€" },
          { name: "Thé glacé maison au Jasmin", price: "4.00€" },
          { name: "Bière Tsingtao (33cl)", price: "4.50€" },
          { name: "Soda", price: "3.50€" },
          { name: "Eau minérale", price: "3.00€" }
        ]
      }
    ]
  },
  description: "Dernière-née du groupe, la Taverne Ménilmontant apporte les saveurs de Xi'an dans l'est parisien. Le décor y est particulièrement chaleureux, parfaitement intégré à l'esprit populaire et artistique du 20e arrondissement. On y retrouve l'excellence des Biang Biang tirées à la main.",
  insider_tip: "• Sa salle spacieuse en fait l'adresse la plus confortable du groupe pour les grandes tablées d'amis.\n• Ne ratez pas les raviolis Poulet & Champignon, la farce y est particulièrement savoureuse et juteuse.\n• C'est l'endroit idéal pour un déjeuner tardif le week-end, l'ambiance y est détendue et conviviale.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    drinks: ["Thé glacé maison", "Bière Tsingtao"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Mo Porc",
  },
  images: {
    hero: "AU_ZVEEY6APDVnf8dp7VVU3sJ-wbR8As70GNC-qtQn_2ov_L4jWKohPzMIVhCvELfHCS9XxyF9L_qNRLCBFf8T6hMre8WD5YoDiC-AB-JX6BoJTdQhcAYUymaBSiIeQ6jIQiRJfpB3vYoEZyUH-cpCI765FgfsvRA1ZIya6VzLMWpvX2buOUm0_i8eA0KyCSJiTEsaL8iiYl9RWDHHMQlyQDeL9iiFFrutMRJPuEnRTocNt-ig483Cv4ieAQRfLinjnIbFffJ88Tir3TysMK6q6afHj-4-IKs_tGGnl0F1BLHV4xuw",
    gallery: [
      "AU_ZVEHceT3BqQ_kJMnDMpTXKJUV8-O187HgHaoAOeGYUKJbQV7AYtFCq2aDsSKDu25CZOE4WRVvW9G58JseZOGkPPWdjtxCGpF6Y6iqX1b3mt11POkJo8biGYQ2B2pNxKv7ZxHpGfH5O-TmTRRKxiqlgqC2pNggJNwzbrX0xA1X3RLElJab6ibJhsIHcxrwRk9dGxZ5F2zZ6g_gidJ-1wxlFxySCM4yWkyu1WKebpI2PhJHGGsxpFulcnKqIz5-2tBWxxx2g1k2UOkTi2uvac1Lv9Qt5l6swL1raU8xNM1_cMOg7w",
      "AU_ZVEGLYdBbmyidL188hKX0xao0oC3vI8AB-hyAmpPwUAByeSo9nk-MfGTwZ8HNu-aP5OwULmbk2o4VfmKMiQljwMt_szLhHjwubz24kllQ71lXx9N9k-Ah-clffq7r6eG_Z2xkBUPYnJXLicVgOpKsbtrk51E7cZ4418xWSTf87_9zNYiGsnhgwdb5XxQDlNIuWhDt4Gw799clgHYOQDysTLf3lPrKygUMaLFq9Q7Bug83qckxlmQCdzDGia2CXneqspGmJnxtAPe1oX0nh-6yZnVvftM8Tb1OfzT2_T4C-b0jXjevZPCDUB-2Ge9F3nFIBWw79pNRmV9_UOjVAj1wG0kESitLaMzUEyPZt8qcAc7jYIJTBACjfJNyX4IA9xKNPyBs6MhFg6kMfRtA6Fm0hNWR762TDN_-w9rT1yE24-aU-AUmFZpuQYSwr3ddMLgJ"
    ]
  },
  verified: true,
  google_rating: 4.9
};

export default zhao_menilmontant;
