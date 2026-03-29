import { SurgicalPlace } from "../../../type-definition";

export const villa_sophia: SurgicalPlace = {
  id: "poi-villa-sophia",
  slug: "villa-sophia",
  name: "Villa Sophia",
  category: "restaurant",
  subcategory: ["italien", "pizza", "bistrot-chic", "alma-marceau"],
  location: {
    address: "6 Rue Georges Bizet, 75116 Paris",
    arrondissement: 16,
    lat: 48.868299,
    lng: 2.298515,
    nearest_metro: "Iéna / Alma-Marceau",
    metro_lines: [9],
    google_id: "ChIJ48vwaOhv5kcRbvSW1pi1osg"
  },
  moods: {
    chill: 85,
    festif: 50,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "Lun-Ven: 12h-15h, 19h-23h | Sam: 19h-23h | Dim: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://villasophia.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    last_updated: "2026-03-28",
    verified_at: "2026-03-28",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Antipasti & Entrées",
        items: [
          { name: "Cœur de Burrata Crémeuse", price_cents: 1450, description: "Roquette et tomates datterino", is_highlight: true },
          { name: "Antipasto Villa Sophia", price_cents: 1800, description: "Bresaola, jambon de Parme 24 mois, artichauts" },
          { name: "Focaccia Romarin & Fleur de Sel", price_cents: 900 },
          { name: "Vitello Tonnato Tradition", price_cents: 1650 },
          { name: "Calars Frits & Mayonnaise Basilic", price_cents: 1500 },
          { name: "Bruschetta à la Tomate Fraîche", price_cents: 1100 },
          { name: "Salade d'Artichauts Cruso", price_cents: 1350 },
          { name: "Soupe de Minestrone Maison", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizzas au Feu de Bois (Plats)",
        items: [
          { name: "Pizza Tartufo (Truffe Noire)", price_cents: 2400, description: "Crème de truffe, mozza di bufala, champignons", is_highlight: true },
          { name: "Pizza Regina Sophia", price_cents: 1650, description: "Tomate, mozza, jambon, champignons de Paris" },
          { name: "Pizza Margherita Classica", price_cents: 1400 },
          { name: "Pizza Piccante (Ventrina)", price_cents: 1750 },
          { name: "Pizza Quattro Formaggi", price_cents: 1800 },
          { name: "Pizza Calzone Traditionnel", price_cents: 1700 },
          { name: "Pizza San Daniele 24 mois", price_cents: 1950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Primi & Secondi (Plats)",
        items: [
          { name: "Linguine alle Vongole (Palourdes)", price_cents: 2450, description: "Ail, persil et vin blanc frais", is_highlight: true },
          { name: "Penne à l'Arrabbiata", price_cents: 1800 },
          { name: "Risotto Impérial aux Gambas", price_cents: 2800 },
          { name: "Tagliatelle Bolognese Maison", price_cents: 1950 },
          { name: "Escalope de Veau Milanaise", price_cents: 2600 },
          { name: "Saltimbocca alla Romana", price_cents: 2550 },
          { name: "Filet de Daurade à la Livornese", price_cents: 2700 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Gourmandises",
        items: [
          { name: "Tiramisu Maison Incontournable", price_cents: 950, description: "Mascarpone onctueux et café fort", is_highlight: true },
          { name: "Panna Cotta aux Fruits Rouges", price_cents: 850 },
          { name: "Affogato al Caffè (Vannile)", price_cents: 900 },
          { name: "Calzone au Nutella (A Partager)", price_cents: 1400 },
          { name: "Assortiment de Glaces Italiennes", price_cents: 800 },
          { name: "Gorgonzola & Pain Grillé", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Bar & Spiritueux (Boissons)",
        items: [
          { name: "Spritz Classico (Aperol)", price_cents: 1200, is_highlight: true },
          { name: "Verre de Chianti Riserva", price_cents: 1100 },
          { name: "Bouteille de Prosecco DOC", price_cents: 3400 },
          { name: "Expresso Pur Arabica Segafredo", price_cents: 300 },
          { name: "Cappuccino à la Mousse Fine", price_cents: 550 },
          { name: "Limoncello de Sorrento", price_cents: 900 },
          { name: "Eau Minérale San Pellegrino", price_cents: 750 },
          { name: "Jus de Tomate Epicé", price_cents: 800 }
        ]
      }
    ]
  },
  description: "À deux pas du Triangle d'Or mais résolument ancrée dans le 16ème côté Chaillot, la Villa Sophia est une adresse italienne chaleureuse et lumineuse. Entre son décor de bistrot chic et son four à bois rutilant, on y trouve une convivialité rare dans le quartier. La cuisine, authentique et généreuse, fait la part belle aux classiques transalpins, des pizzas croustillantes aux pâtes parfaitement al dente. C'est le spot 'sympa' idéal pour un déjeuner d'affaires décontractée ou un dîner entre amis dans une ambiance solaire et élégante.",
  expert_catchline: "Une table italienne solaire et généreuse au cœur de Chaillot.",
  insider_tip: "• **Le Four à Bois** : Les pizzas sont la grande force du lieu, profitez-en.\n  • **Terrasse Ensoleillée** : Aux beaux jours, la terrasse sur la rue de Chaillot est particulièrement agréable pour un Spritz.\n  • **Service Continu** : Très pratique pour manger tardivement ou prendre un café en journée.",
  specials: {
    cuisine: ["Italienne", "Bistrot Chic"],
    drinks: ["Spritz Classique", "Vins Toscans"],
    must_eat: "Cuisine Italienne. Pizza Tartufo & Linguine alle Vongole.",
    must_drink: "Spritz à l'Aperol"
  },
  images: {
    hero: "AU_ZVEFtv4GAqUyj8w1ZDBEi0sERWoE1sumeJoTyJcXb-6c8K4L3uRd0X-RqGGLm3DW5q-VSFhJcI3gG1DI8AXH3gpJKeU1b71pO8uVjvcz9M8CYNnLrlpwaPm_-rjz37ktO0Hwy9waS9viKuhLVfD7HiBREuuo3NcBBMNY6jnT615H6XjVCi0x9mGHHbhmBq28ZoVZ33jjuvkUsHe0aAyjsUTI7XWzLFxBobrw42VI-RYDuOjieo5w2Q338HIX9p_a4epcAVGo7SV4ngcx7PFJu8AcWkddC1GiKcf4vHBdxoV9AGg",
    gallery: [
      "AU_ZVEEFnjZWJXIDPzDttFjvUOsSt8eZduHO0Q8iyoxt8y-lH4HlK4o-CyvnGfhPFQqcV_bM3oAIuGWWjAw2D3VtPCA0xAJf5Lz-XRarq3RNpqzcjjikEHrUwSezChHZdvWiZ-GfBhBY6zdW_vWp10rb9aTbF8Oa3Nz4zSz5m9mdIkHocOG60HdHOrYySf3f2txD4CmLEK-pLAZ5vezGKW1GaeCTBuKGVPgOEuCXYPEfVHlSgXkqLV-LEF9_1mZ3M5FXr_irrNTtwZB2KIoacNlxE1u6bdOxB1U29S5kQxvm9b2Akg",
      "AU_ZVEHH33hF9a2HpV6U00Qu7bBiamU8TCzbZSpOLggpUkHjY_Cf0Bv-t8v73oeN8zWJ5iGrq4Q2qW7zibOFdmI0MOcVpYp9owAfp-5rvKb1l7K4ie9sZTODYBZb2Db40qMaNrb1FyRh1IN_H8-pWpXoHkbls3zv5KRf-VhpQmu8tA1NhSF7AEAUj2eB1vLM6f7_MWEvUgobyHQmMlUJweJr2tBp3t2aO9aNca-FBdKlQoFBzgZHmDf2GLpGIVmv9fH3yMDT9_jNLK8kMHRfdp-WBnLB7WICff3uwkbR2xwY2QWBsFC6RiMu0FO6ZqXF2CtF0lxIyBvotepsn1Nqal6CWT5qIDQGWf0OwtD9QT0CwYLhnL2MH1GqV97wRc4rIU_pHVG1basZiG0d96uoWY3r9XYLXCG4Ovl-y_wbbmLUNG9_liZA2xs8RUdZJuV5tyW0"
    ]
  },
  verified: true,
  google_rating: 4.2,
  instagram_handle: "villasophiaparis",
  real_talk: {
    text: "Une trattoria chic qui ne triche pas. Le four à bois embaume la salle et l'accueil est d'une chaleur typiquement italienne. C'est l'adresse idéale pour une soirée décontractée et savoureuse.",
    must_eat: "Cuisine Italienne. Linguine aux Palourdes.",
    le_secret: "La table près du four est la plus animée, parfaite pour voir le pizzaiolo à l'œuvre.",
    le_son: "Un mélange de chansons italiennes et de conversations animées.",
    le_must: "Le tiramisu, l'un des plus onctueux du quartier."
  }
};

export default villa_sophia;
