import { SurgicalPlace } from "../../../type-definition";

export const la_boite_aux_lettres: SurgicalPlace = {
  id: "poi-la-boite-aux-lettres",
  slug: "la-boite-aux-lettres",
  name: "La Boîte aux Lettres",
  category: "restaurant",
  subcategory: ['français', 'terrasse'],
  location: {
    address: "108 Rue Lepic, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8867903,
    lng: 2.3381816,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJfy7g01pu5kcR-sGS7srWCYA"
  },
  moods: {
    chill: 95,
    festif: 45,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 17:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.laboiteauxlettres.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 35,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
        { name: "Œuf Mayonnaise Maison", price_cents: 600 },
        { name: "Terrine de Campagne", price_cents: 800 },
        { name: "Velouté de Patate Douce", price_cents: 700 },
        { name: "Chou-fleur Rôti à la Fêta", price_cents: 800 },
        { name: "Salade de Lentilles", price_cents: 900 },
        { name: "Option Pour les Indécis (Entrées)", price_cents: 1200 }
      ]},
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
        { name: "Pavé de Bœuf Sauce Poivre", price_cents: 2400, description: "Servi avec frites maison" },
        { name: "Suprême de Volaille Albufera", price_cents: 2100 },
        { name: "Lieu Jaune à la Bergamote", price_cents: 2200 },
        { name: "Burger de la BAL", price_cents: 1700, description: "Frites et salade" },
        { name: "Saucisse à l’Échalote", price_cents: 1600 },
        { name: "Rigatoni Verde (Végé)", price_cents: 1800 },
        { name: "Tartare de Bœuf Tradition", price_cents: 1900 },
        { name: "Cabillaud Rôti & Mousseline", price_cents: 2300 }
      ]},
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
        { name: "Tiramisu de la BAL", price_cents: 800 },
        { name: "Pain Perdu Gourmand", price_cents: 700 },
        { name: "Velouté Mangue-Passion", price_cents: 900 },
        { name: "Chou Chantilly Praliné", price_cents: 800 },
        { name: "Fromages du Moment", price_cents: 1000 },
        { name: "Option Pour les Indécis (Desserts)", price_cents: 1200 }
      ]}
    ]
  },
  description: "Situé en haut de la rue Lepic, ce bistrot de quartier est une véritable institution montmartroise. Entre les murs couverts de mots doux et la terrasse animée, on y déguste une cuisine maison généreuse et sans prétention. L’ambiance y est électrique, portée par une équipe chaleureuse qui incarne l'esprit du vieux Montmartre.",
  insider_tip: "• **Le Burger de la BAL** : Avec ses frites maison, c’est le réconfort absolu après une balade sur les hauteurs.\n• **Pour les Indécis** : L’option à 12€ pour goûter plusieurs entrées est une superbe idée de partage.\n• **Brunch du Dimanche** : Très populaire, pensez à réserver quelques jours à l’avance.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vins de Propriétaires", "Cocktails Maison"],
    must_eat: "Cuisine bistrot. Burger de la BAL & Pain Perdu",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-boite-aux-lettres/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine bistrot. Burger de la BAL & Pain Perdu",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default la_boite_aux_lettres;
