import { SurgicalPlace } from "../../../type-definition";

export const godaille: SurgicalPlace = {
  id: "poi-godaille",
  slug: "godaille",
  name: "Godaille",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "9 Rue Antoine Vollon, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.8507158,
    lng: 2.3767922,
    nearest_metro: "Ledru-Rollin",
    metro_lines: [8],
    google_id: "ChIJ8bdBhIFz5kcRZFwmIDOPVnM"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:15 – 14:00, 19:15 – 22:00 | mercredi: 12:15 – 14:00, 19:15 – 22:00 | jeudi: 12:15 – 14:00, 19:15 – 22:00 | vendredi: 12:15 – 14:00, 19:15 – 22:00 | samedi: 12:15 – 14:00, 19:15 – 22:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurantgodaille.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 40,
    is_free: false,
    dish_price: 22, // Plat principal médian (Burger/Pasta)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées de Partage & Tradition (Entrées)",
        items: [
          { name: "Œufs Mimosa à la ventrèche fumée", price_cents: 850, is_highlight: true },
          { name: "Os à moelle gratiné, gros sel & pain grillé", price_cents: 1200, is_highlight: true },
          { name: "Carpaccio de Bar aux agrumes & aneth", price_cents: 1450 },
          { name: "Croque-monsieur forestier à la truffe d'été", price_cents: 1300 },
          { name: "Velouté de Potiron & éclats de châtaignes", price_cents: 900 },
          { name: "Terrine de Campagne artisanale", price_cents: 1000 },
          { name: "Burrata crémeuse & pesto de basilic", price_cents: 1500 },
          { name: "Fritures d'Éperlans & sauce tartare", price_cents: 1150 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Saison (Plats)",
        items: [
          { name: "Le Burger Godaille (Comté 18 mois, oignons)", price_cents: 2100, is_highlight: true },
          { name: "Pâtes à la crème de truffe d'été & parmesan", price_cents: 2400, is_highlight: true },
          { name: "Cabillaud vapeur, beurre blanc & mousseline", price_cents: 2500 },
          { name: "Côte de Bœuf maturée (pour 2 pers.)", price_cents: 7200 },
          { name: "Échine de Cochon braisée, jus au thym", price_cents: 2250 },
          { name: "Suprême de Volaille jaune, petits légumes", price_cents: 2300 },
          { name: "Poisson de ligne selon arrivage", price_cents: 2600 },
          { name: "Risotto crémeux aux champignons des bois", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Gourmandises & Fins de Repas (Desserts)",
        items: [
          { name: "Riz au lait onctueux, Vanille de Tahiti", price_cents: 900, is_highlight: true },
          { name: "Fondant au Chocolat noir, glace vanille", price_cents: 1000, is_highlight: true },
          { name: "Tarte fine aux Pommes du Limousin", price_cents: 1100 },
          { name: "Île flottante à la praline rose", price_cents: 850 },
          { name: "Profiteroles minute, sauce chocolat chaud", price_cents: 1200 },
          { name: "Assiette de Fromages affinés d'Aligre", price_cents: 1300 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave sélectionnée (Boissons)",
        items: [
          { name: "Verre de Côtes du Rhône 'Vieilles Vignes'", price_cents: 750, is_highlight: true },
          { name: "Verre de Petit Chablis 'Mineral'", price_cents: 950 },
          { name: "Bouteille Morgon 'Marcel Lapierre'", price_cents: 4500 },
          { name: "Verre de Vin Nature du moment", price_cents: 850, is_highlight: true },
          { name: "Coupe de Champagne Brut", price_cents: 1450 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons & Caféterie (Boissons)",
        items: [
          { name: "Demi de Blonde (Pression)", price_cents: 550 },
          { name: "Pinte de Pale Ale Artisanale", price_cents: 950 },
          { name: "Limonade Artisanale 'La Parisienne'", price_cents: 600 },
          { name: "Eau plate/gazeuse filtrée (75cl)", price_cents: 450 },
          { name: "Café Espresso Terres de Café", price_cents: 280 },
          { name: "Grand Café Crème", price_cents: 500 },
          { name: "Thé Bio Mariage Frères", price_cents: 650 }
        ]
      }
    ]
  },
  description: "Godaille est l'adresse néo-bistrot par excellence du quartier Aligre dans le 12ème. Derrière une façade discrète se cache une cuisine de cœur, généreuse et précise, qui sublime les classiques français : œufs mimosa à la ventrèche, os à moelle gratiné et riz au lait onctueux. L'ambiance y est conviviale, portée par une sélection pointue de vins de vignerons et un sourcing impeccable issu du marché voisin.",
  insider_tip: "• **Os à Moelle** : C'est l'un des meilleurs du quartier, parfaitement gratiné et servi avec un pain de campagne toasté.\n• **Marché d'Aligre** : Idéal après une balade dominicale au marché pour un déjeuner réconfortant.\n• **Réservation** : Le lieu est souvent complet, pensez à réserver surtout pour le dîner du week-end.",
  specials: {
    cuisine: ["Néo-Bistrot Généreux", "Os à Moelle", "Riz au Lait Culte"],
    drinks: ["Vins de Vignerons", "Bières Artisanales", "Sélection Aligre"],
    must_eat: "Les Œufs Mimosa à la ventrèche fumée (8.50€) : un classique revisité avec une pointe de fumé qui change tout. Simple et efficace.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEG4c-wz8XJOfmmuSMjegmgTsxfIPC4G4j58ZrAZ9FIN5T1zZNO_DvApXE00p_L4xt02Ft93VrdQq8OvLf7HVQ4EwzXwv5h2IO-RJ0ET71CJ7Ko3vYham-A2tQYEVI3U22XFZHY8bb2Lgef6QoV-1nb2OSo35_EetJNT5-i1UA5BQesvKpTfxuIEHUZuTDOtU2W1XwUmC6TgmUcyD5yVvESifKjK5PjLdpdiTNfpfqkNWutYg5_vBcZAoj3Y8zZucZqIWfwZRn1Zh01CE28GMNu0Ut6v60oYLDfzLRWubPeioQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGC1MqjoHbhTS6knG0Ez9SOQQcGCwlVsbkrVoWp1IJQh30zB7xlxbLjzCDSpTIpA487WgFXkRnk9v8koaJxXlY16UB4jWBRiTqxYX0Q-0PlFGg_Tb6Jt0IL8thgR6T291WvQyqUXZJ_3T2fVPoFPn2cgT5cul9hv81plnqRtP7bkXSBss4rPFKLUPP1-TowrcqQvzkm49kbTADAQzDxD4mmO_xhQTqQdhZpt2ObN0hyGUYTl_uBNXJRQCCZYRK4um6rt-DR27TD8DPs_ePgCA3_NwvVS88m_dRuAQOgi2r5Dw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFIlnTqc0xQXeT8d3OJC5ntgcpoRPcKdfiIRnRpNRKTTAVJKPMJ2Pajh0Z4J7nX5BZZzInRLFx9Q4nYw42AI34ZwRKub7KPrMbrZNCxZr83a1P2e9TpNiz_tQ4gg5SOzqy58pwrem1mV5NBnQRnwZoo1jOZRqpb_UBGXnIjYWHFozYmeTFTco31ZUrKIq2n-yeH9WhlTzIKioN4qItAhj1YIIqB2HbfC52-Wnfxie5pU8uq-A15ImQJTUWJD90UWSmv93cThrKhBT8MmO3NmkygxrKea1Mlb3UCfTUl6FZ-rIw2YajWUyYl65RC-NBXiebfRVs94Cg8lX-SsZRCRuZQrAxdlXBICtdyfbSGVCR7BXcmA0Not5Qshl38Gz05bI8EhhDQLPxNpA5HhObkAh4JoapEzpROSQgx11VespJ_e8eJ8mxxuqqcXgwoMeql&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.7
};

export default godaille;
