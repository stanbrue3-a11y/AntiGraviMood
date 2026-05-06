import { SurgicalPlace } from "../../../type-definition";

export const l_antre_amis: SurgicalPlace = {
  id: "poi-l-antre-amis",
  slug: "l-antre-amis",
  name: "L’Antre Amis",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "9 Rue Bouchut, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8467683,
    lng: 2.310242,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJLXq2ATBw5kcRoqrUsJbvP8w"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:15 – 14:45, 19:30 – 23:00 | mardi: 12:15 – 14:45, 19:30 – 23:00 | mercredi: 12:15 – 14:45, 19:30 – 23:00 | jeudi: 12:15 – 14:45, 19:30 – 23:00 | vendredi: 12:15 – 14:45, 19:30 – 23:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lantreamis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Carte blanche du chef en 5 temps", price_cents: 9600, description: "Accompagnée de son accord mets et vins", is_highlight: true },
          { name: "Terrine de foie gras au Bas Armagnac", price_cents: 2400 },
          { name: "Carpaccio de noix-de-Saint-Jacques, citron et noisettes", price_cents: 2800 },
          { name: "Jardin de légumes printaniers", price_cents: 1800, description: "Crème d’épinards, petites crevettes roses de Madagascar" },
          { name: "9 Escargots de Bourgogne Extra Gros", price_cents: 1600 },
          { name: "Langoustines croustillantes au basilic", price_cents: 2200, is_highlight: true },
          { name: "Carpaccio de Poulpe de Roche", price_cents: 2400, description: "Huile d’olive et citron" },
          { name: "Sardinillas ’La Brujula'", price_cents: 1200 },
          { name: "Chiffonnade d’épaule Ibérique", price_cents: 1900, description: "Région Extramadura beurre et cornichons" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Coeur de faux-filet mature", price_cents: 3200, description: "Pommes frites maison" },
          { name: "Suprême de volaille aux morilles", price_cents: 2800, description: "Gnocchi de pommes-de-terre et crémée de vin jaune" },
          { name: "Côte de bœuf Angus maturée (pour 2)", price_cents: 8000, is_highlight: true },
          { name: "Merlan de Saint-Gilles-Croix-de-Vie", price_cents: 2600, description: "Fricassée de champignons et asperges vertes" },
          { name: "Pavé de veau de chez ’Hugo Desnoyer'", price_cents: 3500, is_highlight: true },
          { name: "Risotto crémeux aux morilles fraîches", price_cents: 2400 },
          { name: "Filet de boeuf Rossini façon Chateaubriand", price_cents: 4200 },
          { name: "Sole meunière des Côtes Bretonnes", price_cents: 4500 },
          { name: "Risotto de Noix de Saint-Jacques", price_cents: 2800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Mousse au chocolat soufflée", price_cents: 1400, description: "Praliné noisettes, griottes à l’amaretto" },
          { name: "Ananas rôti", price_cents: 1400, description: "Émulsion à la noix de coco, crumble et sorbet exotique" },
          { name: "Riz au lait à la vanille de Madagascar", price_cents: 1200, description: "Caramel au beurre salé, noisettes et noix de pécan", is_highlight: true },
          { name: "Assiette de fromages affinés", price_cents: 1600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave",
        items: [
          { name: "Champagne Billecart-Salmon", price_cents: 9000 },
          { name: "Champagne J-L Vergnon", price_cents: 7500 },
          { name: "Champagne Langlet Taittinger", price_cents: 8500 }
        ]
      }
    ]
  },
  description: `À la frontière du 7ème et du 15ème arrondissement se love l’Antre Amis, une table discrète et élégante. Le chef propriétaire y déploie une cuisine d’auteur, sourcée directement à Rungis et magnifiée par une exécution redoutable. Le cadre haussmannien, feutré sans être guindé, est le théâtre de repas bistronomiques de haute volée où le produit brut est roi.`,
  expert_catchline: `Haute Bistronomie Française. L'incroyable Menu Carte Blanche en 5 temps.`,
  insider_tip: `• **Le Bon Choix** : Osez le grand jeu avec le menu ’Carte Blanche' en 5 temps avec accords mets/vins, une véritable démonstration de l'étendue du talent de la cuisine.
• **L’Apothéose** : Si vous prenez à la carte, le Pavé de veau de chez Hugo Desnoyer est une viande d'exception incontournable.
• **L’Option Chill** : L’après-midi, la maison propose de formidables tapas haut de gamme (poulpe de roche, langoustines) pour un apéro dînatoire très exclusif.`,
  specials: {
    cuisine: ["Français"],
    drinks: ["Plus de 150 vignerons", "850 références en cave"],
    must_eat: "Cuisine bistronomique. Le faux-filet maturé et le Menu Carte Blanche.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-antre-amis/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine bistronomique. Le faux-filet maturé et le Menu Carte Blanche.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_antre_amis;
