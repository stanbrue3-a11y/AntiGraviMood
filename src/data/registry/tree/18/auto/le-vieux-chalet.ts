import { SurgicalPlace } from "../../../type-definition";

export const le_vieux_chalet: SurgicalPlace = {
  id: "poi-le-vieux-chalet",
  slug: "le-vieux-chalet",
  name: "Le Vieux Chalet",
  category: "restaurant",
  subcategory: ['français', 'terrasse'],
  location: {
    address: "14 bis Rue Norvins, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8869736,
    lng: 2.3402793,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJGz8iSVtu5kcRpfomTl1YfWA"
  },
  moods: {
    chill: 95,
    festif: 25,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: 12:30 – 14:30, 19:30 – 21:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=6952810557496294053",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées de Tradition",
        items: [
        { name: "Soupe à l’Oignon Maison Gratinée", price_cents: 950 },
        { name: "Escargots de Bourgogne (x6)", price_cents: 1250, description: "Beurre persillé et ail" },
        { name: "Terrine du Chef & Cornichons", price_cents: 850 },
        { name: "Salade de Chèvre chaud sur Toast", price_cents: 1100 },
        { name: "Méli-mélo de Tomates Mozzarella", price_cents: 1050 },
        { name: "Os à Moelle à la Fleur de Sel", price_cents: 950 }
      ]},
      {
        category_type: "main",
        display_label: "Les Plats Gourmands",
        items: [
        { name: "Bœuf Bourguignon à l’Ancienne", price_cents: 1850 },
        { name: "Confit de Canard du Sud-Ouest", price_cents: 1950 },
        { name: "Sole Meunière Citronnée", price_cents: 2800 },
        { name: "Magret de Canard au Miel & Épices", price_cents: 2100 },
        { name: "Blanquette de Veau au Riz Pilaf", price_cents: 1750 },
        { name: "Faux-filet Grillé (250g)", price_cents: 2250 },
        { name: "Truite Meunière aux Amandes", price_cents: 1800 },
        { name: "Plateau de Fromages de Nos Régions", price_cents: 1450 }
      ]},
      {
        category_type: "dessert",
        display_label: "Les Douceurs Maison",
        items: [
        { name: "Tatin Maison & Crème Fraîche", price_cents: 850 },
        { name: "Crème Brûlée à la Cassonade", price_cents: 750 },
        { name: "Mousse au Chocolat Noir 70%", price_cents: 650 },
        { name: "Profiteroles au Chocolat chaud", price_cents: 950 },
        { name: "Café très Gourmand", price_cents: 1000 }
      ]}
    ]
  },
  description: "Un secret bien gardé de la rue Norvins. Ce restaurant rustique cache l’un des plus beaux jardins-terrasses de la Butte. On y déguste une cuisine française familiale et sans prétention, à l’ombre des arbres, loin de l’agitation de la place du Tertre voisine.",
  insider_tip: "• **Timing Stratégique** : En été, demandez impérativement une table dans le jardin intérieur, loin de la rumeur de la rue Norvins.\n• **Combo Moelle** : Le Confit de Canard est ici une référence, particulièrement avec les pommes de terre à la lyonnaise.\n• **Expérience Culturelle** : Prenez le temps d’observer les photos d'époque aux murs ; elles racontent le Montmartre des peintres et des poètes.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Grands Vins", "Liqueurs Artisanales"],
    must_eat: "Cuisine Français.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-vieux-chalet/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Français.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_vieux_chalet;
