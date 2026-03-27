import { SurgicalPlace } from "../../../type-definition";

export const mallory_gabsi: SurgicalPlace = {
  id: "poi-mallory-gabsi",
  slug: "mallory-gabsi",
  name: "Mallory Gabsi",
  category: "restaurant",
  subcategory: ["Gastronomique", "Michelin-starred", "Moderne", "Créatif"],
  location: {
    address: "28 Rue des Acacias, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.876754,
    lng: 2.291518,
    nearest_metro: "Argentine / Ternes",
    metro_lines: [1, 2],
    google_id: "ChIJM4_nbTpv5kcRFJubN2v3Cpw"
  },
  moods: {
    chill: 40,
    festif: 60,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 12:30 – 13:15, 19:30 – 21:15 | mardi: 12:30 – 13:15, 19:30 – 21:15 | mercredi: 12:30 – 13:15, 19:30 – 21:15 | jeudi: 12:30 – 13:15, 19:30 – 21:15 | vendredi: 12:30 – 13:15, 19:30 – 21:15 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://mallory-gabsi.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Formules & Menus",
        items: [
          { name: "Menu Déjeuner (3 séquences) - Lundi au Vendredi", price: "75€" },
          { name: "Menu Les Sens (4 séquences)", price: "150€" },
          { name: "Menu Turquoise (7 séquences)", price: "195€" },
          { name: "Accord Mets & Boissons (Les Sens)", price: "85€" },
          { name: "Accord Mets & Boissons (Turquoise)", price: "110€" },
          { name: "Accord Non-Alcoolique Premium (4 verres)", price: "55€" },
          { name: "Accord Non-Alcoolique Premium (7 verres)", price: "85€" }
        ]
      },
      {
        category: "Les Entrées",
        items: [
          { name: "Turbot / Herbes / Caviar au sel de Guérande", price: "36€" },
          { name: "Laitue Romaine / Coquillages et émulsion iodée", price: "35€" },
          { name: "Asperges / Œufs / Haddock et condiments", price: "34€" },
          { name: "Carpaccio de Langoustine au citron vert", price: "40€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Rouget de Roche grillé au foin, jus d'arêtes", price: "60€" },
          { name: "Canard / Betteraves / Haricot Noir et épices", price: "70€" },
          { name: "Saint-Jacques à la truffe noire d'hiver", price: "55€" },
          { name: "Pigeon de Vendée, laqué au miel de fleurs", price: "65€" },
          { name: "Filet de Bœuf Wagyu grillé, jus corsé", price: "85€" }
        ]
      },
      {
        category: "Les Desserts",
        items: [
          { name: "Rhubarbe / Création Sucrée et sorbet herbes", price: "24€" },
          { name: "Artichaut / Dessert Signature à la vanille", price: "27€" },
          { name: "Tabac : infusion de cigare, chocolat fumé", price: "29€" },
          { name: "Mignardises de la Maison Gabsi", price: "10€" }
        ]
      }
    ]
  },
  description: `Mallory Gabsi propose une expérience gastronomique instinctive et poétique au cœur du 17e. Récipiendaire d'une étoile Michelin à seulement 26 ans, le jeune prodige belge déploie une cuisine spectaculaire où le terroir français rencontre des influences contemporaines audacieuses. Le cadre, intimiste et tamisé, sert de théâtre à des assiettes graphiques aux saveurs tranchées.`,
  insider_tip: `• **Plat Signature** : La langoustine au foin, une claque olfactive et gustative qui a fait la renommée du chef.
  • **Timing** : Le menu déjeuner à 75€ est l'une des meilleures portes d'entrée au monde de la haute gastronomie étoilée à Paris.
  • **Vibe** : C'est le lieu idéal pour une célébration intime ; le service est d'une précision chirurgicale sans être guindé.`,
  expert_catchline: "L'étoffe d'un futur géant : Mallory Gabsi réinvente les codes de la gastronomie parisienne.",
  specials: {
    cuisine: ["Gastronomique"],
    drinks: ["Accords Mets & Vins", "Sins Alcool Premium"],
    must_eat: "Cuisine gastronomique. La langoustine au foin ou le turbot au caviar.",
  },
  images: {
    hero: "AU_ZVEEGY-8f7ZWHhT1sBROyNctVETkY08nmyT3fCPSyYjrz4W7mXVaQht2SN6VkhhFF6nTq57EVlMPt_vdtkN4kHX7RPZWF2N-k6n0N0SRMryMesYDUe1IJhgmek_y6oCSYMQLDH3uIB1RKg9V_ZwdlIL6DJqjVMyrDqbvHePvqbDegwT-fJu9wjqdkkeGnwfUbRZQjbJKD6gjsORlqpTfoccuGNgTpCyytV5lTsaSXH86gXiDX_CLni1keY99Hy68gH6KuQprKQ1_Q-En6REO2Hrd5iMwKQakwb53QTGM3WD04SQ",
    gallery: ["AU_ZVEHG-x2d078nvJlAq75qDhxml19PEXdPSeVmkiKD6yu8whidE36XTVSMAs7Im591zWzniW7SlhEI0wS5kVQllChXqv-s8h-Mf7Ta92esas0E279YI6kUR-kuqke1mPVDB2wUHXsZm4oNlWXAcr8NMe2GK7USrmAyx5Q-A8kzSCjoX1rVHwv7c7APSq_sqope0fLIUKGtHmYR2RhpJaZjd0rahkGt8M2TY3USNEcz5Vg6o3BpmomFO6TMGHWP8GFVziE0OHyC0EKxFbcUgJ46Sh4jFWSGm1Jq8jmRIy56t-acfRcinkeCPoTDM8LpVSyUTzp-RkfVbglAMnVpf_mF5OdWVFe8KMZNbelKwnVfCxeonoSERTM1ui7adidgXyyjONuKBRh-NvOe3uN9rnmi1Fcy2RvtLNo79e73WGHw7n80hRjzYLZ1328e_eLjBA","AU_ZVEG2M_QiVldsaBcEQ9aTW2GoXKGiGzVtRGVeHk-OVgjvYEYl8eHU2ipO4KCvG3_ArPemc8RS0HWxItxN78YUld2pOtSX6dbAy_zVoczIbbB_PqiKwK9oOJzG0TkEu5HSQDAZYCxBuJY7FAnnHOYHkmyodt1E9FYGmqPR9B0b-qkD2EquwXtfBfATBwzKJHX-TlJPWw-9-CE3OHOUXPR1VcU1qL7jiz7aP52oGfMs6ZWddoE6i0f7blkA2IqihTlXt4CI_zYr0xwlt8ZXtV1TuUemRvtTaxdxU9OZs9MbFivEWg"]
  },
  verified: true,
  google_rating: 4.8,
  michelin_stars: 1
};

export default mallory_gabsi;
