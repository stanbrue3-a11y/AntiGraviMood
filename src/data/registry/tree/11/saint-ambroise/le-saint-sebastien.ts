import { SurgicalPlace } from '../../../type-definition';

export const le_saint_sebastien: SurgicalPlace = {
    id: "poi-le-saint-sebastien",
    name: "Le Saint Sébastien",
    slug: "le-saint-sebastien",
    category: "restaurant",
    subcategory: ["bistronomique", "vins natures", "végétal", "de saison"],
    location: {
        address: "42 Rue Saint-Sébastien",
        arrondissement: 11,
        lat: 48.8615061,
        lng: 2.3710352,
        nearest_metro: "Richard-Lenoir",
        metro_lines: [5],
        google_id: "ChIJfeigXs9t5kcRtpeq9DfcWXk"
    },
    moods: {
        chill: 60,
        festif: 15,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: 18:30–23:00\nmardi: 18:30–23:00\nmercredi: 18:30–23:00\njeudi: 18:30–23:00\nvendredi: 18:30–23:00\nsamedi: 18:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.lesaintsebastien.paris/",
            label: "RÉSERVER (SITE)"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 0,
        wine_glass: 11.00,
        coffee_price: 4.00,
        dish_price: 33.00, // VERIFIED 2025: Median of main courses (29€ to 45€)
        last_updated: "2026-03-06",
        menu_items: [
            {
                category: "Grignotages",
                items: [
                    { name: "Pimientos del Piquillo", price: "9.00€" },
                    { name: "Olives vertes de Sicile", price: "5.00€" },
                    { name: "Anchois de Cantabrie (5 pcs)", price: "16.00€" },
                    { name: "Cecina de boeuf Black Angus", price: "20.00€" }
                ]
            },
            {
                category: "Entrées",
                items: [
                    { name: "Betterave, crème bleu de laqueuille", price: "17.00€" },
                    { name: "Langue de boeuf, chou noir, salsa verde", price: "18.00€" },
                    { name: "Tostada de drêche, coques, rémoulade", price: "17.00€" },
                    { name: "Poireaux vinaigrette revisitée", price: "16.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "Tortellini de châtaigne au chèvre fumée", price: "29.00€" },
                    { name: "Maigre au barbecue, sauce poire & potimarron", price: "34.00€" },
                    { name: "Caille des Deux-Sèvres au barbecue", price: "32.00€" },
                    { name: "Pigeon de Racan rôti", price: "38.00€" },
                    { name: "Épaule d'agneau confite à partager", price: "45.00€" }
                ]
            },
            {
                category: "Desserts & Fromages",
                items: [
                    { name: "Assiette de fromages fermiers", price: "16.00€" },
                    { name: "Sorbet citron, crème vanille, huile de laurier", price: "9.00€" },
                    { name: "Panna Cotta champignon, mousse chocolat Piura", price: "13.00€" },
                    { name: "Tarta de queso, caramel à la poire", price: "13.00€" },
                    { name: "Pavlova agrumes", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWZ0rNHBiwhriiO8ZkIUbD3SitE6ar4QXQS5Rf8nCbgQKpSZQa7JtSa-ODqincMTfVCErN4fB6c0uIB5kXKSZ36SrPxV_rWfYUgAozS-ZXvQdt0IUw179bElv7H1rrhLSkW4KXgujVFivWoyYpZ9uVdmuWUsIHfLYln_BVEtRO0q7eULGugY4j2ri91SOTIjI_3QBg0JDhk4fmIl8XA0wlMvIcrqcOk5txUcuoErvYKMJATcDq4WOSBiOmyyIcqhidGUnDj6juyL2iKY5ehr_e6eop1OgliAfJtDoJIJtE&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUsgCtPYHnDcgErkH9zVwXKeMrtBw5VBFG1ZlzJngqO6AW2j0zlSSKcCLNDMkZ8yncBgs1vD8fJR6DMosdd3DoYwSUYtZFAGVZz46Ih_WBPGM2ODHkLXuYcyXy74J35TTBbNQsEZ4I9BBE2ixb05ySBG5aquFhZfoF7jidpoiX-ucMgt__N77qvcLNhybM8auTX90YljA8UBglSG_WNyVPA0tGA15KwrGmDiWX5LW8nx73Bc2N0HnogjAxrBt3Xk8kuRoapanAuhdB1kq8kF66yfUXUTy6pynHiARFqfR0&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    instagram_handle: "lesaintsebastienparis",
    verified: true,
    google_rating: 4.6,
    description: "Derrière une ancienne façade vitrée classée, Le Saint Sébastien joue la carte du bistronomique ultra-pointu et légumier. L'assiette, très moderne et axée sur une technique de feu poussée (barbecue japonais), se marie à l'une des caves à vins naturels les plus épaisses du quartier. Un repaire pour gastronomes avertis.",
    insider_tip: "• Un temple du vin nature : laissez-vous guider les yeux fermés par les sommeliers.\n• Attention, le budget pour un dîner complet avec vin tape vite très haut (compter 70-80€/pers).\n• Les créations végétales dépassent souvent les viandes en ingéniosité.",
    expert_catchline: "Néobistrot percutant et cave naturiste vertigineuse. Le QG des palais affutés du 11e.",
    specials: {
        cuisine: ["Maigre au barbecue", "Tortellini Châtaigne", "Tarta de Queso"],
        drinks: ["Pétillant Naturel", "Vins oranges", "Cidres pointus"],
        must_eat: "La rôtisse et le barbecue au charbon parfument subtilement les viandes et poissons (Maigre à 34€). Gardez de la place pour la cultissime Tarta de Queso au caramel.",
        must_drink: "Une impressionnante bible de vins naturels, sourcée avec maniaquerie."
    }
};
