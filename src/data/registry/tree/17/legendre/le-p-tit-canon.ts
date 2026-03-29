import { SurgicalPlace } from "../../../type-definition";

export const le_p_tit_canon: SurgicalPlace = {
  id: "poi-le-p-tit-canon",
  slug: "le-p-tit-canon",
  name: "Le P’tit Canon",
  category: "restaurant",
  subcategory: ["traditional-bistro", "neighborhood-gem", "wine-bar", "institution", "bonne-franquette"],
  location: {
    address: "36 Rue Legendre, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8843853,
    lng: 2.3147718,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJEzsl9LBv5kcRTUlx-NK8sVE"
  },
  moods: {
    chill: 85,
    festif: 15,
    culturel: 0
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 14:30, 19:00 – 22:30 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://leptitcanonparis.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Œufs mayonnaise bio", price_cents: 700 },
          { name: "Escargots de la Maison de l'Escargot (x12)", price_cents: 1800 },
          { name: "Salade de poireaux vinaigrette", price_cents: 750 },
          { name: "Filets de harengs, pommes à l'huile tièdes", price_cents: 850 },
          { name: "Terrine de porc et ses cornichons", price_cents: 850 },
          { name: "Bâtonnets de mozzarella", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Tartare de bœuf au couteau, frites", price_cents: 2000 },
          { name: "Bacon Cheeseburger, frites maison", price_cents: 2200 },
          { name: "Saucisse purée, jus de viande corsé", price_cents: 2200 },
          { name: "Andouillette 5A, sauce moutarde", price_cents: 2400 },
          { name: "Cassoulet traditionnel maison", price_cents: 2300 },
          { name: "Cuisse de canard confite, pommes de terre sautées", price_cents: 2600 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs",
        items: [
          { name: "Mousse au chocolat maison", price_cents: 800 },
          { name: "Tarte aux pommes et glace vanille", price_cents: 1100 },
          { name: "Baba au Rhum traditionnel", price_cents: 1100 },
          { name: "Assiette de fromages affinés", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Saumur-Champigny - Paul Filliatreau", price_cents: 2800 },
          { name: "Champagne Gimmonet Gonnet (Bouteille)", price_cents: 8000 },
          { name: "Verre de Pic-Saint-Loup 2022", price_cents: 750 }
        ]
      }
    ]
  },
  expert_catchline: "Le vrai bistrot de quartier où les œufs mayo et l'andouillette se dégustent sur des nappes à carreaux rouges.",
  description: "Le bistrot de quartier par excellence. Décoration vintage, nappes à carreaux et ambiance chaleureuse.",
  insider_tip: "• **Authentique** : Le décor n'a pas bougé depuis des décennies, c'est ce qui fait son charme.\n• **Produit** : L'andouillette 5A est sourcée chez les meilleurs artisans.\n• **Vin** : La sélection au verre est courte mais très bien sentie, demandez conseil.",
  specials: {
    cuisine: ["Cuisine de bistrot"],
    drinks: ["Vin"],
    must_eat: "Cuisine de bistrot. L'andouillette 5A ou le cassoulet maison.",
  },
  images: {
    hero: "AU_ZVEEI3LDCB349kjSNnSUzmWgqHbnudYl9nO5yV052SGbDrKgHnwu77FX6UFsXNgrZtkBjLlwM-PcI4-SLGQloIHYFEImmAqgb2lN8weR5OpIP626K3yLjxJEYckxqqceN7dqBJM-p-YtHdlvTGulWH2Se4NZ-oUn2smZWWocqFAu1ThlilZJh369pSgyQNmze7vdzgpvhvVvlp7XLUjcuV2GeOUVWlmJpLEAe9VxkRMW1HpyF6a-gRvowr84EbOBrhGJrYW3osA6ZkybOCKSIjK_a-SA4ZLyjfBysoELZujiaOg",
    gallery: ["AU_ZVEFBA-8ZoLUHdp4lqmmFKrWOE2D3bZIF4XNvIKQXGlamJeq-0BjJCZkgLHGjteDlkzKEzB2N9WGJdcwe_G-aDVVW8uXZcCtQoSHvLR7SIb5iMSYBBYvf7JTdEYKLZ7Gr0VK37_9Ly2MknwSgrnDbd2M9mRhDqQqKGfrptYrydaUUEQ9dIi69IPcMb2n2HOycMrTYdbrjntBNu_FFkC6X7Tx9IHibPN0NWKJw0fkFAqBNDmOjYTp_GLAsJqXkPLMWtyvbQj4zvuAR0FjFcDQ8QK8jAg8ThGjn46cbyOl_RSPH-A","AU_ZVEHwSS71spN0Q4J6XM4RQkj-3c49iA2AlKAvrb8wgb98YzccqifBvWiYpRquACk6QQGjbKk79ntW_r0j6islHtX2EjcuuTIQJMQagrz8i8gh6qHsy9bADrvtDZcuxc9FglTT0rXSxYZ4Tvj-XJPf61UicASYEVfBaRMxdvxXeSc8UFt-5e-08ZsWmHwdy46LbI1Xa9xm-JuUDCuUJz2L_i-zoHWx7WjkDALZwiMyne5aPiMSHnowvjzt_3BnjTDI7v5k7WZwY3o9EgJWgNmMpwy6RlhX1ZUlBfs4DrukMw-wNhhNllZewJPK9y9pPe7MIlKkAl9mtxBVHq5BfAdgiPJWDyCAwGV3hBA0MNGX72AY924ErM2Rdi0J2MAAuhyxGrMLp5NwZ4EPXu33nfPdLW2gCmHVU400NHO_08lvDh9O_w"]
  },
  verified: true,
  google_rating: 4.4
};

export default le_p_tit_canon;
