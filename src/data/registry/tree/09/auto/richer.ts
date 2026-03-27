import { SurgicalPlace } from "../../../type-definition";

export const richer: SurgicalPlace = {
  id: "poi-richer",
  slug: "richer",
  name: "Le Richer",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "moderne", "terroir", "sans-reservation"],
  location: {
    address: "2 Rue Richer, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8753232,
    lng: 2.3458631,
    nearest_metro: "Grands Boulevards",
    metro_lines: [8, 9],
    google_id: "ChIJD560t_lt5kcRhL3y_2h6p-0"
  },
  moods: {
    chill: 80,
    festif: 60,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 08:00–00:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lericher.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 40,
    is_free: false,
    dish_price: 27, // Prix de l'éffiloché de cochon confit
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Entrées de Bistrot",
        items: [
          { name: "Velouté de Pois Cassés, Panais & Cumin", price: "9.50€", highlight: true },
          { name: "Burrata Crémeuse, Tapenade & Toasts", price: "12.00€", highlight: true },
          { name: "Terrine de Porc & Lapin Maison", price: "11.00€" },
          { name: "Poireaux Brûlés, Sabayon aux Agrumes", price: "10.50€" },
          { name: "Tartare de Bar, Pomme Verte & Aneth", price: "13.00€", highlight: true },
          { name: "Œuf Parfait, Crème de Champignons", price: "11.50€", highlight: true },
          { name: "Velouté de Panais & Huile de Truffe Noir", price: "10.00€" },
          { name: "Sardines Grillées, Marinade Citron & Herbes", price: "12.50€" }
        ]
      },
      {
        category: "Plats de Saison",
        items: [
          { name: "Éffiloché de Cochon Confit au Cidre & Purée", price: "27.00€", highlight: true },
          { name: "Filet de Bar de Ligne & Ail des Ours", price: "29.00€", highlight: true },
          { name: "Magret de Canard Rôti & Pois Gourmands", price: "28.00€" },
          { name: "Morue aux Olives Kalamata & Aubergines", price: "26.50€" },
          { name: "Veau du Pays Basque & Sauce Barbecue", price: "31.00€", highlight: true },
          { name: "Agneau Rôti aux Herbes & Légumes Oubliés", price: "30.00€", highlight: true },
          { name: "Risotto de Gambas Sauvages & Safran", price: "28.50€" },
          { name: "Ravioles de Royans, Crème de Noix & Comté", price: "24.00€" }
        ]
      },
      {
        category: "Charcuteries & Grignotages (Entrées)",
        items: [
          { name: "Jambon Serrano Affinage 18 mois", price: "14.00€", highlight: true },
          { name: "Chorizo Ibérique Pata Negra (Bella)", price: "13.00€" },
          { name: "Saucisson Artisanal de Montagne", price: "9.50€" },
          { name: "Planche de Fromages Affinés (Sélection)", price: "14.00€", highlight: true },
          { name: "Jambon de Paris 'Prince de Paris'", price: "10.50€" },
          { name: "Olives Lucques Marinées au Piment d'Espelette", price: "6.00€" },
          { name: "Rillettes d'Oie Maison & Pain de Campagne", price: "9.00€" },
          { name: "Croque du Richer au Cochon Confit", price: "15.00€", highlight: true }
        ]
      },
      {
        category: "Desserts du Pâtissier",
        items: [
          { name: "Mousse au Chocolat, Cardamome & Fleur de Sel", price: "10.00€", highlight: true },
          { name: "Banana Bread, Sorbet Banane & Sablé Cacao", price: "10.00€", highlight: true },
          { name: "Merveilleux Chocolat & Noisettes Grillées", price: "10.00€" },
          { name: "Glace à l'Italienne Maison (Pistache ou Vanille)", price: "8.00€" },
          { name: "Sorbet Poire & Menthe Fraîche", price: "8.00€" },
          { name: "Moelleux à la Poire & Coulis Caramel", price: "9.50€" },
          { name: "Gâteau au Café & Éclats de Noisettes", price: "9.00€", highlight: true }
        ]
      },
      {
        category: "Vins & Nectars (Boissons)",
        items: [
          { name: "Verre de Vin Blanc Biodynamique (Sélection)", price: "8.00€", highlight: true },
          { name: "Verre de Vin Rouge de Terroir (Haute-Vallée)", price: "8.50€" },
          { name: "Bouteille de Vin Nature (Notre Coup de Cœur)", price: "42.00€", highlight: true },
          { name: "Jus de Fruits Artisanal (Pomme du Verger)", price: "6.50€" },
          { name: "Café Expresso Bio (Torréfaction Locale)", price: "3.50€" },
          { name: "Thé Vert Maison aux Agrumes", price: "5.50€" },
          { name: "Eau Micro-filtrée Gazeuse (75cl)", price: "4.00€" }
        ]
      }
    ]
  },
  description: "Le Richer est une institution de la rue Richer, prisé pour sa bistronomie créative et son atmosphère infatigable. Ce lieu, qui ne prend pas de réservations, incarne parfaitement l'esprit des Grands Boulevards : une cuisine exigeante dans un cadre décontracté et authentique. Les plats, renouvelés au fil des saisons, marient technique française et touches modernes. Que ce soit pour un déjeuner d'affaires ou un dîner entre amis, Le Richer offre une expérience constante où le produit est roi.",
  insider_tip: "• **Sans Réservation** : L'astuce est de venir dès l'ouverture ou après 21h30 pour éviter l'attente.\n• **Cochon Confit** : Leur éffiloché est un classique indémodable, à goûter absolument.\n• **Vins Bien Pensés** : La carte des vins, axée sur la biodynamie, recèle de pépites à prix doux, n'hésitez pas à demander conseil au sommelier.",
  specials: {
    cuisine: ["Bistronomie créative de saison", "Produits du terroir ultra-frais", "Cuisine française moderne"],
    drinks: ["Belle sélection biodynamique", "Vins de vignerons indépendants", "Boissons artisanales"],
    must_eat: "L'éffiloché de Cochon Confit (27€) : une explosion de saveurs fondantes, marque de fabrique de la maison.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH7z-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEnX-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGkY-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default richer;
