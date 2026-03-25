import { SurgicalPlace } from "../../../type-definition";

export const l_alimentari: SurgicalPlace = {
  id: "poi-l-alimentari",
  slug: "l-alimentari",
  name: "L'Alimentari",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "6 Rue des Cinq Diamants, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.828854,
    lng: 2.351658,
    nearest_metro: "Corvisart",
    metro_lines: ["6"],
    google_id: "ChIJBwhQhgJu5kcRM31qxeTimtY"
  },
  moods: {
    chill: 85,
    festif: 50,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–23:00 | dimanche: 12:00–15:00 | lundi: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/LAlimentari-290417151054338/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 22,
    dish_price: 15.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category: "Antipasti : L'Art du Partage",
        items: [
          { name: "Burrata crémeuse & Tomates confites", price: "14.50€", highlight: true },
          { name: "Assiette d'Antipasti de saison (Légumes grillés)", price: "17.00€" },
          { name: "Planche de Charcuteries fines (Parme, Speck)", price: "18.50€" },
          { name: "Focaccia maison au Romarin", price: "6.00€" },
          { name: "Bresaola, roquette et copeaux de Grana", price: "15.00€" },
          { name: "Bruschetta à la Tomate et Basilic", price: "9.50€" }
        ]
      },
      {
        category: "Pizzas Rouges (Plats - Base Tomate)",
        items: [
          { name: "Margherita (Mozza, Basilic)", price: "12.00€", highlight: true },
          { name: "Regina (Jambon, Champignons)", price: "16.50€" },
          { name: "Spianata (Pimentée, Oignons rouges)", price: "16.00€" },
          { name: "Napolitaine (Anchois, Câpres, Olives)", price: "16.00€" },
          { name: "Quatre Fromages Italienne", price: "15.50€" },
          { name: "Calzone Classique", price: "17.00€" },
          { name: "Vegetariana du Marché", price: "15.50€" }
        ]
      },
      {
        category: "Pizzas Blanches & Gourmet (Plats)",
        items: [
          { name: "Mortadella (Pistache, Stracciatella)", price: "18.00€", highlight: true },
          { name: "Speck & Gorgonzola", price: "18.00€" },
          { name: "Tartufo (Crème de Truffe)", price: "18.00€" },
          { name: "Capretta (Chèvre frais, Pesto)", price: "16.00€" },
          { name: "Pizza Burrata entière", price: "17.00€" },
          { name: "N'duja & Courgettes", price: "16.00€" }
        ]
      },
      {
        category: "Pâtes Fraîches (Le Jour Même)",
        items: [
          { name: "Linguine al Pomodoro fresco", price: "15.00€" },
          { name: "Cacio e Pepe (Pecorino, Poivre)", price: "16.50€", highlight: true },
          { name: "Spaghetti alle Vongole (Palourdes)", price: "19.00€" },
          { name: "Penne à la Norma (Aubergines)", price: "16.00€" }
        ]
      },
      {
        category: "Dolci & Boissons",
        items: [
          { name: "Tiramisu Maison (La Recette)", price: "7.50€", highlight: true },
          { name: "Panna Cotta aux fruits rouges", price: "6.50€" },
          { name: "Mousse au Chocolat intensive", price: "6.50€" },
          { name: "Bière Italienne Menabrea", price: "6.50€" },
          { name: "Verre de Chianti (DOCG)", price: "7.00€" },
          { name: "Spritz Classique (Aperitivo)", price: "9.50€", highlight: true },
          { name: "Limonata San Pellegrino", price: "4.50€" }
        ]
      }
    ]
  },
  description: "L'Alimentari est une enclave sarde authentique nichée dans la pittoresque Rue des Cinq Diamants. À la fois épicerie fine et restaurant, l'établissement ravit la Butte-aux-Cailles avec ses pizzas à pâte fine et ses pâtes fraîches préparées avec un amour manifeste du produit. L'ambiance y est conviviale, typique des bistrots de quartier où l'on se serre sur la terrasse pour déguster un spritz ou une planche de charcuterie fine avant une pizza généreuse.",
  insider_tip: `• **Le Trésor Pistache** : La pizza Mortadella avec sa crème de pistache et sa stracciatella est une explosion de gourmandise absolue.
  • **Fraîcheur Quotidienne** : N'hésitez pas à demander les suggestions de pâtes du jour, elles sont souvent meilleures que la carte fixe.
  • **Terrisse Stratégique** : Arrivez tôt (avant 20h) pour espérer décrocher une place en terrasse sur cette rue piétonne très prisée le soir.`,
  specials: {
    cuisine: ["Italienne", "Sarde", "Pizzeria"],
    drinks: ["Chianti", "Spritz"],
    must_eat: "Cuisine Italienne. Pizza Mortadella & Tiramisu",
  },
  images: {
    hero: "AU_ZVEEaIfr6Dnd9gCLKOLGECt77ZAs6SNtZ9AMVsl9F7lPN5TO6G221LiEyFZUWUeRSixDmvoiIQlICoUhdaNgTSrblJ-JvBK4MT8vtaJbf3iJbXtD_kqSazWEZSRg3H5vhidB81CALmKpKvW-Upuo1L6gng16H8ovVDhfHNLadubo9eyadkIqHYp6AlNctZhcJrn8zT6-8verV2_AZk0mCykeN7Y00CstnaEHw9SGwoorvdOgu3TMwpjeeJY1zhAXtQakk3f4NaNkfZwkGM5k9wDsGA6x6hzscPq7RzLUzDB8kXVjmLJujmq4fXwK_jX75IFDXlm_gcVCcJvvHOm9t4Ec3x-mdwL86J2yUVUzlqsOXSHc64kBBn2QGFf55ElNQ_GT96UWxoxKc1rARjFvjK-sqFrSNP_jSwAFE6cuO2DKnFg",
    gallery: ["AU_ZVEGk_R1JXyZdPLfwjnG_hOwGoYeDmdmQ5nN1wiqsCiIaHc1rzlkpPlBQQRlXiZZI1zh_46shutW8dnRmp3GXG_fDxWjYDuYJP2J2mn295jnbLHXEedi23LIsjjgybF8vIJVWL_G6gicxlMaPo1NBOP-dc26wIn8K0q67_d7-UHRfhOlBDbO0v3prgi1T2yRD0ylXq2bm_3-iwSq_WvIiyy1H9WFTkIhOy6Z7geb1t_CBsB6US9pBUyRbGJeneJqMeONYp6MtV_QJpRUG2foSaiSzeP6fhFETbthn5lOE62nza7z4PhCpLhFQf2RmZoMqfJxI-UWbRB-y6MF0afDm0RGyrH5RTL2WryDWNz8dlxp2OBIwUJn_GDQzV2thwfRs5KN6MGIcc3CVTxcaQOy6H_jqPoH-81B6PTqNNquY1d3eMk53","AU_ZVEHMQTRk_sXvCRx0KTs_uqlsKD4LhUEtN5ILVMegK4mvlv1HqC3nF0F1C3XasgpVkojxcHyQF3bpvnZWmGEwDQ7LKxIenu0q8pWkGDkNYMRYBMXRgX00ZtFiPa_EcTE3xOvf7IfoWASwCkRHogI35v1O3FWEM8f7aZyX1KhFsKzLoKSJ7yr6_eFxnyc9e6Iv5poK1l_hMILRZhfk5TxnUHocPuHvTv-jVj5sh2-HryUo4bH_83nTmsAuB_W4o3wSsvDn8AeqWd905KAAS2TUVVFg8SGSUc0lGW_B0ZS9k2rkMjuc5icRRVrgOdAPQVwdk-DFlwe9D-C7M9EjmiL0-XQ_p6HdhVzvRMF8dDilnwSUJ7hj5oMR33ADDjnaq3NGX2TrmY2j1GQcOBO07UlBnFhKEAIjqSUT90Bt4ka2U4U"]
  },
  verified: false,
  google_rating: 4.4
};

export default l_alimentari;
