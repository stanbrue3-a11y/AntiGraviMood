import { SurgicalPlace } from "../../../type-definition";

export const le_verre_vole: SurgicalPlace = {
  id: "poi-le-verre-vole",
  slug: "le-verre-vole",
  name: "Le Verre Volé",
  category: "restaurant",
  subcategory: ["bistrot", "vin-naturel", "institution", "terroir"],
  location: {
    address: "67 Rue de Lancry, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.8728531,
    lng: 2.3635187,
    nearest_metro: "Jacques Bonsergent",
    metro_lines: [5],
    google_id: "ChIJa-ILkAtu5kcRiVfpDYzyG6A"
  },
  moods: {
    chill: 80,
    festif: 60,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 12:30–14:30, 19:30–01:00",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://verrevole.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 45,
    is_free: false,
    dish_price: 19, // Prix de la saucisse au couteau
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes de la Cave (Entrées)",
        items: [
          { name: "Boudin Noir Maison & Purée onctueuse", price_cents: 1700, is_highlight: true },
          { name: "Burrata des Pouilles & Huile d'Olive Extra", price_cents: 1450, is_highlight: true },
          { name: "Carpaccio de Bresaola & Copeaux de Parmesan", price_cents: 1200 },
          { name: "Caviar d'Aubergines & Anchois Fumés", price_cents: 1100, is_highlight: true },
          { name: "Terrine de Campagne Maison & Cornichons", price_cents: 1000 },
          { name: "Sardines Millésimées (Boîte) & Beurre Salé", price_cents: 1300 },
          { name: "Œufs Cocotte aux Champignons de Paris", price_cents: 1150 },
          { name: "Salade de Lentilles vertes & Feta AOP", price_cents: 950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Cuisine de Marché (Plats)",
        items: [
          { name: "Saucisse au couteau (Ferme de Meyrinhac) & Purée", price_cents: 1900, is_highlight: true },
          { name: "Pavé de Cabillaud de Plouguerneau rôti", price_cents: 2400 },
          { name: "Merlu de la Cotinière à la plancha, Jus de viande", price_cents: 2500, is_highlight: true },
          { name: "Carré de Cochon du Perche pané Panko", price_cents: 2250, is_highlight: true },
          { name: "Tartare de Bœuf Charolais au couteau", price_cents: 2100 },
          { name: "Gnocchis Maison à la Sauge & Burrata fondante", price_cents: 1850, is_highlight: true },
          { name: "Épaule d'Agneau confite (12h) & Légumes", price_cents: 2800 },
          { name: "Risotto aux Légumes Oubliés & Parmesan", price_cents: 1950 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre Signature", price_cents: 700, is_highlight: true },
          { name: "Légumes de Saison rôtis au four", price_cents: 850 },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price_cents: 600 },
          { name: "Frites Maison Double Cuisson (Graisse de bœuf)", price_cents: 650 },
          { name: "Riz Pilaf aux Herbes Fraîches", price_cents: 650 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs de la Butte (Desserts)",
        items: [
          { name: "Riz au Lait vanillé & Caramel Beurre Salé", price_cents: 900, is_highlight: true },
          { name: "Mousse au Chocolat Noir & Éclats de Cacahuètes", price_cents: 850, is_highlight: true },
          { name: "Sorbet aux Agrumes Maison (3 boules)", price_cents: 800 },
          { name: "Tarte Tatin & Crème Fraîche d'Isigny", price_cents: 950, is_highlight: true },
          { name: "Plateau de Fromages (Sélection du caviste)", price_cents: 1200 },
          { name: "Gâteau de Savoie & Compotée de fruits", price_cents: 850 },
          { name: "Café Gourmand (Duo de mini-desserts)", price_cents: 1100 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Sélection du Sommelier (Boissons)",
        items: [
          { name: "Verre de Vin Naturel (Sélection du jour)", price_cents: 850, is_highlight: true },
          { name: "Bouteille de Beaujolais (Marcel Lapierre)", price_cents: 3800, is_highlight: true },
          { name: "Bouteille de Chenin (Domaine de la Taille aux Loups)", price_cents: 4500 },
          { name: "Jus de Fruits Artisanaux Alain Milliat", price_cents: 750 },
          { name: "Bière Artisanale Deck & Donohue (33cl)", price_cents: 700 },
          { name: "Eau micro-filtrée Le Verre Volé (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso de spécialité (Torréfaction locale)", price_cents: 350 }
        ]
      }
    ]
  },
  description: "Le Verre Volé est l'épicentre du vin naturel à Paris depuis l'an 2000. Situé à deux pas du Canal Saint-Martin, ce bistrot mythique combine une cave à vins d'exception (400+ références sans soufre) et une cuisine de marché vibrante. On s'y presse pour sa fameuse saucisse au couteau, son boudin noir maison et son atmosphère survoltée de néo-bistrot parisien. Ici, le produit est roi et le partage est de mise, le tout accompagné par les conseils avisés de sommeliers passionnés qui ont fait l'histoire du mouvement 'nature'.",
  insider_tip: "• **Le Droit de Bouchon** : Achetez une bouteille à la cave adjacente et dégustez-la sur place (7€ de droit de bouchage), c'est le meilleur rapport qualité-prix de la capitale.\n• **La Saucisse au Couteau** : C'est le plat culte, ne repartez pas sans l'avoir goûté, surtout si elle est accompagnée de leur purée légendaire.\n• **Réservation Obligatoire** : Le lieu est petit et toujours complet, réservez bien à l'avance pour espérer avoir une table le soir.",
  specials: {
    cuisine: ["Cuisine de marché", "Vin naturel (Institution)", "Produits de niche sourcés"],
    drinks: ["Plus de 400 références de vins naturels", "Bières artisanales", "Droit de bouchon avantageux"],
    must_eat: "Le Boudin Noir Maison (17€) : une recette secrète, fondant à souhait, équilibrant parfaitement le gras et les épices.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGoX5X2_s_B7-A7n-D8v9bL7S9T0y-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEERv-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHLB-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o-u-i-o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default le_verre_vole;
