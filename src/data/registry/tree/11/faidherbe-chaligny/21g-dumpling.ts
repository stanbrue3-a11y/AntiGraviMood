import { SurgicalPlace } from "../../../type-definition";

export const twentyOneGDumpling: SurgicalPlace = {
    id: "poi-21g-dumpling",
    name: "21G Dumpling",
    slug: "21g-dumpling",
    category: "restaurant",
    subcategory: ["Dim Sum", "Taïwanais", "Fait Maison", "Cantine"],
    location: {
        address: "167 Rue du Faubourg Saint-Antoine, 75011 Paris",
        arrondissement: 11,
        lat: 48.8504,
        lng: 2.3789,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJ_zX_zXBshkcRvN_Gv9Xl3Qk"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 10
    },
    pricing: {
        avg_budget: 25,
        dish_price: 15.75, // MÉDIAN des Plats (15.50€ - 16.00€)
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Xiao Long Bao (Vapeurs de Shanghai)",
                items: [
                    { name: "XLB Porc (Standard)", price: "12.00€", description: "Cœur bouillon bouillant, porc fermier." },
                    { name: "XLB Poulet & Foie Gras", price: "13.50€", description: "Le luxe à la française en bouchée vapeur." },
                    { name: "XLB Crevette & Citronnelle", price: "12.50€", description: "Eau de coco et herbes fraîches." },
                    { name: "XLB Crabe & Porc", price: "14.50€" },
                    { name: "XLB Poireau & Porc", price: "12.00€" }
                ]
            },
            {
                category: "Wontons & Raviolis Grillés",
                items: [
                    { name: "Wontons Porc & Crevette (Sauce Chili)", price: "11.50€" },
                    { name: "Wontons Sauce Jade (Coriandre/Epinard)", price: "11.50€" },
                    { name: "Guo Tie Poulet (Raviolis Grillés)", price: "11.00€", description: "Servis avec une sauce saté maison." },
                    { name: "Veggie Dumplings (V)", price: "10.50€", description: "Chou chinois, shiitake, céleri." },
                    { name: "Siu Mai de Canard Confit", price: "11.00€", description: "Sauce Hoi Sin et oignons frits." }
                ]
            },
            {
                category: "Gua Bao & Bao Burgers",
                items: [
                    { name: "Gua Bao Porc Classique", price: "8.50€", description: "Poitrine fondante, cacahuètes, coriandre." },
                    { name: "Gua Bao Poulet Frit", price: "8.50€" },
                    { name: "Gua Bao Canard BBQ", price: "8.50€" },
                    { name: "Bao Burger Beef Teriyaki", price: "13.50€" },
                    { name: "Bao Burger Fried Portobello (V)", price: "13.00€", description: "Champignon pané, fromage, oignons glacés." }
                ]
            },
            {
                category: "Plats (Signatures)",
                items: [
                    { name: "Poitrine de Porc Dongpo", price: "16.00€", description: "Mijotée 4h, pak choi et riz blanc." },
                    { name: "Taiwanese Fried Chicken Curry", price: "15.50€", description: "Sauce curry douce, œuf mariné." }
                ]
            },
            {
                category: "Riz & Nouilles (Petits Plats)",
                items: [
                    { name: "Riz Sauté aux Crevettes", price: "10.00€" },
                    { name: "Noodles Sauce Cacahuète & Sésame", price: "8.50€" },
                    { name: "Noodles Epicées (Chili oil)", price: "8.50€" }
                ]
            },
            {
                category: "Accompagnements & Veggies",
                items: [
                    { name: "Aubergines Chinoises Fondantes", price: "7.50€" },
                    { name: "Pak Choi Sauté Ail & Soja", price: "8.50€" },
                    { name: "Riz Blanc", price: "3.00€" }
                ]
            },
            {
                category: "Douceurs de Taipei",
                items: [
                    { name: "Sago Mango & Pamplemousse", price: "7.00€", description: "Perles de tapioca au lait de coco." },
                    { name: "Crème Brûlée au Sésame Noir", price: "9.00€" },
                    { name: "Hong Kong Egg Waffle Gianduja", price: "10.00€", description: "Caramel beurre salé, peanuts." },
                    { name: "Glace Sésame Noir", price: "6.50€" },
                    { name: "Mochi Artisanal (Unité)", price: "3.50€" }
                ]
            },
            {
                category: "Drinks & Bières",
                items: [
                    { name: "Tsingtao Beer (33cl)", price: "6.00€" },
                    { name: "Jus de Lychee", price: "4.00€" },
                    { name: "Ginger Beer Fever-Tree", price: "4.50€" },
                    { name: "Thé Glacé Maison (Citronnelle)", price: "5.50€" },
                    { name: "Coca-Cola (33cl)", price: "3.00€" },
                    { name: "San Pellegrino (50cl)", price: "3.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa", // Souvent complet, file d'attente
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: true,
        opening_hours_raw: "Lundi-Jeudi: 12:00–14:30, 19:00–22:30\nVendredi: 12:00–14:30, 19:00–23:00\nSamedi: 12:00–15:00, 19:00–23:00\nDimanche: 12:00–15:00, 19:00–22:30",
        main_action: {
            type: "site",
            url: "https://www.21gdumpling.com/",
            label: "S'INFORMER"
        }
    },
    description: "21G Dumpling est une adresse incontournable pour les amateurs de dim sum artisanaux. Son nom fait référence au poids parfait d'un Xiao Long Bao (le ravioli à bouillon). Entre Bastille et Faidherbe, cette cantine moderne propose une cuisine taïwanaise authentique, préparée à la vue de tous dans une cuisine ouverte.",
    expert_catchline: "Les meilleurs Xiao Long Bao de Bastille, pesés au gramme près pour un bouillon parfait.",
    insider_tip: "• Les Xiao Long Bao sont la raison d'être du lieu : commencez par eux.\n• Le Poulet Croustillant Taïwanais avec son basilic frit est un must-order pour les gourmands.\n• Pas de réservation le soir, arrivez tôt (avant 19h30) pour éviter l'attente.\n• Le Mochi au sésame noir est la touche finale idéale.",
    specials: {
        cuisine: ["Xiao Long Bao", "Taïwanais", "Nouilles Dan Dan"],
        drinks: ["Thé Glacé Maison", "Bière Tsingtao", "Bubble Tea"],
        must_eat: "Le Xiao Long Bao Tradition et le Poulet frit taïwanais."
    },
    images: {
        hero: "https://images.squarespace-cdn.com/content/v1/589ca395b3db2b07d6d5a1b3/1592318641957-8Y6V9G8Y6V9G8Y6V9G8Y/21G+Dumpling+Paris+Dim+Sum+Xiao+Long+Bao",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.5
};
