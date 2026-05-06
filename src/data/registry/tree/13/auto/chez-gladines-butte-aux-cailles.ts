import { SurgicalPlace } from "../../../type-definition";

export const chez_gladines_butte_aux_cailles: SurgicalPlace = {
  id: "poi-chez-gladines-butte-aux-cailles",
  slug: "chez-gladines-butte-aux-cailles",
  name: "Chez Gladines Butte aux Cailles",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "30 Rue des Cinq Diamants, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.828804,
    lng: 2.3506,
    nearest_metro: "Corvisart",
    metro_lines: [6],
    google_id: "ChIJ5cetAJFx5kcRHTPQJOp85p8"
  },
  moods: {
    chill: 60,
    festif: 85,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "Ouvert tous les jours: 12:00–15:00, 19:00–23:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://chezgladines-butteauxcailles.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 12.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Salades Géantes (Plats - Saladiers)",
        items: [
          { name: "Salade 5 Diamants (Complète)", price_cents: 1550, is_highlight: true },
          { name: "Salade Complète (Cantal, Jambon, Œuf)", price_cents: 1200 },
          { name: "Salade de Gésiers de Volaille", price_cents: 1100 },
          { name: "Salade de Foie de Volaille", price_cents: 1100 },
          { name: "Salade Ventrèche (Lardons basques)", price_cents: 1100 },
          { name: "Salade St Germain (Cantal, Chèvre)", price_cents: 1200 },
          { name: "Salade Lardons & Chèvre Chaud", price_cents: 1300 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Charcuteries Basques",
        items: [
          { name: "Assiette Mixte (Charcuterie & Fromage)", price_cents: 1850, is_highlight: true },
          { name: "Pâté Basque au Piment d’Espelette", price_cents: 700 },
          { name: "Jambon de Pays (Assiette)", price_cents: 700 },
          { name: "Escargots à la Cassolette Basque (x12)", price_cents: 1050, is_highlight: true },
          { name: "Escargots au Roquefort (x12)", price_cents: 1100 },
          { name: "Saucisse Sèche Artisanale", price_cents: 700 },
          { name: "Chorizo Grillé", price_cents: 700 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats : Spécialités du Sud-Ouest",
        items: [
          { name: "Escalope de Veau Montagnarde (Culte)", price_cents: 1800, is_highlight: true },
          { name: "Poulet Basquaise au Riz", price_cents: 1450, is_highlight: true },
          { name: "Axoa de Veau Artisanal", price_cents: 1650 },
          { name: "Pipérade au Jambon Poêlé", price_cents: 1300 },
          { name: "Chipirons à la Biscaïna", price_cents: 1190 },
          { name: "Omelette Basque (Piments/Tomates)", price_cents: 1050 },
          { name: "Bavette à l’Échalote & Frites", price_cents: 1650 },
          { name: "Andouillette AAAAA grillée", price_cents: 1550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Fromages & Douceurs",
        items: [
          { name: "Gâteau Basque à la Cerise Noire", price_cents: 750, is_highlight: true },
          { name: "Brebis & Confiture d’Itxassou", price_cents: 850 },
          { name: "Crème Brûlée Maison", price_cents: 650 },
          { name: "Mousse au Chocolat (Grand Bol)", price_cents: 600 },
          { name: "Profiteroles Maison (x3)", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cave & Boissons",
        items: [
          { name: "Pichet de Vin Rouge (50cl)", price_cents: 850 },
          { name: "Pinte de Bière Pression", price_cents: 750 },
          { name: "Cidre Basque Artisanal (75cl)", price_cents: 1400 },
          { name: "Apéritif Patxaran", price_cents: 650 },
          { name: "Verre d’Irouléguy", price_cents: 700 }
        ]
      }
    ]
  },
  description: "Chez Gladines est l’institution indétrônable de la Butte-aux-Cailles, célèbre pour ses salades servies dans des saladiers géants et son ambiance survoltée de tablée basque. Ici, la convivialité prime sur le calme, les nappes à carreaux voient défiler des portions gargantuesques d’axoa ou d’escalope montagnarde. C’est l’adresse idéale pour un festin entre amis où l'on finit inévitablement par discuter avec ses voisins de table, un pichet de rouge à la main.",
  insider_tip: "• **Le Défi Salade** : La ’5 Diamants’ est un défi physique. Ne prévoyez rien d’intense après ce repas.\n• **No Resa** : Préparez-vous à attendre sur le trottoir le week-end, l’ambiance commence déjà là.\n• **Le Must-Eat** : L’escalope montagnarde avec son fromage fondu et son jambon est un monument local.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vin en pichet", "Cidre", "Patxaran"],
    must_eat: "Cuisine Basque. Salade 5 Diamants & Escalope Montagnarde",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/chez-gladines-butte-aux-cailles/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Basque. Salade 5 Diamants & Escalope Montagnarde",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default chez_gladines_butte_aux_cailles;
