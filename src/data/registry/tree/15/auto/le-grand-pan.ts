import { SurgicalPlace } from "../../../type-definition";

export const le_grand_pan: SurgicalPlace = {
  id: "poi-le-grand-pan",
  slug: "le-grand-pan",
  name: "Le Grand Pan",
  category: "restaurant",
  subcategory: ["bistrot", "viande", "boucherie", "traditionnel"],
  location: {
    address: "20 Rue Rosenwald, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8330814,
    lng: 2.3057029,
    nearest_metro: "Plaisance",
    metro_lines: [13],
    google_id: "ChIJBecyi0Zw5kcR_tvz4xAL8_4"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:30 – 23:00 | mardi: 12:00 – 14:00, 19:30 – 23:00 | mercredi: 12:00 – 14:00, 19:30 – 23:00 | jeudi: 12:00 – 14:00, 19:30 – 23:00 | vendredi: 12:00 – 14:00, 19:30 – 23:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.legrandpan.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 55,
    is_free: false,
    dish_price: 28, // Plat principal médian (hors côtes à partager)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Antipasti & Charcuteries (Entrées)",
        items: [
          { name: "Os à Moelle rôti au gros sel", price_cents: 1200, is_highlight: true },
          { name: "Terrine de Campagne Maison & Cornichons", price_cents: 900, is_highlight: true },
          { name: "Poireaux Vinaigrette & Éclats de Noisettes", price_cents: 1000 },
          { name: "Salade de Museau de Cochon", price_cents: 1100 },
          { name: "Ardoise de Charcuterie Ibaïama (Poids variable)", price_cents: 1800, is_highlight: true },
          { name: "Velouté de Légumes de Saison", price_cents: 850 },
          { name: "Œuf Poché, Crème de Châtaignes & Bacon", price_cents: 1300 },
          { name: "Croquettes de Cochon & Mayo pimentée (x4)", price_cents: 1250 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pièces du Boucher & Traditions (Plats)",
        items: [
          { name: "Côte de Bœuf Limousine (1kg, pour 2 pers)", price_cents: 8500, is_highlight: true },
          { name: "Onglet de Bœuf aux Échalotes confites", price_cents: 2600, is_highlight: true },
          { name: "Basse-côte de Galice maturée", price_cents: 3400 },
          { name: "Pluma de Cochon Ibérique à la Plancha", price_cents: 2900, is_highlight: true },
          { name: "Ris de Veau doré au sautoir, sauce Grenobloise", price_cents: 3800, is_highlight: true },
          { name: "Rognons de Veau à la moutarde violette", price_cents: 2400 },
          { name: "Agneau de Corrèze rôti au thym", price_cents: 3200 },
          { name: "Parmentier de Canard & Petite Salade", price_cents: 2200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accompagnements (Plats)",
        items: [
          { name: "Purée de Pomme de Terre onctueuse au beurre", price_cents: 600, is_highlight: true },
          { name: "Frites fraîches Maison (double cuisson)", price_cents: 600, is_highlight: true },
          { name: "Poêlée de Légumes du Marché", price_cents: 700 },
          { name: "Gratin de Macaronis à l'ancienne", price_cents: 750 },
          { name: "Salade Mesclun bien assaisonnée", price_cents: 500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs du Pan (Desserts)",
        items: [
          { name: "Riz au Lait crémeux à la Vanille", price_cents: 900, is_highlight: true },
          { name: "Mousse au Chocolat noir 70%", price_cents: 850 },
          { name: "Tarte Tatin tiède & Crème fraîche", price_cents: 1000, is_highlight: true },
          { name: "Sablé Cacahuète, Ganache Chocolat & Sel", price_cents: 950 },
          { name: "Fraises Gariguette & Chantilly Maison", price_cents: 1100 },
          { name: "Assiette de Fromages (Vieux Comté & Ossau Iraty)", price_cents: 1250 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Benoît (Boissons)",
        items: [
          { name: "Verre d'Irouléguy Domaine Brana", price_cents: 900, is_highlight: true },
          { name: "Verre de Saumur Blanc 'Lydie'", price_cents: 850 },
          { name: "Bouteille de Pic-Saint-Loup 'L'Hortus'", price_cents: 4500 },
          { name: "Bouteille de Côte d'Auvergne 'Légendaire'", price_cents: 4200 },
          { name: "Demi-Pinte de Bière Artisanale (Pression)", price_cents: 650 },
          { name: "Jus de Pomme fermier artisanal", price_cents: 600 },
          { name: "Eau micro-filtrée Table (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso Lomi Selection", price_cents: 350 },
          { name: "Double Espresso", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Le Grand Pan est le repaire des amateurs de viandes franches et de cuisine de terroir au cœur du 15ème. Le chef Benoît Gauthier, fils de boucher, y travaille des produits d'exception avec une sincérité désarmante. L'ambiance y est celle d'un vrai bistrot parisien : conviviale, animée et centrée sur le plaisir de l'assiette. C'est l'adresse idéale pour partager une côte de bœuf d'anthologie accompagnée d'une purée mythique.",
  insider_tip: "• **La Viande** : Ici, on vient pour la viande. Demandez la maturité des pièces du jour, Benoît est intarissable sur ses producteurs.\n• **La Purée** : Elle est considérée par beaucoup comme l'une des meilleures de Paris, rivalisant avec celle de Robuchon par son onctuosité.\n• **Le Midi** : La formule déjeuner offre un rapport qualité-prix imbattable (Entrée 8€ / Plat 16€ / Dessert 9€).",
  specials: {
    cuisine: ["Viandes d'exception", "Cuisine du Sud-Ouest", "Bistrot culte"],
    drinks: ["Sélection de vins du Sud-Ouest", "Vins natures & bio", "Digestifs artisanaux"],
    must_eat: "La Côte de Bœuf Limousine (85€ pour 2) avec sa purée onctueuse. Un classique indémodable.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFe-quV2l56T3LR7nleAV2qXXxpa8wbXRqt1oBWxao4Xfqm0yeXv6I3UGHaq4-TcJ3_-5N4BQ8R9WZDGwYBhtG53fU7jqL6YxiduVGsBglPr32daVne49MuF3M-yF5cAsMyV53Hxs9XNFR792QeRwJzd-JuiRC5mvJkedeT1JVCePDoP7f5ARavbBLdwdOFw_PBU-_Fx_wKMKC047djGqiVN3zmyfmrn2ZBAI2RUYnDBTCO_S-3Q1G7-l4vUTxzFEHJiZAZ3ILtOuAoKpql-ZoB7Mri2l9xhl5aHSMsOgrnPA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERo-GVR9JHcRz1wKYYxsC2pU8-JzW1dwBv7xw9N3aiSlG2EbKN_UqEDlkBqT-RbDYZdu71snTmOJ9JdIn0Kc6F9mxYaFqDOG45YyHNbLyrEAt_SurzKrIEeTdf2cVXgzStF2fdnHbZ2T44wE6wq3yHX7JaUSqL2ClbOTySqDIyWOjkdnLmcKRqqE2WWdSowPflmqEZDSwCyH4fsFGOB6bNZBRmf6zGL6BOgL5GfT5J6KJzO8ARJw5f3T-hSM4FBiZwgQEMzcFfR8sP4KVr2G2CkO9It4ZFKrP6rDnP3I2KOg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLBCOW6Sq5vNaiHS8f8XlcOYcGTHdtX451bzxACAweCwwyQ_jUDSnNlf2E-WXPtUfqxPFPiNwyufOn4031K4QeEZmH37xtq0AKFdC61iJezLd8K_RaDzvLYMDtEq0VinAee3jscGSMB5flcM0eDxwG-X5ILnAikFXBxUBTYwRepsu13y7kbsQoGl5tCuT9tCBiEdU9mgE5SFrRKRMbAA89sL4EMNPDqMWbTuXkGALmGISyMrnC-DbZ_qiVSac27dsqx51NHj2rCAnYdGX6lf0ino3169cL10_Jm1lQEXT54QuhY-HEdyPgLJGpVjWIlA4LThiZrJp5r0G61sE4ZGXb4B2DoqLX9hDDJiKq84ApLJ0EyhVKaMjrw5Tv3uAQLY0Vedjccv3d8yE7y-86LI3CPxRhiJBKCcBTVX55qaxiDAI&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default le_grand_pan;
