import { SurgicalPlace } from "../../../type-definition";

export const papillon: SurgicalPlace = {
  id: "poi-papillon",
  slug: "papillon",
  name: "Papillon",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "8 Rue Meissonier, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.883405,
    lng: 2.3045643,
    nearest_metro: "Wagram",
    metro_lines: [3],
    google_id: "ChIJZXIry71v5kcRnSE7iFGwL0c"
  },
  moods: {
    chill: 75,
    festif: 25,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:30 – 22:00 | mardi: 12:00 – 14:00, 19:30 – 22:00 | mercredi: 12:00 – 14:00, 19:30 – 22:00 | jeudi: 12:00 – 14:00, 19:30 – 22:00 | vendredi: 12:00 – 14:00, 19:30 – 22:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.papillonparis.fr/",
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
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Caviars d’aubergine, sésame et miso", price_cents: 1600 },
          { name: "Radis beurrés et pain au levain", price_cents: 1200 },
          { name: "Velouté de châtaignes, mousse de lard", price_cents: 1800 },
          { name: "Pâté en croûte du moment", price_cents: 2100 },
          { name: "Huîtres n°3 en gelée de mer", price_cents: 2400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Canard sauvage rôtie aux olives de Lucques", price_cents: 3800 },
          { name: "Bar de ligne, fenouil et beurre blanc", price_cents: 3600 },
          { name: "Paupiette de chou aux légumes d’hiver", price_cents: 2800 },
          { name: "quasi de veau, carottes fanes glacées", price_cents: 3500 },
          { name: "Pigeonneau de Vendée en crapaudine", price_cents: 4200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Le soufflé au Grand Marnier", price_cents: 1500 },
          { name: "Chocolat grand cru, tuile croustillante", price_cents: 1400 },
          { name: "Poire pochée au poivre de Timut", price_cents: 1200 },
          { name: "Assiette de fromages du 17e", price_cents: 1600 },
          { name: "Baba au rhum ambré", price_cents: 1400 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Coupe de Champagne", price_cents: 1600 },
          { name: "Verre de Meursault", price_cents: 1800 },
          { name: "Cocktail signature (le Butterfly)", price_cents: 1500 },
          { name: "Infusion d’herbes fraîches", price_cents: 700 },
          { name: "Vittel (50cl)", price_cents: 600 }
        ]
      }
    ]
  },
  description: `Papillon est l’écrin de Christophe Saintagne, ancien chef de file de l’écurie Ducasse. Ici, la gastronomie se dépouille de ses artifices pour revenir à l’essentiel : le goût juste et le produit magnifié. Le cadre minimaliste et élégant du quartier Wagram sert de théâtre à une partition culinaire d’une précision chirurgicale.`,
  insider_tip: `• **Timing Stratégique** : Idéal pour un déjeuner d'affaires calme ou un dînner intimiste de haut vol.
  • **Combo Moelle** : Le pâté en croûte est une œuvre d'art, souvent imité mais jamais égalé ici.
  • **Expérience Culturelle** : Christophe Saintagne redéfinit la simplicité luxe ; observez le dressage, c’est une leçon d'esthétisme.`,
  expert_catchline: "La haute couture culinaire sans le superflu.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Grands crus", "Champagnes"],
    must_eat: "Cuisine gastronomique. Le canard sauvage au sang et olives de Lucques.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/papillon/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine gastronomique. Le canard sauvage au sang et olives de Lucques.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default papillon;
