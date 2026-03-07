import { SurgicalPlace } from '../../../type-definition';

export const brutos: SurgicalPlace = {
    id: "poi-brutos",
    name: "Brutos",
    slug: "brutos",
    category: "restaurant",
    subcategory: ["viande", "bistronomique", "sud-américain", "restaurant"],
    location: {
        address: "5 Rue du Général Renault",
        arrondissement: 11,
        lat: 48.8615021,
        lng: 2.3781765,
        nearest_metro: "Saint-Ambroise", // Or Voltaire
        metro_lines: [9],
        google_id: "ChIJq6qeDvpt5kcRPPxnMCpRZdQ"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: Fermé\nmercredi: 19:00–23:00\njeudi: 19:00–23:00\nvendredi: 19:00–23:00\nsamedi: 19:00–23:00\ndimanche: 12:30–15:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.brutosparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 38, // MANUAL: Plats principaux entre 30€ et 45€ (ex: Côte de cochon, Asado de Bœuf)
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "Brésil & Asado (Entrées & Tapas)",
                items: [
                    // VERIFIED: Le Fooding + lacarte.menu + Novacircle (2024-2025)
                    { name: "Dés de Tapioca frits, sauce goyave piment doux", price: "9.00€" },
                    { name: "Caviar d'aubergine fumée en toast, grenade, noix du Brésil", price: "7.00€" },
                    { name: "Asperges vertes à la braise, sauce Gribiche", price: "11.00€" },
                    { name: "Os à moelle braisé, noisettes concassées", price: "12.00€" },
                    { name: "Morcilla maison et piments guindilla", price: "10.00€" }
                ]
            },
            {
                category: "Au feu de bois (Plats)",
                items: [
                    { name: "Asado de tira Black Angus, chimichurri, frites maison", price: "29.00€", description: "La spécialité de la maison." },
                    { name: "Côte de Cochon de lait de Clavisy, abricots grillés", price: "28.00€" },
                    { name: "Lieu jaune, beurre blanc aux crustacés", price: "32.00€" },
                    { name: "Poulet fermier rôti du Dimanche, shallots, frites à l'ail", price: "28.00€", description: "Uniquement le dimanche midi." }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Banane croustillante, dulce de leche, crème crue, coco fraîche", price: "8.00€" },
                    { name: "Pudim (crème caramel brésilienne)", price: "9.00€" },
                    { name: "Gâteau chocolat du Brésil", price: "11.00€" }
                ]
            },
            {
                category: "Cocktails & Vins",
                items: [
                    { name: "Caïpirinha classique", price: "12.00€" },
                    { name: "Negroni au mezcal signature", price: "12.00€" },
                    { name: "Verre de vin nature (rouge Ardèche)", price: "6.50€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV5cCJMcuvw5AvlA_45r6LcKqjo66j91ojIA8ZxHWMLYU3L8yn6ErKC1Yy9USiPu1eBS2LnEMpCkQyVcq8iz4MpTdISo8FwwjLEDUK7tqa_QOhBcSlh5cL-7TDapz4MxK5PK3fHDJt7vEqZT3SAfnl6wR55bqhTD9rGFdwJBNE-iyybqpfxJWfbSvhlVjBx78ZRL-_Q6-PSkUnWnGnTuX_O1meChbNOjyWDeD2IeB9lwWANHzWFiaFOQNBnd4B30iVyZtxrTs10IPIKFzK0wIyNQgU2J7pFIswqmkicXcUhIg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVuiqyo8ENyKeIZGNKcSk7VxN-EORz_xzCDwJcUWXTjysUABSsOTkAjeFCw0cF2-hmolOIhsU_jZqghVQVoiTx8SFzapcEur3uKOkb3HY7RORXeN6Jw8FOMuYYMli5xCJ7VbHwDO7eECDRXXyY9tN1MjrbHqXcLa_k5IXNgtSwRyryUfsb5m15XLJ6LZHVCHW4hwr6dDzPCf2o4bYvit6J794RBlqrAj-Er9QhR2MNZ6e-q9e1cRerkKYxqIM-S7B0l0U5yrXyFaGO4U-8ufMJbWpQUAnMWSpHrw869b9jAGw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU9qp3_JHPqJPbYEgGSK27gF5uUd8OY6eIy71OIX7vPBTfxCZLq2SWaLhpYaIEt-GDAh3e65253-D72xDyXSh6TfKNUTG2IXovk2jyeIjjXr1abIjerO-kY0iMx_kb7BzV7hrLiU0M9Njvo4MoRxtOVTe4UReRXaaC6iPyVNM2x0HjXaOeSox1p6SnM8H-JHAFhJwRXr-3wwvP1fYfCEulXmp8YZl-_IUzeynkKWbi1JbzFlf8X9W5KPE689Kgd5sM0wU3Ridlphvxg7nQwm6TisWKH-PYG8ah5lOvsFguzr47NgQ6oYbHAuVRtMZJ1Mt7m5jWQE0P3VCY6e-7ON9wLU6NA8fEbl99hpY5EZZIPc9AfU0LpqxpC3vW00WnxpUL7V8coeeuS_iOYhxDXPvJo79uLIjXKHg8aKRWG1YK0lzhKUnMepJJVcrfb2A&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "brutosparis",
    verified: true,
    google_rating: 4.3,
    description: "Le temple parisien de la viande cuite à la flamme et de l'Asado argentin/brésilien. Chez Brutos, le feu de bois est le maître absolu. On y déguste des viandes d'exception (Black Angus, cochon de Clavisy) caramélisées à l'extérieur et fondantes à l'intérieur, sourcées chez les meilleurs producteurs, le tout arrosé de vins natures pointus et de caïpirinhas redoutables.",
    insider_tip: "• Les frites qui accompagnent les viandes sont cuites dans la graisse de bœuf (façon belge), un délice absolu.\n• Ne manquez surtout pas les 'Dès de Tapioca' en entrée, la texture est addictive.\n• Le dimanche, l'ambiance change : le restaurant est ouvert uniquement le midi pour un poulet rôti dominical monumental.\n• Couvrez-vous d'un pull qui ne craint rien, l'odeur de fumée et de viande grillée vous imprégnera.",
    expert_catchline: "L'Asado le plus hype de l'Est parisien. Viandes d'exception au feu de bois et jus de viande affolants.",
    specials: {
        cuisine: ["Asado de Black Angus", "Tapioca frit piment/goyave", "Poulet du dimanche"],
        drinks: ["Caïpirinhas parfaites", "Quilles natures racées"],
        must_eat: "L'Asado de tira de Black Angus : la découpe transversale des côtes selon la tradition sud-américaine assure un gras hyper croustillant.",
        must_drink: "Débutez impérativement par leur Caïpirinha, peu sucrée et parfaitement équilibrée, avant de passer au rouge nature sur la viande."
    }
};
