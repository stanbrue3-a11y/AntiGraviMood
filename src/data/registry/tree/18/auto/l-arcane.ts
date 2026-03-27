import { SurgicalPlace } from "../../../type-definition";

export const l_arcane: SurgicalPlace = {
  id: "poi-l-arcane",
  slug: "l-arcane",
  name: "L'Arcane",
  category: "restaurant",
  subcategory: ["gastronomique", "etoile", "chic", "moderne"],
  location: {
    address: "39 Rue Lamarck, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.889402,
    lng: 2.342061,
    nearest_metro: "Lamarck - Caulaincourt",
    metro_lines: [12],
    google_id: "ChIJlWsmgVtu5kcRhBNCJZBoIoE"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:00, 19:30–22:00; Fermé dimanche-lundi",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurant-larcane.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 90,
    is_free: false,
    dish_price: 52, // Prix du menu 4 séquences Découverte
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes de l'Arcane (Entrées)",
        items: [
          { name: "Œuf à 63°, Asperges & Effilochée de Tourteau", price: "0.00€", highlight: true },
          { name: "Saumon juste nacré, Émulsion Citronnelle & Gingembre", price: "0.00€", highlight: true },
          { name: "Surprise de Tomate, Burrata & Gaspacho Noire de Crimée", price: "0.00€" },
          { name: "Cromesquis d'Artichaut & Crème de Truffe", price: "0.00€", highlight: true },
          { name: "Carpaccio de Saint-Jacques au Yuzu & Radis noir", price: "0.00€" },
          { name: "Velouté de Topinambours & Éclats de Noisettes", price: "0.00€" },
          { name: "Ravioles de Foie Gras de Canard & Bouillon au Bois", price: "0.00€", highlight: true },
          { name: "Asperges Vertes & Sabayon aux Agrumes", price: "0.00€" }
        ]
      },
      {
        category: "Séquences Gastronomiques (Plats)",
        items: [
          { name: "Caille d'Anjou rôtie & Petits pois à la française", price: "0.00€", highlight: true },
          { name: "Lapin de Vendée, Jeunes poireaux & Polenta crémeuse", price: "0.00€", highlight: true },
          { name: "Chaud-froid de Black Angus & Girolles d'été", price: "0.00€" },
          { name: "Canard de Challans rôti au sang & Betteraves", price: "0.00€", highlight: true },
          { name: "Saint-Pierre de ligne, Fenouil confit & Citron", price: "0.00€" },
          { name: "Ris de Veau laqué au Réglisse & Échalotes rôties", price: "0.00€", highlight: true },
          { name: "Filet de Bœuf Simmental & Jus de viande corsé", price: "0.00€" },
          { name: "Risotto Acquerello & Vieux Parmesan (24 mois)", price: "0.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre Ratte onctueuse", price: "0.00€", highlight: true },
          { name: "Mousseline de Céleri-rave au Beurre Noisette", price: "0.00€" },
          { name: "Légumes Racines rôtis au Four à bois", price: "0.00€" },
          { name: "Épinards frais tombés au Beurre", price: "0.00€" },
          { name: "Petite Salade de Pousses & Herbes aromatiques", price: "0.00€" }
        ]
      },
      {
        category: "Épilogues Sucrés (Desserts)",
        items: [
          { name: "Pêches jaunes & Granité à la Verveine", price: "0.00€", highlight: true },
          { name: "Soupe de Fraises & Sablé Breton Citron-Basilic", price: "0.00€", highlight: true },
          { name: "Panna Cotta Pistache & Griottes acidulées", price: "0.00€" },
          { name: "Soufflé chaud au Citron de Menton", price: "0.00€", highlight: true },
          { name: "Ganache Chocolat Grand Cru 80% & Sel fumé", price: "0.00€" },
          { name: "Trio de Fromages affinés par Sanders", price: "0.00€" },
          { name: "Mignardises signatures de la Maison", price: "0.00€" }
        ]
      },
      {
        category: "La Cave Étoilée (Boissons)",
        items: [
          { name: "Verre de Vin Blanc Sélectionné (Accord)", price: "14.00€", highlight: true },
          { name: "Verre de Vin Rouge Grand Cru", price: "18.00€" },
          { name: "Bouteille de Champagne de Vigneron (Selection)", price: "85.00€", highlight: true },
          { name: "Accord Mets & Vins 'Découverte' (4 verres)", price: "45.00€", highlight: true },
          { name: "Eau micro-filtrée L'Arcane (75cl)", price: "5.00€" },
          { name: "Café de spécialité Terres de Café", price: "4.50€" },
          { name: "Infusion aux Herbes du jardin", price: "6.00€" }
        ]
      }
    ]
  },
  description: "L'Arcane est le sanctuaire étoilé de la rue Lamarck, où le chef Laurent Magnin déploie une gastronomie d'une finesse absolue. L'établissement se distingue par ses 'menus à l'aveugle', une invitation à la surprise totale où chaque séquence révèle la maîtrise parfaite des cuissons et la noblesse des produits de saison. Le cadre est intimiste, épuré et élégant, offrant une vue discrète sur les pentes de Montmartre, loin de l'agitation touristique, pour une expérience culinaire hors du temps.",
  insider_tip: "• **Menu Surprise** : N'ayez pas peur de l'inconnu, le chef est un maître de l'équilibre. Signalez simplement vos allergies à l'avance.\n• **L'Emplacement** : Le restaurant est situé sur le versant plus calme de la Butte, idéal pour une soirée romantique et feutrée.\n• **Accords Vins** : L'accord mets-vins est particulièrement pertinent ici, les flacons sélectionnés soulignent magnifiquement la délicatesse des plats.",
  specials: {
    cuisine: ["Haute Gastronomie étoilée", "Menu surprise carte blanche", "Produits de saison"],
    drinks: ["Accords mets-vins de précision", "Sélection de Champagnes", "Vins de petits producteurs"],
    must_eat: "L'Œuf à 63°, Asperges et Effilochée de Tourteau : une entrée d'une grande technicité, signature de l'élégance du chef.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEnXfL8h-zB-E2O9zG0kZ0W-K5L7zY7rJ7e5W9J8_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.8
};

export default l_arcane;
