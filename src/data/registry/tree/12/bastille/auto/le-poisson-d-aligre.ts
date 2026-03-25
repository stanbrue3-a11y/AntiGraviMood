import { SurgicalPlace } from "../../../../type-definition";

export const le_poisson_d_aligre: SurgicalPlace = {
  id: "poi-le-poisson-d-aligre",
  slug: "le-poisson-d-aligre",
  name: "Le poisson d'Aligre",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "Marché Beauvau, Pl. d'Aligre, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.8492363,
    lng: 2.3778941,
    nearest_metro: "Ledru-Rollin",
    metro_lines: [8],
    google_id: "ChIJU5g0sFRz5kcR7ElJSCSwYes"
  },
  moods: {
    chill: 75,
    festif: 35,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi-samedi: 12:00–15:00, 19:00–23:00 | dimanche: 12:00–15:30, 19:00–22:00",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.latabledaligre.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 45,
    dish_price: 31.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Les Formules du Marché (Déjeuner - Plats)",
        items: [
          { name: "Formule E + P ou P + D", price: "19.00€", highlight: true },
          { name: "Menu Complet (E + P + D)", price: "23.50€", highlight: true }
        ]
      },
      {
        category: "Entrées Iodées & Cru",
        items: [
          { name: "Ceviche de Sar au gingembre", price: "15.00€", highlight: true },
          { name: "Accras de Morue maison (x6)", price: "15.00€" },
          { name: "Assiette de Bulots & Crevettes", price: "15.50€" },
          { name: "Carpaccio de Daurade Royale", price: "16.00€" },
          { name: "Poulpe grillé à la plancha, piquillos", price: "17.00€", highlight: true },
          { name: "Calamars à la Romaine croustillants", price: "15.00€" },
          { name: "Soupe de Poissons de roche artisanale", price: "12.00€" }
        ]
      },
      {
        category: "Poissons Frais à la Plancha (Plats)",
        items: [
          { name: "Pavé de Cabillaud sauvage", price: "31.00€", highlight: true },
          { name: "Filet de Daurade Grise de ligne", price: "31.00€" },
          { name: "Calamars frais entiers sautés", price: "33.00€", highlight: true },
          { name: "Filet de Bar de ligne", price: "38.50€" },
          { name: "Steak d'Espadon fondant", price: "23.00€" },
          { name: "Steak de Thon Rouge 'Marmara'", price: "28.00€" },
          { name: "Brochettes de Saint-Jacques & Lotte", price: "33.00€" },
          { name: "Filet de Saint-Pierre sauvage", price: "45.00€" },
          { name: "Sole entière Belle-Meunière (500g)", price: "49.00€" },
          { name: "Parillade de Poissons & Crustacés", price: "48.00€" }
        ]
      },
      {
        category: "Garnitures & Accompagnements",
        items: [
          { name: "Riz Basmati parfumé", price: "0.00€" },
          { name: "Légumes du marché sautés", price: "0.00€" },
          { name: "Salade de mesclun fraîche", price: "0.00€" },
          { name: "Ratatouille maison aux herbes", price: "5.50€" },
          { name: "Pommes Vapeur à l'aneth", price: "5.00€" }
        ]
      },
      {
        category: "Desserts & Douceurs",
        items: [
          { name: "Crème Brûlée Vanille de Madagascar", price: "9.50€", highlight: true },
          { name: "Fondant au Chocolat cœur coulant", price: "8.00€" },
          { name: "Panna Cotta aux fruits de la passion", price: "7.50€" },
          { name: "Coupe Mont-Blanc (Marron/Crème)", price: "7.00€" },
          { name: "Café Gourmand (3 mini desserts)", price: "12.00€" },
          { name: "Sorbet Citron Vert / Framboise", price: "7.00€" }
        ]
      },
      {
        category: "Vins Blancs des Marées (Boissons)",
        items: [
          { name: "Verre de Muscadet Sèvre & Maine", price: "6.50€" },
          { name: "Verre de Petit Chablis", price: "8.50€" },
          { name: "Bouteille de Sancerre Blanc", price: "34.00€" },
          { name: "Café Lavazza", price: "2.50€" }
        ]
      }
    ]
  },
  description: "Le Poisson d'Aligre (ou La Table d'Aligre) est une escale iodée incontournable sur la Place d'Aligre. Sous une devanture bleu marine sobre se cache un restaurant qui ne jure que par la fraîcheur absolue, avec des arrivages directs de Bretagne. Ici, le produit est roi et se déguste simplement, sublimé par une cuisson à la plancha millimétrée. L'ambiance est feutrée, le service impeccable, idéal pour savourer un Saint-Pierre ou un bar de ligne après avoir arpenté le marché voisin.",
  insider_tip: `• **Le Choix Plancha** : Les calamars sautés sont la signature de la maison, d'une tendreté exemplaire.
  • **Le Midi Malin** : Sa formule déjeuner à 19€ est une aubaine pour manger du poisson frais de cette qualité à Paris.
  • **Fraîcheur Directe** : N'hésitez pas à demander le poisson du jour hors carte, selon les arrivages du matin au marché.`,
  specials: {
    cuisine: ["Poisson", "Fruits de Mer", "Française"],
    drinks: ["Muscadet", "Chablis"],
    must_eat: "Poisson. Calamars à la Plancha & Ceviche de Sar",
  },
  images: {
    hero: "AU_ZVEEf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf",
    gallery: ["AU_ZVEG_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W","AU_ZVEHm_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W"]
  },
  verified: false,
  google_rating: 4.4
};

export default le_poisson_d_aligre;
