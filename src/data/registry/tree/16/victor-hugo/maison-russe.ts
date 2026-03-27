import { SurgicalPlace } from "../../../type-definition";

export const maison_revka: SurgicalPlace = {
  id: "poi-maison-revka",
  slug: "maison-revka",
  name: "Maison Revka",
  category: "restaurant",
  subcategory: ["slave", "chic", "gastronomique"],
  location: {
    address: "59 Av. Raymond Poincaré, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8674347,
    lng: 2.285733,
    nearest_metro: "Victor Hugo",
    metro_lines: ["2"],
    google_id: "ChIJj5j2zzVv5kcR7B_8Fvb4_Sk"
  },
  moods: {
    chill: 40,
    festif: 60,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 02:00 | mardi: 12:00 – 15:00, 19:00 – 02:00 | mercredi: 12:00 – 15:00, 19:00 – 02:00 | jeudi: 12:00 – 15:00, 19:00 – 02:00 | vendredi: 12:00 – 15:00, 19:00 – 02:00 | samedi: 12:00 – 15:00, 19:00 – 02:00 | dimanche: 12:00 – 16:00, 19:00 – 02:00",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maisonrevka.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 120,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "L'Or Noir & Entrées",
        items: [
          { name: "Caviar Beluga (50g)", price: "240€", description: "Le summum du luxe slave", highlight: true },
          { name: "Cœur de Saumon Fumé Impérial", price: "34€" },
          { name: "Tarama au Caviar", price: "24€" },
          { name: "Pirojkis à la Viande (x2)", price: "18€" },
          { name: "Salade Olivier Classique", price: "22€" }
        ]
      },
      {
        category: "Plats Signatures",
        items: [
          { name: "Bœuf Strogonoff au Beurre", price: "58€", description: "Émincé de bœuf, sauce onctueuse", highlight: true },
          { name: "Coulibiac de Saumon Maison", price: "48€", description: "En croûte feuilletée, beurre blanc" },
          { name: "Poulet à la Kiev", price: "46€", description: "Beurre d'herbes fondant" },
          { name: "Linguine au Homard & Caviar", price: "75€", highlight: true },
          { name: "Sashimi de Sériole au Yuzu", price: "32€" }
        ]
      },
      {
        category: "Le Jardin Sucré",
        items: [
          { name: "Pavlova aux Fruits Rouges", price: "22€", highlight: true },
          { name: "Saint-Honoré à la Vanille", price: "19€" },
          { name: "Chouquette Impériale (l'unité)", price: "4€" },
          { name: "Assortiment de Sorbets Maison", price: "12€" }
        ]
      },
      {
        category: "Bar & Spiritueux",
        items: [
          { name: "Shot de Vodka Beluga Gold Line", price: "28€" },
          { name: "Cocktail 'Moskovskaya'", price: "22€" },
          { name: "Coupe de Champagne Brut", price: "22€" },
          { name: "Vin Rouge (Saint-Julien)", price: "24€" },
          { name: "Double Expresso", price: "8€" }
        ]
      }
    ]
  },
  description: `Maison Revka est l'écrin du luxe slave à Paris. Dans ce spectaculaire pavillon de l'avenue Raymond Poincaré, l'opulence des décors russes rencontre le glamour parisien. Entre ses boiseries dorées, ses velours profonds et son jardin d'hiver luxuriant, on y déguste une cuisine impériale où le caviar est roi. Une expérience envoûtante, tant visuelle que gustative, orchestrée par Paris Society.`,
  expert_catchline: `L'opulence d'une datcha impériale en plein cœur du 16ème.`,
  insider_tip: `• **Le Jardin d'Hiver** : C'est l'un des plus beaux jardins secrets de Paris. Demandez une table sous la verrière pour une ambiance romantique absolue.
  • **Cérémonie de la Vodka** : Laissez le sommelier vous guider à travers leur collection de vodkas rares, servies dans les règles de l'art.
  • **Tea Time de Luxe** : Leurs pâtisseries sont monumentales, parfaites pour un après-midi chic.`,
  specials: {
    cuisine: ["Slave Moderne", "Russe"],
    drinks: ["Vodkas de collection", "Champagnes de prestige"],
    must_eat: "Cuisine Slave. Le Bœuf Strogonoff, d'une tendreté absolue.",
  },
  images: {
    hero: "AU_ZVEG6pP9xM8pXk0my6r3dqsxnEeC_YYnCkSH-FXD-a0p2RpkVMxY5yaaPikn2trHdhImEtvA_foQyaZ0rqkZ8nDQKRF5BtCykY5gcPBtFBmw_8XRycQF6NfLNpLCbaN6lk83ZhJQ9SbO1lECp8H9IUCAtYpggdLOoB4IEhfzhJJNQiVSoSApcoEjKTT5_xcbHAMUF7gw0aJVQdLbekyi8-4j5R0S5jWuGzpt6OvJlU2_P9afkUPqVgF-p2JNtSByDKQ6lxEG6K5-9SM_IaNw501U2YPOAdlgBAN1r1V_7I",
    gallery: ["AU_ZVEFf3zAu-OT7X1nNPmJfB7_a1FjH_ErsYarAGoiLPRCtqK7QXBh7vHGry_C4cIgZuujj7IFGdEEs0mNmaWio8p_Vy-8cdubkYaSCrxSgShy5_w44ZL6473IcU0CYnxKj-p_2QxIjm3CN6xsJ0xPeO7WdKVLy-ulDC97fluKrsl2HREqsH1sh3IPeqzHRKaT18e5F21DOukEOsnSZ7QTygImWqd5gLZvG-BarjN75VCR3eBDvrTJL0MD2qGrbmP2xGy0073FKbR1Zzn2Y9ebrQmtuIc9c9sx-1MSf5_XaBRB6lB7GoO0Mv0NzlfnhXRiUgGLK9ZZ4OxfmFFMY5tMSegHJy2BVikzyOW_IO73Oj0rz4ez9Yt2vIoxUB-nIcPSvY5DtfrH00iFNNlsFKGNzIQiWH85wetj8VOOz_kEhkeTRxs3xkn6Vn_0yURUyNe4D","AU_ZVEHd9Q-erhb0510jKqrmnzG4S-SGuz8v7xMLeRzZYK-sKOhBv6n4BNQSvz-9dRw_Gatp9wMcnbphv0IEHCU2Cp_vfCaVtY-qiW1T_E8ZZZd6GgOv_BzbOr5hY6mKopPhZ1uNsA_SMJCcCNOwpCQytSMF6_w3YlQV0Y4drCIvURo2xtBdiiC5fXk-BxpWTL3Wj8pfcPJ57c8YkohzRTexAu66wlAEFLMlkvJx7j-qreAieKVbJNhB48cvCCP-OQ3Wh2qtyO21ZrPctGbDFJ1l5zYqZXoBQuhyvPt60XKZD57alw"]
  },
  verified: true,
  google_rating: 4.1,
  real_talk: {
    text: "Maison Revka, c'est le grand spectacle à chaque seconde. On y vient pour les décors autant que pour la carte. C'est brillant, tapageur et délicieux. Le coulibiac de saumon est une petite œuvre d'art gastronomique.",
    must_eat: "Bœuf Strogonoff",
    le_secret: "On peut y acheter certains décors et accessoires dans la boutique attenante.",
    le_son: "Piano-bar en soirée et lounge slave chic.",
    le_must: "Un dîner en tête à tête sous les lustres en cristal du jardin d'hiver."
  }
};

export default maison_revka;
