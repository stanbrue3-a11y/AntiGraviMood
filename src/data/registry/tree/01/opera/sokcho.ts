import { SurgicalPlace } from "../../../type-definition";

export const sokcho: SurgicalPlace = {
  id: "poi-sokcho",
  slug: "sokcho",
  name: "SOKCHO 牛者",
  category: "restaurant",
  subcategory: ["japonais", "steakhouse", "wagyu", "opéra", "viande-exception"],
  location: {
    address: "7 Rue Gomboust, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.868193,
    lng: 2.3328187,
    nearest_metro: "Pyramides / Opéra",
    metro_lines: [7, 14, 3, 8],
    google_id: "ChIJEdSwYMtv5kcRUqEOuvgMrnw"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 12:00 – 14:30, 19:00 – 23:00 | dimanche: 12:00 – 14:30, 19:00 – 22:30",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.sokcho.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    avg_budget: 65,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Entrées & Tapas Japonais",
        items: [
          { name: "Tataki de bœuf Wagyu", price: "18.00€", description: "Fines tranches saisies, sauce ponzu" },
          { name: "Gyoza au bœuf (x5)", price: "10.00€" },
          { name: "Salade d'algues Wakame", price: "7.00€" },
          { name: "Edamame fleur de sel", price: "6.00€" },
          { name: "Carpaccio de Sériole au Yuzu", price: "16.00€" },
          { name: "Tartare de Saumon & Avocat", price: "14.50€" }
        ]
      },
      {
        category: "La Sélection du Boucher (Plats Grill)",
        items: [
          { name: "Faux-filet Wagyu Japonais (100g)", price: "45.00€", description: "Persillage exceptionnel A4/A5" },
          { name: "Entrecôte Wagyu Australie (200g)", price: "52.00€" },
          { name: "Bavette d'aloyau Black Angus", price: "24.00€" },
          { name: "Magret de canard laqué au Miso", price: "26.00€" },
          { name: "Filet de Saumon Teriyaki", price: "22.00€" },
          { name: "Mixed Grill Sokcho (Sélection)", price: "38.00€" },
          { name: "Bœuf au fromage (x3)", price: "12.00€" },
          { name: "Poulet Teriyaki", price: "19.50€" }
        ]
      },
      {
        category: "Accompagnements & Desserts",
        items: [
          { name: "Riz sauté à l'ail et ciboulette", price: "6.50€" },
          { name: "Légumes de saison grillés au Teppan", price: "8.00€" },
          { name: "Purée de pomme de terre au Wasabi", price: "7.50€" },
          { name: "Mochi glacé (x3)", price: "9.00€" },
          { name: "Cheesecake au Thé Vert Matcha", price: "10.00€" },
          { name: "Fondant au Chocolat & Sésame noir", price: "9.50€" }
        ]
      }
    ]
  },
  description: "À deux pas de l'Opéra, Sokcho revisite le concept du steakhouse avec l'élégance japonaise. Spécialiste du bœuf Wagyu d'exception, le lieu propose une viande fondante grillée avec une précision millimétrée. L'ambiance y est épurée, feutrée, idéale pour un dîner intimiste où la qualité du produit est la seule star. Une adresse précieuse pour les amateurs de viandes persillées.",
  insider_tip: "• Réservez impérativement le soir, le lieu est très prisé pour ses pièces de Wagyu.\n• Le déjeuner propose des formules Bento plus accessibles qui valent le détour.\n• Ne passez pas à côté du riz sauté à l'ail, c'est l'accompagnement signature qui sublime la viande.",
  specials: {
    cuisine: ["Japonaise", "Steakhouse", "Wagyu"],
    drinks: ["Saké premium", "Whisky japonais"],
    must_eat: "Japonais Steakhouse. Faux-filet Wagyu & Riz à l'ail",
  },
  images: {
    hero: "AU_ZVEGS0jMDJS6mrf1ESCiqOMCfXMmtF68f8yFwQHVqSMq0ihNogEqoM8b4tRPFL3OB2tgcK10q1hTC-gBHw6xxUUIA-Wi3LsWjykUoPT36ruVfQD6FwaAaJVk37JVciz6Sh4Cy_fw6uILx3uwyudS4Iee-cmJGYDe3IRDhz9ZQcZaija7sQdY4pzEF6-QKxckO1oY9NIV1SPhFvTAviSCTzwYv4qQU-YDar_26oJoVzMrq5FERPIxNTbpWBgf1Squpmv5fmFA77uuVDUzSYjn2erqjL2tlSPELzPN4kDABbnmf8Q",
    gallery: [
      "AU_ZVEHhbVntlP3lxcTF9jYbKkpSrMnr9VnW3sYEp5sy1PiQGbbKw6Ce1P7xGvLhClY6FDFDRaKzQQlnWtCmkPs7BHKn1Q2GAqyNI4oKzNrm-Qspz1ENe1ouCfIYvE7D6ia8HIWENEwD6bAk4oH7kxeBc6odq3ddFEvFGIbCK9_9eOdYdsVUVDZnP_z9m7jWcgh69ZTQOjYuEhuxGclBVMP7nu-rXzhVOdUZJzcH4fO3VvnPnpInBYecodW2VJzmL_2TEDEl8I_mIXgwMftLHAP8GYqwlkRv_NpU0CAIxfIMzUfTxw",
      "AU_ZVEG-9PJDvBpZKGQsTe2-sjK_wWeWHd79cmgcHpcVwVDOYIf1f3TtYTrUYUCko926BU_gQ65h0GTmPXXOevQ-lvV5kiO1vfmXrRIe6WRI1d_onqKZ3K_RZQc2PCjm5NTauvF6EeEK6Epv41qlNSqnaZrqqAwj9820LYe_5luUfflvYNvu8HeRLhd6DuNPsNZd4DzKq3Vx_owozEmcNwtzbSJSzekdpPIqJsrLR9Yc1WQbrKlMMpFxrnw_uVlYktrZXLd5MPpb5u0RnOB0koSkFdUI3TD5M67V-WQQRzvpVtj0zVI-yzLh8oVIeHvP7chVriPxypb90-bN6QvZMkCViJVCh0Ajc-NjaxRRCrKxPO_JEVvoe5iVEV0XqO17DKHML4F4kA_MtQNfn-FPy1tcI6M4q53Yyj1lKJNXxFJrghhqw3q9Qk0cicxMgATf2oc_"
    ]
  },
  verified: true,
  google_rating: 4.7
};

export default sokcho;
