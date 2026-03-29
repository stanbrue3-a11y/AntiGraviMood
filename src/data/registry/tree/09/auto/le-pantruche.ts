import { SurgicalPlace } from "../../../type-definition";

export const le_pantruche: SurgicalPlace = {
  id: "poi-le-pantruche",
  slug: "le-pantruche",
  name: "Le Pantruche",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "retro-chic", "terroir"],
  location: {
    address: "3 Rue Victor Massé, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.880491,
    lng: 2.337775,
    nearest_metro: "Pigalle",
    metro_lines: [2, 12],
    google_id: "ChIJn_N8QCxVu5kcRsvXJ_CQNDvY" // Check google_id during sync
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi-vendredi: 12:30–14:00, 19:30–22:30; Fermé samedi-dimanche",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lapantruchoise.com/le-pantruche/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 28, // Prix médian des plats à la carte
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes Victor Massé (Entrées)",
        items: [
          { name: "Ravioles de Pieds de Moutons & Épinards", price_cents: 1500, is_highlight: true },
          { name: "Carpaccio de Poulpe de Roche & Agrumes", price_cents: 1600, is_highlight: true },
          { name: "Porc confit & Artichauts Barigoule", price_cents: 1400 },
          { name: "Pressé de Gésiers et Cuisses de Canard", price_cents: 1350 },
          { name: "Œuf Mollet & Crème de Champignons de Paris", price_cents: 1200, is_highlight: true },
          { name: "Terrine de Foie Gras Maison au poivre", price_cents: 1800 },
          { name: "Velouté de Saison & Éclats de Châtaignes", price_cents: 1100 },
          { name: "Huîtres Fines de Claire n°3 (x6)", price_cents: 1700 }
        ]
      },
      {
        category_type: "main",
        display_label: "Signatures & Traditions (Plats)",
        items: [
          { name: "Côte de Cochon fermière rôtie au sautoir", price_cents: 2900, is_highlight: true },
          { name: "Filet de Canette rôti, Sauce aux fruits rouges", price_cents: 2700, is_highlight: true },
          { name: "Poisson du jour à la plancha, Beurre blanc", price_cents: 2600 },
          { name: "Épaule d'Agneau braisée au Romarin", price_cents: 2800, is_highlight: true },
          { name: "Ris de Veau à l'ancienne & Champignons", price_cents: 3600, is_highlight: true },
          { name: "Parmentier de Queue de Bœuf au vin rouge", price_cents: 2400 },
          { name: "Risotto aux Herbes fraîches & Parmesan", price_cents: 2200 },
          { name: "Onglet de Bœuf Sauce Échalote", price_cents: 2650 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pomme de Terre mythique au beurre", price_cents: 700, is_highlight: true },
          { name: "Légumes du Marché glacés au jus", price_cents: 750 },
          { name: "Frites fraîches Maison double cuisson", price_cents: 650 },
          { name: "Riz Pilaf parfumé aux épices douces", price_cents: 600 },
          { name: "Petite Salade Mesclun bien assaisonnée", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Soufflés & Douceurs (Desserts)",
        items: [
          { name: "Soufflé au Grand Marnier (Le Légendaire)", price_cents: 1200, is_highlight: true },
          { name: "Chou à la Crème Vanillée & Praliné Maison", price_cents: 1000, is_highlight: true },
          { name: "Pressé de Pomme au Sureau & Ganache Chocolat", price_cents: 1050 },
          { name: "Tarte Tatin Pomme-Coing & Crème Fraîche", price_cents: 1100 },
          { name: "Riz au Lait & Caramel Beurre Salé", price_cents: 950 },
          { name: "Plateau de Fromages affinés Sélection", price_cents: 1350 },
          { name: "Sorbet Citron-Basilic (3 boules)", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Sélection de la Sommelière (Boissons)",
        items: [
          { name: "Verre de Côtes-du-Rhône Jean-Luc Colombo", price_cents: 700, is_highlight: true },
          { name: "Bouteille de Gringet AOP Savoie Rare", price_cents: 9500 },
          { name: "Bouteille de Morgon 3.14 Jean Foillard", price_cents: 14200 },
          { name: "Verre de Marsannay Sylvain Pataille", price_cents: 1200 },
          { name: "Jus de Fruits artisanaux Sélection", price_cents: 750 },
          { name: "Eau micro-filtrée Le Pantruche (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso de spécialité Lomi", price_cents: 350 }
        ]
      }
    ]
  },
  description: "Le Pantruche est l'institution indétrônable du 9ème arrondissement. Dans un décor rétro-chic aux accents de bistrot des années 50, le chef Franck Baranger signe une cuisine bourgeoise modernisée avec un brio éclatant. Récompensé par un Bib Gourmand, le restaurant se distingue par sa régularité et ses plats signatures, comme l'inoubliable soufflé au Grand Marnier ou la côte de cochon fondante. C'est l'adresse idéale pour retrouver l'âme gourmande de Paris dans une ambiance chaleureuse et élégante.",
  insider_tip: "• **Le Soufflé** : C'est la spécialité incontestée de la maison. Léger et parfaitement équilibré, il justifie à lui seul la visite.\n• **Le Midi** : La formule déjeuner à 25€ est une aubaine pour les gourmets cherchant l'excellence à prix serré.\n• **L'Ambiance** : Privilégiez les banquettes pour profiter pleinement de l'atmosphère feutrée et conviviale du lieu.",
  specials: {
    cuisine: ["Bistronomie bourgeoise", "Soufflé Grand Marnier culte", "Produits du terroir"],
    drinks: ["Vins d'auteurs & biodynamiques", "Grands crus confidentiels", "Sélection de spiritueux"],
    must_eat: "Le Soufflé au Grand Marnier (12€) : une prouesse de légèreté et de gourmandise, véritable totem de la gastronomie parisienne.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFs-quV2l56T3LR7nleAV2qXXxpa8wbXRqt1oBWxao4Xfqm0yeXv6I3UGHaq4-TcJ3_-5N4BQ8R9WZDGwYBhtG53fU7jqL6YxiduVGsBglPr32daVne49MuF3M-yF5cAsMyV53Hxs9XNFR792QeRwJzd-JuiRC5mvJkedeT1JVCePDoP7f5ARavbBLdwdOFw_PBU-_Fx_wKMKC047djGqiVN3zmyfmrn2ZBAI2RUYnDBTCO_S-3Q1G7-l4vUTxzFEHJiZAZ3ILtOuAoKpql-ZoB7Mri2l9xhl5aHSMsOgrnPA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERo-GVR9JHcRz1wKYYxsC2pU8-JzW1dwBv7xw9N3aiSlG2EbKN_UqEDlkBqT-RbDYZdu71snTmOJ9JdIn0Kc6F9mxYaFqDOG45YyHNbLyrEAt_SurzKrIEeTdf2cVXgzStF2fdnHbZ2T44wE6wq3yHX7JaUSqL2ClbOTySqDIyWOjkdnLmcKRqqE2WWdSowPflmqEZDSwCyH4fsFGOB6bNZBRmf6zGL6BOgL5GfT5J6KJzO8ARJw5f3T-hSM4FBiZwgQEMzcFfR8sP4KVr2G2CkO9It4ZFKrP6rDnP3I2KOg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLBCOW6Sq5vNaiHS8f8XlcOYcGTHdtX451bzxACAweCwwyQ_jUDSnNlf2E-WXPtUfqxPFPiNwyufOn4031K4QeEZmH37xtq0AKFdC61iJezLd8K_RaDzvLYMDtEq0VinAee3jscGSMB5flcM0eDxwG-X5ILnAikFXBxUBTYwRepsu13y7kbsQoGl5tCuT9tCBiEdU9mgE5SFrRKRMbAA89sL4EMNPDqMWbTuXkGALmGISyMrnC-DbZ_qiVSac27dsqx51NHj2rCAnYdGX6lf0ino3169cL10_Jm1lQEXT54QuhY-HEdyPgLJGpVjWIlA4LThiZrJp5r0G61sE4ZGXb4B2DoqLX9hDDJiKq84ApLJ0EyhVKaMjrw5Tv3uAQLY0Vedjccv3d8yE7y-86LI3CPxRhiJBKCcBTVX55qaxiDAI&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default le_pantruche;
