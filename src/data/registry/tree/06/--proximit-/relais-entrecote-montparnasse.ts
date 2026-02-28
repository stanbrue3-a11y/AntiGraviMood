import { SurgicalPlace } from '../../../../type-definition';

export const relais_entrecote_montparnasse: SurgicalPlace = {
    id: "poi-304",
    name: "Le Relais de l'Entrecôte",
    slug: "relais-entrecote-montparnasse",
    category: "restaurant",
    subcategory: ["viande", "bistro", "institution"],
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
        is_free: false,
        index_price: 29,
        primary_price_type: "dish",
        wine_glass: 6,
        dish_price: 29,
        menu_items: [
            {
                category: "Le Menu Unique",
                items: [
                    { name: "Salade aux noix & Faux-filet frites", price: "29€", description: "Salade aux noix, contre-filet, sauce béarnaise secrète maison et frites allumettes à volonté" }
                ]
            },
            {
                category: "Desserts (Suppléments)",
                items: [
                    { name: "Profiteroles au chocolat", price: "8€", description: "Chou géant, glace vanille et sauce chocolat chaud" },
                    { name: "Vacherin du Relais", price: "8€" },
                    { name: "Tulipe de fraises", price: "9€", description: "Glace vanille" }
                ]
            }
        ],
        smart_tip: "Pas besoin de choisir, l'institution ne sert qu'un seul menu salade-viande-frites à 29€."
    },
    moods: { chill: 40, festif: 10, culturel: 80 },
    description: "La mécanique est implacable et le succès inébranlable depuis des décennies. L'institution repose sur un dogme simple : un menu unique (salade aux noix, viande, sauce magique et frites à volonté). Les serveuses en tenue de soubrette noire et tablier blanc virevoltent dans un décor bistro rustique.",
    expert_catchline: "L'unique formule magique : salade, faux-filet extra tendre, frites à discrétion et sauce confidentielle.",
    insider_tip: "- Aucune réservation n'est acceptée. La file d'attente s'allonge sur le boulevard dès 18h45.\n- Dès que votre première portion est terminée, la serveuse débarque spontanément pour vous reservir une deuxième assiette de viande chaude et des frites craquantes (tout est inclus).\n- Le service est exceptionnellement rapide : on ne s'éternise pas à table.",
    specials: {
        cuisine: ["Faux-filet", "Frites Allumettes", "Sauce Secrète"],
        drinks: ["Vin de la Propriété (Château de Saurs)", "Bordeaux"],
        must_eat: "L'irréductible menu unique (29€) et les profiteroles géantes en dessert (8€).",
        expert_catchline: "Le temple de la viande où les frites dorées coulent à flots."
    },
    images: { hero: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Relais_de_l%27Entrec%C3%B4te.jpg", gallery: [] },
    source: "research_ai"
};
