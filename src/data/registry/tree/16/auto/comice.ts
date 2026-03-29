import { SurgicalPlace } from "../../../type-definition";

export const comice: SurgicalPlace = {
  id: "poi-comice",
  slug: "comice",
  name: "Comice",
  category: "restaurant",
  subcategory: ["gastronomique", "étoilé", "contemporain", "versailles"],
  location: {
    address: "31 Av. de Versailles, 75016 Paris",
    arrondissement: 16,
    lat: 48.8494621,
    lng: 2.2760438,
    nearest_metro: "Mirabeau / Église d'Auteuil",
    metro_lines: [10],
    google_id: "ChIJAc56Jah65kcRPUvIVLIaIjI"
  },
  moods: {
    chill: 95,
    festif: 5,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "Mar-Sam: 18h30-22h30 | Dim, Lun: Fermé",
    reservation_policy: "resa_obligatoire",
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
    last_updated: "2026-03-28",
    verified_at: "2026-03-28",
    menu_items: [
      {
        category: "Les Menus Dégustation (Plats)",
        items: [
          { name: "Menu Comice (5 Services)", price: "150€", description: "Le parcours signature du chef Noam Gedalof", highlight: true },
          { name: "Menu Découverte (4 Services)", price: "120€", description: "Une introduction élégante aux saveurs de saison" }
        ]
      },
      {
        category: "L'Expérience à la Carte (Entrées)",
        items: [
          { name: "Hamachi de Ligne Mariné", price: "32€", description: "Agrumes, huile d'origan et radis d'hiver", highlight: true },
          { name: "Velouté de Topinambour", price: "24€", description: "Truffe noire fraîche et noisettes éclatées" },
          { name: "Gougères au Comté (x6)", price: "14€", description: "Les fameuses bouchées d'accueil" },
          { name: "Asperges Blanches de Landes", price: "28€", description: "Vinaigrette aux agrumes (en saison)" },
          { name: "Salade de Homard Breton", price: "45€" },
          { name: "Foie Gras Poêlé", price: "34€", description: "Coings fondants et réduction de cidre" }
        ]
      },
      {
        category: "L'Expérience à la Carte (Plats)",
        items: [
          { name: "Canette de Challans Rôtie", price: "48€", description: "Chou rouge braisé, réduction de cassis et épices", highlight: true },
          { name: "Ris de Veau Doré au Sautoir", price: "52€", description: "Jus de viande infusé aux herbes" },
          { name: "Lieu Jaune de Saint-Gilles-Croix-de-Vie", price: "42€", description: "Beurre blanc citronné et poireaux fondants" },
          { name: "Tourte de Gibier de Chasse", price: "46€", description: "Recette traditionnelle (saisonnière)" },
          { name: "Turbot de Petit Bateau", price: "58€", description: "Purée de chou-fleur et câpres séchées" },
          { name: "Filet de Chevreuil", price: "50€" }
        ]
      },
      {
        category: "Sélection de Maître (Desserts)",
        items: [
          { name: "Soufflé au Grand Marnier", price: "22€", description: "Le dessert signature, servi avec sorbet orange", highlight: true },
          { name: "Tatin de Poires Caramélisées", price: "18€", description: "Glace à la vanille de Tahiti" },
          { name: "Mousse au Chocolat Guanaja 70%", price: "16€" },
          { name: "Texture de Fraises des Bois", price: "21€" },
          { name: "Plateau de Fromages de Maître", price: "24€", description: "Sélection affinée d'Etheliya" }
        ]
      },
      {
        category: "Le Cellier d'Etheliya (Cave & Boissons)",
        items: [
          { name: "Accord Mets & Vins (5 services)", price: "95€", description: "Une curation pointue et narrative", highlight: true },
          { name: "Coupe de Champagne Drappier", price: "24€" },
          { name: "Cocktail Signature 'Versailles'", price: "18€", description: "Gin, liqueur de fleur, tonic artisanal" },
          { name: "Bouteille de Châteauneuf-du-Pape", price: "145€" },
          { name: "Riesling Canadien (Rare)", price: "85€" },
          { name: "Verre de Bourgogne Rouge", price: "19€" },
          { name: "Verre de Sancerre", price: "17€" },
          { name: "Eau Minérale Abatilles (75cl)", price: "8€" },
          { name: "Café de Spécialité Filtre", price: "9€" },
          { name: "Infusion de Herbes Fraîches", price: "10€" }
        ]
      }
    ]
  },
  description: `Comice est bien plus qu'une table étoilée ; c'est le projet de vie du chef canadien Noam Gedalof et de son épouse, la sommelière Etheliya Hananova. Dans un décor d'une élégance épurée et d'un calme olympien, le couple a réussi le pari de marier la haute gastronomie française à une chaleur d'accueil nord-américaine. La cuisine est technique, précise, mais toujours lisible, tandis que la carte des vins est l'un des trésors cachés les mieux gardés du 16ème arrondissement. Une parenthèse de pureté et d'exception.`,
  expert_catchline: `La rencontre gracieuse entre technique française et hospitalité canadienne.`,
  insider_tip: `• **Le Soufflé** : C'est le final incontournable. Pensez à le mentionner dès la commande pour garantir sa préparation parfaite.
  • **Les Vins** : Laissez Etheliya hanter votre verre. Sa sélection de vins canadiens et de petites pépites françaises est unique à Paris.
  • **L'Accueil** : Profitez de la courtoisie exceptionnelle du service, qui détonne admirablement avec la raideur parfois habituelle des étoilés parisiens.`,
  specials: {
    cuisine: ["Gastronomique Moderne", "Étoilée"],
    drinks: ["Vins Canadiens Rares", "Grands Crus"],
    must_eat: "Cuisine Étoilée. Le Soufflé au Grand Marnier & Ris de Veau.",
    must_drink: "Riesling Canadien"
  },
  images: {
    hero: "https://lh5.googleusercontent.com/p/AF1QipNhLkzOYmLPZwW5p8sA_HPdqCctnOSow7Jq9aqsdk=w1600-h1000-k-no",
    gallery: [
      "https://lh5.googleusercontent.com/p/AF1QipE-6G1VOyoDvYrU7655fLEAlHxRvdhnlts7_S7Yy=w800-h800-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipGQEEMonlGzoFfaUXDDu_CUD6b3e8xSkRYOot5ufi=w800-h800-k-no"
    ]
  },
  verified: true,
  google_rating: 4.5,
  michelin_stars: 1,
  instagram_handle: "comice.paris",
  real_talk: {
    text: "Un moment de grâce absolue. Noam cuisine avec son cœur et Etheliya raconte les vins comme personne. On en ressort avec le sentiment rare d'avoir été privilégié.",
    must_eat: "Cuisine Étoilée. Le Soufflé.",
    le_secret: "La table près de la fenêtre donne une lumière magnifique en début de soirée, idéal pour un moment romantique.",
    le_son: "Un jazz feutré très élégant et le calme feutré d'un salon privé.",
    le_must: "L'accord mets et vins qui est l'un des plus justes et surprenants de la capitale."
  }
};

export default comice;
