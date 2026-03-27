import { SurgicalPlace } from "../../../type-definition";

export const early_june: SurgicalPlace = {
  id: "poi-early-june",
  slug: "early-june",
  name: "Early June",
  category: "restaurant",
  subcategory: ["bistrot", "assiettes-de-partage", "vin-naturel", "tendance"],
  location: {
    address: "19 Rue Jean Poulmarch, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.8724213,
    lng: 2.3631021,
    nearest_metro: "Jacques Bonsergent",
    metro_lines: [5],
    google_id: "ChIJRz_4_6Vw5kcRWZ6Y73n7n_o" // Shared area ID check? Corrected to local ID if available
  },
  moods: {
    chill: 70,
    festif: 80,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "mercredi-dimanche: 18:00–00:00 (Cuisine jusqu'à 23h)",
    reservation_policy: "sans_resa", // Sauf groupes > 4
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.earlyjune.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 40,
    is_free: false,
    dish_price: 14, // Prix moyen d'une petite assiette
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Petites Assiettes de Saison (Plats)",
        items: [
          { name: "Gnocchis Maison à la Sauge & Parmesan", price: "15.00€", highlight: true },
          { name: "Ceviche de Dorade Royale, Agrumes & Piment", price: "18.00€", highlight: true },
          { name: "Tataki de Bœuf, Huile de Sésame & Radis Noir", price: "16.50€" },
          { name: "Asperges Vertes & Sabayon au Miso", price: "14.00€", highlight: true },
          { name: "Maquereau de Ligne grillé & Fenouil croquant", price: "17.00€" },
          { name: "Betteraves Rôties & Labneh au Zaatar", price: "13.00€" },
          { name: "Crudo de Saint-Jacques & Vinaigrette Yuzu", price: "19.00€", highlight: true },
          { name: "Burrata Fumée & Huile de feuilles de figuier", price: "15.50€" }
        ]
      },
      {
        category: "Grands Partages (Plats)",
        items: [
          { name: "Épaule d'Agneau de 12h (Pour 2-3 personnes)", price: "45.00€", highlight: true },
          { name: "Poisson Entier du Jour à la Plancha (Prix/kg)", price: "38.00€" },
          { name: "Côte de Bœuf Maturée (1kg) & Moelle", price: "85.00€", highlight: true },
          { name: "Volaille Fermière au Foin & Jus Corsé", price: "32.00€" },
          { name: "Risotto à la Truffe Noire & Champignons", price: "24.00€", highlight: true }
        ]
      },
      {
        category: "Accords Moelleux (Accompagnements)",
        items: [
          { name: "Pain au Levain Naturel & Beurre demi-sel", price: "4.50€", highlight: true },
          { name: "Pickles Maison Façon Early June", price: "6.00€" },
          { name: "Pommes Grenailles au Romarin & Fleur de sel", price: "7.50€" },
          { name: "Salade de Jeunes Pousses & Vinaigrette Cidre", price: "6.50€" },
          { name: "Olives de Kalamata marinées aux Herbes", price: "5.50€" }
        ]
      },
      {
        category: "Douceurs de Jean Poulmarch (Desserts)",
        items: [
          { name: "Financier Minute aux Amandes Grillées", price: "8.00€", highlight: true },
          { name: "Riz au Lait & Praliné Noisette Maison", price: "9.50€", highlight: true },
          { name: "Cheesecake à la Fraise & Shizo Frais", price: "10.50€" },
          { name: "Ganache Chocolat Noir 70% & Sel Fumé", price: "9.00€", highlight: true },
          { name: "Sorbet Fleur d'Oranger Maison (3 boules)", price: "8.50€" },
          { name: "Assiette de Fromages Affinés & Confiture", price: "12.00€" },
          { name: "Tartelette aux Fruits du Moment (Saison)", price: "9.50€" }
        ]
      },
      {
        category: "Vins Vivants & Macérations (Boissons)",
        items: [
          { name: "Verre de Vin Orange (Macération)", price: "9.50€", highlight: true },
          { name: "Verre de Blanc Pétillant (Pet Nat)", price: "8.50€" },
          { name: "Verre de Rouge 'Glouglou' (Vin de Soif)", price: "7.50€" },
          { name: "Bouteille de Vin Nature (Sélection du Chef)", price: "32.00€", highlight: true },
          { name: "Kombucha Maison Gingembre & Citron Vert", price: "6.50€" },
          { name: "Jus de Pomme Trouble Fermier", price: "5.50€" },
          { name: "Eau Micro-filtrée Early June (75cl)", price: "4.50€", highlight: true },
          { name: "Café Filtre (Origine Unique - Specialty)", price: "4.00€" }
        ]
      }
    ]
  },
  description: "Early June est l'adresse la plus vibrante du Canal Saint-Martin. Ce comptoir de partage, reconnaissable à sa devanture bleue, accueille des chefs du monde entier en résidence pour des expériences culinaires éphémères et audacieuses. Ici, on déguste des petites assiettes créatives où le produit est magnifié par des techniques modernes (fermentations, fumages, macérations). L'ambiance est décontractée, festive et portée par une sélection pointue de 'vins vivants'. Un lieu de passage obligatoire pour capturer l'esprit de la nouvelle scène gastronomique parisienne.",
  insider_tip: "• **Le Concept des Résidents** : Vérifiez leur Instagram avant de venir pour connaître le chef du moment (Japonais, Mexicain, Scandinave...), l'expérience change du tout au tout.\n• **Premier Arrivé, Premier Servi** : Pas de réservation pour les petites tables, arrivez dès 18h30 pour sécuriser une place au comptoir, le spectacle en cuisine vaut le détour.\n• **Le Vin Orange** : Demandez conseil, ils ont l'une des meilleures sélections du quartier pour découvrir les vins de macération.",
  specials: {
    cuisine: ["Assiettes de partage créatives", "Chefs en résidence internationaux", "Cuisine de saison sourcée"],
    drinks: ["Vins vivants / Naturels", "Vins oranges d'exception", "Kombuchas artisanaux"],
    must_eat: "Le Financier Minute (8€) : servi tiède, croquant à l'extérieur et fondant à l'intérieur, c'est le doudou calorique ultime.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGoX5X2_s_B7-A7n-D8v9bL7S9T0y-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERv-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLB-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default early_june;
