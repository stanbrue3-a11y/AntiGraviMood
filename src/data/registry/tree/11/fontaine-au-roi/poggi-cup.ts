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
        dish_price: 14.90, // MANUAL: Formula Poggi + Drink as standard satiety unit
        last_updated: "2026-03-08",
        menu_items: [
            {
                category_type: "other",
                display_label: "Savory Cups (Salé)",
                items: [
                    { name: "Poggi Classic (Best-seller)", price_cents: 1200, description: "Crumble parmesan, oignons, lard fumé, mousse emmental." },
                    { name: "Poggi Étudiant", price_cents: 750, description: "Poulet, PDT confites, oignons frits, mousse emmental." },
                    { name: "Poggi Kefta", price_cents: 1400, description: "Boulettes de bœuf, sauce blanche herbes, chips." },
                    { name: "Poggi Fish", price_cents: 1200, description: "Saumon gravlax, houmous, tahini & feta." },
                    { name: "Poggi Beef", price_cents: 1200, description: "Bœuf effiloché, carottes rôties, ail & persil." },
                    { name: "Poggi Veggie (V)", price_cents: 1200, description: "Boulgour, grenade, leeks fondants, yaourt-harissa." },
                    { name: "Poggi Pasta", price_cents: 1000, description: "Pâtes, jambon ou poulet, mousse huile de truffe." },
                    { name: "Poggi Winter (Seasonal)", price_cents: 1150, description: "Bresaola, pesto roquette, mousse Reblochon." },
                    { name: "Poggi Black", price_cents: 1300, description: "Charbon végétal, champignons, Saint-Félicien." },
                    { name: "Poggi Butternut & Burrata", price_cents: 1100 },
                    { name: "Poggi Autumn", price_cents: 1200, description: "Butternut, champignons, Comté, noisettes." },
                    { name: "Spring Vegan Cup", price_cents: 1150, description: "Pois chiches, asperges, houmous." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Sweet Cups (Sucré)",
                items: [
                    { name: "Poggi Tiramisu Praliné", price_cents: 650, description: "Espuma mascarpone, crunchy praliné." },
                    { name: "Poggi Lemon & Noisette", price_cents: 650, description: "Crème citron, streusel noisette, guimauve chaux." },
                    { name: "Poggi Strawberry & Basil", price_cents: 700, description: "Fraise fraîche, chantilly amande, basilic." },
                    { name: "Brioche Pain Perdu Cup", price_cents: 750, description: "Caramel beurre salé, ganache chocolat blanc." },
                    { name: "Poggi Chocolat & Peanuts", price_cents: 750, description: "Crumble, caramel, cacahuètes grillées." },
                    { name: "Poggi Apple & Cinnamon", price_cents: 750 },
                    { name: "Fruit Salad Passion", price_cents: 550 },
                    { name: "Poggi Yoghurt & Blueberries", price_cents: 550 },
                    { name: "Poggi Poire Vanille", price_cents: 650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Bakery & Cookies",
                items: [
                    { name: "Cookie Triple Chocolat", price_cents: 360 },
                    { name: "Cookie Sea Salt & Chocolat Noir", price_cents: 350 },
                    { name: "Cookie White Choc & Raspberry", price_cents: 360 },
                    { name: "Muffin Double Choco", price_cents: 395 },
                    { name: "Muffin Blueberry", price_cents: 395 },
                    { name: "Muffin Cocoa", price_cents: 395 }
                ]
            },
            {
                category_type: "other",
                display_label: "Drinks & Formulas",
                items: [
                    { name: "Organic Lemon'aid Passion", price_cents: 480 },
                    { name: "Organic Lemon'aid Lime", price_cents: 480 },
                    { name: "Fair-trade Cola", price_cents: 450 },
                    { name: "Still Water (50cl)", price_cents: 250 },
                    { name: "Sparkling Water (50cl)", price_cents: 250 },
                    { name: "Formula Poggi + Drink", price_cents: 1490 },
                    { name: "Formula Complet (Poggi + Cookie + Drink)", price_cents: 1690 },
                    { name: "Formula Gourmand (Poggi + Sweet + Drink)", price_cents: 1900 }
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
