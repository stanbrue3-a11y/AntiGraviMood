import { SurgicalPlace } from "../../../type-definition";

export const le_maquis: SurgicalPlace = {
  id: "poi-le-maquis",
  slug: "le-maquis",
  name: "Le Maquis",
  category: "restaurant",
  subcategory: ["bistrot", "bistronomie", "moderne", "nature"],
  location: {
    address: "53 Rue des Cloys, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8932077,
    lng: 2.3373085,
    nearest_metro: "Jules Joffrin",
    metro_lines: [12],
    google_id: "ChIJzfIaxFlu5kcRvu1q5E3sCjs"
  },
  moods: {
    chill: 80,
    festif: 50,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–22:30; Fermé dimanche-lundi",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.bistrotdumaquis.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 25, // Prix médian des plats à la carte (Dîner)
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category: "Préludes des Cloys (Entrées)",
        items: [
          { name: "Raviolis de Langoustine & Bouillon de têtes", price: "16.00€", highlight: true },
          { name: "Merlu en beignets croustillants & Tartare", price: "12.50€", highlight: true },
          { name: "Carpaccio d'Ombrine, Agrumes & Aneth", price: "14.00€" },
          { name: "Foie de Veau poêlé & Oignons confits", price: "15.00€" },
          { name: "Œuf Mollet, Crème de Topinambours & Truffe", price: "13.00€", highlight: true },
          { name: "Terrine de Campagne Maison & Pickles", price: "11.00€" },
          { name: "Velouté de Potimarron & Éclats de Châtaigne", price: "10.00€" },
          { name: "Salade de Lentilles vertes & Magret fumé", price: "12.00€" }
        ]
      },
      {
        category: "Maîtrise & Saison (Plats)",
        items: [
          { name: "Gnocchis Maison au Beurre de Sauge (Culte)", price: "22.00€", highlight: true },
          { name: "Cacio e Pepe traditionnel au Pecorino Romano", price: "19.50€", highlight: true },
          { name: "Cuisse de Lapin braisée, Romarin & Polenta", price: "24.00€" },
          { name: "Merlu de ligne de Saint-Jean-de-Luz & Céleri", price: "26.00€", highlight: true },
          { name: "Joue de Bœuf braisée (48h) au Vin Rouge", price: "25.00€", highlight: true },
          { name: "Pithiviers de Gibier au Foie Gras (Saison)", price: "38.00€", highlight: true },
          { name: "Échine de Porc rôtie aux Herbes de Provence", price: "23.50€" },
          { name: "Risotto crémeux aux Champignons des bois", price: "22.00€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre au Sel de Guérande", price: "6.50€", highlight: true },
          { name: "Légumes d'Hiver rôtis au Four & Miel", price: "7.50€" },
          { name: "Frites fraîches Maison double cuisson", price: "6.00€" },
          { name: "Riz Pilaf délicat aux aromates", price: "6.00€" },
          { name: "Salade Mizuna & Vinaigrette au Xérès", price: "5.50€" }
        ]
      },
      {
        category: "Sucré-Signature (Desserts)",
        items: [
          { name: "Riz au Lait onctueux & Caramel Beurre Salé", price: "10.00€", highlight: true },
          { name: "Gâteau aux Poires & Amandes effilées", price: "9.50€" },
          { name: "Crumble aux Pommes & Glace Vanille Bourbon", price: "10.00€", highlight: true },
          { name: "Chou Chantilly aux Abricots rôtis", price: "11.00€" },
          { name: "Paris-Brest revisité, Praliné noisette", price: "12.50€", highlight: true },
          { name: "Assiette de Fromages fermiers (Sélection)", price: "13.00€" },
          { name: "Sorbet Maison du moment (3 boules)", price: "9.00€" }
        ]
      },
      {
        category: "La Cave Nature (Boissons)",
        items: [
          { name: "Verre de Vin Nature Sélectionné par Albert", price: "9.00€", highlight: true },
          { name: "Bouteille de Vin Biodynamique (Sélection Cave)", price: "42.00€" },
          { name: "Jus de Fruits Artisanaux de nos régions", price: "7.50€" },
          { name: "Eau micro-filtrée Le Maquis (75cl)", price: "4.50€", highlight: true },
          { name: "Café Espresso de spécialité Lomi", price: "3.50€" },
          { name: "Thé Vert Bio de la Maison l'Autre Thé", price: "6.50€" },
          { name: "Digestif Artisanal : Genièvre de Houlle", price: "9.00€" }
          
        ]
      }
    ]
  },
  description: "Le Maquis est l'un des néo-bistrots les plus vibrants du 18ème arrondissement. Piloté par les chefs Paul Boudier et Albert Touton (ex-Chateaubriand), cet établissement de la rue des Cloys célèbre une cuisine instinctive, technique et terriblement gourmande. On y vient pour les gnocchis culte, les sauces miroitantes et une carte de vins naturels choisie avec une passion communicative. L'ambiance y est celle d'un quartier qui s'encanaille avec élégance, entre simplicité brute et finesse gastronomique.",
  insider_tip: "• **Les Gnocchis** : S'ils sont à la carte, ne réfléchissez pas un instant. Leur texture est une légende urbaine dans Montmartre.\n• **Le Déjeuner** : Profitez de la formule à 22€ (E+P+D), c'est une masterclass d'efficacité bistronomique.\n• **Le Menu Dégustation** : Le soir, optez pour le menu en 5 séquences (60€) pour saisir toute l'étendue du talent des chefs.",
  specials: {
    cuisine: ["Néo-bistronomie créative", "Gnocchis signature", "Produits de saison"],
    drinks: ["Vins naturels & biodynamiques", "Cave d'auteur", "Spiritueux artisanaux"],
    must_eat: "Les Gnocchis Maison au beurre de sauge (22€) : fondants, dorés, ils sont l'âme même de la maison.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEH2oW1t4z2u8ePQ_O9u9fUMlZOfPu_xU40_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEG5T_O4j-5I_R89kL-P-N1V--_u9fUMlZOfPu_xU40_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHmXUJV_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default le_maquis;
