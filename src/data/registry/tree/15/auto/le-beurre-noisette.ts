import { SurgicalPlace } from "../../../type-definition";

export const le_beurre_noisette: SurgicalPlace = {
  id: "poi-le-beurre-noisette",
  slug: "le-beurre-noisette",
  name: "Le Beurre Noisette",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "traditionnel", "terroir"],
  location: {
    address: "68 Rue Vasco de Gama, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.835621,
    lng: 2.2847406,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ35ar7nJw5kcRR2-Jh-Zj4Bs"
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 13:45, 19:00 – 21:45 | mercredi: 12:00 – 13:45, 19:00 – 21:45 | jeudi: 12:00 – 13:45, 19:00 – 21:45 | vendredi: 12:00 – 13:45, 19:00 – 21:45 | samedi: 19:00 – 21:45 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.restaurantbeurrenoisette.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes du Marché (Entrées)",
        items: [
          { name: "Velouté de Haricots Tarbais & Foie Gras", price_cents: 1600, is_highlight: true },
          { name: "Crème de Fenouil glacée & Pomme verte", price_cents: 1500 },
          { name: "Pâté en Croûte de Sarrasin au Canard", price_cents: 1800, is_highlight: true },
          { name: "Salade de Haricots Verts & Homard Bleu", price_cents: 1950, is_highlight: true },
          { name: "Œuf Parfait, Crème de Cèpes & Mouillettes", price_cents: 1550 },
          { name: "Terrine de Foie de Volaille faite Maison", price_cents: 1200 },
          { name: "Tartare de Bar, Mangue & Coriandre", price_cents: 1700 },
          { name: "Escargots de Bourgogne au Beurre Persillé", price_cents: 1450 }
        ]
      },
      {
        category_type: "main",
        display_label: "Haute Bistronomie (Plats)",
        items: [
          { name: "Poitrine de Canette rôtie, Jus corsé", price_cents: 2800, is_highlight: true },
          { name: "Dos de Cabillaud demi-sel au Chorizo", price_cents: 2600, is_highlight: true },
          { name: "Brandade de Haddock au Chou Vert", price_cents: 2400 },
          { name: "Noix de Ris de Veau rissolées au sauteur", price_cents: 3500, is_highlight: true },
          { name: "Gnocchi au Vert, Ail des Ours & Parmesan", price_cents: 2500 },
          { name: "Épaule d'Agneau de 7 heures (Confite)", price_cents: 2900, is_highlight: true },
          { name: "Filet de Bœuf au Poivre Noir & Cognac", price_cents: 3200 },
          { name: "Risotto de Petit Épeautre aux Légumes", price_cents: 2250 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre à l'Huile de Noisette", price_cents: 700, is_highlight: true },
          { name: "Légumes du Moment rôtis au Four", price_cents: 750 },
          { name: "Gratin Dauphinois Traditionnel", price_cents: 800, is_highlight: true },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price_cents: 600 },
          { name: "Frites Maison coupées au couteau", price_cents: 650 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts de Tradition (Desserts)",
        items: [
          { name: "Riz au Lait & Caramel Beurre Salé", price_cents: 1100, is_highlight: true },
          { name: "Baba au Rhum Ambré, Crème Vanille", price_cents: 1300, is_highlight: true },
          { name: "Sablé Breton, Fraises & Rhubarbe", price_cents: 1250 },
          { name: "Cappuccino Chocolat Caraïbes (70%)", price_cents: 1200, is_highlight: true },
          { name: "Roulé Meringué au Citron Jaune", price_cents: 1150 },
          { name: "Nage d'Ananas frais aux Épices", price_cents: 1000 },
          { name: "Plateau de Fromages affinés (Sélection)", price_cents: 1450 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Thierry (Boissons)",
        items: [
          { name: "Verre de Chardonnay Sélection Pierre", price_cents: 850, is_highlight: true },
          { name: "Verre de Pic-Saint-Loup 'L'Ermitage'", price_cents: 950 },
          { name: "Bouteille de Sancerre (Domaine Vacheron)", price_cents: 5200 },
          { name: "Bière Artisanale du 15ème (33cl)", price_cents: 750 },
          { name: "Jus de fruits Alain Milliat (25cl)", price_cents: 700 },
          { name: "Eau micro-filtrée Le Beurre Noisette", price_cents: 450, is_highlight: true },
          { name: "Café Espresso Terre de Café", price_cents: 350 }
        ]
      }
    ]
  },
  description: `Le Beurre Noisette est l'archétype du grand bistrot parisien où la technique gastronomique se met au service de la convivialité. Le chef Thierry Blanqui, passé par les plus grandes cuisines (Ledoyen, Tour d'Argent), propose une cuisine de marché créative et généreuse. L'endroit est chaleureux, boisé, et respire la passion du terroir. C'est l'adresse de référence dans le 15ème pour un repas d'une qualité exceptionnelle à prix de bistrot.`,
  expert_catchline: `Bistronomie française. Le célébrissime Riz au Lait & Pâté en Croûte.`,
  insider_tip: `• **Le Coup de Cœur** : Le Riz au Lait est légendaire. Servi avec un caramel au beurre salé addictif, c'est l'un des meilleurs de Paris.
• **Top Rapport Qualité/Prix** : Le menu dégustation en 6 services (68€) est une démonstration de force culinaire à réserver pour les grandes occasions.
• **La Petite Touche** : Ne manquez pas l'option purée à l'huile de noisette, un clin d'œil au nom du restaurant et un pur délice.`,
  specials: {
    cuisine: ["Bistronomie de haut vol", "Riz au Lait culte", "Produits de saison"],
    drinks: ["Vins de vignerons indépendants", "Bières locales", "Spiritueux artisanaux"],
    must_eat: "Cuisine bistronomique. Le Pâté en Croûte de sarrasin au canard et le Riz au Lait.",
  },
  images: {
    hero: "AU_ZVEHUHO5qa6zXHiR7omecDQnXOJPp8-mbfFwRHU5D7Cyg-gWXi9tRwDBowRjlJss-4wfdI6t5khkW23uYjeTBRG6OLRDX0pPyJUnrML_vpbPROJdZtt_QicxGmmpvUjxoWtyn0g318juW27zZ7AyDiVfk9Eab-Pj_Dj3iqZoV_gU8T2KQ8g-okVNdMArcyVjFWMUTF__RgRIvlik-FWiUZbL1Klei93UTm0lfRTLQGwXtcdsoj0oGtEquqJmbDMWxArXleQ4jhwuBz6Ero_wGp-BofkRx2KXcxra1DQc63T2Ltw",
    gallery: ["AU_ZVEE_825jDnaUEqAoHedDiXDEEvrc3P6zXsOTNHTUwHbQIdDUq42YP1Hm9Hygt8I8kG542oUJ4F_liLaU_8BUtxRwnj4nhyHXKsJTh06P4WsPxqJhiYRg5nfvgfzQ5hqapk2dskdmL_p5hOUpDp2uqsifxxYeK1elPKQPjaGZl5KjM1uJjOCK8KPTwBdVzswd4L4qZ5oxsrl7mdGBzEVmefcn239m40YoYr6_SrrBBuppNjHMGODo1dHeofNCa1RkD1tP8hs8rDY5j6QIj8CDMMgwYnld8OmELXuRu1VyRbA3sg","AU_ZVEGLKsn3LZA2EvHSiB60fnpfM4PJ2-INZlkbUT3xtFmWOpyvB9KFoTQSIAM62zG_xAu3HKHy0UTB7gPX-vTf7d0fi0egbV8O2CUCI7LcQjOBTYDZ_DKkSQHFqm6h6EUpJG-sTkWpt1D9-pJUTPIOPEV84HhvUN6-2SGwGtaYGLYXgFkKRQvvPhvJd640tDapd2Q4bTL59qvQnDIoDwGgbk-yY2a4WsDTwzPdtHUX2DfhgrzVfqBpmd56KjtFv_qHI7mR8pTgMM-kLtSMg3bJRtOGgJAs1y-Zsh5DyLIYP04YmmJSMvXyDeOTXcpo3nsOXAWG26GwqSN_z2RwQ75G132okAEQM6cT5h-04RpIydV6c54ZffsmWDWLL6dbPlT42IFE6fWEg2_wcFpFWMOG2o5mLXHRGjeUTKAJcYImBTCC_aeeORh5oBtpFtWUmF8n"]
  },
  verified: false,
  google_rating: 4.6
};

export default le_beurre_noisette;
