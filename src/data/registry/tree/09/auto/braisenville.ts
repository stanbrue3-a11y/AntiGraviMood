import { SurgicalPlace } from "../../../type-definition";

export const braisenville: SurgicalPlace = {
  id: "poi-braisenville",
  slug: "braisenville",
  name: "Braisenville",
  category: "restaurant",
  subcategory: ["braise", "grillades", "bistronomie", "partage", "moderne"],
  location: {
    address: "36 Rue Condorcet, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8789547,
    lng: 2.3456387,
    nearest_metro: "Anvers",
    metro_lines: [2],
    google_id: "ChIJ8XU3Wklu5kcRot7p_xof-m0"
  },
  moods: {
    chill: 70,
    festif: 80,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 19:00–23:00 | lundi-dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.braisenville.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 60,
    is_free: false,
    dish_price: 15, // Prix du poulpe ou des Saint-Jacques (petites assiettes de partage)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes au Feu (Entrées)",
        items: [
          { name: "Millefeuille Coing, Patate Douce & Vin Jaune", price: "11.00€", highlight: true },
          { name: "Émulsion de Ratte du Touquet, Noix & Cresson", price: "12.00€" },
          { name: "Betterave Fumée, Glace au Chèvre & Shizo", price: "11.00€", highlight: true },
          { name: "Œuf 63°, Topinambour, Chorizo & Estragon", price: "11.00€" },
          { name: "Foie Gras Grillé, Kaki & Sauce Porto", price: "18.00€", highlight: true },
          { name: "Carpaccio de Langoustine & Sauce Hareng", price: "14.00€" },
          { name: "Burrata Fumée à la Braise & Huile d'Herbes", price: "13.50€", highlight: true },
          { name: "Quenelles de Turbot & Sauce à l'Oseille", price: "14.00€" }
        ]
      },
      {
        category: "La Braise Marine (Plats)",
        items: [
          { name: "Chipiron, Sabayon Yuzu & Fenouil", price: "13.00€", highlight: true },
          { name: "Poulpe Grillé, Houmous Chaud & Jus de Veau", price: "15.00€", highlight: true },
          { name: "Saint-Jacques, Poireaux Confits & Sarrasin", price: "15.00€", highlight: true },
          { name: "Bar de Ligne Grillé & Beurre d'Ail des Ours", price: "16.00€" },
          { name: "Tataki de Thon Rouge à la Flamme", price: "14.50€" },
          { name: "Gambas Sauvages à la Braise & Citron Brûlé", price: "15.50€" }
        ]
      },
      {
        category: "La Braise Terrestre (Plats)",
        items: [
          { name: "Filet Mignon de Cochon & Chocolat Blanc/Panais", price: "14.00€", highlight: true },
          { name: "Onglet d'Angus (UK) & Sauce Chimichurri", price: "13.00€", highlight: true },
          { name: "Côte de Bœuf Angus (1kg) à partager", price: "76.00€", highlight: true },
          { name: "Picanha de Bœuf Grillée au Charbon de Bois", price: "15.50€" },
          { name: "Épaule d'Agneau Confite 12h puis Grillée", price: "16.50€", highlight: true },
          { name: "Canette des Dombes, Navets & Fruits Rouges", price: "15.00€" },
          { name: "Ris de Veau Croustillant à la Braise", price: "19.00€", highlight: true }
        ]
      },
      {
        category: "Accompagnements Braisés",
        items: [
          { name: "Patates Braves & Sauce Fumée Maison", price: "7.00€", highlight: true },
          { name: "Légumes de Saison Grillés à la Minute", price: "11.00€" },
          { name: "Purée de Pois Chiches Onctueuse au Tahini", price: "8.50€" },
          { name: "Mousseline de Panais au Beurre Noisette", price: "7.50€" }
        ]
      },
      {
        category: "Finals en Douceur (Desserts)",
        items: [
          { name: "Ganache Chocolat & Émulsion Fève Tonka", price: "11.00€", highlight: true },
          { name: "Émulsion Mangue, Passion & Glace Coco", price: "12.00€", highlight: true },
          { name: "Poires Pochées, Lavande & Mousse Chocolat", price: "12.00€" },
          { name: "Sorbet Citron Vert & Menthe Fraîche", price: "8.50€" },
          { name: "Sablé aux Noix Caramélisées & Fleur de Sel", price: "9.50€" },
          { name: "Comté 30 mois d'Affinage & Coniture", price: "9.00€" }
        ]
      },
      {
        category: "Nectars & Cuvées (Boissons)",
        items: [
          { name: "Verre de Vin Rouge (Sélection Braise)", price: "9.50€", highlight: true },
          { name: "Cocktail Signature 'Braisenvillois'", price: "12.50€", highlight: true },
          { name: "Verre de Vin Blanc Minéral", price: "8.50€" },
          { name: "Thé Glacé Maison à la Pêche Rôtie", price: "6.00€" }
        ]
      }
    ]
  },
  description: "Braisenville est l'adresse incontournable du 9ème pour les amateurs de cuissons authentiques au charbon de bois. Situé rue Condorcet, ce restaurant pionnier du partage propose des 'petites assiettes' gastronomiques où chaque produit est magnifié par le feu. Du poulpe grillé fondant à la côte de bœuf d'exception, la cuisine est à la fois brute et sophistiquée. Le décor industriel chic, avec sa cuisine ouverte, plonge les convives dans une expérience sensorielle vibrante, portée par une belle sélection de vins de vignerons.",
  insider_tip: "• **Le Poulpe** : C'est le plat signature, d'une tendreté absolue grâce à sa cuisson lente suivie d'un passage vif sur la braise.\n• **Formule Partage** : Comptez 3 à 4 assiettes par personne pour une expérience complète du menu.\n• **Côté Rue** : En été, demandez une place près des grandes vitrines ouvertes pour profiter de l'animation de la rue Condorcet.",
  specials: {
    cuisine: ["Cuisson au charbon de bois (Braise)", "Assiettes de partage gastronomiques", "Produits de saison sourcés"],
    drinks: ["Cocktails créatifs maison", "Sélection pointue de vins de terroir", "Spiritueux artisanaux"],
    must_eat: "Le Poulpe au Maïs (15€) : grillé à la perfection, servi avec un houmous chaud et un jus de veau corsé.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/placeid/photo?maxwidth=1600&photo_reference=AU_ZVEH-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/placeid/photo?maxwidth=1600&photo_reference=AU_ZVEEN-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/placeid/photo?maxwidth=1600&photo_reference=AU_ZVEGx-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default braisenville;
