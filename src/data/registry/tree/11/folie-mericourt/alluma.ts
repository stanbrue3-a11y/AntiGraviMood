import { SurgicalPlace } from '../../../type-definition';

export const alluma: SurgicalPlace = {
    id: "poi-alluma",
    name: "Alluma",
    slug: "alluma",
    category: "restaurant",
    subcategory: ["bistronomique", "méditerranéen", "levantin", "restaurant"],
    location: {
        address: "151 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8681517,
        lng: 2.3749043,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJPxGQOx9t5kcRmczlkAOj3Ps"
    },
    moods: {
        chill: 60,
        festif: 15,
        culturel: 25
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:30–14:30, 19:30–22:00\nmercredi: 12:30–14:30, 19:30–22:00\njeudi: 12:30–14:30, 19:30–22:00\nvendredi: 12:30–14:30, 19:30–22:00\nsamedi: 19:30–22:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://alluma-paris.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Plats à la carte entre 24€ et 32€.
        last_updated: "2026-03-06",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Formules & Menus (Midi & Soir)",
                items: [
                    // VERIFIED: Site officiel + ParisBouge (2024-2025)
                    { name: "Menu Déjeuner (E+P ou P+D)", price_cents: 2300 },
                    { name: "Menu Déjeuner Complet (E+P+D)", price_cents: 2500 },
                    { name: "Menu Dégustation (6 temps, dîner)", price_cents: 5500, description: "Le voyage complet du chef Liran Tal." },
                    { name: "Menu Dégustation Étendu (8 temps)", price_cents: 7900 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    // VERIFIED: Mises à jour récentes menus
                    { name: "Céleri Cacio e Pepe", price_cents: 1400 },
                    { name: "Courge Butternut au beurre blanc à l'harissa", price_cents: 1200 },
                    { name: "Betteraves Brûlées & Burrata", price_cents: 1500 },
                    { name: "Crudo de Poisson, salade d'agrumes, olives", price_cents: 1600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    // VERIFIED: Plats 24-32€
                    { name: "Poisson Grillé, fenouil rôti, miel et za'atar", price_cents: 2800 },
                    { name: "Poulpe au Charbon", price_cents: 3200 },
                    { name: "Magret de Canard", price_cents: 2900 },
                    { name: "Ravioli aux Pommes de Terre", price_cents: 2400 },
                    { name: "Agneau à trois formes", price_cents: 3000 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Namelaka au Chocolat, glace crème de sésame", price_cents: 1200 },
                    { name: "Mascarpone aux Cheveux d'Ange", price_cents: 1300 },
                    { name: "Pavlova aux Agrumes", price_cents: 1200 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXHlARID27IwHG-Sgm64zq8g9vzq0NYvbZPaOfbrvOIPDbisqFuZHRzfCI3Bq4vxbzLaozZVCEnCizwkbGpQSGn05337YVTYrSYzpteDRPxva4l6UcESe2d_JWPDAt838ypjSDVjtKMUeZ4Cj4E4De_xff35XyLLUpn7fmryMp_o9fbbEEAonMR0kqPoa0lI5b6VCb-77tGhX0LgTAvSHNGXDG599sRBxrPPnv3N7RaQmTw1Wf_iXEHt-PnQ_XZN5-0akNkr35IF_1Ldeo1W09XT0yXknQlVqVo20phOslCVw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXg5Shk0p0gJBNNuN6sUGeifqastbe3ylwQ9JCcGb2wkuLsxXMVy1-ZA2trIBqwa3PJqhs1vCQo8mCcVTFL4QiyeuqyA-jsG0xr9agQ6zRjzdVpQYhVDpQ7r6CPdEbVlGLqYoL_nEggucojYIO_nO6ZcLG9O01LuIRxNk02gUWYb-zzqETq1CZeaJB3YYBc-jLyccSHf1lLDyP4ETx5h73bsRYLq5nd-0xLb2sjg10zK2AHDnLDXuTQKfDOsooqNJ5oDwTmlmvu-1jAox_RvPch7h1Hi08qqEA7hM6dZwUIng&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWjju2HVqLHFYRg51b_SkUfO5EEsnR_tcipTQZgKzdwN9QCkQCQOCQ5r265dRB-kM3zRcpov76BT47ZJdyHtl_AK7fNc3OKffuOTqVbhg5K4OWZGvDjhA4JvIUTieyIFl7ePp9V8o7GpmcoISHpElgtalo-q1o9hyUq2FuYcSRC8nZDRIZF4FPqHq-Jv0qGvNy9A-IAnVIvXIYvwmwP238AQpOy4PC-5mSnRzg9E7L9j1VHQMQGSPrWmadwtwmCtvwucnBRicuqkeI_jdzM1s4W4CyokzxkbRD-gcUXkZInPsPATyb4zfvM8ZjM3gsBAhgLkPklYmRAW3vid4TK9ByFN2rNX07l8qTx_MdOOWW7KParSMD0swNUqIVxB0cjG7mw0tVTPWpsCuGLz9sqGSFAdiSBT-JvXzJVnzvuPFLmFrMLTJYNNK7WNH9mNg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "allumaparis",
    verified: true,
    google_rating: 4.8,
    description: "Une bistronomie méditerranéenne et levantine brillante signée Liran Tal (ex Gamin). Alluma propose une cuisine créative influencée par Tel-Aviv, mettant en valeur des produits de saison. Le menu dégustation du soir est une immersion totale, tandis que le déjeuner offre l'un des meilleurs rapports qualité-prix de la rue Saint-Maur.",
    insider_tip: "• Le menu déjeuner complet à 25€ (E+P+D) est une affaire en or pour cette qualité.\n• Le menu dégustation du soir en 6 temps (55€) est indispensable pour comprendre la vision du chef.\n• Les mercredis et jeudis, c'est 'Carte Blanche' pour le chef.\n• Les vins sont axés natures et biodynamiques, avec des références arméniennes pointues.",
    expert_catchline: "La bistronomie franco-levantine la plus élégante du 11ème, menu canon à 25€ le midi.",
    specials: {
        cuisine: ["Crudo de poisson aux agrumes", "Poulpe au charbon", "Namelaka au chocolat, glace sésame"],
        drinks: ["Vins natures", "Vins arméniens", "Sélection pointue"],
        must_eat: "Le menu dégustation (55€) vaut largement le détour. À la carte, le poulpe au charbon (32€) et le crudo (16€) marquent les esprits.",
        must_drink: "Laissez-vous guider sur un vin orange ou une cuvée d'Europe de l'Est pour matcher les épices."
    }
};
