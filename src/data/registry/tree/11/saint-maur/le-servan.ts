import { SurgicalPlace } from '../../../type-definition';

export const le_servan: SurgicalPlace = {
    id: "poi-le-servan",
    name: "Le Servan",
    slug: "le-servan",
    category: "restaurant",
    subcategory: ['français', 'bistronomie'],
    location: {
        address: "32 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.86101559999999,
        lng: 2.3814506,
        nearest_metro: "Rue Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJDxNp1_Bt5kcRfBQ1nlGxQoQ"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:30–22:30\nmardi: 12:00–14:00, 19:30–22:30\nmercredi: 12:00–14:00, 19:30–22:30\njeudi: 12:00–14:00, 19:30–22:30\nvendredi: 12:00–14:00, 19:30–22:30\nsamedi: 12:00–14:00, 19:30–22:30\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://leservan.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 30, // Median des Plats: 28, 28, 30, 38, 45 → médiane = 30€
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus d’Épure (Menus)",
        items: [
          { name: "Menu Dégustation (À l’aveugle)", price_cents: 5500, is_highlight: true },
          { name: "Menu Déjeuner (Entrée, Plat, Dessert)", price_cents: 3500, is_highlight: true },
          { name: "Accord Mets & Vins Nature (3 verres)", price_cents: 3000 },
          { name: "Accord Mets & Vins Nature (5 verres)", price_cents: 4500 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Petites Assiettes Perçantes (Entrées)",
        items: [
          { name: "Cœurs de Canard au piment doux", price_cents: 1200, is_highlight: true },
          { name: "Raviolis de Porc & Langoustine, beurre de soja", price_cents: 1600, is_highlight: true },
          { name: "Ceviche du moment, agrumes & piment", price_cents: 1500 },
          { name: "Encornets sautés, ail noir & herbes", price_cents: 1700 },
          { name: "Tartare de Bœuf, mayo épicée & sarrasin", price_cents: 1800 },
          { name: "Oreilles de Cochon au poivre du Sichuan", price_cents: 1450 },
          { name: "Tartelette Tomate, ricotta & chutney piment", price_cents: 1300 },
          { name: "Os à Moelle, croûte d’herbes & levain", price_cents: 1500 },
          { name: "Maquereau Crudo, calamansi & gingembre", price_cents: 1600 },
          { name: "Hors-d’œuvre du jour (Saison)", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Convive & Créations (Plats)",
        items: [
          { name: "Paleron de Bœuf braisé au tamarin", price_cents: 2800, is_highlight: true },
          { name: "Pot-au-feu de Saint-Jacques", price_cents: 2800 },
          { name: "Maigre de ligne, bouillon asiatique", price_cents: 3000 },
          { name: "Ris de Veau croustillant, jus pimenté", price_cents: 4500, is_highlight: true },
          { name: "Canard en Brioche, jus aux cinq épices", price_cents: 3600 },
          { name: "Poitrine de Cochon croustillante & bok choy", price_cents: 2900 },
          { name: "Bar de ligne, fenouil, chou kale & safran", price_cents: 3400 },
          { name: "Raviolis de Homard, beurre safrané & cacahuète", price_cents: 3800 },
          { name: "Pigeon rôti, jus corsé (Entier)", price_cents: 3800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Fins de Repas (Desserts)",
        items: [
          { name: "Tarte meringuée au Citron (Revisitée)", price_cents: 1200, is_highlight: true },
          { name: "Chocolat crémeux & praliné cacahuète", price_cents: 1300 },
          { name: "Poire pochée aux épices & crème crue", price_cents: 1200 },
          { name: "Mango Pomelo Sago (Interpretation moderne)", price_cents: 1100 },
          { name: "Glace Sésame noir maison (2 boules)", price_cents: 850 },
          { name: "Sélection de Fromages affinés artisanaux", price_cents: 1400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave Nature & Vibrante (Boissons)",
        items: [
          { name: "Verre de Vin Blanc (Vibrant & Frais)", price_cents: 950, is_highlight: true },
          { name: "Verre de Vin Rouge (Fruit & Caractère)", price_cents: 1000 },
          { name: "Verre d’Orange (Macération)", price_cents: 1200, is_highlight: true },
          { name: "Bouteille de Pet-Nat (Sélection)", price_cents: 4800 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 500 },
          { name: "Café Espresso Terres de Café", price_cents: 350 }
        ]
      }
    ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-servan/gallery_4.jpg"
    ]
  },
    instagram_handle: "leservan",
    verified: true,
    google_rating: 4.5,
    description: "Le bistrot fulgurant des sœurs Tatiana et Katia Levha. Sous ses airs de bistrot titi-parisien (moulures, plafond peint), la carte balance de formidables uppercuts aux influences asiatiques, et particulièrement philippines (piment, herbes fraîches, agrumes).",
    insider_tip: "• La carte change purement quotidiennement en fonction du marché de la cheffe.\n• L’ancienne formule déjeuner très attractive n’existe plus, le ticket moyen monte vite à 50€ (et attention, la carafe d’eau micro-filtrée est facturée 5€).\n• Réservez très en avance, le lieu est constament pris d'assaut.",
    expert_catchline: "Haute-bistronomie percutée d’influences philippines par la brillante Tatiana Levha.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Vins natures exigeants"],
        must_eat: "Cuisine de bistrot. Si les cœurs de canard au piment doux sont à la carte du jour, jetez-vous dessus aveuglément.",
        must_drink: "Un vin orange macéré pour tenir tête aux épices de la carte."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Si les cœurs de canard au piment doux sont à la carte du jour, jetez-vous dessus aveuglément.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
