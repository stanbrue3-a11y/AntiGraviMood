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
                category_type: "other",
                display_label: "Spécialités du Sud-Ouest Signées Cyril Lalanne",
                items: [
                    { name: "Cassoulet aux Haricots Tarbais (Le Vrai)", price_cents: 2800, description: "Mijoté longuement, la signature incontestée de la maison." },
                    { name: "Cochon Noir de Bigorre et Fèves de Printemps", price_cents: 2600 },
                    { name: "Pot au Feu de Canard et Cochon Noir (pour 2)", price_cents: 5600 },
                    { name: "Magret d'Oie des Landes, Polenta Crémeuse", price_cents: 2450 },
                    { name: "Cuisse de Canard Confite et Piperade Basque", price_cents: 2200 },
                    { name: "Manchon de Canard & Chorizo Confits", price_cents: 2100 },
                    { name: "Piquillos farcis à la morue, Bisque", price_cents: 1800 },
                    { name: "Chipirons Poêlés au Riz", price_cents: 2400 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Premières Saveurs & Fromages",
                items: [
                    { name: "Terrine de Foie Gras de Canard Maison", price_cents: 1950 },
                    { name: "Terrine de Porc Noir de Bigorre", price_cents: 1200 },
                    { name: "Bouillon de Canard aux Truffes Noires", price_cents: 700 },
                    { name: "Asperges des Landes au Citron Confit", price_cents: 1450 },
                    { name: "Fromage de Bethmale servi à la gelée de coing", price_cents: 950 },
                    { name: "Laguiole Affiné", price_cents: 900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs des Pyrénées",
                items: [
                    { name: "Sablé Doré Fraise-Rhubarbe (Crumble)", price_cents: 950 },
                    { name: "Baba à l'Armagnac, Crème Fouettée Vanille", price_cents: 1100 },
                    { name: "Tarte Fondante au Chocolat Noir", price_cents: 900 },
                    { name: "Petit Pot de Crème Chocolat & Noisette", price_cents: 850 },
                    { name: "Glace au Roquefort (Pour audacieux)", price_cents: 900 }
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
