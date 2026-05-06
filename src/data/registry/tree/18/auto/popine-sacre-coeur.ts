import { SurgicalPlace } from "../../../type-definition";

export const popine_sacre_coeur: SurgicalPlace = {
  id: "poi-popine-sacre-coeur",
  slug: "popine-sacre-coeur",
  name: "Popine Sacré Coeur",
  category: "restaurant",
  subcategory: ["pizzas"],
  location: {
    address: "10 Rue Dancourt, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.883137,
    lng: 2.3419081,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJmeahkUNu5kcR4_gTFzy2r40"
  },
  moods: {
    chill: 50,
    festif: 75,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 23:00 | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: 12:00 – 15:00, 19:00 – 23:00 | jeudi: 12:00 – 15:00, 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://opn.to/a/8Et0Ip",
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
        category_type: "main",
        display_label: "Pizze Napoletane (Plats)",
        items: [
        { name: "Margherita Extra", price_cents: 1300, description: "Tomate San Marzano, mozzarella di bufala, basilic" },
        { name: "Regina Popine", price_cents: 1800, description: "Tomate, mozzarella, jambon cuit, champignons de Paris" },
        { name: "Diavola Bianca", price_cents: 1800, description: "Mozzarella, spianata piccante, provola fumée" },
        { name: "Mortadella e Pistacchio", price_cents: 1900, description: "Pesto de pistache, mozzarella, mortadelle" },
        { name: "Vesuvio (Signature)", price_cents: 2000, description: "Base tomate, jambon, champignons, œuf coulant" },
        { name: "Boscaiola", price_cents: 1800, description: "Mozzarella, saucisse italienne, champignons" },
        { name: "Quattro Formaggi", price_cents: 1700 },
        { name: "Melanzana Verde", price_cents: 1700 },
        { name: "Provola e Pepe", price_cents: 1500 },
        { name: "Marinara Classica", price_cents: 1100 }
      ]},
      {
        category_type: "starter",
        display_label: "Antipasti & Ricotta (Entrées)",
        items: [
        { name: "Ricotta Fraîche (1 Piattino)", price_cents: 700 },
        { name: "Ricotta Fraîche (3 Piattini)", price_cents: 1900 },
        { name: "Burrata Di Andria IGP", price_cents: 1200 },
        { name: "Bresaola della Valtellina", price_cents: 1900 },
        { name: "Arancini au Ragù", price_cents: 950 },
        { name: "Pain Focaccia Maison", price_cents: 650 }
      ]},
      {
        category_type: "dessert",
        display_label: "Desserts Maison",
        items: [
        { name: "Tiramisu al Caffe", price_cents: 800 },
        { name: "Cheesecake Maison", price_cents: 800 },
        { name: "Dolcetini (Assortiment)", price_cents: 1100 }
      ]}
    ]
  },
  description: "Popine apporte l'excellence de la pizza napolitaine au cœur de Montmartre. Dans un décor moderne et chaleureux, les pizzas à la pâte légère et aux ingrédients sourcés directement en Italie sortent d'un impressionnant four à bois. Une valeur sûre pour les amateurs de margherita authentique.",
  insider_tip: "• **Timing Stratégique** : Arrivez à 19h pétantes ou réservez via leur site, car les tables du bas sont prisées et l'attente est fréquente rue Dancourt.\n• **Combo Moelle** : Commencez par un Piattino de Ricotta Fraîche avant d'attaquer la Mortadella e Pistacchio, leur grand classique.\n• **Détail Secret** : La salle dispose d'une mezzanine plus calme, parfaite si vous voulez discuter sans le bruit du comptoir.",
  specials: {
    cuisine: ["Pizzas"],
    drinks: ["Vins Italiens", "Spritz", "Peroni"],
    must_eat: "Cuisine française. L’art de la pizza napolitaine. Mortadella e Pistacchio & Margherita Extra",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/popine-sacre-coeur/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. L",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default popine_sacre_coeur;
