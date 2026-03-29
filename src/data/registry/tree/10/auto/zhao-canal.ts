import { SurgicalPlace } from "../../../type-definition";

export const zhao_canal: SurgicalPlace = {
  id: "poi-zhao-canal",
  slug: "la-taverne-de-zhao-canal",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "chill"],
  location: {
    address: "49 Rue des Vinaigriers, 75010 Paris, France",
    arrondissement: 10,
    lat: 48.8731249,
    lng: 2.3603188,
    nearest_metro: "Jacques Bonsergent",
    metro_lines: [5],
    google_id: "ChIJ7RFFUQxu5kcRGvfPZPttgkQ"
  },
  moods: {
    chill: 80,
    festif: 20,
    culturel: 60
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 22:30 | mardi: 12:00 – 14:30, 19:00 – 22:30 | mercredi: 12:00 – 14:30, 19:00 – 22:30 | jeudi: 12:00 – 14:30, 19:00 – 22:30 | vendredi: 12:00 – 14:30, 19:00 – 22:30 | samedi: 12:00 – 22:30 | dimanche: 12:00 – 22:30",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/canalsaintmartin/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Raviolis (Jiaozi)",
        items: [
          { name: "Salade de Tofu frité", price_cents: 480 },
          { name: "Algues marinées au sésame", price_cents: 450 },
          { name: "Pommes de terre à la vinaigrette de Xi'an", price_cents: 420 },
          { name: "Oreilles de porc pimentées", price_cents: 550 },
          { name: "Concombre frappé à l'ail", price_cents: 450 },
          { name: "Raviolis Porc & Chou (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price_cents: 1200 },
          { name: "Raviolis Végétariens (8 pièces)", price_cents: 1150 },
          { name: "Assiette dégustation (12 pièces)", price_cents: 1600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Burgers Chinois (Mo's)",
        items: [
          { name: "Mo au Porc mijoté", price_cents: 650, description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price_cents: 700 },
          { name: "Mo au Canard laqué", price_cents: 750 },
          { name: "Mo Végétarien", price_cents: 600 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats (Biang Biang)",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price_cents: 1280, description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price_cents: 1150 },
          { name: "Biang Biang Poulet croustillant", price_cents: 1300 },
          { name: "Biang Biang Tomate & Œuf", price_cents: 1080, description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price_cents: 1450 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Douceurs Maison",
        items: [
          { name: "Mochi glacé (2)", price_cents: 450 },
          { name: "Perles de coco", price_cents: 480 },
        ]
      }
    ]
  },
  description: "C'est ici que tout a commencé en 2011. La Taverne de Zhao Canal Saint-Martin est le berceau parisien des nouilles Biang Biang. Avec ses tables en bois et son ambiance factory ultra-chill, c'est l'adresse parfaite pour une pause authentique loin de l'agitation du boulevard.",
  insider_tip: "• Arrivée conseillée avant 19h30 pour éviter l'attente car la salle est petite et très prisée des habitués du Canal.\n• Demandez le Mo au porc en entrée, c'est le mariage parfait avec les nouilles pimentées.\n• Les nouilles Biang Biang sont tirées à la main devant vous : un spectacle qui garantit une fraîcheur absolue.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Mo Porc",
  },
  images: {
    hero: "AU_ZVEGao1y5UM45HVLhjRuDMBRKCixoI3cfn6YEDfx6t0DNKepHMZwskvMtDT3x3Xwc-kab_eo2qzGOVMntJJh2-2b0aat6fj-LTXXd4zmBmayKC2HX7JrUM9bEAgW51Ja56OsYRu2IV-9PWIDGBUPvBHZDjBsraBsUszWRnSumXer827G3oi9FT2wReyuhos8dNHXVKm3VE6vKkdDnCBI0s27R-0IxxiNkG49gpPfmqkbtBg4EojHBRsJgrOZTWN8UCMkzrowmBCvBkzRjg30GD49yKeUyDqSBrVu1YpO4xpc7ww",
    gallery: [
      "AU_ZVEEDquQ7jS7RpSITcXEMwTIfwbzW7rDvSUixzs4HyPtZzQL4sXjAio7346q9_Qatoj3CzjlYh88T7R67zAk_lYwBN394kD8mYit6exDmNlAi0e_WMMfesMnq9YwhbA6Tn0aSfCHSB2zcM6MiO_2vYGQnnvUhPD4xlNZhdq2ShIpcZykmN_Z0jGOv7COWYIx19j7nGUH6x1JrOZsj8i_tTipsJUnWjEJ-EEyrPkEp-X926dbqRtYCASIOIMp69UsM6xvsFM2XBJcQchFIFCyPkQvw28V8P-kGK-47sp8zmiGiYQ",
      "AU_ZVEFm2qbNG54JIya7ZfsdeR1LC1RJT6gi1qe73JHF8mIuxvsDVyQZzXmlThijRrU5oTYREb2o_G-x1BCQxAeMiU2c9cJgDk-AXPf_pGs9TIWEuz-g7J2cYRFhoQNlFK34BQKzJpojoki5rSldHXh5ITF-xLxAiq13estx0RFlsi1dMTkY4JRw_zVXxLb3yh6R_xHxI0tpEru1RShYnD2TMFzQcyeOeattjrKiuSAcj4pKYeQr_-wQ_YQhUwjG9A2FoozC7Dp0YFsN9Xcg1by89PTyyQSJaYbtsHYEZVrfv8hgDQg9R3dEN0Xh96ezuFDkmQVOga8_OqhCd_A0x8tYDY_Y3Wysat2JJ3zyCQKi6FjJJp057hEeI-muWWn5H5qgEZhXj_Ew-cBlSOg1x82Oo8-kkQZ-0gD540SErlkJmJNjfChC-8QLbBXw6mk-DaVo"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default zhao_canal;
