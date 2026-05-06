import { SurgicalPlace } from "../../../type-definition";

export const le_petit_bouillon_vavin: SurgicalPlace = {
  id: "poi-le-petit-bouillon-vavin",
  slug: "le-petit-bouillon-vavin",
  name: "Le Petit Bouillon Vavin",
  category: "restaurant",
  subcategory: ['bouillon'],
  location: {
    address: "119 Bd du Montparnasse, 75006 Paris, France",
    arrondissement: 6,
    lat: 48.84193699999999,
    lng: 2.3305309,
    nearest_metro: "Vavin",
    metro_lines: [4],
    google_id: "ChIJV_hp2l9x5kcRzNhaXizdWao"
  },
  moods: {
    chill: 15,
    festif: 85,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 00:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://petitbouillonvavin.fr/",
      label: "DÉCOUVRIR"
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
          { name: "Œuf mayonnaise", price_cents: 230, description: "Le champion du monde" },
          { name: "Os à moelle grillé, fleur de sel", price_cents: 460, description: "Servi avec ses toasts" },
          { name: "Hareng et son écrasé de pommes de terre", price_cents: 480 },
          { name: "Belle terrine de foie de volaille maison", price_cents: 460 },
          { name: "Gratinée à l’oignon", price_cents: 390, description: "Classique parisien" },
          { name: "Salade de gésiers de volaille confits", price_cents: 390 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Bœuf bourguignon aux pommes vapeur", price_cents: 1490, description: "Mijoté avec amour" },
          { name: "Saucisse au couteau Purée", price_cents: 920, description: "Jus de viande lié" },
          { name: "Lieu noir en papillote, légumes basquaise", price_cents: 1350 },
          { name: "Côte de cochon à l’estragon", price_cents: 1280 },
          { name: "Tartare de bœuf haché minute", price_cents: 1120, description: "Frites fraîches" },
          { name: "Poulet Label Rouge Rôti", price_cents: 1080 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Kir", price_cents: 280, description: "Cassis, Mûre ou Pêche" },
          { name: "Beaujolais Rouge (Bouteille)", price_cents: 3500 },
          { name: "Café", price_cents: 180 },
          { name: "Bière Pression 25cl", price_cents: 350 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts",
        items: [
          { name: "Profiteroles au chocolat maison", price_cents: 580 },
          { name: "Île flottante", price_cents: 480 },
          { name: "Baba au rhum", price_cents: 540 },
          { name: "Tarte Tatin", price_cents: 550, description: "Crème d’Isigny" }
        ]
      }
    ]
  },
  description: "Le Petit Bouillon Vavin est une enclave d’effervescence joyeuse au cœur du Montparnasse historique. Sous son haut plafond Art Déco, on revit l’âge d’or des brasseries populaires parisiennes : service en tablier blanc, nappes en papier et une cuisine française authentique servie à une vitesse record. C’est bruyant, c’est vivant, c'est Paris.",
  insider_tip: "• Comme tout bon bouillon, l’endroit ne prend pas de réservations : vise les créneaux ’tôt’ (12h/19h) pour éviter la queue sur le boulevard.\n• Ne rate surtout pas l’os à moelle, c’est l'un des meilleurs rapports qualité-prix du quartier.\n• Le service est si rapide que tu peux finir tes trois plats en moins de 45 minutes si tu es pressé.",
  specials: {
    cuisine: ["Bouillon"],
    drinks: ["Vin de table", "Kir", "Café"],
    must_eat: "Cuisine française traditionnelle. ",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-petit-bouillon-vavin/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.0,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française traditionnelle. ",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_petit_bouillon_vavin;
