import { SurgicalPlace } from '../../../type-definition';

export const pierre_sang_oberkampf: SurgicalPlace = {
    id: "poi-pierre-sang-oberkampf",
    name: "Pierre Sang In Oberkampf",
    slug: "pierre-sang-oberkampf",
    category: "restaurant",
    subcategory: ['coréen'],
    location: {
        address: "55 Rue Oberkampf",
        arrondissement: 11,
        lat: 48.8647418,
        lng: 2.3723575,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJZfH9wfxt5kcRBbfvIAQsmyU"
    },
    moods: {
        chill: 40,
        festif: 30, // Lively counter dining
        culturel: 25 // Culinary experience
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–23:30\nmardi: 12:00–14:30, 19:00–23:30\nmercredi: 12:00–14:30, 19:00–23:30\njeudi: 12:00–14:30, 19:00–23:30\nvendredi: 12:00–14:30, 19:00–23:30\nsamedi: 12:00–14:30, 19:00–23:30\ndimanche: 12:00–14:30, 19:00–23:30",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "http://www.pierresang.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 6.00,
        coffee_price: 2.50,
        // Estimation dish_price : Plat du jour déjeuner 19€, soir = menu aveugle 46.50-55.50€
        dish_price: 19,
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "main",
                display_label: "Plats (Déjeuner)",
                items: [
                    { name: "Plat du jour", price_cents: 1900 }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Formules (Déjeuner)",
                items: [
                    { name: "Menu 2 Temps (Entrée/Plat)", price_cents: 2500 },
                    { name: "Menu 3 Temps (Entrée/Plat/Dessert)", price_cents: 3300 }
                ]
            },
            {
                category_type: "other",
                display_label: "L’Expérience à l'Aveugle (Soir & Week-end)",
                items: [
                    { name: "Menu Freestyle (Entrée, Plat, Fromages, Dessert)", price_cents: 4650 },
                    { name: "Menu Découverte 6 temps (Amuse-bouche, 2 entrées, plat, fromages, dessert)", price_cents: 5550 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Accords Mets & Vins",
                items: [
                    { name: "Accord 4 verres (Sur Freestyle)", price_cents: 3500 },
                    { name: "Accord 6 verres (Sur Découverte)", price_cents: 4500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave & Vins au verre",
                items: [
                    { name: "Côteaux du Layon, Domaine de la Bergerie (10cl)", price_cents: 600 },
                    { name: "Vouvray Brut Vincent Carême (Bouteille 75cl)", price_cents: 4200 },
                    { name: "Champagne Laurent-Perrier (Bouteille 75cl)", price_cents: 7500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Autres Boissons",
                items: [
                    { name: "Bière Artisanale BapBap Original (33cl)", price_cents: 700 },
                    { name: "Plum Wine / Chamisul Soju (8cl)", price_cents: 450 },
                    { name: "Eaux Microfiltrées FRESH (75cl)", price_cents: 250 },
                    { name: "Thé Noir Glacé Uma Gingembre et Cédrat", price_cents: 450 },
                    { name: "Café Expresso", price_cents: 250 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/pierre-sang-oberkampf/gallery_4.jpg"
    ]
  },
    instagram_handle: "pierresang",
    verified: true,
    google_rating: 4.6,
    description: "C’est l’adresse qui a démocratisé la bistronomie de comptoir à Paris. Pierre Sang Boyer y impose un concept redoutable : le menu à l’aveugle. Une fusion franco-coréenne détonante servie au couteau par une jeune garde de chefs devant vous. Vous goûtez, vous devinez les ingrédients, vous êtes bluffé.",
    insider_tip: "• Réservez impérativement une place au haut comptoir (’Au bar’) sur le site, l’expérience n’a aucun sens sur une table isolée.\n• Concept à l’aveugle total : si vous êtes très difficile ou multiallergique, fuyez.\n• L'un des meilleurs rapports qualité/prix Michelin/Gastronomique du quartier.",
    expert_catchline: "Haute gastronomie ludique : asseyez-vous au comptoir, mangez à l’aveugle, et tentez de deviner les ingrédients.",
    specials: {
        cuisine: ["Coréen"],
        drinks: ["Accords Mets et Vins sur-mesure", "Vins au verre surprise"],
        must_eat: "Cuisine coréenne. Ici on ne choisit rien, on s’en remet à la brigade. Le Menu Découverte à 55.50€ est un marathon de 6 assiettes redoutablement bien calibrées autour des racines Auvergnates et Séoulites de Pierre Sang.",
        must_drink: "L’équipe de sommellerie sort des quilles audacieuses pour les accords à l'aveugle. Laissez-les vous challenger."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine coréenne. Ici on ne choisit rien, on s’en remet à la brigade. Le Menu Découverte à 55.50€ est un marathon de 6 assiettes redoutablement bien calibrées autour des racines Auvergnates et Séoulites de Pierre Sang.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
