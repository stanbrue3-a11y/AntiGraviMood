import { SurgicalPlace } from "../../../type-definition";

export const zhao_grands_boulevards: SurgicalPlace = {
  id: "poi-zhao-grands-boulevards",
  slug: "la-taverne-de-zhao-grands-boulevards",
  name: "La Taverne de Zhao",
  category: "restaurant",
  subcategory: ["chinois", "noodles", "biang-biang", "authentique", "vibrant"],
  location: {
    address: "166 Rue Montmartre, 75002 Paris, France",
    arrondissement: 2,
    lat: 48.8705055,
    lng: 2.3430087,
    nearest_metro: "Grands Boulevards",
    metro_lines: [8, 9],
    google_id: "ChIJd95Puj1u5kcR1lKZc0aDuWU"
  },
  moods: {
    chill: 30,
    festif: 70,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 22:30 | mardi: 12:00 – 22:30 | mercredi: 12:00 – 22:30 | jeudi: 12:00 – 22:30 | vendredi: 12:00 – 23:00 | samedi: 12:00 – 23:00 | dimanche: 12:00 – 23:00",
    reservation_policy: "sans_resa",
    terrace: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://zhaogroupe.com/montmartre/",
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
  description: "Située sur l'artère vibrante de la rue Montmartre, cette taverne est le point de ralliement des amateurs de Biang Biang en plein cœur des Grands Boulevards. L'ambiance y est électrique et urbaine, parfaite pour un déjeuner de quartier rapide ou un dîner avant une sortie cinéma dans le 2e.",
  insider_tip: "• Arrivée conseillée dès 12h pour éviter le rush des bureaux alentours qui s'y pressent chaque midi.\n• Le service est ultra-rapide, idéal pour un repas de haute qualité chrono en main.\n• Ne repartez pas sans avoir goûté les Oreilles de porc pimentées, un délice croquant typique de Xi'an.",
  specials: {
    cuisine: ["Chinoise", "Xi'an", "Nouilles"],
    must_eat: "Cuisine chinoise. Biang Biang Poulet & Mo Bœuf",
  },
  images: {
    hero: "AU_ZVEFlpxXQsRa7ryMkwNm1c3r5Rw2iLrgZo5G4SjLNmfEbpufKDJtUYF5NGgBrBF0kz0_arkSvA0Br9IlG1wIB6gsE3NVFxo2opbtAQR6k6xigfrY_Iz-yqdHjNXqBDPVor0u_w_iMrE7rjaCtZI4VHo4ldNeUFYcnVj_M0pB-tMhQrz2v9TY9RCjyE7CDecUIuBMQFQ2zITKOjcyzq4NUIYr-0kJwng4H6XXGmPsXjnfU5jbR1pj5cpBqISFYjsENcI8zczcr6eMo04oINygUYNee-tpVDHNj-3Sl_SwIbH0N0w",
    gallery: [
      "AU_ZVEFNSq4HE9fsBADIF5X5kfKNz6V-a0d-vSy8Tl__WW35ejZnOiru6dfgcsqgphA3JJff0u3Jtd4b_9tHq8ZT8GN6sBrJIDBD9I-MTzdoZRLsFl5S2Yhg1mVc_kTtdff9D34KNA5iN_9w91i79koQcebL3KhJm39N4vrn2xzXjMkefNjd_V2lZ3uU2skwGGzM3X16gPiASOv1eaMzCBRz4cvCshufhO7ZdozhPUhuvtU4xWS0cwZZbeWiomv0DkzRwK4u96qar7xFUenVA77sS9b88WuUuKDjmistfr0S6BgX8A",
      "AU_ZVEFE5dGMCGUbWJm3VxUeU8vbe2eJA8v_kzXD3NunvF_4isyqpEFe7dN9w3v8WRr65aGMnm73xffneH1U--eJx2LWJ0XWseU7QvRjDiZbhYgig0VqvlPVD842T_A3lZfaIWfVnrTJZWNd1zHi3qT8wPododj0OlRrXi4CbNGdFCrj43QvEsdqJ4LQuQef5QmTAGRsg2_YnkpBj_WRqN14bcS2682n7YetjCLOd5YDY4AdlH2U2GLmTLrwCBjbDX2NAihy6tASqQBiPnNcjQ6dP2tBw7nCM4IHaomZeQ3crotGzGveGDmlxdm5eYLHtzujjndqNqNPG_G7OlfO93wCCzE7rqMtcgOxXhY32hpdgKCaCOOBtGSK0DzXHEnEHZuTBhL2UjesLCxF8kIIDI_flUIzlFw6apU-aOcp1ywNVI9s-TmCZ4HkRw1AweLItdx6"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default zhao_grands_boulevards;
