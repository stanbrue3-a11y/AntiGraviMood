import { SurgicalPlace } from '../../../type-definition';

export const jip: SurgicalPlace = {
    id: "poi-jip",
    name: "Jip",
    slug: "jip",
    category: "restaurant",
    subcategory: ["korean", "fusion", "franco-coreen", "bistronomie"],
    location: {
        address: "112 Rue de la Roquette",
        arrondissement: 11,
        lat: 48.857088,
        lng: 2.378502,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJoZf9DwBt5kcRsbcd1zLP4L4"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 12:30–14:30, 19:30–22:30 (Fermé Dim-Lun)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://jip.paris/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7, // Estimé Craft/K-Beer
        wine_glass: 0,
        coffee_price: 3.00,
        dish_price: 35, // MANUAL: Menu unique 3 temps
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Jip 2025 Standard (Franco-Korean Tasting)
            {
                category: "Formule Unique (Weekly Rotation)",
                items: [
                    { name: "Menu Jip (3 temps)", price: "35.00€", description: "Entrée, Plat, Dessert (Finition Franco-Coréenne)." },
                    { name: "Option Dessert supplémentaire", price: "8.00€" }
                ]
            },
            {
                category: "Exemples de Saveurs (Chef Esu Lee)",
                items: [
                    { name: "Bibimbap revisité (Saison)", price: "Inclus", description: "Technique française, ingrédients coréens." },
                    { name: "Bouillon de seiche & Kimchi blanc", price: "Inclus" },
                    { name: "Porc Kurobuta snacké au feu", price: "Inclus" },
                    { name: "Sashimi de poisson blanc, Gochujang & prune", price: "Inclus" },
                    { name: "Mandu (raviolis) Champignon & patate douce", price: "Inclus" },
                    { name: "Noodles style Tteokbokki, crème Parmesan", price: "Inclus" },
                    { name: "Champignons Eryngii, piment Jalapeño & béarnaise", price: "Inclus" },
                    { name: "Ragoût de poulpe & sabayon oignon nouveau", price: "Inclus" },
                    { name: "Pâtes Jjajangmyeon au bœuf & épinards", price: "Inclus" },
                    { name: "Ganache Sésame Noir & Miso", price: "Inclus" },
                    { name: "Sorbet Mandarine & perles de Tapioca", price: "Inclus" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVr8U9v6F9iQ3XyhpLsG-PxElZzaSIScNeuJcvI78GS2C9RrjUXXO5o4RHe5_Y_Ew0ZUXHGpfi5b_uFCKy5rPAPFYFzih_HuLhlHhaBqyGUZ_CujiQ-hCno5CJk46DxoHx0VJG2JJmRAjerk&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWl5y2o_fMcR4OeEuGNniiCn664lWNjYqF_VfseYMvJc6tw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.8,
    description: "Le nouveau terrain de jeu du chef Esu Lee (ex-Septime, ex-Cameleon). Jip est une ode à la fusion délicate, où les racines coréennes du chef dansent avec la rigueur des produits français. Une expérience épurée, minimaliste et techniquement bluffante.",
    insider_tip: "Le menu à 35€ est une affaire incroyable pour ce niveau de technicité. Ne manquez pas les accords avec les thés coréens ou les vins naturels sélectionnés avec soin.",
    expert_catchline: "Bib Gourmand 2026. La poésie d'Esu Lee entre Séoul et Paris.",
    specials: {
        cuisine: ["Franco-Korean Fusion", "Seasonal Tasting Menu", "Chef's Counter vibes"],
        drinks: ["Selection de vins au verre", "Thés coréens"],
        must_eat: "Le menu 3 temps signature.",
        must_drink: "Un thé au gingembre maison pour finir."
    }
};
