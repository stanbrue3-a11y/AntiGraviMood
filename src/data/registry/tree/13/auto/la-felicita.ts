import { SurgicalPlace } from "../../../type-definition";

export const la_felicita: SurgicalPlace = {
  id: "poi-la-felicita",
  slug: "la-felicita",
  name: "La Felicità",
  category: "restaurant",
  subcategory: ['italien'],
  location: {
    address: "5 Parv. Alan Turing, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8334295,
    lng: 2.3718736,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJk16wp8Fz5kcRkHv9uQxB30M"
  },
  moods: {
    chill: 60,
    festif: 90,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 08:30 – 23:30 | mardi: 08:30 – 00:00 | mercredi: 08:30 – 00:00 | jeudi: 08:30 – 00:00 | vendredi: 08:30 – 01:30 | samedi: 12:00 – 01:30 | dimanche: 12:00 – 23:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lafelicita.fr/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness-website",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Pizzas (Four à bois)",
        items: [
          { name: "Margherita (Mozzarella, basilic)", price_cents: 1350 },
          { name: "Regina (Jambon, champignons)", price_cents: 1550 },
          { name: "Diavola (Salame piccante)", price_cents: 1750 },
          { name: "Quattri Formaggi (4 fromages)", price_cents: 1750 },
          { name: "Bianca à la Truffe & Mortadelle", price_cents: 2150 },
          { name: "Parma (Jambon cru, parmesan)", price_cents: 1850 },
          { name: "La Burrata (Burrata & Serrano)", price_cents: 1400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats : Pasta Fresca",
        items: [
          { name: "Linguine Carbonara Maison", price_cents: 1690 },
          { name: "Linguine au Pesto & Burrata", price_cents: 1750 },
          { name: "Fettucine Truffe & Jambon", price_cents: 2150 },
          { name: "Fettucine Butternut & Burrata", price_cents: 1790 },
          { name: "Pasta Rosso (Pesto rosso, basilic)", price_cents: 1200 }
        ]
      },
      {
        category_type: "other",
        display_label: "Dolci",
        items: [
          { name: "Tiramisu della Nonna", price_cents: 800 },
          { name: "Moelleux au chocolat", price_cents: 750 },
          { name: "Panacotta aux fruits rouges", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons & Aperitivo",
        items: [
          { name: "Spritz Classique", price_cents: 900 },
          { name: "Negroni", price_cents: 1100 },
          { name: "Verre de Montepulciano", price_cents: 650 },
          { name: "Bière blonde artisanale (33cl)", price_cents: 700 },
          { name: "Coca-Cola / Soda (33cl)", price_cents: 450 }
        ]
      }
    ]
  },
  description: "La Felicità est le vaisseau amiral du groupe Big Mamma à Station F. Ce food-market italien de 4500m² est un lieu hybride unique à Paris, mêlant plusieurs stands gourmands (Pizza, Pasta, Burger, Cocktails) dans un décor spectaculaire et végétalisé. C’est l'endroit parfait pour une sortie festive et décontractée en groupe.",
  insider_tip: "• **Timing Stratégique** : Évitez les heures de pointe du week-end (20h-21h) car la queue pour les pizzas peut devenir interminable.\n• **Combo Moelle** : La Pizza à la Truffe est un classique indémodable du groupe, à savourer avec un spritz.\n• **Détail Secret** : N’oubliez pas de visiter les toilettes, elles font partie intégrante du décor déjanté du lieu.",
  specials: {
    cuisine: ["Italien"],
    drinks: ["Spritz", "Vins Italiens", "Cocktails"],
    must_eat: "Cuisine italienne. Pizza Truffe & Linguine Carbonara",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-felicita/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Pizza Truffe & Linguine Carbonara",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default la_felicita;
