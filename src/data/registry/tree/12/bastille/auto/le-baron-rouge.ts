import { SurgicalPlace } from "../../../../type-definition";

export const le_baron_rouge: SurgicalPlace = {
  id: "poi-le-baron-rouge",
  slug: "le-baron-rouge",
  name: "Le Baron Rouge",
  category: "restaurant",
  subcategory: ["apéro"],
  location: {
    address: "1 Rue Théophile Roussel, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.84944609999999,
    lng: 2.3773588,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJNTd-9QVy5kcRSktNBvRTsao"
  },
  moods: {
    chill: 80,
    festif: 60,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 10:00 – 22:00 | mardi: 10:00 – 22:00 | mercredi: 10:00 – 22:00 | jeudi: 10:00 – 22:00 | vendredi: 10:00 – 22:00 | samedi: 10:00 – 22:00 | dimanche: 10:00 – 16:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://lebaronrouge.net/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 11.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "drink",
        display_label: "Les Vins au Tonneau : Sélection Tradition (Boissons)",
        items: [
          { name: "Merlot Ardéchois (Le Litre)", price_cents: 450, is_highlight: true },
          { name: "Touraine Rouge (Le Litre)", price_cents: 550 },
          { name: "Touraine Blanc (Le Litre)", price_cents: 650 },
          { name: "Morgon Bio au Tonneau (Le Litre)", price_cents: 1000 },
          { name: "Côtes du Rhône (Le Litre)", price_cents: 700 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Vins au Verre & Pichets (Boissons)",
        items: [
          { name: "Verre de Morgon Vieilles Vignes", price_cents: 350, is_highlight: true },
          { name: "Verre de Sancerre Blanc", price_cents: 450 },
          { name: "Verre de Muscadet Sèvre & Maine", price_cents: 320 },
          { name: "Verre de Bordeaux Supérieur", price_cents: 380 },
          { name: "Pichet de Rosé de Provence (25cl)", price_cents: 450 },
          { name: "Pichet de Rouge de Table (50cl)", price_cents: 800 },
          { name: "Bière Pression Artisanale (25cl)", price_cents: 400 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Rôtisserie Marine : Entrées & Plateaux (Saison : Sept-Avril)",
        items: [
          { name: "Assiette de 6 Huîtres de Bretagne", price_cents: 1200, is_highlight: true },
          { name: "Assiette de 12 Huîtres de Bretagne", price_cents: 2200 },
          { name: "Pain de Seigle & Beurre Demi-Sel", price_cents: 250 },
          { name: "Vinaigre à l'échalote maison", price_cents: 50 }
        ]
      },
      {
        category_type: "main",
        display_label: "Planches & Grignotages (Plats)",
        items: [
          { name: "Planche Mixte (Charcuterie & Fromage)", price_cents: 1100, is_highlight: true },
          { name: "Planche de Charcuterie Fine", price_cents: 1100 },
          { name: "Planche de Fromages Affinés", price_cents: 1100 },
          { name: "Assiette de Saucisson Sec", price_cents: 650 },
          { name: "Terrine de Campagne Maison", price_cents: 700 },
          { name: "Rillettes d'Oie du Terroir", price_cents: 750 },
          { name: "Olives de Lucques & Cornichons", price_cents: 450 },
          { name: "Bocal de Foie Gras de Canard", price_cents: 1800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Petites Faims & Douceurs",
        items: [
          { name: "Sandwich Mixte (Pain de campagne)", price_cents: 650 },
          { name: "Tartine de Jambon de Pays", price_cents: 550 },
          { name: "Cantaltou (Fromage à l'unité)", price_cents: 450 },
          { name: "Fromage de Chèvre Fermier", price_cents: 450 },
          { name: "Café Espresso", price_cents: 200 }
        ]
      }
    ]
  },
  description: "Le Baron Rouge est un monument de la vie d'Aligre, un bar à vins authentique et populaire où le temps semble s'être arrêté. Entre les tonneaux empilés jusqu'au plafond et le comptoir en zinc, on y déguste des crus français sans prétention mais d'une efficacité redoutable. Le week-end, l'institution se transforme en fief des amateurs d'huîtres qui s'agglutinent sur le trottoir pour savourer le grand air marin au cœur de Paris. C'est le spot ultime pour un apéro brut, convivial et sans chichis.",
  insider_tip: `• **Le Rite Dominicain** : Venez le dimanche matin pour les huîtres sur le trottoir, c'est l'essence même du quartier.
  • **Vin au Tonneau** : Apportez votre bouteille vide, vous pouvez la faire remplir directement au tonneau pour un prix imbattable.
  • **Timing Stratégique** : Le lieu est petit et très prisé ; visez 17h00 en semaine pour avoir une chance de vous asseoir à l'intérieur.`,
  specials: {
    cuisine: ["Bar à Vins", "Terroir"],
    drinks: ["Vins au Tonneau", "Morgon", "Sancerre"],
    must_eat: "Apéro. Huîtres de Bretagne & Planche Mixte",
  },
  images: {
    hero: "AU_ZVEEf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf",
    gallery: ["AU_ZVEG_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W","AU_ZVEHm_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W"]
  },
  verified: false,
  google_rating: 4.4
};

export default le_baron_rouge;
