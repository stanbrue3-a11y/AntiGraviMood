import { SurgicalPlace } from '../../../type-definition';

export const moonshiner: SurgicalPlace = {
    id: "poi-moonshiner",
    name: "Moonshiner",
    slug: "moonshiner",
    category: "bar",
    subcategory: ["bar à cocktails", "speakeasy", "bar"],
    location: {
        address: "5 Rue Sedaine",
        arrondissement: 11,
        lat: 48.8556969,
        lng: 2.3712084,
        nearest_metro: "Bréguet-Sabin",
        metro_lines: [5],
        google_id: "ChIJdT6AoABy5kcR6p_Abkvrr6I"
    },
    moods: {
        chill: 50,
        festif: 50,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 18:00–02:00\nmardi: 18:00–02:00\nmercredi: 18:00–02:00\njeudi: 18:00–02:00\nvendredi: 18:00–02:30\nsamedi: 18:00–02:30\ndimanche: 18:00–02:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://moonshinerbar.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 6.00,
        wine_glass: 0,
        coffee_price: 0,
        dish_price: 14, // MANUAL: Cocktails en moyenne à 13-14€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Les Cocktails Signatures Terroirs de France (2024)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Bœuf bourguignon (Création originale)", price: "14.00€", description: "Inspiré des terroirs français, étonnant et salin." },
                    { name: "Saté (Création épicée)", price: "14.00€" },
                    { name: "Cidre & Genièvre", price: "14.00€", description: "Notes herbacées, fraîches et pétillantes." },
                    { name: "Punch du jour (Saison)", price: "6.00€", description: "L'option la moins chère pour bien démarrer." }
                ]
            },
            {
                category: "Les Barrel-Aged & Classiques (Les 50 historiques)",
                items: [
                    { name: "Vieux Carré (Barrel-Aged)", price: "13.00€", description: "Un grand classique américain de Rye et Cognac, vieilli en fût." },
                    { name: "Negroni vieilli en fût", price: "13.00€" },
                    { name: "Boulevardier", price: "12.00€" },
                    { name: "Old Fashioned sur mesure", price: "12.00€" },
                    { name: "Cocktail Classique au choix (Demande au bartender)", price: "12.00€" }
                ]
            },
            {
                category: "L'Univers du Whisky (Plus de 85 références)",
                items: [
                    { name: "Sélection de Bourbons (Verre, à partir de)", price: "12.00€" },
                    { name: "Sélection de Scotch Single Malt (Verre, à partir de)", price: "14.00€" },
                    { name: "Whiskies Japonais pointus (Verre, à partir de)", price: "16.00€" }
                ]
            },
            {
                category: "Bières & Snacks",
                items: [
                    { name: "Pinte de Bière Pression", price: "6.00€" },
                    { name: "Cidre Bouteille", price: "7.00€" },
                    { name: "Pizza Da Vito (à commander au restaurant avant d'entrer)", price: "14.00€", description: "Non servi au Moonshiner, mais indispensable avant !" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUbsRsaFK1uzgRnE1Vglmr31GwYpvCm8kr1Znn1jH7XSCJEZcDVBF8wF1-Gf6IJQ6V3PfrL9XPrAnDnpioE84g-zMK9rkb2xwm1Q_4XT3Y0613_e69lOT-VxdxattQEwtxBVgPm08FWcLuOfCkKwrrj_F-vJYpA7G74KdVm2lIhehHYMvt2KlrFfpoDQEzkvfE27ph1sEoglgZRz823Mbrv7m_xM3p4VbA0TcWZgnxlMR_AlpshVPvCjlU4wZfEFPjryhZIzSufpymG7NTNp3Szsi8WvrPI0Zo8aSEG2pCNIw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV0wtp8lRpAEoMDbS5EJtIlPqx4IgXeE9IGfiVkXsUoh_hJY_mEbds_1i_SqNC54UWRveQS8nSe-a5JO1cbAzjMQ-vh0SGI5MB-P02TmhNhw3hLEYY6s7w5qereezIdc69baiXeooO9oOZqeJsStgavkMzdfseGshHvwUg6BpWMI34pSqCbvLajV2mljVkTJ7XejlWCaFAm-YJQLrnVykh34HR-GxWFwqWhx_fvrZCBawNGZSXnqAVTOdEG75RmYwCETLDfXWcOldIw4LOrCTpl_dMDOOp7BbDEhw32eKiTQK97Y4fXO9VwmJEku96CfUphBdJS_AtV8UXpYiMQLC-IKbz31Hv9CirfpHaRIc4D_LSRPdSoq9See29uJ17zIGgvPwYEHITL_I6HPMcm-zzQLUyfVe8rAVY4RSsL4qc4wdPQ4ZkqwWKhcOgE-yXw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUGhE-EhQNk7AMGCoSPp6hpB7fg27FwbfHV6zUWMLWc0Sa7-lycaivgN_sP6ATKDZymkKelmQqiil6PYrrH9GxcaGaDYhqGZmUkYUwBrq31rrGIrqW2oQ7NWnCxFAzdP8Cot8umsqufKn3mMFPszad0Ba0T3yl2nKAa407dXVJLZVaSLVNWwavyPvqpr1IvY3V_uYAfhkyTR4ZO92rwmHRYBymbpukS8-gc7oV3n3bFqonkjmo3Z1wVLZUC31xHxo48fpt010fcSwoPn72SBPWZ9I6oepksWQmap6ufTrc7rQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "moonshiner_paris",
    verified: true,
    google_rating: 4.5,
    description: "Le bar pionnier du phénomène Speakeasy à Paris (il faut traverser la chambre froide de la pizzeria « Da Vito » pour l'atteindre). Mobilier années 20, tapisseries fleuries, lumières tamisées et jazz feutré accompagnent une immense sélection de whiskys.",
    insider_tip: "• Pénétrez dans la pizzeria Da Vito (juste à l'adresse), allez au fond vers la chambre froide et ouvrez la grande lourde porte métallique.\n• Ne vous arrêtez pas aux cocktails simples (14€), ils offrent plus de 85 références de Whisky exceptionnelles.\n• L'endroit propose aussi un coffre-fort caché. Serez-vous le trouver et craquer le digicode ?",
    expert_catchline: "Entrez dans la pizzeria Da Vito, poussez la porte de la chambre froide. C'est ici.",
    specials: {
        cuisine: ["Pizza (À commander au Da Vito juste avant)"],
        drinks: ["Cocktails Barrel-aged", "Collection de Whiskys (85+)"],
        must_eat: "Prenez une pointe de pizza Marguerita juste à l'entrée chez Da Vito avant de plonger dans l'obscurité !",
        must_drink: "Tout cocktail mis en vieillissement en fût de chêne (Barrel-Aged, comme leur majestueux Vieux Carré)."
    }
};
