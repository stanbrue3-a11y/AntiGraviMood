import { SurgicalPlace } from "../../../type-definition";

export const mamma_primi: SurgicalPlace = {
  id: "poi-mamma-primi",
  slug: "mamma-primi",
  name: "Mamma Primi",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "18 Rue Boursault, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8835725,
    lng: 2.3205759,
    nearest_metro: "Rome / Place de Clichy",
    metro_lines: [2, 13],
    google_id: "ChIJPz-2wLNv5kcRVxQUyTcZQfw"
  },
  moods: {
    chill: 40,
    festif: 80,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 18:15 – 22:00 | mardi: 12:00 – 14:00, 18:15 – 22:00 | mercredi: 12:00 – 14:00, 18:15 – 22:00 | jeudi: 12:00 – 14:00, 18:00 – 22:45 | vendredi: 12:00 – 14:00, 18:00 – 22:45 | samedi: 12:00 – 15:30, 18:00 – 22:45 | dimanche: 12:00 – 15:30, 18:15 – 22:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bigmammagroup.com/fr/restaurants-italiens/mamma-primi",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-31",
    verified_at: "2026-03-31",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Burrata crémeuse des Pouilles", price_cents: 1400 },
          { name: "Focaccia chaude au romarin", price_cents: 600 },
          { name: "Arancini au safran et scarmoza", price_cents: 900 },
          { name: "Prosciutto di Parma 24 mois", price_cents: 1200 },
          { name: "Suppli al telefono", price_cents: 800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Pâtes à la truffe du Molise (Signature)", price_cents: 2200 },
          { name: "Pizza Regina Margherita", price_cents: 1500 },
          { name: "Pizza Double G (Tête de cochon et piment)", price_cents: 1700 },
          { name: "Tortellini à la ricotta et citron", price_cents: 1800 },
          { name: "Saltimbocca alla romana", price_cents: 2400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Tiramisu géant à la cuillère", price_cents: 1000 },
          { name: "Pizza au Nutella et noisettes", price_cents: 1200 },
          { name: "Panna cotta aux fruits rouges", price_cents: 800 },
          { name: "Glaces artisanales à l’italienne", price_cents: 700 },
          { name: "Affogato al caffe", price_cents: 600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Spritz Classico", price_cents: 1100 },
          { name: "Verre de Chianti", price_cents: 750 },
          { name: "Limonade maison au basilic", price_cents: 500 },
          { name: "Negroni vieilli en barrique", price_cents: 1300 },
          { name: "Bière Peroni", price_cents: 650 }
        ]
      }
    ]
  },
  description: `Mamma Primi est la déclinaison florale et chaleureuse du groupe Big Mamma aux Batignolles. Entre les suspensions de fleurs séchées et la vaisselle colorée chinée en Italie, on y sert une cuisine généreuse faite maison. Le spot parfait pour une soirée festive entre amis autour d'une pile de pizzas au feu de bois et de cocktails italiens.`,
  insider_tip: `• **Timing Stratégique** : Arrivez 15 minutes avant l’ouverture de la session du soir (18h15) pour espérer avoir une table sans trop d'attente (pas de résa).
  • **Combo Moelle** : Les pâtes à la truffe sont un must-eat absolu, généreuses et parfaitement parfumées.
  • **Côté Verre** : Testez leur sélection de Spritz, toujours bien dosés et rafraîchissants.`,
  expert_catchline: "La folle trattoria italienne au cœur des Batignolles.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Cocktails Italiens", "Spritz"],
    must_eat: "Cuisine italienne. Les pâtes à la truffe du Molise.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mamma-primi/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Les pâtes à la truffe du Molise.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default mamma_primi;
