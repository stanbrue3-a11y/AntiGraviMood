import { SurgicalPlace } from '../../../type-definition';

export const aujourdhuiDemain: SurgicalPlace = {
    id: "poi-aujourdhui-demain",
    name: "Aujourd'hui Demain",
    slug: "aujourdhui-demain",
    category: "restaurant",
    subcategory: ["vegan", "concept store", "brunch", "coffeeshop"],
    location: {
        address: "42 Rue du Chemin Vert",
        arrondissement: 11,
        lat: 48.8598,
        lng: 2.3739,
        nearest_metro: "Richard Lenoir",
        metro_lines: [5],
        google_id: "ChIJq6rOEPlt5kcRmR1sEWraBMY"
    },
    moods: {
        chill: 80,
        festif: 40,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Mer-Dim: 11:00–23:00 (Cuisine ferme à 22h, Brunch week-end jusqu'à 18h)",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://aujourdhui-demain.com/reservation/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 7.5, // Estimé pour draft artisanale
        wine_glass: 0,
        coffee_price: 3.50,
        dish_price: 18, // MANUAL: Prix moyen d'un plat principal
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Aujourd'hui Demain 2025 Standard (Vegan Comfort Food)
            {
                category: "Les Incontournables (Main Plats)",
                items: [
                    { name: "Mac n Cheese Carbonara", price: "14.90€", description: "Leur best-seller, crémeux et bluffant." },
                    { name: "Classic Cheddar Burger", price: "18.90€", description: "Steak végétal, cheddar fondu, frites." },
                    { name: "Croque-Monsieur Forever", price: "17.90€", description: "Béchamel végétale maison, généreux." },
                    { name: "Filet Très Très Très Mignon", price: "20.90€", description: "Alternative au filet, écrasé de PDT." },
                    { name: "Bistro Burger", price: "20.00€" },
                    { name: "Fish and Peas", price: "17.00€" },
                    { name: "Spring No Mozza", price: "16.90€" }
                ]
            },
            {
                category: "Sides & Starters",
                items: [
                    { name: "Patatas Truffe", price: "7.00€", description: "Frites, huile de truffe, sel fumé." },
                    { name: "Chili Cheese Fries", price: "8.50€" }
                ]
            },
            {
                category: "Pâtisseries & Sweets",
                items: [
                    { name: "Brownie Chocolat Caramel", price: "7.00€" },
                    { name: "Flan Chocolat Vanille", price: "7.00€" },
                    { name: "Cookie Artisanal", price: "4.00€" },
                    { name: "Rolling Bun (Saison)", price: "4.50€" }
                ]
            },
            {
                category: "Boissons & Coffeeshop",
                items: [
                    { name: "Latte Sésame noir", price: "5.50€" },
                    { name: "Homemade Bissap", price: "4.00€" },
                    { name: "Ginger Beer Artisanale", price: "5.50€" },
                    { name: "Purple Limo Mocktail", price: "7.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV8oWT1IqC2inaUyalVjLc7cIkMeu6M9nVmg4NPDqeqOJcyn1Nco1RrHqecu4f2ivolSUYqPyipfU_dK7Q5BK6-0JjB-UrdmVmlANSy4Wats8EC3Nj6FaD_d4RZDnMlYd2MWiZFgqUcjzlyjXppxUI-XbTEFz2fj4BsNAD6z9P5x2vcNBKb3e1PJGLmofSaVtqd_JOIakbozZgTYtMsN_aIS0K9wFPyIpPZv1LEG4cCEtbHWt75dc_6Pj3LW22e_Fe_WFnZrDVNI8Wizk_fP18VaZqkw3bAgcer53IGrMBVJOC7Ayw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Le premier concept-store 100% vegan de Paris. Plus qu'un restaurant, c'est un carrefour de vie pour la communauté végétale : cantine comfort food, coffeeshop pointu et boutique engagée.",
    insider_tip: "Leur Mac n Cheese Carbonara est une prouesse technique végétale. Prévoyez du temps pour flâner dans la boutique (vêtements, cosmétiques, épicerie) après votre repas.",
    expert_catchline: "Le temple de la vie végétale à Paris, entre food et shopping.",
    specials: {
        cuisine: ["Mac N Cheese végétal", "Burgers gourmands", "Boulangerie vegan"],
        drinks: ["Specialty Lattes", "House Infusions"],
        must_eat: "Le Croque-Monsieur Forever pour les amateurs de comfort food.",
        must_drink: "Un Ultraviolet latte pour les couleurs et le goût."
    }
};
