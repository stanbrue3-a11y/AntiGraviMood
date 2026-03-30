import { SurgicalPlace } from "../../../type-definition";

export const present: SurgicalPlace = {
  id: "poi-present",
  slug: "present",
  name: "Présent",
  category: "restaurant",
  subcategory: ["les"],
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
          { name: "Focaccia Toastée & Pesto d'Herbes", price_cents: 750 },
          { name: "Bowl de pickles maison", price_cents: 450 },
          { name: "Croquettes de Patate Douce (x3)", price_cents: 1100 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Gourmands & Végétaux (Plats)",
        items: [
          { name: "The OG Burger (Steak végétal/Cheddar végan)", price_cents: 1900, is_highlight: true },
          { name: "Bowl 'Présent' (Céréales/Légumes rôtis/Sauce cacahuète)", price_cents: 1700 },
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
          { name: "Mocktail 'Solar' (Agrumes/Gingembre)", price_cents: 1000, is_highlight: true },
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
  description: "Présent est le prolongement gastronomique du concept-store Aujourd'hui Demain, situé dans le 11ème. Ce néo-bistro éthique propose une cuisine 100% végétale, créative et gourmande, loin des clichés. Dans un décor minimaliste et chaleureux, on y déguste des petites assiettes à partager, des burgers d'anthologie et une sélection pointue de vins natures et de boissons artisanales.",
  insider_tip: "• **Le Burger** : Leur 'OG Burger' est une référence du genre à Paris, même pour les non-végétaliens.\n• **Vins Orange** : La sélection de vins orange est particulièrement bien sourcée, parfaite pour accompagner les épices du menu.\n• **Brunch** : Le week-end, le lieu se transforme pour un brunch complet et très prisé.",
  specials: {
    cuisine: ["Cuisine 100% Végétale", "Smashed Potatoes", "OG Burger"],
    drinks: ["Vins Natures", "Matcha Latte de haute qualité", "Mocktails signatures"],
    must_eat: "Les Smashed Potatoes with mayo miso (9.50€) : croustillantes à l'extérieur, fondantes à l'intérieur, un régal absolu.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEFvS1lPfx_JcTq03zp4WUwC0XwJc-3PWMcX9plf3erEvZNbmrVuJSidqVPTePjp-HSA2J4hQnA6CvxRbV7KNW20NHdqdUIp-fS5NAXQlAta-589SjDnTXzKSKl3apQBSMagrNPmTLAP5TQNvc9caH9CywB-E_ujGJJ46ehmfWPklPG7BuVG0d82sX9X2rZk3RbFnC87x9XQmeMKr2nTaTT-75fX5LSLOsFvnNzSCrddT0flGuwMB64s-KqUEafaI8LLEgkAiRB1aS7Z-UBRdaLKnRw7IfUssfzen-PH6TWcJg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHiUoR8V_FGhlGH93EO8xnJ0crCWP0y-EMLRCt3NmV0NxoTt766lYk9hc42cPZ-mErAn7teR2n7p9_z9N7knA50hC4Dhe4eWlDmTJPEliF4_1clg_nEpfhpllyvTRJnQ2RGisjgr5zs3ItFP365lP8578Vv5GT-PbBErkuD8SUcxdkmZPyh7vlPRvYn81V9vq0KUKxcDo8SbCs7i_GhRG-I7DbLvGukZeUEmrRuQvB9keJGcy02SN-M0b_Y6pAPDIZ4zLp4lIbtHgKhhFAGrbmdEI65Sgv0i8hSNfRAdRjKaQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHXKr_3kHHcRqLJFxA5wf7Y8W-unZmD6UaqPx8qQI8yqevnXTPNRrLDfD1wqh1HFjzOLTPLMGpqJ5UeI-csB-z0LTsgPfaw0xkZzl2in0-vAbCUmP0GreOZfL5-suAxFtCBFoC0S_2tjpC0KOCPl8-6tEW_dkYK_SI8Zru92r4B7489ld3hK-xUy88rVGvswLAvFKEhqD3n2CNubz0HuPPKLGvvmNLi1QebN7l1Q2sP43qMl6IsJ-f3_6dWjTPFmpEgDxuldyTlxWeVX_LaJXO_7W77Knwl0yaukJsFYkE3CQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.8
};

export default present;
