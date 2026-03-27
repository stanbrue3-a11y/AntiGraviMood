import { SurgicalPlace } from "../../../type-definition";

export const condesa: SurgicalPlace = {
  id: "poi-condesa",
  slug: "condesa",
  name: "La Condesa",
  category: "restaurant",
  subcategory: ["gastronomique", "etoile", "mexicain-chic", "contemporain"],
  location: {
    address: "13 Rue Rodier, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.878263,
    lng: 2.3425556,
    nearest_metro: "Saint-Georges",
    metro_lines: [12],
    google_id: "ChIJz2yx5EBu5kcRTqLAalRfNFU"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 19:30–21:30; jeudi-vendredi: 12:15–13:30; Fermé dimanche-lundi",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lacondesa-paris.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 130,
    is_free: false,
    dish_price: 85, // Prix du premier menu dégustation "Découverte"
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes Indra (Entrées)",
        items: [
          { name: "Cromesquis d'Artichaut & Piment fumé", price: "0.00€", highlight: true },
          { name: "Travail autour du Céleri, Tofu & Bonite", price: "0.00€", highlight: true },
          { name: "Saint-Jacques à l'émulsion de Café", price: "0.00€" },
          { name: "Agnolotti Maison, Bouillon Fève Tonka & Maïs", price: "0.00€", highlight: true },
          { name: "Expérience de Champignons fumés au Bois de Cerisier", price: "0.00€" },
          { name: "Tartare de Bar & Agrumes Mexicains", price: "0.00€" },
          { name: "Mini Tacos de Homard & Vanille (Surprise)", price: "0.00€" },
          { name: "Bouillon d'Algues Kombu & Infusion d'Herbes", price: "0.00€" }
        ]
      },
      {
        category: "Expéditions Gastronomiques (Plats)",
        items: [
          { name: "Canette de Kriaxera & Céleri-rave en trois façons", price: "0.00€", highlight: true },
          { name: "Veau mariné aux Algues & Salicornes croustillantes", price: "0.00€", highlight: true },
          { name: "Dos de Cabillaud de ligne & Grand Mole Blanc", price: "0.00€" },
          { name: "Pigeon de Vendée rôti au Café & Cacao", price: "0.00€", highlight: true },
          { name: "Homard Bleu de Bretagne & Beurre de corail", price: "0.00€" },
          { name: "Ris de Veau laqué au Piment Ancho & Jus corsé", price: "0.00€" },
          { name: "Tamal de Maïs frais & Truffe noire de saison", price: "0.00€" },
          { name: "Pêche du jour, Beurre d'Hibiscus & Betterave", price: "0.00€" }
        ]
      },
      {
        category: "Accords de la Terre (Plats)",
        items: [
          { name: "Purée de Maïs doux onctueuse au sel fumé", price: "0.00€", highlight: true },
          { name: "Haricots Verts façon risotto & Parmesan", price: "0.00€" },
          { name: "Légumes du Mexique rôtis au Four à bois", price: "0.00€" },
          { name: "Riz Sauvage croquant au Thé Vert", price: "0.00€" },
          { name: "Salade de Jeunes Pousses & Vinaigrette Mole Vert", price: "0.00€" }
        ]
      },
      {
        category: "Douceurs & Métissage (Desserts)",
        items: [
          { name: "Ganache Chocolat Noir & Piment Pasilla", price: "0.00€", highlight: true },
          { name: "Sorbet Goyave rose & Citron vert", price: "0.00€", highlight: true },
          { name: "Maïs en dessert : Crème, Glace & Tuile", price: "0.00€", highlight: true },
          { name: "Nage d'Ananas frais, Coco & Coriandre", price: "0.00€" },
          { name: "Pastilla croustillante aux Pistaches d'Iran", price: "0.00€" },
          { name: "Fromages affinés & Chutney de mangue au piment", price: "0.00€" },
          { name: "Mignardises signatures du Chef Indra", price: "0.00€" }
        ]
      },
      {
        category: "La Cave de La Condesa (Boissons)",
        items: [
          { name: "Mezcal 100% Espadín 'La Palabra' (Shot)", price: "14.00€", highlight: true },
          { name: "Verre de Vin Nature Sélection Sommelier", price: "12.00€" },
          { name: "Accord Mets & Vins 'Expédition' (5 verres)", price: "65.00€", highlight: true },
          { name: "Thé Vert d'Ombre japonais rare", price: "9.50€" },
          { name: "Café de plantation mexicaine sélectionné", price: "6.00€" },
          { name: "Eau micro-filtrée La Condesa (75cl)", price: "5.00€" },
          { name: "Infusion Hibiscus sauvage (Agua de Jamaica)", price: "7.00€", highlight: true }
        ]
      }
    ]
  },
  description: "La Condesa est le laboratoire hautement créatif du chef mexicain Indra Carrillo Perea. Étoilé au Guide Michelin, ce restaurant du 9ème arrondissement propose une immersion sensorielle où les techniques de la haute gastronomie française rencontrent les saveurs vibrantes et les ingrédients du Mexique. Chaque plat est une pièce d'orfèvrerie technique, servie dans un cadre épuré et élégant, faisant de La Condesa l'une des tables les plus passionnantes et précises de la capitale.",
  insider_tip: "• **Le Menu Carte Blanche** : Ne cherchez pas la carte, laissez-vous porter par les menus surprises qui varient selon les arrivages et l'humeur du chef.\n• **L'Accord Mezcal** : Si vous êtes amateur, demandez à découvrir les mezcals de dégustation, l'accord avec certains plats mariniers est bluffant.\n• **La Table** : Le restaurant est petit et très prisé, les réservations se prennent plusieurs semaines à l'avance.",
  specials: {
    cuisine: ["Haute Gastronomie Mexicaine", "Précision française", "Étoilé Michelin"],
    drinks: ["Mezcals d'exception", "Vins natures & biodynamiques", "Accords créatifs"],
    must_eat: "L'Agnolotti Maison au bouillon de fève Tonka et Maïs : une fusion magistrale d'influences italiennes et mexicaines.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEnXfL8h-zB-E2O9zG0kZ0W-K5L7zY7rJ7e5W9J8_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default condesa;
