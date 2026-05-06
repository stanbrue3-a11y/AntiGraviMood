import { SurgicalPlace } from "../../../type-definition";

export const bistrotters: SurgicalPlace = {
    id: "poi-bistrotters-75014",
    name: "Bistrotters",
    slug: "bistrotters-paris-14",
    category: "restaurant",
    subcategory: ['bistrot'],
    location: {
        address: "9 Rue Decrès, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8327769,
        lng: 2.3148769,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJUWpN50tw5kcRxFHi8fOzbi4"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Sunday: 12:00 – 2:00 PM, 7:00 – 10:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.bistrotters.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 40,
        is_free: false,
        dish_price: 24, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "L’ardoise des Bistrotters",
                items: [
                    { name: "Cuisse de Canard Confite Maison", price_cents: 2250 },
                    { name: "Filet de Boeuf Aubrac, sauce poivre", price_cents: 2800 },
                    { name: "Dos de Cabillaud en croûte d’herbes", price_cents: 2400 },
                    { name: "Saucisse de Toulouse grillée et Aligot", price_cents: 1950 },
                    { name: "Poitrine de Veau rôtie aux petits oignons", price_cents: 2400 },
                    { name: "Tartare de Boeuf au couteau préparé", price_cents: 2100 },
                    { name: "Risso de Légumes de l’Ardoise", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Gourmandes",
                items: [
                    { name: "Os à Moelle Gratiné au Sel de Guérande", price_cents: 1000 },
                    { name: "Oeuf Cocotte au Maroilles (Pépite !)", price_cents: 1150 },
                    { name: "Ardoise de Charcuteries de pays", price_cents: 1400 },
                    { name: "Entrée du Marché (à l’ardoise)", price_cents: 950 },
                    { name: "Salade de Crottin de Chavignol chaud", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts de Tradition",
                items: [
                    { name: "Le fameux Riz au Lait de Bistrotters", price_cents: 900 },
                    { name: "Tatin Maison et Crème Fraîche", price_cents: 1000 },
                    { name: "Mousse au Chocolat Noir intense", price_cents: 850 },
                    { name: "Baba au Rhum du Chef", price_cents: 1100 },
                    { name: "Fromages de nos Provinces", price_cents: 1200 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/bistrotters-paris-14/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.7,
    description: "Bistrotters est l’une de ces pépites parisiennes que l’on voudrait garder pour soi. Situé dans la tranquille rue Decrès, ce restaurant incarne le bistrot moderne dans ce qu’il a de plus noble : une cuisine de terroir généreuse, un accueil d’une gentillesse rare et une atmosphère chaleureuse faite de bois et de sourires. Tout ici est fait maison, de la terrine au dessert, avec un respect sacré du produit. C’est l’adresse idéale pour redécouvrir le plaisir simple d’un plat parfaitement mijoté dans un cadre authentique.",
    insider_tip: "Goutez absolument à leur riz au lait, une légende locale qui vaut le détour à elle seule. L’ambiance le samedi soir est particulièrement conviviale, pensez à réserver car le lieu est petit.",
    expert_catchline: "L’authenticité absolue du bistrot de quartier et de terroir.",
    specials: {
        cuisine: ["Bistronomie"],
        drinks: ["Vins de Propriétaires", "Bières de Micro-Brasserie"],
        must_eat: "Cuisine de bistrot. Le Confit de Canard et le Riz au Lait.",
        must_drink: "Un vin rouge souple de l’Hérault."
    },
    source: "expert_human",

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Le Confit de Canard et le Riz au Lait.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
