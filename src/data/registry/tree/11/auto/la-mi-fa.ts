import { SurgicalPlace } from "../../../type-definition";

export const la_mi_fa: SurgicalPlace = {
  "id": "poi-la-mi-fa",
  slug: "la-mi-fa",
  "name": "La Mi-Fa",
  category: "restaurant",
  subcategory: ["afro", "bistrot"],
  location: {
    address: "29 Rue du Chemin Vert, 75011 Paris",
    arrondissement: 11,
    lng: 2.372589,
    nearest_metro: "Richard Lenoir",
    metro_lines: [5],
    google_id: "ChIJZ3U2S0hx5kcR0Q2nQ0qH2Q"
  },
  moods: {
    chill: 70,
    festif: 50,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "mardi-samedi: 12:00–14:30, 19:30–22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.lamifa.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    avg_budget: 20,
    is_free: false,
    dish_price: 14,
    menu_items: [
      {
        category_type: "main",
        display_label: "Saveurs d'Afrique",
        items: [
          { "name": "Poulet Yassa", price_cents: 1400 },
          { "name": "Mafé de bœuf", price_cents: 1500 }
        ]
      }
    ]
  },
  description: "La Mi-Fa est une adresse chaleureuse qui célèbre la richesse de la cuisine africaine avec une touche moderne. Dans un cadre convivial et coloré, on y déguste des classiques comme le Yassa ou le Mafé, préparés avec des produits frais et beaucoup de cœur. Une véritable invitation au voyage au cœur du 11ème.",
  expert_catchline: "L'escale gourmande et colorée des saveurs africaines authentiques.",
  insider_tip: "Leur jus de bissap maison est excellent. Idéal pour un dîner décontracté entre amis.",
  specials: {
    cuisine: ["Afro"],
    must_eat: "Cuisine Africaine. Poulet Yassa & Jus de Bissap.",
  },
  real_talk: {
    text: "Une adresse chaleureuse aux saveurs authentiques.",
    must_eat: "Cuisine Africaine. Poulet Yassa & Jus de Bissap.",
    le_secret: "Les recettes sont transmises de génération en génération.",
    le_son: "Musique afro entraînante.",
    le_must: "La générosité des plats."
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/la-mi-fa/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.6
};

export default la_mi_fa;
