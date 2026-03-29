import { SurgicalPlace } from "../../../type-definition";

export const maison_rostang: SurgicalPlace = {
  id: "poi-maison-rostang",
  slug: "maison-rostang",
  name: "Maison Rostang",
  category: "restaurant",
  subcategory: ["Gastronomique", "Double étoilé", "Cuisine française"],
  location: {
    address: "20 Rue Rennequin, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.881428,
    lng: 2.2984965,
    nearest_metro: "Ternes / Pereire",
    metro_lines: [2, 3],
    google_id: "ChIJNVJhNJRv5kcRPUWaSPU5KZg"
  },
  moods: {
    chill: 75,
    festif: 25,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: 12:00 – 15:00, 19:00 – 23:00 | jeudi: 12:00 – 15:00, 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.maisonrostang.com/",
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
          { name: "Topinambour en tatin, châtaigne au whisky et sabayon népita", price_cents: 6200 },
          { name: "Grosses asperges vertes grillées, pistache et oseille", price_cents: 7800 },
          { name: "Quenelle de brochet du lac et crème de homard", price_cents: 6800 },
          { name: "Caviar Persicus, moelleux de pomme de terre Agria", price_cents: 11500 },
          { name: "Foie gras de canard poêlé, fruits du moment", price_cents: 7200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Turbot maturé confit, morilles et jus à la réglisse", price_cents: 8800 },
          { name: "Homard bleu rôti au beurre de café, sabayon vin jaune", price_cents: 11000 },
          { name: "Volaille de Bresse marinée à l'eau de noix", price_cents: 8600 },
          { name: "Canette au sang à la presse (pour 2 personnes)", price_cents: 8800, description: "Prix par personne" },
          { name: "Faux-filet de boeuf Wagyu Grade 5, condiments fumés", price_cents: 9600 },
          { name: "Dos de chevreuil rôti, sauce poivrade", price_cents: 9400 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Cigare croustillant au chocolat et tabac de Havane", price_cents: 3200 },
          { name: "Soufflé chaud au chocolat grand cru", price_cents: 2800 },
          { name: "Tartelette aux agrumes, meringue légère", price_cents: 2400 },
          { name: "Sélection de fromages affinés de nos régions", price_cents: 2800 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de Puligny-Montrachet", price_cents: 2800 },
          { name: "Verre de Château Margaux (Sélection)", price_cents: 4500 },
          { name: "Eau micro-filtrée", price_cents: 700 },
          { name: "Café & chocolats de la manufacture", price_cents: 1000 }
        ]
      }
    ]
  },
  description: `Maison Rostang est l'un des joyaux de la haute gastronomie parisienne, doublement étoilé au Guide Michelin. Sous la houlette du chef Nicolas Beaumann, cette institution du 17ème arrondissement perpétue un héritage de classicisme magnifié par une créativité contemporaine sans faille. Le cadre est feutré, riche de collections d'objets d'art, offrant un théâtre idéal pour des plats de légende comme la canette au sang ou le cigare au chocolat.`,
  insider_tip: `• **Timing Stratégique** : Le menu déjeuner à 105€ est l'une des meilleures façons de découvrir l'excellence Rostang sans l'addition du soir.
  • **Combo Moelle** : La quenelle de brochet à la crème de homard est un monument de légèreté et de gourmandise, une signature historique.
  • **Expérience Culturelle** : Demandez à voir la salle des collections ; la passion de la famille Rostang pour l'art y est palpable et enrichit le voyage.`,
  expert_catchline: "L'apogée du goût français dans un écrin de collectionneur.",
  specials: {
    cuisine: ["Gastronomy Pure", "Classique Moderne"],
    drinks: ["Vins de Collection", "Champagnes de Prestige"],
    must_eat: "Haute gastronomie française. La canette au sang à la presse ou la quenelle de brochet.",
  },
  images: {
    hero: "AU_ZVEHWUOi_kUpVczLcCaaiZhBtyp1_3-I5f_-VVu20ykNrM4HMVnXskgeYZkwiawN_4N-KpUHu9RT46FDqLTl6M1d1QCEEwOvEyzmmbMgjnzuUy43UUwkNHizSzTWYd2tVUwtM-fEnmU6aHZ36_FhSxth1XoZjEQa1gV2_s7Snn3y4zH-5qicINdr6vmIhqkUxwddvpDcVlOTOC27033kPWTwp47oHJ10OoKN2PPpoTgkN8m1mIa9snBsZgk66CxCXma_vblbkr8pdF8yT5gH9vpMRWRdQ6KBRmhk7zd1qf5rSSQ",
    gallery: ["AU_ZVEHWJpbdMmKOtyRyFq2E03oVKhOQ87W9oDCnDJolLAF6vFGbwhPLSkmiMbZ4CM0RiFw2wtGdVIqUgMGgjxtZ9NPKtl_VO4KF-ww2uwLMHMmN8ia6f_LXxWkDlatxV0lUYvSRfM4-xzZFkKfPU_zovoTZqbX23Acy2sxtZvE0QdMwTLgixZ8x-hi2TRm9POqo5ldp7nvJOu96W0tKRQqa_LueXhIWg7g1pG-UqEybo3WKZanQcscSXFymCubUDQuVX1qJRbO_8KET_6revREv1_2JNY3Xmr0ci4Li3qYSXjckqQ","AU_ZVEEJUGnFhvjWneQcqYL6X60_N4yQyh4Mo5FjnoGEe5fZjSC-vhV9WkRtfTTEtdolgii1QcQCU6Imsu1rHM5-I7ZVyjYo7rjghnwLMTyre0xgBd2HK9mZxCdqxfyw4BtqhsWvEQ_x7qETiCdwL8BIxOTl5KMh2OdsaZWTymfpmnoi_LMYxzBCuVOL1-ctXw3BfqE4wUOTC2PoLVKQKZR5qbKgaRVtuT2-sq_QLbh34vDm56yzsUijLlTFPoNVN71YWF5YFYC_PStzVf1RYRH76ccdd8qwZs5Uw62JfqE4cH7dO7oamQ89YLMj8FQ22yd7Kgmqyn-0zI4K3NCCobOdhMkAnLswCtSUY95toMrupAjLe11xSAv5NYTmAKumu6sNHXsQWAIXg2oxYdP2VliL1E_WKoOzgcrYitNctzg0qCRsNYY_xjCGGqYY6H6_rl1u"]
  },
  verified: true,
  google_rating: 4.4,
  michelin_stars: 2
};

export default maison_rostang;
