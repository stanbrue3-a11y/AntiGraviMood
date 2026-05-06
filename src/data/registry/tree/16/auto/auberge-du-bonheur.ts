import { SurgicalPlace } from "../../../type-definition";

export const auberge_du_bonheur: SurgicalPlace = {
  id: "poi-auberge-du-bonheur",
  slug: "auberge-du-bonheur",
  name: "L’Auberge du Bonheur",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "All. de Longchamp, 75016 Paris",
    arrondissement: 16,
    lat: 48.8620499,
    lng: 2.2402622,
    nearest_metro: "Les Sablons",
    metro_lines: [1],
    google_id: "ChIJebNEr0dl5kcRaapkD0str5s"
  },
  moods: {
    chill: 95,
    festif: 20,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "Lun-Dim: 12h-14h30, 19h30-22h",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.laubergedubonheur.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 55,
    is_free: false,
    last_updated: "2026-03-28",
    verified_at: "2026-03-28",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Fraîcheur du Jardin (Entrées)",
        items: [
          { name: "Salade de Haricots Verts & Champignons", price_cents: 1400, description: "Huile de noisette et échalotes ciselées", is_highlight: true },
          { name: "Cœur de Saumon Fumé Classique", price_cents: 1850, description: "Crème d’Isigny et pain grillé" },
          { name: "Symphonie de Légumes Croquants", price_cents: 1300, description: "Vinaigrette aux herbes du bois" },
          { name: "Terrine Maison au Poivre Vert", price_cents: 1500, description: "Condiments et pain de campagne" },
          { name: "Œuf Mollet Cocotte", price_cents: 1250, description: "Crème de parmesan et mouillettes" },
          { name: "Velouté de Potiron & Châtaignes", price_cents: 1100 },
          { name: "Carpaccio de Bœuf au Basilic", price_cents: 1600 },
          { name: "Artichaut Entier Vinaigrette", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Campagne (Plats)",
        items: [
          { name: "Épaule d’Agneau de Lait Confite", price_cents: 3200, description: "Jus au thym et purée de pommes de terre", is_highlight: true },
          { name: "Côte de Bœuf Grillée (pour deux)", price_cents: 8500, description: "Frites maison et sauce béarnaise" },
          { name: "Filet de Bar à la Plancha", price_cents: 2850, description: "Émulsion citronnée et légumes sautés" },
          { name: "Magret de Canard au Miel", price_cents: 2600, description: "Polenta crémeuse et fruits rôtis" },
          { name: "Tartare de Bœuf Tradition", price_cents: 2250, description: "Préparé minute selon votre goût" },
          { name: "Sole Meunière du Marché", price_cents: 4800 },
          { name: "Risotto d’Automne aux Truffes", price_cents: 3400 },
          { name: "Pavé de Veau aux Morilles", price_cents: 3600 },
          { name: "Penne à la Bottarga", price_cents: 2450 },
          { name: "Suprême de Pintade Fermière", price_cents: 2550 },
          { name: "Daurade Royale Grillée Entière", price_cents: 3800 },
          { name: "Plat Végétarien de Saison", price_cents: 2000 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs Bucoliques (Desserts)",
        items: [
          { name: "Tatin Maison & Crème Fraîche", price_cents: 1100, description: "Le grand classique de l’Auberge", is_highlight: true },
          { name: "Mousse au Chocolat Dense", price_cents: 950, description: "Un goût d’enfance" },
          { name: "Profiteroles Classiques (x3)", price_cents: 1250, description: "Chocolat chaud onctueux" },
          { name: "Assiette de Fraises Melba", price_cents: 1300, description: "En saison, chantilly maison" },
          { name: "Ile Flottante Tradition", price_cents: 900 },
          { name: "Plateau de Fromages Affinés", price_cents: 1500 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de l’Auberge (Boissons)",
        items: [
          { name: "Verre de Bordeaux Supérieur", price_cents: 1000, is_highlight: true },
          { name: "Coupe de Champagne Laurent-Perrier", price_cents: 1600 },
          { name: "Bouteille de Rosé de Provence", price_cents: 3800 },
          { name: "Expresso Pur Arabica", price_cents: 350 },
          { name: "Grand Café Crème", price_cents: 550 },
          { name: "Thé de Spécialité", price_cents: 700 },
          { name: "Jus de Fruits Pressés", price_cents: 900 },
          { name: "Digestif Cognac VSOP", price_cents: 1450 }
        ]
      }
    ]
  },
  description: "Dissimulée derrière la Grande Cascade au cœur du Bois de Boulogne, l’Auberge du Bonheur est un secret bien gardé des Parisiens en quête de verdure. Cette ancienne métairie, avec ses jardins fleuris et sa terrasse ombragée par des platanes centenaires, offre une parenthèse bucolique enchantée loin du tumulte urbain. On y sert une cuisine française classique, honnête et savoureuse, parfaitement adaptée à un déjeuner dominical en famille ou un dîner romantique sous les étoiles. C’est l’essence même du ’sympa’ champêtre en plein 16ème.",
  expert_catchline: "Une parenthèse bucolique enchantée sous les arbres du Bois de Boulogne.",
  insider_tip: "• **Le Jardin** : C’est l’atout maître du lieu. En été, demandez impérativement une table sous les arbres. En hiver, l’intérieur est très cosy.\n  • **Le Week-end** : C’est le spot favori des familles chic du quartier, l’ambiance est joyeuse et animée.\n  • **Accès** : Le restaurant est un peu isolé, prévoyez un taxi ou utilisez la navette gratuite depuis la Porte Maillot si disponible.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vins de Propriété", "Champagnes Classiques"],
    must_eat: "Cuisine Traditionnelle. Agneau Confite & Tatin Maison.",
    must_drink: "Verre de Bordeaux Supérieur"
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/auberge-du-bonheur/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.3,
  instagram_handle: "laubergedubonheur",
  real_talk: {
    text: "Un havre de paix insoupçonné. On oublie totalement qu’on est à Paris. La cuisine est sans chichis, les saveurs sont là, et le service est d'une grande bienveillance. Le bonheur, tout simplement.",
    must_eat: "Cuisine Traditionnelle. Agneau de Lait.",
    le_secret: "En automne, la lumière sous les arbres dorés est absolument sublime pour un déjeuner tardif.",
    le_son: "Le chant des oiseaux et le murmure du vent dans les feuilles.",
    le_must: "Un déjeuner en famille le dimanche midi, l’ambiance est délicieusement rétro."
  }
};

export default auberge_du_bonheur;
