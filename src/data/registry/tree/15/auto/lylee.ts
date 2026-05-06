import { SurgicalPlace } from "../../../type-definition";

export const lylee: SurgicalPlace = {
  id: "poi-lylee",
  slug: "lylee",
  name: "Lylee",
  category: "restaurant",
  subcategory: ['français', 'asiatique'],
  location: {
    address: "24 Rue de Beaugrenelle, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8478289,
    lng: 2.2846721,
    nearest_metro: "Charles Michels",
    metro_lines: [10],
    google_id: "ChIJr0et6O9x5kcR8BtpUPM1FGE"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Monday: Closed | Tuesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Wednesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Thursday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Friday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Saturday: 7:00 – 11:00 PM | Sunday: 12:00 – 3:00 PM, 7:00 – 11:00 PM",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lylee.paris/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 22,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Nems au Poulet (x3)", price_cents: 650 },
          { name: "Nems aux Crevettes (x3)", price_cents: 750 },
          { name: "Rouleaux de Printemps Crevettes & Nori", price_cents: 850, is_highlight: true },
          { name: "Gyoza Grillés Poulet & Ciboule (x5)", price_cents: 800 },
          { name: "Salade de Bœuf Laotienne", price_cents: 850, description: "Menthe, coriandre, riz torréfié et citronnelle" },
          { name: "Salade de Papaye Som Tum", price_cents: 900 },
          { name: "Assortiment d’Entrées à Partager", price_cents: 1450 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Bo Bun Bœuf & Citronnelle", price_cents: 1500, description: "Vermicelles de riz, crudités et nems maison", is_highlight: true },
          { name: "Bo Bun Poulet Croustillant", price_cents: 1400 },
          { name: "Bo Bun Crevettes Impérial", price_cents: 1700, is_highlight: true },
          { name: "Bo Bun Tofu Frit Végétarien", price_cents: 1400 },
          { name: "Curry Vert au Lait de Coco Poulet", price_cents: 1600 },
          { name: "Curry Vert Crevettes & Basilic", price_cents: 1800 },
          { name: "Lok Lak (Dés de Bœuf Marinés)", price_cents: 1600, description: "Riz sauté à la tomate et œuf au plat" },
          { name: "Pat Ka Phao (Porc au Basilic Thaï)", price_cents: 1450 },
          { name: "Pad Thaï Traditionnel Crevettes", price_cents: 1650 },
          { name: "Wok de Poulet aux Noix de Cajou", price_cents: 1550 }
        ]
      },
      {
        category_type: "other",
        display_label: "Accompagnements",
        items: [
          { name: "Bol de Riz Parfumé au Jasmin", price_cents: 350 },
          { name: "Riz Sauté à l’Ananas", price_cents: 550 },
          { name: "Légumes de Saison Sautés au Wok", price_cents: 600 },
          { name: "Sauce Pimentée Chef Lylee", price_cents: 100 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Jus de Lychee Frais", price_cents: 400 },
          { name: "Bière Singha (33cl)", price_cents: 550 },
          { name: "Bière Chang (33cl)", price_cents: 550 },
          { name: "Thé Glacé Maison à la Menthe", price_cents: 450 },
          { name: "Eau Minérale Evian (50cl)", price_cents: 400 },
          { name: "Sodas Classiques (Coke, Zero...)", price_cents: 350 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Perles de Tapioca Coco & Banane", price_cents: 600 },
          { name: "Mangue Fraîche & Riz Gluant Coco", price_cents: 900, is_highlight: true },
          { name: "Mochi Glacé (L’unité)", price_cents: 350 }
        ]
      }
    ]
  },
  description: `Lylee est la halte préférée des amateurs de saveurs asiatiques autour de Beaugrenelle. Ce restaurant à la décoration soignée propose une cuisine fusion qui navigue avec justesse entre le Vietnam et la Thaïlande. Les plats sont préparés à la minute, garantissant une fraîcheur et un croquant qui font la réputation du lieu. C’est l’adresse idéale pour un déjeuner sain ou un dîner détente après une séance de shopping, portée par une équipe souriante et des recettes qui respectent les équilibres traditionnels.`,
  insider_tip: `• **Timing Stratégique** : Le restaurant est très calme le dimanche midi, c’est le moment idéal pour une immersion zen loin de l’agitation commerciale.
  • **Combo Moelle** : Leur Bo Bun est l’un des plus complets du quartier, n’hésitez pas à demander le piment maison à part pour ajuster le feu à votre goût.
  • **Expérience Culturelle** : Le dressage des plats est particulièrement soigné, reflétant un sens de l’esthétique typiquement sud-est asiatique.`,
  specials: {
    cuisine: ["Français"],
    drinks: ["Bière Thaï Singha", "Thé à la Menthe Fraîche"],
    must_eat: "Cuisine Sud-Est Asiatique. Bo Bun impérial & Curry Vert au lait de coco.",
    expert_catchline: "La pépite Beaugrenelle pour un voyage express entre Bangkok et Hanoï.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lylee/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Sud-Est Asiatique. Bo Bun impérial & Curry Vert au lait de coco.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default lylee;
