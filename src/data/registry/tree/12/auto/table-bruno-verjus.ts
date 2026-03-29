import { SurgicalPlace } from "../../../type-definition";

export const table_bruno_verjus: SurgicalPlace = {
  id: "poi-table-bruno-verjus",
  slug: "table-bruno-verjus",
  name: "Table Bruno Verjus",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "3 R. de Prague, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.84880159999999,
    lng: 2.3758487,
    nearest_metro: "Ledru-Rollin",
    metro_lines: [8],
    google_id: "ChIJoSONvAVy5kcRiFFvBHOUYv8"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 13:30, 19:30 – 21:00 | mercredi: 12:00 – 13:30, 19:30 – 21:00 | jeudi: 12:00 – 13:30, 19:30 – 21:00 | vendredi: 12:00 – 13:30, 19:30 – 21:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.table.paris/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 350,
    is_free: false,
    dish_price: 240, // Menu "Couleurs du Jour" au déjeuner
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Menus & Découvertes (Plats)",
        items: [
          { name: "Menu 'Couleurs du Jour' (Déjeuner)", price_cents: 24000, description: "Séquences créatives selon arrivage.", is_highlight: true },
          { name: "Expérience 'Tasting Journey' (Dîner)", price_cents: 40000, description: "L'immersion totale en 15+ étapes.", is_highlight: true },
          { name: "Accord Mets & Vins 'Découverte'", price_cents: 15000 },
          { name: "Accord Mets & Vins 'Prestige'", price_cents: 30000 },
          { name: "Menu Végétarien (Sur demande 48h)", price_cents: 25000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Séquences Signature (Plats)",
        items: [
          { name: "Grosse Crevette 'Carabinero' mi-cuite", price_cents: 0, is_highlight: true },
          { name: "Sardines de Saint-Gilles, citron confit", price_cents: 0, is_highlight: true },
          { name: "Huîtres Utah Beach, cervelle de veau", price_cents: 0 },
          { name: "Homard de casier, beurre de corail", price_cents: 0 },
          { name: "Rouget de roche grillé sur peau", price_cents: 0 },
          { name: "Poularde Gauloise rôtie en patience", price_cents: 0 },
          { name: "Turbot sauvage & asperges de Mallemort", price_cents: 0 },
          { name: "Ris de Veau fumé au foin", price_cents: 0 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Créations (Desserts)",
        items: [
          { name: "Tartelette Chocolat, sel & caviar Ossetra", price_cents: 0, is_highlight: true },
          { name: "Madeleines tièdes à l'huile d'olive de Kardamili", price_cents: 0 },
          { name: "Fraises des bois, crème de cameline", price_cents: 0 },
          { name: "Glace au lait cru & miel de forêt", price_cents: 0 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Bruno (Boissons)",
        items: [
          { name: "Verre de Vin 'Arbois' (Sélection)", price_cents: 1800, is_highlight: true },
          { name: "Verre de Meursault 'Prestige'", price_cents: 3500 },
          { name: "Champagne Jacquesson (Verre)", price_cents: 2500 },
          { name: "Bouteille Collection Jura (à partir de)", price_cents: 9500 },
          { name: "Vin de Paille (Digestif)", price_cents: 2200 },
          { name: "Cognac Grande Champagne Heritage", price_cents: 2800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons & Spécialités (Boissons)",
        items: [
          { name: "Eau micro-filtrée Table (75cl)", price_cents: 600 },
          { name: "Infusion de plantes fraîches", price_cents: 800 },
          { name: "Café de Terroir torréfié minutieusement", price_cents: 600, is_highlight: true },
          { name: "Jus de Légumes 'Minute'", price_cents: 1200 },
          { name: "Kombucha Grand Cru", price_cents: 1400 },
          { name: "Nectar de fruits Alain Milliat", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Table de Bruno Verjus est une expérience gastronomique radicale située à Aligre. Classé parmi les meilleurs restaurants du monde (Top 10 World's 50 Best), le chef y pratique une cuisine de l'instant, respectant l'intégrité absolue des produits sourcés en direct des meilleurs producteurs. Le comptoir en étain permet d'observer la précision chirurgicale des cuissons millimétrées.",
  insider_tip: "• **Le Comptoir** : Réservez absolument au comptoir pour vivre le spectacle total de la cuisine ouverte.\n• **Homard mi-cuit** : Si la séquence du homard est proposée, c'est un passage obligé, considéré comme l'un des meilleurs au monde.\n• **Accord Vins** : Laissez-vous guider par les accords, la cave est l'une des plus intelligentes de Paris sur les blancs et les vins du Jura.",
  specials: {
    cuisine: ["Crevette Carabinero", "Homard mi-cuit", "Cuisine de l'instant"],
    drinks: ["Vins du Jura rares", "Accords Prestige", "Champagnes de vignerons"],
    must_eat: "La crevette Carabinero, à peine saisie, servie avec une réduction de ses têtes. Un choc gustatif pur.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFUJReXsVdZa4p-FPhHskz8kxz2SXUdavYuLTMNIFODQPHbAWqPYMuG62iV8cwKz0BQ6lN6JB5xskkduS8_69ExknoD_LbXEYZfjUnHG-GDTc9QddvMZSf4xITqzH9F1xkvpjgdztA7EExLBwoeqfG2FEQKM0oE78TgDnu0wjEeAaovBPLazw3PKyoSHNX9U0PNxLCt2o0rYSHGLLd1y-PuVjhGkkBXhU911eozYOO2pn7Jo7_i1gFgsXZzKAomoPY4PyCB4j602eamqzZa9mb6caXmsG9d4vhRjwDjONdDFQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEF-NHcj1Xzy-Bkn1sW3CeZ71ns8sX__V7ZukbURjDxtvMioD3pV2s0dstwlLe3RgLS8wkzoY0W84gMK3glf4sAQVMGzh2aP5Gt1tR0CWpLcA17-u-_NWEf9JMyKwoDmZPv2ApULqvaJoDK-4AcusUocnRO4JzLfhEneH_1crgd0UUqOmk6ZdDQHmKLin9J1ln7QS8yyimQlHGhcXd32o6zO6XFH11e8dGE1wmIlWwaqAnHF4Dfn5ABrFQu8JiYlj0tlwjH7fDGmkhSsTGiF5QC26T-pIRpB_ZHWHLty01tcBg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEE6s_sVsSmB1qgrLjelrvBnSgtjLwOBaU3WPtRJJ_GWDFPXQTkUbkuwQbldS5RxKnzxsgJiFOY0yyERjnQ6e1VsVroGl_vLbHv4SwnVxbHQNaOTB7R0Q5uEZiBg3L-5sYxZSY-eimu9uVPeYnVRaPxklQaO3kjcBcKTIupmvycRztBtKnaMbf-9XmXMXjONXeIkRxfd2t3EbBSRhsKbY-8iyLkWT0aJ5xCXsHTc_eD_BhYSHbhCBhtFVghUo7P0Z5vHHpFrnak4s5Zp4BYCx3mJt5dhqlNLMA0pGWNNQgThyA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default table_bruno_verjus;
