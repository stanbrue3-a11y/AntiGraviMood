import { SurgicalPlace } from "../../../type-definition";

export const le_pre_catelan: SurgicalPlace = {
  id: "poi-le-pre-catelan",
  slug: "le-pre-catelan",
  name: "Le Pré Catelan",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "Bois de Boulogne, 75016 Paris, France",
    arrondissement: 16,
    lat: 48.8639993,
    lng: 2.2507703,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJXZ9lqzZl5kcRxIInGxIRFaI"
  },
  moods: {
    chill: 40,
    festif: 0,
    culturel: 90
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: 12:00 – 12:45, 19:00 – 20:45 | jeudi: 12:00 – 12:45, 19:00 – 20:45 | vendredi: 12:00 – 12:45, 19:00 – 20:45 | samedi: 12:00 – 12:45, 19:00 – 20:45 | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://leprecatelan.paris/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 350,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus Signature",
        items: [
          { name: "Le Menu du Pré (Dégustation complète)", price_cents: 38000, description: "L’expression totale de la cuisine de Frédéric Anton" },
          { name: "Le Menu Orsay", price_cents: 31000, description: "Sélection de saisons en 12 étapes" },
          { name: "Un Déjeuner au Pré", price_cents: 17500, description: "Menu déjeuner (uniquement en semaine)" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats de Légende",
        items: [
          { name: "Langoustine en Ravioli", price_cents: 12000, description: "Au foie gras de canard, fine gelée à la feuille d’or", is_highlight: true },
          { name: "L’Aubergine au Caviar", price_cents: 11500, description: "Crème d’avocat et curry léger" },
          { name: "Le Petit Pois en Tartelette", price_cents: 8500, description: "Menthe fraîche et oignons nouveaux" },
          { name: "Le Saumon Fumé", price_cents: 9500, description: "Au bois de cerisier, crème de raifort" },
          { name: "L’Asperge Blanche de pays", price_cents: 9000, description: "Mousseline légère et herbes potagères" },
          { name: "Le Pigeonneau Poché", price_cents: 13500, description: "Sauce salmis, purée de pommes de terre onctueuse" },
          { name: "Le Ris de Veau Croustillant", price_cents: 14500, description: "Jus corsé, petits légumes de saison" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Fromages",
        items: [
          { name: "Plateau de Fromages affinés", price_cents: 4500 },
          { name: "La Pomme", price_cents: 3500, description: "Soufflée croustillante, crème glacée caramel" },
          { name: "Le Chocolat", price_cents: 3800, description: "En texture, sorbet cacao amer" },
          { name: "Citron Meyer", price_cents: 3200, description: "Glace au basilic, meringue légère" }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Coupe de Champagne Millésimé", price_cents: 4500 },
          { name: "Accord Mets & Vins (Sélection Sommelier)", price_cents: 18000 },
          { name: "Bouteille de Chablis 1er Cru", price_cents: 12000 },
          { name: "Expresso Pur Arabica", price_cents: 1500 }
        ]
      }
    ]
  },
  description: `Institution nichée au cœur du Bois de Boulogne, Le Pré Catelan est le théâtre de la gastronomie triplement étoilée de Frédéric Anton. Dans un pavillon Napoléon III d’une élégance absolue, le chef orchestre une partition culinaire où la précision technique rencontre une esthétique visuelle époustouflante. C’est l'un des sommets mondiaux de la haute cuisine française, offrant un cadre bucolique unique à Paris.`,
  expert_catchline: `Le sommet absolu de la précision technique dans un pavillon impérial.`,
  insider_tip: `• **Le Déjeuner au Pré** : Pour découvrir l'excellence Anton à prix (relativement) accessible, le menu déjeuner à 175€ est une opportunité rare pour un 3 étoiles.
  • **Le Must-Seat** : Demandez une table près des larges baies vitrées pour profiter de la lumière naturelle et de la vue sur les jardins.
  • **Dress Code** : L’élégance est de mise, veste obligatoire pour les messieurs (que le restaurant peut prêter si besoin).`,
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vin", "Cocktail", "Bière"],
    must_eat: "Cuisine française. La Langoustine en Ravioli (feuille d’or). Une prouesse technique et visuelle.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-pre-catelan/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.6,
  michelin_stars: 3,
  real_talk: {
    text: "Le Pré Catelan n’est pas juste un dîner, c’est une ascension. Frédéric Anton sculpte chaque assiette avec une rigueur de diamantaire. L’ambiance dans le pavillon est feutrée, majestueuse, presque hors du temps.",
    must_eat: "Cuisine française. Langoustine en Ravioli",
    le_secret: "La cave de cigares exceptionnelle pour finir la soirée en terrasse.",
    le_son: "Calme olympien, seulement interrompu par le chuchotement des jardins du Bois de Boulogne.",
    le_must: "Offrir ce moment pour une occasion qui marquera toute une vie."
  }
};

export default le_pre_catelan;
