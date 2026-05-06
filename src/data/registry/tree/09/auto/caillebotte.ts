import { SurgicalPlace } from "../../../type-definition";

export const caillebotte: SurgicalPlace = {
  id: "poi-caillebotte",
  slug: "caillebotte",
  name: "Caillebotte",
  category: "restaurant",
  subcategory: ['français', 'bistronomie'],
  location: {
    address: "8 Rue Hippolyte Lebas, 75009 Paris, France",
    arrondissement: 9,
    lat: 48.8771649,
    lng: 2.3407727,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ7z8M6Adu5kcR_F589_9uO-g" // Corrigé (Exclusivité 9e)
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:30 – 15:00, 19:30 – 23:30 | mardi: 12:30 – 15:00, 19:30 – 23:30 | mercredi: 12:30 – 15:00, 19:30 – 23:30 | jeudi: 12:30 – 15:00, 19:30 – 23:30 | vendredi: 12:30 – 15:00, 19:30 – 23:30 | samedi: 12:30 – 15:00, 19:30 – 23:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lapantruchoise.com/caillebotte",
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
        display_label: "Préludes de Saison (Entrées)",
        items: [
          { name: "Terrine de Raie, Câpres & Citron confit", price_cents: 1300, is_highlight: true },
          { name: "Ravioles de Jarret de Veau & Bouillon corsé", price_cents: 1450, is_highlight: true },
          { name: "Poulpe de Roche poêlé & Houmous onctueux", price_cents: 1500 },
          { name: "Velouté de Courge Butternut & Noisettes", price_cents: 1100 },
          { name: "Œuf Parfait, Crème de Parmesan & Tuile dentelle", price_cents: 1350, is_highlight: true },
          { name: "Maquereau mariné au Vin Blanc & Pickles", price_cents: 1250 },
          { name: "Carpaccio de Bœuf de Salers & Huile de Noisette", price_cents: 1400 },
          { name: "Saladine de Tourteau à la Mangue & Coriandre", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Maîtrise & Terroir (Plats)",
        items: [
          { name: "Échine de Cochon fermier rôtie, Jus de viande", price_cents: 2500, is_highlight: true },
          { name: "Barbue de Ligne à la nacre, Légumes oubliés", price_cents: 2800, is_highlight: true },
          { name: "Pigeon de Vendée rôti sur le coffre (Michelin)", price_cents: 3400, is_highlight: true },
          { name: "Quasi de Veau, Artichauts poivrade & Sauge", price_cents: 2700 },
          { name: "Dos de Cabillaud au Chorizo & Bouillabaisse de légumes", price_cents: 2600 },
          { name: "Ris de Veau doré au sautoir, Meunière (Prestige)", price_cents: 3800, is_highlight: true },
          { name: "Gnocchis de Ricotta Maison, Beurre de Sauge", price_cents: 2250 },
          { name: "Lotte rôtie & Émulsion à la Verveine citronnée", price_cents: 2900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pomme de Terre au Beurre demi-sel", price_cents: 650, is_highlight: true },
          { name: "Frites fraîches Maison double cuisson", price_cents: 600 },
          { name: "Légumes Racines glacés au miel de fleurs", price_cents: 700 },
          { name: "Riz Sauvage Noir Sélectionné", price_cents: 650 },
          { name: "Petite Salade d’Herbes fraîches & Vinaigrette", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Sucré-Signature (Desserts)",
        items: [
          { name: "Riz au Lait culte, Caramel & Brisures de sablé", price_cents: 1100, is_highlight: true },
          { name: "Ganache Chocolat Noir & Fève Tonka", price_cents: 1050 },
          { name: "Pomme confite, Glace Vanille-Estragon", price_cents: 1000, is_highlight: true },
          { name: "Rhubarbe confite & Crumble d’Avoine", price_cents: 1150 },
          { name: "Pêches confites, Granola & Sorbet Yaourt", price_cents: 1100 },
          { name: "Assiette de Fromages (Vieux Comté & Saint-Nectaire)", price_cents: 1300 },
          { name: "Sorbet Maison de saison (3 boules)", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Franck (Boissons)",
        items: [
          { name: "Verre de Bourgogne Manuel Olivier", price_cents: 1000, is_highlight: true },
          { name: "Bouteille Beaujolais Villages Alex Foillard", price_cents: 3400 },
          { name: "Jus de Fruits Artisanaux Sélection", price_cents: 750 },
          { name: "Eau micro-filtrée Caillebotte (75cl)", price_cents: 450 },
          { name: "Café Espresso Terres de Café", price_cents: 350 },
          { name: "Thé Vert Sencha de haute qualité", price_cents: 650 },
          { name: "Cocktail Spritz Caillebotte au St-Germain", price_cents: 1100, is_highlight: true }
        ]
      }
    ]
  },
  description: "Caillebotte est la petite sœur lumineuse du Pantruche, une annexe bistronomique où le chef Franck Baranger déploie une cuisine de marché d’une précision diabolique. Dans un cadre épuré mêlant bois blond et cuisine ouverte, on y déguste des assiettes racées, généreuses et techniquement irréprochables. C’est l’adresse phare du 9ème pour ceux qui cherchent la quintessence du néo-bistrot parisien : créativité, produits nobles et prix restés sages.",
  insider_tip: "• **Le Riz au Lait** : Il est devenu culte dans tout le 9ème. Ne partez pas sans le goûter, sa texture et son caramel sont une référence.\n• **Le Déjeuner** : Profitez de la formule à 23€ en semaine, c’est l’un des meilleurs rapports qualité-prix de Paris.\n• **La Table du Chef** : Si vous pouvez, asseyez-vous face à la cuisine pour voir le ballet des cuisiniers, c’est un spectacle de précision.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vins vivants & natures", "Sélection de Bourgogne", "Cocktails Maison"],
    must_eat: "Cuisine de bistrot. Le Riz au Lait (11€) : l’un des plus mythiques de la capitale, une gourmandise réconfortante et parfaitement équilibrée.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/caillebotte/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le Riz au Lait (11€) : l’un des plus mythiques de la capitale, une gourmandise réconfortante et parfaitement équilibrée.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default caillebotte;
