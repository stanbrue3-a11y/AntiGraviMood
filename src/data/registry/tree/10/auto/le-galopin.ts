import { SurgicalPlace } from "../../../type-definition";

export const le_galopin: SurgicalPlace = {
  id: "poi-le-galopin",
  slug: "le-galopin",
  name: "Le Galopin",
  category: "restaurant",
  subcategory: ["gastronomique", "creatif", "fusion-japonaise", "institution"],
  location: {
    address: "34 Rue Sainte-Marthe, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.874134,
    lng: 2.370245,
    nearest_metro: "Belleville",
    metro_lines: [2, 11],
    google_id: "ChIJI_N2lQtVxhkR97n_o" // Placeholder to be verified or mapping Julien Simmonet
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 19:30–22:30, samedi: 12:30–14:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.le-galopin.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 70,
    is_free: false,
    dish_price: 32, // Prix indicatif déjeuner
    menu_type: "fixed",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Signatures du Chef Simmonet (Entrées)",
        items: [
          { name: "Tartelette Oignon, Œufs de Truite & Poutargue", price_cents: 1600, is_highlight: true },
          { name: "Saint-Jacques de plongée, Butternut & Pavé", price_cents: 1900, is_highlight: true },
          { name: "Œuf Parfait, Pleurotes au Miso & Kalamata", price_cents: 1450, is_highlight: true },
          { name: "Carpaccio de Bœuf Wagyu & Huile de Sésame", price_cents: 2200 },
          { name: "Sashimi de Mulet Ikejime & Algues Dulce", price_cents: 1800, is_highlight: true },
          { name: "Velouté de Topinambour & Éclats de Châtaigne", price_cents: 1200 },
          { name: "Betterave Fumée & Ricotta de Bufflonne fumée", price_cents: 1350 },
          { name: "Radis Daikon Mariné & Vinaigrette Ponzu", price_cents: 1100 }
        ]
      },
      {
        category_type: "main",
        display_label: "Expériences Marines & Terrestres (Plats)",
        items: [
          { name: "Merlu de Ligne à l'Algue Dulce & Fumet Coco", price_cents: 2900, is_highlight: true },
          { name: "Ris de Veau au Jus Corsé, Sage & Ciboulette", price_cents: 3400, is_highlight: true },
          { name: "Pigeon de Vendée rôti sur le coffre au Sang", price_cents: 3800, is_highlight: true },
          { name: "Filet de Bœuf Aubrac & Huile de Sésame Noir", price_cents: 3200 },
          { name: "Cabillaud au Miso Blanc & Légumes Croquants", price_cents: 3000 },
          { name: "Agneau de Lait des Pyrénées & Ail Noir", price_cents: 3500, is_highlight: true },
          { name: "Risotto aux Champignons des Bois & Truffe", price_cents: 2800 },
          { name: "Pêche du Jour (Ikejime) & Beurre Blanc Yuzu", price_cents: 3100, is_highlight: true }
        ]
      },
      {
        category_type: "other",
        display_label: "Accords Végétaux (Accompagnements)",
        items: [
          { name: "Mousseline de Pommes de Terre au Sésame", price_cents: 750, is_highlight: true },
          { name: "Carottes Fanes Rôties au Miel & Gingembre", price_cents: 800 },
          { name: "Julienne de Légumes à la Japonaise (Pickles)", price_cents: 700 },
          { name: "Salade de Jeunes Pousses & Vinaigrette Yuzu", price_cents: 650 },
          { name: "Riz Gohan de Qualité Supérieure", price_cents: 600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Épilogues Sucrés (Desserts)",
        items: [
          { name: "Courge Shiatsu, Crumble Maïs & Caramel", price_cents: 1200, is_highlight: true },
          { name: "Ganache Chocolat Noir 75% & Sorbet Banane", price_cents: 1100, is_highlight: true },
          { name: "Riz au Lait Vanillé & Praliné Sésame Noir", price_cents: 1000 },
          { name: "Financier aux Amandes & Sorbet Shizo Vert", price_cents: 1150, is_highlight: true },
          { name: "Fromages Affinés (Maison Quatrehomme)", price_cents: 1400 },
          { name: "Glace à l'Huile d'Olive & Sel de Guérande", price_cents: 900 },
          { name: "Tartelette aux Fruits de Saison & Verveine", price_cents: 1050 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave du Galopin (Boissons)",
        items: [
          { name: "Verre de Saké Artisanal (Sélection du Chef)", price_cents: 1200, is_highlight: true },
          { name: "Verre de Vin Naturel (Blanc des Vignerons)", price_cents: 950, is_highlight: true },
          { name: "Verre de Vin Naturel (Rouge Terroir)", price_cents: 900 },
          { name: "Bouteille de Vin Vivant (Vignerons Amis)", price_cents: 4500 },
          { name: "Jus de Fruits Frais Pressés (Minute)", price_cents: 750 },
          { name: "Eau Micro-filtrée Le Galopin (75cl)", price_cents: 450, is_highlight: true },
          { name: "Thé Vert Matcha de Cérémonie", price_cents: 800 },
          { name: "Café Espresso Terres de Café (Spécialité)", price_cents: 350 }
        ]
      }
    ]
  },
  description: "Le Galopin, niché sur l'emblématique place Sainte-Marthe, est une adresse incontournable de la gastronomie créative parisienne. Initialement lancé par les frères Tischenko, le lieu est désormais magnifié par le chef Julien Simmonet. Sa cuisine, fruit de voyages au Japon, sublime les techniques de conservation et d'extraction (Ikejime, fermentations) pour offrir un menu unique d'une précision chirurgicale. Entre influences nippones et terroir français, chaque plat est une œuvre d'art brute, servie dans un décor de bistrot authentique et chaleureux.",
  insider_tip: "• **L'Influence Japonaise** : Ne manquez pas les poissons préparés selon la méthode Ikejime, la texture et la pureté du goût sont incomparables.\n• **La Place Sainte-Marthe** : En été, la terrasse sur cette place qui ressemble à un village est l'une des plus magiques de Paris.\n• **Saké Pairing** : Laissez-vous tenter par un verre de saké avec votre entrée, le chef Simmonet a une connaissance pointue des accords franco-japonais.",
  specials: {
    cuisine: ["Gastronomie créative fusion Japonaise", "Techniques Ikejime & Fermentations", "Produits de saison ultra-sourcés"],
    drinks: ["Belle sélection de sakés artisanaux", "Vins naturels d'auteur", "Thés de cérémonie"],
    must_eat: "Le Merlu à l'Algue Dulce & Fumet Coco (29€) : un plat signature qui résume parfaitement l'équilibre entre mer et exotisme.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGoX5X2_s_B7-A7n-D8v9bL7S9T0y-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERv-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLB-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.4
};

export default le_galopin;
