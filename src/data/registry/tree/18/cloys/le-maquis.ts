import { SurgicalPlace } from "../../../type-definition";

export const le_maquis: SurgicalPlace = {
  id: "poi-le-maquis",
  slug: "le-maquis",
  name: "Le Maquis",
  category: "restaurant",
  subcategory: ["français", "bistrot", "moderne", "cloys", "gastronomique"],
  location: {
    address: "53 Rue des Cloys, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8924042,
    lng: 2.3364969,
    nearest_metro: "Jules Joffrin",
    metro_lines: [12],
    google_id: "ChIJW9O_h_9u5kcR46_rYxyk-Rc"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:15 – 14:15, 19:30 – 22:15 | mercredi: 12:15 – 14:15, 19:30 – 22:15 | jeudi: 12:15 – 14:15, 19:30 – 22:15 | vendredi: 12:15 – 14:15, 19:30 – 22:15 | samedi: 19:30 – 22:15 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lemaquisparis.com/",
      label: "DÉCOUVRIR"
    }
  },
  pricing: {
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Les Entrées",
        items: [
          { name: "Pâté en croûte maison (Recette de saison)", price: "12.00€" },
          { name: "Betteraves fumées, crème d'aneth & herbes", price: "11.00€" },
          { name: "Asperges vertes grillées, sabayon agrumes", price: "13.50€" },
          { name: "Terrine de foies de volaille", price: "10.00€" },
          { name: "Tartelette oignons cévenols confits", price: "11.50€" },
          { name: "Pignons de pin, herbes sauvages & radis", price: "9.00€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Cochon de lait rôti, petits pois & menthe", price: "24.00€" },
          { name: "Poisson de ligne (selon arrivage), fenouil", price: "26.00€" },
          { name: "Pithiviers de canard et foie gras", price: "28.00€" },
          { name: "Risotto d'épeautre aux légumes printaniers", price: "22.00€" },
          { name: "Bœuf braisé au vin rouge, purée fondante", price: "25.00€" },
          { name: "Linguine au citron et poutargue", price: "21.00€" },
          { name: "Epaule d'agneau confite 12h", price: "27.00€" },
          { name: "Poitrine de veau croustillante", price: "25.50€" }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Sélection de fromages affinés", price: "12.00€" },
          { name: "Riz au lait à la vanille, caramel salé", price: "8.50€" },
          { name: "Mousse au chocolat noir et huile d'olive", price: "9.00€" },
          { name: "Tartelette aux fraises gariguette", price: "10.50€" },
          { name: "Sorbet maison (Parfum du jour)", price: "7.00€" },
          { name: "Baba au rhum ambré", price: "11.00€" }
        ]
      }
    ]
  },
  description: "Caché dans le calme du quartier des Cloys, Le Maquis est la pépite bistronomique que les Parisiens s'échangent sous le manteau. Ici, la cuisine est sincère, saisonnière et d'une technicité bluffante sous des airs de simplicité. L'ambiance est intimiste, avec une sélection de vins naturels pointue qui accompagne parfaitement chaque assiette. C'est le bistrot moderne par excellence.",
  insider_tip: "• Les suggestions changent très régulièrement, laissez-vous guider par les produits du jour.\n• Le pâté en croûte est une spécialité reconnue du chef, à ne pas manquer.\n• Idéal pour un dîner calme en semaine, loin de l'agitation touristique de Montmartre.",
  specials: {
    cuisine: ["Française", "Bistrot", "Moderne"],
    drinks: ["Vins naturels", "Bières artisanales"],
    must_eat: "Bistrot Moderne. Pâté en Croûte & Cochon de lait",
  },
  images: {
    hero: "AU_ZVEHrRaipQusuu7JA6lpQ-HPZJrEGRSmWGB6reOPhL-srSEnbI_6PjwbOfQWwiLpdyW1TiTz2b7jISuNla79MHlYP_raZDtvW85Hl75YhJOZJFQUKV4E6Rfn6Mmd4a_p5q8b3SEdxewPGx7TKxvqFTnPwP9MI1jl1ZOUmzr1hWIXfoEJ0fFv9hlqui2Mmv-fwMjuhMKwu4DGEZmbdkJG-E4_yAHksrZd9wb_K1skcu2AQ1H9__F3SHnApvyPGuC4IoHC-GYv24V1Puv6eqZ3Ibzyga0PKIOQ6XYPZde0-zPFKRQ",
    gallery: [
      "AU_ZVEH4OFSvwRv-a7G8F-ou2Uu_CQRz4dmprEHVpiJlNOC3-TDa3zns3ctKF8BWlT4GN5QynnczlL8VzoACbc5BnjtX8Hmtsl2Tgba0NUzdY4Wt-jMJ3CoIw3F2Bg1r-zWm3yHe7dPJuEfh5FhAoiHoGS0n9K4d5vJmRqjZF60pxeMSRDMSzK_WFXU0JzzYiScSnjallQBP6Ycb_dNL6wNzebWQaVhKJ1j3ssXd9BQqK9RTkq3POITnQEh0UShd8CQosLAum2uKmmQBSy61k2OdttPMt2x5wezaiSS1RCuRRxMDEcp25Vxi3PU6sUCwok24LBUl9wGyPXighHJLFL4I2N83e7K8lmxeYKOIuAPR7f6fruBdLYF539cqfb-DYeBIs52ibdoIogwsxgC57uFqiQ-eSHFLRo0Rfl_2NSRHOnMkOb4Z",
      "AU_ZVEHov3YSyep9Obh5wcCMLAqIK6fFBaqW10Xz6ZJ0oi0_EW7nusye9aSOaPrXzskcTmpPC5eflVhnANc9dvWjE__DaW4_NEqNdoTiBDUfc0xMlQ6GoQ-qerPQfzuPVw1fjm8BoU5lyvo5HM4poCan6wQ6xPBdHsN9BWlxwBcMV6PdO_yI11P7FuuezlFcZrTkpGXUTeQdm56j1hQ8mrQbwnWH3vp-ySKneLmfxdULgqmK6oj_QUQ-RrLCncTeq8wBEsiAjZX_tjLN550mJloXTe__5xAgGOMOmVWL1o4ofiCUw7iYCeiOOPW6F7f-p6awyt4JWORD9Zs0oS6F4dy7oJC4-HAEySbYXinsQInTqGzOdzMfFMCTSe9TUL50WjnhxMgSpQRpG_M9uPVaf3cGcy-uUyehPYuoaydW1KpZSs17854"
    ]
  },
  verified: true,
  google_rating: 4.7
};

export default le_maquis;
