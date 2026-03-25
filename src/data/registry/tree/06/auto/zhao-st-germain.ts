import { SurgicalPlace } from "../../../type-definition";

export const zhao_st_germain: SurgicalPlace = {
  id: "poi-zhao-st-germain",
  slug: "la-taverne-de-zhao-saint-germain",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "chic"],
  location: {
    address: "82 rue Mazarine, 75006 Paris, France",
    arrondissement: 6,
    lat: 48.8538648, 
    lng: 2.3382294,
    nearest_metro: "Odéon",
    metro_lines: [4, 10],
    google_id: "ChIJ9UILDIlx5kcR3sL8aFTmOXE"
  },
  moods: {
    chill: 40,
    festif: 30,
    culturel: 80
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 22:30 | mardi: 12:00 – 22:30 | mercredi: 12:00 – 22:30 | jeudi: 12:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/stgermain/",
      label: "VOIR LA CARTE"
    }
  },
  pricing: {
    avg_budget: 15,
    is_free: false,
    last_updated: "2026-03-22",
    menu_items: [
      {
        category: "Entrées & Raviolis (Jiaozi)",
        items: [
          { name: "Salade de Tofu frité", price: "4.80€" },
          { name: "Algues marinées au sésame", price: "4.50€" },
          { name: "Pommes de terre à la vinaigrette de Xi'an", price: "4.20€" },
          { name: "Oreilles de porc pimentées", price: "5.50€" },
          { name: "Concombre frappé à l'ail", price: "4.50€" },
          { name: "Raviolis Porc & Chou (8 pièces)", price: "12.00€" },
          { name: "Raviolis Poulet & Champignon (8 pièces)", price: "12.00€" },
          { name: "Raviolis Végétariens (8 pièces)", price: "11.50€" },
          { name: "Assiette dégustation (12 pièces)", price: "16.00€" }
        ]
      },
      {
        category: "Burgers Chinois (Mo's)",
        items: [
          { name: "Mo au Porc mijoté", price: "6.50€", description: "Pain pita croustillant" },
          { name: "Mo au Bœuf au curry", price: "7.00€" },
          { name: "Mo au Canard laqué", price: "7.50€" },
          { name: "Mo Végétarien", price: "6.00€" }
        ]
      },
      {
        category: "Les Plats (Biang Biang)",
        items: [
          { name: "Biang Biang au Bœuf mijoté", price: "12.80€", description: "Nouilles larges maison, épices" },
          { name: "Biang Biang au Porc haché", price: "11.50€" },
          { name: "Biang Biang Poulet croustillant", price: "13.00€" },
          { name: "Biang Biang Tomate & Œuf", price: "10.80€", description: "Option végétarienne iconique" },
          { name: "Biang Biang Canard laqué", price: "14.50€" }
        ]
      },
      {
        category: "Desserts & Douceurs Maison",
        items: [
          { name: "Mochi glacé (2)", price: "4.50€" },
          { name: "Perles de coco", price: "4.80€" },
        ]
      }
    ]
  },
  description: "À deux pas de l'Odéon, cette taverne est l'une des plus esthétiques du groupe. Inaugurée en juillet 2024, elle s'intègre au chic du 6e arrondissement tout en conservant l'âme brute de Xi'an. Le lieu est idéal pour un dîner élégant, sublimant l'art des nouilles Biang Biang dans un cadre épuré.",
  insider_tip: "• C'est l'adresse la plus 'cosy' de la Rive Gauche : idéale pour faire découvrir la cuisine chinoise authentique dans un cadre soigné.\n• Leur thé au jasmin est servi dans de jolies théières traditionnelles, parfait pour accompagner la puissance des épices.\n• Ne ratez pas l'assiette de raviolis dégustation pour goûter aux trois farces différentes faites maison.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    must_eat: "Cuisine chinoise. Biang Biang Bœuf & Raviolis maison",
  },
  images: {
    hero: "ATCDNfXdGYfQGiX8FPue34TiuIxcFA8E_wd7Ny9VW452zAL_wvBbansf7lGINuRS462XO_ez3LUK-5NtTw-To17148F6zGGJ7Ca4MUPm1X7k-ZeKHNShJZqYy9kr4gHgpVgomCZ8SCP6gdfw26Igx9O5uHxAZmbbhvVS1keA3hCEWvuLsjIJ4D2-hp_4LW8azNtih605CYE8gOgRkidR29Q3BPYssHwIg7zAMtLhvO8tD1zW-PXL9lY596gI0QtNR0g3f-dUKaI1UDFb3s-ubvK6ytXUXQpje5JChXsaXJBR3Fj55A",
    gallery: [
      "ATCDNfXlaW_WVgRD48bob8NAXDnrclcwvovZPur7OTXYRKVSBvLiOsnhXzY4HHfi_cKeBJ4QfoWvQK1oX5AC5wS9f2Du_t5GOay453MyVAQKejnnuP0EVSSdb00fcyGPUlPfXp8uzPzKCRE7eJWxsoMXwG_cwoXHyM4p0yb1QXXgiEQU0B1xD4DImKPw25Gi7Vf3I74j__1ZnuYR7EjwLIE_DnCE6cWtBZRbIUos5a1y7sDir3tgdfDaUbsLPPOstsf1XRhr2et6WVy8LoTbfqDRRI6V4xnthyzxXEYKI7rD1zv37g",
      "ATCDNfXPIreGXx8VVUjSEJzq4BFkih9TLz6Yt1wvt2eZJBMsSf2cVxcuYyz6SZXbbzmabub4RyeOmA3bGxcrDa495FqO1-PO3_omfzwVyrlNyHKyICMDMBrfWWbT_4y-Pvl9PJj4Fzz-f9mvHVlnG1DnbFvqNQmT7whuC2pVG59A6ObkuAXMZ6uHFKQ4zSx-Un1GT1EfmRnR8moURqk9K7xodyXt6pWvepoOyuGjvSL_WABTpFqR6BUQAM7W7aQvUKgHkoLswwYyOCigRZjayGVNaOW8_yoUHfmQOH5VNsVZsHFD2lOb2tvKabQxsyQtM-yDS0QTwUZYTA2GeTMSmViHYwEHcQ-jT3iMWARccTUD-3gwtKLUW8mm8obcSgLsaqcjoDywUJ98-JlAJiDRmwbM_o64dkMnnR9vQ_NRijNBaQEwsidNCdW2ldRi2Y8C5rUl"
    ]
  },
  verified: true,
  google_rating: 4.9
};

export default zhao_st_germain;
