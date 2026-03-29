import { SurgicalPlace } from "../../../type-definition";

export const le_belisaire: SurgicalPlace = {
  id: "poi-le-belisaire",
  slug: "le-belisaire",
  name: "Le Bélisaire",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "2 Rue Marmontel, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.83743579999999,
    lng: 2.3010062,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJP4CTeD9w5kcRhPlltZPUhJM"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:30 – 21:30 | mardi: 12:00 – 14:00, 19:30 – 21:30 | mercredi: 12:00 – 14:00, 19:30 – 21:30 | jeudi: 12:00 – 14:00, 19:30 – 21:30 | vendredi: 12:00 – 14:00, 19:30 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurant-belisaire.paris/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / Les Entrées de l'Ardoise",
        items: [
          { name: "Foie gras poêlé aux fruits de saison", price_cents: 1800 },
          { name: "Risotto crémeux aux langoustines", price_cents: 2200 },
          { name: "Ravioles de jeunes poireaux aux moules", price_cents: 1600 },
          { name: "Huîtres à la japonaise (x6)", price_cents: 2400 },
          { name: "Velouté de crustacés au gingembre", price_cents: 1400 },
          { name: "Salade de tourteau et avocat", price_cents: 2000 },
          { name: "Carpaccio de St-Jacques au citron vert", price_cents: 1900 },
          { name: "Terrine de poule au pot de Thierry Blanqui", price_cents: 1300 },
          { name: "Maquereau mariné au cidre breton", price_cents: 1200 },
          { name: "Œuf parfait, crème de chou-fleur", price_cents: 1100 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Dos de cabillaud rôti au beurre demi-sel", price_cents: 2800 },
          { name: "Homard à la parisienne (entier)", price_cents: 5500 },
          { name: "Filet de daurade rôti, tombée de fenouil", price_cents: 2700 },
          { name: "Dos de merlu à la plancha, vierge de légumes", price_cents: 2600 },
          { name: "Lièvre à la royale (en saison)", price_cents: 4200 },
          { name: "Bavette d'aloyau, frites maison au couteau", price_cents: 2400 },
          { name: "Quasi de veau de lait, girolles fraîches", price_cents: 3200 },
          { name: "Pigeon de Mesquer rôti, purée de dattes", price_cents: 3400 },
          { name: "Ris de veau croustillant, jus de viande corsé", price_cents: 3800 },
          { name: "Suggestion du Marché (Ardoise du jour)", price_cents: 2500 },
          { name: "L'Ardoise Complète (Entrée + Plat + Dessert)", price_cents: 4500 },
          { name: "Formule Ardoise (Entrée + Plat ou Plat + Dessert)", price_cents: 4000 },
          { name: "Menu Découverte (Carte Blanche en 5 services)", price_cents: 6000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Douceurs & Fromages",
        items: [
          { name: "Clafoutis fondant pommes et poires", price_cents: 1200 },
          { name: "Tarte chocolat caramel beurre salé", price_cents: 1100 },
          { name: "Soufflé au Grand Marnier (15 min)", price_cents: 1400 },
          { name: "Far breton revisité aux pruneaux", price_cents: 1000 },
          { name: "Plateau de fromages de nos provinces", price_cents: 1500 },
          { name: "Kouign-Amann minute, glace vanille", price_cents: 1200 },
          { name: "Sorbet artisanal maison (3 boules)", price_cents: 900 },
          { name: "Millefeuille à la vanille de Madagascar", price_cents: 1300 },
          { name: "Mousse au chocolat noir 72%, fleur de sel", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Muscadet Sèvre et Maine", price_cents: 900 },
          { name: "Bouteille de cidre artisanal du Morbihan", price_cents: 1800 },
          { name: "Café de spécialité torréfié à Paris", price_cents: 400 }
        ]
      }
    ]
  },
  description: "Le Bélisaire est une escale gastronomique authentique nichée dans une rue calme du 15e arrondissement. Le chef breton Matthieu Garrel y sublime les produits de la mer et de sa région d'origine avec une technique irréprochable et un amour du produit brut. La carte, inscrite sur une grande ardoise, change au gré des marées et des saisons, offrant une expérience bistronomique d'une grande sincérité. L'accueil y est chaleureux, presque familial, faisant de ce lieu une adresse chérie par les initiés en quête de vérité culinaire.",
  insider_tip: "• **Timing Stratégique** : Arriver dès l'ouverture du service pour avoir le choix sur l'ardoise, les plats phares comme le risotto de langoustines partent vite.\n  • **Combo Moelle** : Le Menu Découverte à 60€ est une véritable démonstration de force du chef, parfait pour une immersion totale dans sa cuisine iodée.\n  • **Détail Secret** : N'hésitez pas à demander le Kouign-Amann même s'il n'est pas affiché, c'est parfois la surprise du chef en fin de semaine.",
  specials: {
    cuisine: ["Français", "Bistronomie", "Bretonne"],
    drinks: ["Muscadet", "Cidre", "Vins de Loire"],
    must_eat: "Bistronomie Marine. Le risotto crémeux aux langoustines et le homard à la parisienne.",
  },
  images: {
    hero: "AU_ZVEFcO8YBiYr0usgA0glPL-Cg0wjT_fnvoRJYC4-irhHgCTOcZYkgm_wCk-BV5ixM7Rs5382bqZfQ4h3liCAgsTnFN64xxcCXFuLcQz4Cz18u7LdM1rWdoht5pURsiM3boFcmn8iqu6M2OZOlnPgUvXoKzhFiO82RbxQ9qGMIEbz7pvRVE4F7z9HkRkdjkfMxS_jGjPzYTypOaA6Qicwr_wNoIXRD-CfTrLbltzUjfYXO8Jz4Dhn5W3KdVRnoO_3mEfyAOupFk6N9nGP7TuD6wBBKF_VbARsITopIVvMr7dMetw",
    gallery: ["AU_ZVEE_Pa69PaWvQaOu3YXh3KJpBUgVcWyMDtxZ_U1R3v6ZGd67pxaIRXAesgw6o8cZ-hkkp9cSfNnlhckRE2M7-6DulRtWn8MIenTwLuM9ny7gi3Zkj-w_vtkD-GUJmGuzq96G-jPkvLzEqBYk_csxyirMWcHJXRY-44HkU6Oo91W0Mg4NryR_0wfiwT5UPylOxOdlRIfqxBxx6fyl6loV785SiSytFM5xixYXEVUqZvMn_s1iEbeO3u-ZT9J1oDDPb_l2QSt7f4_-tL_593kKdfeFklyfent8we8vCOlanxZLfQ","AU_ZVEEg6tmgP-UQUROLWWUlDInB2S1ujK1jAN7LLSkxQZMSEU8jCFblRI5pkfY7VBWtBYd6MWq2qTp1oFoN-ErRJShEaJR9X9XEi5huP6mXWOOtiEdB1LXRvdkdCpPnqFBqgVz0W7U41r8Zta4P7BlQNev9t0xNdvhwoIWJUdR3yO_MARSLCINBHjy4p5iaanC8hFmC_I2Foen9JnlxS2W_gkRo59r_Kw-utP0n7ebYieK_wEx-0rcVcWLNrmxguaVA_RcNxLmwFaP7PoLJoJEmR_ORf1NciOkDms-uBTsAAXMy_P2_LGYNtn3pd4ZO0Uqd0FAwjNKZYRstdK-teD7FkkSgSy2fGDF7Ge7pUzeGMYAgV0V-aUQo6k6E9vA_3aOTPKJHKG7FUAv8yOrrIG1DpBS-ly2HGVTN9CTD9B5ElCMpydNMwzYT4Wh6EOhqog"]
  },
  verified: false,
  google_rating: 4.7
};

export default le_belisaire;
