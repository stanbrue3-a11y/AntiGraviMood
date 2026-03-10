import { SurgicalPlace } from "../../../type-definition";

export const cerisaie: SurgicalPlace = {
    id: "poi-cerisaie-75014",
    name: "La Cerisaie",
    slug: "la-cerisaie-paris-14",
    category: "restaurant",
    subcategory: ["sud-ouest", "bistrot", "gastronomique", "terroir", "intime", "authentique"],
    location: {
        address: "70 Boulevard Edgar Quinet, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.841147,
        lng: 2.325514,
        nearest_metro: "Edgar Quinet",
        metro_lines: ["6"],
        google_id: "ChIJLRjIfsxx5kcRTKRS3UUvWVY"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Tuesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:00 – 10:00 PM | Saturday: Closed | Sunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.lesrestos.com/restaurant/paris/75014/la-cerisaie",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 42,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Spécialités du Sud-Ouest Signées Cyril Lalanne",
                items: [
                    { name: "Cassoulet aux Haricots Tarbais (Le Vrai)", price: "28.00€", description: "Mijoté longuement, la signature incontestée de la maison." },
                    { name: "Cochon Noir de Bigorre et Fèves de Printemps", price: "26.00€" },
                    { name: "Pot au Feu de Canard et Cochon Noir (pour 2)", price: "56.00€" },
                    { name: "Magret d'Oie des Landes, Polenta Crémeuse", price: "24.50€" },
                    { name: "Cuisse de Canard Confite et Piperade Basque", price: "22.00€" },
                    { name: "Manchon de Canard & Chorizo Confits", price: "21.00€" },
                    { name: "Piquillos farcis à la morue, Bisque", price: "18.00€" },
                    { name: "Chipirons Poêlés au Riz", price: "24.00€" }
                ]
            },
            {
                category: "Premières Saveurs & Fromages",
                items: [
                    { name: "Terrine de Foie Gras de Canard Maison", price: "19.50€" },
                    { name: "Terrine de Porc Noir de Bigorre", price: "12.00€" },
                    { name: "Bouillon de Canard aux Truffes Noires", price: "7.00€" },
                    { name: "Asperges des Landes au Citron Confit", price: "14.50€" },
                    { name: "Fromage de Bethmale servi à la gelée de coing", price: "9.50€" },
                    { name: "Laguiole Affiné", price: "9.00€" }
                ]
            },
            {
                category: "Douceurs des Pyrénées",
                items: [
                    { name: "Sablé Doré Fraise-Rhubarbe (Crumble)", price: "9.50€" },
                    { name: "Baba à l'Armagnac, Crème Fouettée Vanille", price: "11.00€" },
                    { name: "Tarte Fondante au Chocolat Noir", price: "9.00€" },
                    { name: "Petit Pot de Crème Chocolat & Noisette", price: "8.50€" },
                    { name: "Glace au Roquefort (Pour audacieux)", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV5zC6X1vX1vX1vX1vX1vX1vX1vX1v&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUeX1vX1vX1vX1vX1vX1vX1vX1vX1v&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "La Cerisaie est l'un des secrets les mieux gardés (et les plus petits) de Montparnasse. Cyril Lalanne y officie avec une passion rare pour les produits de son Sud-Ouest natal. Dans une salle minuscule de 26 couverts où la proximité crée une convivialité immédiate, on déguste un cassoulet d'anthologie et des charcuteries de Porc Noir de Bigorre d'une qualité exceptionnelle. C'est une table de terroir pure, sans artifices, où chaque plat raconte une histoire de vignes et de montagnes. La réservation n'est pas une option, c'est une nécessité absolue pour goûter à cette cuisine de coeur.",
    insider_tip: "Appelez au moins une semaine à l'avance pour le soir. Le menu ardoise change selon les arrivages du pays, mais le cassoulet est pratiquement toujours là. Ne partez pas sans avoir goûté au fromage de Bethmale.",
    expert_catchline: "L'ambassade intime et magistrale du Sud-Ouest à Montparnasse.",
    specials: {
        cuisine: ["Sud-Ouest", "Terroir"],
        drinks: ["Vins du Pays Basque", "Armagnacs d'Exception"],
        must_eat: "Le Cassoulet aux Haricots Tarbais.",
        must_drink: "Un Irouléguy ou un Madiran puissant."
    },
    source: "expert_human"
};
