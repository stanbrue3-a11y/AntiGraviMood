import { SurgicalPlace } from "../../../type-definition";

export const lao_viet: SurgicalPlace = {
  id: "poi-lao-viet",
  slug: "lao-viet",
  name: "Lao Viet",
  category: "restaurant",
  subcategory: ['vietnamien'],
  location: {
    address: "24 Bd Masséna, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.823303,
    lng: 2.3738934,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJgSp3yi9y5kcRfBlZSWjLzbk"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 18:00 – 22:00 | mardi: Fermé | mercredi: 12:00 – 14:30, 18:00 – 22:00 | jeudi: 12:00 – 14:30, 18:00 – 22:00 | vendredi: 12:00 – 14:30, 18:00 – 22:00 | samedi: 12:00 – 14:30, 18:00 – 22:00 | dimanche: 12:00 – 14:30, 18:00 – 22:00",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://restaurantlaoviet.com/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 14.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Salades & Entrées (Lao/Viet)",
        items: [
          { name: "Nem Lao (Riz croustillant à la laotienne)", price_cents: 1050, is_highlight: true },
          { name: "Pha Khung (Salade de crevettes grillées)", price_cents: 1150 },
          { name: "Goi Cuon (Rouleaux de printemps crevettes)", price_cents: 850 },
          { name: "Saucisses Laotiennes à la citronnelle", price_cents: 950 },
          { name: "Salade de Papaye au Crabe Salé", price_cents: 950 },
          { name: "Raviolis aux Crevettes Vapeur (x4)", price_cents: 850 },
          { name: "Nem Nuong (Boulettes de porc grillées)", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Mijotés & Curry (Plats)",
        items: [
          { name: "Mok Pa (Poisson à la mode Lao)", price_cents: 1550, is_highlight: true },
          { name: "Curry au Coco & Poulet (Rouge ou Vert)", price_cents: 1400 },
          { name: "Gambas sautées au Poivre Vert", price_cents: 1750 },
          { name: "Bœuf séché à la Citronnelle", price_cents: 1450 },
          { name: "Riz au Porc Caramel Tradition", price_cents: 1350 },
          { name: "Aubergines sautées au Tofu", price_cents: 1250 }
        ]
      },
      {
        category_type: "main",
        display_label: "Grillades & Nouilles (Plats)",
        items: [
          { name: "Neua Isan (Bœuf grillé citronnelle)", price_cents: 1450, is_highlight: true },
          { name: "Bo Bun Cha Gio (Bœuf & Nems)", price_cents: 1250 },
          { name: "Banh Canh (Soupe de nouilles Lao)", price_cents: 1350 },
          { name: "Pâtes de Riz sautées aux Crevettes", price_cents: 1400 },
          { name: "Bo Lui (Bœuf à rouler soi-même)", price_cents: 1850 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules & Menus",
        items: [
          { name: "Formule Midi (E+P)", price_cents: 1200, is_highlight: true },
          { name: "Menu Découverte Complet", price_cents: 2200 },
          { name: "Menu Végétarien (E+P+D)", price_cents: 1450 },
          { name: "Menu Express (Livraison)", price_cents: 3000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Fraîcheur & Cave",
        items: [
          { name: "Flan au Lait de Coco Maison", price_cents: 650 },
          { name: "Perles de Coco (x3)", price_cents: 600 },
          { name: "Beignets de Bananes Flambés", price_cents: 750 },
          { name: "Bière Beerlao (Laos)", price_cents: 700, is_highlight: true },
          { name: "Thé Glacé Maison à la Menthe", price_cents: 450 },
          { name: "Jus de Mangue Fraîche", price_cents: 550 },
          { name: "Verre de Vin Rosé (Côtes de Provence)", price_cents: 600 }
        ]
      }
    ]
  },
  description: "Lao Viet est une perle discrète située sur le Boulevard Masséna, offrant un voyage culinaire aux confins du Laos et du Vietnam. Ce restaurant familial se distingue par la finesse de ses épices et l’authenticité de ses recettes, notamment le Nem Lao (riz croustillant) qui est considéré comme l’un des meilleurs de Paris. L’accueil est chaleureux, presque comme à la maison, et la cuisine, généreuse et parfumée, séduit aussi bien les néophytes que les fins connaisseurs des saveurs d'Asie du Sud-Est.",
  insider_tip: `• **Le Rite du Nem Lao** : Ne le mangez pas seul, c'est un plat de partage. Mélangez bien le riz croustillant avec la menthe et les herbes fraîches fournies pour un équilibre parfait.
  • **Spécialité Rare** : Le Mok Pa (poisson cuit en papillote de feuille de bananier) est une rareté laotienne qui demande une maîtrise parfaite de la vapeur et des herbes aromatiques.
  • **Le Secret des Habitués** : La formule midi à 12€ est un secret jalousement gardé par les travailleurs du quartier. Arrivez tôt, le restaurant se remplit vite de locaux.`,
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Beerlao", "Thé Glacé Maison"],
    must_eat: "Cuisine vietnamienne. Nem Lao & Mok Pa",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/lao-viet/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine vietnamienne. Nem Lao & Mok Pa",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default lao_viet;
