import { SurgicalPlace } from "../../../type-definition";

export const la_mascotte_montmartre: SurgicalPlace = {
  id: "poi-la-mascotte-montmartre",
  slug: "la-mascotte-montmartre",
  name: "La Mascotte Montmartre",
  category: "restaurant",
  subcategory: ["brasserie", "fruits-de-mer", "institution", "historique"],
  location: {
    address: "52 Rue des Abbesses, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8844874,
    lng: 2.338426,
    nearest_metro: "Abbesses",
    metro_lines: [12],
    google_id: "ChIJZ3j_ZClVu5kcRsvXJ_CQNDvY"
  },
  moods: {
    chill: 70,
    festif: 60,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi-dimanche: 08:00–00:00 (Service continu)",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.la-mascotte-montmartre.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 55,
    is_free: false,
    dish_price: 39, // Prix de l'assiette de fruits de mer
    menu_type: "standard",
    force_manual_dish_price: true,
    last_updated: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Préludes de la Mer (Entrées)",
        items: [
          { name: "Crevettes Bio nacrées Sauce Ponzu", price_cents: 2300, is_highlight: true },
          { name: "Foie Gras de Canard, Condiment Kumquat", price_cents: 2600, is_highlight: true },
          { name: "Sardines Millésime 2024 'Mademoiselle Perle'", price_cents: 1600 },
          { name: "Cassolette d'Escargots de Bourgogne (x12)", price_cents: 2400 },
          { name: "Soupe à l'Oignon Gratinée Traditionnelle", price_cents: 1450 },
          { name: "Tartare de Thon Alalunga & Avocat", price_cents: 1900, is_highlight: true },
          { name: "Salade de Poulpe de Roche à la Provençale", price_cents: 2100 },
          { name: "Terrine de la Maison & Cornichons Malossol", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Le Banc de l'Écailler (Plats)",
        items: [
          { name: "Sole de Loctudy Meunière (Belle pièce)", price_cents: 5900, is_highlight: true },
          { name: "Plateau 'Royal Mascotte' (Prestige Mer)", price_cents: 15700, is_highlight: true },
          { name: "L'Assiette de Fruits de Mer (Sélection)", price_cents: 3900, is_highlight: true },
          { name: "Tour des Parcs à Huîtres (24 pièces)", price_cents: 7500 },
          { name: "Homard Canadien à la Plancha (500g)", price_cents: 7500, is_highlight: true },
          { name: "Fish & Chips façon Mascotte & Sauce Tartare", price_cents: 2900 },
          { name: "Thon mi-cuit au Sésame & Wakame", price_cents: 2800 },
          { name: "Noix de Saint-Jacques poêlées, Crème coraillée", price_cents: 3400 }
        ]
      },
      {
        category_type: "main",
        display_label: "Tradition & Terroir (Plats)",
        items: [
          { name: "Tartare de Bœuf d'Aubrac haché minute", price_cents: 2900, is_highlight: true },
          { name: "Entrecôte d'Aubrac (300g) Jus de viande & Frites", price_cents: 4400 },
          { name: "Blanquette de Joue de Veau & Riz Pilaf", price_cents: 3200, is_highlight: true },
          { name: "Magret de Canard au Miel & Épices douces", price_cents: 3000 },
          { name: "Burger Mascotte, Sauce St-Nectaire & Bacon", price_cents: 2600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Accords Moelleux (Plats)",
        items: [
          { name: "Frites Maison à la graisse de bœuf", price_cents: 700, is_highlight: true },
          { name: "Teppanyaki de Légumes croquants", price_cents: 850 },
          { name: "Riz Pilaf aux aromates", price_cents: 650 },
          { name: "Purée onctueuse au Beurre demi-sel d'Isigny", price_cents: 750 },
          { name: "Salade de Jeunes Pousses & Vinaigrette", price_cents: 600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs de la Butte (Desserts)",
        items: [
          { name: "Crêpes flambées au Grand Marnier (Minute)", price_cents: 1600, is_highlight: true },
          { name: "Riz au Lait, Granola Maison & Caramel Salé", price_cents: 1200, is_highlight: true },
          { name: "Paris-Brest à la Crème Pralinée intense", price_cents: 1600 },
          { name: "Mousse au Chocolat & Crumble Noisette", price_cents: 1400, is_highlight: true },
          { name: "Tarte Tatin & Crème d'Isigny AOP", price_cents: 1450 },
          { name: "Assiette de Fruits Frais de Saison", price_cents: 1500 },
          { name: "Le Café Gourmand de la Mascotte (3 pièces)", price_cents: 1500, is_highlight: true }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave des Abbesses (Boissons)",
        items: [
          { name: "Coupe de Champagne Louis Dehu", price_cents: 1600, is_highlight: true },
          { name: "Bouteille de Chablis 1er Cru (Sélection)", price_cents: 6200 },
          { name: "Le Spritz de Montmartre (Signature)", price_cents: 1500, is_highlight: true },
          { name: "Verre de Muscadet Sèvre & Maine sur Lie", price_cents: 850 },
          { name: "Jus de Fruits Alain Milliat (Sélection)", price_cents: 750 },
          { name: "Eau micro-filtrée Mascotte (75cl)", price_cents: 450, is_highlight: true },
          { name: "Café Espresso de spécialité Terres de Café", price_cents: 350 }
        ]
      }
    ]
  },
  description: "La Mascotte est l'âme gastronomique des Abbesses depuis 1889. Cette brasserie historique, spécialiste incontestée des fruits de mer et des produits du terroir, est une véritable institution montmartroise. Dans un cadre Art Déco magnifiquement préservé, on y savoure les plus beaux plateaux d'écailler de la capitale, des rôtisseries de bœuf d'Aubrac et des desserts flambés devant vous. Service continu, accueil chaleureux et produits d'une fraîcheur absolue font de ce lieu le refuge des habitués et des esthètes de la Butte.",
  insider_tip: "• **Le Banc de l'Écailler** : Les huîtres sont d'une qualité rare, sourcées directement chez les meilleurs producteurs. L'assiette de fruits de mer est le parfait compromis.\n• **Service Continu** : Très précieux à Montmartre, vous pouvez y manger une sole meunière à 16h sans aucun problème.\n• ** Spritz de Montmartre** : Leur version signature est particulièrement rafraîchissante sur la terrasse face à l'église des Abbesses.",
  specials: {
    cuisine: ["Brasserie de mer & de terroir", "Plateaux d'écailler d'exception", "Service continu historique"],
    drinks: ["Belle carte de Champagnes", "Cocktails signature", "Grands crus au verre"],
    must_eat: "La Sole Meunière (59€) : une pièce de Loctudy magistrale, préparée dans les règles de l'art.",
  },
  images: {
    hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEEnXfL8h-zB-E2O9zG0kZ0W-K5L7zY7rJ7e5W9J8_3KT32F1IseISGJL4kyoR97z5aRPsJKy6lRbvCi0KlBb6MxEOsG_qs1gRz7c26HdWvBp_GeG6R2ykOu3jktuAya1hUH_ZbU_pAOZoCwp2B62KXzw0mYAo_tVUu_iVBaezUtOQOOkKKETjfOG2C4zn68dJFsPlKDtNL6DEf0HBpAhlyIvdsEX8fmLVeLhilKgWvgGg4XV-131uqdV7kQYIyq7HH2v9CGTrGmNSwtXEkVTVAYlE4dtKk5yxLCmaBRJiF9eA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    gallery: [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEHReRKh0dSWhMKdS3iF1ALRwdp6sT005Ke-HMxgYag-yTYaYH90ZNFg8ukcO6pTaPxllOW9V9AM_HBry6v_8Me65ie1Qqf7NjWDxGWIDzM5hV55kad3EOoIMVF0z0A5QbbqV2QFmUFMQpcyYue5p1n7OUtI6RWinSU-LTLScL0gximL5mSCVq5BC-COT5ApK1CWAdzCCFyHBIXp3qcEJjJM8EtLRNkqIOIKPlb5c9I&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AU_ZVEGf5fjECvVn5ayKSPn7t4rZIgY0Tk6cOyGTcbuvHL2Ik_7DHt9p1lHKk5A5g9GaTieSjOJ53If7Uk7xnP-PRzf22gnAkO-YwC8a4TRoZrp683ouQb21yrj2cF32LEJvJ0Kn4-JM6xUcX5NwxtQYhhVDIJOo-z3HqXEuJs2fn1q9gQAQ6jlHmGclLmcTWAGO7HLdgdCxLCgvqTdZOAjV25E481beelulf-Ewzy5bZ7To1EbxFsajpc4lOMc3JD17fmBHRITQsWnDzY_ZglWkGYIXIg7hnBmXK0cCXly3Eur5AD6thzbwV2b9nW7gJCYmLXuAHkT8-Iqrt5KZcyDqh1J5hYsxlwdjdurKKm445-JnA-5BqfoL-9zni3oiHwNbhw69IjuEgRxOCKnYTS5VanOUR19ha-r7ZPsWLHGtNfS5BxxqLT1sbBDNx8HWKQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    ]
  },
  verified: false,
  google_rating: 4.5
};

export default la_mascotte_montmartre;
