import { SurgicalPlace } from "../../../type-definition";

export const present: SurgicalPlace = {
  id: "poi-present",
  slug: "present",
  name: "Présent",
  category: "restaurant",
  subcategory: [],
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
    wifi: false,
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
        category: "Petites Assiettes à Partager (Entrées)",
        items: [
          { name: "Smashed Potatoes & Mayo au Miso", price: "9.50€", highlight: true },
          { name: "Hummus de saison & Huile de Paprika", price: "8.50€" },
          { name: "Tacos de Pleurotes façon Al Pastor", price: "12.00€", highlight: true },
          { name: "Kimchi Artisanal Maison", price: "5.50€" },
          { name: "Chou-fleur rôti & Tahini", price: "9.00€" },
          { name: "Focaccia Toastée & Pesto d'Herbes", price: "7.50€" },
          { name: "Bowl de pickles maison", price: "4.50€" },
          { name: "Croquettes de Patate Douce (x3)", price: "11.00€" }
        ]
      },
      {
        category: "Plats Gourmands & Végétaux (Plats)",
        items: [
          { name: "The OG Burger (Steak végétal/Cheddar végan)", price: "19.00€", highlight: true },
          { name: "Bowl 'Présent' (Céréales/Légumes rôtis/Sauce cacahuète)", price: "17.00€" },
          { name: "Schnitzel de Seitan & Purée onctueuse", price: "20.50€", highlight: true },
          { name: "Pasta à la crème de Courge & Sauge", price: "18.50€" },
          { name: "Steak de Courge musquée grillée", price: "17.50€" },
          { name: "Lasagnes Végétales à la bolognaise de soja", price: "18.00€" },
          { name: "Curry de Pois Chiches & Lait de Coco", price: "16.50€" },
          { name: "Grande Salade de Saison", price: "16.00€" }
        ]
      },
      {
        category: "Douceurs & Desserts (Desserts)",
        items: [
          { name: "Cheesecake Végan à la Myrtille", price: "9.50€", highlight: true },
          { name: "Brownie double chocolat & Fleur de sel", price: "8.50€" },
          { name: "Cookie moelleux (Pépites choco)", price: "4.50€" },
          { name: "Banana Bread grillé & Beurre de Noix", price: "7.50€" },
          { name: "Chia Pudding aux fruits exotiques", price: "8.00€" },
          { name: "Affogato végan (Espresso & Vanille)", price: "7.00€" }
        ]
      },
      {
        category: "Boissons Créatives & Natures (Boissons)",
        items: [
          { name: "Verre de Vin Nature (Blanc/Rouge/Orange)", price: "9.00€", highlight: true },
          { name: "Mocktail 'Solar' (Agrumes/Gingembre)", price: "10.00€", highlight: true },
          { name: "Kombucha Artisanal en pression", price: "7.00€" },
          { name: "Limonade Maison au Basilic", price: "6.50€" },
          { name: "Bière Artisanale (Canette 33cl)", price: "8.50€" }
        ]
      },
      {
        category: "Caféterie de Spécialité (Boissons)",
        items: [
          { name: "Espresso (Lomi Selection)", price: "3.00€" },
          { name: "Oat Flat White", price: "5.50€", highlight: true },
          { name: "Matcha Latte (Quality A)", price: "6.50€" },
          { name: "Chaï Latte Maison", price: "6.00€" },
          { name: "Eau filtrée Septime (75cl)", price: "4.50€" },
          { name: "Thé Bio (Earl Grey/Vert)", price: "5.50€" }
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
