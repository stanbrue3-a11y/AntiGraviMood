import { SurgicalPlace } from '../../../type-definition';

export const pierre_sang_oberkampf: SurgicalPlace = {
    id: "poi-pierre-sang-oberkampf",
    name: "Pierre Sang In Oberkampf",
    slug: "pierre-sang-oberkampf",
    category: "restaurant",
    subcategory: ["fusion", "franco-coréen", "menu à l'aveugle", "gastronomique", "comptoir"],
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
        wifi: false,
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
        dish_price: 0, // Auto-calculated via median of tasting menus
        last_updated: "2026-03-06",
        menu_items: [
            {
                category: "Plats (Déjeuner)",
                items: [
                    { name: "Plat du jour", price: "19.00€" }
                ]
            },
            {
                category: "Formules (Déjeuner)",
                items: [
                    { name: "Menu 2 Temps (Entrée/Plat)", price: "25.00€" },
                    { name: "Menu 3 Temps (Entrée/Plat/Dessert)", price: "33.00€" }
                ]
            },
            {
                category: "L'Expérience à l'Aveugle (Soir & Week-end)",
                items: [
                    { name: "Menu Freestyle (Entrée, Plat, Fromages, Dessert)", price: "46.50€" },
                    { name: "Menu Découverte 6 temps (Amuse-bouche, 2 entrées, plat, fromages, dessert)", price: "55.50€" }
                ]
            },
            {
                category: "Accords Mets & Vins",
                items: [
                    { name: "Accord 4 verres (Sur Freestyle)", price: "35.00€" },
                    { name: "Accord 6 verres (Sur Découverte)", price: "45.00€" }
                ]
            },
            {
                category: "Cave & Vins au verre",
                items: [
                    { name: "Côteaux du Layon, Domaine de la Bergerie (10cl)", price: "6.00€" },
                    { name: "Vouvray Brut Vincent Carême (Bouteille 75cl)", price: "42.00€" },
                    { name: "Champagne Laurent-Perrier (Bouteille 75cl)", price: "75.00€" }
                ]
            },
            {
                category: "Autres Boissons",
                items: [
                    { name: "Bière Artisanale BapBap Original (33cl)", price: "7.00€" },
                    { name: "Plum Wine / Chamisul Soju (8cl)", price: "4.50€" },
                    { name: "Eaux Microfiltrées FRESH (75cl)", price: "2.50€" },
                    { name: "Thé Noir Glacé Uma Gingembre et Cédrat", price: "4.50€" },
                    { name: "Café Expresso", price: "2.50€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVCWB2FVTObFQSwFwAA1gQIEYixI1bqx9hlnrymnPYV_V6XxqQNtf1ooUAHXIA3oKTu_yFGGcoAJB0wl3yVCaXc3Xmi_yCbic-h7GZFfTOIDnoWdRP5XENPZtVd2-gfEV9pAkQV3YQBt4oCvLXv7D1vYT5FQhfrOMy72r2aM5TDcEPIc6hqYV0UpfCa8eFJef5U-0Ep5wWwfXMKLe0srm7BZdNimn5d2c4m9W0H_GUkb0CJW__Mp7CgSEIPWJwt0S5Zia9cfhW7SrqaKjhN8jaCMdzwDEps5uoM6UV8wVbKKnNb7wJo6cGC3_SOjM-mJg8l_wutXMsBBO86PP6E82RRGr1WQ4kwaASt2flOxmdShVZl8fpy1KJ_9IDBLWwiPDHoEh_MMUTwUycZKxaBYuWMPE0w1dWEgFTfqmo0L1GkHKvN&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXUlA0buPWfA9wHbE9rwuyMzsVGmoUvBSQI4_d1cubBKoBxJkPVIawG-IA0uWMQaNAtW55jn2bc15B8QMiAtfgVhH-giCELLDRtLI5ouTlAqraYTnTn7qFcZNIQodIlVPhHS9EVxYML44tQ-FlSbPEzac_DMzfyH2TVB7lwRYugeCaEeA3O6Y_7PgNMGEl1muhYcWYVCt2Avzsi_0099rz-lu7wGt1XqShytYlQEx57qYu_J6BqASkvVy6s7l2hNNK9ohLD5_J8GOa3MZB7aN9-WcTB8dJkzvYabxPlgiGXFA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    instagram_handle: "pierresang",
    verified: true,
    google_rating: 4.6,
    description: "C'est l'adresse qui a démocratisé la bistronomie de comptoir à Paris. Pierre Sang Boyer y impose un concept redoutable : le menu à l'aveugle. Une fusion franco-coréenne détonante servie au couteau par une jeune garde de chefs devant vous. Vous goûtez, vous devinez les ingrédients, vous êtes bluffé.",
    insider_tip: "• Réservez impérativement une place au haut comptoir ('Au bar') sur le site, l'expérience n'a aucun sens sur une table isolée.\n• Concept à l'aveugle total : si vous êtes très difficile ou multiallergique, fuyez.\n• L'un des meilleurs rapports qualité/prix Michelin/Gastronomique du quartier.",
    expert_catchline: "Haute gastronomie ludique : asseyez-vous au comptoir, mangez à l'aveugle, et tentez de deviner les ingrédients.",
    specials: {
        cuisine: ["Menu Découverte à l'aveugle", "Fusion France/Corée du Sud", "Ssamjang (condiment)"],
        drinks: ["Accords Mets et Vins sur-mesure", "Vins au verre surprise"],
        must_eat: "Ici on ne choisit rien, on s'en remet à la brigade. Le Menu Découverte à 55.50€ est un marathon de 6 assiettes redoutablement bien calibrées autour des racines Auvergnates et Séoulites de Pierre Sang.",
        must_drink: "L'équipe de sommellerie sort des quilles audacieuses pour les accords à l'aveugle. Laissez-les vous challenger."
    }
};
