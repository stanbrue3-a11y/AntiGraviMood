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
                category_type: "other",
                display_label: "Grillades & BBQ Thaï (Flamme & Braise)",
                items: [
                    { name: "Sate Gai (x3) - Entrée", price_cents: 1100, description: "Brochettes de poulet coco-curry-curcuma." },
                    { name: "BBQ Ribs Secret Sauce", price_cents: 1850, description: "Travers de porc laqués, sauce ail secrète." },
                    { name: "Tigre Qui Pleure", price_cents: 1950, description: "Bœuf mariné citronnelle & huile d'échalote." },
                    { name: "Gai Yang (Cuisse de Poulet)", price_cents: 1700, description: "Désossée, laquée et grillée à la flamme." },
                    { name: "Sate Gai (Plat)", price_cents: 1550 },
                    { name: "Mix 2 Viandes (Poulet & Porc)", price_cents: 2800 },
                    { name: "Crying Beef Salad", price_cents: 1800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Le Wok (Saisis à Haute Température)",
                items: [
                    { name: "Pad Thaï Crevettes", price_cents: 1650, description: "Noodles de riz, tamarin, cacahuètes, crevettes." },
                    { name: "Pad Thaï Poulet", price_cents: 1550 },
                    { name: "Pad Ka Prao Poulet Gai Yang", price_cents: 1750, description: "Basilic sacré, piment, ail, œuf frit." },
                    { name: "Pad Ka Prao Tofu (V)", price_cents: 1500 },
                    { name: "Pad See Ew Bœuf", price_cents: 1650, description: "Larges nouilles de riz, brocoli chinois." },
                    { name: "Fried Rice Crab", price_cents: 1900 }
                ]
            },
            {
                category_type: "other",
                display_label: "Curries Onctueux (Lait de Coco & Épices)",
                items: [
                    { name: "Red Curry Gai Yang", price_cents: 1850, description: "Lait de coco, feuilles de kaffir, poulet grillé." },
                    { name: "Panang Curry Crevettes", price_cents: 1900 },
                    { name: "Green Curry Tofu & Aubergines", price_cents: 1600 },
                    { name: "Massaman Beef", price_cents: 1850, description: "Mijoté, pommes de terre, cacahuètes." }
                ]
            },
            {
                category_type: "other",
                display_label: "Som Tam & Sides",
                items: [
                    { name: "Som Tam (Salade Papaye Verte)", price_cents: 950, description: "Piment, citron vert, cacahuètes." },
                    { name: "Tom Kha Kai (Soupe Coco)", price_cents: 650 },
                    { name: "Salade de Concombre Sésame", price_cents: 550 },
                    { name: "Hot Pickles Maison", price_cents: 450 },
                    { name: "Jasmin Rice", price_cents: 350 },
                    { name: "Sticky Rice", price_cents: 400 },
                    { name: "Légumes Sautés au Wok", price_cents: 700 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails & Softs Signature",
                items: [
                    { name: "Khao Mule (Cocktail)", price_cents: 1200, description: "Vodka, gingembre, piment, citronnelle." },
                    { name: "Bangkok Garden", price_cents: 1300, description: "Gin, basilic thaï, concombre." },
                    { name: "Limonade Gingembre Maison", price_cents: 550 },
                    { name: "Bière Singha (33cl)", price_cents: 650 },
                    { name: "Thé Glacé Thaï (Lait de coco)", price_cents: 600 },
                    { name: "Jus de Coco Frais", price_cents: 650 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Mango Sticky Rice", price_cents: 900 },
                    { name: "Banane Frite au Miel", price_cents: 750 },
                    { name: "Mochi Glacé (x2)", price_cents: 600 }
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
