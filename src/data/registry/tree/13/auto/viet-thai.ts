import { SurgicalPlace } from "../../../type-definition";

export const viet_thai: SurgicalPlace = {
  id: "poi-viet-thai",
  slug: "viet-thai",
  name: "Viet Thai",
  category: "restaurant",
  subcategory: ['vietnamien'],
  location: {
    address: "201 - 203 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.82995289999999,
    lng: 2.3567532,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJrfoNjI5x5kcRUQapgtjxF0M"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:00 – 22:30 | mardi: 12:00 – 14:30, 18:00 – 22:30 | mercredi: 12:00 – 14:30, 18:00 – 22:30 | jeudi: 12:00 – 14:30, 18:00 – 22:30 | vendredi: 12:00 – 14:30, 18:00 – 22:30 | samedi: 12:00 – 16:00, 18:00 – 22:30 | dimanche: 12:00 – 16:00, 18:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.instagram.com/viet_thai_75013?igsh=cmZ0c2N6bXpsNHBk&utm_source=qr",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 21,
    dish_price: 13.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Plateaux Découverte & Partage",
        items: [
          { name: "Plateau Gourmand Viet Thai (Assortiment)", price_cents: 2090, is_highlight: true },
          { name: "Plateau Vapeur (Ha Kao, Siu Mai, Banh Cuon)", price_cents: 1850 },
          { name: "Plateau de Brochettes mixtes (x6)", price_cents: 1650 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Le Duel Thaï vs Viet",
        items: [
          { name: "Nems au Porc Maison (x4)", price_cents: 590, is_highlight: true },
          { name: "Nems au Poulet (x4)", price_cents: 590 },
          { name: "Salade de Bœuf à la Citronnelle", price_cents: 1290, is_highlight: true },
          { name: "Salade de Bœuf Thaï (Mi-cuit)", price_cents: 1390 },
          { name: "Raviolis aux Crevettes (Ha Kao x4)", price_cents: 750 },
          { name: "Rouleaux de Printemps Frais (x2)", price_cents: 650 },
          { name: "Samoussa au Bœuf (x3)", price_cents: 600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Spécialités Vietnamiennes",
        items: [
          { name: "Phở Spéciale Maison (Dac Biet)", price_cents: 1350, is_highlight: true },
          { name: "Bo Bun Royal (Bœuf & Nems)", price_cents: 1300 },
          { name: "Bœuf Loc Lac au Riz Tomaté", price_cents: 1400 },
          { name: "Soupe de Nouilles au Canard (5 parfums)", price_cents: 1450 },
          { name: "Marmite de Bœuf au Gingembre", price_cents: 1500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Saveurs de Thaïlande",
        items: [
          { name: "Pad Thaï au Poulet (Traditionnel)", price_cents: 1090, is_highlight: true },
          { name: "Curry Vert au Lait de Coco & Crevettes", price_cents: 1450 },
          { name: "Poulet sauté aux Noix de Cajou", price_cents: 1300 },
          { name: "Gambas grillées à la mode de Bangkok", price_cents: 1850 },
          { name: "Larme du Tigre (Bœuf émincé grillé)", price_cents: 1750 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons Asia",
        items: [
          { name: "Perle de Coco chaude (x2)", price_cents: 500 },
          { name: "Banane au Lait de Coco & Tapioca", price_cents: 650 },
          { name: "Gingembre Confis", price_cents: 450 },
          { name: "Bière Singha (Thaïlande)", price_cents: 600 },
          { name: "Thé Glacé à la Citronnelle", price_cents: 500, is_highlight: true },
          { name: "Lait de Soja Artisanal", price_cents: 400 },
          { name: "Café Vietnamien glacé", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Viet Thai est une escale incontournable pour les amateurs de dualité culinaire sur l’Avenue de Choisy. Ce restaurant familial marie avec brio les saveurs délicates du Vietnam et la vivacité épicée de la Thaïlande. Réputé pour son accueil chaleureux et ses plateaux découverte généreux, l'établissement offre une carte lisible et authentique où les classiques (Pad Thaï, Bo Bun) côtoient des plats de fête comme la Larme du Tigre ou les Gambas grillées.",
  insider_tip: `• **Le Combo Découverte** : Si vous hésitez, le ’Plateau Gourmand Viet Thai' offre le meilleur tour d'horizon des entrées maison.
  • **Spécialité Cachée** : Leur soupe au canard ’5 parfums' est une merveille de réconfort, souvent moins citée que le Pho mais tout aussi maîtrisée.
  • **Rafraîchissement** : Le thé glacé citronnelle maison est préparé chaque jour, indispensable pour apaiser les feux du curry vert.`,
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Singha", "Café Vietnamien"],
    must_eat: "Cuisine vietnamienne. Plateaux découverte & Pad Thaï",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/viet-thai/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine vietnamienne. Plateaux découverte & Pad Thaï",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default viet_thai;
