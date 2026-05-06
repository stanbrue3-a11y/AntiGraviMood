import { SurgicalPlace } from "../../../type-definition";

export const bouillon_chartier_gare_de_l_est: SurgicalPlace = {
  id: "poi-bouillon-chartier-gare-de-l-est",
  slug: "bouillon-chartier-gare-de-l-est",
  name: "Bouillon Chartier Gare de l’Est",
  category: "restaurant",
  subcategory: ['bouillon'],
  location: {
    address: "5 Rue du 8 Mai 1945, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.8759574,
    lng: 2.3587849,
    nearest_metro: "Gare de l’Est",
    metro_lines: [4, 5, 7],
    google_id: "ChIJO77c9RRv5kcRL-TBSE082ec"
  },
  moods: {
    chill: 20,
    festif: 80,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 11:30 – 00:00 | mardi: 11:30 – 00:00 | mercredi: 11:30 – 00:00 | jeudi: 11:30 – 00:00 | vendredi: 11:30 – 00:00 | samedi: 11:30 – 00:00 | dimanche: 11:30 – 00:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bouillon-chartier.com/bouillon-chartier-gare-de-lest/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Œufs mayonnaise", price_cents: 270 },
          { name: "Avocat vinaigrette", price_cents: 380 },
          { name: "Harengs pommes à l’huile", price_cents: 450 },
          { name: "Potage de légumes du jour", price_cents: 320 },
          { name: "Pâté de campagne au poivre", price_cents: 390 },
          { name: "Snails (Escargots x6)", price_cents: 680 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Sole rôtie beurre noisette", price_cents: 1280 },
          { name: "Saucisse de Toulouse purée", price_cents: 1020 },
          { name: "Bœuf bourguignon coquillettes", price_cents: 1220 },
          { name: "Choucroute alsacienne", price_cents: 1180 },
          { name: "Sauté de volaille, riz pilaf", price_cents: 1040 },
          { name: "Tête de veau sauce gribiche", price_cents: 1240 },
          { name: "Faux-filet frites maison", price_cents: 1320 },
          { name: "Pavé de lieu jaune au four", price_cents: 1160 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Chou chantilly", price_cents: 320 },
          { name: "Crème brûlée vanille", price_cents: 390 },
          { name: "Pot de mousse chocolat", price_cents: 370 },
          { name: "Riz au lait grand-mère", price_cents: 280 },
          { name: "Coupe de sorbets", price_cents: 420 },
          { name: "L’assiette de fromages", price_cents: 480 }
        ]
      }
    ]
  },
  description: "Dernier né de la famille ouvert en 2019 juste en face de la Gare de l’Est, ce bouillon perpétue la tradition du ’bien manger pour pas cher’. Dans un cadre qui semble avoir toujours existé, on y retrouve le ballet incessant des serveurs et les plats qui ont fait la renommée de l’enseigne. L’escale parfaite avant de prendre un train ou après une balade sur les quais du canal.",
  insider_tip: "• Idéal pour les voyageurs pressés : le service est l’un des plus rapides de Paris.\n• La salle est un peu plus ’aérée’ que celle des Grands Boulevards, ce qui rend l’expérience légèrement moins bruyante.\n• Demandez un ’quart de bouillon rouge’ pour accompagner votre choucroute, une tradition de l’adresse.",
  specials: {
    cuisine: ["Bouillon"],
    drinks: ["Bouillon Rouge", "Café"],
    must_eat: "Cuisine française traditionnelle. ",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bouillon-chartier-gare-de-l-est/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française traditionnelle. ",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default bouillon_chartier_gare_de_l_est;
