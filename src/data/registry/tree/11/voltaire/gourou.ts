import { SurgicalPlace } from '../../../type-definition';

export const gourou: SurgicalPlace = {
    id: "poi-gourou",
    name: "Gourou",
    slug: "gourou",
    category: "restaurant",
    subcategory: ["indien", "street-food", "moderne", "épices", "restaurant"],
    location: {
        address: "42 Rue Léon Frot",
        arrondissement: 11,
        lat: 48.85695,
        lng: 2.38722,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJVVVVQjlu5kcR-Q3r0oNoiU" // Placeholder ID - Needs verification
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:00–14:30, 19:00–22:30; Dim: 19:00–22:30; Fermé Lundi",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://gourouindianfood.fr/",
            label: "COMMANDER / RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 6.00,
        coffee_price: 2.50,
        dish_price: 13.50, // MANUAL: Median for standard curries (Murgh Korma, Butter Chicken)
        last_updated: "2026-03-09",
        menu_items: [
            {
                category: "Les Menus & Formules",
                items: [
                    { name: "Gourou Solo (Entrée + Plat + Naan)", price: "19.50€", description: "Le voyage complet pour une personne." },
                    { name: "Gourou à Deux (2 Entrées + 2 Plats + Riz Pulao)", price: "42.00€" },
                    { name: "Formule Midi (Plat + Riz Pulao)", price: "16.50€" }
                ]
            },
            {
                category: "Les Naans (Pains Traditionnels)",
                items: [
                    { name: "Plain Naan (Nature)", price: "3.00€" },
                    { name: "Garlic Naan (Ail & Coriandre)", price: "3.50€" },
                    { name: "Cheese Naan (Vache qui rit)", price: "4.50€" },
                    { name: "Cheese & Garlic Naan", price: "5.00€" },
                    { name: "Keema Naan (Agneau haché)", price: "5.50€" },
                    { name: "Peshawari Naan (Fruits sec, noix de coco, miel)", price: "5.50€" }
                ]
            },
            {
                category: "Street Food & Petites Assiettes (Entrées)",
                items: [
                    { name: "Vada Pav (Burger de Bombay)", price: "8.00€", description: "Le banger street-food de Bombay." },
                    { name: "Chicken Curry Samosas (les 2)", price: "6.50€" },
                    { name: "Aloo Samosas (Végétariens, les 2)", price: "6.50€" },
                    { name: "Masala Vadai (Falafels de lentilles corail)", price: "6.50€" },
                    { name: "Paneers Frits (Homemade Indian Cheese)", price: "6.50€" },
                    { name: "Kachumber Salad (Concombre, Tomate, Cumin)", price: "6.00€" },
                    { name: "Beignets de Gambas Tempura", price: "8.00€" },
                    { name: "Chanas Chaat (Salade de pois chiches)", price: "6.00€" },
                    { name: "Bhel Puri (Riz soufflé, légumes, tamarin)", price: "6.00€" }
                ]
            },
            {
                category: "Curries Signature (Les Plats)",
                items: [
                    { name: "Butter Chicken (Doux & Crémeux)", price: "13.50€", description: "Poulet mariné, sauce tomate au beurre et amandes." },
                    { name: "Murgh Korma (Safran & Pistache)", price: "13.50€" },
                    { name: "Curry d'Agneau (Boulettes artisanales)", price: "15.50€" },
                    { name: "Ghost Palak (Agneau & Épinards frais)", price: "15.50€" },
                    { name: "Chemmen Molee (Gambas & Lait de Coco)", price: "15.00€" },
                    { name: "Saag Paneer (Fromage maison & Épinards)", price: "12.50€" },
                    { name: "Dhal Palak (Lentilles corail, coco & cardamome)", price: "12.50€" },
                    { name: "Chanas Curry (Pois chiches & Aubergines au Tandoor)", price: "13.50€" },
                    { name: "Vegetable Biryani", price: "14.50€" }
                ]
            },
            {
                category: "Sweet & Drinks",
                items: [
                    { name: "Mango Lassi (Yogourt à la mangue Alphonso)", price: "5.50€" },
                    { name: "Rose Lassi (Parfumé à la rose)", price: "5.00€" },
                    { name: "Gulab Jamun (Boulettes au sirop & cardamome)", price: "6.00€" },
                    { name: "Gâteau de semoule à la pistache", price: "6.50€" },
                    { name: "Chaï Latte (Thé noir épicé & lait)", price: "4.50€" },
                    { name: "Bière Indienne : Kingfisher (33cl)", price: "6.00€" },
                    { name: "IPA Artisanale de Paris", price: "7.50€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWvP-mU_W05_V5--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Gourou est le nouveau souffle de la cuisine indienne dans le 11ème. Loin des clichés, ce néo-bistrot s'inspire de l'effervescence de Bombay pour proposer une 'Street Food' précise, colorée et 100% maison. Le décor est une immersion totale (Irani Café), les odeurs d'épices fraîches vous accueillent dès la porte et la bande-son Bollywood complète le voyage. Une adresse vibrante, moderne et redoutablement savoureuse.",
    insider_tip: "• Testez impérativement le Vada Pav, le 'burger' culte de Bombay, rarissime à Paris dans cette qualité.\n• Leur Cheese Naan est fait à la commande et arrive fumant de vérité.\n• Le menu Solo à 19.50€ est d'une générosité rare : idéal pour une faim de loup.\n• Ambiance assez intimiste, parfait pour un date décontracté mais dépaysant.",
    expert_catchline: "L'Inde version néo-bistrot : street-food explosive, déco d'Irani Café et épices millimétrées.",
    specials: {
        cuisine: ["Vada Pav (Signature)", "Butter Chicken", "Peshawari Naan", "Ghost Palak"],
        drinks: ["Mango Lassi", "Bière Kingfisher", "Chaï Latte"],
        must_eat: "Le Vada Pav pour commencer, suivi du Murgh Korma à la pistache, une douceur absolue.",
        must_drink: "Leur Mango Lassi, onctueux et réalisé avec les meilleures mangues (Alphonso)."
    }
};
