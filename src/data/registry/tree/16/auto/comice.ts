import { SurgicalPlace } from "../../../type-definition";

export const comice: SurgicalPlace = {
  id: "poi-comice",
  slug: "comice",
  name: "Comice",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "31 Av. de Versailles, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8494621,
    lng: 2.2760438,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJAc56Jah65kcRPUvIVLIaIjI"
  },
  moods: {
    chill: 95,
    festif: 0,
    culturel: 85
  },
  practical: {
    opening_hours_raw: "lundi: 18:30 – 22:30 | mardi: 18:30 – 22:30 | mercredi: 18:30 – 22:30 | jeudi: 18:30 – 22:30 | vendredi: 18:30 – 22:30 | samedi: 18:30 – 22:30 | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    wifi: true,
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://comice.paris/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 130,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Les Menus du Soir",
        items: [
          { name: "Menu Comice (5 Services)", price: "150€", description: "La carte blanche de Noam Gedalof", highlight: true },
          { name: "Menu Découverte (4 Services)", price: "120€" }
        ]
      },
      {
        category: "Les Étapes de Saison",
        items: [
          { name: "Gougères au Comté", price: "0€", description: "Le prélude aérien" },
          { name: "Velouté de Topinambour", price: "0€", description: "Café, noisettes et truffe noire" },
          { name: "Hamachi de Ligne", price: "0€", description: "Crudo aux agrumes et huile d'origan", highlight: true },
          { name: "Ris de Veau Doré", price: "0€", description: "Au sautoir, jus de viande perlé" },
          { name: "Canette de Challans", price: "0€", description: "Choux rouge braisé, réduction de cassis" },
          { name: "Lieu Jaune de Saint-Gilles", price: "0€", description: "Émulsion au beurre blanc citronné" }
        ]
      },
      {
        category: "Douceurs & Fromages",
        items: [
          { name: "Sélection de Fromages de Maître", price: "18€" },
          { name: "Soufflé de Comice", price: "0€", description: "Grand Marnier et sorbet orange", highlight: true },
          { name: "Tatin de Poires", price: "0€", description: "Glace à la vanille de Tahiti" },
          { name: "Mignardises Maison", price: "0€" }
        ]
      },
      {
        category: "La Sélection de la Sommelière",
        items: [
          { name: "Accord Mets & Vins (5 verres)", price: "95€", description: "Sélection pointue d'Etheliya Hananova" },
          { name: "Verre de Champagne 'Drappier'", price: "24€" },
          { name: "Bouteille de Châteauneuf-du-Pape", price: "145€" },
          { name: "Eau Minérale (75cl)", price: "8€" },
          { name: "Café Filtre de Spécialité", price: "9€" }
        ]
      }
    ]
  },
  description: `Comice est une pépite étoilée nichée dans le 16ème, née de l'union entre le chef canadien Noam Gedalof et la sommelière Etheliya Hananova. Dans un cadre d'une élégance rare et d'une chaleur humaine exceptionnelle, on y déguste une cuisine française moderne, technique mais lisible, sublimée par une carte des vins monumentale. Une adresse de connaisseurs où le luxe se niche dans la simplicité du geste parfait.`,
  expert_catchline: `L'élégance à la nord-américaine rencontre la haute gastronomie française.`,
  insider_tip: `• **Les Vins** : Faites aveuglément confiance à Etheliya pour les accords, elle déniche des flacons introuvables ailleurs.
  • **Le Soufflé** : C'est le dessert signature, prévoyez de garder une petite place pour ce final vaporeux.
  • **Ambiance** : C'est l'un des rares étoilés de Paris où l'on se sent immédiatement 'à la maison' grâce à un accueil d'une gentillesse rare.`,
  specials: {
    cuisine: ["Gastronomique", "Française Moderne"],
    drinks: ["Vins d'exception", "Vins canadiens rares"],
    must_eat: "Le Soufflé de Comice. Un nuage de gourmandise.",
  },
  images: {
    hero: "AU_ZVEHhLkzOYmLPZwW5p8sA_HPdqCctnOSow7Jq9aqsdkCmWVsuimWKvku1VNN8gYOXFR-ZgZ2SI4BJjyYZ5JNOONN8mr1BJf15L_SSB2Rb24z-P2nAHxWqqVRJCqjMFn7DyP_-SxFJKF-y5Fm78jYbH3xDE8FhjeMdQfmH86QeDpilhFBrKk2-NjDQRqj7IfL1oT5nlIMUn4sZs5wt2w5J5HgSwsEgwYFVFL7RlzxZrdjt9w9nubafoF9G5gVVpW6SkEqcgHBL9T-avi4WkpczqnQR9GvoB9xHmmKw3PPmP3qMMw",
    gallery: ["AU_ZVEE-6G1VOyoDvYrU7655fLEAlHxRvdhnlts7_S7YyeeNRof4Q9YL8O0jAG_0AVM7CtJQx3AfA-XUKKi1EGh5K5C4Zll7oSmAxtqfizFcpCVkK-FwRr9prQcL5kLalwgPinErIAGqeQhLXibKnhmDnQtOx1-U84ejT_euHdJ1X6KomZtU1QuZao1MKfH2rln0q-0VIkJVRue_f6kkqNMebZXKH6Bw3E4vnS7eGzJzFdIv407lJu5A57X9CPCWK4BkNBtKv2AlUgFveGSd9qaaGU7Gx8_Mlghy2o1Y2q6S235AOQ","AU_ZVEGQEEMonlGzoFfaUXDDu_CUD6b3e8xSkRYOot5ufiC4Iz0M6aZRWQ-nU7aU2fv9F9MZmMNU1lTSZZFpVIbmsd5bojSEfq6TuqWG-t7n5A0qDiSoF3gI72qNd0TfeMmaI2PhWsPczSK2BqEmCHs2keIHrSgH2rcvG5LzuLdUNR8X6zFz3eaZbKnzoJwzST9ks2pmXEATXSq4939itZqmnlURKQe_en5aNouEolg6dSfIfz0NSXuD_o3AgXDQxaroyY0ozq2tnB_8R-ZFHe2HtLWFONNxnp89xCuOCnd6QNAUDSX5IadrfBRogqCTwtuaN2fSWW2QpIrRJhaPdlPs5sXPmMKIe4mQxhKTBDoopS9g4e2asOif08d25vijQ7ezxUJL-fPFeOcZPvQywJw441vIQw_Ffv7DXF58kUicAyk85dnCQpQe3n2lZqkepfwB"]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 1,
  real_talk: {
    text: "Manger chez Comice, c'est comme être invité chez des amis qui auraient trois étoiles. Noam et Etheliya ont créé un lieu d'une élégance folle mais sans aucune arrogance. L'assiette est pure, les vins sont dingues. Une adresse de cœur.",
    must_eat: "Le Soufflé",
    le_secret: "La carte des vins possède quelques références canadiennes exceptionnelles, rares à Paris, clin d'œil aux origines du couple.",
    le_son: "Un jazz léger et le rire discret de la salle comble.",
    le_must: "Un dîner d'anniversaire romantique, c'est le spot parfait."
  }
};

export default comice;
