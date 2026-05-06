import { SurgicalPlace } from "../../../type-definition";

export const bouillon_pigalle: SurgicalPlace = {
  id: "poi-bouillon-pigalle",
  slug: "bouillon-pigalle",
  name: "Bouillon Pigalle",
  category: "restaurant",
  subcategory: ['bouillon'],
  location: {
    address: "22 Bd de Clichy, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8826242,
    lng: 2.3374171,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJVb7Sx0Vu5kcR5gDcYjssPWw"
  },
  moods: {
    chill: 30,
    festif: 85,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://bouillonlesite.com/bouillon-pigalle",
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
        display_label: "Entrées Populaire",
        items: [
        { name: "Œuf Mayonnaise (Champion du Monde)", price_cents: 250, description: "L’incontournable classique parfaitement exécuté" },
        { name: "Poireaux Vinaigrette & Noisettes", price_cents: 340 },
        { name: "Os à Moelle Grillé", price_cents: 450, description: "Gros sel et pain de campagne" },
        { name: "Céleri Rémoulade Muscadet", price_cents: 280 },
        { name: "Sardines à l’Huile & Beurre", price_cents: 480 },
        { name: "Terrine de Campagne Maison", price_cents: 420 },
        { name: "Bulots et Mayonnaise Maison", price_cents: 650 },
        { name: "Soupe à l’Oignon Gratinée", price_cents: 390 }
      ]},
      {
        category_type: "main",
        display_label: "Plats de Tradition",
        items: [
        { name: "Saucisse au Couteau & Purée", price_cents: 960, description: "Véritable purée maison au beurre, jus de viande" },
        { name: "Petit-salé aux Lentilles", price_cents: 1180 },
        { name: "Blanquette de Veau à l’Ancienne", price_cents: 1250 },
        { name: "Confit de Canard & Pommes Sarladaises", price_cents: 1350 },
        { name: "Steak Frites Sauce Poivre", price_cents: 1280 },
        { name: "Brandade de Morue Gratinée", price_cents: 1050 },
        { name: "Gratin de Macaronis au Jambon", price_cents: 900 },
        { name: "Pot-au-Feu Traditionnel", price_cents: 1150 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Riz au lait au Caramel Beurre Salé", price_cents: 350 },
        { name: "Mousse au Chocolat (Pot de 100g)", price_cents: 450 },
        { name: "Île Flottante à la Praline Rose", price_cents: 380 },
        { name: "Éclair Géant au Chocolat", price_cents: 450 },
        { name: "Baba au Rhum Ambré", price_cents: 550 },
        { name: "Profiterole au Chocolat Chaud", price_cents: 520 }
      ]}
    ]
  },
  description: "Le renouveau du bouillon parisien à Pigalle. Une immense brasserie démocratique où l’on savoure les classiques de la cuisine bourgeoise (œuf mayo, saucisse-purée, profiterole) à des prix imbattables. Un lieu vibrant, bruyant et convivial qui capture l'énergie du quartier.",
  insider_tip: "• **Stratégie d’Attente** : Le lieu ne prend pas de résa et la file peut impressionner. Venez à 11h45 ou vers 14h30 pour un passage quasi immédiat.\n• **Expérience Terrasse** : Demandez impérativement l’étage pour profiter de la terrasse chauffée qui surplombe le boulevard de Clichy.\n• **Combo Satiété** : L’œuf mayo à 2.50€ est obligatoire. Enchaînez avec la saucisse-purée (légendaire) pour l’unité de mesure ’Moelle’ ultime.",
  specials: {
    cuisine: ["Bouillon"],
    drinks: ["Vins au pichet", "Bières à la pression"],
    must_eat: "Cuisine française traditionnelle. ",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-pigalle/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française traditionnelle. ",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default bouillon_pigalle;
