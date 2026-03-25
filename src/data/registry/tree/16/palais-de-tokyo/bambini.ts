export const bambini = {
    id: "poi-bambini-paris-16",
    name: "Bambini",
    slug: "bambini-paris-16",
    description: "La trattoria géante et festive du Palais de Tokyo. Une ode à l'art de vivre italien avec une décoration théâtrale (tissus colorés, suspensions en rotin), une immense terrasse estivale et une ambiance résolument joyeuse et animée le soir.",
    category: "restaurant",
    subcategory: ["Italien", "Festif", "Terrasse"],
    specials: {
        is_rooftop: false,
        is_hidden: false,
        is_institution: false,
        has_view: true
    },
    verified: true,
    target_audience: "Groupes d'amis, dîneurs avant-club, trentenaires chics",
    location: {
        address: "13 Avenue du Président Wilson, 75116 Paris",
        arrondissement: 16,
        lat: 48.8645866, // EXACT GPS
        lng: 2.2966748,  // EXACT GPS
        nearest_metro: "Iéna",
        metro_lines: [9],
        google_id: "ChIJt9VeXGRv5kcRA7kQ-xGju00"
    },
    moods: {
        chill: 10,
        festif: 90,
        culturel: 15 // Palais de Tokyo
    },
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: 12:00–15:00, 19:00–02:00 | Mardi: 12:00–15:00, 19:00–02:00 | Mercredi: 12:00–15:00, 19:00–02:00 | Jeudi: 12:00–15:00, 19:00–02:00 | Vendredi: 12:00–15:00, 19:00–02:00 | Samedi: 12:00–15:30, 19:00–02:00 | Dimanche: 12:00–15:30, 19:00–02:00",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "book",
            url: "https://bambini-restaurant.com/paris/reservation/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 10, // Bière italienne
        wine_glass: 12.00,
        coffee_price: 4.50,
        dish_price: 24.00, // MÉDIAN des Plats/Pizzas (Margherita 16, Truffe 32, Pâtes 24)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Antipasti)",
                items: [
                    { name: "Burrata des Pouilles (250g) à partager", price: "28.00€" },
                    { name: "Vitello Tonnato classique", price: "19.00€" },
                    { name: "Calamari frits, sauce tartare", price: "18.00€" },
                    { name: "Carpaccio de Bœuf, parmesan 24 mois", price: "22.00€" },
                    { name: "Arancini à la truffe noire", price: "16.00€" }
                ]
            },
            {
                category: "Les Les Plats (Pizzas & Pâtes)",
                items: [
                    { name: "Pizza Margherita DOP", price: "16.00€" },
                    { name: "Pizza Tartufo (Crème de truffe, mozza)", price: "32.00€" },
                    { name: "Pizza Diavola (Spianata piquante)", price: "21.00€" },
                    { name: "Linguine alla Carbonara (Pancetta croustillante)", price: "24.00€" },
                    { name: "Rigatoni au ragoût de veau fondant", price: "26.00€" },
                    { name: "Mafaldine à la crème de truffe", price: "34.00€" },
                    { name: "Tagliata de Bœuf, roquette et parmesan", price: "36.00€" }
                ]
            },
            {
                category: "Touche Sucrée (Desserts)",
                items: [
                    { name: "Tiramisu géant à partager", price: "24.00€" },
                    { name: "Profiteroles napolitaines, chocolat chaud", price: "14.00€" },
                    { name: "Puffa d'Amore (Beignet géant Nutella)", price: "18.00€" }
                ]
            },
            {
                category: "Bar (Cocktails)",
                items: [
                    { name: "Bambini Spritz (Aperol, Prosecco, passion)", price: "16.00€" },
                    { name: "Negroni Sbagliato", price: "15.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVr2DTGs2bCmnESGYBx9_GvLfIdT2uCmqEpCLT8vQ5wt-35OMSYRA6o1G5FFfalQVlDdyKGGjkwszCp8NVBjIR2w3OWwb7EN708djSHtnB5NtD0OVyKK-oSn_nEPdQRV8BMXP2vbYOXPULJeFFr7Nr6Mz52hWbsGimfL3At6Z8addrs8CQUs5j5pC7aaWxQ3QYxOWMswUnZDEJBnPfspYD9SSJT94DGGpHo1u6rGwBrl8KXpEfL1lKg8FHU-aq_GkGAUG56_OEne3H9he25rxf9XwJR0cGg50BXGZJAtr_VlNy-Q6IqmftuxYxsuK4OjD79sA4m33aHswjlL8Pzu4on_lGErnnS1iscFw48aukV0QY2DQwRJS1SkJTf-t8yK6M_jnaQOwLYgDeQw83KNG5--e82zgYSUgzDNswcspZIJdFtgeqshUd1BhukoebvxXMyalk0pptvSsXqBd02svPciBOstAYjrHhG0bszzqgznWiqqleOEko5M3sVZjEJqGkhsoh4rLEbMTzJ3YDzCYyVjteDIEUkYli_XZVewNw0ylHssjUUt3G6Gb6LcBS_-bIc0-_FJegFA34k5dmr_0NhQyI&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUsAAFvyZ9RD122vHPuG4aqVLXeoMSW_2ouUNyiwOlpfeIlAtOJNcczsUS9057nEh6ClhKR9A89KB4ghX1-8d5HCxBRIwCGpeTvMjWegGCDPlrSXgkBuICTsWZOPnbDW7s0Quov4geO3tzvAu__smTszatsZIsy-CEtzYo3dsuKPT646F1qDnM5-LU3MG7hgwVjdaRswvHsYG82ILnR_MjAR0Idgpfx8rPlyzV5ygKP7ZjZhuKux97-LDdoDdgbBuFkYkcxGhcotEzJCdoZKZ69b_Jd4mgxsWBKEekl8dr_N-o7wt6qCiZxPUlZiz0POz4uMmQFF2dAnYAd8n8nfR5xE1QO4tl3KNBhHC0zDBqvgTpX3BKmSQqzbQe6J9koV816Zec3y2kukvbYc9gPudtgvCqA2KWSrvgEZvnW8JSdQuypIK8ZJTPur4t7sZcU&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUN69Atu02XvG6joluK-KbiLfJQP787JSsNJOaPlhTXtzlyCgOQoX3TuRp3VwtRE7XPs5qLau_mAoXOmATD4wooWTHegxQ2CFT73kfFaRv2VrU6d4H11ojZ9shZdFzsesejI4dvArADWRmUBd-xzluuobY1rSnwzpMwgdoDxhFkdDx0uyddnHszVt9C4xD0-a5WzUFDf1Df_P8Ch4VOOge0vRE57-AjCuyu5IKnpdTO-lmlESWv7HrvA-S_oDbXhIW1ZL772hhePMePn_OGhn6fov0WgE2jqGBagaUyKwkr6ZLUAfVApY2-piZQpgu3x4ilJ-YAhUNUX1VPxeOgkLi4tVcro6CvYyxHkbPalJEkAH8SPfIgiKewvNBxNq_TRu7n_ntbZS9zQ0dOQdt2V3AQmEhjsrZvyGiqMfeto7v5ex_iU0te19BNQJtlL4I-&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "bambiniparis",
    website: "https://bambini-restaurant.com/",
    tags: [
        { id: "italien", label: "Italien" },
        { id: "festif", label: "Festif" },
        { id: "chic", label: "Chic" },
        { id: "terrasse", label: "Terrasse estivale" },
        { id: "groupe", label: "Pour les groupes" }
    ],
    reviews: {
        google: { rating: 3.9, count: 1800 }
    }
};
