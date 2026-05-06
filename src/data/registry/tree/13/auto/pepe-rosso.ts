import { SurgicalPlace } from "../../../type-definition";

export const pepe_rosso: SurgicalPlace = {
  id: "poi-pepe-rosso",
  slug: "pepe-rosso",
  name: "Pépé Rosso",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "77 Rue de la Glacière, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.829939,
    lng: 2.34393,
    nearest_metro: "Glacière",
    metro_lines: ["6"],
    google_id: "ChIJfShPapZx5kcRKdNvNJ1o8fg"
  },
  moods: {
    chill: 85,
    festif: 40,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:30 – 22:30 | mardi: 12:00 – 14:30, 19:30 – 22:30 | mercredi: 12:00 – 14:30, 19:30 – 22:30 | jeudi: 12:00 – 14:30, 19:30 – 22:30 | vendredi: 12:00 – 14:30, 19:30 – 22:30 | samedi: 19:30 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/Peperossorestaurantparis/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 14.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Pasta & Secondi",
        items: [
          { name: "Penne All’Arrabbiata (Piquantes)", price_cents: 1300 },
          { name: "Spaghetti Carbonara (Vraie recette)", price_cents: 1450 },
          { name: "Escalope Milanaise (Veau)", price_cents: 1850 },
          { name: "Risotto aux Cèpes parfumés", price_cents: 1600 },
          { name: "Linguine aux palourdes", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats : Pizzas",
        items: [
          { name: "Pizza Margherita Classica", price_cents: 1100 },
          { name: "Pizza Napolitaine (Anchois, Câpres)", price_cents: 1250 },
          { name: "Pizza Orientale (Merguez, Œuf)", price_cents: 1400 },
          { name: "Pizza 4 Saisons (Artichauts, Champignons)", price_cents: 1450 },
          { name: "Pizza Bianca au chèvre miel", price_cents: 1500 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Classiques Italiens",
        items: [
          { name: "Tiramisu maison au café", price_cents: 700 },
          { name: "Mousse au chocolat noir", price_cents: 650 },
          { name: "Affogato al caffè", price_cents: 600 },
          { name: "Panna Cotta à la vanille", price_cents: 650 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de Montepulciano", price_cents: 600 },
          { name: "Bière Birra Moretti (33cl)", price_cents: 550 },
          { name: "Limoncello de sorrento", price_cents: 500 },
          { name: "Eau minérale plate ou gaz (50cl)", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Pépé Rosso est une trattoria familiale nichée au cœur du quartier de la Glacière. Reconnue pour sa cuisine italienne généreuse et ses recettes traditionnelles exécutées sans fioritures, c’est l’adresse idéale pour retrouver le goût de l’Italie dans une ambiance intimiste. Les pâtes y sont al dente et l'accueil toujours souriant.",
  insider_tip: "• **Choix du Maître** : Les Spaghetti Carbonara sont réalisées dans les règles de l’art, sans crème, un must pour les puristes.\n• **Détail Authentique** : Ne manquez pas le Tiramisu maison, souvent considéré comme l’un des meilleurs du quartier.\n• **Expérience Culturelle** : Une adresse prisée des habitués du 13e qui cherchent à s’éloigner des grands axes bruyants.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Vin de pays", "Limoncello"],
    must_eat: "Cuisine italienne. Spaghetti Carbonara & Tiramisu",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pepe-rosso/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.2,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Spaghetti Carbonara & Tiramisu",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default pepe_rosso;
