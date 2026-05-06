import { SurgicalPlace } from "../../../type-definition";

export const hanoi_quan: SurgicalPlace = {
  id: "poi-hanoi-quan",
  slug: "hanoi-quan-montparnasse",
  name: "Hanoi Quan",
  category: "restaurant",
  subcategory: ['vietnamien'],
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
        category_type: "starter",
        display_label: "Entrées & Snacks (Khai Vị)",
        items: [
          { name: "Nems au Porc (x4)", price_cents: 650, description: "Croustillants et faits maison" },
          { name: "Nems au Poulet (x4)", price_cents: 650 },
          { name: "Rouleaux de Printemps (x2)", price_cents: 600, description: "Crevettes, porc, herbes fraîches" },
          { name: "Salade de Mangue fraîche", price_cents: 750, description: "Épicée et acidulée" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats (Món Chính)",
        items: [
          { name: "Phở Bœuf Ha Noi", price_cents: 1350, description: "Bouillon mijoté 12h, herbes" },
          { name: "Phở Poulet", price_cents: 1280 },
          { name: "Bo Bun Nem Porc & Bœuf", price_cents: 1450, description: "Le classique complet" },
          { name: "Bo Bun Nem Poulet", price_cents: 1450 },
          { name: "Bo Bun Nem Crevettes", price_cents: 1550 },
          { name: "Bo Bun Végétarien", price_cents: 1350 },
          { name: "Riz Bœuf à la citronnelle", price_cents: 1450, description: "Accompagné de salade mangue" },
          { name: "Riz Poulet grillé", price_cents: 1380 },
          { name: "Poké Bowl Saumon frais", price_cents: 1400 },
          { name: "Poké Bowl Poulet Teriyaki", price_cents: 1350 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Litchis au sirop", price_cents: 550 },
          { name: "Boules Coco (x2)", price_cents: 500, description: "Cœur haricot mungo" },
          { name: "Perles du Japon au lait de coco", price_cents: 600 }
        ]
      }
    ]
  },
  description: "Trônant sur la Place de Catalogne, Hanoi Quan est une escale vietnamienne authentique qui réchauffe le quartier Montparnasse. Son bouillon Phở, mijoté pendant des heures, et ses Bo Bun généreux en font une adresse incontournable pour les amateurs de saveurs du Mékong. L’ambiance y est décontractée, idéale pour un shoot de fraîcheur avant de prendre un train.",
  insider_tip: "• Les Phở sont servis ici dans leur version la plus traditionnelle : n’hésitez pas à demander du piment frais supplémentaire pour un kick authentique.\n• Pour une option plus légère mais tout aussi noble, le Poké Bowl Saumon avec sa base de riz vinaigré est extrêmement frais.\n• C’est l’un des rares Viet du quartier à fermer à Minuit tous les jours : idéal pour les arrivées tardives à la Gare Montparnasse.",
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Bubble Tea", "Bière Singha"],
    must_eat: "Cuisine vietnamienne. Phở Bœuf & Bo Bun Nem",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hanoi-quan-montparnasse/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine vietnamienne. Phở Bœuf & Bo Bun Nem",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default hanoi_quan;
