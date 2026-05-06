import { SurgicalPlace } from "../../../type-definition";

export const wonderland: SurgicalPlace = {
    id: "poi-wonderland",
    name: "Wonderland Patisserie",
    slug: "wonderland-patisserie",
    category: "café",
    subcategory: ['français'],
    location: {
        address: "94 Rue d’Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.827436,
        lng: 2.327464,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJr7w4RG1x5kcRzChGP4H0Lus"
    },
    moods: {
        chill: 70,
        festif: 0,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Tuesday: 8:30 AM – 7:30 PM | Wednesday: 8:30 AM – 7:30 PM | Thursday: 8:30 AM – 7:30 PM | Friday: 8:30 AM – 7:30 PM | Saturday: 8:30 AM – 7:30 PM | Sunday: 8:30 AM – 1:30 PM | Monday: Closed",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.wonderland-patisserie-paris.com/",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 15,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 3.50,
        dish_price: 14.50,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "dessert",
                display_label: "Pâtisseries Trompe-l’œil (Douceurs)",
                items: [
                    { name: "Le Fantasia (Signature)", price_cents: 840 },
                    { name: "Le Cactus (Trompe-l’œil)", price_cents: 810 },
                    { name: "Le Moaï (Chocolat & Noisette)", price_cents: 790 },
                    { name: "Le Champi (Fruit de la passion)", price_cents: 820 },
                    { name: "La Noix (Caramel & Noix)", price_cents: 780 },
                    { name: "La Jacinthe (Fleurs & Mûres)", price_cents: 840 },
                    { name: "Le Coquelicot (Fruits Rouges)", price_cents: 830 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Gâteaux de Voyage (Douceurs)",
                items: [
                    { name: "Banana Bread moelleux", price_cents: 1090 },
                    { name: "Cake Peanut (Beurre de cacahuète)", price_cents: 950 },
                    { name: "Marbré Chocolat-Vanille", price_cents: 700 },
                    { name: "Carapek (Caramel & Pécan)", price_cents: 880 },
                    { name: "Gâteau Nantais (2/3 pers)", price_cents: 850 },
                    { name: "Cookie Chocolat Noir (Takeaway)", price_cents: 300 },
                    { name: "Cookie Noix de Macadamia", price_cents: 300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Viennoiseries (Douceurs)",
                items: [
                    { name: "Pain au Chocolat pur beurre", price_cents: 140 },
                    { name: "Croissant Wonderland", price_cents: 130 },
                    { name: "Chausson aux Pommes caramélisé", price_cents: 240 },
                    { name: "Brioche Sucre Fine", price_cents: 210 },
                    { name: "Baguette de tradition bio", price_cents: 130 }
                ]
            },
            {
                category_type: "main",
                display_label: "Salé & Lunch (Plats)",
                items: [
                    { name: "Bowl Végétarien du Chef", price_cents: 1450 },
                    { name: "Menu Quiche (Quiche & Dessert)", price_cents: 1400 },
                    { name: "Quiche de saison & salade", price_cents: 1200 },
                    { name: "Wrap Poulet Curry", price_cents: 950 },
                    { name: "Salade de Pâtes au Pesto", price_cents: 1000 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/wonderland-patisserie/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.5,
    description: "Rodolphe Groizard a créé avec Wonderland une véritable galerie d’art sucré. Célèbre pour ses pâtisseries en trompe-l’œil qui défient l’imagination (des cactus, des statues Moaï ou des fauteuils plus vrais que nature), cet établissement est devenu en quelques années la référence du 14ème pour les gourmets en quête de surprise. Chaque création est une prouesse technique qui cache des saveurs intenses et des textures parfaitement équilibrées.",
    insider_tip: "Arrivez avant 16h si vous voulez avoir le choix, les pièces les plus spectaculaires comme ’Le Cactus’ s’arrachent dès la sortie du déjeuner. Profitez de leur espace salon de thé pour une dégustation sur place, l'accueil y est adorable.",
    expert_catchline: "La haute pâtisserie trompe-l’œil qui émerveille le 14ème.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Thés de créateurs", "Café de spécialité"],
        must_eat: "Cuisine française. Le Cactus ou le Fantasia, les deux icônes de la maison.",
        must_drink: "Un thé vert pour contrebalancer la richesse du chocolat."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine française. Le Cactus ou le Fantasia, les deux icônes de la maison.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
