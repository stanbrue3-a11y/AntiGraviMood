import { SurgicalPlace } from '../../../../type-definition';

export const relais_entrecote_montparnasse: SurgicalPlace = {
    id: "poi-304",
    name: "Le Relais de l’Entrecôte",
    slug: "relais-entrecote-montparnasse",
    category: "restaurant",
    subcategory: ["viande", "bistro", "institution", "restaurant"],
    verified: true,
    google_rating: 4.4,
    instagram_handle: "relaisdelentrecote",
    location: {
        address: "101 Boulevard du Montparnasse",
        arrondissement: 6,
        lat: 48.842509,
        lng: 2.328717,
        nearest_metro: "Vavin",
        metro_lines: [4],
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        opening_hours_raw: "Lundi au Dimanche: 12h00-14h30, 19h00-23h00",
        main_action: {
            type: "site",
            url: "https://www.relaisdelentrecote.com/"
        },
        cuisine_type: "Viande & Frites",
        terrace: true
    },
    pricing: {
        avg_budget: 42,
        is_free: false,
        index_price: 29,
        primary_price_type: "dish",
        dish_price: 29,
        wine_glass: 6,
        pint_price: 8,
        soft_price: 4.5,
        coffee_price: 2.5,
        smart_tip: "Pas besoin de choisir, l'institution ne sert qu'un seul menu salade-viande-frites à 29€. Gardez absolument une place pour les profiteroles.",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "La Formule Unique",
                items: [
                    { name: "Salade + Contre-filet + Frites à volonté", price_cents: 2900, description: "Salade aux noix, fines tranches de contre-filet, sauce secrète maison." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Maison",
                items: [
                    { name: "Profiteroles au chocolat fondant", price_cents: 950 },
                    { name: "Gâteau du Relais (Tout Chocolat)", price_cents: 750 },
                    { name: "Vacherin du Relais", price_cents: 850 },
                    { name: "Crème Brûlée", price_cents: 700 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Carte des Boissons",
                items: [
                    { name: "Vin de la Propriété (Bouteille)", price_cents: 1900 },
                    { name: "Vin du Relais (Verre 15cl)", price_cents: 600 },
                    { name: "Bière Pression (25cl)", price_cents: 500 },
                    { name: "Softs (Coca, Perrier, Jus)", price_cents: 450 },
                    { name: "Eaux (Evian/San Pe - 1L)", price_cents: 700 }
                ]
            }
        ],
        last_updated: "2026-03-02"
    },
    moods: { chill: 40, festif: 20, culturel: 80 },
    description: "La mécanique est implacable et le succès inébranlable depuis des décennies. L'institution repose sur un dogme simple : un menu unique (salade aux noix, viande, sauce magique et frites à volonté). Les serveuses en tenue de soubrette noire et tablier blanc virevoltent dans un décor bistro rustique, assurant un service millimétré et chaleureux.",
    expert_catchline: "L'unique formule magique : salade, faux-filet extra tendre, frites à discrétion et sauce confidentielle.",
    insider_tip: "- Aucune réservation n'est acceptée. La file d'attente s'allonge sur le boulevard dès 18h45.\n- Dès que votre première portion est terminée, la serveuse débarque spontanément pour vous reservir une deuxième assiette de viande chaude et des frites craquantes (tout est inclus).\n- Le service est exceptionnellement rapide : idéal avant un train à Montparnasse.\n- Le Vin du Relais est un vin bio issu du propre vignoble de la famille, excellent rapport Q/P.",
    specials: {
        cuisine: ["Faux-filet", "Frites Allumettes", "Sauce Secrète"],
        drinks: ["Vin de la Propriété (Château de Saurs)", "Bordeaux"],
        must_eat: "L'irréductible menu unique (29€) et les profiteroles géantes en dessert.",
        expert_catchline: "Le temple de la viande où les frites dorées coulent à flots."
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVF3rkicQKWwWJDuVixQsvlAFxBeDh05KFg9c3eXkCam1NAfqi2NYEVEBxi30jKfHMCubr0m1vWn7Q2PQvIhlgwED3ZiLPMrWGV43najeenjxLCuJRaOKdvwR7cV80eQLrFR2ZcPdNYXHR1iuzghegsQAAy4kyTzxHIaQXfzlOFS4EtWGfbhkQAx1whBnHUt-woksY6V31SpL9QkP6S0IynJosXusB7h-u7eLr9i8xDUZ4p6wIS9SFCsyGYCRb1rWDC862Zm1QjqKKx6TSEGq1Z91hjhOrQivR_Hk36AUlAUnQK5Ag&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW3YsRXDREIOkeGQJgq0_fQBPNkSaPghRXy2sFcTsHh60xxTASFmxbvP04K_jh84aDn6rzqb1oPq8VOpRIDInUWoyn_iodqK0ZMqNboGIqaK_vKmDEiOk_ZWL8IRgXf_X3MY9x3BE_CLCOIXWnazbZbJ4Ot9XMVb_DE8gRgIgZyRWza995tXVuTnaFfBCAp1BF_3ZrPsC3ywkdgKYHRWpqDYmBkHimWxc-rtq2EA6YoKOYRINr5VP7CdA4JZ-n9M3x_Ix8HWpkWlnTOIiZkRM3aC6XDXVL_nWRI4xylAYDpYLxqyI8oEu5wRrPOCKmTqmuYgYMQmHRenLkyvhwt_ApI832QKr84jZd9BpH3wgVJBZnjQvnX7DhWF-Fp1qZABI-IHTsbGpOUzfWAzbbmUqpmfbkkWDh1KbkQRLTGiKVB4tCFPs7A_xnYbFgaezf8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUC1upTwIlr2k8MfSib3QzIBnngqwiEHlmYnz2FegxZ7lmYtiVYAByyYnznodeHv8T9fdvazubNcg9wOHCNIwpWr4iA56ZkysTpplwTkx3Tm884cNN6c8ZBC2hYG4E8B8wsDZun2y_eIARbVP_giEYccNd0BabEbwgJ4hNv6K4KSpTmejatXs6Dvqunj-Bpu6Kr9h7fejm4-e-M-O4hUgfFlsAGdFrSltA0Um-hwFGOmLS8-rn-L6RKexhDFSCsQzr69e-IdneKwi33cKe84ZUYcrM6sED9Fam2m4UX33x83QOjVrDsTp0VovoDFcZ3T2PeIf5TaqnijmwqYgKpMb1Gigpmn9NYSSoplIQUNXflApIVf7rWHm9UXN645pilwIIVr65EjzQm_6I7CPBilqRyQ5RSjfK9Bond7h41BTZt-s__YPiGjb_6zmJsmecS&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    source: "expert_human"
};
