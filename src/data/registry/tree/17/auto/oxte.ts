import { SurgicalPlace } from "../../../type-definition";

export const oxte: SurgicalPlace = {
  id: "poi-oxte",
  slug: "oxte",
  name: "Oxte",
  category: "restaurant",
  subcategory: ["Gastronomique", "Michelin-starred", "Mexicain moderne"],
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
    wifi: false,
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
        category: "Les Plats",
        items: [
          { name: "Ceviche de daurade royale, hibiscus et betterave", price: "32€" },
          { name: "Lotte de Roscoff, chachoyotas et beurre blanc foie de lotte", price: "42€" },
          { name: "Boeuf maturé fumé, masa et piment ancho", price: "45€" },
          { name: "Pigeon avec mole Oxte et poireaux confits", price: "48€" },
          { name: "Poulpe grillé, boudin noir et recado negro", price: "38€" },
          { name: "Poisson du jour, mole de carotte et raisin", price: "36€" }
        ]
      },
      {
        category: "Pour Commencer / À Partager",
        items: [
          { name: "Tostadita de crabe, avocat et lime", price: "22€" },
          { name: "Gordita de canard confit, salsa verde", price: "18€" },
          { name: "Bouillon de maïs parfumé à l'épazote", price: "15€" },
          { name: "Aguachile de crevettes, concombre et coriandre", price: "24€" }
        ]
      },
      {
        category: "Douceurs",
        items: [
          { name: "Gâteau de maïs moelleux, piloncillo et chocolat", price: "16€" },
          { name: "Avocat, mezcal et sorbet citron vert", price: "14€" },
          { name: "Ganache chocolat mexicain, piment et fleur de sel", price: "15€" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Marguerita signature (Tequila reposado)", price: "16€" },
          { name: "Mezcal dégustation (Le verre)", price: "14€" },
          { name: "Verre de vin blanc (Sauvignon)", price: "12€" },
          { name: "Café mexicain d'altitude", price: "5€" }
        ]
      }
    ]
  },
  description: `Oxte est le terrain d'expression étoilé du chef Enrique Casarrubias, qui marie avec brio la haute gastronomie française et les saveurs vibrantes de son Mexique natal. Dans un cadre intimiste à quelques pas de l'Arc de Triomphe, chaque plat raconte une histoire de métissage, où le mole traditionnel rencontre le turbot de ligne. Une cuisine colorée, épicée avec une finesse rare, et profondément authentique.`,
  insider_tip: `• **Timing Stratégique** : Le menu déjeuner en 3 étapes à 69€ est une opportunité exceptionnelle de goûter à l'étoile Michelin dans un cadre plus détendu.
  • **Combo Moelle** : Le pigeon au mole Oxte est la pièce maîtresse du chef, une démonstration de force sur la profondeur des sauces mexicaines.
  • **Expérience Culturelle** : Laissez-vous tenter par le dessert à l'avocat et mezcal, un audacieux mélange de textures et de fraîcheur qui surprendra vos certitudes.`,
  expert_catchline: "L'éclat des saveurs mexicaines magnifié par la rigueur de la gastronomie française.",
  specials: {
    cuisine: ["Mexicain gastronomique"],
    drinks: ["Tequilas premium", "Mezcals", "Vins"],
    must_eat: "Cuisine mexicaine étoilée. Le pigeon au mole Oxte ou le ceviche de daurade royale.",
  },
  images: {
    hero: "AU_ZVEGE3vo0_bsN8aOrKD_Ba1bMpVQm_fxkaZclkvoc_SS4h42tZuthb-0PKPkc91VZ3gwaTGIWPMlrs-GfIbfVoiAJDzC32uKu6cgo8x23ajt6fx8T1pn2xzSk4L_GZCMvi4hFWsHfLKCc9_bkS8mpXM9-tixlnW2mpJg9NMWjRt3Ry7sGwzoX44u1ksnF8MYfGlh-2qJ-TEHX7zSF9yxcmMUN8NtEUXYFUadFc0IiNhLEBZ4H5gT3gmUBPRk6Myo7IHdv-z7Fya0Obwu5unz5loFAAP7nbDFTCjYJufF8J-GeAA",
    gallery: ["AU_ZVEHSOZ50LnW3A7R31oHy9ZWmd_as2LHhKMbwFQli9g7OGKWsB2GQ7FE2IyhEapCY-5nY-r5zjGLX3QPFWjPY9dtXPUs4S8y3ORYncRiO6TXKkZu4iMyGFh50Xdbk6-KFWrrPxxz92lF1mCNy0pSS1T5_Vlk5gOYAZ_bxe4bzH7yexR8s5eviR2mUlmUnzmGOCQSldUxn_Q7jdCSwh0dr_t9kNLHhPY7_bUa4XBmZDQhFDvmbQe6WPbeq4OOaHY3Bn5G-I6Ss7t3tg9BcPip3tBoe5o1EBAXSqPoTJevI3jC-bA","AU_ZVEGA-HD8518Vi2ZVa6fkE7IqHvJW6FEW2ceNf3FxiPlUyb_ovc14gCMxEjlHoPnaSl_poC6c4frZtwK7Ttr2QC1IYf6fClDTRGPaY3uLNiIfhuBYmyHz7OpTueR4pBmQCugPs0e8xVt7O1qJ0RE9n85pHo62TXZGhC9T9Py9dzbvr2V_YiOFYbR6Kwc9d_B9l9Hlj-FtlPEvexNe3hz9pgxwYFbb_waR9kL5larPNnzGrz9o4GC-j5SpYJKQfYw4cCDDoQZIeva048kMLEB19JGTQnrAF9LRm8M9Qr3whwC6Vw"]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 1
};

export default oxte;
