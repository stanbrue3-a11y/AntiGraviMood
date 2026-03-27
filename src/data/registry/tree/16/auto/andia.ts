import { SurgicalPlace } from "../../../type-definition";

export const andia: SurgicalPlace = {
  id: "poi-andia",
  slug: "andia",
  name: "ANDIA",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "19 Chau. de la Muette, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8581596,
    lng: 2.2722369,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ6RIysFRl5kcRgTQU1vLwwWg"
  },
  moods: {
    chill: 50,
    festif: 95,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 01:00 | mardi: 12:00 – 14:30, 19:00 – 01:00 | mercredi: 12:00 – 14:30, 19:00 – 01:00 | jeudi: 12:00 – 14:30, 19:00 – 02:00 | vendredi: 12:00 – 14:30, 19:00 – 02:00 | samedi: 12:00 – 15:00, 19:00 – 03:00 | dimanche: 12:00 – 15:00, 19:00 – 01:00",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://andia-paris.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 75,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Para Picar & Tacos",
        items: [
          { name: "Tequeños au Fromage (x4)", price: "15€", description: "Beignets croustillants, sauce aji verde" },
          { name: "Beef Tacos (x3)", price: "19€", description: "Bœuf confit, oignons rouges, coriandre", highlight: true },
          { name: "Guacamole Maison & Tortillas", price: "14€" },
          { name: "Empanadas au Poulet", price: "16€" }
        ]
      },
      {
        category: "Raw Bar & Ceviches",
        items: [
          { name: "Ceviche Clasico", price: "24€", description: "Bar, lait de tigre, patate douce", highlight: true },
          { name: "Ceviche de Thon à la Truffe", price: "28€" },
          { name: "Tiradito de Saint-Jacques", price: "26€", description: "Fruit de la passion et piment doux" },
          { name: "Poke Bowl Salmon", price: "22€" }
        ]
      },
      {
        category: "Asador & Grill",
        items: [
          { name: "Thon Grillé à l'Andine", price: "38€", description: "Légumes sautés au wok", highlight: true },
          { name: "Anticucho de Poulet Marinée", price: "22€", description: "Brochettes péruviennes" },
          { name: "Entrecôte Black Angus (300g)", price: "42€" },
          { name: "Poulpe Grillé Chimichurri", price: "36€" },
          { name: "Burger Andia", price: "28€" }
        ]
      },
      {
        category: "Postres & Cocktails",
        items: [
          { name: "Churros & Sauce Chocolat", price: "12€", highlight: true },
          { name: "Pavlova Tropicale", price: "14€" },
          { name: "Cocktail 'Pisco Sour' Classique", price: "16€" },
          { name: "Andia Margarita", price: "17€" },
          { name: "Expresso", price: "4€" }
        ]
      }
    ]
  },
  description: `Occupant l'ancienne gare de la Muette, ANDIA est un voyage spectaculaire vers les hauts plateaux andins. Sous une verrière monumentale ou dans son jardin luxuriant, le restaurant propose une immersion totale : ambiance jungle-luxe, playlist tribale et cuisine fusion fusionnant les saveurs du Pérou, du Mexique et du Brésil. C'est le lieu de fête par excellence du quartier, où le dépaysement est garanti dès l'entrée.`,
  expert_catchline: `L'aventure andine dans une gare historique du 16ème arrondissement.`,
  insider_tip: `• **Le Jardin** : C'est l'un des espaces extérieurs les plus dépaysants de Paris. En été, on se croirait à Tulum.
  • **Le Bar à Ceviche** : Installez-vous au comptoir pour voir la préparation minute des poissons crus, c'est saisissant de fraîcheur.
  • **After-Dinner** : Le lieu monte en puissance après 22h, idéal pour ceux qui veulent combiner dîner et fête.`,
  specials: {
    cuisine: ["Andine Fusion", "Péruvien"],
    drinks: ["Pisco Sour", "Cocktails Exotiques"],
    must_eat: "Cuisine Andine. Le Ceviche Clasico avec son lait de tigre percutant.",
  },
  images: {
    hero: "AU_ZVEFcm2rbFsrpMZ9YNWzX3ReaKK8qOT4Ntd_eYAQDI8VfMLxh01eERqtm_jlK5Zx5fLTvoSZyWLCX7wCzUYr214wLv2Xbp5-BQfi09W8-zRzToyUXNTaltIE5Z8Iuvv-jaa7J1UvUdDQrH0Kc3SJQK-z-XO5ZLqenzYgAC7AOBVs6kGBKY-eRRt0z2AyTCcGpL-Vlo2bLyXzfWo8zYCdNJXHQ-p7iuItBPlLUJoH3EQ6imfdp1s-iYOO5PamCWLoum7fvb5pQnsW4tCuaxPb6yyDupzUUrVoWaW3yESh12h5O3w6hLPJE3TRA4jr5fox0Ok_7eE02phAVX_2hOXUcKefwZywtKmobbaan_zy1H4gsgyATBSk2jjSJ28cRJq-O5-W2StdQW5aqTRRlgAlRCTvtObQ6hUMbXEmvs4U96SsyNss",
    gallery: ["AU_ZVEFf3zAu-OT7X1nNPmJfB7_a1FjH_ErsYarAGoiLPRCtqK7QXBh7vHGry_C4cIgZuujj7IFGdEEs0mNmaWio8p_Vy-8cdubkYaSCrxSgShy5_w44ZL6473IcU0CYnxKj-p_2QxIjm3CN6xsJ0xPeO7WdKVLy-ulDC97fluKrsl2HREqsH1sh3IPeqzHRKaT18e5F21DOukEOsnSZ7QTygImWqd5gLZvG-BarjN75VCR3eBDvrTJL0MD2qGrbmP2xGy0073FKbR1Zzn2Y9ebrQmtuIc9c9sx-1MSf5_XaBRB6lB7GoO0Mv0NzlfnhXRiUgGLK9ZZ4OxfmFFMY5tMSegHJy2BVikzyOW_IO73Oj0rz4ez9Yt2vIoxUB-nIcPSvY5DtfrH00iFNNlsFKGNzIQiWH85wetj8VOOz_kEhkeTRxs3xkn6Vn_0yURUyNe4D","AU_ZVEHd9Q-erhb0510jKqrmnzG4S-SGuz8v7xMLeRzZYK-sKOhBv6n4BNQSvz-9dRw_Gatp9wMcnbphv0IEHCU2Cp_vfCaVtY-qiW1T_E8ZZZd6GgOv_BzbOr5hY6mKopPhZ1uNsA_SMJCcCNOwpCQytSMF6_w3YlQV0Y4drCIvURo2xtBdiiC5fXk-BxpWTL3Wj8pfcPJ57c8YkohzRTexAu66wlAEFLMlkvJx7j-qreAieKVbJNhB48cvCCP-OQ3Wh2qtyO21ZrPctGbDFJ1l5zYqZXoBQuhyvPt60XKZD57alw"]
  },
  verified: true,
  google_rating: 4.3,
  real_talk: {
    text: "ANDIA, c'est l'un des rares endroits du 16ème où l'on oublie totalement qu'on est à Paris. Le décor de la verrière est fou. Ce n'est pas le Pérou authentique menu ouvrier, mais c'est une version luxe et festive très réussie. On y vient pour voir et être vu, dans un nuage de fumée de grillade et de musique latino.",
    must_eat: "Ceviche Clasico",
    le_secret: "La gare possède une zone VIP mazzanine pour ceux qui veulent vraiment de l'intimité tout en restant dans le bruit de la fête.",
    le_son: "Reggaeton chic, Afro-house et sons tribaux.",
    le_must: "Partager un plateau de tacos avec une série de Margaritas glacées."
  }
};

export default andia;
