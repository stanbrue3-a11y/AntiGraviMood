import { SurgicalPlace } from "../../../type-definition";

export const tempero_epicerie: SurgicalPlace = {
  id: "poi-tempero-epicerie",
  slug: "tempero-epicerie",
  name: "TEMPERO EPICERIE",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "24 Prom. Claude Lévi-Strauss, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8318608,
    lng: 2.3743623,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJz_tq_4px5kcRs8-AcarwBNc"
  },
  moods: {
    chill: 85,
    festif: 45,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 09:00 – 15:00 | mardi: 09:00 – 15:00 | mercredi: 09:00 – 15:00 | jeudi: 09:30 – 16:00, 19:30 – 22:30 | vendredi: 09:30 – 16:00, 19:30 – 22:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://tempero.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 24,
    dish_price: 18.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Cocottes & Sauts",
        items: [
          { name: "Poitrine de porc confite", price_cents: 2000 },
          { name: "Poulet grillé fermier", price_cents: 2000 },
          { name: "Cabillaud vapeur & légumes", price_cents: 2050 },
          { name: "Risotto d’épeautre aux champignons", price_cents: 1900 },
          { name: "Plat du jour (Ardoise)", price_cents: 1800 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Grignotages & Veloutés",
        items: [
          { name: "Velouté de butternut de saison", price_cents: 900 },
          { name: "Œuf mollet & crème herbacée", price_cents: 950 },
          { name: "Rillette de hareng fumé maison", price_cents: 900 },
          { name: "Pain au levain & beurre demi-sel", price_cents: 400 },
          { name: "Assiette de fromages affinés", price_cents: 1200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Fins de Repas",
        items: [
          { name: "Riz au lait coco & mangue", price_cents: 800 },
          { name: "Medivnyk (Gâteau au miel)", price_cents: 800 },
          { name: "Meringue italienne aux fruits", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Verre de vin nature (Sélection)", price_cents: 650 },
          { name: "Bière artisanale locale (33cl)", price_cents: 700 },
          { name: "Jus de fruits frais pressés", price_cents: 500 },
          { name: "Café de spécialité", price_cents: 250 }
        ]
      }
    ]
  },
  description: "Tempero Épicerie est la ’petite sœur’ du restaurant Nosso d’Alessandra Montagne. Cette épicerie-cantine propose une cuisine vive, locale et aux accents brésiliens dans un cadre moderne et lumineux. On y vient pour les cocottes réconfortantes, les vins natures et l'atmosphère décontractée du quartier de la BNF.",
  insider_tip: "• **Choix du Maître** : La poitrine de porc confite est un incontournable de la chef, d’une tendreté absolue.\n• **Expérience Culturelle** : Profitez-en pour faire vos courses d'épicerie fine et de vins natures avant de partir.\n• **Timing Stratégique** : Idéal pour un déjeuner de travail inspirant ou un début de soirée (le vendredi).",
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vin Nature", "Café de spécialité"],
    must_eat: "Cuisine de marché. Cocotte de porc & Riz au lait coco",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tempero-epicerie/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de marché. Cocotte de porc & Riz au lait coco",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default tempero_epicerie;
