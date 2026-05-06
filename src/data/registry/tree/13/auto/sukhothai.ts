import { SurgicalPlace } from "../../../type-definition";

export const sukhothai: SurgicalPlace = {
  id: "poi-sukhothai",
  slug: "sukhothai",
  name: "SukhoThaï",
  category: "restaurant",
  subcategory: ['thaï'],
  location: {
    address: "12 Rue du Père Guérin, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8303761,
    lng: 2.35398,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJhTseBY5x5kcRGCF5WZ7atvU"
  },
  moods: {
    chill: 80,
    festif: 35,
    culturel: 70
  },
  practical: {
    opening_hours_raw: "lundi: 11:45 – 14:30, 18:45 – 22:30 | mardi: 11:45 – 14:30, 18:45 – 22:30 | mercredi: 11:45 – 14:30, 18:45 – 22:30 | jeudi: 11:45 – 14:30, 18:45 – 22:30 | vendredi: 11:45 – 14:30, 18:45 – 22:30 | samedi: 11:45 – 14:30, 18:45 – 22:30 | dimanche: 11:45 – 14:30, 18:45 – 22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://suko-thai.eatbu.com/?lang=fr",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    dish_price: 15.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Les Plats : Curry & Wok",
        items: [
          { name: "Curry vert au lait de coco", price_cents: 1290 },
          { name: "Poulet au Curry Massaman", price_cents: 1590 },
          { name: "Pad Thaï aux crevettes", price_cents: 1600 },
          { name: "Bœuf grillé sauce épicée", price_cents: 1800 },
          { name: "Poulet sauté au basilic", price_cents: 1450 },
          { name: "Canard au curry rouge", price_cents: 1400 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées : Salades & Fritures",
        items: [
          { name: "Salade de papaye verte", price_cents: 1100 },
          { name: "Nems thaï végétariens", price_cents: 900 },
          { name: "Salade de bœuf épicé (Laab)", price_cents: 1300 },
          { name: "Brochettes de poulet Satay", price_cents: 1290 },
          { name: "Soupe de Crevettes Lemon-grass", price_cents: 990 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs : Thaï Desserts",
        items: [
          { name: "Riz gluant à la mangue fraiche", price_cents: 950 },
          { name: "Flan thaï au lait de coco", price_cents: 650 },
          { name: "Perles de coco à la vapeur", price_cents: 600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Bière Singha (33cl)", price_cents: 600 },
          { name: "Thé glacé thaï maison", price_cents: 500 },
          { name: "Jus de coco frais", price_cents: 550 },
          { name: "Infusion citronnelle", price_cents: 450 }
        ]
      }
    ]
  },
  description: "SukhoThaï est une escale thaïlandaise authentique située près du Parc Montsouris. Réputé pour la justesse de ses épices et la fraîcheur de ses produits, le restaurant propose les grands classiques du Siam dans un cadre épuré et zen. Une adresse de confiance pour un voyage culinaire précis et parfumé.",
  insider_tip: "• **Choix du Maître** : Le Curry Massaman est particulièrement réussi, avec une sauce onctueuse et une viande fondante.\n• **Expérience Culturelle** : La décoration intérieure transporte immédiatement en Thaïlande, calme et reposante.\n• **Commande Signature** : Le riz gluant à la mangue est le final parfait pour apaiser le feu des épices.",
  specials: {
    cuisine: ["Asiatique"],
    drinks: ["Bière Singha", "Thé glacé thaï"],
    must_eat: "Cuisine thaïlandaise. Curry Massaman & Pad Thaï",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sukhothai/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine thaïlandaise. Curry Massaman & Pad Thaï",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default sukhothai;
