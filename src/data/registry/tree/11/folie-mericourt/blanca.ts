import { SurgicalPlace } from '../../../type-definition';

export const blanca: SurgicalPlace = {
    id: "poi-blanca",
    name: "Blanca",
    slug: "blanca",
    category: "restaurant",
    subcategory: ["argentinian", "basque", "bistronomic", "fusion"],
    location: {
        address: "34 Rue Keller",
        arrondissement: 11,
        lat: 48.8553057,
        lng: 2.375595,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJN4EGozVz5kcRcL9OSHhiPWE"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:30–22:30; Fermé Lun-Dim",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.restaurantblanca.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.00,
        coffee_price: 3.50,
        dish_price: 25.00, // MANUAL: Median for main à la carte
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Blanca Paris 2024-2025
            {
                category_type: "tasting_menu",
                display_label: "Formule Déjeuner (Semaine)",
                items: [
                    { name: "Entrée + Plat", price_cents: 1850 },
                    { name: "Entrée + Plat + Dessert", price_cents: 2250 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Empanadas & Entrées",
                items: [
                    { name: "Empanada de Carne (x1)", price_cents: 550 },
                    { name: "Empanada de Humita (Maïs, Fromage)", price_cents: 500 },
                    { name: "Croquetas de Jamon", price_cents: 1000 },
                    { name: "Ceviche de thon, guacamole & maïs grillé", price_cents: 1600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats (Cuisine de Feu)",
                items: [
                    { name: "Entraña (Bifteck de hampe) Argentin", price_cents: 2500, description: "Servi avec frites et chimichurri aux algues." },
                    { name: "Entrecôte Angus Argentine (300g)", price_cents: 3400 },
                    { name: "Lieu jaune grillé, girolles & coques", price_cents: 2800 },
                    { name: "Pluma Ibérique au BBQ", price_cents: 2900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Flan au Dulce de Leche", price_cents: 900, description: "Le classique absolu, onctueux et régressif." },
                    { name: "Tarte Chocolat & Piment", price_cents: 950 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX0_lb1ej2IUqsCLSS9GkQET3s7fw-XK2eD7YV_vUP6-A-7F5Wt8XFbERFGcl4U3es2ZjBew7bsaUn91ZYOIkQV_E_kVdBbJYLOlCsWhX2QU7pYZiABLIIAAUf54jOGsX6Z9d0tK-pNjQ7m_I_qNNmlxmfL83HV_P7nH9bIJ8z70-s5B2zKSWdcRtOZiaBK0NEdXOvSKTgM4w4Tzo9QmTBn3Ug3h05W-x1rskUNe6uS_ij2CiFQ0x6fpLRgrIsFqu8patlaXx8VSTbi9lDrDG8S4a3us8dwjZ6AUf_ii30&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Blanca est l'hommage vibrant de Fernando de Tomaso et sa sœur Violetta (du Servan) à leur grand-mère basque émigrée en Argentine. Dans ce bistrot intime de la rue Keller, la cuisine fusionne avec brio l'âme du Pays Basque et la puissance des grillades argentines. Les viandes sont sourcées avec une exigence folle et cuites à la perfection, tandis que les empanadas et le flan au dulce de leche rappellent les saveurs d'enfance. Une table d'une justesse rare.",
    insider_tip: "Le flan au dulce de leche est l'un des meilleurs de la capitale : ne quittez pas la table sans l'avoir goûté. Le midi, la formule est l'un des meilleurs rapports qualité-prix du quartier.",
    expert_catchline: "Le trait d'union parfait entre le Pays Basque et l'Argentine, porté par la passion d'une famille.",
    specials: {
        cuisine: ["Grillades argentines", "Inspiration basque", "Bistronomie de feu"],
        drinks: ["Grands vins d'Argentine", "Cidre basque"],
        must_eat: "L'Entraña avec sa chimichurri maison et le Flan au Dulce de Leche.",
        must_drink: "Un Malbec puissant pour accompagner la viande rouge."
    }
};
