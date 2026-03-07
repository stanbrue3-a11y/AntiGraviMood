import { SurgicalPlace } from '../../../type-definition';

export const louie_louie: SurgicalPlace = {
    id: "poi-louie-louie",
    name: "Louie Louie",
    slug: "louie-louie",
    category: "restaurant",
    subcategory: ["italien", "pizza", "cocktails", "restaurant"],
    location: {
        address: "78 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8535073,
        lng: 2.3803616,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJcXILUQhy5kcRDna-_beMoB4"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:00–22:30\nmardi: 12:00–14:30, 19:00–22:30\nmercredi: 12:00–14:30, 19:00–22:30\njeudi: 12:00–14:30, 19:00–22:30\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: 12:00–14:30, 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.louielouie.paris/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Médiane des pizzas autour de 12-20€ (15€ estimatif global)
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "Antipasti",
                items: [
                    // VERIFIED: Uber Eats + Site officiel (2024-2025)
                    { name: "Burrata crémeuse, câpres, poivre", price: "10.00€" }
                ]
            },
            {
                category: "Pizzas",
                items: [
                    { name: "Margherita", price: "11.90€", description: "Sauce tomate, fior di latte, basilic frais." },
                    { name: "Gorgonzola", price: "15.00€", description: "Crème, gorgonzola, mozzarella." },
                    { name: "Muertadel", price: "16.00€", description: "Fior di latte, mortadelle pistache, burrata, guindillas." },
                    { name: "Dirty South", price: "16.00€", description: "Saucisse piquante, oignons rouges, sauce Ranch." },
                    { name: "Parmigiana", price: "17.00€", description: "Sauce tomate, aubergine, parmesan, mozzarella." },
                    { name: "Santo Gordo", price: "17.00€" },
                    { name: "Old Fashioned", price: "17.00€" },
                    { name: "4 Fromages", price: "17.00€" },
                    { name: "Spicy Honey", price: "18.00€", description: "Miel pimenté, nduja." },
                    { name: "Surf & Turf", price: "18.00€", description: "Tomate, anchois, Nduja, mozzarella di bufala." },
                    { name: "Legalize Pastrami", price: "19.00€", description: "Pastrami, moutarde, pickles." },
                    { name: "Cosmic Ninja", price: "20.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Tiramisu", price: "8.00€" },
                    { name: "Baba au Rhum", price: "8.00€" }
                ]
            },
            {
                category: "Boissons & Cocktails",
                items: [
                    { name: "Cola Baladin", price: "6.00€" },
                    { name: "IPA Rupture (Bière artisanale)", price: "8.00€" },
                    { name: "Cocktail Création (Old Fashioned, etc.)", price: "11.00€" },
                    { name: "Verre de vin nature (à partir de)", price: "7.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUrbrNVpSw52TTbDCi6liQ7Q-XxMyud2FU9d-iC7ZxnVXeFwDNV9yknnqQT0YnocwR7CMdKtCODMmzZ8rZ-Iv3FygjSVfQemjZW0ZurE-0f7OekJetlfAb2SOOQJccVmXmMbbZ-myno2-rByme7ysS3heTeNUrKYvBfTarSAyc7janYrDOYC0Bp8ActRn2cC8FUBS1T5_QZvTjetymOpmgLD3dgx6IhI1iS_9C7MGaVkK-8yTJMy_ZVJre0V6IngtNuZCpA9xm1BLq7b2sZKU2LMDAgb142tvEqEiZdbhxjqQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUjZNXCRfHf7H9FdLMN9hilj2HUFtaH2bE-W6W1Bsu0RpdRPfPSmaCSV_QVy7HNGa0fXGZqpwPTD6ZO9OlUYZQ8T5IvlznQ-Si4pfdRtbBovG4u2gnmBU1viAwLHymQ1bPpNWRZIIrRlcf6SUVGryIcEthnkhhvuKYA7GKt4pN8Xh59ftCfelNfwtgxnGlad2qh7E5CQa2T2chHFkThQ-vGhtjqckMJnAiR15MlxNeK2jT2sV-mkng5Cv0ngxDfKWLFBODZ0dBkmia-GaStkF-2eUVnDp8kGEk5SVM8mQPNNw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWFcq7VwkOxHIdcWI0_Udm_b3VJN4kQ76ue_jzNOBmk9YTTZW_-jrWJ_sj_aBMbNVM8E15V6BGKt6ZuTIbxB_J05UEBVQ0zGGV4uNObzpkio68Zfy6eVb18pweMhoQiqeMwo7WCjqWqaDAxgahcedmmhvm6dXD_QMBsYittmkVXS23iefPyoQYdgjjv5UMsv6_1bbgJ0wOBzv7Mo2zaNYERTl522NiCKM4qFAAXn3HQ7wafXqPxQj1qwW8wHqcN_EHZd_D__eevPEG3KM_xDvMQ5VVgVSctBm9VzUkafO5IWRyE5iwKuNXU-H_WXs4e9yFh6IFk5U37p0jNRu5E2c92Gr9jqCRoMHwmRqf0HnxTnPA11_arF7uspjHXvplQbQ4bHx_hkyN68SpVyQiA5VY3ADCeep4Ox1FPhoaCYxXWc2ETyrjIGvOGWPI9iGVF&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "louielouie_paris",
    verified: true,
    google_rating: 4.5,
    description: "Une des meilleures pizzerias néo-napolitaines de l'Est parisien, lovée dans la bouillonnante rue de Charonne. Pâte maturée longuement (bords gonflés et brûlés 'léopard'), produits sourcés en Italie (mortadelle pistache, fior di latte fondante) et vrais cocktails shakers minute.",
    insider_tip: "• C'est rare à Paris : on boit extrêmement bien chez Louie Louie. Leurs cocktails de mixologie accompagnent les pizzas à la perfection, comme ce que l'on voit souvent à Brooklyn.\n• La salle du fond, sous la verrière, est la plus agréable pour dîner.\n• Ouvert en continu tous les jours, midi et soir, un havre de paix sûr.",
    expert_catchline: "Pizzas napolitaines impeccables et cocktails pointus dans la très hype rue de Charonne.",
    specials: {
        cuisine: ["Pizza 'Muertadel' (Mortadelle/Burrata)", "Pizza Surf & Turf (Anchois/Nduja)", "Baba au Rhum"],
        drinks: ["Cocktails Créations", "Vins natures italiens"],
        must_eat: "La Muertadel pimente bien l'affaire avec ses 'guindillas' (petits piments verts) venus twister la douceur de la mortadelle.",
        must_drink: "Plutôt que le traditionnel combo Pizza/Bière, tapez dans leur carte de cocktails parfaitement dosés par de vrais bartenders."
    }
};
