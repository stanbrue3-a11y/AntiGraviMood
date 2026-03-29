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
        category_type: "main",
        display_label: "Les Menus Dégustation (Plats)",
        items: [
          { name: "Menu Comice (5 Services)", price_cents: 15000, description: "Le parcours signature du chef Noam Gedalof", is_highlight: true },
          { name: "Menu Découverte (4 Services)", price_cents: 12000, description: "Une introduction élégante aux saveurs de saison" }
        ]
      },
      {
        category_type: "starter",
        display_label: "L'Expérience à la Carte (Entrées)",
        items: [
          { name: "Hamachi de Ligne Mariné", price_cents: 3200, description: "Agrumes, huile d'origan et radis d'hiver", is_highlight: true },
          { name: "Velouté de Topinambour", price_cents: 2400, description: "Truffe noire fraîche et noisettes éclatées" },
          { name: "Gougères au Comté (x6)", price_cents: 1400, description: "Les fameuses bouchées d'accueil" },
          { name: "Asperges Blanches de Landes", price_cents: 2800, description: "Vinaigrette aux agrumes (en saison)" },
          { name: "Salade de Homard Breton", price_cents: 4500 },
          { name: "Foie Gras Poêlé", price_cents: 3400, description: "Coings fondants et réduction de cidre" }
        ]
      },
      {
        category_type: "main",
        display_label: "L'Expérience à la Carte (Plats)",
        items: [
          { name: "Canette de Challans Rôtie", price_cents: 4800, description: "Chou rouge braisé, réduction de cassis et épices", is_highlight: true },
          { name: "Ris de Veau Doré au Sautoir", price_cents: 5200, description: "Jus de viande infusé aux herbes" },
          { name: "Lieu Jaune de Saint-Gilles-Croix-de-Vie", price_cents: 4200, description: "Beurre blanc citronné et poireaux fondants" },
          { name: "Tourte de Gibier de Chasse", price_cents: 4600, description: "Recette traditionnelle (saisonnière)" },
          { name: "Turbot de Petit Bateau", price_cents: 5800, description: "Purée de chou-fleur et câpres séchées" },
          { name: "Filet de Chevreuil", price_cents: 5000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Sélection de Maître (Desserts)",
        items: [
          { name: "Soufflé au Grand Marnier", price_cents: 2200, description: "Le dessert signature, servi avec sorbet orange", is_highlight: true },
          { name: "Tatin de Poires Caramélisées", price_cents: 1800, description: "Glace à la vanille de Tahiti" },
          { name: "Mousse au Chocolat Guanaja 70%", price_cents: 1600 },
          { name: "Texture de Fraises des Bois", price_cents: 2100 },
          { name: "Plateau de Fromages de Maître", price_cents: 2400, description: "Sélection affinée d'Etheliya" }
        ]
      },
      {
        category_type: "drink",
        display_label: "Le Cellier d'Etheliya (Cave & Boissons)",
        items: [
          { name: "Accord Mets & Vins (5 services)", price_cents: 9500, description: "Une curation pointue et narrative", is_highlight: true },
          { name: "Coupe de Champagne Drappier", price_cents: 2400 },
          { name: "Cocktail Signature 'Versailles'", price_cents: 1800, description: "Gin, liqueur de fleur, tonic artisanal" },
          { name: "Bouteille de Châteauneuf-du-Pape", price_cents: 14500 },
          { name: "Riesling Canadien (Rare)", price_cents: 8500 },
          { name: "Verre de Bourgogne Rouge", price_cents: 1900 },
          { name: "Verre de Sancerre", price_cents: 1700 },
          { name: "Eau Minérale Abatilles (75cl)", price_cents: 800 },
          { name: "Café de Spécialité Filtre", price_cents: 900 },
          { name: "Infusion de Herbes Fraîches", price_cents: 1000 }
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
