import { SurgicalPlace } from "../../../type-definition";

export const pauseCafe: SurgicalPlace = {
    id: "poi-pause-cafe",
    name: "Le Pause Café",
    slug: "pause-cafe",
    category: "restaurant",
    subcategory: ["Bistro", "Café", "Méditerranéen", "Institution"],
    location: {
        address: "41 Rue de Charonne, 75011 Paris",
        arrondissement: 11,
        lat: 48.8524,
        lng: 2.3735,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJAX-_x3ZshkcR__Vl3Qk_V_Q"
    },
    moods: {
        chill: 80,
        festif: 40,
        culturel: 10
    },
    pricing: {
        avg_budget: 25,
        dish_price: 17.50, // Tartare de Bœuf
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Petit-Déjeuner (9:00 - 11:30)",
                items: [
                    { name: "Le Petit Déj Classique", price: "11.00€", description: "Hot drink, juice, pastry, tartine." },
                    { name: "Le Petit Déj Complet", price: "14.00€", description: "Déj Classique + Œuf bio crème de Comté." },
                    { name: "Œufs Pochés Bio en Cocotte", price: "6.00€", description: "Ciboulette et mouillettes." },
                    { name: "Granola Bowl Maison", price: "6.50€" },
                    { name: "Croissant / Pain au Chocolat", price: "2.00€" },
                    { name: "Tartine Beurre & Confiture", price: "3.00€" }
                ]
            },
            {
                category: "Bistro & Plats (Midi & Soir)",
                items: [
                    { name: "Cheeseburger Pause Café", price: "14.50€", description: "Bœuf français, cheddar 9 mois, frites maison." },
                    { name: "Fish n Chips Maison", price: "14.00€", description: "Cabillaud pané, sauce tartare, citron vert." },
                    { name: "Poulet Crousti-Crousti", price: "13.50€", description: "Poulet pané hyper croustillant, purée fine." },
                    { name: "Le Dhal de Lentilles Corail (V)", price: "13.00€", description: "Curry vert, épinards, riz coco." },
                    { name: "Saumon Laqué Teriyaki", price: "14.50€", description: "Sriracha, riz coco, herbes." },
                    { name: "Pulled Pork Sandwich", price: "13.50€", description: "Coleslaw, ginger BBQ, frites maison." },
                    { name: "Burger Veggie (Halloumi & Portobello)", price: "14.00€", description: "Chou rouge, frites de patate douce." },
                    { name: "Thon à la Plancha", price: "16.50€" },
                    { name: "Tartare de Bœuf Tradition", price: "13.50€" },
                    { name: "Parmentier de Canard", price: "12.50€" },
                    { name: "Entrecôte Belle de l'Ouest", price: "16.50€" }
                ]
            },
            {
                category: "Grandes Salades & Snack",
                items: [
                    { name: "Salade Louisiane", price: "14.50€", description: "Crousti-poulet, mozza, oignons frits, sauce Caesar." },
                    { name: "Salade Crispy Caesar", price: "14.00€" },
                    { name: "Salade de Légumes Croquants & Brique de Chèvre", price: "12.80€" },
                    { name: "Houmous Maison à la Betterave", price: "7.50€" },
                    { name: "Falafels de Lentilles Corail", price: "7.00€" },
                    { name: "Tarama Blanc & Blinis", price: "6.50€" }
                ]
            },
            {
                category: "Desserts Maison",
                items: [
                    { name: "Le Cookie qui Coule", price: "4.50€" },
                    { name: "Sticky Rice au Lait de Coco & Mangue", price: "6.50€" },
                    { name: "Gâteau au Chocolat Sans Gluten", price: "6.50€" },
                    { name: "Cheesecake New York Style", price: "7.00€" },
                    { name: "Tiramisu Traditionnel", price: "6.00€" }
                ]
            },
            {
                category: "Boissons & Cafés Spécialités",
                items: [
                    { name: "Espresso Pause Blend", price: "2.00€" },
                    { name: "Dirty Chai Latte", price: "4.50€" },
                    { name: "Iced Flat White", price: "4.50€" },
                    { name: "Smoothie Tweety (Exotique)", price: "6.50€" },
                    { name: "Bissap Maison (Hibiscus)", price: "4.00€" },
                    { name: "Thé Glacé Maison", price: "4.00€" },
                    { name: "Bière Demory Paris (Pression)", price: "7.50€" },
                    { name: "Hugo Spritz", price: "8.50€" },
                    { name: "Cidre Bio Galipette", price: "6.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: true,
        terrace: true,
        vegan_friendly: true,
        opening_hours_raw: "Lun-Sam: 08:00–02:00\nDim: 09:00–21:00",
        main_action: {
            type: "site",
            url: "https://www.instagram.com/le_pause_cafe/",
            label: "VOIR LE LIEU"
        }
    },
    description: "Le Pause Café est une véritable institution de Bastille, rendue célèbre par le film 'Chacun cherche son chat'. Avec sa méga-terrasse qui ne désemplit jamais, c'est le point de ralliement du quartier depuis des décennies. À l'intérieur, le cadre rétro avec ses grandes banquettes en cuir invite à la flânerie. On y sert une cuisine de bistro honnête et généreuse, du petit-déjeuner matinal au dernier verre de 2h du mat.",
    expert_catchline: "L'institution de la rue de Charonne : la terrasse mythique des rendez-vous de Bastille.",
    insider_tip: "• La terrasse est chauffée l'hiver, ce qui en fait le spot de repli parfait pour observer le passage rue de Charonne.\n• Le tartare est l'un des plus réguliers du quartier, servi comme il se doit avec des frites maison.\n• C'est l'un des rares endroits du coin à garder un esprit 'brasserie de village' malgré la hype environnante.\n• Idéal pour un café-journal le matin avant que la foule n'arrive.",
    specials: {
        cuisine: ["Bistro Français", "Tartare", "Burgers"],
        drinks: ["Pression Blonde Pause", "Aperol Spritz", "Café Allongé"],
        must_eat: "Le tartare au couteau et les frites maison."
    },
    images: {
        hero: "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.1
};
