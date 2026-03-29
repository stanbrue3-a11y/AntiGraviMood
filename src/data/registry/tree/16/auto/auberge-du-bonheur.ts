import { SurgicalPlace } from "../../../type-definition";

export const auberge_du_bonheur: SurgicalPlace = {
  id: "poi-auberge-du-bonheur",
  slug: "auberge-du-bonheur",
  name: "L'Auberge du Bonheur",
  category: "restaurant",
  subcategory: ["traditionnel", "jardin", "bucolique", "bois-de-bonlogne"],
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
        category: "Fraîcheur du Jardin (Entrées)",
        items: [
          { name: "Salade de Haricots Verts & Champignons", price: "14.00€", description: "Huile de noisette et échalotes ciselées", highlight: true },
          { name: "Cœur de Saumon Fumé Classique", price: "18.50€", description: "Crème d'Isigny et pain grillé" },
          { name: "Symphonie de Légumes Croquants", price: "13.00€", description: "Vinaigrette aux herbes du bois" },
          { name: "Terrine Maison au Poivre Vert", price: "15.00€", description: "Condiments et pain de campagne" },
          { name: "Œuf Mollet Cocotte", price: "12.50€", description: "Crème de parmesan et mouillettes" },
          { name: "Velouté de Potiron & Châtaignes", price: "11.00€" },
          { name: "Carpaccio de Bœuf au Basilic", price: "16.00€" },
          { name: "Artichaut Entier Vinaigrette", price: "12.00€" }
        ]
      },
      {
        category: "Plats de Campagne (Plats)",
        items: [
          { name: "Épaule d'Agneau de Lait Confite", price: "32.00€", description: "Jus au thym et purée de pommes de terre", highlight: true },
          { name: "Côte de Bœuf Grillée (pour deux)", price: "85.00€", description: "Frites maison et sauce béarnaise" },
          { name: "Filet de Bar à la Plancha", price: "28.50€", description: "Émulsion citronnée et légumes sautés" },
          { name: "Magret de Canard au Miel", price: "26.00€", description: "Polenta crémeuse et fruits rôtis" },
          { name: "Tartare de Bœuf Tradition", price: "22.50€", description: "Préparé minute selon votre goût" },
          { name: "Sole Meunière du Marché", price: "48.00€" },
          { name: "Risotto d'Automne aux Truffes", price: "34.00€" },
          { name: "Pavé de Veau aux Morilles", price: "36.00€" },
          { name: "Penne à la Bottarga", price: "24.50€" },
          { name: "Suprême de Pintade Fermière", price: "25.50€" },
          { name: "Daurade Royale Grillée Entière", price: "38.00€" },
          { name: "Plat Végétarien de Saison", price: "20.00€" }
        ]
      },
      {
        category: "Douceurs Bucoliques (Desserts)",
        items: [
          { name: "Tatin Maison & Crème Fraîche", price: "11.00€", description: "Le grand classique de l'Auberge", highlight: true },
          { name: "Mousse au Chocolat Dense", price: "9.50€", description: "Un goût d'enfance" },
          { name: "Profiteroles Classiques (x3)", price: "12.50€", description: "Chocolat chaud onctueux" },
          { name: "Assiette de Fraises Melba", price: "13.00€", description: "En saison, chantilly maison" },
          { name: "Ile Flottante Tradition", price: "9.00€" },
          { name: "Plateau de Fromages Affinés", price: "15.00€" }
        ]
      },
      {
        category: "La Cave de l'Auberge (Boissons)",
        items: [
          { name: "Verre de Bordeaux Supérieur", price: "10.00€", highlight: true },
          { name: "Coupe de Champagne Laurent-Perrier", price: "16.00€" },
          { name: "Bouteille de Rosé de Provence", price: "38.00€" },
          { name: "Expresso Pur Arabica", price: "3.50€" },
          { name: "Grand Café Crème", price: "5.50€" },
          { name: "Thé de Spécialité", price: "7.00€" },
          { name: "Jus de Fruits Pressés", price: "9.00€" },
          { name: "Digestif Cognac VSOP", price: "14.50€" }
        ]
      }
    ]
  },
  description: "Dissimulée derrière la Grande Cascade au cœur du Bois de Boulogne, l'Auberge du Bonheur est un secret bien gardé des Parisiens en quête de verdure. Cette ancienne métairie, avec ses jardins fleuris et sa terrasse ombragée par des platanes centenaires, offre une parenthèse bucolique enchantée loin du tumulte urbain. On y sert une cuisine française classique, honnête et savoureuse, parfaitement adaptée à un déjeuner dominical en famille ou un dîner romantique sous les étoiles. C'est l'essence même du 'sympa' champêtre en plein 16ème.",
  expert_catchline: "Une parenthèse bucolique enchantée sous les arbres du Bois de Boulogne.",
  insider_tip: "• **Le Jardin** : C'est l'atout maître du lieu. En été, demandez impérativement une table sous les arbres. En hiver, l'intérieur est très cosy.\n  • **Le Week-end** : C'est le spot favori des familles chic du quartier, l'ambiance est joyeuse et animée.\n  • **Accès** : Le restaurant est un peu isolé, prévoyez un taxi ou utilisez la navette gratuite depuis la Porte Maillot si disponible.",
  specials: {
    cuisine: ["Traditionnelle", "Française"],
    drinks: ["Vins de Propriété", "Champagnes Classiques"],
    must_eat: "Cuisine Traditionnelle. Agneau Confite & Tatin Maison.",
    must_drink: "Verre de Bordeaux Supérieur"
  },
  images: {
    hero: "AU_ZVEFv0oXqCWYBCMd_TUoxr8sl5MSklgsfyOuSDBajDjLQi2llBCpSyaI-Iie9Dd_0sG-xxuqMMUqQlUcnokWmLqQqJulV-iJxfSgOQEyRAQGosFhPkf5JmaYs24Du0SCbdghtn3XPGykevgfpScBUyioyhaeJJKnyW7KO2De1qzican4bbNYB8ysp4vtFAAxl_JcDbwXsF8fHlWTSNWDKAVlHdhUWv7jd1d9jlGZtWDDhO0nEDt6dkDS-PTGEYEBXrj0Fv5AitXD8_6uTEcniD1s34YPQ8adR-UKoRpSp4CfetQ",
    gallery: [
      "AU_ZVEFnLqaT_zTJs24M_K0O5DCOTQwAee4EuV-t_o6-39GaBbIWXMdyAn6fqHbKqyLzMRWxNJLbZweC0dVxAcQ5f648UwRB6uO4cPOlEKv0e22cc7pGzH41K8gOQ2CTerlqHxjObTGFLX8z0utCJ-w9mNPJTHoT01pGCIxoNLj_0skjYJP2IULzXFDP2WjR1k2ghyGaUJeJI1pnHquvc_VC0PYA1nlTi8jyXxhfzLE0H3zUM0nQcp0bXlQumq5Djt910E89OOGjok9xlr6A9SkYZOkip5O8x9OgzhMzXO4hZMi-mg",
      "AU_ZVEHE2SvSb0LD00rVtIiBIpcn4o5IQ1jbsNYUWm5BvS8mxScqAj0jIPBjCJjwsV-V2wnw4eyPTKVlmjxilYvyGf3i1M7JQGA4rbZlrhdUDsO-yT2WnIKenGm7GQUvtfpc6aoIsh6cZDqG4DSQ5snYew__NBWLmnRxdBACF0najdR0Jh7bjcc3BH4TqcCQddW5Sh7eyCJiukGmZdEA1hEEhy9ctNo0HWQ0kCz37LBZNj00og78ZsZ1IWA1Fpda-CzqYcSO6c8PDkOzIGyWa_PNKy5AWACIpUrygqfRP7qTA8C6bw"
    ]
  },
  verified: true,
  google_rating: 4.3,
  instagram_handle: "laubergedubonheur",
  real_talk: {
    text: "Un havre de paix insoupçonné. On oublie totalement qu'on est à Paris. La cuisine est sans chichis, les saveurs sont là, et le service est d'une grande bienveillance. Le bonheur, tout simplement.",
    must_eat: "Cuisine Traditionnelle. Agneau de Lait.",
    le_secret: "En automne, la lumière sous les arbres dorés est absolument sublime pour un déjeuner tardif.",
    le_son: "Le chant des oiseaux et le murmure du vent dans les feuilles.",
    le_must: "Un déjeuner en famille le dimanche midi, l'ambiance est délicieusement rétro."
  }
};

export default auberge_du_bonheur;
