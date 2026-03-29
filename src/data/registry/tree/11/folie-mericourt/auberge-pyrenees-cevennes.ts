import { SurgicalPlace } from '../../../type-definition';

export const auberge_pyrenees_cevennes: SurgicalPlace = {
    id: "poi-auberge-pyrenees-cevennes",
    name: "Auberge Pyrénées Cévennes",
    slug: "auberge-pyrenees-cevennes",
    category: "restaurant",
    subcategory: ["traditionnel", "bistrot", "michelin-bib-gourmand", "institution", "restaurant"],
    location: {
        address: "106 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.866532,
        lng: 2.37072,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJW5W9Sjxu5kcRR-Q3r0oNoiU" // Placeholder - verified location
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lun-ven: 12:00–14:00, 19:30–22:30; sam: 19:30–22:30; dim: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.auberge-pyrenees-cevennes.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 35.00, // MANUAL: Median based on Cassoulet (37€) and Blanquette (32€)
        last_updated: "2026-03-09",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Menus & Formules Industrielles",
                items: [
                    { name: "Formule Déjeuner (Semaine)", price_cents: 2900, description: "Entrée/Plat ou Plat/Dessert à l'ardoise." },
                    { name: "Menu de l'Auberge (3 plats)", price_cents: 3900 },
                    { name: "Menu Dégustation (6 temps)", price_cents: 7900, description: "L'immersion totale dans le terroir." },
                    { name: "Accord Mets & Vins (6 verres)", price_cents: 3600 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées du Terroir",
                items: [
                    { name: "Pâté en croûte au Canard et Foie Gras", price_cents: 2300, description: "Fait maison selon la tradition." },
                    { name: "6 Escargots de Bourgogne de belle taille", price_cents: 1600 },
                    { name: "Oeuf Bio Poché, crème de champignons", price_cents: 1450 },
                    { name: "Foie gras de Canard mi-cuit, chutney", price_cents: 2300 },
                    { name: "Harengs Doux, pommes à l'huile", price_cents: 1400 },
                    { name: "Salade Frisée aux Lardons et Croûtons", price_cents: 1400 },
                    { name: "Soupe à l'oignon gratinée au Comté", price_cents: 1350 },
                    { name: "Oeufs Durs Bio Mayonnaise (Standard Moelle)", price_cents: 950 },
                    { name: "Assiette de Cochonnailles Artisanales", price_cents: 1900 },
                    { name: "Velouté de Potiron & crème crue", price_cents: 1200 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats (Signatures)",
                items: [
                    { name: "Cassoulet de l'Auberge", price_cents: 3700, description: "Mijoté des heures, le plat culte de la maison." },
                    { name: "Blanquette de Veau à l'ancienne, Riz Basmati", price_cents: 3200 },
                    { name: "Ris de Veau Poêlés, Champignons & Purée", price_cents: 4900 },
                    { name: "Entrecôte Normande (400g), Frites Maison", price_cents: 4500 },
                    { name: "Saucisse au Couteau & Purée de bintje", price_cents: 2600 },
                    { name: "Risotto aux Gambas rôties au Tandoori", price_cents: 3100 },
                    { name: "Lotte rôtie au beurre de sauge", price_cents: 3400 },
                    { name: "Carré d'Agneau de sept heures", price_cents: 3800 },
                    { name: "Petit Salé aux Lentilles vertes du Puy", price_cents: 2800 },
                    { name: "Civet de Sanglier (Saisonnier)", price_cents: 3200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts d'Antan",
                items: [
                    { name: "Soufflé Chaud au Grand Marnier", price_cents: 1450 },
                    { name: "Mille-feuille tradition", price_cents: 1200 },
                    { name: "Profiteroles au chocolat chaud", price_cents: 1200 },
                    { name: "Crème Brulée à la vanille Bourbon", price_cents: 1000 },
                    { name: "Baba au Rhum Ambré", price_cents: 1300 },
                    { name: "Ile Flottante, amandes grillées", price_cents: 1000 },
                    { name: "Mousse au Chocolat (Grand Bol)", price_cents: 1100 },
                    { name: "Plateau de Fromages de chez Beillevaire", price_cents: 1500 },
                    { name: "Glace Artisanale (3 boules)", price_cents: 900 },
                    { name: "Poire Pochée au Vin de Bordeaux", price_cents: 1200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Digos & Digestifs",
                items: [
                    { name: "Armagnac Hors d'Âge", price_cents: 1400 },
                    { name: "Cognac Pierre de Segonzac", price_cents: 1400 },
                    { name: "Calvados Pays d'Auge", price_cents: 1200 },
                    { name: "Vieille Prune de Souillac", price_cents: 1250 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVxNI5TG32SnRdKE17QhLREEo7_QumFnC6_-dEWfuVCyPywt-ZKt4j-rtnB4NBAvQytLW_qu6LIajvMWWvV2DOPc9WCM3fT_jKLMieLI-fd3YLwhUNIBszEy9xJZ6tCH0RHO4c472zlTnxp1b-jAPMHv-mnAO6nKWRRZywRS7rJC7_SeJIqZdqF-g-WOynmzWhskpv5bra1S6GhLKUf0mwAMPPeG0-FaSuZefbdd0TmUzCT_H-0GBMqYo4WC0f3JHFFMKcX3YsgIkfy5L7N797KAE-rYHMLsQPMCyPpvc65PYCNniAC-y8weE3U_Bpo3Q9I9stT-Senv_F4u3zpdjSEYc61f4bnqgZGBHvLw3X5_dxqplFmIQCk1shIkj3fgnKmkE6147vBQsD79op73J1IcI8v58yPdnhbGiNQJRkM3tVEiK1e6SSuLgbhro1g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Une machine à remonter le temps. L'Auberge Pyrénées Cévennes est l'un des derniers bastions de la cuisine bourgeoise à Paris. Ici, les nappes à carreaux, les jambons suspendus et le décor rustique plantent le décor de festins épiques. Le Cassoulet, d'une authenticité redoutable, est célébré dans tout Paris, tout comme le Pâté en Croûte et la Blanquette de veau. Un Bib Gourmand Michelin qui respecte le produit et les traditions.",
    insider_tip: "• Le Cassoulet est très copieux, prévoyez une marche digestive après.\n• Les soufflés chauds (Grand Marnier ou Vanille) sont cuits minute, commandez-les dès le milieu du repas.\n• Ambiance parfaite pour les amateurs de vrais bistrots à l'ancienne, bruyante et joyeuse.\n• Pensez à demander la suggestion de vins du Sud-Ouest, la cave est superbe sur ces appellations.",
    expert_catchline: "L'institution du Cassoulet à Paris : un voyage dans la France des terroirs et de la gourmandise pure.",
    specials: {
        cuisine: ["Cassoulet de l'Auberge", "Soufflé au Grand Marnier", "Pâté en Croûte Maison", "Ris de Veau"],
        drinks: ["Grands Vins du Sud-Ouest", "Sélection de Digestifs", "Vins de Pays"],
        must_eat: "Le duo gagnant : Pâté en Croûte en entrée, Cassoulet en plat. Incontournable.",
        must_drink: "Un Madiran ou un Cahors sélectionné par le patron pour accompagner le confit du cassoulet."
    }
};
