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
        dish_price: 16.00, // MANUAL: Satiety Unit (Main dish ~14€ + coffee/buffer)
        last_updated: "2026-03-09",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Les Menus & Formules",
                items: [
                    { name: "Gourou Solo (Entrée + Plat + Naan)", price_cents: 1950, description: "Le voyage complet pour une personne." },
                    { name: "Gourou à Deux (2 Entrées + 2 Plats + Riz Pulao)", price_cents: 4200 },
                    { name: "Formule Midi (Plat + Riz Pulao)", price_cents: 1650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Les Naans (Pains Traditionnels)",
                items: [
                    { name: "Plain Naan (Nature)", price_cents: 300 },
                    { name: "Garlic Naan (Ail & Coriandre)", price_cents: 350 },
                    { name: "Cheese Naan (Vache qui rit)", price_cents: 450 },
                    { name: "Cheese & Garlic Naan", price_cents: 500 },
                    { name: "Keema Naan (Agneau haché)", price_cents: 550 },
                    { name: "Peshawari Naan (Fruits sec, noix de coco, miel)", price_cents: 550 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Street Food & Petites Assiettes (Entrées)",
                items: [
                    { name: "Vada Pav (Burger de Bombay)", price_cents: 800, description: "Le banger street-food de Bombay." },
                    { name: "Chicken Curry Samosas (les 2)", price_cents: 650 },
                    { name: "Aloo Samosas (Végétariens, les 2)", price_cents: 650 },
                    { name: "Masala Vadai (Falafels de lentilles corail)", price_cents: 650 },
                    { name: "Paneers Frits (Homemade Indian Cheese)", price_cents: 650 },
                    { name: "Kachumber Salad (Concombre, Tomate, Cumin)", price_cents: 600 },
                    { name: "Beignets de Gambas Tempura", price_cents: 800 },
                    { name: "Chanas Chaat (Salade de pois chiches)", price_cents: 600 },
                    { name: "Bhel Puri (Riz soufflé, légumes, tamarin)", price_cents: 600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Curries Signature (Les Plats)",
                items: [
                    { name: "Butter Chicken (Doux & Crémeux)", price_cents: 1350, description: "Poulet mariné, sauce tomate au beurre et amandes." },
                    { name: "Murgh Korma (Safran & Pistache)", price_cents: 1350 },
                    { name: "Curry d'Agneau (Boulettes artisanales)", price_cents: 1550 },
                    { name: "Ghost Palak (Agneau & Épinards frais)", price_cents: 1550 },
                    { name: "Chemmen Molee (Gambas & Lait de Coco)", price_cents: 1500 },
                    { name: "Saag Paneer (Fromage maison & Épinards)", price_cents: 1250 },
                    { name: "Dhal Palak (Lentilles corail, coco & cardamome)", price_cents: 1250 },
                    { name: "Chanas Curry (Pois chiches & Aubergines au Tandoor)", price_cents: 1350 },
                    { name: "Vegetable Biryani", price_cents: 1450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sweet & Drinks",
                items: [
                    { name: "Mango Lassi (Yogourt à la mangue Alphonso)", price_cents: 550 },
                    { name: "Rose Lassi (Parfumé à la rose)", price_cents: 500 },
                    { name: "Gulab Jamun (Boulettes au sirop & cardamome)", price_cents: 600 },
                    { name: "Gâteau de semoule à la pistache", price_cents: 650 },
                    { name: "Chaï Latte (Thé noir épicé & lait)", price_cents: 450 },
                    { name: "Bière Indienne : Kingfisher (33cl)", price_cents: 600 },
                    { name: "IPA Artisanale de Paris", price_cents: 750 }
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
