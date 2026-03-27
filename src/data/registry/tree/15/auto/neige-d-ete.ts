import { SurgicalPlace } from "../../../type-definition";

export const neige_d_ete: SurgicalPlace = {
  id: "poi-neige-d-ete",
  slug: "neige-d-ete",
  name: "Neige d'Été",
  category: "restaurant",
  subcategory: ["gastronomique", "etoile", "franco-japonais", "contemporain"],
  location: {
    address: "12 Rue de l'Amiral Roussin, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8453954,
    lng: 2.2990114,
    nearest_metro: "Cambronne",
    metro_lines: [6],
    google_id: "ChIJj5cSZD1w5kcRxG5lX68BY50"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 19:30 – 21:00 | mardi: 19:30 – 21:00 | mercredi: 19:30 – 21:00 | jeudi: 19:30 – 21:00 | vendredi: 19:30 – 21:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.neigedete.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 130,
    is_free: false,
    dish_price: 65, // Prix du premier menu déjeuner
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Signatures & Éveil des Sens (Entrées)",
        items: [
          { name: "Carpaccio de Saint-Jacques à la Truffe noire", price: "0.00€", highlight: true },
          { name: "Foie gras de canard poêlé & Vinaigrette Yuzu", price: "0.00€", highlight: true },
          { name: "Tartare de Bœuf au Caviar Osciètre", price: "0.00€" },
          { name: "Velouté de Topinambour & Éclats de Foie gras", price: "0.00€" },
          { name: "Ormeaux sauvages à la japonaise (Dashi)", price: "0.00€", highlight: true },
          { name: "Gambas de Palamos snackées, sel fumé", price: "0.00€" },
          { name: "Bouillon Dashi raffiné aux herbes folles", price: "0.00€" },
          { name: "Gyoza de Homard Bleu artisanaux (x3)", price: "0.00€" }
        ]
      },
      {
        category: "Haute Mer & Terre (Plats)",
        items: [
          { name: "Homard Bleu de casier rôti à la Citronnelle", price: "0.00€", highlight: true },
          { name: "Turbot sauvage étuvé aux Algues Kombu", price: "0.00€", highlight: true },
          { name: "Pigeon de Vendée rôti sur le coffre", price: "0.00€", highlight: true },
          { name: "Filet de Bœuf Limousin fumé au foin", price: "0.00€" },
          { name: "Ris de Veau doré, laqué au soja & mirin", price: "0.00€" },
          { name: "Canard de Challans aux épices fines", price: "0.00€" },
          { name: "Lotte rôtie & Émulsion de Coquillages", price: "0.00€" },
          { name: "Omble Chevalier de nos lacs, Sauce vin blanc", price: "0.00€" }
        ]
      },
      {
        category: "Accompagner l'Instant (Plats)",
        items: [
          { name: "Purée de Céleri-rave onctueuse", price: "0.00€", highlight: true },
          { name: "Légumes racines glacés au jus de viande", price: "0.00€" },
          { name: "Riz Niigata sélectionné par le Chef", price: "0.00€" },
          { name: "Émulsion légère au Beurre de Kombu", price: "0.00€" },
          { name: "Pickles de Daikon fait maison", price: "0.00€" }
        ]
      },
      {
        category: "Douceurs Délicates (Desserts)",
        items: [
          { name: "Soufflé minute au Grand Marnier", price: "0.00€", highlight: true },
          { name: "Tartelette Chocolat noir & Sésame noir", price: "0.00€" },
          { name: "Sorbet Shiso & Citron vert", price: "0.00€", highlight: true },
          { name: "Fraises des bois & Rhubarbe croquante", price: "0.00€" },
          { name: "Glace au Thé Hojicha fumé", price: "0.00€" },
          { name: "Financier tiède à la Noisette du Piémont", price: "0.00€" }
        ]
      },
      {
        category: "Sélection de la Sommelière (Boissons)",
        items: [
          { name: "Coupe de Champagne Duval-Leroy 'Prestige'", price: "18.00€", highlight: true },
          { name: "Verre de Chablis 1er Cru 'Montmains'", price: "16.00€" },
          { name: "Bouteille Margaux Château Palmer (Sélection)", price: "240.00€" },
          { name: "Saké Junmai Daiginjo 'HeavenSake'", price: "14.50€", highlight: true },
          { name: "Thé Matcha de cérémonie préparé minute", price: "9.50€" },
          { name: "Infusion de Gingembre frais & Miel", price: "7.00€" },
          { name: "Eau minérale premium (75cl)", price: "6.00€" }
        ]
      }
    ]
  },
  description: "Neige d'Été est une ode à l'épure et à la précision japonaise au service de la haute gastronomie française. Le chef Hideki Nishi, ancien du Taillevent, y livre une partition sans fausse note dans un écrin d'un blanc virginal, calme et lumineux. Étoilé au Guide Michelin, l'établissement se distingue par une technique chirurgicale et une maîtrise absolue des cuissons et des assaisonnements, faisant de chaque plat un moment de contemplation.",
  insider_tip: "• **La Discrétion** : Le lieu est très discret, presque secret. C'est l'endroit idéal pour un rendez-vous confidentiel ou une célébration intime.\n• **Le Déjeuner** : Profitez du menu déjeuner à 65€, c'est l'un des meilleurs rapports qualité-prix de Paris pour une table de ce standing.\n• **Le Pigeon** : Si le pigeon de Vendée est à la carte, n'hésitez pas. La cuisson sur le coffre est d'une tendreté exemplaire.",
  specials: {
    cuisine: ["Haute Gastronomie Franco-Japonaise", "Précision technique", "Produits nobles"],
    drinks: ["Grands crus classés", "Sakés d'exception", "Thés de cérémonie"],
    must_eat: "Le Pigeon de Vendée rôti sur le coffre : une démonstration de maîtrise technique et de respect du produit.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFypzzFx2dfwcG5nE8iPYF_DPUaobxwQsgIz_wWlnmQh6ckDJUrOl-jM3ttsr3EmGZvGvQyJCdkCU_3p7AANxpL4wk9ehN2LZQlYI5BdkyLL4MJiUZvStQOcYgbYlec255pRzEYEjFD-1BPNZFbJnCA4ttDtBcRTl7pqptTvwUpDQtdwo7nLVzEVQAKFJ7ZkuhATXcohBA8f5DEcqe66_Lw2XZppHmjiZbzqiKoUQfF6VHpXG3-Y7AJOw8nOQAIVCUn7qIynaoofm8NnQ0CvRM4IVPhuF1sS3lPUUzMvsRbxw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEF8NpcrXLC3raPdC1dR33BV50ero6dc-H34EgmaL9EgSWnd5nrq_GPCfIjSmZhR_4RjUJ7_f0JCYv3b6Nr-TjfY0q9F8h5pt9gwxvjXQaKtMxa0K8cbbvSj087hw379jx6fMBlvomEeDuaesgSBZN6kXLN0649LPFaj8VI04sQg7hgf5cIlZ-pEAq3F-RRmEdRWb_WYCdXHvHLVW_j4cqG4dNNLIqOqqe8Xfa6-HQcUQG19NhDlw8KMvKNMMIY5hcFec4vsMPSCANduUjMnVPNFThQ9yuVav3wTc2B_wZoKsA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH-yKl8Ym6X7GJQDG0x1ZQcmVMt0EC2DIib3RGPXwgr9tE8-09g-hNVHAzwLNf17fl6e6Nd9cGVQ32gpDKqKGtVbAVuO6u0C8iX8qvYG9NopYgkSYRDEpX7Ounz9kzo53r2WNspsWfMmbiGxYxXk9bMLonAuONSYfHwTK9UWfvElsxR613tAe1bP_afVWBoRNG-bKcb44ipFckQz_go9OHsZBayNZ26g_yCcDFO-D2SgDzAEgDW0AE6iFoYQ2ZvjPPDyZe0k3TQIHX5uMcXCFmTt7Nbma40VA4oluM1_pCBkHY3lW3v2HoLpHBq1ZFbB9olEVvH02Rad5LUC1wLIcCmSK2Rb9kbhFzn9yH4pD5n0MACh3_rWB3aONfDC2XpjsLQF3Uaka5OsObsyyXcHRZ9-z54ZKpK4dv4Lkolj1A6uNA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default neige_d_ete;
