import { SurgicalPlace } from "../../../type-definition";

export const sawadee: SurgicalPlace = {
  id: "poi-sawadee",
  slug: "sawadee",
  name: "Sawadee",
  category: "restaurant",
  subcategory: ["thaï"],
  location: {
    address: "53 Av. Emile Zola, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8465306,
    lng: 2.2836849,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJOdMuQg9w5kcRVPTl1RjaPHY"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: 12:00 – 14:30, 19:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.sawadeethai1988.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Nems aux légumes (x4)", price_cents: 800 },
          { name: "Samoussas au bœuf (x4)", price_cents: 900 },
          { name: "Brochettes Satay (Poulet)", price_cents: 1000 },
          { name: "Salade de papaye verte (Som Tam)", price_cents: 1200 },
          { name: "Tom Yam Kung (Soupe crevettes)", price_cents: 1300 },
          { name: "Tom Kha Kai (Poulet coco)", price_cents: 1200 },
          { name: "Beignets de crevettes", price_cents: 1100 },
          { name: "Salade de bœuf grillé (Yam Nuea)", price_cents: 1400 },
          { name: "Raviolis vapeurs (Dim Sum)", price_cents: 900 },
          { name: "Assortiment d'entrées (2 pers)", price_cents: 2200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Pad Thaï Crevettes", price_cents: 1600 },
          { name: "Pad Thaï Poulet", price_cents: 1500 },
          { name: "Curry Vert au Poulet (Gaeng Keow)", price_cents: 1700 },
          { name: "Curry Rouge au Bœuf", price_cents: 1800 },
          { name: "Curry Masaman à l'Agneau", price_cents: 1900 },
          { name: "Bœuf au basilic thaï (Pad Kra Pao)", price_cents: 1800 },
          { name: "Canard laqué au miel", price_cents: 2000 },
          { name: "Larmes du Tigre (Bœuf mariné)", price_cents: 2400 },
          { name: "Poisson cuit à la vapeur (Lime)", price_cents: 2200 },
          { name: "Porc au caramel et gingembre", price_cents: 1600 },
          { name: "Légumes sautés au wok", price_cents: 1400 },
          { name: "Riz sauté à l'ananas", price_cents: 1500 },
          { name: "Nouilles sautées aux légumes", price_cents: 1400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Flanc au lait de coco", price_cents: 800 },
          { name: "Riz gluand à la mangue fraiche", price_cents: 1000 },
          { name: "Perles de coco à la vapeur", price_cents: 700 },
          { name: "Banane au lait de coco", price_cents: 700 },
          { name: "Lychees au sirop", price_cents: 600 },
          { name: "Sorbet Citron Vert", price_cents: 700 },
          { name: "Coupe de fruits exotiques", price_cents: 900 },
          { name: "Tapioca au maïs", price_cents: 800 },
          { name: "Mochi glacé (x2)", price_cents: 800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Bière Singha (33cl)", price_cents: 600 },
          { name: "Thé thaï glacé maison", price_cents: 500 },
          { name: "Café ou thé jasmin", price_cents: 300 }
        ]
      }
    ]
  },
  description: `Sawadee est une institution thaïlandaise du 15e arrondissement, réputée pour sa cuisine authentique et son cadre au charme suranné. Depuis 1988, la famille propriétaire propose des classiques parfaitement exécutés, du Pad Thaï fumant aux fameuses Larmes du Tigre. Le décor boisé et les détails ornementaux créent une atmosphère sereine qui transporte immédiatement les convives loin de l'agitation parisienne.`,
  insider_tip: `• **Timing Stratégique** : Le restaurant est souvent complet le soir, réservez par téléphone 24h à l'avance.
  • **Combo Moelle** : Les Larmes du Tigre accompagnées d'un riz gluant, un classique indémodable.
  • **Expérience Culturelle** : Admirez la décoration traditionnelle qui n'a pas changé depuis 1988, une capsule temporelle thaïlandaise.`,
  specials: {
    cuisine: ["Thaïlandais", "Asiatique"],
    drinks: ["Thé Thaï", "Bière Singha"],
    must_eat: "Cuisine Thaïlandaise. Les Larmes du Tigre (filet de bœuf mariné et grillé).",
  },
  images: {
    hero: "AU_ZVEGW6y48Nm6aHRKjM6mEedndULj2dtrGyjc7Ew0wErid2OlHjguI5lecgh_w80jHk_9BvsMFegipakQdfTZvLjZ8aIT6r_kf4IHS3898AUuLAerKQpbIbmWczLpSM7CKFEwFu9miAtu4pzoVWnOvHc_2H45m5C50YmDfGLgBjRctoNtG-WeGdI09nD20ec25_1XyhQNhl5xMVB83T4_YV8ANyn_OxKBptyl21hGKN12e-4TA5wgEfwdqquxo47VJA0qnrS0fDj6gcaUSyfK9f0wl7qBSiq3gmZKVaKkd_i4VTQ",
    gallery: ["AU_ZVEFld2U3JFNy2DjVkswr5UiL0ngvyd5RWOJJD8UzxKvBzN0IsnmAXtM1pUPf1eOZrhBFMIZhKORZYnVgU6HkhjaDiAZ_qCNZy_0_hMpzB4Dv5lCsa2vS7aqdfoe4597Df1MaPt7HwXWGV54erjy2ojpn5ZcgjhkDwGAmhhwkz2SCHpuqUq3EbxyB1NQgkUmI25SQuJWnK1209x5wvQ0nAD5cxFeVJaVt2jLRmh1WwyaHZRpP03LQGVyqZ0BLJ72loueoFLtIimffVfS6tfWNPZd3YDEsIRsJH0mFp0fx7qYgpw","AU_ZVEFY9KbdNm8mNTDt2Xfa5TCFLp55B0M1-mEbqoQ1l0TZdIQQky-YvbDZgx7apAGITh5GwgjUJa70D22D99EzZ_rRuw6r9FESB3ZhlfssFoJCPkPqTXwsRlMSXdZWMYpAyIJ5kZpOD_qb8RfSEjCPIr1QyrYRHQHS10A3m_B0Oy9nPBxist2tE68VmeS58m_x5W9iBODrPSRsOaSrSdad66b5popcN62_yS6VoMglM3mGV90lUoaIbISWUDaCPzpboMqsOs3rO6JEReFQSRLJkRqnewo49WCNwQxU2RJoVvinB-8Ny4ducRsa6rGueP4_ZkDW-ogCD5IVljd59zROWdwXr7Zd-6D5dIijLDPUdEJaV_LJHVOF_kb95A79U4cckc4zOO9rgQdZnzr6Qiet65dLWKph8A15_AhyI4Hsspy1Ca4zsLpzNnC49agj-xpA"]
  },
  verified: true,
  google_rating: 4.3
};

export default sawadee;
