import { SurgicalPlace } from "../../../type-definition";

export const le_rempart_bastille: SurgicalPlace = {
  id: "poi-le-rempart-bastille",
  slug: "le-rempart-bastille",
  name: "Le Rempart Bastille",
  category: "restaurant",
  subcategory: ["français", "brasserie", "bastille", "traditionnel", "terrasse"],
  location: {
    address: "15 Rue Saint-Antoine, 75004 Paris, France",
    arrondissement: 4,
    lat: 48.8534253,
    lng: 2.3666076,
    nearest_metro: "Bastille",
    metro_lines: [1, 5, 8],
    google_id: "ChIJDf4jgf9x5kcRB6AIVMypZS4"
  },
  moods: {
    chill: 60,
    festif: 70,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 07:00 – 00:00 | mardi: 07:00 – 00:00 | mercredi: 07:00 – 00:00 | jeudi: 07:00 – 00:00 | vendredi: 07:00 – 00:00 | samedi: 07:00 – 01:00 | dimanche: 07:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lerempartbastille.fr/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Œufs mayonnaise 'Rempart'", price_cents: 650, description: "L'indémodable de la maison" },
          { name: "Os à moelle rôti au sel de Guérande", price_cents: 1100 },
          { name: "Soupe à l'oignon gratinée", price_cents: 950 },
          { name: "Burrata crémeuse et tomates d'antan", price_cents: 1250 },
          { name: "Escargots de Bourgogne (x6)", price_cents: 900 },
          { name: "Planche de charcuterie fine", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Les Plats",
        items: [
          { name: "Tartare de bœuf tradition frites maison", price_cents: 1750 },
          { name: "Burger du Rempart (Cheddar, oignons confits)", price_cents: 1850 },
          { name: "Confit de canard du Sud-Ouest", price_cents: 1900 },
          { name: "Entrecôte grillée sauce au poivre", price_cents: 2400 },
          { name: "Fish & Chips sauce tartare", price_cents: 1700 },
          { name: "Salade César au poulet croustillant", price_cents: 1650 },
          { name: "Risotto aux champignons des bois", price_cents: 1800 },
          { name: "Tagliatelles à la crème de truffe", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Tiramisu maison au café", price_cents: 850 },
          { name: "Crème brûlée à la vanille Bourbon", price_cents: 800 },
          { name: "Mousse au chocolat noir", price_cents: 750 },
          { name: "Profiteroles au chocolat chaud", price_cents: 950 },
          { name: "Tarte Tatin et sa crème fraîche", price_cents: 900 },
          { name: "Café gourmand du Rempart", price_cents: 1050 }
        ]
      }
    ]
  },
  description: "Trônant fièrement à l'angle de la rue Saint-Antoine, Le Rempart est l'archétype de la grande brasserie parisienne qui ne dort jamais. Avec sa terrasse chauffée donnant sur l'effervescence de Bastille, c'est le spot idéal pour observer la faune urbaine tout en dégustant des classiques parfaitement exécutés. L'ambiance y est électrique, surtout en fin de semaine.",
  insider_tip: "• La terrasse est l'une des meilleures de Bastille pour le 'people watching'.\n• Le samedi soir, la cuisine ferme plus tard (01h00), idéal pour un dîner post-spectacle à l'Opéra.\n• Leurs frites maison sont particulièrement réussies, n'hésitez pas à demander un supplément.",
  specials: {
    cuisine: ["Française", "Brasserie", "Bastille"],
    drinks: ["Cocktails classiques", "Vin au verre"],
    must_eat: "Cuisine française. L'Os à moelle & Le Burger du Rempart",
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

export default le_rempart_bastille;
