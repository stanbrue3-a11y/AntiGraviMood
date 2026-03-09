import { SurgicalPlace } from '../../../type-definition';

export const leDauphin: SurgicalPlace = {
    id: "poi-le-dauphin",
    name: "Le Dauphin",
    slug: "le-dauphin",
    category: "restaurant",
    subcategory: ["tapas", "wine-bar", "french-sharing", "design-icon"],
    location: {
        address: "131 Avenue Parmentier",
        arrondissement: 11,
        lat: 48.8710,
        lng: 2.3698,
        nearest_metro: "Goncourt",
        metro_lines: [11],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
    },
    moods: {
        chill: 50,
        festif: 60,
        culturel: 70
    },
    practical: {
        opening_hours_raw: "Mar-Ven: 12:00–14:00, 19:00–23:00; Sam: 19:00–23:00; Fermé Dim-Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/ledauphinparis/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 60,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.50,
        coffee_price: 3.50,
        dish_price: 18.00, // MANUAL: Median for individual tapas plates
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Le Dauphin Paris 2024-2025
            {
                category: "Tapassiettes (Sélection du Chef)",
                items: [
                    { name: "Sashimi de bonite, sauce soja fumée", price: "18.00€" },
                    { name: "Croquettes de jambon ibérique", price: "14.00€" },
                    { name: "Tartare de thon & radis", price: "19.00€" },
                    { name: "Poulpe grillé, purée de pois chiches", price: "22.00€" },
                    { name: "Carpaccio de bœuf au parmesan", price: "17.00€" },
                    { name: "Joue de bœuf braisée au vin rouge", price: "24.00€" },
                    { name: "Asperges vertes grillées, sabayon agrumes", price: "15.00€" },
                    { name: "Tartine de moelle, herbes fraîches", price: "12.00€" }
                ]
            },
            {
                category: "Douceurs",
                items: [
                    { name: "Ganache chocolat & huile d'olive", price: "9.00€" },
                    { name: "Panna cotta aux agrumes", price: "8.50€" },
                    { name: "Glace maison au lait d'amande", price: "7.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Dauphin est le petit frère surdoué du Chateaubriand. Dans un décor spectaculaire tout de marbre vêtu, conçu par l'architecte Rem Koolhaas, on y déguste le concept de 'Tapassiettes'. Ici, la haute cuisine se décline en petites portions à partager, avec une sélection de produits d'une qualité folle. C'est à la fois un bar à vin exigeant et une table de design où le chic parisien rencontre l'excellence culinaire.",
    insider_tip: "Même s'il y a des tables, manger au grand bar central en marbre est l'expérience ultime ici. Laissez le sommelier choisir vos vins natures, leur cave est l'une des plus pointues de Paris.",
    expert_catchline: "Le design rencontre la haute gastronomie en format partage.",
    specials: {
        cuisine: ["Modern French Tapas", "Wine Bar", "High Design"],
        drinks: ["Vins naturels rares", "Sélection pointue du Chateaubriand"],
        must_eat: "Les croquettes de jambon ibérique et les sashimis de saison.",
        must_drink: "Un vin nature blanc de Loire ou du Jura."
    }
};
