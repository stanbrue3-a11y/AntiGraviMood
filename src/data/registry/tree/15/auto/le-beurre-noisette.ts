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
        category: "Préludes du Marché (Entrées)",
        items: [
          { name: "Velouté de Haricots Tarbais & Foie Gras", price: "16.00€", highlight: true },
          { name: "Crème de Fenouil glacée & Pomme verte", price: "15.00€" },
          { name: "Pâté en Croûte de Sarrasin au Canard", price: "18.00€", highlight: true },
          { name: "Salade de Haricots Verts & Homard Bleu", price: "19.50€", highlight: true },
          { name: "Œuf Parfait, Crème de Cèpes & Mouillettes", price: "15.50€" },
          { name: "Terrine de Foie de Volaille faite Maison", price: "12.00€" },
          { name: "Tartare de Bar, Mangue & Coriandre", price: "17.00€" },
          { name: "Escargots de Bourgogne au Beurre Persillé", price: "14.50€" }
        ]
      },
      {
        category: "Haute Bistronomie (Plats)",
        items: [
          { name: "Poitrine de Canette rôtie, Jus corsé", price: "28.00€", highlight: true },
          { name: "Dos de Cabillaud demi-sel au Chorizo", price: "26.00€", highlight: true },
          { name: "Brandade de Haddock au Chou Vert", price: "24.00€" },
          { name: "Noix de Ris de Veau rissolées au sauteur", price: "35.00€", highlight: true },
          { name: "Gnocchi au Vert, Ail des Ours & Parmesan", price: "25.00€" },
          { name: "Épaule d'Agneau de 7 heures (Confite)", price: "29.00€", highlight: true },
          { name: "Filet de Bœuf au Poivre Noir & Cognac", price: "32.00€" },
          { name: "Risotto de Petit Épeautre aux Légumes", price: "22.50€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre à l'Huile de Noisette", price: "7.00€", highlight: true },
          { name: "Légumes du Moment rôtis au Four", price: "7.50€" },
          { name: "Gratin Dauphinois Traditionnel", price: "8.00€", highlight: true },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price: "6.00€" },
          { name: "Frites Maison coupées au couteau", price: "6.50€" }
        ]
      },
      {
        category: "Desserts de Tradition (Desserts)",
        items: [
          { name: "Riz au Lait & Caramel Beurre Salé", price: "11.00€", highlight: true },
          { name: "Baba au Rhum Ambré, Crème Vanille", price: "13.00€", highlight: true },
          { name: "Sablé Breton, Fraises & Rhubarbe", price: "12.50€" },
          { name: "Cappuccino Chocolat Caraïbes (70%)", price: "12.00€", highlight: true },
          { name: "Roulé Meringué au Citron Jaune", price: "11.50€" },
          { name: "Nage d'Ananas frais aux Épices", price: "10.00€" },
          { name: "Plateau de Fromages affinés (Sélection)", price: "14.50€" }
        ]
      },
      {
        category: "La Cave de Thierry (Boissons)",
        items: [
          { name: "Verre de Chardonnay Sélection Pierre", price: "8.50€", highlight: true },
          { name: "Verre de Pic-Saint-Loup 'L'Ermitage'", price: "9.50€" },
          { name: "Bouteille de Sancerre (Domaine Vacheron)", price: "52.00€" },
          { name: "Bière Artisanale du 15ème (33cl)", price: "7.50€" },
          { name: "Jus de fruits Alain Milliat (25cl)", price: "7.00€" },
          { name: "Eau micro-filtrée Le Beurre Noisette", price: "4.50€", highlight: true },
          { name: "Café Espresso Terre de Café", price: "3.50€" }
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
