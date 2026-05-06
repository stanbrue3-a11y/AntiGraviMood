import { SurgicalPlace } from "../../../type-definition";

export const present: SurgicalPlace = {
  id: "poi-present",
  slug: "present",
  name: "Présent",
  category: "restaurant",
  subcategory: ['gastronomique'],
  location: {
    address: "13bis Ave Parmentier, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.8598611,
    lng: 2.3786695,
    nearest_metro: "Parmentier",
    metro_lines: [3],
    google_id: "ChIJDzIBdv9t5kcRFnNj-bg24Ck"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 17:00 – 00:00 | mercredi: 17:00 – 00:00 | jeudi: 17:00 – 00:00 | vendredi: 17:00 – 00:00 | samedi: 17:00 – 00:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://aujourdhui-demain.com/present/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 35,
    is_free: false,
    dish_price: 18, // Plat principal médian (Burger/Bowl)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Petites Assiettes à Partager (Entrées)",
        items: [
          { name: "Smashed Potatoes & Mayo au Miso", price_cents: 950, is_highlight: true },
          { name: "Hummus de saison & Huile de Paprika", price_cents: 850 },
          { name: "Tacos de Pleurotes façon Al Pastor", price_cents: 1200, is_highlight: true },
          { name: "Kimchi Artisanal Maison", price_cents: 550 },
          { name: "Chou-fleur rôti & Tahini", price_cents: 900 },
          { name: "Focaccia Toastée & Pesto d’Herbes", price_cents: 750 },
          { name: "Bowl de pickles maison", price_cents: 450 },
          { name: "Croquettes de Patate Douce (x3)", price_cents: 1100 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Gourmands & Végétaux (Plats)",
        items: [
          { name: "The OG Burger (Steak végétal/Cheddar végan)", price_cents: 1900, is_highlight: true },
          { name: "Bowl ’Présent' (Céréales/Légumes rôtis/Sauce cacahuète)", price_cents: 1700 },
          { name: "Schnitzel de Seitan & Purée onctueuse", price_cents: 2050, is_highlight: true },
          { name: "Pasta à la crème de Courge & Sauge", price_cents: 1850 },
          { name: "Steak de Courge musquée grillée", price_cents: 1750 },
          { name: "Lasagnes Végétales à la bolognaise de soja", price_cents: 1800 },
          { name: "Curry de Pois Chiches & Lait de Coco", price_cents: 1650 },
          { name: "Grande Salade de Saison", price_cents: 1600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts (Desserts)",
        items: [
          { name: "Cheesecake Végan à la Myrtille", price_cents: 950, is_highlight: true },
          { name: "Brownie double chocolat & Fleur de sel", price_cents: 850 },
          { name: "Cookie moelleux (Pépites choco)", price_cents: 450 },
          { name: "Banana Bread grillé & Beurre de Noix", price_cents: 750 },
          { name: "Chia Pudding aux fruits exotiques", price_cents: 800 },
          { name: "Affogato végan (Espresso & Vanille)", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons Créatives & Natures (Boissons)",
        items: [
          { name: "Verre de Vin Nature (Blanc/Rouge/Orange)", price_cents: 900, is_highlight: true },
          { name: "Mocktail ’Solar' (Agrumes/Gingembre)", price_cents: 1000, is_highlight: true },
          { name: "Kombucha Artisanal en pression", price_cents: 700 },
          { name: "Limonade Maison au Basilic", price_cents: 650 },
          { name: "Bière Artisanale (Canette 33cl)", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Caféterie de Spécialité (Boissons)",
        items: [
          { name: "Espresso (Lomi Selection)", price_cents: 300 },
          { name: "Oat Flat White", price_cents: 550, is_highlight: true },
          { name: "Matcha Latte (Quality A)", price_cents: 650 },
          { name: "Chaï Latte Maison", price_cents: 600 },
          { name: "Eau filtrée Septime (75cl)", price_cents: 450 },
          { name: "Thé Bio (Earl Grey/Vert)", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Présent est le prolongement gastronomique du concept-store Aujourd’hui Demain, situé dans le 11ème. Ce néo-bistro éthique propose une cuisine 100% végétale, créative et gourmande, loin des clichés. Dans un décor minimaliste et chaleureux, on y déguste des petites assiettes à partager, des burgers d'anthologie et une sélection pointue de vins natures et de boissons artisanales.",
  insider_tip: "• **Le Burger** : Leur ’OG Burger' est une référence du genre à Paris, même pour les non-végétaliens.\n• **Vins Orange** : La sélection de vins orange est particulièrement bien sourcée, parfaite pour accompagner les épices du menu.\n• **Brunch** : Le week-end, le lieu se transforme pour un brunch complet et très prisé.",
  specials: {
    cuisine: ["Haute Gastronomie"],
    drinks: ["Vins Natures", "Matcha Latte de haute qualité", "Mocktails signatures"],
    must_eat: "Haute gastronomie. Les Smashed Potatoes with mayo miso (9.50€) : croustillantes à l’extérieur, fondantes à l’intérieur, un régal absolu.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/present/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Haute gastronomie. Les Smashed Potatoes with mayo miso (9.50€) : croustillantes à l’extérieur, fondantes à l",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default present;
