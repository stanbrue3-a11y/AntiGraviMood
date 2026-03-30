import { SurgicalPlace } from "../../../../type-definition";

export const le_poisson_d_aligre: SurgicalPlace = {
  id: "poi-le-poisson-d-aligre",
  slug: "le-poisson-d-aligre",
  name: "Le poisson d’Aligre",
  category: "restaurant",
  subcategory: ["poisson"],
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
        category_type: "main",
        display_label: "Les Formules du Marché (Déjeuner - Plats)",
        items: [
          { name: "Formule E + P ou P + D", price_cents: 1900, is_highlight: true },
          { name: "Menu Complet (E + P + D)", price_cents: 2350, is_highlight: true }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées Iodées & Cru",
        items: [
          { name: "Ceviche de Sar au gingembre", price_cents: 1500, is_highlight: true },
          { name: "Accras de Morue maison (x6)", price_cents: 1500 },
          { name: "Assiette de Bulots & Crevettes", price_cents: 1550 },
          { name: "Carpaccio de Daurade Royale", price_cents: 1600 },
          { name: "Poulpe grillé à la plancha, piquillos", price_cents: 1700, is_highlight: true },
          { name: "Calamars à la Romaine croustillants", price_cents: 1500 },
          { name: "Soupe de Poissons de roche artisanale", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Poissons Frais à la Plancha (Plats)",
        items: [
          { name: "Pavé de Cabillaud sauvage", price_cents: 3100, is_highlight: true },
          { name: "Filet de Daurade Grise de ligne", price_cents: 3100 },
          { name: "Calamars frais entiers sautés", price_cents: 3300, is_highlight: true },
          { name: "Filet de Bar de ligne", price_cents: 3850 },
          { name: "Steak d'Espadon fondant", price_cents: 2300 },
          { name: "Steak de Thon Rouge 'Marmara'", price_cents: 2800 },
          { name: "Brochettes de Saint-Jacques & Lotte", price_cents: 3300 },
          { name: "Filet de Saint-Pierre sauvage", price_cents: 4500 },
          { name: "Sole entière Belle-Meunière (500g)", price_cents: 4900 },
          { name: "Parillade de Poissons & Crustacés", price_cents: 4800 }
        ]
      },
      {
        category_type: "other",
        display_label: "Garnitures & Accompagnements",
        items: [
          { name: "Riz Basmati parfumé", price_cents: 0 },
          { name: "Légumes du marché sautés", price_cents: 0 },
          { name: "Salade de mesclun fraîche", price_cents: 0 },
          { name: "Ratatouille maison aux herbes", price_cents: 550 },
          { name: "Pommes Vapeur à l'aneth", price_cents: 500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs",
        items: [
          { name: "Crème Brûlée Vanille de Madagascar", price_cents: 950, is_highlight: true },
          { name: "Fondant au Chocolat cœur coulant", price_cents: 800 },
          { name: "Panna Cotta aux fruits de la passion", price_cents: 750 },
          { name: "Coupe Mont-Blanc (Marron/Crème)", price_cents: 700 },
          { name: "Café Gourmand (3 mini desserts)", price_cents: 1200 },
          { name: "Sorbet Citron Vert / Framboise", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Vins Blancs des Marées (Boissons)",
        items: [
          { name: "Verre de Muscadet Sèvre & Maine", price_cents: 650 },
          { name: "Verre de Petit Chablis", price_cents: 850 },
          { name: "Bouteille de Sancerre Blanc", price_cents: 3400 },
          { name: "Café Lavazza", price_cents: 250 }
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
