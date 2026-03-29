import { SurgicalPlace } from "../../../type-definition";

export const comptoir_sur_mer: SurgicalPlace = {
  id: "poi-comptoir-sur-mer",
  slug: "comptoir-sur-mer",
  name: "Comptoir Sur Mer",
  category: "restaurant",
  subcategory: ["fruits-de-mer", "bar-a-huitres", "bistrot", "institution"],
  location: {
    address: "53 Rue de Lancry, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.87171,
    lng: 2.362222,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJQ1qtDwxu5kcRDIJDFcKebiY"
  },
  moods: {
    chill: 80,
    festif: 60,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 17:00 – 22:00 | mardi: Fermé | mercredi: Fermé | jeudi: 12:00 – 15:00, 17:00 – 20:00 | vendredi: 12:00 – 15:00, 17:00 – 20:00 | samedi: 12:00 – 20:00 | dimanche: 12:00 – 20:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.surmer.restaurant/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "L'Écailler (Entrées & Huîtres)",
        items: [
          { name: "6 Huîtres Utah Beach n°3 (Normandie)", price_cents: 1600, is_highlight: true },
          { name: "Huîtres Spéciales n°2 Utah Beach (Charnues)", price_cents: 1950, is_highlight: true },
          { name: "Huîtres de Blainville-sur-Mer n°3", price_cents: 1500 },
          { name: "Huîtres d'Isigny n°3 (Baie des Veys)", price_cents: 1700 },
          { name: "Gillardeau n°4 (Prestige)", price_cents: 2400, is_highlight: true },
          { name: "Belon n°00 (Huître Plate de saison)", price_cents: 1800 },
          { name: "Fines de Claire n°3 Marennes-Oléron", price_cents: 1450 },
          { name: "Pousse en Claire (Le nec plus ultra)", price_cents: 2600 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Coquillages & Crustacés (Entrées)",
        items: [
          { name: "Palourdes d'Utah Beach au Naturel", price_cents: 1200, is_highlight: true },
          { name: "Coques d'Utah Beach (Portion)", price_cents: 1000 },
          { name: "Oursins Frais de Roche (Selon arrivage)", price_cents: 1200, is_highlight: true },
          { name: "Bulots & Mayonnaise Artisanale Maison", price_cents: 1100, is_highlight: true },
          { name: "Crevettes Grises à décortiquer", price_cents: 950 },
          { name: "Langoustines du Guilvinec (Pièce)", price_cents: 700, is_highlight: true },
          { name: "Amandes de Mer (Portion de 6)", price_cents: 800 },
          { name: "Couteaux à la Plancha, Ail & Persillade", price_cents: 1350, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Petites Assiettes Marines (Plats)",
        items: [
          { name: "Seiche de Vendée grillée à la Plancha", price_cents: 1850, is_highlight: true },
          { name: "Ceviche de Mulet Noir, Agrumes & Piment", price_cents: 1900, is_highlight: true },
          { name: "Tartare de Thon au couteau & Aneth", price_cents: 2100 },
          { name: "Linguine aux Palourdes de Camargue", price_cents: 2450, is_highlight: true },
          { name: "Beau Bar Grillé de Ligne (Entier)", price_cents: 3400, is_highlight: true },
          { name: "Demi-Homard Bleu grillé au Beurre", price_cents: 2900 },
          { name: "Merlan en Fritone & Sauce Tartare", price_cents: 1700 },
          { name: "Poulpe de Roche grillé & Mousseline", price_cents: 2300 }
        ]
      },
      {
        category_type: "other",
        display_label: "Accords Moelleux (Accompagnements)",
        items: [
          { name: "Frites Maison Double Cuisson", price_cents: 650, is_highlight: true },
          { name: "Salade de Saison & Vinaigrette Iodée", price_cents: 600 },
          { name: "Pain de Seigle & Beurre Bordier", price_cents: 450, is_highlight: true },
          { name: "Mayonnaise Maison aux Herbes Fraîches", price_cents: 250 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs du Littoral (Desserts)",
        items: [
          { name: "Sorbet Citron Jaune & Basilic Frais", price_cents: 800, is_highlight: true },
          { name: "Riz au Lait Artisanal à la Vanille Bleue", price_cents: 950, is_highlight: true },
          { name: "Tarte au Citron Déstructurée & Meringue", price_cents: 1000 },
          { name: "Mousse au Chocolat Noir 70% & Fleur de Sel", price_cents: 900 },
          { name: "Fromage de Chèvre Affiné du Père Fabre", price_cents: 1100 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Vins Vivants du Port (Boissons)",
        items: [
          { name: "Verre de Muscadet Sèvre & Maine sur Lie", price_cents: 750, is_highlight: true },
          { name: "Verre de Sancerre (Domaine Vacheron)", price_cents: 1100 },
          { name: "Coupe de Champagne (Vigneron Indépendant)", price_cents: 1450, is_highlight: true },
          { name: "Bouteille de Vin Nature Sélection du jour", price_cents: 3500 },
          { name: "Eau micro-filtrée Surmer (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso (Torréfaction locale)", price_cents: 350 }
        ]
      }
    ]
  },
  description: "Surmer (et son iconique Comptoir Mer rue de Lancry) est la référence absolue des produits de la mer dans le 10ème arrondissement. Orchestré par la cheffe Olive Davoux, ce lieu célèbre la pêche artisanale et responsable. Entre le bar à huîtres Utah Beach d'une fraîcheur insolente et les petites assiettes marines créatives (seiche plancha, ceviche de mulet), l'expérience est un voyage immédiat vers les côtes normandes et vendéennes. Décor brut, service décontracté et carte de vins naturels font de cette adresse le repaire des amateurs d'iode et de vérité.",
  insider_tip: "• **Les Huîtres Utah Beach** : C'est la signature de la maison, sourcées avec une exigence rare. Elles sont d'un équilibre sucre/sel parfait.\n• **Le Comptoir de Lancry** : Privilégiez l'adresse historique pour un plateau de fruits de mer sur le pouce, l'ambiance y est plus authentique.\n• **Vins Blancs Naturels** : Demandez conseil sur les Muscadets travaillés en biodynamie, les accords avec les coquillages sont foudroyants.",
  specials: {
    cuisine: ["Seafood & Bar à huîtres", "Pêche artisanale responsable", "Arrivages quotidiens direct producteur"],
    drinks: ["Belle sélection de vins blancs nature", "Champagnes de vignerons", "Muscadets de garde"],
    must_eat: "Les Linguines aux Palourdes (24.50€) : généreuses en iode, un plat réconfortant qui sent bon le large.",
  },
  images: {
    hero: "AU_ZVEGvsC0ceFzlHaV4T5nvln4DdQeHNizagmd9HGLT4qwN3kZwXILpLX2zY8w6aVe2vdUe57zfebk7X99QZFaHSUYzlOiF-a9yqI4-_TJJKdNDrfqTJh6_LFTAZCixO7zq7QdIeW_ik17V9ZBrDMUDOowYOKBa6VF-8eQBhf8nqCfH7a7tKq4OApIcZtV1QakfpSuLOfMgI5292StoQE0WdUs1tenhQS6Ps6HTsANA2DX8gBBNJvfTM1Ap1regncLRY3LEK8UCKdrd8MS8bFqyb8rss9HOFuR6N1fPA5xeYLix6w",
    gallery: ["AU_ZVEGbi4culzCCPAvOKOF2UgQh0g1bmqAHzg_ZJ9jMgNJuOv4Srqkr33z3Bd3h91pTWe1CmLMqUSzOHkFxjgU54Du8b8tcbamVdgG4jzua02xuKIHAdik0yfaZe_Wa_CFJW1XEVuiUO0eDjt0Cd74cs_yfEnuaQmReXI9rfiV1bYSXzFMmKcb632Az6_XCJeWd8fOwOmN2GgrqqR_HRjAfCBem_tUi71lKmoBBAy5ghM2l3FtUZlp21XJiL_BdUmrDLDRiB4OjKFwfonjbhQWp87aPwqZTrL05StxynjuPot3Pvg","AU_ZVEHl6P6EN9samcK5bmF6ahYEPdGULj-DKOHOV0CgQI0HGkdfOJ-HQPuQUF1slYTmkgg8RpBO5BDzcvYqO3QSdHitw9bzj-del3BcHSORhPUVq1F512v2Af-TWoYMAs9cqdh3tdJ7tMnJgQrt_JPK_RrQ2Kp_zdbdTmVLlR1iK8fa6suWkIPagZuUxTq-lpuo57O6yasV-FRiAFKEclU0Xul2kXa2x_NoZVGuYhxo6s_iocSBov52rcs9PAAXDFweoECLmc_MSnHm7Yxy1H40OiiB-m--xGItE4liXuuxhUiEErd6jzgc19AxXGJZlT7fX8PBjUQnNiElUXTDK1y1sWbZx77LsWxAm42fK90gktYe0YhX9V7U1diS_f_NNHbHesRfJWzi7sHHaV2BC19-RxgjhPqPAeXskLNYRYZV3-tc1jI"]
  },
  verified: false,
  google_rating: 4.5
};

export default comptoir_sur_mer;
