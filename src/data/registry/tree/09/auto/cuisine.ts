import { SurgicalPlace } from "../../../type-definition";

export const cuisine: SurgicalPlace = {
  id: "poi-cuisine",
  slug: "cuisine",
  name: "Cuisine",
  category: "restaurant",
  subcategory: ["neobistrot", "fusion-japonaise", "vin-naturel", "assiettes-partage", "produits-bio"],
  location: {
    address: "50 Rue Condorcet, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8794821,
    lng: 2.3438428,
    nearest_metro: "Anvers",
    metro_lines: [2],
    google_id: "ChIJW5pS_0Zu5kcReoDk79o_X6o"
  },
  moods: {
    chill: 80,
    festif: 60,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi-vendredi: 12:00–14:00, 19:30–22:00 | samedi-dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurantcuisine.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 24, // Prix moyen plat
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées de Marché",
        items: [
          { name: "Xio Maï à l'Oursin, Châtaigne & Émulsion", price_cents: 1200, is_highlight: true },
          { name: "Ormeau & Os à Moelle, Sauce Bordelaise au Cacao", price_cents: 1500, is_highlight: true },
          { name: "Joue de Bœuf en Bourguignon & Oignons de Roscoff", price_cents: 1350 },
          { name: "Asperges Blanches, Sabayon Miso & Sésame", price_cents: 1100, is_highlight: true },
          { name: "Thon Rouge en Carpaccio & Algues Kombu", price_cents: 1450 },
          { name: "Tartare de Veau de Lait & Huître Creuse", price_cents: 1400 },
          { name: "Ris de Veau Croustillant & Jus Corsé au Xérès", price_cents: 1600, is_highlight: true },
          { name: "Poireaux Brûlés & Crème de Sésame Noir", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Fusion (Franco-Japonais)",
        items: [
          { name: "Demi-Pigeon de Normandie façon Karaage", price_cents: 2800, is_highlight: true },
          { name: "Magret de Canard aux Cerises & Épices Douces", price_cents: 2600 },
          { name: "Bar de Ligne Grillé & Légumes Bio du Moment", price_cents: 2750, is_highlight: true },
          { name: "Dos de Cabillaud de Pêche Durable & Yuzu", price_cents: 2500 },
          { name: "Filet de Bœuf Mariné & Mousseline de Céleri", price_cents: 2900, is_highlight: true },
          { name: "Poulpe Braisé, Kimchi Maison & Riz Noir", price_cents: 2450, is_highlight: true },
          { name: "Saint-Jacques Poêlées, Sarrasin & Beurre Blanc", price_cents: 2600 },
          { name: "Pluma Ibérique Grillée & Sauce Ponzu", price_cents: 2550 }
        ]
      },
      {
        category_type: "sharing",
        display_label: "Petites Assiettes à Partager",
        items: [
          { name: "Croquettes de Poisson & Mayonnaise Wasabi", price_cents: 950, is_highlight: true },
          { name: "Edamame au Sel de Mer & Piment", price_cents: 600 },
          { name: "Tempura de Légumes de Saison & Sauce Tentsuyu", price_cents: 1100 },
          { name: "Gyoza Maison au Porc Fermier (x5)", price_cents: 1050, is_highlight: true },
          { name: "Sashimi de la Pêche du Jour (Sélection)", price_cents: 1400 },
          { name: "Tataki de Bœuf & Échalotes Confites", price_cents: 1300, is_highlight: true },
          { name: "Arancini à la Japonaise (Riz Sushi & Miso)", price_cents: 850 },
          { name: "Plateau de Fromages de Producteurs Bio", price_cents: 1200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts de Saison",
        items: [
          { name: "White Chocolate & Matcha Fondant", price_cents: 1000, is_highlight: true },
          { name: "Ganache Chocolat Noir & Éclats de Cacao", price_cents: 950 },
          { name: "Tartelette aux Fruits de Saison (Artisanale)", price_cents: 900 },
          { name: "Sorbet Maison (Citron-Gingembre)", price_cents: 750, is_highlight: true },
          { name: "Moelleux à la Châtaigne & Crème Fouettée", price_cents: 900 },
          { name: "Mousse Yuzu, Meringue & Menthe", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Vins Naturels & Bulles (Boissons)",
        items: [
          { name: "Verre de Vin Blanc Nature (Sélection Loire)", price_cents: 800, is_highlight: true },
          { name: "Verre de Vin Rouge Bio (Sélection Bourgogne)", price_cents: 900 },
          { name: "Pétillant Naturel 'Pet-Nat' (Bouteille)", price_cents: 3800, is_highlight: true },
          { name: "Sake Artisanal Junmai (Verre)", price_cents: 1100 },
          { name: "Jus de Fruits Bio Pressé à Froid", price_cents: 650 }
        ]
      }
    ]
  },
  description: "Cuisine est un néobistrot d'auteur niché rue Condorcet, où la rigueur japonaise rencontre la gourmandise française. Chaque assiette est un voyage chromatique et gustatif, portée par des produits bios, issus de l'élevage fermier ou de la pêche durable. Le chef Taketo Matsumoto y insuffle une précision millimétrée, de l'ormeau à l'os à moelle signature au demi-pigeon façon karaage. Le cadre, aux accents rétro des années 60, invite à la confidence, tandis que la carte des vins naturels escorte avec brio cette partition culinaire unique et audacieuse.",
  insider_tip: "• **L'Ormeau** : C'est l'un des rares endroits à Paris où l'on travaille l'ormeau avec une telle maestria, sa sauce bordelaise au cacao est phénoménale.\n• **Vins Naturels** : Laissez-vous guider par Benoit pour les accords, leur cave à manger regorge de flacons confidentiels.\n• **Petit Comité** : Le lieu est intimiste, privilégiez les réservations pour le dîner car les places au comptoir s'arrachent vite.",
  specials: {
    cuisine: ["Bistronomie fusion Franco-Japonaise", "Produits biologiques et pêche durable", "Menu de marché créatif"],
    drinks: ["Belle sélection de vins naturels", "Sakes artisanaux Junmai", "Pétillants naturels (Pet-Nat)"],
    must_eat: "L'Ormeau à l'os à moelle (15€) : une association terre-mer audacieuse avec une sauce bordelaise au cacao inattendue.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEE-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEG-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default cuisine;
