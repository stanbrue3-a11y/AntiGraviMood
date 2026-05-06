import { SurgicalPlace } from "../../../type-definition";

export const mosugo: SurgicalPlace = {
    id: "poi-mosugo",
    name: "MOSUGO",
    slug: "mosugo-mory-sacko-14",
    category: "restaurant",
    subcategory: ['street-food'],
    location: {
        address: "22 Rue Raymond Losserand, 75014 Paris",
        arrondissement: 14,
        lat: 48.8357541,
        lng: 2.321251,
        nearest_metro: "Gaîté",
        metro_lines: [13],
        google_id: "ChIJ3YTrLT1x5kcRTTzu1sGsJq8"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lundi: Fermé | Mardi: 12:00–14:30, 18:30–22:00 | Mercredi: 12:00–14:30, 18:30–22:00 | Jeudi: 12:00–14:30, 18:30–22:00 | Vendredi: 12:00–14:30, 18:30–22:00 | Samedi: 12:00–15:30, 18:30–23:00 | Dimanche: 12:00–14:30, 18:30–22:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.mosugo.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 20,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.50,
        dish_price: 14.90, // UNITÉ DE SATIÉTÉ (Menu Fried Découverte)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Poulet Frit & Signature",
                items: [
                    { name: "Poulet Frit Signature (Panko, sauce Bulldog)", price_cents: 1050, description: "Le fameux poulet frit de Mory Sacko." },
                    { name: "Fried Plantain (Banane plantain frite au panko)", price_cents: 1050 },
                    { name: "Chicken & Waffle", price_cents: 1350, description: "Gaufres maison, poulet frit, sirop d’érable." },
                    { name: "Plantain & Waffle (Version végétarienne)", price_cents: 1350 },
                    { name: "Mosugo Chicken Burger (Pretzel bun, miso mayo)", price_cents: 1350 },
                    { name: "Mosugo Veggie Burger (Butternut frite)", price_cents: 1350 },
                    { name: "Burger Teriyaki (Bun Mamiche, poulet frit)", price_cents: 1300 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Menus (Unités de Satiété)",
                items: [
                    { name: "Menu Fried Découverte (Poulet frit + Accompagnement)", price_cents: 1490 },
                    { name: "Menu Slim (Burger + Accompagnement + Boisson)", price_cents: 2150 },
                    { name: "Menu Big (Burger + Fried + Accompagnement + Boisson)", price_cents: 3150 }
                ]
            },
            {
                category_type: "other",
                display_label: "Accompagnements (Sides)",
                items: [
                    { name: "Alocco (Bananes plantains frites)", price_cents: 550 },
                    { name: "Frites de Patate Douce & sauce Cajun", price_cents: 500 },
                    { name: "Sucrine grillée, vinaigrette abricot-harissa", price_cents: 550 },
                    { name: "Pommes de Terre Grenailles aux épices cajun", price_cents: 550 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Mobroockie (Chocolat Tanzanie & Miso caramel)", price_cents: 550 },
                    { name: "Pavlova de Saison (Kiwi & Yaourt grec)", price_cents: 600 },
                    { name: "Jus de Bissap Maison", price_cents: 450 },
                    { name: "Jus de Gingembre Maison", price_cents: 450 },
                    { name: "Bière artisanale Mosugo", price_cents: 650 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/mosugo-mory-sacko-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Avec Mosugo, le chef étoilé Mory Sacko démocratise son univers afro-fusion à travers la street-food. Concentré sur le poulet frit (incroyablement croustillant et épicé), ce spot du 14ème propose des burgers au pain bretzel et des accompagnements qui font voyager, comme les l’alocco (bananes plantains). C’est une immersion rapide et savoureuse dans la signature culinaire de l’un des chefs les plus créatifs de sa génération.",
    insider_tip: "Prenez absolument les Alocco (bananes plantains) en accompagnement, elles sont parfaitement caramélisées. Si vous avez une grosse faim, le Menu Burger and Fried est une expérience totale du concept.",
    expert_catchline: "Le poulet frit version haute couture : l’afro-fusion signée Mory Sacko accessible à tous.",
    specials: {
        cuisine: ["Street-food"],
        drinks: ["Bissap maison", "Eaux détox"],
        must_eat: "Street-food (Afro-fusion). Le Mosugo Chicken Burger et les Alocco.",
        must_drink: "Un grand verre de Bissap bien frais."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Street-food (Afro-fusion). Le Mosugo Chicken Burger et les Alocco.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
