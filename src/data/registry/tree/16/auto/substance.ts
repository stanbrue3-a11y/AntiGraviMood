import { SurgicalPlace } from "../../../type-definition";

export const substance: SurgicalPlace = {
  id: "poi-substance",
  slug: "substance",
  name: "Substance",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "18 Rue de Chaillot, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8672869,
    lng: 2.2976604,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ1-NReNxv5kcR3yM08L3wXCA"
  },
  moods: {
    chill: 50,
    festif: 60,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 13:30, 19:00 – 21:00 | mardi: 12:00 – 13:30, 19:00 – 21:00 | mercredi: 12:00 – 13:30, 19:00 – 21:00 | jeudi: 12:00 – 13:30, 19:00 – 21:00 | vendredi: 12:00 – 13:30, 19:00 – 21:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: false,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.substance.paris/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 160,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Menus Dégustation",
        items: [
          { name: "Menu Substance (9 services)", price: "188€", description: "L'expérience gastronomique ultime du soir" },
          { name: "Menu Vibration (7 services)", price: "158€" },
          { name: "Menu Instant Végétal (6 services)", price: "138€" },
          { name: "Menu Essentiel (Midi)", price: "98€" },
          { name: "Menu du Marché (Midi, 3 services)", price: "68€" }
        ]
      },
      {
        category: "Les Incontournables",
        items: [
          { name: "Gnocchi de Salsifis", price: "45€", description: "Beurre noisette et café, une signature Matthias Marc", highlight: true },
          { name: "Poisson de Ligne & Jura", price: "52€", description: "Sauce au Vin Jaune, morilles fraîches" },
          { name: "Le Bœuf de nos Terroirs", price: "55€", description: "Maturation longue, jus corsé à l'ail noir" },
          { name: "Pigeon de chez Mear", price: "58€", description: "Cuisiné sur le coffre, betterave et cassis" },
          { name: "Lieu Jaune de petits bateaux", price: "48€", description: "Émulsion de sapin, poireaux brûlés" },
          { name: "Tartare de Veau & Huître", price: "38€", description: "Iode et terre, condiment citron" }
        ]
      },
      {
        category: "Fromages & Desserts",
        items: [
          { name: "Comté Vieilli (Jura)", price: "22€", description: "Servi avec une pointe de miel de sapin" },
          { name: "Le Chocolat & Topinambour", price: "24€", description: "Une association audacieuse et terreuse" },
          { name: "Agrumes de Saison", price: "20€", description: "Sorbet herbes fraîches, meringue italienne" },
          { name: "Baba au Rhum revisité", price: "22€", description: "Chantilly vanille Bourbon" }
        ]
      },
      {
        category: "La Cave (Spécialité Jura)",
        items: [
          { name: "Verre de Vin Jaune (Domaine Rolet)", price: "24€" },
          { name: "Verre de Savagnin", price: "18€" },
          { name: "Accord Mets & Vins (7 étapes)", price: "110€" },
          { name: "Expresso Torréfaction Artisanale", price: "7€" }
        ]
      }
    ]
  },
  description: `Porté par l'énergie du chef Matthias Marc (originaire du Jura), Substance est une table vibrante qui bouscule les codes du 16e arrondissement. Entre cuisine d'auteur ultra-créative et hommages appuyés aux racines francomtoises (vin jaune, sapin, fumé), l'expérience est rythmée, moderne et décomplexée. La cuisine ouverte permet d'admirer le ballet millimétré de la brigade.`,
  expert_catchline: `La gastronomie haute tension aux accents du Jura.`,
  insider_tip: `• **L'ADN Jurassien** : Ne passez pas à côté des vins du Jura, Substance possède l'une des plus belles sélections de Paris, parfaite pour accompagner le Vin Jaune.
  • **Le Menu du Marché** : À 68€ le midi, c'est l'un des meilleurs rapports qualité-prix pour un étoilé dans ce quartier.
  • **Vibrations** : L'ambiance est plus dynamique et sonore qu'un étoilé classique, idéal pour un dîner 'foodie' entre amis ou un business lunch moderne.`,
  specials: {
    cuisine: ["Français", "Moderne"],
    drinks: ["Vin", "Cocktail"],
    must_eat: "Les Gnocchis de Salsifis au café. Le plat qui a fait la réputation du chef.",
  },
  images: {
    hero: "AU_ZVEEGo_d8tzUU_HfURm9t3flWIR92hw-KvozfWGdR9VJSoevVRgnOqxiB2MLZGNSEN7Kme5JMfmEn8m85ZNu2Hm7iX-ApNXQcgEG28WVIuWIb2Asz9Dp_8YYX8Wc81pcDawwKsnNa2YJK9WNHYmyhiA77mAkwZSD8W21HXQ6CApXnGQP74seD6rPQbigYIxgfi5sqOS4QfJOsB1ZeyWaAf9M-jLv3MC2g5-mInAcuKQuwTSsKoraoRoFEXA_maQH6yFVjHka2HW2xeCpcGrGP5xiOyJuhktQjqy6wOFSZv8dmlA",
    gallery: ["AU_ZVEHOj-sFwk_l3_RnlLPjep8zmXXmqvdHYloeLEzfn-tO-h3vf-3QMgExuOO43xB26tBy76yUZ3mY2aozG75ByAWM_kdhyMGflG6bCwMloDaaT5yfX3NtasnILTfRAnu97jQMma1rhmigo_4ezXAAXYNhh05zgeKk3FEA_U02GGc2Z-8w8y0oAh6wb5_8ezxA4MXM-zWGf96spiCBOYdS_glurHhvST8A4N7AVNzd_-EtY5XCKe9iSef1lRwSo1dBKUsyT77EHXvYnAsZtMEKJkwOfc-JvAfx1u2hpHyiPjmCkA","AU_ZVEEwiEqf174OYDkvMXjZCzqLY9qdk_UH-aUCDYh5DSX3hhS2tX76r4KhgU6Irymth7EyCOePOxJ9PjjaTwkkUIA3-WplW0PTSbd9xSiC2cDrW7dfNkZuQzOf8vDiCg0VA0X_1jPPLEJq4747UDhtnRw8u6lHE7LEY6MLWE-GG4RZbmJhz0ZXZIPynAYnAl7ged8mWwJsbLbOqN3iNrwLbv0rpyP9SNXiqkGHWj5xl8EhmLtB1NYgAvMmWllVgV0JChG3Ei-RXIO4gCL8q5YV1FMRPqXofkoWeSYaKJwPNWlWlicdIvtgWt64T3fHNnD4m_mXjZmjpFFV64ERkEdZh_UXNoZWKxNAFSQT0x3HwisBoIXrdNxzGKb0GJCPy3zvBzoupnAurdTxJm_9oB-BMdw9Arn37zzvLG6dQNEhNm-sgjGlwQ5Hng4BKslgmbMY"]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 1,
  real_talk: {
    text: "Substance, c'est de l'émotion pure. Ça va vite, c'est précis, et les saveurs sont franches. Matthias Marc (et maintenant Flavio Lucarini) réussit à rendre la haute gastronomie accessible et ultra-fun.",
    must_eat: "Gnocchi de Salsifis au Café",
    le_secret: "La sélection de vins au verre est pointue, n'hésitez pas à demander un accord atypique.",
    le_son: "Le bruit joyeux d'une cuisine ouverte en plein rush.",
    le_must: "Pour ceux qui aiment voir le travail des chefs et qui cherchent une table qui 'bouge' dans le 16e."
  }
};

export default substance;
