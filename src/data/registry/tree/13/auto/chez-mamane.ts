import { SurgicalPlace } from "../../../type-definition";

export const chez_mamane: SurgicalPlace = {
  id: "poi-chez-mamane",
  slug: "chez-mamane",
  name: "Chez Mamane",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "27 Rue des Cinq Diamants, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8286063,
    lng: 2.3506281,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ7fV4qZFx5kcRUHp9ayb4ZkE"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 16:00 – 02:00 | mardi: 16:00 – 02:00 | mercredi: 16:00 – 02:00 | jeudi: 16:00 – 02:00 | vendredi: 16:00 – 02:00 | samedi: 16:00 – 03:00 | dimanche: 16:00 – 02:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://maps.google.com/?cid=4712726903985633872",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 15.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Traditionnelles (Maghreb)",
        items: [
          { name: "Salade Méchouia Maison", price_cents: 750, is_highlight: true },
          { name: "Soupe Chorba (Algérienne)", price_cents: 850, is_highlight: true },
          { name: "Bourek Viande Hachée (x2)", price_cents: 800 },
          { name: "Bourek Fromage & Persil (x2)", price_cents: 700 },
          { name: "Salade de Pois Chiches au Cumin", price_cents: 650 },
          { name: "Assiette de Kémia (Assortiment)", price_cents: 950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Spécialités de Couscous (Plats)",
        items: [
          { name: "Couscous Royal (Agneau, Poulet, Merguez, Boulettes)", price_cents: 1950, is_highlight: true },
          { name: "Couscous Agneau (Épaule fondante)", price_cents: 1700 },
          { name: "Couscous Poulet Fermier", price_cents: 1500 },
          { name: "Couscous Boulettes (Kéfta maison)", price_cents: 1550 },
          { name: "Couscous Brochettes de Bœuf", price_cents: 1650 },
          { name: "Couscous Merguez (Véritables)", price_cents: 1450 },
          { name: "Couscous Végétarien Gourmand", price_cents: 1300 },
          { name: "Couscous Côtelette de Mouton", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "Mijotés & Tajines (Plats)",
        items: [
          { name: "Tajine Agneau Pruneaux & Amandes", price_cents: 1850, is_highlight: true },
          { name: "Tajine Poulet Citron Confit & Olives", price_cents: 1650 },
          { name: "Tajine Kefta aux Œufs pochets", price_cents: 1550 },
          { name: "Marmite Tunisienne (Épicée)", price_cents: 1700 }
        ]
      },
      {
        category_type: "other",
        display_label: "Extras & Accompagnements",
        items: [
          { name: "Supplément Merguez (la pièce)", price_cents: 250 },
          { name: "Supplément Boulette (la pièce)", price_cents: 300 },
          { name: "Bol de Raisins Secs & Pois Chiches", price_cents: 350 },
          { name: "Semoule Fine Beurre (Supplément)", price_cents: 450 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons d'Orient",
        items: [
          { name: "Pâtisserie Orientale (à la pièce)", price_cents: 350 },
          { name: "Assiette de 3 Pâtisseries", price_cents: 950 },
          { name: "Salade d'Oranges Cannelle & Fleur d'Oranger", price_cents: 650 },
          { name: "Thé à la Menthe Fraîche (Pot)", price_cents: 450, is_highlight: true },
          { name: "Café à la mode de Constantine", price_cents: 300 },
          { name: "Boulaouane Rouge (75cl)", price_cents: 1900 },
          { name: "Guerrouane Gris (Cuvée Excellence)", price_cents: 2100 },
          { name: "Vichy Célestins (Bouteille)", price_cents: 550 }
        ]
      }
    ]
  },
  description: "Chez Mamane est l'âme maghrébine de la Butte-aux-Cailles depuis des décennies. Dans ce petit restaurant aux murs chargés d'histoire et au mobilier dépareillé, on vient chercher la chaleur d'un accueil maternel et le réconfort d'un couscous d'une générosité sans égale. La semoule y est travaillée avec une finesse rare, et le bouillon, parfumé sans être agressif, témoigne d'un savoir-faire familial transmis avec passion. C'est l'un des rares endroits de la Butte où le temps semble s'être arrêté, pour le plus grand bonheur des habitués du quartier qui s'y pressent chaque soir.",
  insider_tip: `• **Le Rite du Royal** : Si vous avez une faim de loup, le Couscous Royal est imbattable. Les viandes sont cuites séparément pour respecter chaque texture, un luxe rare à ce prix.
  • **Le Secret de la Chorba** : Mamane prépare sa Chorba tous les matins. C'est l'entrée parfaite, surtout en hiver, pour réchauffer le corps et l'esprit avant le plat principal.
  • **Ambiance Nocturne** : Le restaurant reste ouvert tard (jusqu'à 2h-3h le week-end). C'est le lieu idéal pour une fin de soirée gourmande et conviviale après un tour dans les bars voisins.`,
  specials: {
    cuisine: ["Algérienne", "Marocaine"],
    drinks: ["Thé à la Menthe", "Boulaouane", "Guerrouane"],
    must_eat: "Cuisine Maghrébine. Couscous Royal & Chorba Maison",
  },
  images: {
    hero: "AU_ZVEELQqZHienWKlFwTGJC9FmToQU9ofhZoDFMZDR2YVYFtU0v8YfBRO_4qC1t9pbx4gEslfxDodhRZP7X4RXVKD3dqqolI7tWf5HjBCQLR49lJaT71qQ0gyVc4dTjxJEOcud66hfszFJJyDQ8oEdpQt7g5eagLtc2SMoY143XAyKcdgVyVOmuT9LDH7itNywYwDT6EMc68Yog5fzMSDK6A3gmc_5z2H9gGM154ApiKaKHVTmqzNZYuBt9S8EXU113HV8O7OeSCUpFc0OFfbqoQgipdCSceuq42CoRz_Hk",
    gallery: ["AU_ZVEEq7EqM4r2MxEu4yM89NfL9YNSlqnPZz-6vbW-gk-l8WZFanUjmSae1GffYgIEC8FiT7CliBywy1V_DjeYK-yANnkGRpo8f8ttmxV9jYJmA680djDmMoS4K7AUUrkoDYA7MuSTlD5DOfT0A0Jddugkyt01FKGLr0znkXZGniC7-hlwbUN_iPg8Xzx7TRbGCyYxV37Y45fsGdHgWcMHDHNpVkvoQ4C9ZlsixTL3A4YkF3r8f1iiyowbXiq9Cbg_2TzZdAm4lMDyssq5trZrWlWcgJ7Ay6-H6zYY1ntlzGS2k6AF4gOF-Jeju7r7R6BIR6eBamWZU7lPbJC9Mx0NoNKpPjPGrh_yyU6cj-RUUAUILhAZoJMwzOvYGMGO46Its2fxtE2n_DfJRU7T0RQH7Pt7qEix363ESQ-QCr_9BBLVhfKA","AU_ZVEH5DbZgqmgcxphX3EQ4VMzg6kYg7XyWJ2c5pG6T6V9sdWS-gf6Omq4iruWUH3hz6AB4kPdg6VwNoG-rI0bH6dZ_uORyvGUM6ObjCJKGdN_rPk1N_0JnxxqEG2kJrCvFQrOCRTcClQWTahfhvLzEOyKBq9K_aX5iWk_3SDmaX0CZrilQd-U1I8CscUgTg09fhfd-KlfB2wfCvJSpe6U75XcflmwMwp2abELNYAnmlQRfxuWFUwaG6gMLAbFonthbCx0FYUle3k0ZN8IzMatJhnrExNXT1yFF-pMvWWPi56slbXa-MkjBFX4aPVpMvydUXHsq8OSH8KwXM9yS4wMUy0ktkYB6mBmryJ4l81EN4OEFYxoNhtqvWHKbr0j_gl2kt-XbGDWNkyu8YVn-0LHOqCt0Zg_Q1N39nBRJWtXjvkMPFBxNzAbS25bWBB0R3CgS"]
  },
  verified: false,
  google_rating: 4.6
};

export default chez_mamane;
