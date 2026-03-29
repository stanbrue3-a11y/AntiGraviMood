import { SurgicalPlace } from "../../../type-definition";

export const la_dame_de_pic: SurgicalPlace = {
  id: "poi-la-dame-de-pic",
  slug: "la-dame-de-pic",
  name: "La Dame de Pic",
  category: "restaurant",
  subcategory: ["gastronomique", "étoilé", "michelin", "louvre", "français", "moderne", "anne-sophie-pic"],
  location: {
    address: "20 Rue du Louvre, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.8614756,
    lng: 2.3413145,
    nearest_metro: "Louvre - Rivoli",
    metro_lines: [1, 7],
    google_id: "ChIJaWy42CNu5kcRSLqIejQtI7s"
  },
  moods: {
    chill: 40,
    festif: 10,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: Fermé | jeudi: 12:00–13:30, 19:00–21:00 | vendredi: 12:00–13:30, 19:00–21:00 | samedi: 12:00–13:30, 19:00–21:00 | dimanche: 12:00–13:30, 19:00–21:00",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.anne-sophie-pic.com/restaurants/la-dame-de-pic-paris/",
      label: "RÉSERVER"
    }
  },
  michelin_stars: 1,
  pricing: {
    avg_budget: 180,
    is_free: false,
    last_updated: "2026-03-23",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Les Berlingots iconiques (Soba et café)", price_cents: 4500, description: "Cœur coulant au Brillat-Savarin" },
          { name: "Betterave plurielle (Longuemare)", price_cents: 3200, description: "Infusée au café et poivron" },
          { name: "Huître Marennes d'Oléron fumée", price_cents: 3800, description: "Bois de cerisier et mélisse" },
          { name: "Tourteau de casier au géranium", price_cents: 4200, description: "Petits pois et fraises vertes" },
          { name: "Caviar Baeri et glace plancton", price_cents: 6500 },
          { name: "Soupe de l'Himalaya aux lentilles", price_cents: 2800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Pigeon de la Drôme fumé au café", price_cents: 6200, description: "Accompagné de petits pois" },
          { name: "Lotte de petits bateaux (Tasmanie)", price_cents: 5800, description: "Poivre et asperges blanches" },
          { name: "Wagyu Japonais A5 (Supplément)", price_cents: 5000 },
          { name: "Sériole de ligne à la bergamote", price_cents: 5400 },
          { name: "Saint-Jacques de la Baie de Seine", price_cents: 5600 },
          { name: "Ris de veau croustillant au combawa", price_cents: 6400 },
          { name: "Bar de ligne au poivre blanc", price_cents: 6000 },
          { name: "Volaille de Bresse à la truffe", price_cents: 6800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Millefeuille Blanc au poivre Cubèbe", price_cents: 2400, description: "La signature d'Anne-Sophie Pic" },
          { name: "Chocolat de la Drôme et genévrier", price_cents: 2200 },
          { name: "Rhubarbe et Mélisse en textures", price_cents: 2000 },
          { name: "Fraise Gariguette et Shiso", price_cents: 2200 },
          { name: "Miel de forêt et glace onctueuse", price_cents: 1800 },
          { name: "Café gourmand (5 mignardises)", price_cents: 2500 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Accord Mets & Vins (Séquence Plaisir)", price_cents: 9500 },
          { name: "Accord Mets & Boissons sans alcool", price_cents: 7500 },
          { name: "Coupe de Champagne ASP", price_cents: 2800 },
          { name: "Sélection de Thés Rares", price_cents: 1200 }
        ]
      }
    ]
  },
  description: "À quelques pas du Louvre, La Dame de Pic est l'ambassade parisienne de la cheffe Anne-Sophie Pic. Dans un cadre poudré et épuré, elle déploie une cuisine d'une sensibilité rare, jouant sur l'imprégnation et les arômes complexes. Chaque plat est une dentelle de saveurs, souvent sublimée par des accords parfumés inédits. Une expérience gastronomique d'une élégance absolue, étoilée au guide Michelin.",
  insider_tip: "• Pensez à réserver plusieurs semaines à l'avance pour le dîner, le lieu est très convoité.\\n• Le Millefeuille Blanc est un passage obligé, c'est l'un des desserts les plus sophistiqués de Paris.\\n• La cheffe déménagera à la Fondation Cartier en 2026, profitez de l'écrin historique de la rue du Louvre tant qu'il en est temps.",
  specials: {
    cuisine: ["Gastronomique", "Moderne", "Française"],
    drinks: ["Vins d'exception", "Accords sans alcool"],
    must_eat: "Gastronomie moderne. Berlingots & Millefeuille Blanc",
  },
  images: {
    hero: "AU_ZVEFgxxZF1hGgOfEbxMXD_zl_YIeLtBXw6Y6ZbIhzKXfTGJ9k2l7kyzS9jIiNQMGmLNn08tzVANxwaPu6NDecw-cp6TEZ3r9qAnPVNeCl_dWrhT9_NAl68kFrIso4J42c5p9omzar5qhBCCtV7yHUJlp3zHDLCFG-dXvTzgzuQkVtYrhzbA58uyjyGryt6sEmZtcyp1nNLT6nsmAVNct_mK9PckN6wQupqCGHQYxgbcywATiSpsKnBopN574MFckmErUc5hNBkvMInVyR1Vh9r_61Ecj2CGkWt4x3znRN7onfxg",
    gallery: [
      "AU_ZVEGuUguA_7wA-qywtCVfx5YVVmpRuDFdR1QqQnqoC1VOGKl_K8ztFKKfu_e5UlXh6WAzOqUIeJqQbXosEBcWQhXwj-FSyC4aQOev5gD2cvhValv-E2HKzIW8eBvVUJz4CbAILxr6EshhUPiRyzE1jIYrg46Ofl-b-N0G61IaXMvDe4gTHybS9qszy77VAhCej6LT7msUgDqitmVNKuwi9S4UEzKQ9hI_XaqzEFy49G2Ev_QxY5xroROIv-Sr6I81VQtjFSdbvNzAEBmakVWLf-HyPI1Sr33tNJwlN1ypLjnCpQ",
      "AU_ZVEGipnbCLL61PGFxKYENy2DKP4We7kDLAHMsh-X9BjnCA0J9oiHibkwBwWu0guaccr0lWecKFh1wQ3qovXSO6wQG6tUAYv8J9oWjScEPRNMymMO2uSmjlpbVL7gDjU5do7KxWw8sISDyqs79545HQqIE2v8vKs5D-idw16lDZRCIeVMVMUCEK5PwU9u2A6hve58ZeXwihLICE35qevWWyw4eJ9fc_NUMrGoeKrn6kPwlHQpcfEhrh4UmsB5L_DMnDh1w7NZSvS8XU-4EUYTEaqg9ugNzbopX5m_1mfmiJAf0XQ2Ne2iMe3GS2Zjd5Zf86hjNkOJOAIHZBURz5RmrkFPgeeW0RD_Io1WLbwICB4epOzcNuOO0oHoHOKDY0gYQ6tR2L7cxjp8KewmouM3Psdj044eV4ayLh3N22aCuJHj8CSa4h3CnORyi36NfJg"
    ]
  },
  verified: true,
  google_rating: 4.6
};

export default la_dame_de_pic;
