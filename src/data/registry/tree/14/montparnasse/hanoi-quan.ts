import { SurgicalPlace } from "../../../type-definition";

export const hanoi_quan: SurgicalPlace = {
  id: "poi-hanoi-quan",
  slug: "hanoi-quan-montparnasse",
  name: "Hanoi Quan",
  category: "restaurant",
  subcategory: ["vietnamien", "pho", "bo-bun", "cantine", "authentique"],
  location: {
    address: "2 Place de Catalogne, 75014 Paris, France",
    arrondissement: 14,
    lat: 48.8348427,
    lng: 2.319709,
    nearest_metro: "Gaîté - Joséphine Baker",
    metro_lines: [13],
    google_id: "ChIJNdSMoxNx5kcR0__fDCJMZqw"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 11:00 – 00:00 | mardi: 11:00 – 00:00 | mercredi: 11:00 – 00:00 | jeudi: 11:00 – 00:00 | vendredi: 11:00 – 00:00 | samedi: 11:00 – 00:00 | dimanche: 11:00 – 00:00",
    reservation_policy: "sans_resa",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://hanoiquan.fr/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Entrées & Snacks (Khai Vị)",
        items: [
          { name: "Nems au Porc (x4)", price: "6.50€", description: "Croustillants et faits maison" },
          { name: "Nems au Poulet (x4)", price: "6.50€" },
          { name: "Rouleaux de Printemps (x2)", price: "6.00€", description: "Crevettes, porc, herbes fraîches" },
          { name: "Salade de Mangue fraîche", price: "7.50€", description: "Épicée et acidulée" }
        ]
      },
      {
        category: "Les Plats (Món Chính)",
        items: [
          { name: "Phở Bœuf Ha Noi", price: "13.50€", description: "Bouillon mijoté 12h, herbes" },
          { name: "Phở Poulet", price: "12.80€" },
          { name: "Bo Bun Nem Porc & Bœuf", price: "14.50€", description: "Le classique complet" },
          { name: "Bo Bun Nem Poulet", price: "14.50€" },
          { name: "Bo Bun Nem Crevettes", price: "15.50€" },
          { name: "Bo Bun Végétarien", price: "13.50€" },
          { name: "Riz Bœuf à la citronnelle", price: "14.50€", description: "Accompagné de salade mangue" },
          { name: "Riz Poulet grillé", price: "13.80€" },
          { name: "Poké Bowl Saumon frais", price: "14.00€" },
          { name: "Poké Bowl Poulet Teriyaki", price: "13.50€" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Litchis au sirop", price: "5.50€" },
          { name: "Boules Coco (x2)", price: "5.00€", description: "Cœur haricot mungo" },
          { name: "Perles du Japon au lait de coco", price: "6.00€" }
        ]
      }
    ]
  },
  description: "Trônant sur la Place de Catalogne, Hanoi Quan est une escale vietnamienne authentique qui réchauffe le quartier Montparnasse. Son bouillon Phở, mijoté pendant des heures, et ses Bo Bun généreux en font une adresse incontournable pour les amateurs de saveurs du Mékong. L'ambiance y est décontractée, idéale pour un shoot de fraîcheur avant de prendre un train.",
  insider_tip: "• Les Phở sont servis ici dans leur version la plus traditionnelle : n'hésitez pas à demander du piment frais supplémentaire pour un kick authentique.\n• Pour une option plus légère mais tout aussi noble, le Poké Bowl Saumon avec sa base de riz vinaigré est extrêmement frais.\n• C'est l'un des rares Viet du quartier à fermer à Minuit tous les jours : idéal pour les arrivées tardives à la Gare Montparnasse.",
  specials: {
    cuisine: ["Vietnamienne", "Phở", "Bo Bun"],
    drinks: ["Bubble Tea", "Bière Singha"],
    must_eat: "Cuisine vietnamienne. Phở Bœuf & Bo Bun Nem",
  },
  images: {
    hero: "AU_ZVEGeF4exy3H3hWhOnzNwOexKcui_mfkRFxwVUpSZTLPvRDidifgIyoJcnLJm1UyjbEnuFGLbQTVXn6caP-3iS7osmbb4NaHNkyG4ZaAHP27f_ryAD8TB2J8wkcUuZv1GMY_b0yqAk7fE2NlIvrz4PTVdnf__T3EnEKxg0DhQcoKCpJ5cBMFx-LyjSjHOTg0bYyWjYxnGVpEx-yO4nQkC2Zjau-0YnwUJYtLQxmFTGf7UTFkTRoCE1Z_MnyWY3cZVXYnsgrg88lwfDOt31OMG5EEKx3me0AhJcLaYTtU1DX2ycGqYJKQNuc_RpJOlf2Ktt9cyUUeElMMuof0hpzAjn6al9A-1RF3hFXLVuPQuqewwBb__fesOYStwLKd9BuZM1_OMezirQ9pbXtdLBJAwzVTSTw1gKgxrnU0GIwVZDrk_-SRX85prY9g1bm48ozv8",
    gallery: [
      "AU_ZVEGJo78fC583VNug8-mj1Ijjm7rHfct5NZkO59RKJAg9FtTieDML78mYJ3ggke1Ya2qOJhXSGfq4hHn4dxn9_GnOeQGkoe6TR9b61QsyvwKVIlY7Cio4RqnkUCAfr_zx1Q_NtNMXivZETjJ8KHY7CfX9o07DsuxPgpRN9a_dddFUnzt6INwg9LsaEm8MD-S6LLoRMHILFkf9PrK8zcK90IkZTmZFFba7eT-naCCduR-_lg6lfadJTN1Er6EDr76NypbNLjwgkLnsB0wJTvy5NnUIV6ZVN0Z1haWCcjBkZk-svA",
      "AU_ZVEGrQ3b3IVo9HwLiPDdWCWTv7TY01iV4nylFDWvBmxBUwTJ3ir1DUjIQadxjyoSEvQ_aA6v_brcYpy9nyBbGCYMbRckqkR-cKD8bSGdtum90rPkjBJmwcjNuR6WyHX02Nq2W_8mTZ-eYueiWlIWi53YvecVxhf26ePatw2D_qRqgi9l_-c23vgfOTu8BghkVuZo43jpE47TlOXZSu8uJ3xZ5KksrSpEKCBY5kdx5BeIx-TKs6t5p-QYeqo-wAdV2ZHFjvkjtfTNenM-7mEzDTd4y8AYIflq631zfJvYlhPI8yaWdXWgXBwvT1P7ID0MypRE7vPIf3UDG-_a703lhPetQKnMTD1W_VH8-m23Ql21SNUz--qS5JyWQ_9khiH1fAIpJr2joYdBLCrlHIfruZaXtJG7amhftpgvAkWK4SyFWTkcXhR13exhyFPGeXg"
    ]
  },
  verified: true,
  google_rating: 4.7
};

export default hanoi_quan;
