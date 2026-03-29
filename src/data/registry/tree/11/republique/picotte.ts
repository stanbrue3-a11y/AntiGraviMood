import { SurgicalPlace } from '../../../type-definition';

export const picotte: SurgicalPlace = {
    id: "poi-picotte",
    name: "Picotte",
    slug: "picotte",
    category: "restaurant",
    subcategory: ["bistronomique", "terroir", "français", "restaurant"],
    location: {
        address: "42 Rue de Malte",
        arrondissement: 11,
        lat: 48.8662365,
        lng: 2.3675038,
        nearest_metro: "République",
        metro_lines: [3, 5, 8, 9, 11],
        google_id: "ChIJgQhmfqZv5kcR1G6PhtJwf40"
    },
    moods: {
        chill: 65,
        festif: 10,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 19:00–22:00\nmercredi: 12:00–14:00, 19:00–22:00\njeudi: 12:00–14:00, 19:00–22:00\nvendredi: 12:00–14:00, 19:00–22:00\nsamedi: 12:15–14:30, 19:00–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.picotte.fr/accueil",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Plats à la carte généralement entre 25€ et 30€.
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus",
                items: [
                    // VERIFIED: Source TheFork (2024-2025)
                    { name: "Menu Déjeuner", price_cents: 2700, description: "La carte blanche du déjeuner (change chaque semaine)" },
                    { name: "MENU PICOTTE (E+P+D, Soir)", price_cents: 4900, description: "Menu 3 temps le soir." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées (Tour de France)",
                items: [
                    // VERIFIED: Mises à jour récentes (2024-2025)
                    { name: "Carpaccio de Saint Jacques, chou fleur, vinaigrette capucine", price_cents: 1500 },
                    { name: "Œuf Bio Parfait, hollandaise pistache, oca du Pérou", price_cents: 1400 },
                    { name: "Endive braisée, jambon blanc maison, béchamel pain d'épice", price_cents: 1300 },
                    { name: "Toast de Morbier, beurre sapin, condiment ail noir", price_cents: 1400 },
                    { name: "Tartiflette revisitée (disque de pomme de terre, siphon reblochon)", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats (Tour de France)",
                items: [
                    // VERIFIED: Plats 25-33€
                    { name: "Longe de Porc Duroc grillée, toffailles, mousseline patate douce", price_cents: 2800 },
                    { name: "Pêche du jour rôtie (sauce vin rouge, anguille fumée, épinards)", price_cents: 2900 },
                    { name: "Cannelloni de Poireau farci aux lentilles et noix", price_cents: 2500, description: "Plat végétarien." },
                    { name: "La Bouillabaisse de Picotte (poissons rôtis, rouille, pommes de terre)", price_cents: 3300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Flan Antillais, crème coco et goyave", price_cents: 1100 },
                    { name: "Chichi frégi, ganache chocolat noir, espuma banane", price_cents: 1200 },
                    { name: "Nonnettes de Reims", price_cents: 1100 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWjHPSkWzvYqZU9k2tEXFLQEWGj2yppOqMGQp7McCOthMgc72DGnQnCev7KTEkHRbk_bLQwIF5-7IDYqxPcALFYCXHecjqFZg3orczo9qxw7960h6Aq5uNCg62KJ9AYAUEzR5RHQ0GFqZzDttoXalJm4la2fO2UcqcJxA7bXa8bewOtQy1qjjtRU0RNkfJVM8SyKsCYGoOTExXkemqZKTMvMkIoDEiJRA2zYvwD7sZOlegQw7tjXr-2duhtKK3eDgIJf3a4hlwYQQiey5F1f3Ef5iRVplsjpi-hVvOhu8tmBg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVtjOQKlQgVe9RJXwQwpSt6D-2UxGGQeJbvDWH5MyQ9vxq1ve5PSf5pm9axZxhMdpEDUy2jq-nMYXILrjVMMJOeeM7tWQ6MwJNKIIy3w6jzC4l70gJQ0FeJRSTodDMj1k8XOkFcjQdxvtPPRZ5F1RKg6opFmK3TPvjgid_4Bk4o9kzBHkzYDAuSzNEb9cnn7vEjM3nYvjHdVuxOEqo9SXdVoAJYw0zevH0r5bUEzzVqcsza2X1mK2jHPiiCSbW4iDhCV4WKGbBuKDfGQaAW74FdX8wlUrfgGAMtPEB5xBHLSg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX4Xdd0FWSZksVISzQoN2lQAY2D1Tvpmlc1ccddNX6sycQE8p8mdEVSjg3XB_VO4NBWW1GTOzgMrcBX_CO35VCOdR6zgLkxirAAHr6nQwsqKReJORv-0Oi5WSasmpIylKutzdLlu1Z3HE_12hJoofDVR0jO4ScMWbn-FtWF_Vy1BkRLWSogEFKtSjUExMqExKlEiP_DibGhmGZG2QEV1czUIasmybn5ljzD8c2PfxgsJdDkyP7P4pKm15fVlzBlcUNuhKVjh5WWkRLLNw8oXNhAj_JkQACJ8YGieJ4vdIejx0oxU_sV_sHpxkpQEuqzXdu_PMovD0fExmWjwp3BRot_OM4wL_wOdYrGlZvqAu5BS1In9cIVVKyw83w8p_H2OZYUEGFhxokwDKaPUDEbEra7rF_SblpeXrPk7TFjX4Oi1C5_39sSPbxdtTACEW-N&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "picotte.paris",
    verified: true,
    google_rating: 4.7,
    description: "Un fantastique Tour de France culinaire à l'esprit bistronomique. Picotte ressuscite les grandes recettes régionales (tartiflette, bouillabaisse, pimentade antillaise, nonnettes) en leur appliquant les codes et le raffinement de la gastronomie moderne. La cheffe Marta Biagianti réussit le pari de faire de la cuisine de terroir un art subtil et contemporain.",
    insider_tip: "• La carte change très régulièrement (le midi chaque semaine, le soir 4 fois par an) selon les vraies saisons.\n• La bouillabaisse revisitée de Picotte (33€) est magistrale et ultra-digeste.\n• Le menu compet du soir (E+P+D) à 49€ offre l'expérience parfaite.\n• Il y a toujours d'excellentes options végétariennes, sans gluten ou véganes (ex: le cannelloni de poireau).",
    expert_catchline: "Le patrimoine culinaire régional français élevé au rang de bistronomie pointue et légère.",
    specials: {
        cuisine: ["Bouillabaisse revisitée", "Tartiflette contemporaine", "Longe de Porc Duroc", "Flan antillais"],
        drinks: ["Vins de vignerons locaux", "Petites appellations régionales"],
        must_eat: "Laissez-vous surprendre par leurs revisites de plats ultra-classiques (comme l'œuf parfait ou le toast au Morbier) : c'est là que la technique moderne de la cheffe brille le plus.",
        must_drink: "Restez dans le thème du terroir avec un verre de Vin Jaune du Jura ou un rouge de Touraine."
    }
};
