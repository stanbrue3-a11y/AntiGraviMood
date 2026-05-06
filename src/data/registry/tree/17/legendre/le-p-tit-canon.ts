import { SurgicalPlace } from "../../../type-definition";

export const le_p_tit_canon: SurgicalPlace = {
  id: "poi-le-p-tit-canon",
  slug: "le-p-tit-canon",
  name: "Le P’tit Canon",
  category: "restaurant",
  subcategory: ['bistrot'],
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
          { name: "Escargots de la Maison de l’Escargot (x12)", price_cents: 1800 },
          { name: "Salade de poireaux vinaigrette", price_cents: 750 },
          { name: "Filets de harengs, pommes à l’huile tièdes", price_cents: 850 },
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
  expert_catchline: "Le vrai bistrot de quartier où les œufs mayo et l’andouillette se dégustent sur des nappes à carreaux rouges.",
  description: "Le bistrot de quartier par excellence. Décoration vintage, nappes à carreaux et ambiance chaleureuse.",
  insider_tip: "• **Authentique** : Le décor n’a pas bougé depuis des décennies, c’est ce qui fait son charme.\n• **Produit** : L’andouillette 5A est sourcée chez les meilleurs artisans.\n• **Vin** : La sélection au verre est courte mais très bien sentie, demandez conseil.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vin"],
    must_eat: "Cuisine de bistrot. L’andouillette 5A ou le cassoulet maison.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-p-tit-canon/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. L’andouillette 5A ou le cassoulet maison.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_p_tit_canon;
