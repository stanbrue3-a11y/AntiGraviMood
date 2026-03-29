import { SurgicalPlace } from "../../../../type-definition";

export const l_ebauchoir: SurgicalPlace = {
  id: "poi-l-ebauchoir",
  slug: "l-ebauchoir",
  name: "L’Ébauchoir",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "43-45 Rue de Cîteaux, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.84987150000001,
    lng: 2.3811387,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ37Xhzw5y5kcRr2FfxIiIF_w"
  },
  moods: {
    chill: 70,
    festif: 40,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 20:00–22:30 | lundi: 20:00–22:30 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lebauchoir.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 35,
    dish_price: 26.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Formules Déjeuner (Semaine - Plats)",
        items: [
          { name: "Entrée + Plat du jour", price_cents: 1800, is_highlight: true },
          { name: "Plat du jour + Dessert", price_cents: 1800 },
          { name: "Entrée + Plat + Dessert", price_cents: 2100, is_highlight: true }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Créations de Saison",
        items: [
          { name: "Filets de Hareng marinés, pommes à l'huile", price_cents: 950, is_highlight: true },
          { name: "Houmous de lentilles vertes, pickles d'oignons", price_cents: 1000 },
          { name: "Terrine de Campagne maison & Condiments", price_cents: 1100 },
          { name: "Œuf Parfait, crème de topinambour", price_cents: 1250 },
          { name: "Carpaccio de Saint-Jacques, citron vert", price_cents: 1450 },
          { name: "Velouté de légumes oubliés au beurre noisette", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Signatures : Terre & Mer",
        items: [
          { name: "Travers de Porc rôtis au miel et épices douces", price_cents: 2600, is_highlight: true },
          { name: "Poulpe de Galice grillé, écrasé de vitelotte", price_cents: 2900, is_highlight: true },
          { name: "Cabillaud de ligne, bisque de homard corsée", price_cents: 2800 },
          { name: "Épaule d'Agneau confite 12h, légumes racine", price_cents: 2750 },
          { name: "Pseudo-risotto d'épautre, champignons des bois", price_cents: 2400 },
          { name: "Onglet de Bœuf Angus, frites maison au couteau", price_cents: 2700 },
          { name: "Magret de Canard, réduction de Porto", price_cents: 2650 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Fromages & Desserts Mythiques",
        items: [
          { name: "Gâteau de Riz Grand-Mère (Signature Indétrônable)", price_cents: 950, is_highlight: true },
          { name: "Mousse au Chocolat noir 70%, fleur de sel", price_cents: 900 },
          { name: "Tarte tatin aux pommes Boskoop, crème crue", price_cents: 1050 },
          { name: "Baba au Rhum, crème fouettée vanille", price_cents: 1100 },
          { name: "Assiette de fromages de la Maison Quatrehomme", price_cents: 1200 },
          { name: "Sorbet maison (3 boules au choix)", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Sélection de la Cave (Boissons)",
        items: [
          { name: "Verre de Crozes-Hermitage Rouge", price_cents: 950 },
          { name: "Verre de Chablis (Sélection Domaine)", price_cents: 1100 },
          { name: "Verre de Languedoc Nature", price_cents: 850 },
          { name: "Pichet de vin de pays (25cl)", price_cents: 900 },
          { name: "Café de spécialité torréfié à Paris", price_cents: 320 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 450 }
        ]
      }
    ]
  },
  description: "L'Ébauchoir est un bistrot d'une authenticité rare qui fait vibrer le quartier d'Aligre depuis des décennies. Sous les lustres d'époque et dans une ambiance indétrônable de brasserie parisienne, on y savoure une cuisine qui respecte les saisons avec une exigence de produit admirable. Son gâteau de riz est une légende locale que les habitués commandent avant même de regarder la carte. Précis, généreux et constant, c'est l'essence même du bien-manger parisien.",
  insider_tip: `• **Le Dessert Culte** : On ne repart pas sans avoir goûté le 'Gâteau de Riz Grand-Mère', véritable madeleine de Proust de l'établissement.
  • **Le Midi Stratégique** : Sa formule déjeuner est l'un des meilleurs rapports qualité-prix du secteur Bastille/Aligre.
  • **Réservation Cruciale** : Le lieu est souvent complet le soir dès le début de semaine ; anticipez de 48h.`,
  specials: {
    cuisine: ["Française", "Bistronomie", "Saisonnière"],
    drinks: ["Vins de Propriétaires", "Café de Spécialité"],
    must_eat: "Cuisine Bistrot. Travers de Porc & Gâteau de Riz Grand-Mère",
  },
  images: {
    hero: "AU_ZVEEf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf",
    gallery: ["AU_ZVEG_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W","AU_ZVEHm_R1k5F3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3Wf3W"]
  },
  verified: false,
  google_rating: 4.4
};

export default l_ebauchoir;
