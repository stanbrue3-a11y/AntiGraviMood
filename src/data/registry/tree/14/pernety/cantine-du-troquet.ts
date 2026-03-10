import { SurgicalPlace } from "../../../type-definition";

export const cantineTroquet: SurgicalPlace = {
    id: "poi-cantine-troquet-pernety-75014",
    name: "La Cantine du Troquet Pernety",
    slug: "la-cantine-du-troquet-pernety-paris-14",
    category: "restaurant",
    subcategory: ["bistrot", "sud-ouest", "vibrant", "institution", "terroir"],
    location: {
        address: "101 Rue de l'Ouest, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8341222,
        lng: 2.3159177,
        nearest_metro: "Pernety",
        metro_lines: ["13"],
        google_id: "ChIJzYpmNUpw5kcR9shuTwHBx-4"
    },
    moods: {
        chill: 60,
        festif: 70,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Wednesday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Thursday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Friday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Saturday: 12:00 – 2:30 PM, 7:00 – 10:45 PM | Sunday: Closed",
        reservation_policy: "sans_resa", 
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.lacantinedutroquet.com/#pernety",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 24, // MÉDIAN des plats à la carte (Couteau/Cochon/Thon/Boudin/Entrecote/Tartare/Merlu/Veau)        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Plats du Sud-Ouest",
                items: [
                    { name: "Couteaux à la Plancha, Ail et Persil", price: "18.00€" },
                    { name: "Cochon de Lait Croustillant de chez Ospital", price: "28.00€" },
                    { name: "Pavé de Thon Snacké, Pimientos de Padron", price: "27.00€" },
                    { name: "Boudin Noir de Christian Parra, Purée", price: "24.00€" },
                    { name: "Entrecôte Maturée, Frites Maison", price: "34.00€" },
                    { name: "Tartare de Boeuf au Piment d'Espelette", price: "25.00€" },
                    { name: "Épaule d'Agneau Confite (pour 2)", price: "72.00€" },
                    { name: "Merlu de Ligne à l'Espagnole", price: "26.00€" },
                    { name: "Poitrine de Veau rôtie au Romarin", price: "29.00€" }
                ]
            },
            {
                category: "Entrées Canailles",
                items: [
                    { name: "Oeuf Cocotte au Jambon Ibaïama", price: "14.00€" },
                    { name: "Terrine de Campagne Maison", price: "11.00€" },
                    { name: "Os à Moelle à la Fleur de Sel", price: "13.00€" },
                    { name: "Salade de Lentilles et Gésiers", price: "12.50€" },
                    { name: "Croquettes de Cochon Maison", price: "15.00€" },
                    { name: "Encornets sautés au Chorizo", price: "17.00€" },
                    { name: "Asperges des Landes (en saison)", price: "16.00€" }
                ]
            },
            {
                category: "Plats de Fromages & Douceurs",
                items: [
                    { name: "Ossau-Iraty et sa Confiture de Cerises noires", price: "12.00€" },
                    { name: "Gâteau Basque à la Crème de Christian", price: "10.00€" },
                    { name: "Riz au Lait Onctueux au Caramel", price: "9.50€" },
                    { name: "Mousse au Chocolat pour les Gourmands", price: "11.00€" },
                    { name: "Baba au Rhum Artisanal", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU3JnKqpAykNVTC0Mow6V8w1wBW7dQvH-gOXkG9jLP_Xd0LdR1Ar4NPRSnYGpDSmN751HvCXPJtUuIS0GyvLBSh6cAkFKsJNzA6ina3kWdFlRM5vlLTYirG1xbeFkNLVMMXUDS9-Baol-ssqVz0r0TL4T9NGt6Ch1evtufXhiix9x4ys0fauDYOyCKPPROoB6K38saU9eHTq7HgwaZOyWLleKbLg1eIJllyFXZJPuFwmGHw5iZ609qiPMYlp-FufXH8FHT2-1uLTyGD-wYRaDoCp-3y1DqevCD9NYxBpyO-1PF6b4JR5Tw77_DRMq1AzzZYtTD2LBjkOhYAXAifBQMw7H0XLtjryePfLvBg32YAe98-s1TWyx2FWOll7Stj2jW29xHMXW5WVQoaf5wMJKc2aX7C5FRHNMvHjywZc-tMqVr_UOQJgTZ9MGfG6A&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWoKirK8aPmb014PHq2R_4wjoyFKm4JHnGJktbQyeYSDBap-vg1XoXc5te8vsBDfDm-8GCBVFcNapJ4T-6-RgZ9o3gY5e5f2H5zXoMAHN3b8utj-s8jO7KDufSQG05PjLO84Yg8ta0PeNtCAIBr06zKLD2RaSehZUvzPjn0mVVttDPZz4_VCrncaXf0QPNFHSVYoHMH05bCh-fH9eeWgq1PNtVdcoo1dETiNUoLcHuBr*S4jDPbJ_aDhhtcI4zS50R-mLkI_CLC7mhmC7eBvn1DJAw_N_QU7GeJ2Tz_evU4IOrFHbd7tDGi3vDDf48W1Ysw3L_kck0IIANE4QTbZvqNHK_how4RrI1plQBkyeCLuqqm27R4IyQrTB6re2rYBdJgMNt2eSd6x3jCluXp7NcJ1DMCjuedU0Mv3ECPjFsGyI1syI4AuO3B8DnX644T&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "La Cantine du Troquet Pernety est le navire amiral de Christian Etchebest dans le 14ème. C'est un lieu vibrant, bruyant, vivant, où l'on cultive l'art du bien-manger sans manières. La cuisine est celle du Sud-Ouest : franche, généreuse et techniquement impeccable. Les produits sont sourcés chez les meilleurs artisans (Ospital, Parra). On s'y installe sur de grandes tablées dans une ambiance de bistrot moderne très dynamique. C'est l'endroit rêvé pour une soirée conviviale où le partage et la bonne humeur sont les maîtres-mots.",
    insider_tip: "Ici, on ne réserve pas, donc venez tôt ou profitez de l'ambiance au bar en attendant votre table. Les couteaux à la plancha sont absolument divins, une commande obligatoire dès votre arrivée.",
    expert_catchline: "La bistronomie vibrante aux accents du Sud-Ouest.",
    specials: {
        cuisine: ["Sud-Ouest", "Bistronomie Canailles"],
        drinks: ["Pauilhac", "Vins de Pays Basque", "Sélection d'Armagnacs"],
        must_eat: "Le Cochon de Lait croustillant.",
        must_drink: "Un vin rouge du Pays Basque."
    },
    source: "expert_human"
};
