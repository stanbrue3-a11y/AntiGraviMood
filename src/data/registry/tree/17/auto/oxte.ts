import { SurgicalPlace } from "../../../type-definition";

export const oxte: SurgicalPlace = {
  id: "poi-oxte",
  slug: "oxte",
  name: "Oxte",
  category: "restaurant",
  subcategory: ['mexicain'],
  location: {
    address: "5 Rue Troyon, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8758634,
    lng: 2.2953101,
    nearest_metro: "Charles de Gaulle - Étoile",
    metro_lines: [1, 2, 6, "A"],
    google_id: "ChIJCU_1nuxv5kcRmfS3m_h6mCg"
  },
  moods: {
    chill: 65,
    festif: 45,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 12:15 – 13:30, 19:15 – 21:00 | mardi: 12:15 – 13:30, 19:15 – 21:00 | mercredi: 12:15 – 13:30, 19:15 – 21:00 | jeudi: 12:15 – 13:30, 19:15 – 21:00 | vendredi: 12:15 – 13:30, 19:15 – 21:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurant-oxte.com/",
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
          { name: "Ceviche de daurade royale, hibiscus et betterave", price_cents: 3200 },
          { name: "Lotte de Roscoff, chachoyotas et beurre blanc foie de lotte", price_cents: 4200 },
          { name: "Boeuf maturé fumé, masa et piment ancho", price_cents: 4500 },
          { name: "Pigeon avec mole Oxte et poireaux confits", price_cents: 4800 },
          { name: "Poulpe grillé, boudin noir et recado negro", price_cents: 3800 },
          { name: "Poisson du jour, mole de carotte et raisin", price_cents: 3600 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Tostadita de crabe, avocat et lime", price_cents: 2200 },
          { name: "Gordita de canard confit, salsa verde", price_cents: 1800 },
          { name: "Bouillon de maïs parfumé à l’épazote", price_cents: 1500 },
          { name: "Aguachile de crevettes, concombre et coriandre", price_cents: 2400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Gâteau de maïs moelleux, piloncillo et chocolat", price_cents: 1600 },
          { name: "Avocat, mezcal et sorbet citron vert", price_cents: 1400 },
          { name: "Ganache chocolat mexicain, piment et fleur de sel", price_cents: 1500 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Marguerita signature (Tequila reposado)", price_cents: 1600 },
          { name: "Mezcal dégustation (Le verre)", price_cents: 1400 },
          { name: "Verre de vin blanc (Sauvignon)", price_cents: 1200 },
          { name: "Café mexicain d’altitude", price_cents: 500 }
        ]
      }
    ]
  },
  description: `Oxte est le terrain d’expression étoilé du chef Enrique Casarrubias, qui marie avec brio la haute gastronomie française et les saveurs vibrantes de son Mexique natal. Dans un cadre intimiste à quelques pas de l’Arc de Triomphe, chaque plat raconte une histoire de métissage, où le mole traditionnel rencontre le turbot de ligne. Une cuisine colorée, épicée avec une finesse rare, et profondément authentique.`,
  insider_tip: `• **Timing Stratégique** : Le menu déjeuner en 3 étapes à 69€ est une opportunité exceptionnelle de goûter à l'étoile Michelin dans un cadre plus détendu.
  • **Combo Moelle** : Le pigeon au mole Oxte est la pièce maîtresse du chef, une démonstration de force sur la profondeur des sauces mexicaines.
  • **Expérience Culturelle** : Laissez-vous tenter par le dessert à l’avocat et mezcal, un audacieux mélange de textures et de fraîcheur qui surprendra vos certitudes.`,
  expert_catchline: "L’éclat des saveurs mexicaines magnifié par la rigueur de la gastronomie française.",
  specials: {
    cuisine: ["Mexicain"],
    drinks: ["Tequilas premium", "Mezcals", "Vins"],
    must_eat: "Cuisine mexicaine. Le pigeon au mole Oxte ou le ceviche de daurade royale.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oxte/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 1,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine mexicaine. Le pigeon au mole Oxte ou le ceviche de daurade royale.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default oxte;
