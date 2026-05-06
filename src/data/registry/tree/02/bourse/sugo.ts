import { SurgicalPlace } from "../../../type-definition";

export const sugo: SurgicalPlace = {
  id: "poi-sugo-pasta-fresca-saint-augustin",
  slug: "sugo-pasta-fresca-saint-augustin",
  name: "SUGO pasta fresca - Saint-Augustin",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "16 Rue Saint-Augustin, 75002 Paris, France",
    arrondissement: 2,
    lat: 48.8690001,
    lng: 2.3361959,
    nearest_metro: "Quatre-Septembre",
    metro_lines: [3],
    google_id: "ChIJ-WZa4A9v5kcRPgA2aczQBnQ"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 15:00, 19:00 – 22:30 | dimanche: 12:00 – 15:00, 19:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.sugoparis.com/",
      label: "SITE WEB"
    }
  },
  pricing: {
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
        {
            category_type: "other",
            display_label: "Antipasti",
            items: [
                { name: "Carciofini (Artichauts des Pouilles, olives Taggiasche)", price_cents: 1000 },
                { name: "Mozzarella di Bufala (Tomates séchées des Pouilles)", price_cents: 1000 },
                { name: "Polpette (Boulettes de veau, sauce Sugo, parmesan)", price_cents: 1200 },
                { name: "Salade Betterave Ricotta (Vinaigrette orange)", price_cents: 900 },
                { name: "Velouté Courge (Butternut, mascarpone, noisettes)", price_cents: 800 }
            ]
        },
        {
            category_type: "other",
            display_label: "Pâtes Fraîches (Permanent - Prix midi / soir)",
            items: [
                { name: "Sugo (Sauce tomate sarde cuite 4h, ail)", price_cents: 1200 },
                { name: "Sugo (Prix Soir)", price_cents: 1500 },
                { name: "Cacio e Pepe (Pecorino Romano, poivre torréfié)", price_cents: 1500 },
                { name: "Cacio e Pepe (Prix Soir)", price_cents: 1700 },
                { name: "Pesto (Basilic, amandes de Sicile, Pecorino)", price_cents: 1500 },
                { name: "Pesto (Prix Soir)", price_cents: 1700 },
                { name: "Amatriciana (Tomate sarde, guanciale, Pecorino)", price_cents: 1500 },
                { name: "Amatriciana (Prix Soir)", price_cents: 1700 },
                { name: "Ragù (Effiloché de boeuf, tomate sarde, Gremolada)", price_cents: 1500 },
                { name: "Ragù (Prix Soir)", price_cents: 1800 }
            ]
        },
        {
            category_type: "other",
            display_label: "Le Semainier (Spécialités - Prix Soir)",
            items: [
                { name: "Lundi : Puttanesca (Tomates, olives, câpres, anchois)", price_cents: 1800 },
                { name: "Mardi : Carbonara (Pecorino, oeuf, Guanciale)", price_cents: 1800 },
                { name: "Mercredi : Burro Salvia Limone (Beurre, sauge, citron)", price_cents: 1800 },
                { name: "Jeudi : Lasagna (Ragu de boeuf Angus, béchamel)", price_cents: 1800 },
                { name: "Vendredi : Salsiccia (Aubergines et saucisse artisanale)", price_cents: 1800 },
                { name: "Samedi : Ruggine (Pesto, sauce Sugo, olives Ligure)", price_cents: 1800 },
                { name: "Dimanche : Carciofi (Crème d’artichaut, guanciale)", price_cents: 1800 }
            ]
        },
        {
            category_type: "dessert",
            display_label: "Dolci (Desserts)",
            items: [
                { name: "Tiramisu (Mascarpone crémeux, café, chocolat)", price_cents: 700 },
                { name: "Torta Caprese (Fondant chocolat Valrhona, amandes)", price_cents: 700 },
                { name: "Panna Cotta (Fleur d’oranger, praliné pistache)", price_cents: 600 }
            ]
        }
    ]
  },
  description: "SUGO est la nouvelle ambassade de la pasta fresca à Paris. Ici, les pâtes sont fabriquées sur place chaque matin à partir de semoule de blé dur bio. Le concept est simple : des recettes italiennes authentiques, des produits sourcés directement chez les petits producteurs, et une générosité sans compromis.",
  insider_tip: "• **Timing Stratégique** : Venez dès l’ouverture pour éviter la file d'attente sur la rue Saint-Augustin.\n• **Combo Moelle** : La Carbonara est le pilier du lieu, à déguster sur place.\n• **Détail Secret** : Les pâtes sont fraîches, pétries et étirées quotidiennement.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Softs", "Vin"],
    must_eat: "Cuisine italienne. Carbonara Authentique",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sugo-pasta-fresca-saint-augustin/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Carbonara Authentique",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default sugo;
