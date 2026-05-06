import { SurgicalPlace } from "../../../type-definition";

export const villa_sophia: SurgicalPlace = {
  id: "poi-villa-sophia",
  slug: "villa-sophia",
  name: "Villa Sophia",
  category: "restaurant",
  subcategory: ['italien'],
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
          { name: "Salade d’Artichauts Cruso", price_cents: 1350 },
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
          { name: "Penne à l’Arrabbiata", price_cents: 1800 },
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
  description: "À deux pas du Triangle d’Or mais résolument ancrée dans le 16ème côté Chaillot, la Villa Sophia est une adresse italienne chaleureuse et lumineuse. Entre son décor de bistrot chic et son four à bois rutilant, on y trouve une convivialité rare dans le quartier. La cuisine, authentique et généreuse, fait la part belle aux classiques transalpins, des pizzas croustillantes aux pâtes parfaitement al dente. C’est le spot ’sympa’ idéal pour un déjeuner d’affaires décontractée ou un dîner entre amis dans une ambiance solaire et élégante.",
  expert_catchline: "Une table italienne solaire et généreuse au cœur de Chaillot.",
  insider_tip: "• **Le Four à Bois** : Les pizzas sont la grande force du lieu, profitez-en.\n  • **Terrasse Ensoleillée** : Aux beaux jours, la terrasse sur la rue de Chaillot est particulièrement agréable pour un Spritz.\n  • **Service Continu** : Très pratique pour manger tardivement ou prendre un café en journée.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Spritz Classique", "Vins Toscans"],
    must_eat: "Cuisine Italienne. Pizza Tartufo & Linguine alle Vongole.",
    must_drink: "Spritz à l’Aperol"
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/villa-sophia/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.2,
  instagram_handle: "villasophiaparis",
  real_talk: {
    text: "Une trattoria chic qui ne triche pas. Le four à bois embaume la salle et l’accueil est d’une chaleur typiquement italienne. C’est l'adresse idéale pour une soirée décontractée et savoureuse.",
    must_eat: "Cuisine Italienne. Linguine aux Palourdes.",
    le_secret: "La table près du four est la plus animée, parfaite pour voir le pizzaiolo à l’œuvre.",
    le_son: "Un mélange de chansons italiennes et de conversations animées.",
    le_must: "Le tiramisu, l’un des plus onctueux du quartier."
  }
};

export default villa_sophia;
