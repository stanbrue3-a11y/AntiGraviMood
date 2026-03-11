import { SurgicalPlace } from '../../../type-definition';

export const brasserieAuteuil: SurgicalPlace = {
    id: "poi-brasserie-auteuil",
    name: "Brasserie Auteuil",
    slug: "brasserie-auteuil",
    category: "restaurant",
    subcategory: ["italien", "rooftop", "festif-chill", "chic", "pizza"],
    location: {
        address: "78 Rue d'Auteuil, 75016 Paris",
        arrondissement: 16,
        lat: 48.84833200000001, // EXACT GPS
        lng: 2.259869,        // EXACT GPS
        nearest_metro: "Porte d'Auteuil",
        metro_lines: [10],
        google_id: "ChIJbXk0LzRv5kcRSX6M9P75Y4U"
    },
    moods: {
        chill: 50,
        festif: 70,
        culturel: 0
    },
    practical: {
        // VERIFIED: Google Maps API
        opening_hours_raw: "Lundi: 09:00–02:00 | Mardi: 09:00–02:00 | Mercredi: 09:00–02:00 | Jeudi: 09:00–02:00 | Vendredi: 09:00–02:00 | Samedi: 09:00–02:00 | Dimanche: 09:00–02:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "https://www.auteuil-brasserie.com/reserver/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 9.50, // Moretti
        wine_glass: 7.50,
        coffee_price: 3.50,
        dish_price: 21.00, // MÉDIAN des Pizzas & Pâtes (Margherita 16, Truffe 26, Pâtes 22)
        last_updated: "2026-03-11",
        menu_items: [
            {
                category: "Pour Commencer (Antipasti / À Partager)",
                items: [
                    { name: "Stracciatella des Pouilles, focaccia", price: "14.50€" },
                    { name: "Calamari frits, mayonnaise citronnée", price: "12.50€" },
                    { name: "Planche Auteuil (Charcuteries italiennes)", price: "24.00€" },
                    { name: "Arancini à la truffe", price: "11.00€" }
                ]
            },
            {
                category: "Les Classiques Italiens (Pizzas & Pâtes)",
                items: [
                    { name: "Pizza Margherita DOP", price: "16.00€" },
                    { name: "Pizza Tartufo (Crème de truffe, mozza)", price: "26.00€" },
                    { name: "Pizza Diavola (Spianata piccante)", price: "19.00€" },
                    { name: "Linguine alla Carbonara (Pancetta)", price: "21.00€" },
                    { name: "Rigatoni au Pesto de pistaches", price: "22.00€" },
                    { name: "Escalope Milanaise, linguine tomate", price: "26.00€" }
                ]
            },
            {
                category: "Dolci (Desserts)",
                items: [
                    { name: "Tiramisu classique", price: "9.50€" },
                    { name: "Pizza Nutella à partager", price: "14.00€" },
                    { name: "Panna Cotta aux fruits rouges", price: "8.50€" }
                ]
            },
            {
                category: "Bar (Cocktails & Spritz)",
                items: [
                    { name: "Aperol Spritz Classico", price: "12.00€" },
                    { name: "Limoncello Spritz", price: "13.00€" },
                    { name: "Gin Tonic Bombay", price: "14.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVvTnwKNjA7YNzolcreSZfVZdPC6rYfmYJX0DPl6uV5bH-vcuKLhKqIF24k4dwyy4dvTvWgGfN0PkKkfbtbDPZzBgkMUoXbmNOlSGlvnXny9TiXv7JQpqVl29_doTQEUpJ-BTv_h7YCWW_4UM0K0eQNxRvk5td5WS1Dnjx0mJ8tPNWS7nXP8f-Dj60j4PWJoA2lxv5u_i6RPJ7BpATuoSDXcy_iR7ccD7L6ZzPJhiM9VTHMMCVKPCHWAas4uk1CkaWmyba8bGiMenpplzbG__6LIrEPApK9GcuPJqD7yMdQjqVbm9o&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUkeKpOJGAv6bj_PivGbe6fVBEI_nPlz1ZWZ0SGxjrouEAobjPhZYBOT7V7KKyMaaYkMoB8Uqd5x1ZA6irBR5Z0baOkPhlhxiPwfZgyKllGgg3mPOxkt5i74D2-TKjjb4mpIYH9Jeu3zLvafEUBRv88FFBMizPTj3w5_Q_OScWkq9XysLqsxDGeIrAqrY7n4Dk-9mcUia-YTv-Qf-dnNUuQ-iQ_FB22rt2S0r6vLo9XWXiZ722UxwnLY3AY4kAX8jVc23fIgh9qxb5dcT9apQU0jk_Txu5MQ_Q6E6u43TysYw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVf5Ckkf_YlNIv5RgO6DGK7mMJYkM7c19zqhxYmkjhMHu3gzEniJh_7hx3XjeO2S3dONk8T0pPFZxe4MjhAdYIU3x8iN6NSeE_1KyQt63fOf1mORE5AtekNkkideLwhM80ijoBzrG4lEXrwQ5j7HU_g-Sb_1AT9bw2hHbZjLtI2mIY-T9025tOlz-rAdt-Utp9ICbQPYGRcsnrIKlgOHa6gHklbDxD6bsjiDiNHLcr7fY524EiiUfo-wMuA9__JFqS4mzg5JCNKQGXcGyRiE0cKqRbM9Zb4XxKAtZilMevZ2w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "brasserieauteuil",
    verified: true,
    google_rating: 4.1,
    description: "La Brasserie Auteuil est le QG de l'Ouest parisien. Installée dans une ancienne gare de la Petite Ceinture, cet immense spot à la décoration luxuriante (signée Laura Gonzalez) fait voyager en Toscane sans quitter Paris. Son atout majeur ? Son grand rooftop végétalisé, chauffé l'hiver, qui donne une véritable ambiance de grand air. La carte décline les classiques italiens (bonnes pizzas, pâtes, antipasti) dans une ambiance qui monte en volume le soir. Idéal pour les grandes tablées d'amis.",
    insider_tip: "• C'est l'un des rares et vrais rooftops de l'Ouest parisien. Demandez spécifiquement cette zone lors de la réservation.\n• Parfait pour des groupes : l'espace est immense et l'ambiance suffisamment bruyante pour ne déranger personne.\n• Le combo Spritz + Pizza Tartufo sur le toit en fin d'après-midi est un classique estival indémodable.",
    expert_catchline: "Immense rooftop végétalisé aux accents italiens, logé dans une ancienne gare.",
    specials: {
        cuisine: ["Pizza Truffe", "Antipasti", "Carbonara", "Dolci"],
        drinks: ["Aperol Spritz", "Cocktails Maison", "Vins Italiens"],
        must_eat: "La Pizza Tartufo ou les Calamari frits à partager.",
        must_drink: "L'Aperol Spritz, incontournable sur ce rooftop."
    }
};
