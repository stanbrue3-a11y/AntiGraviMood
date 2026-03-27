import { SurgicalPlace } from "../../../type-definition";

export const bambini: SurgicalPlace = {
  id: "poi-bambini-paris",
  slug: "bambini-paris",
  name: "Bambini Paris",
  category: "restaurant",
  subcategory: ["italien", "festif", "terrasse"],
  location: {
    address: "Palais De Tokyo, 13 Av. du Président Wilson, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8645866,
    lng: 2.2966748,
    nearest_metro: "Iéna",
    metro_lines: ["9"],
    google_id: "ChIJt9VeXGRv5kcRA7kQ-xGju00"
  },
  moods: {
    chill: 40,
    festif: 90,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 23:00 | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: 12:00 – 15:00, 19:00 – 23:00 | jeudi: 12:00 – 15:00, 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://bambini-restaurant.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 65,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Antipasti & Partage",
        items: [
          { name: "Arancini au Safran & Ragù", price: "14€", description: "Croustillants et fondants", highlight: true },
          { name: "Burrata Crémeuse (250g) & Focaccia", price: "24€" },
          { name: "Vitello Tonnato Classico", price: "19€" },
          { name: "Fritura Mista (Calmars & Crevettes)", price: "22€" },
          { name: "Polpette à la Tomate", price: "16€" }
        ]
      },
      {
        category: "Primi & Secondi",
        items: [
          { name: "Rigatoni à la Tomate de Sicile", price: "18€", description: "Basilic frais et pecorino" },
          { name: "Linguine à la Truffe d'Hiver", price: "34€", highlight: true },
          { name: "Escalope Milanaise Géante", price: "38€", description: "Pour les appétits de champions", highlight: true },
          { name: "Gnocchi alla Sorrentina", price: "21€" },
          { name: "Tagliata de Boeuf au Romarin", price: "39€" }
        ]
      },
      {
        category: "Pizzas Artisanales",
        items: [
          { name: "Pizza Margherita DOP", price: "16€" },
          { name: "Pizza Régine (Jambon, Champignons)", price: "19€" },
          { name: "Pizza Diavola (Salami Piquant)", price: "20€" },
          { name: "Pizza Tartufo (Truffe)", price: "28€" }
        ]
      },
      {
        category: "Dolci & Cocktails",
        items: [
          { name: "Tiramisu Classico XL", price: "12€", highlight: true },
          { name: "Bambini Spritz Signature", price: "16€" },
          { name: "Carafe de Chianti (50cl)", price: "24€" },
          { name: "Limoncello de Sorrente (Shot)", price: "8€" }
        ]
      }
    ]
  },
  description: `Bambini est le temple de la fête italienne au Palais de Tokyo. Avec sa décoration maximaliste, ses couleurs vibrantes et sa terrasse immense, c'est l'endroit idéal pour de grandes tablées d'amis. On y partage des assiettes généreuses de pasta, des pizzas croustillantes et des cocktails XXL dans une ambiance décontractée et ultra-vivante, rythmée par une playlist italienne enivrante.`,
  expert_catchline: `La Dolce Vita version XXL sur les terrasses du Palais de Tokyo.`,
  insider_tip: `• **Pour les Groupes** : C'est le spot parfait pour un anniversaire. Prenez les plats à partager (Antipasti et Escalope Milanaise) pour une expérience conviviale.
  • **Le Midi** : Profitez du menu déjeuner à 15.50€ (pizza slice/dessert/drink) pour une pause rapide et efficace.
  • **Cocktails Maison** : Leurs Spritz revisités sont excellents et servis dans des verres généreux.`,
  specials: {
    cuisine: ["Italienne Festive", "Pizzas"],
    drinks: ["Spritz Variés", "Vins Italiens"],
    must_eat: "Cuisine Italienne. L'Escalope Milanaise Géante pour le partage.",
  },
  images: {
    hero: "AU_ZVEF6sKEgXrk8pXk0my6r3dqsxnEeC_YYnCkSH-FXD-a0p2RpkVMxY5yaaPikn2trHdhImEtvA_foQyaZ0rqkZ8nDQKRF5BtCykY5gcPBtFBmw_8XRycQF6NfLNpLCbaN6lk83ZhJQ9SbO1lECp8H9IUCAtYpggdLOoB4IEhfzhJJNQiVSoSApcoEjKTT5_xcbHAMUF7gw0aJVQdLbekyi8-4j5R0S5jWuGzpt6OvJlU2_P9afkUPqVgF-p2JNtSByDKQ6lxEG6K5-9SM_IaNw501U2YPOAdlgBAN1r1V_7I",
    gallery: ["AU_ZVEGXUyAm5Ty3rv7bc1B3crPuv3bGREaE2cCSfH3Nh_TKom5FdWT-O7_9is8fSaKZ8xQ8KAHJ4SjZrZjSLxEbrQTW-azlxb0ILXQNCsKSEbPDcPPcx4dFHSCN3fF45ZhAAWa5cdjTDNaO3b1fxDUW3Smf74jFgyalOBSuBTpEEAVkRMQ2VApyTB7o4LW_UyBSzrFK9OO-_SyRiCapKHxxduXApYM1oW_zMD4X3aJotYRUGL9eaaw3P4YsbkebRuBFU6Z2r-OBobpe9CifJ9Klx0xsFl3Nw27WATCDpvRq8Os","AU_ZVEFMXVOENnRfb9d5_kpXZ4SxvNO_gi53ArMfmbGdI50L3jbqO7ztsu1PnN-_Iker6BjOhTZSIY0-8Hmn9Ye6htvBrWtj6T7myciR01gscL7FrkAkXqkAYeDbMGj6y0WbhmCw5X108Wgz4kj2X2u8xzS_5TA7i_UKA2IfwiLkmppZm-gAfho_mwk3is2lAHGgWvv9mZsO3-JAPQJ5ixUocvZ9slovfsr4FBv6oeSQGl0VoubRpyhyuFfZ_F307Otgt5pGIYrwfWtysonB7mJfnvS2xVQ-tRfvfXNDAOLdRjI"]
  },
  verified: true,
  google_rating: 3.7,
  real_talk: {
    text: "Bambini, c'est l'Italie pour s'amuser. Ne cherchez pas la gastronomie millimétrée, ici on veut du gras, du fromage et du bruit. C'est idéal pour attaquer la soirée entre potes avant de bouger. Les portions sont king-size.",
    must_eat: "Escalope Milanaise",
    le_secret: "La proximité directe avec le Musée d'Art Moderne pour un combo culture/pizza.",
    le_son: "Des classiques italiens et des remix disco-house.",
    le_must: "Une table en terrasse au premier rang."
  }
};

export default bambini;
