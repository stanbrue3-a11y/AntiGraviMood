import { SurgicalPlace } from "../../../type-definition";

export const masaikuta: SurgicalPlace = {
  id: "poi-masaikuta",
  slug: "masaikuta",
  name: "Masaikuta",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "26 bis Rue de la Fontaine au Roi, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.86825169999999,
    lng: 2.3712067,
    nearest_metro: "Saint-Ambroise",
    metro_lines: [9],
    google_id: "ChIJu5WzfwBt5kcR59pglaMThqE"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 19:00 – 21:30 | mercredi: 12:00 – 14:00, 19:00 – 21:30 | jeudi: 12:00 – 14:00, 19:00 – 21:30 | vendredi: 12:00 – 14:00, 19:00 – 21:30 | samedi: 12:00 – 14:00, 19:00 – 21:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.masaikuta.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 65,
    is_free: false,
    dish_price: 32, // Plat principal médian (Poisson/Viande)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Finesse & Iode (Entrées)",
        items: [
          { name: "Carpaccio de Daurade, sauce Ponzu maison", price_cents: 1600, is_highlight: true },
          { name: "Saint-Jacques snackées, émulsion d’algues", price_cents: 1800, is_highlight: true },
          { name: "Bouillon Dashi clair, tofu & gingembre", price_cents: 900 },
          { name: "Tartare de Thon Rouge, avocat & sésame", price_cents: 1700 },
          { name: "Tempura de Légumes de saison (x4)", price_cents: 1400 },
          { name: "Aubergine grillée au Miso sucré (Nasu Dengaku)", price_cents: 1200 },
          { name: "Gyoza artisanaux au Porc & Chou (x5)", price_cents: 1100 },
          { name: "Salade d’Algues Hijiki & Edamame", price_cents: 850 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats d’Exquise Tradition (Plats)",
        items: [
          { name: "Cabillaud à la vapeur de Saké, légumes croquants", price_cents: 2800, is_highlight: true },
          { name: "Canard rôti aux épices japonaises & Teriyaki", price_cents: 3200, is_highlight: true },
          { name: "Filet de Bœuf façon Tataki, sauce Wafu", price_cents: 3400 },
          { name: "Bœuf Wagyu A5 (Supplément 50g)", price_cents: 4500 },
          { name: "Risotto de Petit Épeautre, Shiitake & Nori", price_cents: 2400 },
          { name: "Saumon Label Rouge Teriyaki, riz Niigata", price_cents: 2600 },
          { name: "Tofu soyeux frit, dashi & katsuobushi", price_cents: 2100 },
          { name: "Porc fermier katsu, sauce tonkatsu maison", price_cents: 2500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Saveurs Zen (Desserts)",
        items: [
          { name: "Mochi Glacé Artisanal (Yuzu / Matcha / Sésame)", price_cents: 850, is_highlight: true },
          { name: "Tartelette Chocolat noir & Sésame noir", price_cents: 1100, is_highlight: true },
          { name: "Gelée de Yuzu & Fruits frais de saison", price_cents: 950 },
          { name: "Crème brûlée au Thé Hojicha", price_cents: 1000 },
          { name: "Dorayaki minute à la pâte d’Azuki", price_cents: 1200 },
          { name: "Sorbet Shiso & Citron vert", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Sakés & Vins (Boissons)",
        items: [
          { name: "Saké Junmai ’Nature' (Verre 12cl)", price_cents: 1400, is_highlight: true },
          { name: "Saké Gingo fruité (Verre 12cl)", price_cents: 1600 },
          { name: "Bouteille Saké Premium (72cl)", price_cents: 8500 },
          { name: "Verre de Sancerre Blanc ’Florès'", price_cents: 1300, is_highlight: true },
          { name: "Verre de Bourgogne Rouge ’Pinot Noir'", price_cents: 1100 },
          { name: "Champagne de Vigeron (Coupe)", price_cents: 1800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Thés de Cérémonie & Softs (Boissons)",
        items: [
          { name: "Thé Vert Sencha Supérieur (Théière)", price_cents: 850, is_highlight: true },
          { name: "Thé Matcha Kirara préparé au chasen", price_cents: 950 },
          { name: "Thé Genmaicha (Riz soufflé)", price_cents: 750 },
          { name: "Infusion Gingembre & Miel", price_cents: 650 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 500 },
          { name: "Café Espresso Terres de Café", price_cents: 350 },
          { name: "Jus de Yuzu frais & Eau pétillante", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Masaikuta est le joyau franco-japonais du chef Masahide Ikuta dans le 11ème. Entre épure nipponne et technique gastronomique française, le chef propose une partition d’une justesse folle : cabillaud vapeur de saké, bœuf wagyu A5 et desserts au matcha millimétrés. Le cadre minimaliste, boisé et serein, invite à une dégustation contemplative accompagnée d’une sélection de sakés d’exception.",
  insider_tip: "• **Le Saké** : Ne faites pas l’impasse sur le saké Junmai conseillé pour accompagner le poisson, l’accord est magistral.\n• **Wagyu** : Si le budget le permet, le supplément Wagyu A5 offre une expérience de fondant inégalée.\n• **Sérénité** : C’est le lieu idéal pour un dîner calme et raffiné loin de l’agitation d’Oberkampf.",
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Sakés Junmai rares", "Thé Matcha de cérémonie", "Vins de Loire"],
    must_eat: "Cuisine japonaise. Le Cabillaud vapeur de saké (28€) : une texture d’une délicatesse absolue, servi avec des légumes croquants et un bouillon dashi profond.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/masaikuta/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.9,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Le Cabillaud vapeur de saké (28€) : une texture d’une délicatesse absolue, servi avec des légumes croquants et un bouillon dashi profond.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default masaikuta;
