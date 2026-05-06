import { SurgicalPlace } from '../../../type-definition';

export const oobatz: SurgicalPlace = {
    id: "poi-oobatz",
    name: "Oobatz",
    slug: "oobatz",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "4bis Av. Jean Aicard",
        arrondissement: 11,
        lat: 48.8653,
        lng: 2.3789,
        nearest_metro: "Ménilmontant",
        metro_lines: [2],
        google_id: "ChIJr9u4KKtt5kcRNwiGaAm9JYw"
    },
    moods: {
        chill: 70,
        festif: 60,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 18:00–22:00 (Fermé Lun-Mar)",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.oobatz.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 9, // Estimé pour 50cl si 6€ le 33cl
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 19, // MANUAL: Median des pizzas (16€-26€)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Oobatz 2025 Standard (Naturally Leavened Pizzeria)
            {
                category_type: "main",
                display_label: "Pizzas Artisanales (Pâte Fermentée)",
                items: [
                    { name: "Marguerita Oobatz", price_cents: 1600, description: "Sauce tomate maison, mozzarella, basilic frais." },
                    { name: "Diavola Fermentée", price_cents: 2000, description: "Salami piquant, piment, origan." },
                    { name: "Verdure d’Été / Saison", price_cents: 1800, description: "Légumes de saison rôtis, herbes fraîches." },
                    { name: "Pizza Salsiccia", price_cents: 2200, description: "Saucisse italienne, fenouil, pecorino." },
                    { name: "Pizza Polpette", price_cents: 2300, description: "Boulettes de viande maison, tomate, parmesan." },
                    { name: "Pizza Blanche Asparagus", price_cents: 2400, description: "Asperges, agrumes, crème de ricotta." },
                    { name: "Pizza Carte Blanche (Chef Choice)", price_cents: 2600, description: "L’inspiration du moment de Dan Pearson." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Sides & Entrées",
                items: [
                    { name: "Side Salad Oobatz", price_cents: 800, description: "Vinaigrette maison, herbes amères." },
                    { name: "Assiette de légumes rôtis", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Signatures",
                items: [
                    { name: "Pizzookie (Warm Cookie & Pizza Dough)", price_cents: 1000, description: "Dough hybride, pépites de chocolat, servi chaud." },
                    { name: "Pana Cotta Saison", price_cents: 800 },
                    { name: "Glace Maison (Boule)", price_cents: 600 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures & Boissons",
                items: [
                    { name: "Verre de Vin Nature sélectionné", price_cents: 700 },
                    { name: "Bouteille de Vin (à partir de)", price_cents: 3600 },
                    { name: "Draft Beer (33cl)", price_cents: 600 },
                    { name: "Soft Artisanal", price_cents: 1200, description: "Limonades et kéfirs premium." }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/oobatz/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "La pizzeria culte de Dan Pearson, ex-chef du Rigmarole. Ici, la pizza est un art de la fermentation : pâte légère, croustillante et garnitures sourcées à l’extrême. Une expérience brute et vibrante.",
    insider_tip: "Ne passez pas à côté du Pizzookie, le dessert signature hybride pizza-cookie servi chaud. Prévoyez de réserver pile 14 jours à l’avance à 10h, les places s'arrachent.",
    expert_catchline: "L’art de la pizza fermentée par un virtuose du Rigmarole.",
    specials: {
        cuisine: ["Pizzeria"],
        drinks: ["Natural Wines", "Craft Softs"],
        must_eat: "Cuisine italienne (Pizzeria). Le Pizzookie chaud en fin de repas.",
        must_drink: "Une limonade artisanale ou une cuvée sauvage en blanc."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne (Pizzeria). Le Pizzookie chaud en fin de repas.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
