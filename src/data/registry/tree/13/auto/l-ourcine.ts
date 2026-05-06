import { SurgicalPlace } from "../../../type-definition";

export const l_ourcine: SurgicalPlace = {
  id: "poi-l-ourcine",
  slug: "l-ourcine",
  name: "L’Ourcine",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "92 Rue Broca, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8358158,
    lng: 2.3465281,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJJVk8zJRx5kcRd5kT_EV4JQc"
  },
  moods: {
    chill: 85,
    festif: 40,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:30, 19:00 – 22:00 | mercredi: 12:00 – 14:30, 19:00 – 22:00 | jeudi: 12:00 – 14:30, 19:00 – 22:00 | vendredi: 12:00 – 14:30, 19:00 – 22:00 | samedi: 12:00 – 14:30, 19:00 – 22:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.facebook.com/restaurantLOurcine/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 34,
    dish_price: 34.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Créations du Marché",
        items: [
          { name: "Joue de bœuf fondante au jus", price_cents: 2100 },
          { name: "Faux-filet rôti, oignon confit", price_cents: 2400 },
          { name: "Noix de St-Jacques snackées", price_cents: 2500 },
          { name: "Dos de lieu jaune au beurre foin", price_cents: 2200 },
          { name: "Magret de canard rôti au miel", price_cents: 2300 },
          { name: "Dos de cabillaud à la plancha", price_cents: 2100 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Retour de l’Océan & Terre",
        items: [
          { name: "Bisque d’homard, crème estragon", price_cents: 1200 },
          { name: "Raviole de langoustine au thym", price_cents: 1400 },
          { name: "Carpaccio de St-Jacques agrumes", price_cents: 1500 },
          { name: "Velouté de châtaigne & œuf parfait", price_cents: 900 },
          { name: "Pressé de kakoo fermier", price_cents: 1000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Signatures Sucrées",
        items: [
          { name: "Baba aux oranges & épices", price_cents: 900 },
          { name: "Cheesecake mangue & fruits rouges", price_cents: 800 },
          { name: "Panna cotta aux épices douces", price_cents: 750 },
          { name: "Traditionnels pots de crème vanille", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de Chardonnay (Sélect)", price_cents: 700 },
          { name: "Bière artisanale locale (33cl)", price_cents: 750 },
          { name: "Café expresso torréfié", price_cents: 280 },
          { name: "Eau minérale (Bouteille)", price_cents: 500 }
        ]
      }
    ]
  },
  description: "L’Ourcine est une adresse bistronomique d’exception au cœur du 13ème arrondissement. Derrière une façade discrète de la rue Broca se cache une cuisine de marché créative, généreuse et techniquement irréprochable. L’ambiance y est conviviale, typique des grands bistrots parisiens qui privilégient le produit et le goût.",
  insider_tip: "• **Combo Moelle** : Le menu Carte (E+P+D) à 34€ est l’un des meilleurs rapports qualité-prix de la Rive Gauche.\n• **Détail Authentique** : La joue de bœuf est une spécialité de la maison, braisée pendant des heures pour une texture fondante.\n• **Timing Stratégique** : Réservation indispensable, même en semaine, car la salle est souvent complète dès l'ouverture.",
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vins de vignerons", "Bières artisanales"],
    must_eat: "Cuisine de bistrot. Joue de bœuf & Baba aux oranges",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-ourcine/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Joue de bœuf & Baba aux oranges",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_ourcine;
