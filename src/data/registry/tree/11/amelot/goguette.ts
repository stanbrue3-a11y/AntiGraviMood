import { SurgicalPlace } from '../../../type-definition';

export const goguette: SurgicalPlace = {
    id: "poi-goguette",
    name: "Goguette",
    slug: "goguette",
    category: "restaurant",
    subcategory: ["bistronomique", "cave à manger", "bar à vins", "restaurant"],
    location: {
        address: "108 Rue Amelot",
        arrondissement: 11,
        lat: 48.8630374,
        lng: 2.3672992,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJq3ABcfNt5kcRKH-67O0Z06k"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 19:30–23:00\nmardi: 19:30–23:00\nmercredi: 19:30–23:00\njeudi: 19:30–23:00\nvendredi: 19:30–23:00\nsamedi: 19:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.goguetteparis.fr/", // Assuming standard format
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Petites assiettes très travaillées (bistrot/bar à vins) de 14 à 24€ le soir
        last_updated: "2026-03-07",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "Menu Goguette (Formule Midi)",
                items: [
                    // VERIFIED: Musiam-Paris + lacarte.menu (2024-2025)
                    { name: "Menu Goguette (Plat + Dessert + Boisson fraîche)", price_cents: 2150, description: "Formule complète avec choix de plat." }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Soupes",
                items: [
                    { name: "Soupe du moment", price_cents: 650 },
                    { name: "Tarte courgette, tomate et chèvre", price_cents: 900 },
                    { name: "Salade pâtes Risoni", price_cents: 800 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats",
                items: [
                    { name: "Filet de daurade, ratatouille et sauce vierge", price_cents: 1700 },
                    { name: "Suprême de volaille, pommes grenailles, jus au romarin", price_cents: 1700 },
                    { name: "Goguette Burger, sauce pickles, frites", price_cents: 1700 },
                    { name: "Poulet façon basquaise, riz pilaf", price_cents: 1700 },
                    { name: "Tortiglioni, tomate, basilic et Grana Padano", price_cents: 1500 },
                    { name: "Tarte méditerranéenne, salade verte", price_cents: 1400 }
                ]
            },
            {
                category_type: "other",
                display_label: "Accompagnements",
                items: [
                    { name: "Poêlée de légumes", price_cents: 600 },
                    { name: "Pommes frites", price_cents: 600 },
                    { name: "Petit pain nature Solène (70g)", price_cents: 80 }
                ]
            },
            {
                category_type: "other",
                display_label: "Assiettes du Soir (selon le chef)",
                items: [
                    { name: "Petites assiettes à partager (prix moyen)", price_cents: 1800, description: "Brouillades, poissons crûs, légumes de saison selon l'humeur du chef." },
                    { name: "Assiette de charcuteries et fromages", price_cents: 1600 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins Natures",
                items: [
                    { name: "Verre de vin nature (à partir de)", price_cents: 900 },
                    { name: "Bouteille de vin nature (à partir de)", price_cents: 3000 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV_LD4nCLwpF_HrpY9cCFZ4IbdoWqR1r2bS0fM8rNDTHUoZNKHbjiAd-yxnYF_2DkYeyEe3wXk6QK_HXfssJT_LFSwB448kKNoTAqKLFKXjf9UfknEuKlVa828NBplVdCLgkIWE8OfYvnrC-uVss1skBHnToBxsddelK0nLPUxJ_BTjCiwZrJRzzNqFNGnzobX9lXFmFdikjQlfD_-l8-tAFMPvnIjrd-q6kx0Y1Nt5nJi6PnHP5pBL8TRK_XlZzJnpSQZ-OUaqte3JAk7EcW-SiuPmSrqoTBw9PLQsKxCF3LWyhgWg1anIYyIAo_adG_L4HD9BprTXAqYdYXbmtQUbYLEYVtFEnXr2LnGow1uZu3AsfkHOVn0haxo3MNDduc0hrSN30d9IJv8efI8oPq22e9HRPMz52TelkVyKAcLcJw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXXpKdkgqHV_zVxaepZEAvf-CK41XyYWHcyZSprydUMnOPl9fnxmPM8jn1QrCxkLdUNZfOby89BFpo6xt7l11PJPqUaXNTIxgft7VLqVzlbBHuqigu2FIH2o0DzxCtQx57AsqeUeX9p8CHSrdiITBzz9GM7myZuiE5do0N_tX8jjmj-BOqvoLtXRwe51YyoErCGQUCl0L0PeWT0dujIN2tZBPS6jfOAAz3ZXBssGOpLTKvRPoQkwZLa4cYATmtD0Q38tmrkH1_-epmHeRYEOfhiLG98jFUY2K9LUJe4FyVQBeznirE1WYcNB2-LE5rkhfF2uvciBnRZCHXd3jTHrsYm5Z6IQuQw_pxxQgkl8fnDUBgq5tAAa4m9PXD6pucAOWWhM_KwbZiyLj9o_iGyNKVhVcu5QgPFiGycPniQCB8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU9cl0uvHL-0K4_vyovcOxAFiQWYkq8VFojsQe6aiNNn_sX843AgbhlcmcxDlE2_BLyZIH2--95JaSIAg8xUMfcWLY48MkGbgA6wC1q1VHIqEAF19-2vK5eApE9cBcWtsl6hbxWw3rpKt3YruIUaQemnjVUlzG2BNtWzZdDW-8yEO4nngGhgVnDq_QOGU1uw8q5MaQ9Sdvzi0zm5KhgEYoPaAVXH0fBJgktfSX5BbhIeHf4bojGE92BHTCM-44lrNpKYTwFyPss5wy-Xu4SXZr7ONjA74AHNejd5XSqvK4ajaygG_dLZr3XTGQl0XVYJpkhK2PlVGtf4Tpwjr4jhdcr_v5ZKZbbziSPUf31ChUyMRhD1osxc4I2QKddqQFZ3XPUDW9uXAoJFaLCm_DMT6B1jPD1OLSA-nhGPr-f2OO5aoo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "goguette_paris",
    verified: true,
    google_rating: 4.4,
    description: "Derrière sa discrète devanture de la rue Amelot, Goguette (mené par le chef Gianmarco Gorni, vu dans Top Chef) envoie une bistronomie délurée et percutante. Le soir, on y partage des assiettes canailles et créatives (souvent très riches en umami) au comptoir ou sur les tables hautes, en éclusant des quilles de vin nature.",
    insider_tip: "• Merveilleuse cave à vins natures, n'hésitez pas à demander conseil à l'équipe, experte en 'jus vivants'.\n• L'ambiance monte d'un cran au fil de la soirée, avec une bande-son souvent très cool (hip-hop/soul), parfait pour les petits groupes.\n• Le menu change extrêmement souvent, ne vous fiez jamais à ce que vous lisez sur internet la veille.",
    expert_catchline: "Néo-bistrot canaille et vins natures par le très créatif chef Gianmarco Gorni.",
    specials: {
        cuisine: ["Bistronomie créative et changeante", "Assiettes à partager umami"],
        drinks: ["Sélection pointue de vins natures et biodynamiques"],
        must_eat: "Faites confiance à l'inspiration du jour : Gianmarco Gorni a une maîtrise folle des assaisonnements et des jus corsés.",
        must_drink: "Laissez-les vous faire goûter à l'aveugle un vin orange un peu fou."
    }
};
