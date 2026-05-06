import { SurgicalPlace } from "../../../type-definition";

export const khao_thai: SurgicalPlace = {
  id: "poi-khao-thai",
  slug: "khao-thai",
  name: "Khao Thaï",
  category: "restaurant",
  subcategory: ['thaï'],
  location: {
    address: "10 Rue des Gobelins, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.835158,
    lng: 2.351859,
    nearest_metro: "Les Gobelins",
    metro_lines: ["7"],
    google_id: "ChIJUQ2wQt9x5kcRnBT5N-KN9tg"
  },
  moods: {
    chill: 75,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Ouvert tous les jours: 12:00–14:30, 19:00–22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://khaothaiparis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 25,
    dish_price: 17.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Formules (Plats)",
        items: [
          { name: "Formule Midi (E+P ou P+D)", price_cents: 1700, is_highlight: true },
          { name: "Formule Midi Complète (E+P+D)", price_cents: 2100 },
          { name: "Menu Dégustation Khao Thaï", price_cents: 3600, is_highlight: true },
          { name: "Plat du Jour + Riz", price_cents: 1500 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Saveurs du Siam",
        items: [
          { name: "Nems au Poulet (x4)", price_cents: 950 },
          { name: "Nems aux Crevettes (x4)", price_cents: 1050 },
          { name: "Salade de Papaye Verte (Som Tam)", price_cents: 1100, is_highlight: true },
          { name: "Salade de Bœuf Épicée (Yam Neua)", price_cents: 1300 },
          { name: "Brochettes de Poulet Saté (x4)", price_cents: 1200 },
          { name: "Raviolis Vapeur aux Crevettes", price_cents: 1100 },
          { name: "Soupe Tom Yam Gung (Indispensable)", price_cents: 1250, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Pad Thaï & Nouilles",
        items: [
          { name: "Pad Thaï aux Crevettes (Signature)", price_cents: 1700, is_highlight: true },
          { name: "Pad Thaï au Poulet", price_cents: 1600 },
          { name: "Pad Thaï au Bœuf", price_cents: 1700 },
          { name: "Nouilles Sautées aux Légumes", price_cents: 1450 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Currys & Spécialités",
        items: [
          { name: "Massaman Neua (Curry Cacahuète)", price_cents: 1750, is_highlight: true },
          { name: "Bœuf au Curry Panang", price_cents: 1800 },
          { name: "Poulet au Curry Vert & Bambou", price_cents: 1700 },
          { name: "Le Tigre qui Pleure (Bœuf Grillé)", price_cents: 2400, is_highlight: true },
          { name: "Bœuf au Basilic Thaï (Pad Kra Prao)", price_cents: 1800 },
          { name: "Crevettes au Gingembre Frais", price_cents: 2200 },
          { name: "Canard Laqué au Curry Rouge", price_cents: 2100 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Riz Gluant à la Mangue & Coco", price_cents: 1100, is_highlight: true },
          { name: "Nem au Chocolat & Banane", price_cents: 850 },
          { name: "Flan Thaï au Lait de Coco", price_cents: 800 },
          { name: "Coupe de Fruits Exotiques", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons d’Ailleurs",
        items: [
          { name: "Bière Singha (Bouteille)", price_cents: 650 },
          { name: "Bière Chang (Bouteille)", price_cents: 650 },
          { name: "Jus de Coco Frais", price_cents: 550 },
          { name: "Thé Vert au Jasmin", price_cents: 450 },
          { name: "Verre de Vin Blanc (Sauvignon)", price_cents: 650 }
        ]
      }
    ]
  },
  description: "Khao Thaï Gobelins est une escale élégante qui transporte ses convives au cœur de Bangkok sans quitter le 13e. Réputé pour son cadre soigné et ses saveurs balancées, le restaurant propose une carte qui est un véritable hommage à la gastronomie siamoise. Du curry Massaman onctueux au légendaire Tigre qui Pleure, chaque plat est une invitation au voyage, préparé avec une rigueur qui lui vaut une place de choix parmi les institutions thaïlandaises du quartier.",
  insider_tip: `• **Le Choix Royal** : Le ’Tigre qui Pleure' est ici particulièrement réussi, avec une viande tendrement marinée et une sauce tamarin addictive.
  • **Douceur Finale** : Ne repartez pas sans goûter au Mango Sticky Rice (riz gluant à la mangue), un dessert qui rivalise avec les meilleurs stands de street-food de Thong Lo.
  • **Le Midi** : La formule à 17€ est un rapport qualité-prix imbattable pour un déjeuner d’affaires ou une pause gourmande.`,
  specials: {
    cuisine: ["Asiatique"],
    drinks: ["Singha", "Chang"],
    must_eat: "Cuisine Thaïlandaise. Pad Thaï & Tigre qui Pleure",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/khao-thai/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Thaïlandaise. Pad Thaï & Tigre qui Pleure",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default khao_thai;
