import { SurgicalPlace } from "../../../type-definition";

export const l_entredgeu: SurgicalPlace = {
  id: "poi-l-entredgeu",
  slug: "l-entredgeu",
  name: "L’entredgeu",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "83 Rue Laugier, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8847222,
    lng: 2.2913889,
    nearest_metro: "Porte de Champerret",
    metro_lines: [3],
    google_id: "ChIJg5W7zZFv5kcRZKpLQhJUM-M"
  },
  moods: {
    chill: 40,
    festif: 30,
    culturel: 30
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00–14:00, 19:30–22:00 | mercredi: 12:00–14:00, 19:30–22:00 | jeudi: 12:00–14:00, 19:30–22:00 | vendredi: 12:00–14:00, 19:30–22:00 | samedi: 12:00–14:00, 19:30–22:00 | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://lentredgeu.fr/fr",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Tarte tatin d’oignons et sa petite crème", price_cents: 1200 },
          { name: "Carpaccio de la pêche du jour mariné", price_cents: 1400 },
          { name: "Escargots à la bourguignonne décorés", price_cents: 1200 },
          { name: "Velouté de choux-fleur au comté", price_cents: 1100 },
          { name: "Terrine de campagne maison", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Souris d’agneau braisée de 7 heures", price_cents: 2800 },
          { name: "Cuisse de canard confite, pommes sautées", price_cents: 2600 },
          { name: "Dorade royale à la sauce dieppoise", price_cents: 2800 },
          { name: "Ravioles de gambas au bouillon", price_cents: 2700 },
          { name: "Côte de bœuf braisée au charbon (2 pers.)", price_cents: 7500 },
          { name: "Pavé de cabillaud, risotto safrané", price_cents: 2900 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs",
        items: [
          { name: "Soufflé à la vanille, coulis au chocolat", price_cents: 1200 },
          { name: "Paris-Brest à la cacahuète pralinée", price_cents: 1000 },
          { name: "Carpaccio d’ananas frais et sorbet coco", price_cents: 900 },
          { name: "Mousse au chocolat noir intense", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Vin Bio (Sourcing Direct)", price_cents: 900 },
          { name: "Expresso Pur Arabica", price_cents: 250 }
        ]
      }
    ]
  },
  expert_catchline: "Le temple du bistrot bourgeois où la tarte tatin d’oignons justifie à elle seule le déplacement dans le 17ème.",
  description: "L’Entredgeu est une institution du 17ème, un bistrot bourgeois qui honore les classiques avec une précision chirurgicale.",
  insider_tip: "• **Signature** : La tarte tatin d’oignons est légendaire, ne passez pas à côté.\n• **Confort** : Un cadre bourgeois très chaleureux, idéal pour les repas en famille.\n• **Réservation** : Indispensable plusieurs jours à l'avance pour le soir.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vin", "Cocktail"],
    must_eat: "Cuisine de bistrot. La tarte tatin d’oignons et la souris d'agneau.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-entredgeu/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.3,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La tarte tatin d’oignons et la souris d",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_entredgeu;
