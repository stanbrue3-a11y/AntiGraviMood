import { SurgicalPlace } from "../../../type-definition";

export const ngoc_xuyen_saigon: SurgicalPlace = {
  id: "poi-ngoc-xuyen-saigon",
  slug: "ngoc-xuyen-saigon",
  name: "Ngoc Xuyen Saigon",
  category: "restaurant",
  subcategory: ['vietnamien', 'français'],
  location: {
    address: "4 Rue Caillaux, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8229203,
    lng: 2.3617349,
    nearest_metro: "Tolbiac",
    metro_lines: [7],
    google_id: "ChIJA0_NBodx5kcROe2nE0DePAw"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "Non renseigné",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://ngocxuyensaigon.net/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 20,
    dish_price: 17.50,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Signatures",
        items: [
          { name: "Nems au Poulet (Chả giò)", price_cents: 850, is_highlight: true },
          { name: "Rouleaux de Printemps au Bœuf (Bò cuốn)", price_cents: 850 },
          { name: "Bánh cuốn (Raviolis vapeur porc/champignons)", price_cents: 850, is_highlight: true },
          { name: "Gỏi cuốn (Rouleaux de printemps crevettes)", price_cents: 850 },
          { name: "Salade de Papaye verte (Som Tam style)", price_cents: 950 },
          { name: "Ailes de Poulet frites au Nuoc Mam", price_cents: 900 }
        ]
      },
      {
        category_type: "main",
        display_label: "Soupes Royales & Légendaires (Plats)",
        items: [
          { name: "Bun Bo Hue (Soupe de Hué - Bœuf & Porc)", price_cents: 1750, is_highlight: true },
          { name: "Phở Đặc Biệt (Phở Spécial Bœuf complet)", price_cents: 1700, is_highlight: true },
          { name: "Phở Bœuf Cru / Cuit", price_cents: 1700 },
          { name: "Phở au Poulet Fermier", price_cents: 1700 },
          { name: "Soupe Saïgonnaise (Mì/Hủ tiếu)", price_cents: 1750 },
          { name: "Bo Bun Classique (Bœuf & Nems)", price_cents: 1700 }
        ]
      },
      {
        category_type: "other",
        display_label: "Spécialités de Saison & Hebdomadaires",
        items: [
          { name: "Mardi : Bun Mang Ga (Poulet & Bambou)", price_cents: 1750 },
          { name: "Mercredi : Banh Canh Cua (Soupe Crabe & Pied de Porc)", price_cents: 1900 },
          { name: "Jeudi : Bun Rieu (Vermicelles au Crabe)", price_cents: 1850 },
          { name: "Ven/Sam : Bun Mam (Soupe Saumure de Poisson)", price_cents: 1900, is_highlight: true },
          { name: "Dimanche : Curry de Poulet à la Vietnamienne", price_cents: 1750 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Riz Traditonnels",
        items: [
          { name: "Com Tam Ba Bao (Riz aux 3 Trésors)", price_cents: 1750, is_highlight: true },
          { name: "Com Ga (Riz au poulet grillé)", price_cents: 1450 },
          { name: "Bœuf au Gingembre & Riz blanc", price_cents: 1650 },
          { name: "Porc au Caramel à la mode de Hué", price_cents: 1550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Milkshakes",
        items: [
          { name: "Haricot Rouge Lait de Coco (Chè đậu đỏ)", price_cents: 750 },
          { name: "Trois Couleurs (Chè ba màu)", price_cents: 750 },
          { name: "Délice de Maïs chaud", price_cents: 800 },
          { name: "Milkshake Corossol", price_cents: 1000, is_highlight: true },
          { name: "Milkshake Durian (L’authentique)", price_cents: 1000 },
          { name: "Milkshake Avocat", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons d’Asie",
        items: [
          { name: "Jus de Sucre de Canne (Pressé minute)", price_cents: 550, is_highlight: true },
          { name: "Café Filtré Vietnamien (Lait concentré)", price_cents: 550 },
          { name: "Bière Saigon / 33 Export", price_cents: 600 },
          { name: "Thé au Jasmin (Théière)", price_cents: 450 },
          { name: "Jus de Coco avec pulpe", price_cents: 500 }
        ]
      }
    ]
  },
  description: "Ngoc Xuyen Saigon est une institution du quartier Tolbiac, célèbre pour la pureté de ses bouillons et l’authenticité de ses recettes familiales. Ici, pas de chichis, on vient pour la maîtrise technique du Pho et les spécialités quotidiennes qui attirent les connaisseurs de tout Paris. Une adresse où le temps semble s'arrêter devant un bol fumant.",
  insider_tip: "• **Jus de Canne** : Ils le pressent minute, c’est le compagnon idéal pour équilibrer le piment du Bun Bo Hue.\n• **Calendrier Soupe** : Venez le jeudi pour leur vermicelle au crabe, une rareté à Paris exécutée à la perfection.\n• **Early Bird** : Fermeture à 17h ! C’est une adresse de déjeuner, ne prévoyez pas d’y dîner.",
  specials: {
    cuisine: ["Vietnamien"],
    drinks: ["Soft"],
    must_eat: "Cuisine française traditionnelle. Pho Tonkinois & Jus de Sucre de Canne",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ngoc-xuyen-saigon/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française traditionnelle. Pho Tonkinois & Jus de Sucre de Canne",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default ngoc_xuyen_saigon;
