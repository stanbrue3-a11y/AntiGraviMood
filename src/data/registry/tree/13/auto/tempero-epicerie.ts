import { SurgicalPlace } from "../../../type-definition";

export const tempero_epicerie: SurgicalPlace = {
  id: "poi-tempero-epicerie",
  slug: "tempero-epicerie",
  name: "TEMPERO EPICERIE",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "24 Prom. Claude Lévi-Strauss, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8318608,
    lng: 2.3743623,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJz_tq_4px5kcRs8-AcarwBNc"
  },
  moods: {
    chill: 85,
    festif: 45,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 15:00 | mardi: 09:00 – 15:00 | mercredi: 09:00 – 15:00 | jeudi: 09:30 – 16:00, 19:30 – 22:30 | vendredi: 09:30 – 16:00, 19:30 – 22:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: true,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://tempero.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 24,
    dish_price: 18.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Cocottes & Sauts",
        items: [
          { name: "Poitrine de porc confite", price_cents: 2000 },
          { name: "Poulet grillé fermier", price_cents: 2000 },
          { name: "Cabillaud vapeur & légumes", price_cents: 2050 },
          { name: "Risotto d'épeautre aux champignons", price_cents: 1900 },
          { name: "Plat du jour (Ardoise)", price_cents: 1800 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Grignotages & Veloutés",
        items: [
          { name: "Velouté de butternut de saison", price_cents: 900 },
          { name: "Œuf mollet & crème herbacée", price_cents: 950 },
          { name: "Rillette de hareng fumé maison", price_cents: 900 },
          { name: "Pain au levain & beurre demi-sel", price_cents: 400 },
          { name: "Assiette de fromages affinés", price_cents: 1200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Fins de Repas",
        items: [
          { name: "Riz au lait coco & mangue", price_cents: 800 },
          { name: "Medivnyk (Gâteau au miel)", price_cents: 800 },
          { name: "Meringue italienne aux fruits", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de vin nature (Sélection)", price_cents: 650 },
          { name: "Bière artisanale locale (33cl)", price_cents: 700 },
          { name: "Jus de fruits frais pressés", price_cents: 500 },
          { name: "Café de spécialité", price_cents: 250 }
        ]
      }
    ]
  },
  description: "Tempero Épicerie est la 'petite sœur' du restaurant Nosso d'Alessandra Montagne. Cette épicerie-cantine propose une cuisine vive, locale et aux accents brésiliens dans un cadre moderne et lumineux. On y vient pour les cocottes réconfortantes, les vins natures et l'atmosphère décontractée du quartier de la BNF.",
  insider_tip: "• **Choix du Maître** : La poitrine de porc confite est un incontournable de la chef, d'une tendreté absolue.\n• **Expérience Culturelle** : Profitez-en pour faire vos courses d'épicerie fine et de vins natures avant de partir.\n• **Timing Stratégique** : Idéal pour un déjeuner de travail inspirant ou un début de soirée (le vendredi).",
  specials: {
    cuisine: ["Française", "Brésilienne", "Fusion"],
    drinks: ["Vin Nature", "Café de spécialité"],
    must_eat: "Cuisine de marché. Cocotte de porc & Riz au lait coco",
  },
  images: {
    hero: "AU_ZVEGdrp7jqG2lRjrV6ybhqNzSjta34_7yL26VP5qlVYb1JEHCv26eU02TEp4US9ZzpWxG_vPrEP0ODJxhJGbaThhSHv8SVqSJdKQRbQRKSSNmGp9QO7WO2_Hb6wFgFXgAKwDg4H808sBExWrUVt3Vv0b6ErX6rTiFeEa8tCyC0E8Ruce3eTQxGNPsl3fJ2BcPSocl5eFFcvmpVsQ2sqqcIvvJ4KtWHXFqSEU9vCpGrjDlNbNRWgU2ENg7AKB8azihd9vVEne6rSmfCG7XbwGTL4iLsBqrazrCe4neJQ6wKiUDtk4wHR2GlvntGTpA3L8ppRjTadZ7Aj8AHmhwKscST0WPhiYkxN_hTUcoKOXl4pHjDCWhkZvi_XHXrwiMKgQIFTpe6AIS1mJIhrmihyiJe5V5ca9KU_WzvA9quW6zcAR4oA",
    gallery: ["AU_ZVEHtkSu_S5e6mooswXj7pQ4rxqiDrblOMhf9xO5L0VGZVQo2BkA-aC7ThQOKW4I6kJjJMkAYi-rJ4uATf9uFeI9CE2qbCU8PXIGRr6Z0jYQQh5h81O4aZvMkQZmA-bvS6dfrM4pnyK5Paj5jFFp1XTMFDZiJohEZ9aw1Y_Zjny4nh3x0fj6UmmtkwHWsjjNGFSEaebpSl6cDwtOOHnF_eA2_7mgLwYMgQRo2Zs9EsTwprgrY68Av1M6hkOtt88joNNX-aIWufUvwkzAvmPiOPR8bb_gFidM97Is-VqCIu_thbA","AU_ZVEFiGNU6IVTX-p8fNsT0yD3aK1iJ5SPo-EiXP9cmPZaLw5JRxNA9V2s85_p7zmgG1qEpiBu5LSQEUpgz1D9frriDR-kUiG9qX6gusLIFcCLlVkqw1RO_RvRxGbWk_DLdlalk0Clokxp1u_EODJlKownadBvx0wrv078iV2siuGkTecgMxz5CWHymkTaL5afaJqbrLbz-OxHqL5R4SJTyOOO0imzudXsSpQbAhfiAcqC-2LqqtFXs4zRxZs4cmVOJHlPf4UZZuBqlxVBJJ4dlaeQglvoLGhyE9rZu_F51Vldiy8y8wFrIpZw5LXbBB04BKU0DBDYJyeWBomntSPDIgdjWTAusCmHkC-77YtnqnrxOXo87y-AAMSdfbm0EYr03BywiJF9A1Q_-s8OSwjQ7FaNWUYaTnBpcOwENr_h3qd1MBZ9R9kW0iT8w5pWq7A"]
  },
  verified: false,
  google_rating: 4.6
};

export default tempero_epicerie;
