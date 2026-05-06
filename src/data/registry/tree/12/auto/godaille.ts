import { SurgicalPlace } from "../../../type-definition";

export const godaille: SurgicalPlace = {
  id: "poi-godaille",
  slug: "godaille",
  name: "Godaille",
  category: "restaurant",
  subcategory: ['bistrot'],
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
          { name: "Croque-monsieur forestier à la truffe d’été", price_cents: 1300 },
          { name: "Velouté de Potiron & éclats de châtaignes", price_cents: 900 },
          { name: "Terrine de Campagne artisanale", price_cents: 1000 },
          { name: "Burrata crémeuse & pesto de basilic", price_cents: 1500 },
          { name: "Fritures d’Éperlans & sauce tartare", price_cents: 1150 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Saison (Plats)",
        items: [
          { name: "Le Burger Godaille (Comté 18 mois, oignons)", price_cents: 2100, is_highlight: true },
          { name: "Pâtes à la crème de truffe d’été & parmesan", price_cents: 2400, is_highlight: true },
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
          { name: "Assiette de Fromages affinés d’Aligre", price_cents: 1300 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave sélectionnée (Boissons)",
        items: [
          { name: "Verre de Côtes du Rhône ’Vieilles Vignes'", price_cents: 750, is_highlight: true },
          { name: "Verre de Petit Chablis ’Mineral'", price_cents: 950 },
          { name: "Bouteille Morgon ’Marcel Lapierre'", price_cents: 4500 },
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
          { name: "Limonade Artisanale ’La Parisienne'", price_cents: 600 },
          { name: "Eau plate/gazeuse filtrée (75cl)", price_cents: 450 },
          { name: "Café Espresso Terres de Café", price_cents: 280 },
          { name: "Grand Café Crème", price_cents: 500 },
          { name: "Thé Bio Mariage Frères", price_cents: 650 }
        ]
      }
    ]
  },
  description: "Godaille est l’adresse néo-bistrot par excellence du quartier Aligre dans le 12ème. Derrière une façade discrète se cache une cuisine de cœur, généreuse et précise, qui sublime les classiques français : œufs mimosa à la ventrèche, os à moelle gratiné et riz au lait onctueux. L'ambiance y est conviviale, portée par une sélection pointue de vins de vignerons et un sourcing impeccable issu du marché voisin.",
  insider_tip: "• **Os à Moelle** : C’est l’un des meilleurs du quartier, parfaitement gratiné et servi avec un pain de campagne toasté.\n• **Marché d’Aligre** : Idéal après une balade dominicale au marché pour un déjeuner réconfortant.\n• **Réservation** : Le lieu est souvent complet, pensez à réserver surtout pour le dîner du week-end.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vins de Vignerons", "Bières Artisanales", "Sélection Aligre"],
    must_eat: "Cuisine de bistrot. Les Œufs Mimosa à la ventrèche fumée (8.50€) : un classique revisité avec une pointe de fumé qui change tout. Simple et efficace.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/godaille/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Les Œufs Mimosa à la ventrèche fumée (8.50€) : un classique revisité avec une pointe de fumé qui change tout. Simple et efficace.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default godaille;
