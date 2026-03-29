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
                category_type: "other",
                display_label: "Petit-Déjeuner (9:00 - 11:30)",
                items: [
                    { name: "Le Petit Déj Classique", price_cents: 1100, description: "Hot drink, juice, pastry, tartine." },
                    { name: "Le Petit Déj Complet", price_cents: 1400, description: "Déj Classique + Œuf bio crème de Comté." },
                    { name: "Œufs Pochés Bio en Cocotte", price_cents: 600, description: "Ciboulette et mouillettes." },
                    { name: "Granola Bowl Maison", price_cents: 650 },
                    { name: "Croissant / Pain au Chocolat", price_cents: 200 },
                    { name: "Tartine Beurre & Confiture", price_cents: 300 }
                ]
            },
            {
                category_type: "main",
                display_label: "Bistro & Plats (Midi & Soir)",
                items: [
                    { name: "Cheeseburger Pause Café", price_cents: 1450, description: "Bœuf français, cheddar 9 mois, frites maison." },
                    { name: "Fish n Chips Maison", price_cents: 1400, description: "Cabillaud pané, sauce tartare, citron vert." },
                    { name: "Poulet Crousti-Crousti", price_cents: 1350, description: "Poulet pané hyper croustillant, purée fine." },
                    { name: "Le Dhal de Lentilles Corail (V)", price_cents: 1300, description: "Curry vert, épinards, riz coco." },
                    { name: "Saumon Laqué Teriyaki", price_cents: 1450, description: "Sriracha, riz coco, herbes." },
                    { name: "Pulled Pork Sandwich", price_cents: 1350, description: "Coleslaw, ginger BBQ, frites maison." },
                    { name: "Burger Veggie (Halloumi & Portobello)", price_cents: 1400, description: "Chou rouge, frites de patate douce." },
                    { name: "Thon à la Plancha", price_cents: 1650 },
                    { name: "Tartare de Bœuf Tradition", price_cents: 1350 },
                    { name: "Parmentier de Canard", price_cents: 1250 },
                    { name: "Entrecôte Belle de l'Ouest", price_cents: 1650 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Grandes Salades & Snack",
                items: [
                    { name: "Salade Louisiane", price_cents: 1450, description: "Crousti-poulet, mozza, oignons frits, sauce Caesar." },
                    { name: "Salade Crispy Caesar", price_cents: 1400 },
                    { name: "Salade de Légumes Croquants & Brique de Chèvre", price_cents: 1280 },
                    { name: "Houmous Maison à la Betterave", price_cents: 750 },
                    { name: "Falafels de Lentilles Corail", price_cents: 700 },
                    { name: "Tarama Blanc & Blinis", price_cents: 650 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maison",
                items: [
                    { name: "Le Cookie qui Coule", price_cents: 450 },
                    { name: "Sticky Rice au Lait de Coco & Mangue", price_cents: 650 },
                    { name: "Gâteau au Chocolat Sans Gluten", price_cents: 650 },
                    { name: "Cheesecake New York Style", price_cents: 700 },
                    { name: "Tiramisu Traditionnel", price_cents: 600 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons & Cafés Spécialités",
                items: [
                    { name: "Espresso Pause Blend", price_cents: 200 },
                    { name: "Dirty Chai Latte", price_cents: 450 },
                    { name: "Iced Flat White", price_cents: 450 },
                    { name: "Smoothie Tweety (Exotique)", price_cents: 650 },
                    { name: "Bissap Maison (Hibiscus)", price_cents: 400 },
                    { name: "Thé Glacé Maison", price_cents: 400 },
                    { name: "Bière Demory Paris (Pression)", price_cents: 750 },
                    { name: "Hugo Spritz", price_cents: 850 },
                    { name: "Cidre Bio Galipette", price_cents: 600 }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
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
