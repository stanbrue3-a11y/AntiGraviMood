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
    wifi: false,
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
        category: "Antipasti & Charcuteries (Entrées)",
        items: [
          { name: "Os à Moelle rôti au gros sel", price: "12.00€", highlight: true },
          { name: "Terrine de Campagne Maison & Cornichons", price: "9.00€", highlight: true },
          { name: "Poireaux Vinaigrette & Éclats de Noisettes", price: "10.00€" },
          { name: "Salade de Museau de Cochon", price: "11.00€" },
          { name: "Ardoise de Charcuterie Ibaïama (Poids variable)", price: "18.00€", highlight: true },
          { name: "Velouté de Légumes de Saison", price: "8.50€" },
          { name: "Œuf Poché, Crème de Châtaignes & Bacon", price: "13.00€" },
          { name: "Croquettes de Cochon & Mayo pimentée (x4)", price: "12.50€" }
        ]
      },
      {
        category: "Pièces du Boucher & Traditions (Plats)",
        items: [
          { name: "Côte de Bœuf Limousine (1kg, pour 2 pers)", price: "85.00€", highlight: true },
          { name: "Onglet de Bœuf aux Échalotes confites", price: "26.00€", highlight: true },
          { name: "Basse-côte de Galice maturée", price: "34.00€" },
          { name: "Pluma de Cochon Ibérique à la Plancha", price: "29.00€", highlight: true },
          { name: "Ris de Veau doré au sautoir, sauce Grenobloise", price: "38.00€", highlight: true },
          { name: "Rognons de Veau à la moutarde violette", price: "24.00€" },
          { name: "Agneau de Corrèze rôti au thym", price: "32.00€" },
          { name: "Parmentier de Canard & Petite Salade", price: "22.00€" }
        ]
      },
      {
        category: "Accompagnements (Plats)",
        items: [
          { name: "Purée de Pomme de Terre onctueuse au beurre", price: "6.00€", highlight: true },
          { name: "Frites fraîches Maison (double cuisson)", price: "6.00€", highlight: true },
          { name: "Poêlée de Légumes du Marché", price: "7.00€" },
          { name: "Gratin de Macaronis à l'ancienne", price: "7.50€" },
          { name: "Salade Mesclun bien assaisonnée", price: "5.00€" }
        ]
      },
      {
        category: "Douceurs du Pan (Desserts)",
        items: [
          { name: "Riz au Lait crémeux à la Vanille", price: "9.00€", highlight: true },
          { name: "Mousse au Chocolat noir 70%", price: "8.50€" },
          { name: "Tarte Tatin tiède & Crème fraîche", price: "10.00€", highlight: true },
          { name: "Sablé Cacahuète, Ganache Chocolat & Sel", price: "9.50€" },
          { name: "Fraises Gariguette & Chantilly Maison", price: "11.00€" },
          { name: "Assiette de Fromages (Vieux Comté & Ossau Iraty)", price: "12.50€" }
        ]
      },
      {
        category: "La Cave de Benoît (Boissons)",
        items: [
          { name: "Verre d'Irouléguy Domaine Brana", price: "9.00€", highlight: true },
          { name: "Verre de Saumur Blanc 'Lydie'", price: "8.50€" },
          { name: "Bouteille de Pic-Saint-Loup 'L'Hortus'", price: "45.00€" },
          { name: "Bouteille de Côte d'Auvergne 'Légendaire'", price: "42.00€" },
          { name: "Demi-Pinte de Bière Artisanale (Pression)", price: "6.50€" },
          { name: "Jus de Pomme fermier artisanal", price: "6.00€" },
          { name: "Eau micro-filtrée Table (75cl)", price: "4.50€", highlight: true },
          { name: "Café Espresso Lomi Selection", price: "3.50€" },
          { name: "Double Espresso", price: "5.50€" }
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
