import { SurgicalPlace } from "../../../type-definition";

export const kodawari_ramen_tsukiji: SurgicalPlace = {
  id: "poi-kodawari-ramen-tsukiji",
  slug: "kodawari-ramen-tsukiji",
  name: "Kodawari Ramen (Tsukiji)",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "12 Rue de Richelieu, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.8643421,
    lng: 2.3362452,
    nearest_metro: "Palais Royal - Musée du Louvre",
    metro_lines: [1, 7],
    google_id: "ChIJme1o5vVv5kcRzuT1Uxyk-Rc"
  },
  moods: {
    chill: 40,
    festif: 80,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 11:45 – 23:00 | mardi: 11:45 – 23:00 | mercredi: 11:45 – 23:00 | jeudi: 11:45 – 23:00 | vendredi: 11:45 – 23:00 | samedi: 11:45 – 23:00 | dimanche: 11:45 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.kodawari-ramen.com/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 22,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées de la Criée",
        items: [
          { name: "Namero de féra du Lac Léman", price_cents: 950, description: "Haché de poisson frais, miso, gingembre" },
          { name: "Gyoza Kodawari de la mer (x5)", price_cents: 900 },
          { name: "Edamame au sel de mer d’Okinawa", price_cents: 550 },
          { name: "Sashimi de Dorade Royale", price_cents: 1200 },
          { name: "Crabe en mue croustillant", price_cents: 1150 }
        ]
      },
      {
        category_type: "other",
        display_label: "Ramen Signature (Bouillons de Mer)",
        items: [
          { name: "Paitan de Dorade Royale", price_cents: 1650, description: "Bouillon épais et crémeux de dorade, chashu de poulet" },
          { name: "Shio de Dorade Royale", price_cents: 1550, description: "Bouillon clair, finesse marine" },
          { name: "Sardine Bomb (Niboshi)", price_cents: 1800, description: "Bouillon intense à la sardine de Bretagne" },
          { name: "Ramen de Homard (Spécial)", price_cents: 2400 },
          { name: "Abura Soba de la mer (sans bouillon)", price_cents: 1700 },
          { name: "Ramen Végétalien aux algues", price_cents: 1500 }
        ]
      },
      {
        category_type: "other",
        display_label: "Suppléments & Toppings",
        items: [
          { name: "Extra Ajitama (Œuf mollet mariné)", price_cents: 250 },
          { name: "Extra Chashu de porc Label Rouge", price_cents: 400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Marine & Japonaises",
        items: [
          { name: "Taiyaki au haricot rouge Azuki", price_cents: 750, description: "Gaufre en forme de poisson, un classique" },
          { name: "Cheesecake au Thé Vert Matcha & Framboise", price_cents: 850 },
          { name: "Daifuku du moment (Mochi artisanal)", price_cents: 600 },
          { name: "Gelée de Yuzu rafraîchissante", price_cents: 650 },
          { name: "Crème brûlée au Sésame Noir", price_cents: 800 },
          { name: "Taiyaki Glacé (Vanille / Matcha)", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Franchir la porte du Kodawari Tsukiji, c’est quitter Paris pour se retrouver en plein cœur de l’ancien marché aux poissons de Tokyo. Entre les étals de faux poissons criants de vérité, la fumée des bouillons et les bruits de la criée, l’immersion est totale. On y déguste des ramen d'une finesse rare, basés sur des bouillons de mer complexes, loin des classiques porc/poulet. Une expérience sensorielle unique à Paris.",
  insider_tip: "• Pas de réservation possible : arrivez 15-20 min avant l’ouverture de 11h45 ou préparez-vous à faire la queue (qui avance vite).\n• Le ’Sardine Bomb’ est réservé aux amateurs de saveurs iodées très intenses.\n• Le décor est tellement immersif qu'il vaut à lui seul le détour culturel (90/100).",
  specials: {
    cuisine: ["Japonais"],
    drinks: ["Bière japonaise", "Thé vert rare"],
    must_eat: "Cuisine japonaise. Ramen de la mer. Paitan de Dorade Royale & Taiyaki",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kodawari-ramen-tsukiji/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Ramen de la mer. Paitan de Dorade Royale & Taiyaki",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default kodawari_ramen_tsukiji;
