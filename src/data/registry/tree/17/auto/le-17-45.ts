import { SurgicalPlace } from "../../../type-definition";

export const le_17_45: SurgicalPlace = {
  id: "poi-le-17-45",
  slug: "le-17-45",
  name: "Le 17.45 Batignolles",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "45 Rue des Dames, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.88401090000001,
    lng: 2.3228143,
    nearest_metro: "Rome",
    metro_lines: [2],
    google_id: "ChIJHb-vGLNv5kcRaEv4WEf6Ry0"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi: 18:00 – 23:00 | mardi: 17:45 – 23:00 | mercredi: 17:45 – 00:00 | jeudi: 17:45 – 01:00 | vendredi: 17:45 – 01:00 | samedi: 17:45 – 01:00 | dimanche: 18:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.le17-45.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-31",
    verified_at: "2026-03-31",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Planche Mixte (Sélection de 6 produits)", price_cents: 2400 },
          { name: "Grande Planche de la Maison (10 produits)", price_cents: 3800 },
          { name: "Planche 100% Fromage (Artisanal)", price_cents: 2200 },
          { name: "Planche 100% Charcuterie (Artisanale)", price_cents: 2200 },
          { name: "Camembert rôti au miel et romarin", price_cents: 1400 },
          { name: "Burrata crémeuse et huile de truffe", price_cents: 1200 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Tomme fermière (Portion)", price_cents: 450 },
          { name: "Camembert au Calvados (Portion)", price_cents: 450 },
          { name: "Saucisson artisanal (Jésus de Lyon)", price_cents: 500 },
          { name: "Coppa de Corse (Portion)", price_cents: 550 },
          { name: "Jambon Serrano affiné 18 mois", price_cents: 600 },
          { name: "Terrine de campagne maison", price_cents: 650 },
          { name: "Houmous et gressins", price_cents: 600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Moelleux au chocolat et crème anglaise", price_cents: 800 },
          { name: "Cheesecake aux coulis de fruits rouges", price_cents: 800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de vin rouge (AOC Morgon)", price_cents: 700 },
          { name: "Verre de vin blanc (Chardonnay)", price_cents: 650 },
          { name: "Pinte de bière artisanale (Lager)", price_cents: 800 },
          { name: "Cocktail Spritz", price_cents: 1000 }
        ]
      }
    ]
  },
  description: `Le 17.45 est le spécialiste des planches à composer selon vos envies. Situé dans la vivante Rue des Dames aux Batignolles, ce lieu est devenu le repaire incontournable des amateurs d’apéro dînatoire. On y choisit ses fromages et ses charcuteries à la pièce sur une fiche de commande, le tout provenant de petits producteurs passionnés. L’ambiance est jeune, décontractée et souvent très animée en fin de semaine.`,
  insider_tip: `• **Timing Stratégique** : Arrivez dès l’ouverture à 17h45 (d'où le nom !) pour décrocher l'une des tables en terrasse très convoitées.
  • **Combo Moelle** : Le Camembert au Calvados marié à une Coppa de Corse est le duo gagnant pour une planche de caractère.
  • **Expérience Culturelle** : Ici, on n’attend pas d'être servi, on compose sa planche soi-même avec le crayon de papier fourni ; un rituel convivial qui fait partie du charme.`,
  expert_catchline: "L’art de l'apéro sur-mesure avec les meilleurs produits du terroir.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vins de vignerons", "Bières artisanales"],
    must_eat: "Cuisine française. Apéro à composer. Le camembert rôti ou la planche mixte personnalisée.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-17-45/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.7,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Apéro à composer. Le camembert rôti ou la planche mixte personnalisée.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_17_45;
