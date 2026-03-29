import { SurgicalPlace } from '../../../type-definition';

export const fulgurances: SurgicalPlace = {
    id: "poi-fulgurances",
    name: "Fulgurances, l’Adresse",
    slug: "fulgurances",
    category: "restaurant",
    subcategory: ["bistronomique", "chef éphémère", "créatif", "restaurant"],
    location: {
        address: "10 Rue Alexandre Dumas",
        arrondissement: 11,
        lat: 48.852931,
        lng: 2.389864,
        nearest_metro: "Alexandre Dumas",
        metro_lines: [2],
        google_id: "ChIJq5R_KHVy5kcR46l3B8-T4ls"
    },
    moods: {
        chill: 50,
        festif: 15,
        culturel: 35
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:30–22:00\nmardi: Fermé\nmercredi: Fermé\njeudi: 19:30–22:00\nvendredi: 19:30–22:00\nsamedi: 12:00–14:30, 19:30–22:00\ndimanche: 12:00–14:30, 19:30–22:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://fulgurances.com/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 22, // Plat Médian: Prix du Menu Déjeuner (E+P)
        force_manual_dish_price: true,
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            // ═══════════════════════════════════════════
            // MENUS RÉELS VÉRIFIÉS (Source: 2024-2025 Residency Cycle)
            // ═══════════════════════════════════════════
            {
                category_type: "tasting_menu",
                display_label: "L'Univers du Chef en Résidence (Formules)",
                items: [
                    { name: "Menu Déjeuner (entrée + plat)", price_cents: 2200, description: "L'expression du midi, courte et percutante." },
                    { name: "Menu Déjeuner complet (E+P+D)", price_cents: 2500 },
                    { name: "Menu Dîner (3 temps)", price_cents: 4400, description: "La balade initiatique du soir." },
                    { name: "Menu Dîner Dégustation (5-6 temps)", price_cents: 7500, description: "Immersion totale dans l'univers du résident (selon chef)." },
                    { name: "Accord Mets & Vins", price_cents: 4500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Inspirations des Résidences (Items Historiques)",
                items: [
                    { name: "Ceviche de mulet noir, hibiscus & coriandre", price_cents: 0 },
                    { name: "Bouillon de canard, œuf mollet & moelle", price_cents: 0 },
                    { name: "Brocoli brûlé, crème de tournesol & anchois", price_cents: 0 },
                    { name: "Gnocchis à la sauge & noisettes du Piémont", price_cents: 0 },
                    { name: "Cabillaud nacré, émulsion lait de coco & galanga", price_cents: 0 },
                    { name: "Paleron de bœuf au barbecue, échalotes", price_cents: 0 },
                    { name: "Longe de porc, courgettes grillées & anchois", price_cents: 0 },
                    { name: "Tartare de thon, citron vert et piment", price_cents: 0 },
                    { name: "Mousse de foie de volaille, gelée de pomme", price_cents: 0 },
                    { name: "Salade de courge rôti, graines de courge & féta", price_cents: 0 },
                    { name: "Risotto de petit-épeautre aux champignons", price_cents: 0 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Éphémères",
                items: [
                    { name: "Ganache chocolat fumé & glace topinambour", price_cents: 0 },
                    { name: "Tartelette rhubarbe & poivre de Timut", price_cents: 0 },
                    { name: "Sorbet herbes fraîches & yaourt", price_cents: 0 },
                    { name: "Mignardises du jour", price_cents: 0 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures & Cave Pointue",
                items: [
                    { name: "Verre de vin nature (Sully, Loire...)", price_cents: 900 },
                    { name: "Bouteille de vin nature (à partir de)", price_cents: 2800 },
                    { name: "Eau micro-filtrée (Castalie)", price_cents: 350 },
                    { name: "Café de spécialité", price_cents: 450 },
                    { name: "Thé / Infusions", price_cents: 450 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUNj2EqygIk3P34pgB7cJ3OiWFvfTdF2OfPdumFSH5jIcdOpYxd7BH6IwKfxP51Dkin1Fm15fQnnSQO3Iw6qgspJydaBTEaQllGzJCfy2yacWtGXK8UcvQF2sFK2QYmBrbo2WcQvv9np3cvAHygXm40bq7RCC6-gKo-XoFGrUADjN7DBeNAGC0nnpZNAJTt2FaH1jjiq2mt84Wmn36PzDJSfxq_bEESqEhNCMgccYZ6_wzwZ2GiczczHyPonCkEds8Y76EapHZtsDRfb9-19bO7FyGxeuEX3wRchtOtoS3gFvZdsU7PtRjx1ju-dC54RC12RummgZNUxg67m2XYun1GHX4WyCXGk-p4IPCNh3ETtR-QbjPQ4dkpNaLOblmrOKmkM-SRZEA9HoF0RZWz469etArF4wiH7W9sb74WymIpJr8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWvXoI6ggFBYp6kfUwYP6H0MZk8Qbak8_dRZsn-YjttIGkJTLxIvHN2a-q-E-Eyu31sjCW4wdxEAX1dX4mzkeBf0gA1qjacOjFuHHWIMior9FOSbESBPtKCpTya2A0rww7TiCN9SCGcam9aT73SpHYmw_U3foZ-fSK3bvZpIE3SBaPuLX3OpvxYTXEaDkQYmzjx-ssiJD9vbBDm_2YaKaK25ywqgMkahIAPEGvr6CX-PxikrPgjcqEeCp8k4RQ0Dhhn_iPhw73htpwGssIWWxoqHv7KwmHdW8MGpZMVF-DhUA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXYYY_qu6AXUElmBS5mE2WphMQ6X9ezrovuGtSjNShSXonO9sBVj6dUPWfXv-K9Y9ToYl_fd8O3H0akiKyw7BF9vxA8OFVYkgC2nphCoLkvalpDmb-J-cdRrvyOefQMl0Lm9fE94kpn7lStVLQiQ9JHzBxMafZ3hPPU-NEpTocbiE3O9DPgmsFaONSmQAIiLBAia-ipMmkllL1aI5BOik8GowWjtlpPWedspIjGlX0KxRjI7_OQfZohU0s9_rrvS-bPxGTn3UIC5JbklN6xob0D7rzIufshM0gxWbE7dQyHOJMC7b3gCpsqC7MfLOLlrlG2Y9lD_tdYEHTIqqkm5B4dmp7ATiVdw9gKAfFblJYTHuS_DzjAm5zw9571OoIT7w5peTYWVUizOZDvXvj_aqTgEnvdE_1NVeEEt6yWhTN_FMqe5RRxtz2k-W9Sjy73&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "fulgurances",
    verified: true,
    google_rating: 4.7,
    description: "Fulgurances est un concept unique à Paris : un restaurant-tremplin où des chefs émergents font des résidences de plusieurs mois, apportant chacun leur propre univers culinaire. Le résultat est une cuisine toujours créative, toujours différente, dans un cadre sobre et épuré. C'est l'anti-routine — chaque visite est une découverte.",
    insider_tip: "• Le concept est unique en France : un nouveau chef tous les quelques mois. Chaque visite est différente.\n• Le menu midi à 22€ (E+P) est le deal absolu — de la cuisine créative de jeune chef pour le prix d'un bistrot.\n• Le menu dîner à 44€ (3 temps) ou 58€ (4 temps) offre l'expérience complète.\n• Consultez le site pour savoir quel chef est en résidence actuellement.\n• Les vins natures sont bien sélectionnés et changent aussi avec les chefs.",
    expert_catchline: "Le restaurant-tremplin du 11ème : chefs émergents en résidence, menu midi à 22€.",
    specials: {
        cuisine: ["Carte qui change avec chaque chef", "Cuisine créative et saisonnière", "Options végétariennes fréquentes"],
        drinks: ["Vins natures", "Sélection adaptée au chef en résidence"],
        must_eat: "Impossible de recommander un plat fixe — la carte change avec chaque chef. Le menu midi à 22€ est toujours le meilleur deal. Le soir, le menu complet à 58€ est l'expérience la plus aboutie.",
        must_drink: "Les vins natures changent aussi — faites confiance au service pour les accords."
    }
};
