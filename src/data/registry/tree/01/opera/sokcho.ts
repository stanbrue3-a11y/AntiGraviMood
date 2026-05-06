import { SurgicalPlace } from "../../../type-definition";

export const sokcho: SurgicalPlace = {
  id: "poi-sokcho",
  slug: "sokcho",
  name: "SOKCHO 牛者",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "7 Rue Gomboust, 75001 Paris, France",
    arrondissement: 1,
    lat: 48.868193,
    lng: 2.3328187,
    nearest_metro: "Pyramides / Opéra",
    metro_lines: [7, 14, 3, 8],
    google_id: "ChIJEdSwYMtv5kcRUqEOuvgMrnw"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 12:00 – 14:30, 19:00 – 23:00 | dimanche: 12:00 – 14:30, 19:00 – 22:30",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.sokcho.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    avg_budget: 65,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Tapas Japonais",
        items: [
          { name: "Tataki de bœuf Wagyu", price_cents: 1800, description: "Fines tranches saisies, sauce ponzu" },
          { name: "Gyoza au bœuf (x5)", price_cents: 1000 },
          { name: "Salade d’algues Wakame", price_cents: 700 },
          { name: "Edamame fleur de sel", price_cents: 600 },
          { name: "Carpaccio de Sériole au Yuzu", price_cents: 1600 },
          { name: "Tartare de Saumon & Avocat", price_cents: 1450 }
        ]
      },
      {
        category_type: "main",
        display_label: "La Sélection du Boucher (Plats Grill)",
        items: [
          { name: "Faux-filet Wagyu Japonais (100g)", price_cents: 4500, description: "Persillage exceptionnel A4/A5" },
          { name: "Entrecôte Wagyu Australie (200g)", price_cents: 5200 },
          { name: "Bavette d’aloyau Black Angus", price_cents: 2400 },
          { name: "Magret de canard laqué au Miso", price_cents: 2600 },
          { name: "Filet de Saumon Teriyaki", price_cents: 2200 },
          { name: "Mixed Grill Sokcho (Sélection)", price_cents: 3800 },
          { name: "Bœuf au fromage (x3)", price_cents: 1200 },
          { name: "Poulet Teriyaki", price_cents: 1950 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Accompagnements & Desserts",
        items: [
          { name: "Riz sauté à l’ail et ciboulette", price_cents: 650 },
          { name: "Légumes de saison grillés au Teppan", price_cents: 800 },
          { name: "Purée de pomme de terre au Wasabi", price_cents: 750 },
          { name: "Mochi glacé (x3)", price_cents: 900 },
          { name: "Cheesecake au Thé Vert Matcha", price_cents: 1000 },
          { name: "Fondant au Chocolat & Sésame noir", price_cents: 950 }
        ]
      }
    ]
  },
  description: "À deux pas de l’Opéra, Sokcho revisite le concept du steakhouse avec l’élégance japonaise. Spécialiste du bœuf Wagyu d’exception, le lieu propose une viande fondante grillée avec une précision millimétrée. L'ambiance y est épurée, feutrée, idéale pour un dîner intimiste où la qualité du produit est la seule star. Une adresse précieuse pour les amateurs de viandes persillées.",
  insider_tip: "• Réservez impérativement le soir, le lieu est très prisé pour ses pièces de Wagyu.\n• Le déjeuner propose des formules Bento plus accessibles qui valent le détour.\n• Ne passez pas à côté du riz sauté à l’ail, c’est l’accompagnement signature qui sublime la viande.",
  specials: {
    cuisine: ["Japonais"],
    drinks: ["Saké premium", "Whisky japonais"],
    must_eat: "Cuisine japonaise. Japonais Steakhouse. Faux-filet Wagyu & Riz à l’ail",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sokcho/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Japonais Steakhouse. Faux-filet Wagyu & Riz à l’ail",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default sokcho;
