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
        category: "Classiques du Bistrot (Entrées)",
        items: [
          { name: "Saucisse au Couteau & Purée Maison", price: "22.80€", description: "La spécialité fondante de la maison", highlight: true },
          { name: "Œufs en Meurette Tradition", price: "14.50€", description: "Vin rouge, lardons et croûtons dorés" },
          { name: "Os à Moelle Grillé", price: "12.00€", description: "Gros sel et pain de campagne grillé" },
          { name: "Tartare de Saumon Frais", price: "16.50€", description: "Ciboulette et échalotes confites" },
          { name: "Soupe à l'Oignon Gratinée", price: "11.00€", description: "Un classique immuable" },
          { name: "Terrine de Campagne Maison", price: "13.00€" },
          { name: "Salade de Lentilles & Hareng", price: "12.50€" },
          { name: "Gougères de Bienvenue", price: "9.00€" }
        ]
      },
      {
        category: "Plats de Tradition (Plats)",
        items: [
          { name: "Blanquette de Veau à l'Ancienne", price: "24.00€", description: "Riz pilaf et petits légumes fondants", highlight: true },
          { name: "Cœur de Filet de Bœuf", price: "36.00€", description: "Sauce au poivre et frites maison" },
          { name: "Noix de Saint-Jacques d'Erquy", price: "29.50€", description: "Émulsion au beurre blanc citronné" },
          { name: "Tartare de Bœuf Préparé", price: "21.00€", description: "Coupé au couteau, assaisonnement classique" },
          { name: "Filet de Bar Grillé", price: "27.00€", description: "Légumes braisés et huile vierge" },
          { name: "Émincé d'Onglet à l'Échalote", price: "23.50€" },
          { name: "Rognons de Veau à la Moutarde", price: "26.00€" },
          { name: "Risotto Crémeux aux Champignons", price: "19.00€" },
          { name: "Andouillette de Troyes AAAAA", price: "22.50€" },
          { name: "Cuisse de Canard Confite", price: "21.50€" },
          { name: "Pavé de Thon à la Plancha", price: "25.00€" },
          { name: "Plat du Jour du Marché", price: "19.50€" }
        ]
      },
      {
        category: "Choses Douces (Desserts)",
        items: [
          { name: "Île Flottante XXL", price: "9.50€", description: "Crème anglaise onctueuse et amandes", highlight: true },
          { name: "Mousse au Chocolat Guanaja", price: "10.00€", description: "Fleur de sel et biscuit sablé" },
          { name: "Baba au Rhum Ambré", price: "12.00€", description: "Crème montée à la vanille" },
          { name: "Tatin de Pommes Individuelle", price: "11.00€", description: "Crème fraîche épaisse" },
          { name: "Profiteroles au Chocolat chaud", price: "12.50€" },
          { name: "Assortiment de Fromages Affinés", price: "14.00€" }
        ]
      },
      {
        category: "La Cave du Bistrot (Boissons)",
        items: [
          { name: "Brouilly en pot (46cl)", price: "21.00€", highlight: true },
          { name: "Verre de Chablis", price: "11.00€" },
          { name: "Coupe de Champagne Maison", price: "13.00€" },
          { name: "Pinte de Bière de Paris", price: "9.00€" },
          { name: "Expresso Pur Arabica", price: "3.20€" },
          { name: "Thé Vert du Palais des Thés", price: "6.50€" },
          { name: "Eau Minérale (75cl)", price: "7.00€" },
          { name: "Digestif Vieille Prune", price: "12.00€" }
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
