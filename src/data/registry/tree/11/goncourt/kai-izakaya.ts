import { SurgicalPlace } from '../../../type-definition';

export const kai_izakaya: SurgicalPlace = {
    id: "poi-kai-izakaya",
    name: "Kai Izakaya",
    slug: "kai-izakaya",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "13 Rue Louis Bonnet",
        arrondissement: 11,
        lat: 48.868079,
        lng: 2.373512,
        nearest_metro: "Belleville",
        metro_lines: [2, 11],
        google_id: "ChIJY34h6X1t5kcR73--rdkG6Uw"
    },
    moods: {
        chill: 80,
        festif: 40,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mar-Dim: 12:00–15:00, 19:00–23:00 (Fermé Lun)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.thefork.fr/restaurant/kai-izakaya-r835251",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 17,
        is_free: false,
        pint_price: 6,
        wine_glass: 0,
        coffee_price: 3.50,
        dish_price: 14.90, // MANUAL: Udon signature
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Kai Izakaya 2025 Standard (Asian Tapas & Brunch)
            {
                category_type: "main",
                display_label: "Tapas & Small Plates",
                items: [
                    { name: "Takoyaki (x4)", price_cents: 790, description: "Beignets de poulpe japonais." },
                    { name: "Gyoza (Poulet ou Veggie)", price_cents: 700 },
                    { name: "Karaage", price_cents: 950, description: "Poulet frit croustillant façon japonaise." },
                    { name: "Agedashi Tofu", price_cents: 900 },
                    { name: "Arabiki", price_cents: 790, description: "Saucisses japonaises grillées." },
                    { name: "Ebi Fry", price_cents: 900 },
                    { name: "Salade de Choux", price_cents: 690 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats (Donburi & Udon)",
                items: [
                    { name: "Udon Carbonara", price_cents: 1490, description: "La fusion culte de la maison." },
                    { name: "Udon Satay Coco", price_cents: 1490 },
                    { name: "Donburi Karaage", price_cents: 1390 },
                    { name: "Donburi Dan Dan", price_cents: 1390 },
                    { name: "Soupe Satay Veggie", price_cents: 1390 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Brunch Vibes",
                items: [
                    { name: "Croffle Matcha", price_cents: 890, description: "Hybride croissant-gaufre, glace matcha." },
                    { name: "Mango Sticky Rice", price_cents: 950 },
                    { name: "Taiyaki Anko", price_cents: 600 },
                    { name: "Daifuku Azuki", price_cents: 690 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/kai-izakaya/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.7,
    description: "Kai Izakaya est une adresse hybride et décontractée où le Japon rencontre des saveurs street-food mondiales. Connue pour ses Udon créatives (dont une version carbonara mémorable) et ses desserts fusion comme le Croffle au Matcha, c’est le spot parfait pour un brunch asiatique ou un dîner de tapas à partager.",
    insider_tip: "Ne repartez pas sans avoir goûté le Croffle au Matcha, c’est leur grande spécialité sucrée. Pour les plats, l'Udon Carbonara est une curiosité technique qui vaut le détour.",
    expert_catchline: "L’art du tapas asiatique et du brunch créatif à Belleville.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Thés Matcha", "Sake"],
        must_eat: "Cuisine japonaise. L’Udon Carbonara.",
        must_drink: "Un Matcha Latte bien préparé."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. L’Udon Carbonara.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
