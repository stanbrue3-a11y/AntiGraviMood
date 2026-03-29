import { SurgicalPlace } from "../../../type-definition";

export const le_flandrin: SurgicalPlace = {
  id: "poi-le-flandrin-16",
  name: "Le Flandrin",
  slug: "le-flandrin",
  category: "restaurant",
  subcategory: ["brasserie-luxe", "élégant", "terrasse", "victor-hugo"],
  location: {
    address: "80 Av. Henri Martin, 75116 Paris",
    arrondissement: 16,
    lat: 48.8642091,
    lng: 2.2721514,
    nearest_metro: "La Pompe / Avenue Henri Martin",
    metro_lines: [9],
    google_id: "ChIJfTHIxVZl5kcRWsoSezOFKAg"
  },
  moods: {
    chill: 85,
    festif: 20,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "Lun-Dim: 07h30-00h00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.leflandrin.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 85,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "L'Éveil du Palais (Entrées)",
        items: [
          { name: "Cœur de Saumon Fumé", price_cents: 2800, description: "Qualité supérieure, crème d'Isigny", is_highlight: true },
          { name: "Asperges Vertes de Provence", price_cents: 2400, description: "Sauce mousseline légère" },
          { name: "Tartare de Thon & Avocat", price_cents: 2600, description: "Zeste de gingembre et sésame" },
          { name: "Salade de Homard Bleu", price_cents: 3900, description: "Pamplemousse et vinaigrette d'agrumes" },
          { name: "Escargots de Bourgogne (x12)", price_cents: 2800, description: "Beurre persillé d'exception" },
          { name: "Foie Gras de Canard Maison", price_cents: 2900, description: "Chutney de figues et pain brioché" },
          { name: "Artichaut Entier Sauce Vinaigrette", price_cents: 1600, description: "Un classique du quartier" },
          { name: "Oeuf Mollet au Caviar", price_cents: 3200 }
        ]
      },
      {
        category_type: "main",
        display_label: "La Mer & Le Grill (Plats)",
        items: [
          { name: "Sole Meunière du Flandrin", price_cents: 5500, description: "Arrivée de Normandie, environ 500g", is_highlight: true },
          { name: "Filet de Bar à la Plancha", price_cents: 4200, description: "Émulsion au citron de Menton, légumes vapeur" },
          { name: "Noix de Saint-Jacques d'Erquy", price_cents: 4500, description: "Fondue de poireaux et beurre blanc" },
          { name: "Turbot Grillé Entier", price_cents: 11000, description: "Pour deux personnes, sauce hollandaise" },
          { name: "Emincé de Bœuf au Poivre", price_cents: 3800, description: "Échalotes confites et frites maison" },
          { name: "Côtelettes d'Agneau de Lait", price_cents: 4400, description: "Jus au thym frais" },
          { name: "Ravioles de Royans à la Crème", price_cents: 2400, description: "Grillées au parmesan" },
          { name: "Risotto à la Truffe d'Automne", price_cents: 4800, is_highlight: true },
          { name: "Tartare de Bœuf Classique", price_cents: 2900 },
          { name: "Suprême de Volaille Jaune", price_cents: 3200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs de l'Après-Midi",
        items: [
          { name: "Mille-feuille Vanille", price_cents: 1600, description: "Feuilletage ultra léger, crème onctueuse", is_highlight: true },
          { name: "Profiteroles au Chocolat chaud", price_cents: 1500, description: "Glace vanille et sauce 70%" },
          { name: "Tarte Tatin Maison", price_cents: 1400, description: "Crème crue d'Isigny" },
          { name: "Fraises au Sucre ou Crème", price_cents: 1800, description: "En saison uniquement" },
          { name: "Baba au Rhum Ambré", price_cents: 1500 },
          { name: "Assortiment de Sorbet Maison", price_cents: 1200 }
        ]
      },
      {
        category_type: "other",
        display_label: "Bar de la Gare",
        items: [
          { name: "Champagne Ruinart Brut (Coupe)", price_cents: 2200 },
          { name: "Pully-Fuissé (Le Verre)", price_cents: 1800 },
          { name: "Cocktail 'Le Flandrin'", price_cents: 1600, description: "Gin, St Germain, Citron" },
          { name: "Expresso Pur Arabica", price_cents: 500 },
          { name: "Chocolat Chaud Traditionnel", price_cents: 1100 },
          { name: "Limonade à l'ancienne", price_cents: 800 }
        ]
      }
    ]
  },
  description: "Institution du 16ème arrondissement, Le Flandrin occupe majestueusement l'ancienne gare de l'avenue Henri-Martin. Cette brasserie de luxe, aux volumes impressionnants et au décor épuré, est le repaire chic des habitués et du monde des affaires. Sa terrasse monumentale est l'une des plus prisées de Paris pour son élégance discrète et son calme olympien. Ici, la gastronomie française se décline avec une précision rare, entre poissons nobles et desserts classiques de haute volée.",
  expert_catchline: "L'élégance de la brasserie de luxe dans une gare historique.",
  insider_tip: "Réservez la terrasse pour profiter de la lumière de fin de journée sur l'avenue Henri Martin. Le mille-feuille est l'un des meilleurs de la capitale, à ne pas manquer.",
  specials: {
    cuisine: ["Brasserie de luxe", "Français"],
    drinks: ["Grands Crus Classés", "Champagnes Millésimés"],
    must_eat: "Cuisine de Brasserie. Sole Meunière & Mille-feuille Vanille.",
    must_drink: "Ruinart Blanc de Blancs"
  },
  images: {
    hero: "https://lh5.googleusercontent.com/p/AF1QipMfTHIxVZl5kcRWsoSezOFKAg=w1600-h1000-k-no",
    gallery: [
      "https://lh5.googleusercontent.com/p/AF1QipN2rBRkgLdbVyo83HwQCOjhkU=w800-h800-k-no",
      "https://lh5.googleusercontent.com/p/AF1QipGA6Q7xuSibjqxvU8H7oQ1cZ8I=w800-h800-k-no"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "leflandrin",
  real_talk: {
    text: "Une institution immuable. Le service en livrée a encore tout son panache, et l'assiette est d'une régularité métronomique. C'est le Paris chic, posé et indémodable.",
    must_eat: "Cuisine de Brasserie. Mille-feuille.",
    le_secret: "On y croise souvent l'élite politique et médiatique au déjeuner, très calme le matin pour un café d'affaires.",
    le_son: "Un murmure de conversations feutrées sur lit de musique classique.",
    le_must: "Dîner sous la terrasse illuminée, l'un des plus beaux spots du quartier."
  }
};

export default le_flandrin;
