import { SurgicalPlace } from "../../../type-definition";

export const tripletta: SurgicalPlace = {
    id: "poi-tripletta-gaite-75014",
    name: "Tripletta Gaité",
    slug: "tripletta-gaite-paris-14",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "1 Impasse de la Gaité, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8405655,
        lng: 2.3247326,
        nearest_metro: "Gaité",
        metro_lines: ["13"],
        google_id: "ChIJlaEwLn9x5kcRLsh7q_LCDkM"
    },
    moods: {
        chill: 70,
        festif: 85,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Monday: 11:30 AM – 10:45 PM | Tuesday: 11:30 AM – 10:45 PM | Wednesday: 11:30 AM – 10:45 PM | Thursday: 11:30 AM – 10:45 PM | Friday: 11:30 AM – 10:45 PM | Saturday: 11:30 AM – 10:45 PM | Sunday: 11:30 AM – 10:45 PM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://triplettagaite.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        dish_price: 16, // MÉDIAN des pizzas
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Le Pizze Classiche",
                items: [
                    { name: "Margherita (Pomodoro, Mozzarella, Basilico)", price_cents: 1300 },
                    { name: "Marinara (Pomodoro, Aglio, Origano)", price_cents: 1000 },
                    { name: "Bufala (Pomodoro, Mozzarella di Bufala)", price_cents: 1600 },
                    { name: "Napoletana (Pomodoro, Acciughe, Capperi)", price_cents: 1500 },
                    { name: "Regina (Pomodoro, Mozzarella, Jambon, Champignons)", price_cents: 1650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Le Speciali di Tripletta",
                items: [
                    { name: "Tripletta (Pomodoro, Mozzarella, N’duja, Spianata)", price_cents: 1800 },
                    { name: "Truffe (Mozzarella, Crème de Truffe, Champignons)", price_cents: 1950 },
                    { name: "Mortadella (Mozzarella, Mortadelle, Pesto de Pistoles)", price_cents: 1850 },
                    { name: "Burratina (Pomodoro, Burrata entière)", price_cents: 1900 },
                    { name: "Veggie (Mozzarella, Légumes Grillés)", price_cents: 1600 }
                ]
            },
            {
                category_type: "other",
                display_label: "Antipasti & Dolci",
                items: [
                    { name: "Burrata Pugliese aux Tomates Cerises", price_cents: 1450 },
                    { name: "Planche de Charcuteries Italiennes", price_cents: 1700 },
                    { name: "Focaccia Maison à l’Huile d'Olive", price_cents: 700 },
                    { name: "Tiramisu della Nonna", price_cents: 850 },
                    { name: "Panna Cotta aux Fruits Rouges", price_cents: 750 },
                    { name: "Calzone à la Pâte à Tartiner", price_cents: 950 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/tripletta-gaite-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.6,
    description: "Tripletta Gaité est l’ambassade de la pizza napolitaine dans le quartier de la Gaité. Avec son four à bois imposant et sa décoration industrielle chaleureuse, le lieu dégage une énergie vibrante dès l’entrée. La pâte, longuement maturée, est une merveille de légèreté et de moelleux, garnie de produits sourcés directement en Italie. La terrasse, située dans une petite impasse calme, est une pépite rare dans ce quartier animé. C’est l'adresse idéale pour une pizza entre amis avant une séance de théâtre.",
    insider_tip: "Demandez une table en terrasse si le temps le permet, l’impasse est très charmante. La pizza Tripletta avec sa N'duja (saucisse piquante calabraise) est un must pour les amateurs de sensations fortes.",
    expert_catchline: "La pizza napolitaine pure et vibrante à Montparnasse.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Spritz", "Vins Italiens Bio", "Bières Artisanales"],
        must_eat: "Cuisine italienne. La pizza Tripletta et la Burrata Pugliese.",
        must_drink: "Un Spritz classique ou un vin rouge des Pouilles."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. La pizza Tripletta et la Burrata Pugliese.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
