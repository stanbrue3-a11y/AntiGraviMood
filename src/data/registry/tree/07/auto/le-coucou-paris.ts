import { SurgicalPlace } from "../../../type-definition";

export const le_coucou_paris: SurgicalPlace = {
  id: "poi-le-coucou-paris",
  slug: "le-coucou-paris",
  name: "Le Coucou Paris",
  category: "restaurant",
  subcategory: ['français', 'bistronomie'],
  location: {
    address: "35 Av. Duquesne, 75007 Paris, France",
    arrondissement: 7,
    lat: 48.85177729999999,
    lng: 2.3104963,
    nearest_metro: "Saint-François-Xavier",
    metro_lines: ["13"],
    google_id: "ChIJezKqhiZx5kcRTAWG1wjk7iU"
  },
  moods: {
    chill: 70,
    festif: 20,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 07:30 – 23:30 | mardi: 07:30 – 23:30 | mercredi: 07:30 – 23:30 | jeudi: 07:30 – 23:30 | vendredi: 07:30 – 23:30 | samedi: 09:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    viande_exception: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lecoucou.paris/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "silver",
    is_free: false,
    last_updated: "2026-04-01",
    verified_at: "2026-04-01",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Velouté de Butternut à la ciboulette", price_cents: 950, description: "Servi avec des croûtons dorés" },
          { name: "Poireaux vinaigrette tradition", price_cents: 950 },
          { name: "Œufs mayonnaise à l’ancienne", price_cents: 900, is_highlight: true },
          { name: "Soupe à l’oignon gratinée", price_cents: 1100, description: "Le grand classique au gruyère" },
          { name: "Terrine de campagne maison", price_cents: 1200, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Magret de canard au miel et romarin", price_cents: 2400, description: "Sauté de champignons et gratin dauphinois", is_highlight: true },
          { name: "Paleron de bœuf braisé", price_cents: 2200, description: "Mousseline de carottes au beurre noisette" },
          { name: "Pavé de cabillaud sauvage", price_cents: 2600, description: "Poêlée de légumes de saison" },
          { name: "Steak d’aloyau", price_cents: 2800, description: "Frites maison et sauce béarnaise authentique", is_highlight: true },
          { name: "Tartare de bœuf au couteau", price_cents: 2200, description: "Frites maison et salade verte" },
          { name: "Rumpsteak fondant", price_cents: 2600, description: "Accompagné de son gratin dauphinois" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Tarte au citron déstructurée", price_cents: 1000, description: "Sablé breton et meringue légère", is_highlight: true },
          { name: "Profiteroles au chocolat chaud", price_cents: 1100, description: "Glace vanille de Madagascar" },
          { name: "Crème brûlée à la vanille", price_cents: 950 },
          { name: "Mousse au chocolat noir", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Café Espresso", price_cents: 250 },
          { name: "Verre de Vin Rouge (Bordeaux)", price_cents: 800 },
          { name: "Pinte de Bière Blonde", price_cents: 900 },
          { name: "Eau Minérale Evian 50cl", price_cents: 500 },
          { name: "Cocktail Spritz Maison", price_cents: 1400 },
          { name: "Coca-Cola 33cl", price_cents: 550 }
        ]
      }
    ]
  },
  description: `Niché au cœur du 7ème arrondissement, Le Coucou Paris incarne l’esprit de la bistronomie moderne avec une élégance discrète. Le chef Antoine y célèbre les classiques du terroir français, retravaillés avec une précision technique qui fait honneur aux produits frais et locaux. L’accueil y est d’une chaleur humaine rare, ce qui en fait une adresse prisée des habitués du quartier des Invalides pour un déjeuner serein ou un dîner convivial.`,
  expert_catchline: `L’âme du bistrot parisien. Une cuisine de terroir précise et un accueil en or.`,
  insider_tip: `• **Daily Specials** : N’hésitez pas à demander les suggestions du jour au chef Antoine, souvent centrées sur les arrivages de saison non listés.
• **Combo Win** : Mariez votre paleron de bœuf avec un verre de leur sélection de Bordeaux pour une expérience Moelle authentique.
• **Anticipation** : La terrasse est très courue dès les premiers rayons de soleil ; arrivez tôt ou réservez votre table pour en profiter.`,
  specials: {
    cuisine: ["Français"],
    drinks: ["Belle sélection de vins de vignerons", "Cocktails maison"],
    must_eat: "Cuisine Française. Le magret de canard au miel & romarin suivi de la tarte au citron déstructurée."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-coucou-paris/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Française. Le magret de canard au miel & romarin suivi de la tarte au citron déstructurée.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_coucou_paris;
