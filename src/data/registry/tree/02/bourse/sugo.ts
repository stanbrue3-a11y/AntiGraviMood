import { SurgicalPlace } from "../../../type-definition";

export const sugo: SurgicalPlace = {
  id: "poi-sugo-pasta-fresca-saint-augustin",
  slug: "sugo-pasta-fresca-saint-augustin",
  name: "SUGO pasta fresca - Saint-Augustin",
  category: "restaurant",
  subcategory: ["italien", "pâtes", "frais", "traiteur", "cantine"],
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
    wifi: false,
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
            category: "Antipasti",
            items: [
                { name: "Carciofini (Artichauts des Pouilles, olives Taggiasche)", price: "10.00€" },
                { name: "Mozzarella di Bufala (Tomates séchées des Pouilles)", price: "10.00€" },
                { name: "Polpette (Boulettes de veau, sauce Sugo, parmesan)", price: "12.00€" },
                { name: "Salade Betterave Ricotta (Vinaigrette orange)", price: "9.00€" },
                { name: "Velouté Courge (Butternut, mascarpone, noisettes)", price: "8.00€" }
            ]
        },
        {
            category: "Pâtes Fraîches (Permanent - Prix midi / soir)",
            items: [
                { name: "Sugo (Sauce tomate sarde cuite 4h, ail)", price: "12.00€" },
                { name: "Sugo (Prix Soir)", price: "15.00€" },
                { name: "Cacio e Pepe (Pecorino Romano, poivre torréfié)", price: "15.00€" },
                { name: "Cacio e Pepe (Prix Soir)", price: "17.00€" },
                { name: "Pesto (Basilic, amandes de Sicile, Pecorino)", price: "15.00€" },
                { name: "Pesto (Prix Soir)", price: "17.00€" },
                { name: "Amatriciana (Tomate sarde, guanciale, Pecorino)", price: "15.00€" },
                { name: "Amatriciana (Prix Soir)", price: "17.00€" },
                { name: "Ragù (Effiloché de boeuf, tomate sarde, Gremolada)", price: "15.00€" },
                { name: "Ragù (Prix Soir)", price: "18.00€" }
            ]
        },
        {
            category: "Le Semainier (Spécialités - Prix Soir)",
            items: [
                { name: "Lundi : Puttanesca (Tomates, olives, câpres, anchois)", price: "18.00€" },
                { name: "Mardi : Carbonara (Pecorino, oeuf, Guanciale)", price: "18.00€" },
                { name: "Mercredi : Burro Salvia Limone (Beurre, sauge, citron)", price: "18.00€" },
                { name: "Jeudi : Lasagna (Ragu de boeuf Angus, béchamel)", price: "18.00€" },
                { name: "Vendredi : Salsiccia (Aubergines et saucisse artisanale)", price: "18.00€" },
                { name: "Samedi : Ruggine (Pesto, sauce Sugo, olives Ligure)", price: "18.00€" },
                { name: "Dimanche : Carciofi (Crème d'artichaut, guanciale)", price: "18.00€" }
            ]
        },
        {
            category: "Dolci (Desserts)",
            items: [
                { name: "Tiramisu (Mascarpone crémeux, café, chocolat)", price: "7.00€" },
                { name: "Torta Caprese (Fondant chocolat Valrhona, amandes)", price: "7.00€" },
                { name: "Panna Cotta (Fleur d'oranger, praliné pistache)", price: "6.00€" }
            ]
        }
    ]
  },
  description: "SUGO est la nouvelle ambassade de la pasta fresca à Paris. Ici, les pâtes sont fabriquées sur place chaque matin à partir de semoule de blé dur bio. Le concept est simple : des recettes italiennes authentiques, des produits sourcés directement chez les petits producteurs, et une générosité sans compromis.",
  insider_tip: "• **Timing Stratégique** : Venez dès l'ouverture pour éviter la file d'attente sur la rue Saint-Augustin.\n• **Combo Moelle** : La Carbonara est le pilier du lieu, à déguster sur place.\n• **Détail Secret** : Les pâtes sont fraîches, pétries et étirées quotidiennement.",
  specials: {
    cuisine: ["Italienne", "Pasta Bar"],
    drinks: ["Softs", "Vin"],
    must_eat: "Cuisine italienne. Carbonara Authentique",
  },
  images: {
    hero: "AU_ZVEGU-yvi0YgTOeTpPWEFJ1-QGjW-MKu0h6uMUQMa5yf3siZi8Sw8rasfc9Iu_GFdYi_gxX5HDmCZoOM_WAikDXTeDT8q5fvE-EpZHkzt9BioycEtGt_fBaf7Qc_9CDJ4zMBWOU2uhdakzd52-SWXDZjNgP08bfnxw8bXQ8QshcTW_JGoOZP_kjW0qUppfY9bQsjMod4uWogOP4facIoQyvu1k_mTp8l88q27hp-Iy6Nl_Qmp-2bJx1Wd4mJxLMFBP7LVxLcn-oOxVPR5IhkWTJ1LuMP9jk1qiIuz29pJabuJbw",
    gallery: [
      "AU_ZVEEcKGBAKcbrPVNhXWLWELjn8chwSfMPC74B_ailrjVPU_cwzQz-OC77W6jbotZ_0gHlr3UMO48j7sZZMN900OLKz5PGQgENKIvfQFXU_juvoqNcLnDygFPXxX13uP_j_LzYoB4Kg613jKh9q97-siWP87PNH-pWhRbbomB0yb4WXPWn1kYo5lpAY0sWJDLXKyrJ5CeTGgrzG3XHCPxGal_8SGbcSPIvwPfVH-6weOsB4arpaXuKTy23Rv04zN4xps-PyLxrJBDXxWAO6Jimhuxd3R_XStFbLugPMztaDGye6jVW-HhBHYGC7yrLm2oUXzuvWQxSAS3FPBrM6gWZrDoe6Gd_f5LlUk9u31r7ZaS3T6f_Do4H78oHsAP8ObmGH42i1eKCUF5AB-G6BvjKWeRyBcTbXdhdQ1hQecrjHrQjiMNoUzlk1yZ5fn1V2tJa",
      "AU_ZVEEsgOuPrf4XQg1ITdy46kz9zoQS1X1M14Kb1BeJSn-2YU_aPSwJyj0pE-ZzmTH6gGbpsHfZGqYr6hvJtQHpygOgyrDHt10u451vbiox-CQqtkd8M3Oi_8OZ0tnvGKdARzqlUbwthN6567Bog6Okjez8GZCcqBAwfY16drqUOkPnhm9D1t1euz4E1vxFuTMR3y54B3yF8DkKGTTP__iY7HG_-dK8CKDXHwM8gWrupBexRvBvRiawqJGSIumERCS3gcYmEFBPAVS3Y-6NUzAZvmXjHQE94Me3ieamUdH32IxSg"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default sugo;
