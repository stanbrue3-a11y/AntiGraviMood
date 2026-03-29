import { SurgicalPlace } from "../../../type-definition";

export const l_os_a_moelle: SurgicalPlace = {
  id: "poi-l-os-a-moelle",
  slug: "l-os-a-moelle",
  name: "L’Os à moelle",
  category: "restaurant",
  subcategory: ["bistrot", "traditionnel", "français", "viande"],
  location: {
    address: "3 Rue Vasco de Gama, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8380908,
    lng: 2.2817284,
    nearest_metro: "Balard",
    metro_lines: ["8"],
    google_id: "ChIJBz2epQxw5kcR3mq65dpD9OM"
  },
  moods: {
    chill: 60,
    festif: 30,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:00 – 22:00 | mercredi: 12:00 – 14:00, 19:00 – 22:00 | jeudi: 12:00 – 14:00, 19:00 – 22:00 | vendredi: 12:00 – 14:00, 19:00 – 22:00 | samedi: 19:00 – 22:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.instagram.com/losamoelle.restaurant?igsh=MXJ6NWN2bmlobWZpZw%3D%3D&utm_source=qr",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Nos Entrées",
        items: [
          { name: "Le fameux Os à Moelle", price_cents: 1200, description: "Rôti à la fleur de sel de Guérande, pain grillé", is_highlight: true },
          { name: "Terrine de Campagne Maison", price_cents: 900, description: "Cornichons et confiture d'oignons" },
          { name: "Poireaux Vinaigrette Revisités", price_cents: 800, description: "Œuf mollet, croûtons dorés" },
          { name: "Foie Gras de Canard Mi-Cuit", price_cents: 1600, description: "Chutney de saison, brioche toastée", is_highlight: true },
          { name: "Gaspacho Andalou", price_cents: 800, description: "Légumes d'été frais et croquants" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats de Résistance",
        items: [
          { name: "Caille Rôtie", price_cents: 2400, description: "Jus corsé, purée de pommes de terre", is_highlight: true },
          { name: "Pièce de Bœuf (selon arrivage)", price_cents: 2800, description: "Frites maison et sauce au poivre" },
          { name: "Ris de Veau Croustillants", price_cents: 3200, description: "Poêlée de champignons de saison", is_highlight: true },
          { name: "Cabillaud Nacré", price_cents: 2500, description: "Légumes primeurs, beurre blanc" },
          { name: "Tartare de Bœuf Tradition", price_cents: 1900, description: "Préparé au couteau, frites" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts Douceur",
        items: [
          { name: "Gros Baba au Rhum", price_cents: 1000, description: "Crème montée à la vanille, rhum arrangé", is_highlight: true },
          { name: "Mousse au Chocolat Noir", price_cents: 800, description: "Éclats de noisettes torréfiées" },
          { name: "Crème Brûlée", price_cents: 800, description: "Vanille de Madagascar" },
          { name: "Trio de Fromages Affinés", price_cents: 1100, description: "Sélection du fromager, pain aux noix" }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Les Formules",
        items: [
          { name: "Le Menu Dégustation", price_cents: 4500, description: "Le grand voyage en 6 services selon l'humeur du Chef", is_highlight: true },
          { name: "Formule Midi (Semaine)", price_cents: 2400, description: "Entrée + Plat ou Plat + Dessert" }
        ]
      },
      {
        category_type: "drink",
        display_label: "Pour la Soif",
        items: [
          { name: "Verre de Vin Blanc (Chardonnay)", price_cents: 600 },
          { name: "Verre de Vin Rouge (Brouilly)", price_cents: 650 },
          { name: "Bières Pression", price_cents: 450 },
          { name: "Café Espresso", price_cents: 250 }
        ]
      }
    ]
  },
  description: `Institution incontournable du 15ème arrondissement, L'Os à Moelle est le fleuron de la bistronomie de quartier imaginé par le chef Thierry Faucher. L'ambiance y est chaleureuse au milieu des grandes tablées et des murs patinés. On y célèbre le véritable terroir français, sans chichi mais avec une justesse technique irréprochable, avec en vedette des plats mythiques de viande et d'abats mijotés.`,
  expert_catchline: `Cantonade bistronomique. Le temple de l'os à moelle et des grands classiques français.`,
  insider_tip: `• **L'Anexe d'en face** : S'il n'y a plus de place, traversez la rue pour découvrir "La Cave de l'Os à Moelle", qui propose une formule buffet exceptionnelle et sans fioritures dans les mêmes cuisines.
  • **Le Must-Eat** : Évidemment, l'énorme Os à Moelle rôti à la fleur de sel avec ses tranches de pain toastées.
  • **Le Secret** : Le Menu Dégustation à 45€ (en 6 plats) est l'un des rapports qualité/prix les plus généreux de la rive gauche pour un tel niveau de cuisine.`,
  specials: {
    cuisine: ["Français", "Traditionnel", "Bistrot", "Viande"],
    drinks: ["Belle sélection de vins de vignerons indépendants"],
    must_eat: "Cuisine bistronomique. Un magistral os à moelle rôti et son gros baba au rhum."
  },
  images: {
    hero: "AU_ZVEHdKwtbNY8659DC7zCJgT8SFQ-Nap40lAoqFPwcdWcgXKnIO8QIWgKU8hZu7s6WLwRdiMUmf6VVYXAgmUzxYjkT9N-tm7tOA5f60GIcJZPGNckHLCZfWZXo8Xjib37YarPiiigYXJ0BLZaN1TstgzZwWLuvllBufEBthodXdMVQLBzdsYfS7ryhk6Tm2grlbVt3gyScJ4TTEeEp_9t8lFT8cgE6oYIFRmNmS0Iq_VuMJkuNvjCx0apyvGVbwlxf4mC1Dm9BkJjcW05oLEZkbQ1-fbhEGgE5eHV4DzX1f37-PA",
    gallery: [
      "AU_ZVEEcGpHrFf_sEsN0GySZzbE4IhzDz7Lla9Ve_v5JJx2SvZTOfoBRsHke6PYnqQ8f5Y2R_B2Sw8tU1ppkKqpWGYvNhHUueGk6lY5CuPgfv-UySmaSihyqpp1Zzw9syLHRgut81SW55AP6MF3_nehEC6511eKEcKeY02sR5MUXCyrS8xgUX1iiRJ-7NW8Kt4Qz08lWJtRi_RJhDbE6yQZBlrwlB0ZC4jfE8dvzTvKBo6LVb4Il4SPS6PzJVEWZOiJbhIOeAeHB9g36jC4jL5m1h_6IRxbMOr5evJBkAu12jX-95A",
      "AU_ZVEHhrpQ9yU8Qk-JaOotP_chII9316uvuu_0qRPO3r1XIKHVKWHrkGZ208Tf1DaxXxc41NYFXWzOB3XhP-6SRSntonRNpgdZtlkLM3eHUHx4m27Pc3V4_9gflsvF1pYi1wOE4esZ5TNB_RVgzhadWEmkq-2r1onPHmJbePAa2p-j0BR5OeupvghHv3qpXCfpio847bEOV3-pEEsWJL3f5ojnW_rAVKojzgRBxp7t6kmad90Djx-_fxHWptpnbQ_9Py0MjxUqtoRT8IJpmOV0Nw3otVqO8rRQ-LBL-OIuZXnuKkdX5dcPCvklYFD9oYr2IS7vDCegX3_g-oukPHbzDGlU_k74Zjb7LwwPA5qf7D4SGYlAUWRJvNGwN6MRfZ4kPp9IkOM0BICJRCV6xz2HrlczGSKoA8Cw1n1Ik7hnnIzdm4A"
    ]
  },
  verified: true,
  google_rating: 4.5,
  real_talk: {
    text: `Un monument pour les viandards et les amateurs de la bistronomie de Thierry Faucher. Convivialité XXL garantie avec des plats aussi généreux d'esprit que d'assiette.`,
    must_eat: `Cuisine de bistrot. Leur légendaire Os à Moelle au sel de Guérande, immanquable.`,
    le_secret: `La formule déjeuner en semaine donne un super aperçu de cette maîtrise classique.`,
    le_son: `Le brouhaha joyeux typique des bons bistrots vitaux.`,
    le_must: `Prendre le menu en 6 temps, s'asseoir et se laisser dicter le repas par le patron.`
  }
};

export default l_os_a_moelle;
