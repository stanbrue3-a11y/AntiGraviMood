import { SurgicalPlace } from "../../../type-definition";

export const l_agape: SurgicalPlace = {
  id: "poi-l-agape",
  slug: "l-agape",
  name: "L’Agapé",
  category: "restaurant",
  subcategory: ['japonais'],
  location: {
    address: "51 Rue Jouffroy d’Abbans, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8848539,
    lng: 2.3069514,
    nearest_metro: "Wagram",
    metro_lines: [3],
    google_id: "ChIJQ3-giLxv5kcRgYmfvT0hy6I"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 20:00 – 22:00 | mardi: 12:00 – 14:00, 20:00 – 22:00 | mercredi: 12:00 – 14:00, 20:00 – 22:00 | jeudi: 12:00 – 14:00, 20:00 – 22:00 | vendredi: 12:00 – 14:00, 20:00 – 22:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://agape-paris.fr/",
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
          { name: "Asperges vertes de Provence, sabayon léger", price_cents: 5900 },
          { name: "Tagliatelles de seiche au naturel", price_cents: 5200 },
          { name: "Raviolo de courgette fumée et sa fleur", price_cents: 4900 },
          { name: "Tartare de boeuf Blonde d’Aquitaine au couteau", price_cents: 7600 },
          { name: "Foie gras de canard mi-cuit, chutney de saison", price_cents: 5200 },
          { name: "Langoustines du Guilvinec juste saisies", price_cents: 7400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Poisson de nos côtes bretonnes, légumes racines", price_cents: 6900 },
          { name: "Agneau de lait Manex, jus corsé au thym", price_cents: 7200 },
          { name: "Caneton de Challans rôti, navets glacés", price_cents: 9200 },
          { name: "Homard bleu de Roscoff, beurre de corail", price_cents: 9500 },
          { name: "Ris de veau rôtis, purée de panais", price_cents: 7600 },
          { name: "Filet de turbot, émulsion de coquillages", price_cents: 8200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Comté Bernard Antony (Affinage exceptionnel)", price_cents: 2100 },
          { name: "Mille-feuille vanille Taha’a, caramel onctueux", price_cents: 3200 },
          { name: "Fraises Gariguette au poivre de Timut", price_cents: 2200 },
          { name: "Chocolat grand cru Agapé, texture croquante", price_cents: 3200 },
          { name: "Soufflé chaud au Grand Marnier", price_cents: 2800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Coupe de Champagne Brut", price_cents: 1800 },
          { name: "Verre de Chablis Domaine William Fèvre", price_cents: 1600 },
          { name: "Café de spécialité & mignardises", price_cents: 800 },
          { name: "Infusion d’herbes fraîches", price_cents: 900 }
        ]
      }
    ]
  },
  description: `L’Agapé est une ode à la pureté du produit et à l’élégance du geste. Sous la direction de Laurent Lapaire, ce restaurant étoilé du quartier Jouffroy d’Abbans propose une expérience gastronomique d’une rare finesse. Le décor est sobre, laissant toute la place à une cuisine qui sublime les saisons avec une précision japonaise dans les cuissons et les assaisonnements.`,
  insider_tip: `• **Timing Stratégique** : Le déjeuner "Estival" à 54€ est une porte d’entrée magistrale pour découvrir l'univers étoilé à prix doux.
  • **Combo Moelle** : Ne manquez pas les tagliatelles de seiche, signature technique et gustative absolue de la maison.
  • **Expérience Culturelle** : La sélection de fromages de chez Bernard Antony est l’une des meilleures de Paris ; une étape obligatoire pour les amateurs.`,
  expert_catchline: "L’harmonie parfaite entre la rigueur gastronomique et l'émotion du produit brut.",
  specials: {
    cuisine: ["Japonais"],
    drinks: ["Grands Crus", "Champagnes"],
    must_eat: "Cuisine japonaise. Les tagliatelles de seiche ou le homard bleu de Roscoff.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-agape/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.4,
  michelin_stars: 1,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. Les tagliatelles de seiche ou le homard bleu de Roscoff.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default l_agape;
