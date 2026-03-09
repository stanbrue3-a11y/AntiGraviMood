import { SurgicalPlace } from "../../../type-definition";

export const poggiCup: SurgicalPlace = {
    id: "poi-poggi-cup",
    name: "Poggi Cup (Fontaine au Roi)",
    slug: "poggi-cup",
    category: "restaurant",
    subcategory: ["Street Food", "Healthy", "Cuisine en Gobelet", "Moderne"],
    location: {
        address: "2 Rue de la Fontaine au Roi, 75011 Paris",
        arrondissement: 11,
        lat: 48.8672,
        lng: 2.3705,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJ7X-_x3ZshkcR__Vl3Qk_V_P"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 10
    },
    pricing: {
        avg_budget: 15,
        dish_price: 12.00, // Poggi Salé
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Savory Cups (Salé)",
                items: [
                    { name: "Poggi Classic (Best-seller)", price: "12.00€", description: "Crumble parmesan, oignons, lard fumé, mousse emmental." },
                    { name: "Poggi Étudiant", price: "7.50€", description: "Poulet, PDT confites, oignons frits, mousse emmental." },
                    { name: "Poggi Kefta", price: "14.00€", description: "Boulettes de bœuf, sauce blanche herbes, chips." },
                    { name: "Poggi Fish", price: "12.00€", description: "Saumon gravlax, houmous, tahini & feta." },
                    { name: "Poggi Beef", price: "12.00€", description: "Bœuf effiloché, carottes rôties, ail & persil." },
                    { name: "Poggi Veggie (V)", price: "12.00€", description: "Boulgour, grenade, leeks fondants, yaourt-harissa." },
                    { name: "Poggi Pasta", price: "10.00€", description: "Pâtes, jambon ou poulet, mousse huile de truffe." },
                    { name: "Poggi Winter (Seasonal)", price: "11.50€", description: "Bresaola, pesto roquette, mousse Reblochon." },
                    { name: "Poggi Black", price: "13.00€", description: "Charbon végétal, champignons, Saint-Félicien." },
                    { name: "Poggi Butternut & Burrata", price: "11.00€" },
                    { name: "Poggi Autumn", price: "12.00€", description: "Butternut, champignons, Comté, noisettes." },
                    { name: "Spring Vegan Cup", price: "11.50€", description: "Pois chiches, asperges, houmous." }
                ]
            },
            {
                category: "Sweet Cups (Sucré)",
                items: [
                    { name: "Poggi Tiramisu Praliné", price: "6.50€", description: "Espuma mascarpone, crunchy praliné." },
                    { name: "Poggi Lemon & Noisette", price: "6.50€", description: "Crème citron, streusel noisette, guimauve chaux." },
                    { name: "Poggi Strawberry & Basil", price: "7.00€", description: "Fraise fraîche, chantilly amande, basilic." },
                    { name: "Brioche Pain Perdu Cup", price: "7.50€", description: "Caramel beurre salé, ganache chocolat blanc." },
                    { name: "Poggi Chocolat & Peanuts", price: "7.50€", description: "Crumble, caramel, cacahuètes grillées." },
                    { name: "Poggi Apple & Cinnamon", price: "7.50€" },
                    { name: "Fruit Salad Passion", price: "5.50€" },
                    { name: "Poggi Yoghurt & Blueberries", price: "5.50€" },
                    { name: "Poggi Poire Vanille", price: "6.50€" }
                ]
            },
            {
                category: "Bakery & Cookies",
                items: [
                    { name: "Cookie Triple Chocolat", price: "3.60€" },
                    { name: "Cookie Sea Salt & Chocolat Noir", price: "3.50€" },
                    { name: "Cookie White Choc & Raspberry", price: "3.60€" },
                    { name: "Muffin Double Choco", price: "3.95€" },
                    { name: "Muffin Blueberry", price: "3.95€" },
                    { name: "Muffin Cocoa", price: "3.95€" }
                ]
            },
            {
                category: "Drinks & Formulas",
                items: [
                    { name: "Organic Lemon'aid Passion", price: "4.80€" },
                    { name: "Organic Lemon'aid Lime", price: "4.80€" },
                    { name: "Fair-trade Cola", price: "4.50€" },
                    { name: "Still Water (50cl)", price: "2.50€" },
                    { name: "Sparkling Water (50cl)", price: "2.50€" },
                    { name: "Formula Poggi + Drink", price: "14.90€" },
                    { name: "Formula Complet (Poggi + Cookie + Drink)", price: "16.90€" },
                    { name: "Formula Gourmand (Poggi + Sweet + Drink)", price: "19.00€" }
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
        opening_hours_raw: "Lun-Ven: 11:30–15:00, 18:30–22:00\nSam: 12:00–22:30",
        main_action: {
            type: "site",
            url: "https://poggicup.com/",
            label: "DÉCOUVRIR"
        }
    },
    description: "Le concept révolutionnaire de la cuisine déstructurée servie dans des gobelets transparents. Chez Poggi Cup, on ne transige pas sur la qualité : tout est fait maison, avec des produits de saison, superposés avec une précision graphique. On mélange (ou pas) les couches pour découvrir une explosion de textures (mousses, crumbles, légumes confits). Une alternative saine et hyper créative au déjeuner classique.",
    expert_catchline: "La gastronomie en gobelet : des plats sains, graphiques et superposés avec amour.",
    insider_tip: "• Mélangez bien votre Poggi Cup pour savourer toutes les couches en une seule bouchée.\n• Le Poggi Poisson (Gravlax) est particulièrement frais et réussi.\n• Formule étudiant à moins de 10€, une rareté pour cette qualité dans le quartier.\n• Leur Cookie Sea Salt est un pêché mignon très addictif.",
    specials: {
        cuisine: ["Déstructuré", "Healthy", "Bœuf Effiloché"],
        drinks: ["Lemon'aid Passion", "Ginger Beer Maison", "Thé Glacé"],
        must_eat: "Le Poggi Classic et le Tiramisu praliné."
    },
    images: {
        hero: "https://poggicup.com/wp-content/uploads/2021/04/Poggi-Cup-Concept-Design.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.6
};
