import { SurgicalPlace } from "../../../type-definition";

export const corail_restaurant: SurgicalPlace = {
  id: "poi-corail-restaurant-16",
  name: "Corail Restaurant",
  slug: "corail-restaurant",
  category: "restaurant",
  subcategory: ["seafood", "élégant", "palais-de-tokyo"],
  location: {
    address: "11 Av. du Président Wilson, 75116 Paris",
    arrondissement: 16,
    lat: 48.8645015,
    lng: 2.2971085,
    nearest_metro: "Iéna",
    metro_lines: [9],
    google_id: "ChIJDRF7MPJv5kcRAU7WwN5UruE"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "Mar-Dim: 12h-15h, 19h-01h | Lun: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://corail-restaurant-paris.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 65,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "L'Éveil des Sens (Entrées)",
        items: [
          { name: "Carpaccio de Saint-Jacques", price: "22€", description: "Huile de corail, zeste de citron vert", highlight: true },
          { name: "Velouté de Crustacés", price: "18€", description: "Mousse d'estragon et croutons à l'ail" },
          { name: "Tartare de Thon Albacore", price: "21€", description: "Gingembre frais et avocat crémeux" },
          { name: "Salade de Homard Bleu", price: "28€", description: "Pamplemousse et jeunes pousses" },
          { name: "Friture de Petits Poissons", price: "16€", description: "Inspiration méditerranéenne, sauce tartare" },
          { name: "Huitres Gillardeau N°3 (x6)", price: "24€", description: "Servies avec vinaigre d'échalote" },
          { name: "Asperges Vertes & Bottarga", price: "19€", description: "Poutargue râpée et œuf parfait" }
        ]
      },
      {
        category: "Les Trésors de l'Océan (Plats)",
        items: [
          { name: "Filet de Bar de Ligne", price: "34€", description: "Émulsion de beurre blanc au yuzu", highlight: true },
          { name: "Sole Meunière Entière", price: "48€", description: "Saisie au beurre noisette, purée au sel de mer" },
          { name: "Risotto Noir aux Seiches", price: "26€", description: "Encre de seiche et petits pois frais" },
          { name: "Poulpe de Roche Grillé", price: "32€", description: "Légumes racines confits, sauce vierge" },
          { name: "Lieu Jaune en Croûte d'Herbes", price: "29€", description: "Fondue de poireaux safranée" },
          { name: "Homard Entier à la Plancha", price: "65€", description: "Beurre de corail épicé" },
          { name: "Noix de Saint-Jacques Poêlées", price: "36€", description: "Crème de chou-fleur et noisettes torréfiées" },
          { name: "Turbot de Mer de Sable", price: "52€", description: "Jus de coquillages et mini navets" }
        ]
      },
      {
        category: "Terre & Végétal",
        items: [
          { name: "Faux-Filet Dry Aged", price: "42€", description: "Bœuf normand, frites de patate douce" },
          { name: "Suprême de Volaille Jaune", price: "28€", description: "Gnocchis à la sauge et jus de viande" },
          { name: "Gnocchis Potager", price: "24€", description: "Légumes de saison sautés, parmesan 24 mois" }
        ]
      },
      {
        category: "Douceurs Marines (Desserts)",
        items: [
          { name: "Soufflé au Grand Marnier", price: "14€", description: "Aérien, servi dès la sortie du four", highlight: true },
          { name: "Millefeuille Vanille Bourbon", price: "12€", description: "Crème légère et caramel salé" },
          { name: "Tarte Citron Déstructurée", price: "11€", description: "Meringue italienne et basilic" },
          { name: "Sorbet Citron Vert & Vodka", price: "10€" },
          { name: "Assiette de Fromages Affinés", price: "15€" }
        ]
      },
      {
        category: "Cave & Bar",
        items: [
          { name: "Sancerre 'Les Romains'", price: "14€", description: "Verre - Accord parfait seafood" },
          { name: "Cocktail Signature 'Corail'", price: "16€", description: "Gin, fleur de sureau, pamplemousse" },
          { name: "Whisky Nikka from the Barrel", price: "18€" },
          { name: "Champagne Ruinart Brut (Coupe)", price: "22€" },
          { name: "Expresso Pur Arabica", price: "5€" },
          { name: "Infusion Verveine Fraîche", price: "7€" }
        ]
      }
    ]
  },
  description: "Nichée dans l'enceinte prestigieuse du Palais de Tokyo, Corail est une ode spectaculaire à l'océan. Avec son décor minéral et épuré, ce restaurant propose une cuisine marine d'une grande finesse, où chaque produit est mis en valeur par des techniques modernes. Le chef décline une partition iodée allant du bar de ligne aux crustacés nobles, le tout dans une atmosphère chic et apaisée, à l'abri du tumulte parisien.",
  expert_catchline: "La perle iodée et épurée du Palais de Tokyo.",
  insider_tip: "Ne manquez pas le carpaccio de Saint-Jacques au corail, une explosion de fraîcheur. La terrasse est l'une des mieux gardées du quartier pour un déjeuner au soleil.",
  specials: {
    cuisine: ["Seafood Moderne", "Océanique"],
    drinks: ["Vins Blancs de Loire", "Champagnes Millésimés"],
    must_eat: "Cuisine Seafood. Carpaccio de Saint-Jacques & Filet de Bar au Yuzu.",
    must_drink: "Sancerre Maison"
  },
  images: {
    hero: "AU_ZVEHPw7G-D_21L6slW88xQ5_oVrLH3YiRDnThKpnykBHQrlbUHEvPodS8NAJcDqGUr4qCr-lq26O_f0kxhen4iJM3hZAi-0B6KvBM2twFBRpWB15s7-x20oi_bmOMqyvVITQTo8hdcMqvEQ0iN6yfFXJdVgX5ABLQbldfHo0DrIu2-e2bEbesjCsiiizsCwKH8JtKMkb5hTCPPYKx-qBxmEEwA8vdCKG6fHCyvtS3K3ojFRh3e0L-zC0YPSeDiZZlKYhwD4T8hlCzzNjt3PjL3I0xdooAtj2T_dJhugD9f47Ncw",
    gallery: [
      "AU_ZVEF_I5c57WW1C7WYq8mN5t4Q9aeygTW2itc9nCTYvBqJycORxPdZpfB5J3c5-dGsjTPu2ONwRF8teYa67hS34R-KHXydLY2myQrSc3nmG--1iZwdhdDOqU1j127DhSXxCDzwwqLlxIAHGgLpwgDy3iN6H-McOz7o6jp5lw-cp54L-pLRfpFWAdrpHX6or8F5hJFORYzPXjn2_naCNIhSX_FmuzPGqQbPAYbd68Vot06YmrOiZl_czVFt7oJOwsCJ_khxaSwgPzd4iX0oH588jxR31P0GUMnE7mRDqPo0nK2pwQ",
      "AU_ZVEGKvy-DJsd9fAxVoDoA5E41nMgUHtDSCbT9R9XhfETM6puy8VoZXRhQOv2zwV0CcoFOY3mfZFvB0elzvU4G3J7jDGyJSwcOJUEup8bZ89RYiRAkfowOqGMiDXplZgZCET5TA4hSdiFMqvsesb9tmQ7lAnw0POl3ofx8RSyqv8a8_9KDTwD1_BX5pyutRBZ5_TonIogsOsoonQsvlxNuM9Z_jxem-LCnv9T9KpfIZjOSpeWD049quM9KiRc-5e5GQdQafp0FOPe1FU7IMV4ReHIKcnKQEq869YK-fCfkLUR_9w"
    ]
  },
  verified: true,
  google_rating: 3.9,
  instagram_handle: "corail_restaurant",
  real_talk: {
    text: "Un lieu qui respire la sérénité. L'assiette est précise, respectueuse du produit et très moderne. C'est l'adresse parfaite pour un déjeuner d'affaires élégant ou un dîner romantique après une expo.",
    must_eat: "Cuisine Seafood. Carpaccio de Saint-Jacques.",
    le_secret: "La table près de la baie vitrée offre une lumière magnifique pour le déjeuner.",
    le_son: "Jazz smooth et sons d'ambiance discrets.",
    le_must: "Le filet de bar, dont la cuisson est toujours millimétrée."
  }
};

export default corail_restaurant;
