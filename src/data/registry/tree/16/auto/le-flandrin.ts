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
        category: "L'Éveil du Palais (Entrées)",
        items: [
          { name: "Cœur de Saumon Fumé", price: "28€", description: "Qualité supérieure, crème d'Isigny", highlight: true },
          { name: "Asperges Vertes de Provence", price: "24€", description: "Sauce mousseline légère" },
          { name: "Tartare de Thon & Avocat", price: "26€", description: "Zeste de gingembre et sésame" },
          { name: "Salade de Homard Bleu", price: "39€", description: "Pamplemousse et vinaigrette d'agrumes" },
          { name: "Escargots de Bourgogne (x12)", price: "28€", description: "Beurre persillé d'exception" },
          { name: "Foie Gras de Canard Maison", price: "29€", description: "Chutney de figues et pain brioché" },
          { name: "Artichaut Entier Sauce Vinaigrette", price: "16€", description: "Un classique du quartier" },
          { name: "Oeuf Mollet au Caviar", price: "32€" }
        ]
      },
      {
        category: "La Mer & Le Grill (Plats)",
        items: [
          { name: "Sole Meunière du Flandrin", price: "55€", description: "Arrivée de Normandie, environ 500g", highlight: true },
          { name: "Filet de Bar à la Plancha", price: "42€", description: "Émulsion au citron de Menton, légumes vapeur" },
          { name: "Noix de Saint-Jacques d'Erquy", price: "45€", description: "Fondue de poireaux et beurre blanc" },
          { name: "Turbot Grillé Entier", price: "110€", description: "Pour deux personnes, sauce hollandaise" },
          { name: "Emincé de Bœuf au Poivre", price: "38€", description: "Échalotes confites et frites maison" },
          { name: "Côtelettes d'Agneau de Lait", price: "44€", description: "Jus au thym frais" },
          { name: "Ravioles de Royans à la Crème", price: "24€", description: "Grillées au parmesan" },
          { name: "Risotto à la Truffe d'Automne", price: "48€", highlight: true },
          { name: "Tartare de Bœuf Classique", price: "29€" },
          { name: "Suprême de Volaille Jaune", price: "32€" }
        ]
      },
      {
        category: "Douceurs de l'Après-Midi",
        items: [
          { name: "Mille-feuille Vanille", price: "16€", description: "Feuilletage ultra léger, crème onctueuse", highlight: true },
          { name: "Profiteroles au Chocolat chaud", price: "15€", description: "Glace vanille et sauce 70%" },
          { name: "Tarte Tatin Maison", price: "14€", description: "Crème crue d'Isigny" },
          { name: "Fraises au Sucre ou Crème", price: "18€", description: "En saison uniquement" },
          { name: "Baba au Rhum Ambré", price: "15€" },
          { name: "Assortiment de Sorbet Maison", price: "12€" }
        ]
      },
      {
        category: "Bar de la Gare",
        items: [
          { name: "Champagne Ruinart Brut (Coupe)", price: "22€" },
          { name: "Pully-Fuissé (Le Verre)", price: "18€" },
          { name: "Cocktail 'Le Flandrin'", price: "16€", description: "Gin, St Germain, Citron" },
          { name: "Expresso Pur Arabica", price: "5€" },
          { name: "Chocolat Chaud Traditionnel", price: "11€" },
          { name: "Limonade à l'ancienne", price: "8€" }
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
