import { SurgicalPlace } from "../../../type-definition";

export const neige_d_ete: SurgicalPlace = {
  id: "poi-neige-d-ete",
  slug: "neige-d-ete",
  name: "Neige d’Été",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "12 Rue de l’Amiral Roussin, 75015 Paris, France",
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
        category_type: "starter",
        display_label: "Signatures & Éveil des Sens (Entrées)",
        items: [
          { name: "Carpaccio de Saint-Jacques à la Truffe noire", price_cents: 0, is_highlight: true },
          { name: "Foie gras de canard poêlé & Vinaigrette Yuzu", price_cents: 0, is_highlight: true },
          { name: "Tartare de Bœuf au Caviar Osciètre", price_cents: 0 },
          { name: "Velouté de Topinambour & Éclats de Foie gras", price_cents: 0 },
          { name: "Ormeaux sauvages à la japonaise (Dashi)", price_cents: 0, is_highlight: true },
          { name: "Gambas de Palamos snackées, sel fumé", price_cents: 0 },
          { name: "Bouillon Dashi raffiné aux herbes folles", price_cents: 0 },
          { name: "Gyoza de Homard Bleu artisanaux (x3)", price_cents: 0 }
        ]
      },
      {
        category_type: "main",
        display_label: "Haute Mer & Terre (Plats)",
        items: [
          { name: "Homard Bleu de casier rôti à la Citronnelle", price_cents: 0, is_highlight: true },
          { name: "Turbot sauvage étuvé aux Algues Kombu", price_cents: 0, is_highlight: true },
          { name: "Pigeon de Vendée rôti sur le coffre", price_cents: 0, is_highlight: true },
          { name: "Filet de Bœuf Limousin fumé au foin", price_cents: 0 },
          { name: "Ris de Veau doré, laqué au soja & mirin", price_cents: 0 },
          { name: "Canard de Challans aux épices fines", price_cents: 0 },
          { name: "Lotte rôtie & Émulsion de Coquillages", price_cents: 0 },
          { name: "Omble Chevalier de nos lacs, Sauce vin blanc", price_cents: 0 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accompagner l’Instant (Plats)",
        items: [
          { name: "Purée de Céleri-rave onctueuse", price_cents: 0, is_highlight: true },
          { name: "Légumes racines glacés au jus de viande", price_cents: 0 },
          { name: "Riz Niigata sélectionné par le Chef", price_cents: 0 },
          { name: "Émulsion légère au Beurre de Kombu", price_cents: 0 },
          { name: "Pickles de Daikon fait maison", price_cents: 0 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Délicates (Desserts)",
        items: [
          { name: "Soufflé minute au Grand Marnier", price_cents: 0, is_highlight: true },
          { name: "Tartelette Chocolat noir & Sésame noir", price_cents: 0 },
          { name: "Sorbet Shiso & Citron vert", price_cents: 0, is_highlight: true },
          { name: "Fraises des bois & Rhubarbe croquante", price_cents: 0 },
          { name: "Glace au Thé Hojicha fumé", price_cents: 0 },
          { name: "Financier tiède à la Noisette du Piémont", price_cents: 0 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Sélection de la Sommelière (Boissons)",
        items: [
          { name: "Coupe de Champagne Duval-Leroy ’Prestige'", price_cents: 1800, is_highlight: true },
          { name: "Verre de Chablis 1er Cru ’Montmains'", price_cents: 1600 },
          { name: "Bouteille Margaux Château Palmer (Sélection)", price_cents: 24000 },
          { name: "Saké Junmai Daiginjo ’HeavenSake'", price_cents: 1450, is_highlight: true },
          { name: "Thé Matcha de cérémonie préparé minute", price_cents: 950 },
          { name: "Infusion de Gingembre frais & Miel", price_cents: 700 },
          { name: "Eau minérale premium (75cl)", price_cents: 600 }
        ]
      }
    ]
  },
  description: "Neige d’Été est une ode à l’épure et à la précision japonaise au service de la haute gastronomie française. Le chef Hideki Nishi, ancien du Taillevent, y livre une partition sans fausse note dans un écrin d’un blanc virginal, calme et lumineux. Étoilé au Guide Michelin, l'établissement se distingue par une technique chirurgicale et une maîtrise absolue des cuissons et des assaisonnements, faisant de chaque plat un moment de contemplation.",
  insider_tip: "• **La Discrétion** : Le lieu est très discret, presque secret. C’est l’endroit idéal pour un rendez-vous confidentiel ou une célébration intime.\n• **Le Déjeuner** : Profitez du menu déjeuner à 65€, c’est l’un des meilleurs rapports qualité-prix de Paris pour une table de ce standing.\n• **Le Pigeon** : Si le pigeon de Vendée est à la carte, n’hésitez pas. La cuisson sur le coffre est d'une tendreté exemplaire.",
  specials: {
    cuisine: ["Japonais"],
    drinks: ["Grands crus classés", "Sakés d’exception", "Thés de cérémonie"],
    must_eat: "Cuisine japonaise. Le Pigeon de Vendée rôti sur le coffre : une démonstration de maîtrise technique et de respect du produit.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/neige-d-ete/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Le Pigeon de Vendée rôti sur le coffre : une démonstration de maîtrise technique et de respect du produit.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default neige_d_ete;
