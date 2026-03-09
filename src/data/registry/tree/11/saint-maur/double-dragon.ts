import { SurgicalPlace } from '../../../type-definition';

export const doubleDragon: SurgicalPlace = {
    id: "poi-double-dragon",
    name: "Double Dragon",
    slug: "double-dragon",
    category: "restaurant",
    subcategory: ["asian-fusion", "filipino", "chinese", "street-food", "bib-gourmand"],
    location: {
        address: "52 Rue Saint-Maur",
        arrondissement: 11,
        lat: 48.8614682,
        lng: 2.3804245,
        nearest_metro: "Saint-Maur",
        metro_lines: [3],
        google_id: "ChIJ_0I5iV1t5kcR_0I5iV1t5kc"
    },
    moods: {
        chill: 60,
        festif: 90,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 19:30–22:30; Mer-Sam: 12:00–14:30; Fermé Lun-Dim",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.doubledragonparis.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 7.50,
        coffee_price: 3.50,
        dish_price: 15.00, // MANUAL: Median of Platitos & KFC
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Double Dragon 2024-2025 (Bib Gourmand 2025)
            {
                category: "Pica Pica (Entrées)",
                items: [
                    { name: "Bao au comté & XO", price: "9.00€", description: "Mayonnaise XO, le hit maison." },
                    { name: "Gyeranjjim (Oeufs vapeur)", price: "5.00€" },
                    { name: "Salade de concombres pimentés", price: "6.50€" }
                ]
            },
            {
                category: "Platitos (Sharing)",
                items: [
                    { name: "KFC: Korean Fried Chicken", price: "15.00€", description: "Poulet frit, sauce pimentée, sésame." },
                    { name: "Lechon Kawali", price: "20.00€", description: "Poitrine de porc croustillante laquée au miel." },
                    { name: "Kinilaw de thon blanc", price: "14.50€", description: "Ceviche version Philippines." },
                    { name: "Tofu farci au comté", price: "13.00€" }
                ]
            },
            {
                category: "Riz & Sides",
                items: [
                    { name: "Riz blanc parfumé", price: "3.50€" },
                    { name: "Riz sauté Double Dragon", price: "9.50€" },
                    { name: "Légumes du moment au wok", price: "11.00€" }
                ]
            },
            {
                category: "Desserts",
                items: [
                    { name: "Brownie Cajou & Chantilly Kawa", price: "10.00€" },
                    { name: "Tapioca Coco & Fruits Frais", price: "8.50€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVkVI1UFWmaOB8T077AbpJ0ZbOONEzYBY0AiJIr-oW8p8JmX4FEErHn88mPNuz1ChGdmkjXNcuqmTqkxKj4WkC9GsO3VSslykvaRvKoQailzHCogbKErRz844RvKb45NM_EVtxspF3a3K8Iifa4cBtDK-_ppkjnILDGhopJzMTVSsBXG43LVdFECEAhAbSFM1PMfeuCoQzPtJ1NKs2KDvZ936T_o_RGiAyRQ-QIAbFxyWUZ3M31E73mbvYtOYx3C_GikBVpGcTUovI-LmnSDcpwQzC7N5M5xNQ86bTEIH5Bb6ZmN4cE4CNWIFrBMENuERnAy8lktnWA_zBsynxwEikPW5zBeDtktEwVMHXAbY1HoV5NJ7ulzeesmmthN-wXO4wdTob7xJvujjHZv2_t7eOdR8XaeqcBoq2_i_rgtHosE1Go&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Double Dragon est la petite soeur sauvage du Servan. Les soeurs Levha y proposent une cuisine fusion asiatique (Philippines, Chine, Thaïlande) qui n'a pas peur du piment ni du gras. Décoré d'un Bib Gourmand Michelin, le lieu ne désemplit pas. C'est bruyant, c'est piquant, c'est convivial et terriblement addictif. Une de ces adresses qui définit le nouvel esprit culinaire de l'Est parisien.",
    insider_tip: "Pas de réservation ici. Arrivez à 19h15 pour être dans la première fournée. Le Bao au comté est non-négociable, prenez-en un par personne pour éviter les disputes.",
    expert_catchline: "Explosion de saveurs asiat' et ambiance électrique rue Saint-Maur.",
    specials: {
        cuisine: ["Asian Fusion", "Filipino influences", "Spicy shared plates"],
        drinks: ["Vins naturels", "Bières artisanales"],
        must_eat: "Le KFC (Korean Fried Chicken) et le Bao au comté.",
        must_drink: "Un vin blanc minéral pour éteindre le feu du piment."
    }
};
