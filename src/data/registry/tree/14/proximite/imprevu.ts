import { SurgicalPlace } from "../../../type-definition";

export const imprevu: SurgicalPlace = {
    id: "poi-imprevu-alesia",
    name: "L’Imprévu",
    slug: "l-imprevu-paris-14",
    category: "restaurant",
    subcategory: ['français', 'terrasse'],
    location: {
        address: "13 Rue d’Alésia, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8286469,
        lng: 2.333464,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJ8-pIt7Rx5kcRpwgzTmg1MCQ"
    },
    moods: {
        chill: 70,
        festif: 60,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 2:00 AM | Tuesday: 7:00 AM – 2:00 AM | Wednesday: 7:00 AM – 2:00 AM | Thursday: 7:00 AM – 2:00 AM | Friday: 7:00 AM – 2:00 AM | Saturday: 8:00 AM – 2:00 AM | Sunday: 8:00 AM – 2:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.limprevu-06.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        dish_price: 18,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de l’Imprévu",
                items: [
                    { name: "Asian Flank Steak & Noodles", price_cents: 2290 },
                    { name: "Wok de Crevettes aux Légumes", price_cents: 2290 },
                    { name: "Pavé de Saumon Grillé, Purée Maison", price_cents: 2300 },
                    { name: "Tartare de Saumon-Avocat Frais", price_cents: 2000 },
                    { name: "Croque-Madame Campagnard & Salade", price_cents: 1700 },
                    { name: "Linguine aux Gambas & Tomates", price_cents: 1890 },
                    { name: "Salade Pêcheur (Saumon & Crevettes)", price_cents: 2000 },
                    { name: "Omelette Truffe et Fromage", price_cents: 1800 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Starters & Tapas Maison",
                items: [
                    { name: "Tarama Truffé et Pain Toasté", price_cents: 1400 },
                    { name: "Burrata, Tomates et Jambon de Pays", price_cents: 1600 },
                    { name: "Camembert d’Isigny Rôti au Miel", price_cents: 1400 },
                    { name: "6 Escargots de Bourgogne", price_cents: 1600 },
                    { name: "Guacamole Maison & Chips Tortilla", price_cents: 1300 },
                    { name: "Planche Mixte de Charcuterie & Fromage", price_cents: 2500 },
                    { name: "Os à Moelle Grillé", price_cents: 1000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Brunch & Crêpes",
                items: [
                    { name: "Avocado Toast & Oeuf Poché", price_cents: 1500 },
                    { name: "Pancakes Egg, Bacon & Sirop d’Erable", price_cents: 1500 },
                    { name: "Pain Perdu Maison de l’Imprévu", price_cents: 1200 },
                    { name: "Crêpe Caramel Beurre Salé Maison", price_cents: 750 },
                    { name: "Crêpe Nutella-Banane", price_cents: 900 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/l-imprevu-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.1,
    description: "L’Imprévu est le caméléon gourmand de la rue d’Alésia. Que ce soit pour un brunch tardif, un déjeuner aux accents asiatiques ou une soirée tapas-cocktails sur sa terrasse toujours animée, l’établissement s’adapte à tous les moments de la vie parisienne. Son décor moderne, son accueil chaleureux et sa carte éclectique en font un lieu de passage privilégié pour ceux qui aiment la diversité. C’est l’endroit où l’on s’arrête par hasard et d’où l’on repart avec l’envie de revenir, séduit par la justesse des saveurs et la décontraction du service.",
    insider_tip: "Leur sélection de tapas est idéale pour accompagner les cocktails en début de soirée. En hiver, ne manquez pas leur raclette à volonté, un moment de pure convivialité montagnarde en plein 14ème.",
    expert_catchline: "Le bistrot éclectique et vibrant de la rue d’Alésia.",
    specials: {
        cuisine: ["Français"],
        drinks: ["Cocktails Créatifs", "Vins au Verre"],
        must_eat: "Cuisine de partage. L’Asian Flank Steak et les Pancakes bacon-sirop.",
        must_drink: "Un cocktail signature en terrasse."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de partage. L’Asian Flank Steak et les Pancakes bacon-sirop.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
