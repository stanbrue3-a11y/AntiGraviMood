import { SurgicalPlace } from '../../../type-definition';

export const a_table: SurgicalPlace = {
    id: "poi-a-table",
    name: "À Table",
    slug: "a-table",
    category: "restaurant",
    subcategory: ["bistronomique", "marché", "français", "restaurant"],
    location: {
        address: "10 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.8618461,
        lng: 2.3745113,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJ_5AjG6pt5kcRhGWe1wHOKfU"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 15
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 11:30–15:00, 18:00–00:00\nmercredi: 11:30–15:00, 18:00–00:00\njeudi: 11:30–15:00, 18:00–00:00\nvendredi: 11:30–15:00, 18:00–00:00\nsamedi: 11:30–15:00, 18:00–00:00\ndimanche: 10:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://onzeatable.paris/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 6.50, // Approximation standard 11ème
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 27, // MANUAL: Plats à la carte évalués autour de 22-38€ le soir (Saumon 28, Thon 27, Canard 25).
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Formules",
                items: [
                    // VERIFIED: Source TheFork & Site officiel
                    { name: "Formule Déjeuner", price: "24.00€", description: "Entrée + Plat ou Plat + Dessert" },
                    { name: "Brunch Complet (Dimanche)", price: "34.00€" }
                ]
            },
            {
                category: "Entrées & Planches",
                items: [
                    { name: "Œufs mayo façon César", price: "9.00€" },
                    { name: "Carpaccio de bar", price: "13.00€" },
                    { name: "Croque à la truffe et pastrami", price: "18.00€" }
                ]
            },
            {
                category: "Plats",
                items: [
                    { name: "Mi-cuit de saumon, mousseline chou-fleur, beurre blanc", price: "28.00€" },
                    { name: "Demi-magret de canard cuit basse température", price: "25.00€" },
                    { name: "Gnocchis à la crème de truffe", price: "22.00€" },
                    { name: "Noix d'entrecôte argentine (300g)", price: "38.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Dessert du jour", price: "9.00€" },
                    { name: "Fondant au chocolat", price: "10.00€" }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Pinte de bière (approximation quartier)", price: "6.50€" },
                    { name: "Verre de vin (à partir de)", price: "7.00€" },
                    { name: "Cocktail classique", price: "10.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWjZYSx2CHxcI65e0_9awFG35xuHm206xs25AWjw1FD-kRIardDTQjbIk_j664yYzsfXFP53p2h96HSxM1n-DDhLfv8ATsyFFYlZQy1-vSFvy4vkB-oi-y72O7sviafnBOu-VH_ukm385QNtQvOGEywrOkk2eHUxtZd4PkbT-1c1AokjcrJ7Oyw9eQIf4euPQvM8BTqIPYh8T2XFsBVRblWyASM_0fMnRABUOHVlZrook58HpVpunRrlx6xAEtlv9bbdiHyTQ-_-QE8rVpL9Wprov3ReMdN0dRfzhV_uUGQdQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX3rBN7WLQJj2erhRwHmHtqMQMhVRZjTEXniQRJ7QuJASif4l--t6fv7nPAFJGqEObo5tFS9yBpcZWqStvJCdoQiwArAlxVwpwEs2P2Yhtzh9KCqkOjgOM6fadIKyvDWv3VFdq92KaAZtWDGVLOCofqLYmjUZjPElPVihE6t1t3IZV4YVX-n31URAeltYd3fTAOXH8IUuoEFp_y-Xmv-f5x_kXZOEoX_RIS8iCotAoXlVYSvVTWJA_1hD3ZAxRUx7bri1su7stb8nXXBijkoZAk2gVFCK7rAIQHIJpjmCkteA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXh-7CKLo43LdRDa3bRXpL-0oRmanmBOJ0AxS1pevRrngDkT6Gl77h2bt3uVWYYOcH4YHsPYMFXqQ6otcZe4Cx8NT9E6H-4D8-Zk4mkus-VKZecCax8DQi1LWmccw1CeSWFZ15FcOq_xihPu2hBfbNTEurwOYQRF0jG1yUzewbb9HkjVhk9cPRTPX03-DZ0Rkz9A8hdIUfFKbYkDmAKqUTgzo9-JvpYTThq2kMawRzElhJCxZdK3m_SXEU03iM54T7V6I5L8lWW3P5Up470X3dbKYmaJ15VqsD34vRFyxIpIKzzNFjGaZtko7rdWDxYJxWIufBnv4WlIh2DwLFlXbibQPkzDL_i4rBFwOAnVQZfhYGcaMTUdMFXGWKISYdkt38dG8Fm-JLom7G2UvByu4uwaUnUGdOkZwLaSiL_TwSBYw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "onzeatable_paris",
    verified: true,
    google_rating: 4.7,
    description: "Une excellente surprise de quartier rue de la Folie Méricourt. À Table (anciennement 'Onze à Table') joue la carte de la bistronomie de réconfort : une cuisine française modernisée, généreuse et très soignée visuellement. Les viandes (comme l'entrecôte argentine) y sont particulièrement bien traitées.",
    insider_tip: "• Le restaurant sert en continu en fin de semaine et ferme à minuit, ce qui en fait un excellent plan pour les dîners tardifs dans le quartier.\n• Leur brunch du dimanche (34€) est de plus en plus populaire, pensez à réserver.\n• Si vous venez à l'apéro, commencez par partager le croque à la truffe et au pastrami (18€), diablement efficace.",
    expert_catchline: "Une bistronomie de réconfort aux assiettes généreuses et au sourcing soigné, parfaite pour un dîner tardif.",
    specials: {
        cuisine: ["Croque truffe & pastrami", "Noix d'entrecôte d'Argentine", "Œufs mayo façon César"],
        drinks: ["Cocktails classiques bien dosés"],
        must_eat: "Le magret de canard en basse température (25€), fondant à cœur avec sa peau saisie.",
        must_drink: "Une pinte bien fraîche pour accompagner le fameux croque à la truffe et au pastrami."
    }
};
