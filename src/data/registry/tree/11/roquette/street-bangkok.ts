import { SurgicalPlace } from "../../../type-definition";

export const streetBangkokBastille: SurgicalPlace = {
    id: "poi-street-bangkok-bastille",
    name: "Street Bangkok (Bastille)",
    slug: "street-bangkok-bastille",
    category: "restaurant",
    subcategory: ["Thaïlandais", "Street Food", "BBQ Thaï", "Populaire"],
    location: {
        address: "13 Rue de la Roquette, 75011 Paris",
        arrondissement: 11,
        lat: 48.8545,
        lng: 2.3705,
        nearest_metro: "Bastille",
        metro_lines: [1, 5, 8],
        google_id: "ChIJ8X-_x3ZshkcRV_Vl3Qk_V_Q"
    },
    moods: {
        chill: 50,
        festif: 50,
        culturel: 10
    },
    pricing: {
        avg_budget: 18,
        dish_price: 16.00, // BBQ Chicken
        last_updated: "2026-03-08",
        index_price: 13.00, // Pad Thai
        menu_items: [
            {
                category: "Grillades & BBQ Thaï (Flamme & Braise)",
                items: [
                    { name: "Sate Gai (x3) - Entrée", price: "11.00€", description: "Brochettes de poulet coco-curry-curcuma." },
                    { name: "BBQ Ribs Secret Sauce", price: "18.50€", description: "Travers de porc laqués, sauce ail secrète." },
                    { name: "Tigre Qui Pleure", price: "19.50€", description: "Bœuf mariné citronnelle & huile d'échalote." },
                    { name: "Gai Yang (Cuisse de Poulet)", price: "17.00€", description: "Désossée, laquée et grillée à la flamme." },
                    { name: "Sate Gai (Plat)", price: "15.50€" },
                    { name: "Mix 2 Viandes (Poulet & Porc)", price: "28.00€" },
                    { name: "Crying Beef Salad", price: "18.00€" }
                ]
            },
            {
                category: "Le Wok (Saisis à Haute Température)",
                items: [
                    { name: "Pad Thaï Crevettes", price: "16.50€", description: "Noodles de riz, tamarin, cacahuètes, crevettes." },
                    { name: "Pad Thaï Poulet", price: "15.50€" },
                    { name: "Pad Ka Prao Poulet Gai Yang", price: "17.50€", description: "Basilic sacré, piment, ail, œuf frit." },
                    { name: "Pad Ka Prao Tofu (V)", price: "15.00€" },
                    { name: "Pad See Ew Bœuf", price: "16.50€", description: "Larges nouilles de riz, brocoli chinois." },
                    { name: "Fried Rice Crab", price: "19.00€" }
                ]
            },
            {
                category: "Curries Onctueux (Lait de Coco & Épices)",
                items: [
                    { name: "Red Curry Gai Yang", price: "18.50€", description: "Lait de coco, feuilles de kaffir, poulet grillé." },
                    { name: "Panang Curry Crevettes", price: "19.00€" },
                    { name: "Green Curry Tofu & Aubergines", price: "16.00€" },
                    { name: "Massaman Beef", price: "18.50€", description: "Mijoté, pommes de terre, cacahuètes." }
                ]
            },
            {
                category: "Som Tam & Sides",
                items: [
                    { name: "Som Tam (Salade Papaye Verte)", price: "9.50€", description: "Piment, citron vert, cacahuètes." },
                    { name: "Tom Kha Kai (Soupe Coco)", price: "6.50€" },
                    { name: "Salade de Concombre Sésame", price: "5.50€" },
                    { name: "Hot Pickles Maison", price: "4.50€" },
                    { name: "Jasmin Rice", price: "3.50€" },
                    { name: "Sticky Rice", price: "4.00€" },
                    { name: "Légumes Sautés au Wok", price: "7.00€" }
                ]
            },
            {
                category: "Cocktails & Softs Signature",
                items: [
                    { name: "Khao Mule (Cocktail)", price: "12.00€", description: "Vodka, gingembre, piment, citronnelle." },
                    { name: "Bangkok Garden", price: "13.00€", description: "Gin, basilic thaï, concombre." },
                    { name: "Limonade Gingembre Maison", price: "5.50€" },
                    { name: "Bière Singha (33cl)", price: "6.50€" },
                    { name: "Thé Glacé Thaï (Lait de coco)", price: "6.00€" },
                    { name: "Jus de Coco Frais", price: "6.50€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Mango Sticky Rice", price: "9.00€" },
                    { name: "Banane Frite au Miel", price: "7.50€" },
                    { name: "Mochi Glacé (x2)", price: "6.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        terrace: true,
        vegan_friendly: true,
        opening_hours_raw: "Lundi-Dimanche: 12:00–01:00",
        main_action: {
            type: "site",
            url: "https://streetbangkok.fr/",
            label: "COMMANDER"
        }
    },
    description: "Le temple de la street food thaïlandaise à Bastille. On y vient pour les grillades au charbon de bois (Meat BBQ) qui embaument la rue de la Roquette, et pour l'énergie débordante du lieu. Inspiré par les marchés de nuits de Bangkok, le décor est brut, néonisé et sonore. C'est pimenté, c'est bruyant, c'est bon.",
    expert_catchline: "Le meilleur du BBQ thaï au charbon de bois et des currys explosifs à Bastille.",
    insider_tip: "• Le Tigre qui pleure est la star absolue du lieu, demandez-le bien piquant si vous osez.\n• Ouvert jusqu'à 1h du matin, c'est le spot parfait pour un manger un vrai plat après quelques verres.\n• Le Pad Ka Prao est l'un des plus authentiques de Paris (attention au piment).\n• Goûtez leur thé glacé citronnelle maison pour éteindre le feu du curry.",
    specials: {
        cuisine: ["Thaïlandais", "Street BBQ", "Pad Thaï"],
        drinks: ["Bière Singha", "Nam Manao", "Thé Citronnelle"],
        must_eat: "Le Tigre qui pleure et la salade de papaye verte."
    },
    images: {
        hero: "https://streetbangkok.fr/wp-content/uploads/2021/04/Street-Bangkok-Bastille-Design.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.4
};
