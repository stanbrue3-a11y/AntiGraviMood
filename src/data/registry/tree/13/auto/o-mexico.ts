import { SurgicalPlace } from "../../../type-definition";

export const o_mexico: SurgicalPlace = {
  id: "poi-o-mexico",
  slug: "o-mexico",
  name: "O’Mexico",
  category: "restaurant",
  subcategory: ['mexicain'],
  location: {
    address: "20 Rue du Père Guérin, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8302778,
    lng: 2.3536111,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJsbDWHI5x5kcRWVQ7dpYE13w"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://o-mexico-paris.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 15.90,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées (Antojitos)",
        items: [
          { name: "Nachos O’Mexico (Complet)", price_cents: 990, is_highlight: true },
          { name: "Quesadillas au Poulet", price_cents: 990 },
          { name: "Queso Flameado au Chorizo", price_cents: 990 },
          { name: "Tacos de Pollo (x2)", price_cents: 990 },
          { name: "Guacamole Maison & Totopos", price_cents: 850 },
          { name: "Calamars à la Romaine", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Spécialités (Plats)",
        items: [
          { name: "Enchilada Mexicana (Bœuf)", price_cents: 1590, is_highlight: true },
          { name: "Chili Con Carne Traditionnel", price_cents: 1590 },
          { name: "Enchiladas Suizas (Poulet)", price_cents: 1590 },
          { name: "Fajitas au Poulet Grillé", price_cents: 1990 },
          { name: "Pollo con Piña (Oaxaca style)", price_cents: 1990 },
          { name: "Enchilada Végétarienne", price_cents: 1590 },
          { name: "Burrito Grande (Bœuf ou Poulet)", price_cents: 1650 },
          { name: "Chimichanga Frit au Fromage", price_cents: 1600 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules Midi",
        items: [
          { name: "Menu Complet Midi (E+P+D)", price_cents: 1590, is_highlight: true },
          { name: "Formule Rapido (P+D ou E+P)", price_cents: 1390 },
          { name: "Plat du Jour Mexicain", price_cents: 1150 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs (Desserts)",
        items: [
          { name: "Flan de la Abuela (Caramel)", price_cents: 650 },
          { name: "Banana Split O’Mexico", price_cents: 750 },
          { name: "Dame Blanche Classique", price_cents: 650 },
          { name: "Salade de Fruits Exotiques", price_cents: 600 },
          { name: "Café de Olla (Épices)", price_cents: 350 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Margarita Classique (Verre)", price_cents: 850, is_highlight: true },
          { name: "Bière Desperados (33cl)", price_cents: 600 },
          { name: "Corona Extra / Sol", price_cents: 650 },
          { name: "Jarritos (Parfum au choix)", price_cents: 550 },
          { name: "Tequila Shot (Reposado)", price_cents: 600 },
          { name: "Vin Rouge Mexicain (Verre)", price_cents: 600 }
        ]
      }
    ]
  },
  description: "O’Mexico est une escale colorée et chaleureuse située à deux pas de la Butte-aux-Cailles, proposant une immersion authentique dans la gastronomie mexicaine et Tex-Mex. Entre les murs ornés de sombreros et l’accueil chantant de la famille, on y déguste des classiques maîtrisés comme les enchiladas suizas ou le fameux chili con carne mijoté des heures. C’est l’adresse parfaite pour une soirée festive autour d’une margarita artisanale et de nachos partagés en toute simplicité.",
  insider_tip: `• **Le Combo Satiété** : Les fajitas arrivent sur plaque chauffante, l'odeur est irrésistible mais prévoyez de la place car la portion de riz et de tortillas est généreuse.
  • **Spécialité Cachée** : Le Pollo con Piña (Poulet à l’ananas) est une recette rare à Paris, héritée directement de la province d'Oaxaca.
  • **Vibe Midi** : Le menu à 15,90€ est l’un des meilleurs rapports qualité-prix du quartier pour un déjeuner complet et dépaysant.`,
  specials: {
    cuisine: ["Méditerranéen"],
    drinks: ["Margarita", "Tequila", "Bière Mexicaine"],
    must_eat: "Cuisine mexicaine. Enchilada Mexicana & Nachos O’Mexico",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/o-mexico/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine mexicaine. Enchilada Mexicana & Nachos O’Mexico",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default o_mexico;
