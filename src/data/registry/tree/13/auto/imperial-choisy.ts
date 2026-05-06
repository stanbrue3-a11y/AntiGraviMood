import { SurgicalPlace } from "../../../type-definition";

export const imperial_choisy: SurgicalPlace = {
  id: "poi-imperial-choisy",
  slug: "imperial-choisy",
  name: "Impérial Choisy 美丽都",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "32 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8222222,
    lng: 2.3633333,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJH7bObodx5kcRZvKndkGRXQo"
  },
  moods: {
    chill: 80,
    festif: 40,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 23:00 | mardi: 12:00 – 23:00 | mercredi: 12:00 – 23:00 | jeudi: 12:00 – 23:00 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.imperialchoisy.fr/menu",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Rôtisseries & Sauts",
        items: [
          { name: "Riz aux 2 rôtisseries (Porc & Canard)", price_cents: 1450 },
          { name: "Riz blanc au porc laqué Charsiu", price_cents: 1200 },
          { name: "Riz blanc au canard laqué", price_cents: 1350 },
          { name: "Travers de porc à la Pékinoise", price_cents: 1250 },
          { name: "Travers de porc sel et poivre", price_cents: 1250 },
          { name: "Bœuf sauté au satay", price_cents: 1100 },
          { name: "Bœuf sauté aux oignons", price_cents: 1100 },
          { name: "Crevettes au sel et au poivre", price_cents: 1250 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Potages Historiques",
        items: [
          { name: "Salade de méduse & œufs de cent ans", price_cents: 1200 },
          { name: "Potage Pékinois (Porc, crevettes, œuf)", price_cents: 750 },
          { name: "Potage aux asperges et au crabe", price_cents: 750 },
          { name: "Potage de maïs au poulet", price_cents: 700 },
          { name: "Nems au porc (4 pièces)", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Bière Tsingtao (33cl)", price_cents: 550 },
          { name: "Thé au jasmin (Théière)", price_cents: 450 },
          { name: "Soda (Coke, Sprite, etc.)", price_cents: 400 },
          { name: "Jus de lychee", price_cents: 450 }
        ]
      }
    ]
  },
  description: "L’Impérial Choisy est une institution incontournable pour les amateurs de rôtisserie cantonaise. Réputé pour son porc laqué Charsiu et son canard rôti d'une tendreté exemplaire, le restaurant offre une expérience authentique dans un cadre simple et efficace. Un pilier du quartier depuis des décennies.",
  insider_tip: "• **Combo Moelle** : Optez pour le riz aux deux rôtisseries pour goûter à la fois au porc et au canard.\n• **Accompagnement** : Ne négligez pas les légumes Choïsam à la sauce d’huître pour équilibrer le gras des viandes.\n• **Timing Stratégique** : Le restaurant est souvent complet le soir, arriver tôt ou commander à emporter est une excellente alternative.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Bière Tsingtao", "Thé chaud"],
    must_eat: "Cuisine cantonaise. Riz aux 2 rôtisseries & Canard laqué",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/imperial-choisy/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 3.9,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine cantonaise. Riz aux 2 rôtisseries & Canard laqué",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default imperial_choisy;
