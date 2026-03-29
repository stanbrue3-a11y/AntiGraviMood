import { SurgicalPlace } from "../../../type-definition";

export const l_age_d_or: SurgicalPlace = {
  id: "poi-l-age-d-or",
  slug: "l-age-d-or",
  name: "L'Âge d'Or",
  category: "restaurant",
  subcategory: ["bistrot", "culturel", "bio", "fait-maison"],
  location: {
    address: "26 Rue du Dr Magnan, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8265342,
    lng: 2.3598635,
    nearest_metro: "Tolbiac",
    metro_lines: [7],
    google_id: "ChIJiQepvIhx5kcRjn9X73FvFao"
  },
  moods: {
    chill: 70,
    festif: 60,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 00:00 | mardi: 09:00 – 00:00 | mercredi: 09:00 – 00:00 | jeudi: 09:00 – 02:00 | vendredi: 09:00 – 02:00 | samedi: 09:00 – 03:00 | dimanche: 09:00 – 00:00",
    reservation_policy: "sans_resa",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lagedorparis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    is_free: false,
    dish_price: 16.00,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Cuisine de Saison (Plats)",
        items: [
          { name: "Burger de L'Âge d'Or (Bœuf ou Végé)", price_cents: 1650, is_highlight: true },
          { name: "Kare Raisu (Curry Japonais Bio)", price_cents: 1500, is_highlight: true },
          { name: "Mafé Sénégalais au Poulet Fermier", price_cents: 1550 },
          { name: "Tartare au couteau Yukwe (Kréen)", price_cents: 1700 },
          { name: "Entrecôte du Perche & Frites Maison", price_cents: 2400 },
          { name: "Parmentier de Canard Confit", price_cents: 1750 },
          { name: "Filet de Dorade Grise, émulsion citron", price_cents: 1800 },
          { name: "Chili Con Carne Maison (Épicé)", price_cents: 1550 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Salades (Plats)",
        items: [
          { name: "Œufs Cocotte au Chorizo Bio", price_cents: 950 },
          { name: "Salade de Chèvre Chaud du Perche", price_cents: 1450 },
          { name: "Velouté de Potiron & Graines toastées", price_cents: 800 },
          { name: "Salade César façon L'Âge d'Or", price_cents: 1500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Tapas & Partage (Plats - Soir)",
        items: [
          { name: "Samosas Maison Boeuf (x5)", price_cents: 950, is_highlight: true },
          { name: "Planche Ibérico'Perche (Mixte)", price_cents: 2200, is_highlight: true },
          { name: "Planche de Fromages Bio Affinés", price_cents: 1650 },
          { name: "Houmous Maison & Pain Grillé", price_cents: 750 },
          { name: "Croquettes de Mozzarella Panko", price_cents: 850 },
          { name: "Nems aux Légumes Croquants (x4)", price_cents: 800 },
          { name: "Bol de Frites Maison & Sauce Secrète", price_cents: 650 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs (Desserts)",
        items: [
          { name: "Fondant Chocolat Noir & Chantilly", price_cents: 850, is_highlight: true },
          { name: "Skyr Bio, Miel & Granola maison", price_cents: 750 },
          { name: "Tarte Tatin Artisanal", price_cents: 850 },
          { name: "Mochi Glacés (x3 - Parfum au choix)", price_cents: 900 },
          { name: "Dessert du Jour aux Fruits de saison", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons & Cocktails",
        items: [
          { name: "Cocktail 'La Nuit Sera Calme'", price_cents: 1150, is_highlight: true },
          { name: "Cocktail 'Paris au mois d'août'", price_cents: 1150 },
          { name: "Pinte Deck & Donohue (Locale)", price_cents: 850 },
          { name: "Verre de Vin Nature (Sélection)", price_cents: 700 },
          { name: "Jus de Pomme Bio du Perche", price_cents: 500 },
          { name: "Ginger Beer Maison (25cl)", price_cents: 550 },
          { name: "Café Costadoro Bio Italie", price_cents: 280 },
          { name: "Thé Artisanal Lydia Gautier", price_cents: 480 }
        ]
      }
    ]
  },
  description: "L'Âge d'Or n'est pas qu'un restaurant, c'est un carrefour culturel vibrant du 13e arrondissement. Alliant une cuisine locavore et bio (produits du Perche, viandes raisonnées) à une programmation artistique exigeante, le lieu respire la liberté et la créativité. On y vient pour un curry japonais le midi ou pour partager des planches de charcuteries pyrénéennes lors d'un concert le soir.",
  insider_tip: "• **Vibe Culturelle** : Consultez leur programmation avant de venir, les soirées concerts transforment totalement l'atmosphère.\n• **Cuisine Fusion** : Ne soyez pas surpris par le mélange Mafé / Curry / Burger, chaque plat est une spécialité maîtrisée par l'équipe.\n• **Terrasse Calme** : La terrasse sur la rue Magnan est l'une des plus agréables et paisibles du quartier pour un verre en fin de journée.",
  specials: {
    cuisine: ["Français", "Autre"],
    drinks: ["Cocktail", "Bière", "Vin"],
    must_eat: "Cuisine Bistrot. Burger de L'Âge d'Or & Kare Raisu",
  },
  images: {
    hero: "AU_ZVEHKims1OMVmscHUST4R3rEhrHAML0a2PoyfUPwbic2f-U0HgCyOdQm7gB0F9sJLTCN-0mzNW1inFOUn6QDvtKicKBs8Sazgta7iQP0VvUNlIPT9BirurGW0GQPraw8-U8VwlsPtCPUrutr9am2A7svW4rPMCfqJZswmhi5IMb46RHeNCC8aKRIrbRbpYLy1oHDiIg5ba8mK2fQfW2wV76GfTtgNTfbT1Qm86cIeC5B6hkCncMSwtJAvDoBNPOH3pRocDNWcV2c8Cowz6g3F7J3PLPOW9Shg9yooEB2sE0aBYQ",
    gallery: ["AU_ZVEGI9V_oRZo6SAbW3FvbGx_lwVAMrzn80VP4kYdsvsMPkzz9szR1354WxYXC0QxnAdhWsdVxYSBTou7xsS8tu07zWRZtZSq0fiHt-1TyNga4ggqJKVq3WI-q7mUcV6lDCU5v1uCkas6j87Xl7AV_NFLRGWYFl5vCFisisdPJ4jYLWYxNBCza0OitmexadikKJv__mOsCjToS0-oUI5xf0w-aLh5Jf6QMjEARkSf5neLAjMTS0IbjRiqCCW9njPXisr8so9UomX4pKnKmj3caDuMtxOtjAcRzvimrBOWPX94R-w","AU_ZVEHzGW037h1IRH4pJVbFqv7CL0hQrKKm_Y9kH8bPWzIVFHine8l1nQe5A6b7B2ShOt2KoGF2XsvF50KsyMWCBO4QKbn8uOO07eeO5kqT1-8CrFEGIXim9XMddq7QjgfARxkXE3lc1PNdQp5Yp84EaEp802iLW57CW_P_aE9YmYiTumn1WluRV-xELTFIR0NnF7B_0iPiGaPHtl0qSEBg23pfdDLIANFB17ovURXKbt-AnfKBGhsro_Zy1ENWCzT05gKOcowKVGZG1RAN30jN2AN2g7DAx12FiNT5W4XeMj8LrA"]
  },
  verified: false,
  google_rating: 4.2
};

export default l_age_d_or;
