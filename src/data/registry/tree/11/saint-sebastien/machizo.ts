import { SurgicalPlace } from '../../../type-definition';

export const machizo: SurgicalPlace = {
    id: "poi-machizo",
    name: "Machizo",
    slug: "machizo",
    category: "restaurant",
    subcategory: ["japonais", "francais", "bistronomique", "gastronomique", "restaurant"],
    location: {
        address: "35 Rue Saint-Sébastien",
        arrondissement: 11,
        lat: 48.8601639,
        lng: 2.3708059,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJAeeF7H5t5kcREGhR5f1HdtI"
    },
    moods: {
        chill: 80,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 7:30–9:30 PM\nWednesday: 7:30–9:30 PM\nThursday: 7:30–9:30 PM\nFriday: 7:30–9:30 PM\nSaturday: 7:30–9:30 PM\nSunday: 7:30–9:30 PM",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.machizo.net/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 90,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.00,
        dish_price: 68,
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Format Carte Blanche / Omakase
            {
                category: "Menus Dégustation",
                items: [
                    { name: "Menu Dégustation 4 Temps", price: "68.00€", description: "2 Entrées, 1 Plat, 1 Dessert" },
                    { name: "Menu Dégustation 5 Temps", price: "75.00€", description: "Carte blanche au chef Taka" },
                    { name: "Menu Dégustation 7 Temps", price: "85.00€", description: "L'expérience complète Machizo" },
                    { name: "Accord Mets & Vins", price: "45.00€", description: "4 verres sélectionnés pour le menu 4 ou 5 temps" },
                    { name: "Accord Mets & Vins Premium", price: "60.00€", description: "5 verres sélectionnés pour le menu 7 temps" }
                ]
            },
            {
                category: "Exemples de Créations du Moment (Omakase)",
                items: [
                    { name: "Flan de foie gras", price: "24.00€", description: "Prix Lebey 2024 du meilleur foie gras : Flan onctueux, bouillon dashi et champignons" },
                    { name: "Saint-Jacques snackées", price: "22.00€", description: "Purée de topinambour, yuzu kosho et émulsion au beurre noisette" },
                    { name: "Sashimi de sériole", price: "19.00€", description: "Sauce ponzu maison, radis daikon et huile de sésame grillé" },
                    { name: "Pigeon de Racan rôti", price: "38.00€", description: "Cuisson sur le coffre, jus corsé au miso rouge et légumes racines" },
                    { name: "Lieu jaune de ligne", price: "34.00€", description: "Asperges blanches, émulsion au saké et algues nori" },
                    { name: "Tartelette au matcha", price: "12.00€", description: "Pâte sablée, ganache matcha et glace au sésame noir" },
                    { name: "Mousse au chocolat guanaja", price: "11.00€", description: "Tuile croustillante et confit de yuzu" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXFi0LS7nTfDB7uExTNJ6vIr3xxSDsyyKwysTQzrDYDjfCWkzlbT6mK5F6-ZTH_H7cY_-XVyJpY3dzmuQ07qgGZxRIz8qFU64ogZxbZaHFEJJr1PTEDrmrrsXLIQ0r9iJ7jMQ7miP6puXjoLlXD8I8MRyuuQv7xPYhphPsKSLUdgJaT21WuttYcNnPBdMcOd_r1MafAvUukOxp7CSQ1XvkGewcVLibHOZqkK7uTbPprTRBXJlsU3gpmlbWqMvUMOEnMVuUMmh0AKoefzuglA44Q8yxaoln8banS2pY8if8ZT6T8TylK5F6fiiYcK6RnXJzEJWphWq0DYpy9fGnwOXHLJ4azpTJlgkALEXatCTho5SiePzwQ-yzoFZa3wPJuXq8C8MUmzZOqTV_5tzrtf8gmM0vbshxLvgHUMp5zp3k&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW57ZChfz_PTcqwf38-2t6mSf6OLUnvy9_htbaAj9aBOsHlZVG4fq_PFMW7GJhellQPz9kAe8XB5RCWYXosqXyK0d8JQA20MPUaZBlyv5VIgl0ixON9Ch_ViQQvTvp_etyskJSlnAMWJ7FgINAORa9s2vJ3T7oi66VyrRmJUrIhnw2RFsndxPh-tFGbQJKITpYRtYzrSkH7RhXHvmi8ckAk59s6oIodOks6RfnUksVzBn7hDPccpzz7QLVRwr-x-ZJDZAkgDjypxyC92y99ZuN9bFp_iG-hnIxiNJfX4v4AdA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVM6f26NOyT-TWkjPof92aRS-KYIGIdSfKl4Asp54yFPknpgBT5smjm8VekQfJXGVcnX-WL3ZA9b_D-tpGC3Zv3wJ7eDyPtlcbRdbFWgUC4VC5tLYXryRKUvvKXL5XawkE7mkOXfMf1bb79Cp_54xiaE4Y7_H8YopJFaxxaW2ezs_ZoHz96-Er8bPiWwlpfcEBrSfKxPJ-FdEAN1TNWiU_4bRh9Q2CECSiweaNsJZS-N8cO3_KyJP-ISIw9Vn3BabEgHaIIFYSi09F2-Ydx-3TuyDbcuafgQxzTnZcD3UKQVp3lNDJihprqhChOija_Pr5so_hjYn-ExBDpL1pAVTiCOZIASwm2xQmTYM5eYoZ0U2Sbb-PAxafoO6gO9QvxevZJM5UIz3LYxDfsEGa1PTCCgNKb5ZFN7MyfaFbbjnF5B9D1iqspdA6Zw6JklA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.9,
    description: "Un joyau d'intimité caché dans le 11ème arrondissement (26 couverts seulement). Le chef Taka fusionne l'hyper-précision technique japonaise avec le répertoire gastronomique français. Une cuisine instinctive et évolutive servie sous forme de menus dégustation à l'aveugle, avec un service chaleureux assuré par son épouse Kornelia en salle.",
    insider_tip: "• Pensez à réserver très en avance (salle minuscule ouverte que le soir).\n• Le Flan de foie gras au dashi a remporté le prestigieux Prix Lebey 2024, c'est le plat signature absolu.\n• Optez pour le menu 7 temps, l'évolution des saveurs est pensée comme un véritable voyage.",
    expert_catchline: "Haute gastronomie franco-japonaise en carte blanche dans un écrin minimaliste de 26 places.",
    specials: {
        cuisine: ["Flan de foie gras (Prix Lebey)", "Cuissons à la braise", "Omakase", "Pigeon de Racan"],
        drinks: ["Accords Mets & Vins ultra pointus", "Sélection de Sakés", "Thés verts d'exception"],
        must_eat: "Le flan de foie gras infusé au dashi. Une texture irréelle qui a secoué la critique gastronomique.",
        must_drink: "Laissez-vous guider sur les accords métis qui croisent vins natures français et sakés de petits producteurs."
    }
};
