import { SurgicalPlace } from "../../../type-definition";

export const monsieur_bleu: SurgicalPlace = {
  id: "poi-monsieur-bleu",
  slug: "monsieur-bleu",
  name: "Monsieur Bleu",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "Palais De Tokyo, 20 Av. de New York, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8643563,
    lng: 2.2968759,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJNWYQDudv5kcRj-kwX_6y0Sc"
  },
  moods: {
    chill: 50,
    festif: 75,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 02:00 | mardi: 12:00 – 14:30, 19:00 – 02:00 | mercredi: 12:00 – 14:30, 19:00 – 02:00 | jeudi: 12:00 – 14:30, 19:00 – 02:00 | vendredi: 12:00 – 14:30, 19:00 – 02:00 | samedi: 12:00 – 16:00, 19:00 – 03:00 | dimanche: 12:00 – 16:00, 19:00 – 02:00",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://monsieurbleu-restaurant.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 85,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Entrées Signature",
        items: [
          { name: "Rock Shrimps en Tempura", price: "21€", description: "Mayonnaise épicée et citron vert", highlight: true },
          { name: "Burrata des Pouilles", price: "25€", description: "Tomates anciennes et huile de basilic" },
          { name: "Saumon Mariné à l'Aneth", price: "24€", description: "Crème de raifort" },
          { name: "Escargots de Bourgogne (x6)", price: "18€", description: "Beurre persillé" },
          { name: "Salade de Lentilles & Œuf Poché", price: "19€" }
        ]
      },
      {
        category: "Les Beaux Plats",
        items: [
          { name: "Poulpe Grillé", price: "40€", description: "Purée de pois chiches et chorizo", highlight: true },
          { name: "Tagliatelle à la Truffe Noire", price: "45€", description: "Crème de parmesan 24 mois" },
          { name: "Ravioles de Langoustines", price: "42€", description: "Émulsion au foie gras et herbes fraîches" },
          { name: "Filet de Boeuf 'Simmental'", price: "48€", description: "Sauce au poivre et frites maison" },
          { name: "Bar de Ligne à la Vapeur", price: "38€", description: "Légumes croquants et sauce vierge" }
        ]
      },
      {
        category: "Douceurs & Desserts",
        items: [
          { name: "Mille-feuille Vanille & Caramel", price: "19€", description: "La signature sucrée", highlight: true },
          { name: "Fondant au Chocolat Noir", price: "16€", description: "Glace vanille Bourbon" },
          { name: "Pavlova aux Agrumes", price: "15€" },
          { name: "Plateau de Fromages de Saison", price: "18€" }
        ]
      },
      {
        category: "La Cave de Monsieur Bleu",
        items: [
          { name: "Cocktail 'Bleu de Paris'", price: "20€", description: "Gin, violette, citron" },
          { name: "Coupe de Champagne Moët & Chandon", price: "24€" },
          { name: "Bouteille de Chablis 'Jean-Marc Brocard'", price: "72€" },
          { name: "Eau Minérale (75cl)", price: "9€" },
          { name: "Expresso Pur Origine", price: "6€" }
        ]
      }
    ]
  },
  description: `Installé dans l'aile ouest du Palais de Tokyo, Monsieur Bleu est la brasserie chic par excellence. Conçue par Joseph Dirand, la salle impressionne par ses volumes monumentaux et son décor Art Déco revisité. Que ce soit sur sa magnifique terrasse face à la Tour Eiffel ou sous ses plafonds vertigineux, on y déguste une cuisine française classique et cosmopolite dans une ambiance vibrante et internationale.`,
  expert_catchline: `L'élégance Art Déco au pied du Palais de Tokyo.`,
  insider_tip: `• **La Terrasse** : L'une des plus belles de Paris en été, avec une vue directe sur la Dame de Fer.
  • **Le Brunch** : Le dimanche, le lieu se transforme en rendez-vous familial chic avec un DJ set discret.
  • **Côté Bar** : Les cocktails sont excellents, parfaits pour un afterwork avant une expo au Palais.`,
  specials: {
    cuisine: ["Brasserie Chic", "Français"],
    drinks: ["Cocktails Création", "Vins de Propriété"],
    must_eat: "Cuisine de Brasserie. Le Poulpe Grillé et sa purée de pois chiches.",
  },
  images: {
    hero: "AU_ZVEGPgu18nkHmqgsOt7pP1SJE1wkuniaZHRmzOC_ETc-OGvCYtLs8je1gqhIKiWrG0ZIHB3dv92nlx4bSWfpzNdBjaEditO-Htc6wqrZOY4H7gtm62Ku2GWdHQPZ_3TsNN_kqvUZNWi3ZUyfa4UiMsoL0S5xrt_rkaVEgYGUpXYOLNKN8xSWSCRX0ZBQNWzTviYS-yGyGo9-rP51wgD6rb-cJIZsxACAbhSmT_20kv2xNKOehAT5Vy0DFLZocd2tW4GSDLhwXRiIxiAEW48jsJAPCojpaDQ234sSWvyFUCnghbw",
    gallery: ["AU_ZVEEwtUwy82tJvgDRO8b9hAIZ3FD-cSzbYxlnplA8-ONjKCHOpILMCaGsWTQf20SWgfvZsmzYv4zEf0xJe311w6YDoAHdI6vN0sckGac0PRh2GdyM9AVJFe0oBo-BInY8Lt_i4J6VQKcrWUotRnQUt_qVOBTuLvt9ccfckE5_HQryGiVzcKRjbxdF4d5KBUpwrlaVoyhQbdfflUC5sSS_-y4_nTcIwoxa2QPZyPabucc0FpJ8ioqmyCxE3K7tiDLzhr5nHcBhyUFErhVJwoXdIJMONvTO2NeF7ZypL0tzxRCcDQ","AU_ZVEHs0Sem5YogrEhy_QAcrxjYkCtSLbWpuHT6ekI2PeGkL4JZl4tx-vKS_Ivpo4gqw7KcxIx3_S27kJI8rS47y7eRtZR-cYJLoVDQjNfnBSzVVKUl2-gPSSycx9Py8fbizzbnKFAw5YbxegFI6nryGexqqm62A2fFaZHj9P1J21l7TurMHnJgSyq59bmVidnYoSF_Y9F9FkuvyvYmpJGfNNL63fLbsgp6qTMtFOELUT-O0jmWmzgFtVjh0BI31w6U1104mWu3j0YXD4rfCYKwCBURZdBkMBI0pjGhCfv5tuU7aQ"]
  },
  verified: true,
  google_rating: 4,
  real_talk: {
    text: "Monsieur Bleu, c'est l'assurance d'un moment réussi si on aime le beau monde et les cadres spectaculaires. La nourriture est solide, les frites sont bonnes, et le service est rodé comme une horloge suisse. C'est bruyant, vivant et terriblement parisien.",
    must_eat: "Poulpe Grillé",
    le_secret: "La table d'angle en terrasse qui donne l'impression d'être seul face à la Tour Eiffel.",
    le_son: "Une playlist électro-chic qui monte en puissance au fil de la soirée.",
    le_must: "Prendre un verre au bar avant de s'attabler pour profiter de la hauteur sous plafond."
  }
};

export default monsieur_bleu;
