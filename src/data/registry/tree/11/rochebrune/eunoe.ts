import { SurgicalPlace } from '../../../type-definition';

export const eunoe: SurgicalPlace = {
    id: "poi-eunoe",
    name: "Eunoé",
    slug: "eunoe",
    category: "restaurant",
    subcategory: ['japonais'],
    location: {
        address: "6 Rue Rochebrune",
        arrondissement: 11,
        lat: 48.861787,
        lng: 2.378997,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJXw8J3Axt5kcRRh7-xS3oQ1I"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 12:00–2:00 PM, 7:00–10:00 PM\nWednesday: 12:00–2:00 PM, 7:00–10:00 PM\nThursday: 12:00–2:00 PM, 7:00–10:00 PM\nFriday: 12:00–2:00 PM, 7:00–10:30 PM\nSaturday: 12:30–3:00 PM, 7:00–10:30 PM\nSunday: 12:00–3:00 PM, 7:00–10:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.eunoe-restaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 3.50,
        dish_price: 32, // Median estimated from dinner mains (28, 37)
        force_manual_dish_price: false,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Déjeuner (Menu changeant chaque semaine)",
                items: [
                    { name: "Formule Déjeuner (Entrée, Plat, Dessert)", price_cents: 2600 },
                    { name: "Entrée + Plat ou Plat + Dessert", price_cents: 2100 },
                    { name: "Plat du jour", price_cents: 1500 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Dîner - Entrées",
                items: [
                    { name: "Gravelax de dorade", price_cents: 1500, description: "Vinaigrette au fruit de la passion et herbes fraîches" },
                    { name: "Courgette violon cuite et crue", price_cents: 1400, description: "Condiments à l’aubergine brûlée et piperade" },
                    { name: "Tataki de bœuf de Salers", price_cents: 1600, description: "Sauce ponzu, pickles de légumes de saison" },
                    { name: "Poireaux vinaigrette revisités", price_cents: 1300, description: "Émulsion sésame, noisettes torréfiées" }
                ]
            },
            {
                category_type: "main",
                display_label: "Dîner - Plats (Binchotan)",
                items: [
                    { name: "Rumsteck de bœuf au barbecue", price_cents: 2800, description: "Jus corsé, pommes de terre grenailles et légumes" },
                    { name: "Bar de ligne au charbon", price_cents: 3700, description: "Bisque de homard, émulsion iodée et légumes de saison" },
                    { name: "Agneau confit", price_cents: 3200, description: "Risotto d’épeautre, jus réduit aux herbes" },
                    { name: "Risotto végétarien de saison", price_cents: 2500, description: "Légumes racines glacés, parmesan affiné" }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Pêche pochée à la verveine", price_cents: 1100, description: "Chantilly au mascarpone et crumble de thé noir" },
                    { name: "Rare Cheesecake au pamplemousse", price_cents: 1200, description: "Limoncello, meringue au citron" },
                    { name: "Tartelette chocolat praliné", price_cents: 1100, description: "Glace vanille maison" }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/eunoe/gallery_4.jpg"
    ]
  },
    verified: true,
    google_rating: 4.8,
    description: "Un brillant néo-bistrot impulsé par le chef Ryuji Sato et le sommelier Félix Perrotte. La philosophie d’Eunoé repose sur des produits bruts français twistés par une technique japonaise irreprochable, notamment des cuissons parfaites au barbecue binchotan. Le menu du midi (26€ complet) est un petit miracle, tandis que le soir se révèle plus audacieux.",
    insider_tip: "• Le rapport qualité-prix de la formule déjeuner à 26€ est l’un des meilleurs du quartier, foncez.\n• Le soir, la cuisson au barbecue binchotan est reine : le Bar de ligne ou le Rumsteck sont souvent impressionnants.\n• Laissez le sommelier Félix Perrotte vous guider les yeux fermés sur la carte des vins.",
    expert_catchline: "Néo-bistrot franco-japonais où les produits bruts français rencontrent la précision du barbecue binchotan.",
    specials: {
        cuisine: ["Japonais"],
        drinks: ["Sélection pointue de vins nature et biodynamiques", "Accords originaux du sommelier"],
        must_eat: "Cuisine japonaise. N’importe quel produit magnifié au grill binchotan (souvent du poisson ou du boeuf de Salers).",
        must_drink: "Faites confiance à Félix Perrotte pour dénicher la pépite hors des sentiers battus."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine japonaise. N’importe quel produit magnifié au grill binchotan (souvent du poisson ou du boeuf de Salers).",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
