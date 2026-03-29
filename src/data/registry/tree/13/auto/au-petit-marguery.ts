import { SurgicalPlace } from "../../../type-definition";

export const au_petit_marguery: SurgicalPlace = {
  id: "poi-au-petit-marguery",
  slug: "au-petit-marguery",
  name: "Au Petit Marguery",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "9 Bd de Port-Royal, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8367667,
    lng: 2.3498695,
    nearest_metro: "Les Gobelins",
    metro_lines: [7],
    google_id: "ChIJ3xjM2exx5kcReA5h7YhvMXY"
  },
  moods: {
    chill: 75,
    festif: 30,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://petitmarguery.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 35,
    dish_price: 23.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Menus & Formules : Plats Gastronomiques",
        items: [
          { name: "Menu Petit Marguery (E+P+D)", price_cents: 2900, is_highlight: true },
          { name: "Menu Bonne Conscience (E+P ou P+D)", price_cents: 2300 },
          { name: "iMenu Tout Inclus (Vin, Eau, Café)", price_cents: 4900, is_highlight: true },
          { name: "Menu Enfant (P+D+Boisson)", price_cents: 1700 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Traditions & Saisons",
        items: [
          { name: "Œuf mimosa à la Parisienne", price_cents: 900 },
          { name: "Velouté de champignons de saison", price_cents: 900 },
          { name: "Tartare de betterave & Stracciatella", price_cents: 900 },
          { name: "Terrine de campagne maison 'Marguery'", price_cents: 1000, is_highlight: true },
          { name: "Foie Gras de Canard Mi-cuit", price_cents: 1600 },
          { name: "Mille-feuille d'aubergines & Ricotta", price_cents: 900 },
          { name: "Croustillant de Pied de Porc", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Haute Tradition Bourgeoise",
        items: [
          { name: "Lièvre à la Royale (Recette Sénateur Couteaux)", price_cents: 3800, is_highlight: true },
          { name: "Bas Carré de Veau de l'Aveyron", price_cents: 1900 },
          { name: "Filet de Bar rôti, caviar d'aubergine", price_cents: 1900 },
          { name: "Ris de Veau Français dorés au sautoir", price_cents: 3600, is_highlight: true },
          { name: "Secreto de Porc Ibérique grillé", price_cents: 1900 },
          { name: "Tartare de Bœuf du Limousin au couteau", price_cents: 2300 },
          { name: "Coquillettes gourmandes (Jambon, Truffe)", price_cents: 1800 },
          { name: "Brandade de Morue à la Nîmoise", price_cents: 1950 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts : Les Incontournables",
        items: [
          { name: "Soufflé au Grand-Marnier (Spécialité)", price_cents: 1200, is_highlight: true },
          { name: "Baba au Rhum & Chantilly maison", price_cents: 1000 },
          { name: "Crème Brûlée à la vanille bourbon", price_cents: 900 },
          { name: "Pavlova aux fruits de saison", price_cents: 1200 },
          { name: "Profiteroles au chocolat chaud", price_cents: 1100 },
          { name: "Assiette de Fromages affinés", price_cents: 1200 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Vins & Boissons",
        items: [
          { name: "Verre de Bordeaux (Sélection)", price_cents: 850 },
          { name: "Verre de Chardonnay", price_cents: 750 },
          { name: "Bouteille de vin (À partir de)", price_cents: 2400 },
          { name: "Coupe de Champagne", price_cents: 1400 },
          { name: "Eau Minérale Evian/Badoit (1L)", price_cents: 700 },
          { name: "Café & Mignardises", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Au Petit Marguery est une institution de la cuisine bourgeoise située sur le boulevard de Port-Royal. Dans un décor de bistrot Belle Époque, le restaurant célèbre les traditions françaises avec une rigueur exemplaire. Célèbre pour ses gibiers en saison et son soufflé au Grand-Marnier, c'est l'adresse idéale pour un repas hors du temps.",
  insider_tip: "• **Choix du Maître** : Le Soufflé au Grand-Marnier est un incontournable absolu, commandez-le dès le début du repas car il est préparé à la minute.\n• **Expérience Culturelle** : La salle historique avec ses boiseries et ses banquettes rouges offre une plongée authentique dans le Paris de 1900.\n• **Timing Stratégique** : Le menu 'Petit Marguery' à 29€ est d'une générosité rare pour une qualité de produits aussi élevée.",
  specials: {
    cuisine: ["Française", "Traditionnelle"],
    drinks: ["Vins fins", "Digestifs"],
    must_eat: "Cuisine traditionnelle. Ris de veau & Soufflé Grand-Marnier",
  },
  images: {
    hero: "AU_ZVEGwzf7dkNf6sRejSZplYooVWQCSRgN0MJtOzkqnPurfNtqABecD3qAqe4KRKiWYu9Ej6VaBP24dr1l1VOoSDNAyarmXZd0jrwQXNeceahQkvOsZGVxbI2skqvYmUADOy_YufMC7-Q3aDLSH7nh7PR9a6hGU9q-H-SfBlNNGFyyYZmabG9scXeJma_aN1gEAl6uvYCU8tw4Tf3RPQerVfTqVEdBfGtg3PpzzUdqfm-DtFkA2IJKq62BUx_YTjaXgbj8JZiu48B8Rkwc8MZ2dDOi4fpheC767-GeJU4nX20KMLQ",
    gallery: ["AU_ZVEFuqsiz0VPNudUIjNrKy5qFuuxgk6077INgQ2rYRF9PwO0A1VsS9V4VPc_W3T2l1UhOSMy0GMsJWz7uCCUE3UFya2NEvHgyeHibOqf3A64fJfrrEGZtAzCLypQehDzej6PBUmJ0uhlOwjvYxhS2gUA_gw7c5oy46yrsgGgfBMsa5h7P-ChdQghzXfEgGVJtbR8QAn21XbiyiTI4YLBC0GaxrDiDhLhRiQbxQGebTeBnEwlKDAohf_SFDEm9Tcc1xxRMQUiMceIPRGuSDlgKFFWV4_N2sRUf3tGct9O_B-4WCg","AU_ZVEHqyl2DEQqm9gHwAgMxebWEFT83FrmMV0pyPfB8kXyp3qQmza4Cmh6gsWWrrpjorelCd9FlypH6ABCQqbxDfxSfnrngxVrhIOV2QngPfmeJzl-7ud8Q8ZmdzrMT5f2rwIlMUKg6XHwusJxyqbcLN_I6l0TuZIG5119aZS76aleSRNS26GQS5DZUFrjqDfkZEVgVB659F-1Qq_IRBC5bjlRPesz4m2HEs61z3FY3fEUAouC3RqU664g0RZQtgPDToWzGV8C-ZfpcCF8WjxXMSrw0mCyuncm68X7iF47cd06AUw"]
  },
  verified: false,
  google_rating: 4.1
};

export default au_petit_marguery;
