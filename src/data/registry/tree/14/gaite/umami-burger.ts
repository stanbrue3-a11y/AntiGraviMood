import { SurgicalPlace } from "../../../type-definition";

export const umami_burger: SurgicalPlace = {
    id: "poi-umami-burger",
    name: "Umami Burger",
    slug: "umami-burger-montparnasse",
    category: "restaurant",
    subcategory: ['burger'],
    location: {
        address: "19 Rue du Commandant René Mouchotte, 75014 Paris",
        arrondissement: 14,
        lat: 48.8385266,
        lng: 2.3203818,
        nearest_metro: "Gaîté",
        metro_lines: [13],
        google_id: "ChIJxc2qquBx5kcRZpCuzLFtVd4"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Lundi: 12:00–22:30 | Mardi: 12:00–22:30 | Mercredi: 12:00–22:30 | Jeudi: 12:00–22:30 | Vendredi: 12:00–22:30 | Samedi: 12:00–22:30 | Dimanche: 12:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://umamiburgerparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 8.50,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 16.00, // PRIX du burger signature Umami Burger
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Umami Burgers (Signatures)",
                items: [
                    { name: "Umami Burger (Steak de bœuf, oignons caramélisés, cheddar, ketchup Umami)", price_cents: 1600 },
                    { name: "Umami Patty Melt (Smashed bread, provolone, oignons caramélisés)", price_cents: 1200 },
                    { name: "Green Bird (Poulet frit bio, avocat, fromage vert, sauce goddess)", price_cents: 1600 },
                    { name: "Breaded Cod Burger (Filet de cabillaud pané, tartare citron vert)", price_cents: 1400 },
                    { name: "The Truffle Burger (Truffle aioli, truffle oil)", price_cents: 1800 },
                    { name: "Sunny Side Burger (Oeuf au plat, bacon, sauce Umami)", price_cents: 1700 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Accompagnements (Sides & Starters)",
                items: [
                    { name: "Thin Fries (Frites fines)", price_cents: 350 },
                    { name: "Sweet Potato Fries (Patates douces)", price_cents: 450 },
                    { name: "Onion Rings (Beignets d’oignons)", price_cents: 550 },
                    { name: "Manly Fries (Bacon bits, cheddar fondu, oignons frits)", price_cents: 600 },
                    { name: "Truffle Fries (Frites à la truffe)", price_cents: 700 },
                    { name: "Chicken Wings (x6)", price_cents: 1000 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Shakes",
                items: [
                    { name: "Vanilla Shake (Milkshake vanille Bourbon)", price_cents: 800 },
                    { name: "Chocolate Shake", price_cents: 800 },
                    { name: "Cookie Dough Sandwich", price_cents: 700 },
                    { name: "New York Cheesecake", price_cents: 900 }
                ]
            },
            {
                category_type: "other",
                display_label: "Saturday & Sunday Brunch",
                items: [
                    { name: "Saturday Brunch (Buffet à volonté + Burger)", price_cents: 3500 },
                    { name: "Sunday Brunch (Le Grand Buffet Umami)", price_cents: 4200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/umami-burger-montparnasse/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.4,
    description: "Première implantation européenne de la célèbre chaîne californienne, Umami Burger Paris apporte la science de la ’cinquième saveur’ au cœur de Montparnasse. Installé dans le cadre grandiose de l’Hôtel Pullman, ce spot propose des burgers sophistiqués où chaque ingrédient est choisi pour booster l’Umami. Le décor est moderne, l’ambiance californienne et les recettes repoussent les limites du burger classique.",
    insider_tip: "Si vous avez une faim de loup le week-end, les brunchs du samedi (35€) et dimanche (42€) sont imbattables avec leurs buffets et burgers à volonté. N’oubliez pas de tester les ’Manly Fries’ pour une expérience calorique totale.",
    expert_catchline: "La science de l’Umami venue de Californie : des burgers fusion sophistiqués dans un cadre monumental.",
    specials: {
        cuisine: ["Burgers"],
        drinks: ["Milkshakes artisanaux", "Cocktails création"],
        must_eat: "Burgers de terroir. L’Umami Burger original et les Manly Fries.",
        must_drink: "Un milkshake vanille-bourbon pour le contraste sucré-salé."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Burgers de terroir. L’Umami Burger original et les Manly Fries.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
