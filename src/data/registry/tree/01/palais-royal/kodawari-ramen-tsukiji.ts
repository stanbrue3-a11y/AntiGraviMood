import { SurgicalPlace } from "../../../type-definition";

export const kodawari_ramen_tsukiji: SurgicalPlace = {
  id: "poi-kodawari-ramen-tsukiji",
  slug: "kodawari-ramen-tsukiji",
  name: "Kodawari Ramen (Tsukiji)",
  category: "restaurant",
  subcategory: ["japonais", "ramen", "poisson", "palais-royal", "insolite"],
  location: {
    address: "12 Rue de Richelieu, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.8643421,
    lng: 2.3362452,
    nearest_metro: "Palais Royal - Musée du Louvre",
    metro_lines: [1, 7],
    google_id: "ChIJme1o5vVv5kcRzuT1Uxyk-Rc"
  },
  moods: {
    chill: 40,
    festif: 80,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: 11:45 – 23:00 | mardi: 11:45 – 23:00 | mercredi: 11:45 – 23:00 | jeudi: 11:45 – 23:00 | vendredi: 11:45 – 23:00 | samedi: 11:45 – 23:00 | dimanche: 11:45 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.kodawari-ramen.com/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 22,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées de la Criée",
        items: [
          { name: "Namero de féra du Lac Léman", price_cents: 950, description: "Haché de poisson frais, miso, gingembre" },
          { name: "Gyoza Kodawari de la mer (x5)", price_cents: 900 },
          { name: "Edamame au sel de mer d'Okinawa", price_cents: 550 },
          { name: "Sashimi de Dorade Royale", price_cents: 1200 },
          { name: "Crabe en mue croustillant", price_cents: 1150 }
        ]
      },
      {
        category_type: "other",
        display_label: "Ramen Signature (Bouillons de Mer)",
        items: [
          { name: "Paitan de Dorade Royale", price_cents: 1650, description: "Bouillon épais et crémeux de dorade, chashu de poulet" },
          { name: "Shio de Dorade Royale", price_cents: 1550, description: "Bouillon clair, finesse marine" },
          { name: "Sardine Bomb (Niboshi)", price_cents: 1800, description: "Bouillon intense à la sardine de Bretagne" },
          { name: "Ramen de Homard (Spécial)", price_cents: 2400 },
          { name: "Abura Soba de la mer (sans bouillon)", price_cents: 1700 },
          { name: "Ramen Végétalien aux algues", price_cents: 1500 }
        ]
      },
      {
        category_type: "other",
        display_label: "Suppléments & Toppings",
        items: [
          { name: "Extra Ajitama (Œuf mollet mariné)", price_cents: 250 },
          { name: "Extra Chashu de porc Label Rouge", price_cents: 400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Marine & Japonaises",
        items: [
          { name: "Taiyaki au haricot rouge Azuki", price_cents: 750, description: "Gaufre en forme de poisson, un classique" },
          { name: "Cheesecake au Thé Vert Matcha & Framboise", price_cents: 850 },
          { name: "Daifuku du moment (Mochi artisanal)", price_cents: 600 },
          { name: "Gelée de Yuzu rafraîchissante", price_cents: 650 },
          { name: "Crème brûlée au Sésame Noir", price_cents: 800 },
          { name: "Taiyaki Glacé (Vanille / Matcha)", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Franchir la porte du Kodawari Tsukiji, c'est quitter Paris pour se retrouver en plein cœur de l'ancien marché aux poissons de Tokyo. Entre les étals de faux poissons criants de vérité, la fumée des bouillons et les bruits de la criée, l'immersion est totale. On y déguste des ramen d'une finesse rare, basés sur des bouillons de mer complexes, loin des classiques porc/poulet. Une expérience sensorielle unique à Paris.",
  insider_tip: "• Pas de réservation possible : arrivez 15-20 min avant l'ouverture de 11h45 ou préparez-vous à faire la queue (qui avance vite).\n• Le 'Sardine Bomb' est réservé aux amateurs de saveurs iodées très intenses.\n• Le décor est tellement immersif qu'il vaut à lui seul le détour culturel (90/100).",
  specials: {
    cuisine: ["Japonaise", "Ramen", "Poisson"],
    drinks: ["Bière japonaise", "Thé vert rare"],
    must_eat: "Ramen de la mer. Paitan de Dorade Royale & Taiyaki",
  },
  images: {
    hero: "AU_ZVEGS0jMDJS6mrf1ESCiqOMCfXMmtF68f8yFwQHVqSMq0ihNogEqoM8b4tRPFL3OB2tgcK10q1hTC-gBHw6xxUUIA-Wi3LsWjykUoPT36ruVfQD6FwaAaJVk37JVciz6Sh4Cy_fw6uILx3uwyudS4Iee-cmJGYDe3IRDhz9ZQcZaija7sQdY4pzEF6-QKxckO1oY9NIV1SPhFvTAviSCTzwYv4qQU-YDar_26oJoVzMrq5FERPIxNTbpWBgf1Squpmv5fmFA77uuVDUzSYjn2erqjL2tlSPELzPN4kDABbnmf8Q",
    gallery: [
      "AU_ZVEHhbVntlP3lxcTF9jYbKkpSrMnr9VnW3sYEp5sy1PiQGbbKw6Ce1P7xGvLhClY6FDFDRaKzQQlnWtCmkPs7BHKn1Q2GAqyNI4oKzNrm-Qspz1ENe1ouCfIYvE7D6ia8HIWENEwD6bAk4oH7kxeBc6odq3ddFEvFGIbCK9_9eOdYdsVUVDZnP_z9m7jWcgh69ZTQOjYuEhuxGclBVMP7nu-rXzhVOdUZJzcH4fO3VvnPnpInBYecodW2VJzmL_2TEDEl8I_mIXgwMftLHAP8GYqwlkRv_NpU0CAIxfIMzUfTxw",
      "AU_ZVEG-9PJDvBpZKGQsTe2-sjK_wWeWHd79cmgcHpcVwVDOYIf1f3TtYTrUYUCko926BU_gQ65h0GTmPXXOevQ-lvV5kiO1vfmXrRIe6WRI1d_onqKZ3K_RZQc2PCjm5NTauvF6EeEK6Epv41qlNSqnaZrqqAwj9820LYe_5luUfflvYNvu8HeRLhd6DuNPsNZd4DzKq3Vx_owozEmcNwtzbSJSzekdpPIqJsrLR9Yc1WQbrKlMMpFxrnw_uVlYktrZXLd5MPpb5u0RnOB0koSkFdUI3TD5M67V-WQQRzvpVtj0zVI-yzLh8oVIeHvP7chVriPxypb90-bN6QvZMkCViJVCh0Ajc-NjaxRRCrKxPO_JEVvoe5iVEV0XqO17DKHML4F4kA_MtQNfn-FPy1tcI6M4q53Yyj1lKJNXxFJrghhqw3q9Qk0cicxMgATf2oc_"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default kodawari_ramen_tsukiji;
