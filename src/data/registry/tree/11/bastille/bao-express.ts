import { SurgicalPlace } from "../../../type-definition";

export const baoExpress: SurgicalPlace = {
    id: "poi-bao-express",
    name: "Bao Express (Bastille)",
    slug: "bao-express",
    category: "restaurant",
    subcategory: ["Chinois", "Dim Sum", "Boulangerie", "Hong Kong Diner"],
    location: {
        address: "10 Rue Bréguet, 75011 Paris",
        arrondissement: 11,
        lat: 48.8552,
        lng: 2.3708,
        nearest_metro: "Breguet-Sabin",
        metro_lines: [5],
        google_id: "ChIJ7fS-x3ZshkcRSX6W9_Xl3Qk"
    },
    moods: {
        chill: 70,
        festif: 30,
        culturel: 10
    },
    pricing: {
        avg_budget: 20,
        dish_price: 15.00, // Unité de Satiété (Plat Express / Multi-Baos)
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Bao Bakery (Pineapple Baos)",
                items: [
                    { name: "Pineapple Bao Char Siu", price: "7.00€", description: "Le classique brioché au porc laqué." },
                    { name: "Pineapple Bao Parisien", price: "7.00€", description: "Jambon blanc, Comté, touche de moutarde." },
                    { name: "Pineapple Bao Coffee & Peanut", price: "7.00€" },
                    { name: "Pineapple Bao Lime & Pineapple", price: "7.00€" },
                    { name: "Pineapple Bao Green Tea & Black Sesame", price: "7.00€" },
                    { name: "Bao Nature (x2)", price: "4.50€" }
                ]
            },
            {
                category: "Fried & Steamed Dim Sum",
                items: [
                    { name: "Har Gow (Crevettes x4)", price: "6.50€" },
                    { name: "Siu Mai Porc & Crevettes (x4)", price: "6.00€" },
                    { name: "Ham Sui Gao (Fritures de riz gluant x3)", price: "7.50€", description: "Poulet, shiitake, radis salé." },
                    { name: "Spring Rolls Légumes (x3)", price: "5.50€" },
                    { name: "Xiao Long Bao Tradition (x4)", price: "7.50€" },
                    { name: "Wontons Sauce Pimentée", price: "9.00€" },
                    { name: "Nems au Poulet Artisanal", price: "8.00€" },
                    { name: "Baozi Bœuf Teriyaki", price: "8.50€" },
                    { name: "Vapeurs de Légumes Cristal", price: "6.00€" }
                ]
            },
            {
                category: "Les Plats de l'Express",
                items: [
                    { name: "Sweet & Sour Chicken", price: "15.00€" },
                    { name: "Canard Laqué de Canton", price: "18.50€", description: "Servi avec petites crêpes et légumes." },
                    { name: "Aubergines Chinoises 'Fish Fragrant'", price: "13.00€" },
                    { name: "Scallops à la Vapeur & Vermicelles", price: "16.50€" },
                    { name: "Riz Sauté Express", price: "9.50€" },
                    { name: "Noodles Sautées au Wok", price: "11.00€" },
                    { name: "Pak Choi au Gingembre", price: "7.50€" }
                ]
            },
            {
                category: "The Underpool (Signatures)",
                items: [
                    { name: "Crystal Lotus (Cocktail)", price: "13.00€", description: "Gin, lotus blanc, touche florale." },
                    { name: "Rose Prune", price: "14.00€", description: "Pisco infusé vanille, Umeshu." },
                    { name: "Sichuan Mule", price: "13.00€", description: "Vodka, poivre de Sichuan, ginger beer." },
                    { name: "Beijing Sour", price: "14.00€" },
                    { name: "Underpool Negroni", price: "15.00€" },
                    { name: "Mocktail Dragon Fruit", price: "9.00€" }
                ]
            },
            {
                category: "Boissons Traditionnelles",
                items: [
                    { name: "HK Coffee Milk Tea (Hot/Cold)", price: "6.00€" },
                    { name: "Wulong Milk Tea", price: "6.50€" },
                    { name: "Baume du Tigre Latte (Ginger/Spices)", price: "7.00€" },
                    { name: "Jus de Coco Frais", price: "5.50€" },
                    { name: "Tsingtao Beer", price: "5.50€" },
                    { name: "Coca Cola / Perrier (33cl)", price: "3.50€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: true,
        opening_hours_raw: "Lundi-Dimanche: 12:00–14:30, 19:00–22:30",
        main_action: {
            type: "site",
            url: "https://www.baofamily.co/restaurants/bao-express",
            label: "VOIR LE MENU"
        }
    },
    description: "Inspiré par les diners de Hong Kong des années 70, Bao Express est le flagship de la Bao Family. Plus qu'un restaurant, c'est un carrefour de gourmandise avec son buffet de vapeurs, sa boulangerie chinoise et son bar caché au sous-sol (The Underpool). Design soigné et saveurs explosives garanties.",
    expert_catchline: "Un diner de Hong Kong rétro en plein Bastille : Pineapple baos et vapeurs en folie.",
    insider_tip: "• Commencez par la partie boulangerie pour prendre un Pineapple Bao à emporter si c'est complet.\n• Le riz sauté au canard laqué est l'un des meilleurs de la capitale.\n• Ne repartez pas sans avoir jeté un œil au Underpool au sous-sol pour un cocktail détonnant.\n• Les Xiao Long Bao sont excellents mais se mangent très vite, prévoyez large !",
    specials: {
        cuisine: ["Hong Kong Diner", "Dim Sum", "Boulangerie Chinoise"],
        drinks: ["Hong Kong Milk Tea", "Cocktails Speakeasy", "Lemon'aid Passion"],
        must_eat: "Le Char Siu Pineapple Bao et le canard laqué."
    },
    images: {
        hero: "https://www.baofamily.co/wp-content/uploads/2023/01/Bao-Express-Restaurant-Paris-Design.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipP_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.5
};
