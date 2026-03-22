import { SurgicalPlace } from "../../../type-definition";

export const la_taverne_de_zhao: SurgicalPlace = {
  id: "poi-la-taverne-de-zhao",
  slug: "la-taverne-de-zhao",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "xi-an", "nouilles", "street-food", "raviolis"],
  location: {
    address: "11 Rue Delambre, 75014 Paris, France",
    arrondissement: 14,
    lat: 48.8416463,
    lng: 2.3283367,
    nearest_metro: "Edgar Quinet / Vavin",
    metro_lines: [6, 4],
    google_id: "ChIJTxzcA9Nx5kcRJyR_2DjInGY"
  },
  moods: {
    chill: 85,
    festif: 20,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 22:30 | samedi: 12:00 – 22:30 | dimanche: 12:00 – 22:30",
    reservation_policy: "sans_resa",
    wifi: true,
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://zhaogroupe.com/",
      label: "SITE WEB"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Les Incontournables (Plats Mo - Sandwiches Xi'an)",
        items: [
          { name: "MO Traditionnel (Porc mijoté)", price: "7.50€", description: "Pain maison croustillant, viande fondante" },
          { name: "MO - JI (Poulet)", price: "8.50€" },
          { name: "MO Végé", price: "7.50€", description: "Tofu & légumes" }
        ]
      },
      {
        category: "Pâtes Fraîches (Plats Biang Biang & Handmade)",
        items: [
          { name: "Pâte Biangbiang Bœuf Braisé", price: "16.50€", description: "Larges nouilles tirées à la main" },
          { name: "Pâte Biangbiang Tomate & Œuf", price: "14.80€" },
          { name: "Pâte Biangbiang Mixte (Bœuf & Tomate)", price: "17.00€" },
          { name: "Nouilles Épinards au Porc Mijoté", price: "15.50€" },
          { name: "Nouilles Froides Liangpi", price: "12.00€", description: "Idéal en été" }
        ]
      },
      {
        category: "Raviolis (Plats Artisanaux)",
        items: [
          { name: "Raviolis Dorés Classiques (10pc)", price: "9.50€" },
          { name: "Raviolis à la Vapeur (10pc)", price: "8.50€" },
          { name: "Raviolis Végétariens Dorés", price: "9.50€" },
          { name: "Xiao Long Bao (4pc)", price: "6.80€" }
        ]
      },
      {
        category: "Entrées Froides (Sides)",
        items: [
          { name: "Platycodon (Racine croquante)", price: "6.80€" },
          { name: "Salade d'Algues", price: "6.50€" },
          { name: "Bœuf Pimenté", price: "7.80€" },
          { name: "Concombre Tapé à l'Ail", price: "6.50€" }
        ]
      },
      {
        category: "Spécialités (Plats de la Taverne)",
        items: [
          { name: "Zhao Fried Chicken", price: "8.50€" },
          { name: "Riz au Porc Mijoté", price: "13.50€" },
          { name: "Riz au Calamar Sauté", price: "14.50€" }
        ]
      },
      {
        category: "Desserts & Douceurs",
        items: [
          { name: "Riz Noir, Mangue & Lait de Coco", price: "7.00€" },
          { name: "Perles de Coco", price: "6.00€" }
        ]
      },
      {
        category: "Boissons Maison",
        items: [
          { name: "Sirop de Prune Maison", price: "5.50€" },
          { name: "Thé au Pamplemousse & Miel", price: "5.50€" },
          { name: "Bière Chinoise (Tsingtao)", price: "5.00€" },
          { name: "Thé Chrysanthème", price: "4.50€" }
        ]
      }
    ]
  },
  description: "La Taverne de Zhao est une escale vibrante dédiée à la gastronomie de Xi'an. Ici, l'art du Biang Biang (nouilles tirées à la main) et du Mo (pain traditionnel) est élevé au rang de religion. L'ambiance 'taverne' invite au partage dans un décor boisé et authentique, à deux pas de la tour Montparnasse.",
  insider_tip: "Ne passe pas à côté du MO traditionnel (le sandwich historique de Xi'an) pour accompagner tes nouilles. Si tu aimes les sensations fortes, les Biang Biang bœuf pimenté sont un must absolu. Le lieu ne prend pas de résa, comme son voisin Mr Chow, donc viens tôt !",
  specials: {
    cuisine: ["Xi'an", "Nouilles Biang Biang", "Street Food Chinoise"],
    drinks: ["Sirop de Prune", "Thés Chinois"],
    must_eat: "Biang Biang Noodles Bœuf Braisé",
  },
  images: {
    hero: "AU_ZVEHV_MriBbok-AK-kjlwkJ423Aoj66Y5LHouQQkduEN-I8e2RMN5LqrMKEdDMi_upTXfDBH7DACT-yn_QySATrKCfyjflDTXpHWfdcdfF-hcOewjf6A65xklzvz2FPKFvr_QaiJrCGBrfOvJfskZyugfRGPgDVeqIBEtCZTyxY9Q575cznpflI8UjkdZMa4gD7vKJCKPCgcDQ-AgeVEzqQQhYm3EmTLHH5zECJfp3cxn5BtepBNiT1ZOGFSH3TfrGLXYroTsohbYAYvSTWc3IbyVVf4peC5iL2qykaGEmgQ",
    gallery: [
      "AU_ZVEEzHCpcBa4xqeHkvmMHojElXhvQys_HqDl-qHHjuYYxoC0nY8y0WZqA2Zj9J0APa7eUKftCKt1yuQc42j0PJwkqyy1vpg3tcBC-KKXP91R0C8AsLzMLLvBNZ3VGyhRiOH_knwkLSRyecqfJa3iML81mVIv_mwK8VTJNnyBCVLV-VivsIy-YGRE-D3qgMYl67E6aC5s-VUMulORTV1ykARvC3yZ1DPNTfVIpYKongOkB5PJ5DoJfd9othdF7DfFZ6H7NIYHhgSteKNOwD7TBRqakQi9PETvLy-Y_d3gwuvc",
      "AU_ZVEEBjoRzMYQGowL9vpTrDVvmYdA2ZCpiagKPSlBqA_zExe3kA6HaoXfp4xfQwgTlVNmhuiKedxqFvgiWMuM9K7Xdubd9hje1uaBhIweJnOHnM1UuaI6oTDgbXkrsizK4-Rxy2HQvHgZvqQdFBofRXrDBcplqDCpRjNmmDGrROBX2Thadmzy4aPdJxn-6j8MMbrnmTc8qZONqCuOt65vy73B--yq3gmVBaqmKDQe1ln-_09MSr7dRTU-1zPJjnUOBrYuL6_RsHLOt3Djm_kY81uz83Thirb5rYTereVWtHeo4esJTgtMsyc2BlDbjiEVFu3hyVfN21Qwd4ROIOMHstK1al16H79Ir8gnOve-36TZ0th_7nkzY-CzBYzDvoK7RWub-RfvSLZUGERlhiBCs_kTKA5rpWq77DmgO7GtTdHK7MMCaYra816kpUuGSQcOj"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default la_taverne_de_zhao;
