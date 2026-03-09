import { SurgicalPlace } from '../../../type-definition';

export const bouche: SurgicalPlace = {
    id: "poi-bouche",
    name: "Bouche",
    slug: "bouche",
    category: "restaurant",
    subcategory: ["cave à manger", "bistronomique", "petites assiettes", "restaurant"],
    location: {
        address: "85 Rue Jean-Pierre Timbaud",
        arrondissement: 11,
        lat: 48.8682045,
        lng: 2.3783885,
        nearest_metro: "Couronnes",
        metro_lines: [2],
        google_id: "ChIJOVTwFt5t5kcRvIpKiXQKGi8"
    },
    moods: {
        chill: 60,
        festif: 30,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–01:30\nmardi: 19:00–01:30\nmercredi: 19:00–01:30\njeudi: 19:00–01:30\nvendredi: 19:00–01:30\nsamedi: 19:00–01:30\ndimanche: 12:00–15:00, 19:00–01:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.boucheparis.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 15, // MANUAL: Concept d'assiettes à partager. Prix allant de 10€ à 20€. Median ~14-15€. (Ex: fromage 12€, lomo 13€, praires 14€, chou 18€).
        last_updated: "2026-03-06",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category: "Tapassiettes - Les Incontournables",
                items: [
                    { name: "Chou frisé au BBQ, dattes, tahini, cacahuètes", price: "18.00€", description: "Le plat signature, cuit longuement." },
                    { name: "Fromage suisse au nid d'abeille", price: "12.00€" },
                    { name: "Çiğ köfte (version végétalienne), sucrine et herbes", price: "13.00€" },
                    { name: "Mousse de foie de volaille, gelée de poire au Timut", price: "13.00€" },
                    { name: "Chiacciata (pain italien maison)", price: "9.00€" }
                ]
            },
            {
                category: "Tapassiettes - Mer & Terre",
                items: [
                    { name: "Praires au beurre d'ail noir & katsuobushi", price: "14.00€" },
                    { name: "Lomo ibérique (planche)", price: "13.00€" },
                    { name: "Moules en escabèche maison", price: "10.00€" },
                    { name: "Sopressata artisanale", price: "8.00€" },
                    { name: "Gnolottis poireaux & scarmorza, bouillon champignon", price: "14.00€" },
                    { name: "Pommes de terre tapées, paprika fumé, sauce ranch", price: "7.00€" }
                ]
            },
            {
                category: "Gourmandises",
                items: [
                    { name: "Tarte à la clémentine & mousse au chocolat", price: "10.00€" },
                    { name: "Cheesecake basque, coulis de myrtille sauvage", price: "11.00€" },
                    { name: "Ice cream sandwich (sésame & cacao)", price: "10.00€" }
                ]
            },
            {
                category: "Cave & Vins Natures",
                items: [
                    { name: "Verre de vin 'sur le fruit' (blanc/rouge)", price: "9.00€" },
                    { name: "Verre de Pet Nat (effervescent naturel)", price: "11.00€" },
                    { name: "Bouteille nature (sélection du moment)", price: "40.00€", description: "À partir de 40€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV-lcJKc6LQKikkCGWFLu8O15mLOuVG2i1owWIZfLag9XPJUpKffEvE7l64ebGjuecNhTIW8Mv7HhtTktOs2fuAEdR5FXybvM8MDUxa-vclzXFoi8tSf-uENee6VfjUBlzMhmZC1jndyebTqcZJ_cdhN0sX4MnCtv36r7LVuxuq26uYlUBsgyD5OpoTqpdFdkWof8wHoEkrh6RMfrj4uPXmtEzDWNweh2xvyYCDKlnf0S4XAyaM-3B1x8K-U2KX8J2d9QcRRBLMbDS2dp6w5dww5BZx0icKEx2clZHe-zc1iA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUDSOaxUkHclUPk09_cYm5IaBKItHMppEnCeJIMcrJUUsbDkHq78EtDV8--UaKdupv9JOp-UNzu9tI-XgU4u7mMKq0bTHYQ7VhdU0ROL1gb1uzz5jFOo6fJvPMCZRgvfBqmzPuIKo6iCyzm3D6GNimGJkViG5Ct1pKniRuKR6_ozr92QYrdGt0ydhDLiECXMsT8ey5taESPcZKHVKE3UoKCxl37B62zd0ufBYZl0Oc6gmRarngZKrxwwsks2X4rL3XkeYS4TdtN30krEojQSzs3hpgjJFq0VSwoBcyj0-26kA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUgiTSqRtF2QcgcmjAaoWRvm0INOeFILwHShKUdKso8VPTJKDXVsNZN7qhzP9D2SMwIvGNw61hzWimp_uISUffKtjSYLKYTlWG3iAGDyGt0_2s48fZtxnGM9EfrkLnktX1lZ9LDh2icoTZLeSK6LgETjoedCQciQMToRXNfGPzIID8_94EVTd2oKczViV80Jx2D7yB8FwoiTNzQEwjaAtuWbXNn-qIhBQ7WmCiJg6Lev0Es0Y4ZWsB7eCxY2qv6lqLH2WmTdsNNVTECCu0WmHW5LH6McUVvhr_KIC_OO0vm0RIlTWoicHgXIpw5WJR6_XB07ZnQmEHIZz7nCGScQnLz_81kwWrjX6LTNSg-qA3edKerK-X5PtlNLuvqkovBXSqALZHKiXW5M8JIjeW_67FVtL-Xl0Ya3FxctB0QZCBZcC-KgllHN713q6ufww&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "bouche.paris",
    verified: true,
    google_rating: 4.4,
    description: "Une cave à manger électrique et un néobistrot ultra-tendance brut de décoffrage sur Jean-Pierre Timbaud. Le concept de Bouche repose sur le partage : de petites 'tapassiettes' (10 à 20€) pointues et vinaigrées signées par le chef Florent Peineau, envoyées à la chaîne. La cave à vins natures est pointue, l'ambiance vibre fort tous les soirs.",
    insider_tip: "• C'est un pur lieu de soir : ouvert 7j/7 le soir (jusqu'à 1h30), mais seulement le dimanche midi pour le déj.\n• Il faut viser 2,5 à 3 assiettes par personne pour être calé (comptez 40-45€ hors boissons).\n• Le chou frisé grillé au BBQ (18€) est LE plat totem de la maison.\n• Le niveau sonore monte très vite en deuxième partie de soirée, c'est bruyant, vivant, on y va pour ça.",
    expert_catchline: "La cave à manger la plus vivante de Jean-Pierre Timbaud, assiettes de partage ultra-incisives et gros son.",
    specials: {
        cuisine: ["Chou frisé au BBQ", "Praires au beurre d'ail noir", "Mousse de foie de volaille"],
        drinks: ["Vins natures", "Pétillants naturels (Pet Nats)"],
        must_eat: "L'approche est très végétale et acide. Le chou frisé est obligatoire. Accompagnez-le de fromages affinés (suisse au nid d'abeille) et des praires.",
        must_drink: "Laissez-vous faire par la sommellerie : dites ce que vous aimez (tendu, funk, oxydatif) et ils déboucheront la quille parfaite."
    }
};
