import { SurgicalPlace } from "../../../type-definition";

export const la_traversee: SurgicalPlace = {
  id: "poi-la-traversee",
  slug: "la-traversee",
  name: "La Traversée",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "2 Rue Ramey, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8872645,
    lng: 2.3475986,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJsa-Q8Wdu5kcR7RS25Rfpe94"
  },
  moods: {
    chill: 80,
    festif: 70,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 19:00 – 02:00 | mardi: 12:00 – 15:00, 19:00 – 02:00 | mercredi: 12:00 – 15:00, 19:00 – 02:00 | jeudi: 12:00 – 15:00, 19:00 – 02:00 | vendredi: 12:00 – 15:00, 19:00 – 02:00 | samedi: 12:00 – 15:00, 19:00 – 03:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.latraverseeparis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 25,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "sharing",
        display_label: "À Partager (Soir)",
        items: [
          { name: "Haricots verts frits, sauce tartare", price_cents: 700 },
          { name: "Scotch egg maison", price_cents: 900 },
          { name: "Croquettes de haddock", price_cents: 800 },
          { name: "Tacos d’épaule d'agneau", price_cents: 1200 },
          { name: "Arancini au céleri et n’duja", price_cents: 1000 },
          { name: "Keftas de bœuf Aubrac", price_cents: 1100 },
          { name: "Poulpe grillé, houmous & paprika", price_cents: 1400 },
          { name: "Burrata crémeuse, pestou & noisettes", price_cents: 1000 },
          { name: "Planche de charcuterie artisanale", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats (Midi)",
        items: [
          { name: "Maigre mariné au citron confit et figues", price_cents: 1700 },
          { name: "Velouté de topinambour, lard grillé", price_cents: 1500 },
          { name: "Plat du jour Bistronomique", price_cents: 1200 },
          { name: "Formule Entrée + Plat + Dessert", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mousse au chocolat Caramelia & Combava", price_cents: 900 },
          { name: "Dessert du moment", price_cents: 800 }
        ]
      }
    ]
  },
  description: "La Traversée est un véritable bar à manger traversant entre la rue Ramey et la rue Clignancourt. Le midi, l’ambiance est bistronomique avec des formules accessibles et soignées. Le soir, le lieu se transforme en un spot convivial où l'on partage des assiettes créatives accompagnées de vins naturels à la tireuse.",
  insider_tip: "• **Timing Stratégique** : Le Happy Hour (18h-20h) est le moment idéal pour démarrer la soirée avec un cocktail.\n• **Combo Moelle** : Les haricots verts frits sont addictifs, à commander d’office pour le grignotage.\n• **Expérience Culturelle** : Profitez de la sélection de vins bios servis à la tireuse, une rareté à Paris.",
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vins naturels", "Bières artisanales", "Cocktails"],
    must_eat: "Cuisine Bar à vin.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-traversee/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Bar à vin.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default la_traversee;
