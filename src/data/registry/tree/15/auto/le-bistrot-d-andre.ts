import { SurgicalPlace } from "../../../type-definition";

export const le_bistrot_d_andre: SurgicalPlace = {
  id: "poi-le-bistrot-d-andre",
  slug: "le-bistrot-d-andre",
  name: "Le Bistrot d’André",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "232 Rue Saint-Charles, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8372922,
    lng: 2.2771137,
    nearest_metro: "Balard",
    metro_lines: [8, 10],
    google_id: "ChIJoQBaNHVw5kcR6Ra0qsowZNM"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "Monday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Tuesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Wednesday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Saturday: Closed | Sunday: Closed",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lebistrotdandre.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 28,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Œuf Bio Mayo du Bistrot", price_cents: 650 },
          { name: "Œuf Cocotte Bio aux Morilles", price_cents: 1100, is_highlight: true },
          { name: "Terrine de Campagne Maison", price_cents: 850 },
          { name: "Salade de Gésiers Confits", price_cents: 900 },
          { name: "Poireaux Vinaigrette & Noisettes", price_cents: 800 },
          { name: "Croustillant de Camembert", price_cents: 950 },
          { name: "Escargots de Bourgogne (x6)", price_cents: 1200 }
        ]
      },
      {
        category_type: "sharing",
        display_label: "À Partager",
        items: [
          { name: "Os à Moelle à la Fleur de Sel", price_cents: 950, description: "La spécialité de Javel, à déguster avec du pain grillé", is_highlight: true },
          { name: "Planche Mixte (Charcuterie & Fromage)", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Bœuf Bourguignon de l’Ancien", price_cents: 2200, description: "Mijoté 8h, carottes fondant et vin de Bourgogne", is_highlight: true },
          { name: "Magret de Canard au Miel & Épices", price_cents: 2400 },
          { name: "Tartare de Bœuf Préparé à la Minute", price_cents: 1900 },
          { name: "Joues de Porc Confites au Cidre", price_cents: 2100 },
          { name: "Pavé de Lieu Jaune au Beurre Blanc", price_cents: 2300 },
          { name: "Andouillette AAAAA Grillée", price_cents: 2000 },
          { name: "Bacon Burger du Bistrot (Comté)", price_cents: 1800 },
          { name: "Entrecôte 300g & Frites Maison", price_cents: 2800, is_highlight: true },
          { name: "Saucisse au Couteau & Aligot", price_cents: 1950 },
          { name: "Confit de Canard du Sud-Ouest", price_cents: 2200 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules",
        items: [
          { name: "Formule Midi (Entrée + Plat)", price_cents: 1850 },
          { name: "Formule Midi (Plat + Dessert)", price_cents: 1850 },
          { name: "Formule Complète Midi", price_cents: 2150, description: "Entrée, Plat et Dessert au choix sur l’ardoise" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Profiteroles au Chocolat Chaud", price_cents: 950 },
          { name: "Tarte Tatin de la Mère André", price_cents: 900, is_highlight: true },
          { name: "Mousse au Chocolat à l’Ancienne", price_cents: 800 },
          { name: "Carpaccio d’Ananas au Caramel", price_cents: 850 },
          { name: "Panna Cotta aux Fruits Rouges", price_cents: 800 },
          { name: "Tiramisu du Chef", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Vins de Vignerons (Le Verre)", price_cents: 600 },
          { name: "Bouteille de Vin (Sélection)", price_cents: 2400 },
          { name: "Café Espresso Terroir", price_cents: 250 },
          { name: "Bière Pression (Demi)", price_cents: 500 },
          { name: "Eau Minérale (75cl)", price_cents: 600 }
        ]
      }
    ]
  },
  description: `Le Bistrot d’André est bien plus qu’un simple restaurant, c’est un voyage dans le temps au cœur du quartier Javel. Situé à deux pas des rives où trônaient jadis les usines Citroën, ce bistrot rend un hommage vibrant à l’histoire industrielle du 15ème arrondissement avec son décor vintage, ses maquettes d’Automobiles et ses affiches d’époque. On y vient pour l’ambiance chaleureuse d’un vrai bistrot de quartier et pour une cuisine de terroir qui ne transige jamais sur la générosité des portions.`,
  insider_tip: `• **Timing Stratégique** : Le lieu est très prisé par les habitués du quartier au déjeuner, arrivez dès midi ou réservez pour garantir votre table sur la terrasse.
  • **Combo Moelle** : Commencez par l’os à moelle bien grillé avant d’attaquer leur Bœuf Bourguignon, l’un des plus authentiques de la rive gauche.
  • **Expérience Culturelle** : Prenez le temps de détailler les memorabilia Citroën qui parsèment la salle, c’est un petit musée privé de l’automobile française.`,
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vins de Propriétaires", "Digestifs Classiques"],
    must_eat: "Cuisine de bistrot. Bœuf Bourguignon & Magret de Canard au Miel.",
    expert_catchline: "Le repaire historique de Javel, hommage vibrant aux usines Citroën et à la cuisine de terroir.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-bistrot-d-andre/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Bœuf Bourguignon & Magret de Canard au Miel.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_bistrot_d_andre;
