import { SurgicalPlace } from "../../../type-definition";

export const tang_gourmet: SurgicalPlace = {
  id: "poi-tang-gourmet",
  slug: "tang-gourmet",
  name: "Tang Gourmet",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "188 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8304032,
    lng: 2.3569365,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ01vxhI5x5kcRKVkXLYyhGFU"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 10:00 – 20:00 | mardi: 10:00 – 20:00 | mercredi: 10:00 – 20:00 | jeudi: 10:00 – 20:00 | vendredi: 10:00 – 20:00 | samedi: 10:00 – 20:00 | dimanche: 10:00 – 20:00",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.tang-freres.fr/supermarche-asiatique/tang-gourmet-place-italie-paris-13/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 14.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Rôtisserie Emblématique : Plats à la coupe",
        items: [
          { name: "Canard Laqué Entier (Sauce 5 épices)", price_cents: 2450, is_highlight: true },
          { name: "Demi Canard Laqué", price_cents: 1250 },
          { name: "Porc Laqué (Char Siu) - 500g", price_cents: 1350, is_highlight: true },
          { name: "Porc Croustillant (Poitrine frite) - 500g", price_cents: 1400 },
          { name: "Canard rôti à la Cantonaise (Portion)", price_cents: 1080 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Traiteur & Satiété",
        items: [
          { name: "Riz Canard Laqué (Plat complet)", price_cents: 1450, is_highlight: true },
          { name: "Riz Porc Laqué", price_cents: 1450 },
          { name: "Riz Cantonais Classique (Portion 400g)", price_cents: 1450 },
          { name: "Pad Thaï Crevettes Traiteur", price_cents: 1450 },
          { name: "Nouilles sautées aux Légumes (400g)", price_cents: 1450 },
          { name: "Bœuf aux Oignons & Riz blanc", price_cents: 1350 },
          { name: "Poulet au Curry Coco & Riz", price_cents: 1350 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Bouchées Vapeur & Brioches : Entrées Dim Sum",
        items: [
          { name: "Bao Zi au Porc Laqué (Grosse brioche)", price_cents: 350, is_highlight: true },
          { name: "Bao Zi au Porc Haché", price_cents: 350 },
          { name: "Ha Kao (Raviolis crevettes x4)", price_cents: 850 },
          { name: "Siu Mai (Bouchées porc/crevettes x4)", price_cents: 800 },
          { name: "Nems au Porc Traiteur (x5)", price_cents: 850 },
          { name: "Rouleaux de Printemps Frais (x2)", price_cents: 700 }
        ]
      },
      {
        category_type: "main",
        display_label: "Sandwichs & Snacking Asia : Plats sur le pouce",
        items: [
          { name: "Bánh Mì Spécial Tang (Pâté, Porc)", price_cents: 850 },
          { name: "Bánh Mì au Poulet Citronnelle", price_cents: 850 },
          { name: "Samoussa au Bœuf (la pièce)", price_cents: 250 },
          { name: "Beignet de Crevette (la pièce)", price_cents: 280 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons Asia",
        items: [
          { name: "Perle de Coco (x2)", price_cents: 450 },
          { name: "Nougat Chinois au Sésame", price_cents: 400 },
          { name: "Gelée de Herbes (Boîte)", price_cents: 350 },
          { name: "Boisson au Soja (Brique)", price_cents: 250 },
          { name: "Thé Vert Oolong (Canette)", price_cents: 350 },
          { name: "Jus de Lychee Frais", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Tang Gourmet est le bras armé gastronomique des célèbres supermarchés Tang Frères. Situé stratégiquement sur l'Avenue de Choisy, ce traiteur-rôtisseur est une véritable fourmilière où l'on vient chercher le meilleur canard laqué du quartier, découpé sous vos yeux avec une dextérité fascinante. Entre les étals de Dim Sum vapeur et la rôtisserie dorée, l'établissement propose une immersion brute dans le 'street-food' cantonais de haut vol. Rapide, efficace et d'une fraîcheur irréprochable, c'est l'escale obligatoire pour un déjeuner sur le pouce ou un festin à emporter.",
  insider_tip: `• **Le Maître Rôtisseur** : Demandez spécifiquement le 'bas du canard' si vous aimez la viande plus juteuse, ou le 'haut' pour la finesse de la peau laquée. 
  • **Le Bao Zi d'Or** : Leurs brioches vapeur au porc laqué (Bao Zi) sont parmi les plus généreuses de l'arrondissement. Un rapport qualité-prix imbattable pour un encas.
  • **Flux Tendus** : Évitez le créneau 12h15-13h00 le samedi, la file d'attente s'allonge jusqu'au trottoir. Visez 11h30 pour avoir le premier choix sur la rôtisserie du jour.`,
  specials: {
    cuisine: ["Cantonaise", "Traiteur Asian", "Rôtisserie"],
    drinks: ["Thé Oolong", "Lait de Soja"],
    must_eat: "Rôtisserie. Canard Laqué & Bao Zi au Porc",
  },
  images: {
    hero: "AU_ZVEEOLEOpo2qXOMp8iCeHbUXOZnNBN5nytgoySeQLoROcjQSi3zlCstmHnRjpoZ7ITmko4wp3h_S5OXeRHnTf62u2MW4e01VrEz-7on_9hxg-yOe78VtY4In8dSvdcz0_JjfzAYNRpbo_fdvLXm8CiGz1zPc72sNpCcfwqi4Wr5hAfjjFgibO4KLEiHK2B9i7iOiwpmSCAOrOom1HlgVFye5EkInN8Y35YBCdVllwZ-fJDL2JJHPgLWUB4svENrArLr1lQUOAjhPN52mzJCddvLgLt4Wz9UDkA137n0GFlyHRdg",
    gallery: ["AU_ZVEFeRcefcuhfMvlCGEUJFbXIQCxyMznie_S4LDtEoDGIiYGjuJ5ejoO_2bRADW1-sMeMJss67JxLH1_cHi1SQmC5nPns6NUJxUiEhBpIjBiXbwqcsBi58BXUhsNA7rZo6ohcbmACzS2zgq0dgsevXvB71zVD0delJ28x6S2LK7tw6-7xgcjULzBnC4p4zEe5DBpXpXDlSauu8o5uYnXUHHa83p207IpY-fd6GmUdRCK6UVWdby9S7xZp2zJq4vK5eSFTup9XKJ3eN0Hd7lNvC1S9eTAabteeVU_M7WzdjJZRHNE6FGKTXjsjKMUxL0Q6Sp2acPinbjnCkozQ4419jf95X7hiv57jnFJa0U1MVXnX2Peh-8YWLrXWPxT_53goMwtjEBeTxKkiws9g0g1F6emYIhDH1z5zoirklPEi5T0zHPFu","AU_ZVEFHHiWWb6L5l636riRSC7ddib4mr3vBJ31XE9gKkZ5DKrej119L3UOEOK57b-gptSLL-mFclbXpJo7W69zkadmuaq2HTIcSkVyL_XajA4eJbUdRO2dqkWnYifTdrsNPWYfwXul9Efsj_hD4iWHk-FQwiPnnVEN9GBNL2qmg2q7ogdMF3oISPBo2KPY2FebLAzjiUC6wHa0idNj_tcRVkH2BfzPi-JxtAqKDEjb_aBA-fbl3hzK__sok8eQOgNLuY_mkdu38MkPVAeC2u6Q75hXELZ0qJDNOs2uuFLGRj0_LPyNEMQzouJL2mFVPF_T9SFJRfIst6fhOoHpQLePU6tapEosHqvGikhTBOCzAabItkZfEAbvgiV4_mw-tBtxjCrtenjfb6b-gICsXMbMuPh6PQmkyBZBBfD2xVDQNEQLFIQ"]
  },
  verified: false,
  google_rating: 3.6
};

export default tang_gourmet;
