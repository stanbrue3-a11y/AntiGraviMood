import { SurgicalPlace } from "../../../type-definition";

export const le_temps_des_cerises: SurgicalPlace = {
  id: "poi-le-temps-des-cerises",
  slug: "le-temps-des-cerises",
  name: "Le Temps des Cerises",
  category: "restaurant",
  subcategory: ['bar à vin'],
  location: {
    address: "18-20 Rue de la Butte aux Cailles, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8279102,
    lng: 2.3504885,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJh0pxV5Bx5kcRnxlPNiJLKRU"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 23:00 | mardi: 12:00 – 14:30, 19:00 – 23:00 | mercredi: 12:00 – 14:30, 19:00 – 23:00 | jeudi: 12:00 – 14:30, 19:00 – 23:00 | vendredi: 12:00 – 14:30, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.letempsdescerisescoop.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 16,
    dish_price: 15.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées du Terroir",
        items: [
          { name: "Salade de Joue de Porc confite", price_cents: 750, is_highlight: true },
          { name: "Terrine Maison Polonaise", price_cents: 650 },
          { name: "Rillettes de Poisson du moment", price_cents: 700 },
          { name: "Œufs Cocotte à la crème", price_cents: 600 },
          { name: "Velouté de légumes de saison", price_cents: 550 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats (Français)",
        items: [
          { name: "Super Cassoulet du Chef", price_cents: 2250, is_highlight: true },
          { name: "Petit Salé aux Lentilles", price_cents: 1550 },
          { name: "Joues de Cochon braisées", price_cents: 1650 },
          { name: "Boudin Noir à la Normande", price_cents: 1650 },
          { name: "Cuisse de Canard confite (Pot au feu)", price_cents: 1700 },
          { name: "Pavé de Lieu Jaune au four", price_cents: 1800 },
          { name: "Assiette Végétarienne de la Butte", price_cents: 1450 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules & Satiété",
        items: [
          { name: "Formule Midi (E+P+D)", price_cents: 1900, is_highlight: true },
          { name: "Formule Midi (E+P ou P+D)", price_cents: 1600 },
          { name: "Menu Soir Complet", price_cents: 3100 },
          { name: "Formule Soir (E+P ou P+D)", price_cents: 2450 },
          { name: "Plat du Jour Étudiant (Samedi)", price_cents: 100 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs (Desserts)",
        items: [
          { name: "Mousse au Chocolat maison", price_cents: 600 },
          { name: "Île Flottante aux pralines", price_cents: 550 },
          { name: "Tarte Tatin de la Butte", price_cents: 700 },
          { name: "Fromage Blanc au miel", price_cents: 500 },
          { name: "Baba au Rhum classique", price_cents: 750 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave / Boissons",
        items: [
          { name: "Verre de Vin Naturel", price_cents: 550 },
          { name: "Pinte de Bière Artisanale", price_cents: 700 },
          { name: "Limonade du Village", price_cents: 450 },
          { name: "Café Équitable", price_cents: 180 },
          { name: "Thé Bio Jardins de Gaïa", price_cents: 400 }
        ]
      }
    ]
  },
  description: "Le Temps des Cerises n’est pas qu’un restaurant, c’est une institution autogérée (SCOP) née en 1976 au cœur de la Butte-aux-Cailles. La cuisine y est franche, généreuse et ancrée dans le terroir français. On y vient pour l’atmosphère unique de village parisien, les discussions enflammées en terrasse et l’engagement social d’une équipe passionnée. Le lieu incarne l’esprit frondeur et solidaire de la Butte.",
  insider_tip: `• **Solidarité Butte** : Le samedi midi, le restaurant propose un plat à 1€ pour les étudiants, une tradition qui perdure avec panache.
  • **Le Must-Eat** : Le Super Cassoulet est une légende du quartier, généreux et authentique, parfait pour les soirées d'hiver.
  • **Timing Réserve** : Le lieu est extrêmement prisé des locaux. Les réservations téléphoniques sont limitées à 12h30 pour le midi et 19h30 pour le soir, soyez ponctuels !`,
  specials: {
    cuisine: ["Bar à vin"],
    drinks: ["Vin nature", "Bière artisanale"],
    must_eat: "Cuisine de bistrot. Super Cassoulet & Salade de Joue de Porc",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/le-temps-des-cerises/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Super Cassoulet & Salade de Joue de Porc",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default le_temps_des_cerises;
