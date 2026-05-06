import { SurgicalPlace } from "../../../type-definition";

export const le_coq_fils_the_poultry_house: SurgicalPlace = {
  id: "poi-le-coq-fils-the-poultry-house",
  slug: "le-coq-fils-the-poultry-house",
  name: "Le Coq & Fils - the Poultry House",
  category: "restaurant",
  subcategory: ['gastronomique'],
  location: {
    address: "98 Rue Lepic, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8871994,
    lng: 2.3371844,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJTQ7TuVpu5kcRSvp5FZSHjzc"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:30 – 22:00 | mardi: 12:00 – 14:30, 18:30 – 22:00 | mercredi: 12:00 – 14:30, 18:30 – 22:00 | jeudi: 12:00 – 14:30, 18:30 – 22:00 | vendredi: 12:00 – 14:30, 18:30 – 22:00 | samedi: 12:00 – 14:30, 18:30 – 22:00 | dimanche: 12:00 – 14:30, 18:30 – 22:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lecoq-fils.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes du Poulailler (Entrées)",
        items: [
          { name: "Gésiers confits, Roquette & Pesto d’Amandes", price_cents: 1000, is_highlight: true },
          { name: "Terrine de Volaille & Foies Blonds", price_cents: 1200, is_highlight: true },
          { name: "Empanadas d’abattis aux Herbes & Citron confit", price_cents: 1100 },
          { name: "Œufs Mayonnaise Westermann (Bio) & Jus Chic’up", price_cents: 1000, is_highlight: true },
          { name: "Œufs Diaboliques & Betteraves marinées", price_cents: 1200 },
          { name: "Crème de Volaille & Champignons Portobello", price_cents: 1200 },
          { name: "Légumes de Saison mi-cuits & Chèvre frais", price_cents: 1100 },
          { name: "Houmous d’Artichauts & Crumble de Parmesan", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Belles Volailles de Race (Plats)",
        items: [
          { name: "Quart Rôti (Race Cou Nu des Blaches)", price_cents: 2800, is_highlight: true },
          { name: "Quart de Coq au Vin (Race Gauloise Blanche)", price_cents: 4500, is_highlight: true },
          { name: "Pintade de la Drôme rôtie (Demi-Pintade Nubienne)", price_cents: 5000 },
          { name: "Poulet de Bresse AOC rôti au Jus de rôti", price_cents: 4800, is_highlight: true },
          { name: "Coucou de Rennes en Fricassée aux Morilles", price_cents: 5200, is_highlight: true },
          { name: "Pigeon du Gers rôti sur le coffre", price_cents: 4600 },
          { name: "Saucisse de Volaille rôtie & Jus de viande", price_cents: 1900 },
          { name: "Bouchée à la Reine Traditionnelle Westermann", price_cents: 1900, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre au Beurre demi-sel", price_cents: 700, is_highlight: true },
          { name: "Mac & Cheese artisanal à la française", price_cents: 850, is_highlight: true },
          { name: "Frites fraîches Maison double cuisson", price_cents: 650 },
          { name: "Fricassée de Légumes de Saison sautés", price_cents: 750 },
          { name: "Salade Verte de Saison & Vinaigrette Maison", price_cents: 600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs du Coq (Desserts)",
        items: [
          { name: "Île Flottante du Coq & Amandes caramélisées", price_cents: 1400, is_highlight: true },
          { name: "Riz au Lait vanillé, Marmelade d’Orange & Gingembre", price_cents: 1200, is_highlight: true },
          { name: "Compote de Pommes Bio au Beurre Salé", price_cents: 1300 },
          { name: "Brownie au Chocolat Noir (60% Pérou) & Sorbet", price_cents: 1400, is_highlight: true },
          { name: "Mousse au Chocolat Noir & Orange de Sicile", price_cents: 800 },
          { name: "Fromage AOP Brocciu, Huile d’Olive & Sel de Ré", price_cents: 1400 },
          { name: "Sorbet au Chocolat Noir intense Maison", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de la Basse-Cour (Boissons)",
        items: [
          { name: "Verre de Chinon Vieille Vigne (Rouge)", price_cents: 1100, is_highlight: true },
          { name: "Verre de Gamay Sans Tralala (Bio)", price_cents: 1200 },
          { name: "Verre de Bourgogne Blanc ’Accord Majeur'", price_cents: 900 },
          { name: "Jus de Fruits Sélection du Coq", price_cents: 750 },
          { name: "Eau micro-filtrée Le Coq (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso & Mousse au Chocolat (Duo)", price_cents: 1200 },
          { name: "Café Viennois & Chantilly Maison", price_cents: 900 }
        ]
      }
    ]
  },
  description: "Le Coq & Fils – The Poultry House est le temple mondial de la volaille de race, orchestré par le chef triplement étoilé Antoine Westermann. Situé sur les pentes de Montmartre, cet établissement rend un hommage vibrant aux éleveurs français en sublimant des espèces oubliées : Poulet de Bresse, Coucou de Rennes ou Pintade de la Drôme. On y redécouvre le plaisir brut et sophistiqué d’une volaille parfaitement rôtie, accompagnée d'un jus corsé et de garnitures réconfortantes, dans un décor qui allie modernité et esprit de terroir.",
  insider_tip: "• **Le Choix des Races** : Ne vous contentez pas du poulet standard, demandez conseil sur les races du moment (Cou nu, Gauloise), la différence de goût est stupéfiante.\n• **L’Île Flottante** : C’est le dessert signature, monumentale et d’une légèreté aérienne, une fin parfaite pour un repas rustique-chic.\n• **Volailles à Partager** : Si vous êtes en groupe, commander une volaille entière est une expérience conviviale unique, découpée devant vous.",
  specials: {
    cuisine: ["Haute Gastronomie"],
    drinks: ["Belle sélection de vins rouges", "Vins biodynamiques", "Cafés gourmands"],
    must_eat: "Haute gastronomie. L’Œuf Mayonnaise Westermann (10€) : élu l’un des meilleurs de Paris, un classique magnifié par un jus de volaille secret.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coq-fils-the-poultry-house/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Haute gastronomie. L’Œuf Mayonnaise Westermann (10€) : élu l",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_coq_fils_the_poultry_house;
