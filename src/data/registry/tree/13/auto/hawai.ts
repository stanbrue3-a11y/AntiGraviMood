import { SurgicalPlace } from "../../../type-definition";

export const hawai: SurgicalPlace = {
  id: "poi-hawai",
  slug: "hawai",
  name: "Hawai",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "87 Av. d’Ivry, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.824534,
    lng: 2.362806,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJR1CW6odx5kcRYCbHwiO_WqE"
  },
  moods: {
    chill: 60,
    festif: 40,
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
      url: "https://maps.google.com/?cid=11626815548322948704",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 15,
    dish_price: 11.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Traiteur & Entrées (À la pièce)",
        items: [
          { name: "Nems au Porc mythiques (x6)", price_cents: 790, is_highlight: true },
          { name: "Rouleaux de Printemps (x2)", price_cents: 660 },
          { name: "Samoussas au Bœuf (x4)", price_cents: 700 },
          { name: "Bánh Cuốn (Vapeur Viet)", price_cents: 770 },
          { name: "Beignets de Crevettes (x5)", price_cents: 850 },
          { name: "Bouchées à la Vapeur (Assortiment)", price_cents: 800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Soupes & Bouillons (Plats)",
        items: [
          { name: "Soupe de Raviolis aux Crevettes", price_cents: 1100, is_highlight: true },
          { name: "Phở Classique au Bœuf", price_cents: 1050 },
          { name: "Soupe de Nouilles au Poulet", price_cents: 1000 },
          { name: "Mì Hoành Thánh (Soupe Wonton)", price_cents: 1100 },
          { name: "Soupe Spéciale Hawai (Mixte)", price_cents: 1250 }
        ]
      },
      {
        category_type: "main",
        display_label: "Composés & Satiété (Plats)",
        items: [
          { name: "Bo Bun Classic (Bœuf & Nems)", price_cents: 890, is_highlight: true },
          { name: "Riz aux Trois Trésors (Porc, Œuf, Viande)", price_cents: 1150 },
          { name: "Nouilles Sautées au Poulet", price_cents: 1050 },
          { name: "Riz Cantonais Hawai (Complet)", price_cents: 950 },
          { name: "Bœuf aux Oignons & Riz blanc", price_cents: 1080 },
          { name: "Poulet Citronnelle & Riz", price_cents: 1050 }
        ]
      },
      {
        category_type: "other",
        display_label: "Vitrine Traiteur (Spécialités)",
        items: [
          { name: "Porc Laqué au Miel (Portion)", price_cents: 950 },
          { name: "Canard Laqué à la découpe", price_cents: 1150 },
          { name: "Travers de Porc Sel & Poivre", price_cents: 1000 },
          { name: "Salade de Choux au Poulet", price_cents: 650 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons",
        items: [
          { name: "Perles de Coco Maison", price_cents: 450 },
          { name: "Gelée aux Herbes & Lait de Coco", price_cents: 550 },
          { name: "Bière Tsingtao (33cl)", price_cents: 450 },
          { name: "Limonade Artisanal (Asian Style)", price_cents: 350 },
          { name: "Thé Vert Chaud (Pot)", price_cents: 400 },
          { name: "Jus de Coco avec pulpe", price_cents: 450 },
          { name: "Lait de Soja Froid", price_cents: 300 }
        ]
      }
    ]
  },
  description: "Hawaï est la cantine de référence de l’Avenue d’Ivry, un pilier du quartier chinois qui ne désemplit jamais. Si la salle est modeste, sa vitrine traiteur est une légende urbaine dans le 13e : on y vient de tout Paris pour ses nems ultra-croustillants et son porc laqué brillant. C’est l’essence même de la ’gastronomie de trottoir’ : rapide, efficace, et d’une régularité métronomique dans la qualité. Une expérience brute et authentique de la vie de quartier.",
  insider_tip: `• **Le Graal du Nem** : Leurs nems sont considérés par les locaux comme faisant partie du top 3 du quartier. Prenez-en une portion en plus, ils se réchauffent parfaitement.
  • **Le Combo Traiteur** : Ne vous limitez pas à la carte assis ; regardez ce qui vient de sortir de la rôtisserie en vitrine, c'est là que se cachent les meilleures pièces de canard.
  • **Efficacité Maximale** : Le service est l’un des plus rapides de l’arrondissement. Idéal pour un déjeuner ’flash' avant de faire ses courses chez Tang Frères juste à côté.`,
  specials: {
    cuisine: ["Français"],
    drinks: ["Bière Tsingtao", "Jus de Coco", "Thé Vert"],
    must_eat: "Cuisine Traiteur. Nems au Porc & Bo Bun Classic",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/hawai/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine Traiteur. Nems au Porc & Bo Bun Classic",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default hawai;
