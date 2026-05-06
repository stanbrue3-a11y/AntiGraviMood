import { SurgicalPlace } from "../../../type-definition";

export const thai_vien: SurgicalPlace = {
  id: "poi-thai-vien",
  slug: "thai-vien",
  name: "Thaï-Vien",
  category: "restaurant",
  subcategory: ['thaï'],
  location: {
    address: "56 Av. de Choisy, 75013 Paris, France",
    arrondissement: 13,
    lat: 48.8231024,
    lng: 2.3626473,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJbwkpCodx5kcRPh-93bI5vvw"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:30, 18:30 – 22:30 | mardi: Fermé | mercredi: 12:00 – 15:30, 18:30 – 22:30 | jeudi: 12:00 – 15:30, 18:30 – 22:30 | vendredi: 12:00 – 15:30, 18:30 – 22:30 | samedi: 12:00 – 15:30, 18:30 – 22:30 | dimanche: 12:00 – 15:30, 18:30 – 22:30",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://thai-vien.shop/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 18,
    dish_price: 14.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Salades (Thaï/Lao)",
        items: [
          { name: "Nem Thadeua (Salade de riz croustillant)", price_cents: 1250, is_highlight: true },
          { name: "Som Tam (Salade de papaye verte)", price_cents: 1300 },
          { name: "Laap au Bœuf (Salade de bœuf haché)", price_cents: 1450 },
          { name: "Raviolis frits aux Crevettes (x4)", price_cents: 850 },
          { name: "Nems au Poulet Maison (x4)", price_cents: 900 },
          { name: "Galettes de Poisson Thaï (Thot Man Pla)", price_cents: 1250 },
          { name: "Soupe Tom Yam Crevette (Épicée)", price_cents: 1300 }
        ]
      },
      {
        category_type: "main",
        display_label: "Spécialités de Bœuf (Plats)",
        items: [
          { name: "Riz au Bœuf Loc Lac (Ultra-tendre)", price_cents: 1400, is_highlight: true },
          { name: "Larme du Tigre (Bœuf grillé mariné)", price_cents: 1850 },
          { name: "Curry de Bœuf au Panang", price_cents: 1550 },
          { name: "Bœuf sauté au Poivre Vert", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Sautés au Wok & Curry (Plats)",
        items: [
          { name: "Pad Thaï Crevettes (Traditionnel)", price_cents: 1400, is_highlight: true },
          { name: "Canard au Curry Rouge & Fruits", price_cents: 1700 },
          { name: "Poulet sauté aux Noix de Cajou", price_cents: 1350 },
          { name: "Marmite de Fruits de Mer coco", price_cents: 1800 },
          { name: "Poisson Entier frit sauce aigre-douce", price_cents: 2250 },
          { name: "Tofu sauté aux Légumes Thaï", price_cents: 1250 }
        ]
      },
      {
        category_type: "other",
        display_label: "Riz & Nouilles (Accompagnements)",
        items: [
          { name: "Riz Gluant (Sticky Rice)", price_cents: 450 },
          { name: "Riz Nature Thaï", price_cents: 350 },
          { name: "Riz sauté aux Œufs & Légumes", price_cents: 700 },
          { name: "Nouilles Thaï sautées", price_cents: 750 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Boissons Asia",
        items: [
          { name: "Mangue Fraîche & Riz Gluant", price_cents: 900, is_highlight: true },
          { name: "Flan Thaïlandais au Taro", price_cents: 650 },
          { name: "Perles du Japon au Lait de Coco", price_cents: 600 },
          { name: "Bière Singha (Thaïlande)", price_cents: 650 },
          { name: "Thé Glacé Thaïlandais (Orange)", price_cents: 550, is_highlight: true },
          { name: "Lait de Soja Artisanal", price_cents: 400 },
          { name: "Infusion de Citronnelle Fraîche", price_cents: 450 }
        ]
      }
    ]
  },
  description: "Thaï-Vienne est un pilier de la gastronomie d’Asie du Sud-Est sur l’Avenue de Choisy, offrant un pont savoureux entre les traditions laotiennes et thaïlandaises. Réputé pour son Loc Lac d’une tendreté exemplaire et ses salades de riz croustillant (Nem Thadeua), le restaurant cultive une authenticité rare dans un décor sobre et soigné. La cuisine y est vive, épicée à la demande, et menée avec une exigence qui en fait l'une des adresses les plus respectées par la communauté locale depuis des années.",
  insider_tip: `• **Le Rite du Loc Lac** : C'est le plat phare de la maison. La viande est marinée avec une précision chirurgicale pour fondre littéralement en bouche.
  • **Le Secret du Riz Croustillant** : Leur Nem Thadeua est une explosion de textures. Demandez-le ’bien relevé' pour retrouver les saveurs authentiques du Laos.
  • **Fraîcheur Drink** : Le Thé Glacé Thaï (couleur orange) est préparé maison et constitue le parfait contrepoint aux épices des currys rouges.`,
  specials: {
    cuisine: ["Thaïlandais"],
    drinks: ["Singha", "Thé Glacé Thaï"],
    must_eat: "Cuisine thaïlandaise. Loc Lac & Nem Thadeua",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/thai-vien/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.4,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine thaïlandaise. Loc Lac & Nem Thadeua",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default thai_vien;
