import { SurgicalPlace } from "../../../type-definition";

export const zhao_bastille: SurgicalPlace = {
  id: "poi-zhao-bastille",
  slug: "la-taverne-de-zhao-bastille",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "vibrant"],
  location: {
    address: "67 rue de la Roquette, 75011 Paris, France",
    arrondissement: 11,
    lat: 48.8565406,
    lng: 2.3763954,
    nearest_metro: "Bastille",
    metro_lines: [1, 5, 8],
    google_id: "ChIJXxrlTatt5kcR-pgTGrbTeUs"
  },
  moods: {
    chill: 20,
    festif: 85,
    culturel: 55
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:30 – 22:30 | mardi: 12:00 – 14:30, 18:30 – 22:30 | mercredi: 12:00 – 14:30, 18:30 – 22:30 | jeudi: 12:00 – 14:30, 18:30 – 22:30 | vendredi: 12:00 – 14:30, 18:30 – 22:30 | samedi: 12:00 – 22:30 | dimanche: 12:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/bastille/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Raviolis (Jiaozi)",
        items: [
          { name: "Salade de Tofu frité", price_cents: 480 },
          { name: "Algues marinées au sésame", price_cents: 450 },
          { name: "Pommes de terre à la vinaigrette de Xi'an", price_cents: 420 },
          { name: "Oreilles de porc pimentées", price_cents: 550 },
          { name: "Concombre frappé à l'ail", price_cents: 450 },
          { name: "Raviolis Porc & Chou (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Végétariens (8 pièces)", price_cents: 1150 },
          { name: "Assiette dégustation (12 pièces)", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Burgers Chinois (Mo's)",
        items: [
          { name: "Mo au Porc mijoté", price_cents: 650, description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price_cents: 700 },
          { name: "Mo au Canard laqué", price_cents: 750 },
          { name: "Mo Végétarien", price_cents: 600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats (Biang Biang)",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price_cents: 1280, description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price_cents: 1150 },
          { name: "Biang Biang Poulet croustillant", price_cents: 1300 },
          { name: "Biang Biang Tomate & Œuf", price_cents: 1080, description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price_cents: 1450 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs Maison",
        items: [
          { name: "Mochi glacé (2)", price_cents: 450 },
          { name: "Perles de coco", price_cents: 480 },
        ]
      }
    ]
  },
  description: "En plein cœur de la rue de la Roquette, cette taverne capte toute l'énergie électrique du quartier. Plus vibrante que ses sœurs, elle est le point de ralliement des amateurs de saveurs percutantes. Les Biang Biang y sont servies avec un rythme effréné dans un décor urbain qui colle à l'esprit nocturne de Bastille.",
  insider_tip: "• C'est l'adresse idéale pour un repas rapide avant de sortir dans les bars de la Roquette.\n• Les tables sont plus serrées ici, ce qui renforce l'ambiance conviviale et dynamique du lieu.\n• Demandez les Biang Biang Poulet croustillant, c'est le 'comfort food' par excellence pour affronter la nuit parisienne.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    must_eat: "Cuisine chinoise. Biang Biang Poulet & Mo Bœuf",
  },
  images: {
    hero: "AU_ZVEE_DAg6LufPHUinB9iD0CRwn-KIDT9uTjrFPppuBpswgW0sdLCriYjmfAVN6XbvAy3oT7-R3iCd5ro2YyXaSDyI3fpxnGbXQUTyCUg4eGQqMUmw7VUysJKq6i0-XQO4Gc4KBUQ776m7sGUSLRi-ybnnwfZcqL7RI2bUAmHwrWS42XUh3slOLWu_utOkfXE1Z3pKuaX63mBtz9Z3Ey1_vDXubLHlMUDGWe2OPJlMYeaUxQ6RP34y0GSv7tWJYbkpLoOnzM4MFJFGfe6YA2FRXm8Sl-8DUiL9pYp8sh3wHTy0PQ",
    gallery: [
      "AU_ZVEGIqhl3EgLLrc5RX-cE_kca5xBl0R07ltYNfL-LkADfwtxs1imAiWLm5xK8Pn3PkNgyQswgTSZDbgSHME6QTqYVtrSpWtGjshYhUvFfG73EsqdWVOLmqmNvTTEMvbaXXuSE3JtUpPFgEPr1STATFuLqf4VvJCus59Gul6Qxun-F-ie76oxIGLfoXyQ7UlajjtrPGS0TxGPaCN3LV0cZYBx2mw2HRYJ2yEaF7e7Co7UtAhz-OkK-0R-wka24S1k6UyJ4p7tJjjTTP0kq0LyR1RydeW8p3aerGOHO7OXG6EIX_A",
      "AU_ZVEElDRZJoQuoaDw8KpSi4ZuE44HTrWYh259mwPWLl2-lVCIaFBw5lVLpwn5JT2N4P30eAlbQHYmv5jltxn4GY4z0aoWHLmux5oW8-jFTRqfLailUrgXh3-swbOw19t_xms5Hiba0uFjKP32eqhHAw9uZueX8C5xYvtK8sMNhZrlCxKR4uZE6vjyys2cXaX4P0BjYDFeAVSdZxo-sFMCAEBKRozWbBdVv6H9z0KKMzoJCtYJ8Xr42h-hYWRyxBS0VpNBNhzL5it5BFLvAl3Zf5eiCZmOGAlSbcPiAA1JukgMQO9PeDiRDJfD4Ct0Jw4Af3wfltXVTN4Go_ms-wJB1jpizInVRaNKzdKc9hLfFNqh34aQF2_qLfYK1I4ndchB4k4XGiHBcf2_-BGC35auKykhnNtTx0WtNDQykVhOiV4Tbn4wr_4BA2yml23d4sA"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default zhao_bastille;
