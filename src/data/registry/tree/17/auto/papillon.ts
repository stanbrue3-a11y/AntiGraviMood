import { SurgicalPlace } from "../../../type-definition";

export const papillon: SurgicalPlace = {
  id: "poi-papillon",
  slug: "papillon",
  name: "Papillon",
  category: "restaurant",
  subcategory: ["Gastronomique", "Cuisine française", "Bistronomie chic"],
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
    wifi: false,
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
        category: "Pour Commencer / À Partager",
        items: [
          { name: "Caviars d'aubergine, sésame et miso", price: "16€" },
          { name: "Radis beurrés et pain au levain", price: "12€" },
          { name: "Velouté de châtaignes, mousse de lard", price: "18€" },
          { name: "Pâté en croûte du moment", price: "21€" },
          { name: "Huîtres n°3 en gelée de mer", price: "24€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Canard sauvage rôtie aux olives de Lucques", price: "38€" },
          { name: "Bar de ligne, fenouil et beurre blanc", price: "36€" },
          { name: "Paupiette de chou aux légumes d'hiver", price: "28€" },
          { name: "quasi de veau, carottes fanes glacées", price: "35€" },
          { name: "Pigeonneau de Vendée en crapaudine", price: "42€" }
        ]
      },
      {
        category: "Douceurs",
        items: [
          { name: "Le soufflé au Grand Marnier", price: "15€" },
          { name: "Chocolat grand cru, tuile croustillante", price: "14€" },
          { name: "Poire pochée au poivre de Timut", price: "12€" },
          { name: "Assiette de fromages du 17e", price: "16€" },
          { name: "Baba au rhum ambré", price: "14€" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Coupe de Champagne", price: "16€" },
          { name: "Verre de Meursault", price: "18€" },
          { name: "Cocktail signature (le Butterfly)", price: "15€" },
          { name: "Infusion d'herbes fraîches", price: "7€" },
          { name: "Vittel (50cl)", price: "6€" }
        ]
      }
    ]
  },
  description: `Papillon est l'écrin de Christophe Saintagne, ancien chef de file de l'écurie Ducasse. Ici, la gastronomie se dépouille de ses artifices pour revenir à l'essentiel : le goût juste et le produit magnifié. Le cadre minimaliste et élégant du quartier Wagram sert de théâtre à une partition culinaire d'une précision chirurgicale.`,
  insider_tip: `• **Timing Stratégique** : Idéal pour un déjeuner d'affaires calme ou un dînner intimiste de haut vol.
  • **Combo Moelle** : Le pâté en croûte est une œuvre d'art, souvent imité mais jamais égalé ici.
  • **Expérience Culturelle** : Christophe Saintagne redéfinit la simplicité luxe ; observez le dressage, c'est une leçon d'esthétisme.`,
  expert_catchline: "La haute couture culinaire sans le superflu.",
  specials: {
    cuisine: ["Gastronomie pure"],
    drinks: ["Grands crus", "Champagnes"],
    must_eat: "Cuisine gastronomique. Le canard sauvage au sang et olives de Lucques.",
  },
  images: {
    hero: "AU_ZVEHuB4UbSO9f0Wi0rxTUd0WyfrRYMeVTHsoUFb42IyEJRkjc8H5E0lu_-rc2K7K18FwGTrY7fRvbmrJS8edsxIrvbxEJIFc24RbfcXON9jQHH7p8Yuof8SIK9m9mlDnLNwvMGkUS3Vs7x1SxJvXh8CGNJeIujbEzlJLSS-X21Noz6t11M-VEAVzH6nlyw5yb-ytPuTblISKJ1WtWEOdTzGfAkPwDGbRI5DpYZ9iG1xiK4NB6-A0Ktnag6vpzAsNSCiYH_LPNWzlj1iudWFUpjA3LgJi0rVYpO1I3XB40dtYWZM8DX6iJGNQ5giUOAAOYYbQ714uqQzH2qaZL0QhGFRCjcV0gz4TRSzrW50o-GnS-SHSd7dtdrmvjyim0abyxJOalLgHazckBkvi9vw8pTVLZtBEqd1d78nJA1EYFQ91FMQ",
    gallery: ["AU_ZVEFoV877grvoSH63TcoKJos4i0GBZNdXv0KfCTWY4ZtslkByqzphH5DX8KAW3PslJwcYK3rjf9W90kJh4GTU1lMp6laCpvZnS-6gEdD0duLVnaH-8960hrxSt03J0XifwQjsJ7AlAfEMm6JawWetq73_LNxdmclKTazMO5uDRzn2yhbWbZlfeJBvPycAE0joumi7Sic2_quqUuqO9vfPU8jEMMFhUH679iZ5beqdA_hKdGYXT00kLhWixRmrMK4zI6G5hQjZElMaI_YnZUR-YfNbZMFURS70-8FMBscJzJY8u-vJvkZX99qZ46mH9TpCfKPvTM3K3ergKTVS-MaDvjq6MZwE_al0DpFOmOjTkfknz-RRTYxKkCS7W_wVGfbkym3yNU9uw7-IYGCwXvA8uZTFU2AVOVZD_ogbpGM_R3Q","AU_ZVEFGKWQLyK2kIZNpVkWNfPCN41n4a-AQPAROH01qoo54D3qH2qwUPmRw1eh0ekJePE3-IZWE1MiUGPZ0VswTCKRv2stIeECFifCfjlhbq4QY16I3Iskk_75hwi4PrnxlYeylF_oSPKgxIyICeFuqAADVl3L2liPuDY3Vy2I3sZvZDtfhcgYvh45dC-uTy4RmKeOnEWQN7SL6vw4g3D-UD8KmVSD5eNcWztu8QIPcvQ6idNT-r3bVjWzpJFvaRTft9Ya-i8ObF3snCWHS_7cAUESAdpM23b0qKHG1Nu3-MZSX_JL1fFPlCWnLOqZ4Q2AWr1X-z8jz_rTKNWw1vuAb26Eolw3b0Pwv9hfvv64S-Eo0vrWvTLH0rnB8G-TFACJICRNw-QSHKtjZpX5Z0vZTnPsySDIemJ5FBhvJTt-cSi1zM1Sj"]
  },
  verified: true,
  google_rating: 4.4
};

export default papillon;
