import { SurgicalPlace } from "../../../type-definition";

export const le_petit_retro: SurgicalPlace = {
  id: "poi-le-petit-retro",
  slug: "le-petit-retro",
  name: "Le Petit Rétro",
  category: "restaurant",
  subcategory: ["bistrot", "historique", "art-nouveau", "victor-hugo"],
  location: {
    address: "5 Rue Mesnil, 75116 Paris",
    arrondissement: 16,
    lat: 48.8687918,
    lng: 2.2848688,
    nearest_metro: "Victor Hugo",
    metro_lines: [2],
    google_id: "ChIJSa5av_Bv5kcRuxLkfzhPre0"
  },
  moods: {
    chill: 95,
    festif: 40,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "Lun-Ven: 12h15-14h15, 19h15-22h15 | Sam: 19h15-22h15 | Dim: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.petitretro.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-28",
    verified_at: "2026-03-28",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Classiques du Bistrot (Entrées)",
        items: [
          { name: "Saucisse au Couteau & Purée Maison", price_cents: 2280, description: "La spécialité fondante de la maison", is_highlight: true },
          { name: "Œufs en Meurette Tradition", price_cents: 1450, description: "Vin rouge, lardons et croûtons dorés" },
          { name: "Os à Moelle Grillé", price_cents: 1200, description: "Gros sel et pain de campagne grillé" },
          { name: "Tartare de Saumon Frais", price_cents: 1650, description: "Ciboulette et échalotes confites" },
          { name: "Soupe à l'Oignon Gratinée", price_cents: 1100, description: "Un classique immuable" },
          { name: "Terrine de Campagne Maison", price_cents: 1300 },
          { name: "Salade de Lentilles & Hareng", price_cents: 1250 },
          { name: "Gougères de Bienvenue", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Tradition (Plats)",
        items: [
          { name: "Blanquette de Veau à l'Ancienne", price_cents: 2400, description: "Riz pilaf et petits légumes fondants", is_highlight: true },
          { name: "Cœur de Filet de Bœuf", price_cents: 3600, description: "Sauce au poivre et frites maison" },
          { name: "Noix de Saint-Jacques d'Erquy", price_cents: 2950, description: "Émulsion au beurre blanc citronné" },
          { name: "Tartare de Bœuf Préparé", price_cents: 2100, description: "Coupé au couteau, assaisonnement classique" },
          { name: "Filet de Bar Grillé", price_cents: 2700, description: "Légumes braisés et huile vierge" },
          { name: "Émincé d'Onglet à l'Échalote", price_cents: 2350 },
          { name: "Rognons de Veau à la Moutarde", price_cents: 2600 },
          { name: "Risotto Crémeux aux Champignons", price_cents: 1900 },
          { name: "Andouillette de Troyes AAAAA", price_cents: 2250 },
          { name: "Cuisse de Canard Confite", price_cents: 2150 },
          { name: "Pavé de Thon à la Plancha", price_cents: 2500 },
          { name: "Plat du Jour du Marché", price_cents: 1950 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Choses Douces (Desserts)",
        items: [
          { name: "Île Flottante XXL", price_cents: 950, description: "Crème anglaise onctueuse et amandes", is_highlight: true },
          { name: "Mousse au Chocolat Guanaja", price_cents: 1000, description: "Fleur de sel et biscuit sablé" },
          { name: "Baba au Rhum Ambré", price_cents: 1200, description: "Crème montée à la vanille" },
          { name: "Tatin de Pommes Individuelle", price_cents: 1100, description: "Crème fraîche épaisse" },
          { name: "Profiteroles au Chocolat chaud", price_cents: 1250 },
          { name: "Assortiment de Fromages Affinés", price_cents: 1400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave du Bistrot (Boissons)",
        items: [
          { name: "Brouilly en pot (46cl)", price_cents: 2100, is_highlight: true },
          { name: "Verre de Chablis", price_cents: 1100 },
          { name: "Coupe de Champagne Maison", price_cents: 1300 },
          { name: "Pinte de Bière de Paris", price_cents: 900 },
          { name: "Expresso Pur Arabica", price_cents: 320 },
          { name: "Thé Vert du Palais des Thés", price_cents: 650 },
          { name: "Eau Minérale (75cl)", price_cents: 700 },
          { name: "Digestif Vieille Prune", price_cents: 1200 }
        ]
      }
    ]
  },
  description: "Véritable capsule temporelle figée en 1904, Le Petit Rétro est l'un des derniers bistrots Art Nouveau de Paris. Avec son comptoir en étain, ses boiseries patinées et surtout ses céramiques somptueuses signées Charles-Édouard Haviland, le lieu est classé aux monuments historiques. On y vient pour l'atmosphère unique du Paris de la Belle Époque et pour une cuisine de bistrot sincère, généreuse et exécutée dans les règles de l'art. C'est l'adresse 'sympa' par excellence pour ceux qui cherchent l'âme du 16ème populaire et bourgeois.",
  expert_catchline: "L'âme du bistrot parisien de la Belle Époque dans un décor classé.",
  insider_tip: "• **Le Décor** : Prenez le temps d'admirer les fresques en faïence dans la salle du fond, elles sont d'origine et uniques à Paris.\n  • **Le Plat Signature** : La saucisse-purée est un monument de gourmandise, simple mais parfaite.\n  • **Réservation** : Le lieu est petit et très prisé par les habitués du quartier Victor Hugo, réservez pour être sûr d'avoir une table.",
  specials: {
    cuisine: ["Bistrot Traditionnel", "Française"],
    drinks: ["Vins de Propriété", "Digestifs Classiques"],
    must_eat: "Cuisine de Bistrot. Saucisse au Couteau & Purée & Île Flottante XXL.",
    must_drink: "Brouilly en pot"
  },
  images: {
    hero: "AU_ZVEGrCXpEFK__bmAGdhu33eDgDXjAyd_HA98RqIloYHTSP8flAoqJB8DkthsZgLtI01rm9Ryd3TqcufntIBW3Subg5ExgghdY4Jb6Gv8W01pxt16V9qscTeW3mfKzzTSc5D3VqY0oc2yK2g7L5TVJL_iPmqCZA8R-OYf7TWmzRAKWFOeIwnnXbqIBMyNthBVDypDah8b5ZxRSGMWPfJipgDgkF1iueDDnPjt3aLjV8HUJLElGLaV5jbrjxE1beL7MnZ2K8hfkooHkksp7cgWALcSpp92BGo_hKxdBpZ1pikgM7A",
    gallery: [
      "AU_ZVEEYX68liLAd7jqAjk-WCAQtkpCGhvfVJiSrpmj4AE7Yj3D4vdWJg47H3gas9bfXo22kwkRd2gnhjmoRnOo8yFk5F8eJaYh1hvauccEOHG7c665avnC-UgfHhQYjt-xOTbQPBBUGdob5zSbC76NdSAqesmqFmi1C3CDovebeLcE2ga0-SDtKk05vYOgKXmz1E0ibYWI2HQf4X0fdUZ8d8r9ix8BLEDq8-cQoIeCSg8Szaga7dNNOWthGhuGCn_0bplD4QAPDfJ26i6yGuwqOKXQ5YhqaX9i99s7DyeiwyZas1Q",
      "AU_ZVEGGrBoyoCJfzX99XIV547kbgucyHbz0zqxVrZxK59Zu0VQAYDHHjsHl0ENH3J2RgRhcNSwnIxD2S7FkHVguBTZLaiYKbTW76VrfUtk9038EAxwGt7ENIF1YNhuPQEkwlpy_G4Qaj8LkbmFt0dUqotXVaTnAaK5bnOd5Vz0af78CN5v2C-nX8vzqobeQKmB7b7-qmHuWojcaLptFEbqNyvYv8Ye65vxAw3YpThkoRBKW4N3IZ9mvT5vx5schThHFR_vIeZm4e9grOlfZuQYlpNGTUvrpThj6qpdzUxCUZhD2xC6tZklXlOaFj2NdsBjb1ZhjKVE4auutEXDw3VPKXzQW_QFiNwlvJ3Y9r1Um0dm9K_5VpfsPTXDFnfX7oKT8iYuVY1STlkEfcPtq-3VCW6-jDSwnZWVvMdlHNqrveBxl3k4qTrxbFMNM-Vk8ZEcW"
    ]
  },
  verified: true,
  google_rating: 4.4,
  instagram_handle: "lepetitretro",
  real_talk: {
    text: "Un saut dans le temps absolument délicieux. L'accueil est d'une courtoisie exemplaire, et l'assiette respecte scrupuleusement les codes du bon vieux bistrot parigot. Un joyau de quartier.",
    must_eat: "Bistrot Traditionnel. Saucisse-Purée.",
    le_secret: "La petite salle à l'entrée est parfaite pour observer le mouvement de la rue Mesnil.",
    le_son: "Un brouhaha convivial de quartier, sans musique intrusive.",
    le_must: "L'île flottante, véritable institution locale."
  }
};

export default le_petit_retro;
