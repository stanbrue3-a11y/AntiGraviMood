import { SurgicalPlace } from '../../../type-definition';

export const repaire_cartouche: SurgicalPlace = {
    id: "poi-repaire-cartouche",
    name: "Le Repaire de Cartouche",
    slug: "repaire-cartouche",
    category: "restaurant",
    subcategory: ["traditionnel", "viande", "bistrot", "restaurant"],
    location: {
        address: "8 Boulevard des Filles du Calvaire",
        arrondissement: 11,
        lat: 48.8617835,
        lng: 2.3662283,
        nearest_metro: "Saint-Sébastien - Froissart",
        metro_lines: [8],
        google_id: "ChIJ8_B8vHtt5kcRAmD0_bO6uS4"
    },
    moods: {
        chill: 70,
        festif: 20,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: Fermé\nmardi: 12:00–14:00, 19:30–22:00\nmercredi: 12:00–14:00, 19:30–22:00\njeudi: 12:00–14:00, 19:30–22:00\nvendredi: 12:00–14:00, 19:30–22:00\nsamedi: 19:30–22:00\ndimanche: 12:00–15:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/lerepairedecartouche",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 55,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 28, // MANUAL: Menu souvent 30€, plats autour de 25-30€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Formules & Menus",
                items: [
                    // VERIFIED: Sites & Articles 2024-2025
                    { name: "Menu Déjeuner (semaine)", price: "30.00€" },
                    { name: "Brunch du Dimanche", price: "54.00€", description: "Le fameux poulet rôti frites du dimanche." }
                ]
            },
            {
                category: "Spécialités de la maison (Entrées)",
                items: [
                    { name: "Pâté en croûte de Rodolphe Paquin", price: "18.00€", description: "La légende de la maison." },
                    { name: "Terrine de boudin noir", price: "16.00€" },
                    { name: "Salade d'oreilles de cochon", price: "15.00€" }
                ]
            },
            {
                category: "Gibiers & Viandes (Plats)",
                items: [
                    // VERIFIED: Spécialités
                    { name: "Lièvre à la Royale (en saison)", price: "45.00€" },
                    { name: "Côte de veau de Normandie au cidre", price: "35.00€" },
                    { name: "Parmentier de sanglier", price: "28.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Clafoutis aux pommes", price: "10.00€" },
                    { name: "Mousse au chocolat noir et gingembre", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX9T-ojR8OK4CK_CF3SBJATgShbNUqmnessxzjXosHDcgNXvEl9wBqDHW78DWOtWkon3OUq8htYCgZF2YlPoJhKtkssW5LwqH5EmsA3UndTpFNXsS39A5GBaazdRq4tUeSea7xtZCN_65kNdLPrLvMlKeZqrFCcVIYoiqWqJl8FCFWClRO5MAFVHHoudHkFBjByofVb5-5N7SBjZ58IdJqgSZGtRg6YKLcSzHElz458Xlj5Ye23wrYs2rVEffOVCgso6W4f-DxkB_2BW-h25rV8BSksBkZZw_tsFMstVmbl3yaOxhHYHMTavQSeMwWd-TNEnWpZ0m5nBrLJL3kNLCn2GYe53HV0IDA48XnhOHAvPQq5h3-QDBcHh6G1FnMhfuyEy1XqWUrx6xs_FwxYxFcUUr0CiXWNjTGhH9TkWyQJ-w&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWyq9sTVRpGbDWBVVqSfRke2mkcmvktlUUjDCqleDDIRhi1zpoaRIr0SZPr1EsXK_9P0q8uZBSzHQdrCFUMCD_FgI_AATKBKUl7UiTuxjAd4Ic_wNA8oPyYZXRZqNgf-LvAkg7Ve30VCds9Y-wFUOyODzlKygCl8fcEwNYUBZko8h4ybX6_MdKsfvvIC12sX7Q50xwYYMa3FOTmVxe7Gro7B3xAGMwu0tfA4GRumcchfqjjiEwjrLj9gn13D_q5gJS2TOU6OMv34C_0EwnhomNVNwJJeFLTHH_2j4k7BDIBXBgeskD-0lrYEZMc71E5ByilAAxAsro0Q1oJeP5T1SXRbeWbVeLYi9lHOq-BPQBkpqAR_Fxo_FI9n0evKKbmpNQYB3uuCkDx2Eb2voNK_qOP9ogBX5fOFkcVW_ulGTVKa5Y&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXJha1jU9cofVIlOjbc8JmXvNWoXbeL-i5cOJyva7LzufS2CJw0drtI8cgAjes97Uxhlql-Ro-K2caZYwXaorq36YUiye8yp_kovqdiTyWRuTdNpvHNNiJOS8uGslLuhnkRVOFYffLyuTYF1arG69-agTWK_LOUBFdoeOr03A9RGuvj60UKnLqFeh09kmCR563XbHTsGjwQOnKcf-2tXC5Goh2fathtlkb1hNfxM1yfXeuvAFMrqembJmXmOABbdLeKRVoJOqy1WEyJTNRARGHLXZBuEAwtV1x3ur4lyX1fM6BQ6m6mlw6YUmXvyM76FiLCuy_byk4FlRhnILKhW9_HMRIMnT-EqUmk1K0MDMg9CD6IwPoQklNHWKtpc-ICjSWwcOg4pZDLo9wywmAfZSQUwRN2I1lKuKClvSFGitkzZNws&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "lerepairedecartouche",
    verified: true,
    google_rating: 4.3,
    description: "Une institution viandarde et giboyeuse incontournable tenue par Rodolphe Paquin. Le Repaire de Cartouche est le temple du pâté en croûte à Paris et le QG des amateurs de classicisme français ultra-généreux. Un décor de bistrot de toujours, des terrines monumentales, et des sauces au vin rouge qui collent aux lèvres.",
    insider_tip: "• Ne venez pas ici si vous n'aimez pas la viande : c'est le paradis du gibier (lièvre à la royale, grouse, biche en saison d'hiver).\n• Le pâté en croûte de Rodolphe Paquin est mythique, il DOIT figurer sur votre commande.\n• Le dimanche midi, c'est poulet rôti frites familial pour tout le monde (54€ avec le reste du menu).\n• Les portions sont homériques, prévoyez une balade digestive.",
    expert_catchline: "Le QG viandard incontesté du chef Rodolphe Paquin, temple parisien du pâté en croûte et du grand gibier.",
    specials: {
        cuisine: ["Pâté en croûte mythique", "Lièvre à la Royale", "Terrine de boudin noir", "Côte de veau rissolée"],
        drinks: ["Côte-Rôtie", "Châteauneuf-du-Pape", "Vieux millésimes de Bordeaux"],
        must_eat: "La trilogie hivernale absolue : terrine en entrée, lièvre à la royale au milieu, et plateau de fromages pour terminer.",
        must_drink: "Laissez-vous faire sur un grand vin rouge classique de la vallée du Rhône pour affronter ces plats puissants."
    }
};
