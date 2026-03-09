import { SurgicalPlace } from '../../../type-definition';

export const martin: SurgicalPlace = {
    id: "poi-martin",
    name: "Martin (Boire et Manger)",
    slug: "martin-boire-manger",
    category: "restaurant",
    subcategory: ["néo-bistrot", "tapas", "bar à vins", "vins naturels"],
    location: {
        address: "24 Bd du Temple",
        arrondissement: 11,
        lat: 48.8655, // Approx
        lng: 2.3653,
        nearest_metro: "Filles du Calvaire",
        metro_lines: [8],
        google_id: "ChIJjxJBwQdu5kcRq6Qu598M5Gk"
    },
    moods: {
        chill: 50,
        festif: 80,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 16:00–02:00 (Fermé Dim-Lun)",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.luckymiam.com/martin-boire-et-manger/", // Best available link
            label: "INFOS"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 7.50,
        coffee_price: 0,
        dish_price: 14, // MANUAL: Median des petites assiettes à partager
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Martin Boire et Manger 2024-2025 (Petites assiettes & Vins)
            {
                category: "Grignotages & Charcuteries",
                items: [
                    { name: "Olives de Kalamata", price: "5.00€" },
                    { name: "Saucisson de la Maison Montalet", price: "9.00€" },
                    { name: "Pain & Beurre demi-sel", price: "4.00€" },
                    { name: "Terrine Maison", price: "11.00€" }
                ]
            },
            {
                category: "Assiettes à Partager (Selon Saison)",
                items: [
                    { name: "Huîtres n°3 (x6)", price: "18.00€" },
                    { name: "Burrata, huile de basilic, tomates cerises", price: "14.00€" },
                    { name: "Croquettes de morue & aïoli", price: "12.00€" },
                    { name: "Poireaux vinaigrette & noisettes torréfiées", price: "10.00€" },
                    { name: "Gambas snackées au piment d'Espelette", price: "16.00€" },
                    { name: "Abats du jour (Cœur de canard ou Ris de veau)", price: "15.00€" },
                    { name: "Tataki de bœuf, sauce soja & sésame", price: "17.00€" }
                ]
            },
            {
                category: "Douceurs",
                items: [
                    { name: "Mousse au chocolat & fleur de sel", price: "8.00€" },
                    { name: "Plateau de fromages affinés", price: "14.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXqzsRQjpRG6qc4drCkZSTyPMsC484DQ4igeYXpOn-icRo28ecWUdEVL3eeF_tmrHn8lNiygpWN0nZ87tacPvvZY32i-2uUFg6cBK3xlqXQagIEUAmxFyqlVknkmlteOtewpiiuQPvXy7wF5xS9RWFxer4EXAUJPLyQH0RKVzEpj-voyq0IDSCurmQTTVx9DauRJuQP_MgYUQuSlZxd8EY0GSq5NmWyo6cd7hoWVXf-7s_-ARwZDJVaT1iAtqF9XJqXufG8GCzb26GfSXET0eMjCilQz5Y1c5Al0-5FGYc1I3y8pNu0FU-k9TjkSu8Oy0YWGP1pPbFQC2121BQx8H6bhRYTPMXiL1jReM6TDeC6HdknTrBwUdSXEvC0qbAxYmEbDoqs_1Ihok-uNu2sLg4txuMI5GBV6L9wx16tlZiNf1D0H7mK5pOAW_JXBsskL4cfXLdlKHFblW3Byplsj9ps7_Ea2USh2RL3hoedgcYtVc0KxoUAKRWemtATeIiZ7jumchu__Pa9hbu09uRry7ysYnh8TiIeW_Kr5xKTx2jpxTjnldy-0CaCan76sLTbtqJXpcGB&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Martin est le repaire par excellence des amateurs de bons vivants au Boulevard du Temple. Dans un décor de bistrot parisien authentique avec son comptoir zinc et ses ardoises manuscrites, on y sert une cuisine de partage vibrante : produits de terroir, abats parfaitement cuisinés et assiettes créatives. L'ambiance y est électrique, portée par une sélection de vins naturels qui ne déçoit jamais.",
    insider_tip: "• Venir tôt (avant 19h30) pour s'assurer une place au comptoir, l'endroit est souvent pris d'assaut.\n• Les abats (cœurs de volaille, pieds de cochon) sont ici d'une finesse exemplaire, même pour les non-initiés.\n• Ne manquez pas leur célèbre terrine maison.",
    expert_catchline: "L'âme festive et gourmande du bistrot parisien moderne, entre petites assiettes et vins vivants.",
    specials: {
        cuisine: ["Tapas de saison", "Abats raffinés", "Terrine Maison", "Charcuterie sourcée"],
        drinks: ["Large sélection de vins naturels", "Bières artisanales au fût"],
        must_eat: "Les croquettes de morue à l'aïoli, croustillantes et généreuses.",
        must_drink: "Un vin orange macéré pour accompagner les assiettes de légumes ou les fromages."
    }
};
