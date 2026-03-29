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
        category_type: "starter",
        display_label: "Préludes des Cloys (Entrées)",
        items: [
          { name: "Raviolis de Langoustine & Bouillon de têtes", price_cents: 1600, is_highlight: true },
          { name: "Merlu en beignets croustillants & Tartare", price_cents: 1250, is_highlight: true },
          { name: "Carpaccio d'Ombrine, Agrumes & Aneth", price_cents: 1400 },
          { name: "Foie de Veau poêlé & Oignons confits", price_cents: 1500 },
          { name: "Œuf Mollet, Crème de Topinambours & Truffe", price_cents: 1300, is_highlight: true },
          { name: "Terrine de Campagne Maison & Pickles", price_cents: 1100 },
          { name: "Velouté de Potimarron & Éclats de Châtaigne", price_cents: 1000 },
          { name: "Salade de Lentilles vertes & Magret fumé", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Maîtrise & Saison (Plats)",
        items: [
          { name: "Gnocchis Maison au Beurre de Sauge (Culte)", price_cents: 2200, is_highlight: true },
          { name: "Cacio e Pepe traditionnel au Pecorino Romano", price_cents: 1950, is_highlight: true },
          { name: "Cuisse de Lapin braisée, Romarin & Polenta", price_cents: 2400 },
          { name: "Merlu de ligne de Saint-Jean-de-Luz & Céleri", price_cents: 2600, is_highlight: true },
          { name: "Joue de Bœuf braisée (48h) au Vin Rouge", price_cents: 2500, is_highlight: true },
          { name: "Pithiviers de Gibier au Foie Gras (Saison)", price_cents: 3800, is_highlight: true },
          { name: "Échine de Porc rôtie aux Herbes de Provence", price_cents: 2350 },
          { name: "Risotto crémeux aux Champignons des bois", price_cents: 2200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre au Sel de Guérande", price_cents: 650, is_highlight: true },
          { name: "Légumes d'Hiver rôtis au Four & Miel", price_cents: 750 },
          { name: "Frites fraîches Maison double cuisson", price_cents: 600 },
          { name: "Riz Pilaf délicat aux aromates", price_cents: 600 },
          { name: "Salade Mizuna & Vinaigrette au Xérès", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Sucré-Signature (Desserts)",
        items: [
          { name: "Riz au Lait onctueux & Caramel Beurre Salé", price_cents: 1000, is_highlight: true },
          { name: "Gâteau aux Poires & Amandes effilées", price_cents: 950 },
          { name: "Crumble aux Pommes & Glace Vanille Bourbon", price_cents: 1000, is_highlight: true },
          { name: "Chou Chantilly aux Abricots rôtis", price_cents: 1100 },
          { name: "Paris-Brest revisité, Praliné noisette", price_cents: 1250, is_highlight: true },
          { name: "Assiette de Fromages fermiers (Sélection)", price_cents: 1300 },
          { name: "Sorbet Maison du moment (3 boules)", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave Nature (Boissons)",
        items: [
          { name: "Verre de Vin Nature Sélectionné par Albert", price_cents: 900, is_highlight: true },
          { name: "Bouteille de Vin Biodynamique (Sélection Cave)", price_cents: 4200 },
          { name: "Jus de Fruits Artisanaux de nos régions", price_cents: 750 },
          { name: "Eau micro-filtrée Le Maquis (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso de spécialité Lomi", price_cents: 350 },
          { name: "Thé Vert Bio de la Maison l'Autre Thé", price_cents: 650 },
          { name: "Digestif Artisanal : Genièvre de Houlle", price_cents: 900 }
          
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
