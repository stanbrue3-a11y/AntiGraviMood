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
    wifi: false,
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
        category: "Préludes de la Cave (Entrées)",
        items: [
          { name: "Boudin Noir Maison & Purée onctueuse", price: "17.00€", highlight: true },
          { name: "Burrata des Pouilles & Huile d'Olive Extra", price: "14.50€", highlight: true },
          { name: "Carpaccio de Bresaola & Copeaux de Parmesan", price: "12.00€" },
          { name: "Caviar d'Aubergines & Anchois Fumés", price: "11.00€", highlight: true },
          { name: "Terrine de Campagne Maison & Cornichons", price: "10.00€" },
          { name: "Sardines Millésimées (Boîte) & Beurre Salé", price: "13.00€" },
          { name: "Œufs Cocotte aux Champignons de Paris", price: "11.50€" },
          { name: "Salade de Lentilles vertes & Feta AOP", price: "9.50€" }
        ]
      },
      {
        category: "Cuisine de Marché (Plats)",
        items: [
          { name: "Saucisse au couteau (Ferme de Meyrinhac) & Purée", price: "19.00€", highlight: true },
          { name: "Pavé de Cabillaud de Plouguerneau rôti", price: "24.00€" },
          { name: "Merlu de la Cotinière à la plancha, Jus de viande", price: "25.00€", highlight: true },
          { name: "Carré de Cochon du Perche pané Panko", price: "22.50€", highlight: true },
          { name: "Tartare de Bœuf Charolais au couteau", price: "21.00€" },
          { name: "Gnocchis Maison à la Sauge & Burrata fondante", price: "18.50€", highlight: true },
          { name: "Épaule d'Agneau confite (12h) & Légumes", price: "28.00€" },
          { name: "Risotto aux Légumes Oubliés & Parmesan", price: "19.50€" }
        ]
      },
      {
        category: "Accords Moelleux (Plats)",
        items: [
          { name: "Purée de Pommes de Terre Signature", price: "7.00€", highlight: true },
          { name: "Légumes de Saison rôtis au four", price: "8.50€" },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price: "6.00€" },
          { name: "Frites Maison Double Cuisson (Graisse de bœuf)", price: "6.50€" },
          { name: "Riz Pilaf aux Herbes Fraîches", price: "6.50€" }
        ]
      },
      {
        category: "Douceurs de la Butte (Desserts)",
        items: [
          { name: "Riz au Lait vanillé & Caramel Beurre Salé", price: "9.00€", highlight: true },
          { name: "Mousse au Chocolat Noir & Éclats de Cacahuètes", price: "8.50€", highlight: true },
          { name: "Sorbet aux Agrumes Maison (3 boules)", price: "8.00€" },
          { name: "Tarte Tatin & Crème Fraîche d'Isigny", price: "9.50€", highlight: true },
          { name: "Plateau de Fromages (Sélection du caviste)", price: "12.00€" },
          { name: "Gâteau de Savoie & Compotée de fruits", price: "8.50€" },
          { name: "Café Gourmand (Duo de mini-desserts)", price: "11.00€" }
        ]
      },
      {
        category: "La Sélection du Sommelier (Boissons)",
        items: [
          { name: "Verre de Vin Naturel (Sélection du jour)", price: "8.50€", highlight: true },
          { name: "Bouteille de Beaujolais (Marcel Lapierre)", price: "38.00€", highlight: true },
          { name: "Bouteille de Chenin (Domaine de la Taille aux Loups)", price: "45.00€" },
          { name: "Jus de Fruits Artisanaux Alain Milliat", price: "7.50€" },
          { name: "Bière Artisanale Deck & Donohue (33cl)", price: "7.00€" },
          { name: "Eau micro-filtrée Le Verre Volé (75cl)", price: "4.50€", highlight: true },
          { name: "Café Espresso de spécialité (Torréfaction locale)", price: "3.50€" }
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
