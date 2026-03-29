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
        category_type: "starter",
        display_label: "L'Éveil des Sens (Entrées)",
        items: [
          { name: "Carpaccio de Saint-Jacques", price_cents: 2200, description: "Huile de corail, zeste de citron vert", is_highlight: true },
          { name: "Velouté de Crustacés", price_cents: 1800, description: "Mousse d'estragon et croutons à l'ail" },
          { name: "Tartare de Thon Albacore", price_cents: 2100, description: "Gingembre frais et avocat crémeux" },
          { name: "Salade de Homard Bleu", price_cents: 2800, description: "Pamplemousse et jeunes pousses" },
          { name: "Friture de Petits Poissons", price_cents: 1600, description: "Inspiration méditerranéenne, sauce tartare" },
          { name: "Huitres Gillardeau N°3 (x6)", price_cents: 2400, description: "Servies avec vinaigre d'échalote" },
          { name: "Asperges Vertes & Bottarga", price_cents: 1900, description: "Poutargue râpée et œuf parfait" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Trésors de l'Océan (Plats)",
        items: [
          { name: "Filet de Bar de Ligne", price_cents: 3400, description: "Émulsion de beurre blanc au yuzu", is_highlight: true },
          { name: "Sole Meunière Entière", price_cents: 4800, description: "Saisie au beurre noisette, purée au sel de mer" },
          { name: "Risotto Noir aux Seiches", price_cents: 2600, description: "Encre de seiche et petits pois frais" },
          { name: "Poulpe de Roche Grillé", price_cents: 3200, description: "Légumes racines confits, sauce vierge" },
          { name: "Lieu Jaune en Croûte d'Herbes", price_cents: 2900, description: "Fondue de poireaux safranée" },
          { name: "Homard Entier à la Plancha", price_cents: 6500, description: "Beurre de corail épicé" },
          { name: "Noix de Saint-Jacques Poêlées", price_cents: 3600, description: "Crème de chou-fleur et noisettes torréfiées" },
          { name: "Turbot de Mer de Sable", price_cents: 5200, description: "Jus de coquillages et mini navets" }
        ]
      },
      {
        category_type: "other",
        display_label: "Terre & Végétal",
        items: [
          { name: "Faux-Filet Dry Aged", price_cents: 4200, description: "Bœuf normand, frites de patate douce" },
          { name: "Suprême de Volaille Jaune", price_cents: 2800, description: "Gnocchis à la sauge et jus de viande" },
          { name: "Gnocchis Potager", price_cents: 2400, description: "Légumes de saison sautés, parmesan 24 mois" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Marines (Desserts)",
        items: [
          { name: "Soufflé au Grand Marnier", price_cents: 1400, description: "Aérien, servi dès la sortie du four", is_highlight: true },
          { name: "Millefeuille Vanille Bourbon", price_cents: 1200, description: "Crème légère et caramel salé" },
          { name: "Tarte Citron Déstructurée", price_cents: 1100, description: "Meringue italienne et basilic" },
          { name: "Sorbet Citron Vert & Vodka", price_cents: 1000 },
          { name: "Assiette de Fromages Affinés", price_cents: 1500 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave & Bar",
        items: [
          { name: "Sancerre 'Les Romains'", price_cents: 1400, description: "Verre - Accord parfait seafood" },
          { name: "Cocktail Signature 'Corail'", price_cents: 1600, description: "Gin, fleur de sureau, pamplemousse" },
          { name: "Whisky Nikka from the Barrel", price_cents: 1800 },
          { name: "Champagne Ruinart Brut (Coupe)", price_cents: 2200 },
          { name: "Expresso Pur Arabica", price_cents: 500 },
          { name: "Infusion Verveine Fraîche", price_cents: 700 }
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
