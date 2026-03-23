import { SurgicalPlace } from "../../../type-definition";

export const bouillon_pigalle: SurgicalPlace = {
  id: "poi-bouillon-pigalle",
  slug: "bouillon-pigalle",
  name: "Bouillon Pigalle",
  category: "restaurant",
  subcategory: ["français", "bouillon", "vibrant", "populaire", "terrasse"],
  location: {
    address: "22 Bd de Clichy, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8826242,
    lng: 2.3374171,
    nearest_metro: "Pigalle",
    metro_lines: [2, 12],
    google_id: "ChIJVb7Sx0Vu5kcR5gDcYjssPWw"
  },
  moods: {
    chill: 5,
    festif: 95,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 00:00 | mardi: 12:00 – 00:00 | mercredi: 12:00 – 00:00 | jeudi: 12:00 – 00:00 | vendredi: 12:00 – 00:00 | samedi: 12:00 – 00:00 | dimanche: 12:00 – 00:00",
    reservation_policy: "resa_conseillee",
    ferme_tard: true,
    terrace: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bouillon-pigalle.com/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 18,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Les Entrées du Bouillon",
        items: [
          { name: "Œufs mayonnaise", price: "2.50€", description: "Le champion de la maison" },
          { name: "Bouillon de volaille, vermicelles", price: "2.90€" },
          { name: "Soupe à l'oignon gratinée", price: "3.90€" },
          { name: "Os à moelle grillé", price: "5.90€", description: "Fleur de sel et toasts" },
          { name: "Escargots de Bourgogne (6)", price: "8.40€" },
          { name: "Terrine de campagne Maison", price: "5.40€" },
          { name: "Poireaux vinaigrette", price: "3.90€" },
          { name: "Céleri rémoulade des familles", price: "2.80€" },
          { name: "Hareng, pommes à l'huile", price: "4.50€" },
          { name: "Foie gras de canard", price: "9.80€" }
        ]
      },
      {
        category: "Les Les Plats",
        items: [
          { name: "Saucisse au jus, purée maison", price: "9.60€", description: "Le best-seller absolu" },
          { name: "Bœuf bourguignon, lard fumé, coquillettes", price: "12.20€" },
          { name: "Steak frites, sauce au poivre", price: "12.60€" },
          { name: "Confit de canard, frites fraîches", price: "12.80€" },
          { name: "Cassoulet au confit de canard", price: "11.90€" },
          { name: "Foie de veau persillade, purée", price: "10.50€" },
          { name: "Blanquette de veau au riz", price: "11.80€" },
          { name: "Petit salé aux lentilles", price: "9.80€" },
          { name: "Lieu noir en papillote", price: "12.00€" },
          { name: "Brandade de morue gratinée", price: "10.50€" }
        ]
      },
      {
        category: "Les À Côtés",
        items: [
          { name: "Frites fraîches", price: "3.00€" },
          { name: "Purée de pommes de terre", price: "3.00€" },
          { name: "Salade verte", price: "2.20€" }
        ]
      },
      {
        category: "Les Desserts de Pigalle",
        items: [
          { name: "Profiterole XXL, glace au lait & chocolat", price: "4.80€" },
          { name: "Riz au lait, caramel beurre salé", price: "2.80€" },
          { name: "Île flottante aux pralines roses", price: "3.20€" },
          { name: "Mousse au chocolat Maison", price: "3.70€" },
          { name: "Crème brûlée à la vanille", price: "3.80€" },
          { name: "Baba au rhum, crème fouettée", price: "4.50€" },
          { name: "Tarte aux pommes Maison", price: "3.50€" }
        ]
      }
    ]
  },
  description: "Le Bouillon Pigalle est devenu en quelques années une institution incontournable du 18e. Avec son décor rouge et blanc éclatant, son service à la volée et sa terrasse chauffée donnant sur le boulevard, il dépoussière le concept du bouillon avec brio. C'est le rendez-vous de toutes les générations pour une cuisine généreuse, rapide et ultra-abordable.",
  insider_tip: "• La queue peut paraître impressionnante sur le boulevard de Clichy, mais elle avance très vite (souvent moins de 10 min) grâce aux 300 places assises.\n• Demander impérativement une table à l'étage pour profiter de la terrasse/balcon, une rareté absolue pour un bouillon parisien.\n• Tu peux désormais réserver en ligne pour les groupes, ce qui évite le stress de l'attente en bande.",
  specials: {
    cuisine: ["Française", "Bouillon", "Populaire"],
    drinks: ["Vin de table en carafe", "Pinte de blonde", "Café"],
    must_eat: "Bouillon populaire. Saucisse Purée & Œuf Mayo",
  },
  images: {
    hero: "ATCDNfWmYJsDWxEUedONSQcQjoM-LFAYufSOZC70wnMetR6anDhvbUas3rDWcO2mMhHrAg85VlBmIxYpFRrdhiv3PnrEXLJlAcBr0iM8-zoDCMgSwibL6ZBo5k9yyjaGMvUMH5xGnr9FRZqNwxfh1At8nx75IA0trg7tJC6VSNoWY6QcjWm_9SLO6TlfoFpcod4NjN6zryCVIBu_lciVY7hcOIYanjPKqtJqO5Bk7wx8_Po9JbteL-3W4Oz5zCNKhMs-9z3HKaneveNcar0R6IC65b3RasmS3wN95Lupycy_3lHI9Q",
    gallery: ["ATCDNfXtj-Z8SQHtwU-1Tfh7FLR2UfuX5tsn9Jg3t9nag2vWj3eN6-G4H6woRDPsPcD4YENA0lp9mV8kz-J1-T3jTUR5qWOkgFvVOmNskM2qG_fwU9dN5wj7GWpSVoCfyCSWJ9EGd9lfpWPXfhVHUqL9XOPN2Y8nPv8F4SpyEhzym-Gpty_lIDpYEfD-r6mquvtNr286Pd6N3gZKAS5nDRXHE-p4K1hvS-0GLucfvdTZo6PVgbPwG6-yLFJxAV33Hxwg6lM5EuYulo1CwPyc3p-1gDBQ9GKXFPbnYipQT7EhlxhAoEmoqWFB7JWLg27_3oz-QeO4iyRBQIx5iop99Ew_rS_oxzaQ01I4gUQ8XsX1-45J_pexEATzNptPFIhWacRNG0alsRHaSecQjQJnOHBf5PNeCeYT_pkXsjCs9EZiR1-g7PbFVZaSz-xt9PBHnhDy","ATCDNfXKh__Qq5tq_IeTkXFglyAas4VZlqcka4y_iFawxsKQ-MY9DOGvrkV2Pm_Ccw-COeB-i_TDhEDbljSKcUy4G2nAYueObHeDK3jD9Yu9zipr9IJ-L3rhF6oqwdzqL64kpGO55VEWrswrfgcySF9PlNgeCHYWNiL19QQdS6tcvhbAZCxtSrsB6xDJvrDoUP452Lz9KLDztmEuBrufTx5QiQpogtNOM9vO71Fi-BDw3FpMIr5Wgn5do_pEQ5QgppsGk5IAGO7WPYJYDPob69L9YTFi7IJJbjYzRgy2kaPVFCW-aADAy2RqHtUGfK_nddU8A3QHDHTo3E5smLUJ-JZih-rniv6wovRBBe_XDAKfJs9C4UlREtrjmyJY-tfj5707fgcSIOYosTPx1Thol5XySTe6JJ-r5LeSciX5EnbkvxqEslAaIJWWoEPnmTMaS1dv"]
  },
  verified: true,
  google_rating: 4.6
};

export default bouillon_pigalle;
