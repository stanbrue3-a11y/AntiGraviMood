import { SurgicalPlace } from "../../../type-definition";

export const leDuc: SurgicalPlace = {
    id: "poi-le-duc-75014",
    name: "Le Duc",
    slug: "le-duc-paris-14",
    category: "restaurant",
    subcategory: ["poissons", "seafood", "institution", "historique", "gastronomique"],
    location: {
        address: "243 Boulevard Raspail, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8387481,
        lng: 2.3312101,
        nearest_metro: "Raspail",
        metro_lines: ["4", "6"],
        google_id: "ChIJqXbHfMhx5kcRT_MHosKnfWw"
    },
    moods: {
        chill: 50,
        festif: 30,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Tuesday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Wednesday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Thursday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Friday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Saturday: 12:00 – 2:00 PM, 7:30 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.restaurantleduc.com/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 110,
        is_free: false,
        dish_price: 52, // MÉDIAN des plats de la mer (Tartare/Bar/Dorade/Sole/Pates)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'Art des Poissons",
                items: [
                    { name: "Carpaccio de Bar au Citron Vert et Huile d'Olive", price: "48.00€" },
                    { name: "Tartare de Bar 'Le Duc' (Signé Minchelli)", price: "52.00€" },
                    { name: "Sashimi de Thon Rouge d'Exception", price: "55.00€" },
                    { name: "Dorade Royale Crue à la Fleur de Sel", price: "46.00€" },
                    { name: "Sole Meunière Façon Le Duc (entière)", price: "85.00€" },
                    { name: "Turbot Grillé aux Herbes (pour 2)", price: "180.00€" },
                    { name: "Pâtes au Homard de Bretagne", price: "75.00€" }
                ]
            },
            {
                category: "Entrées de la Mer",
                items: [
                    { name: "Huîtres Belon n°00 (les 6)", price: "36.00€" },
                    { name: "Palourdes Farcies à la façon du chef", price: "28.00€" },
                    { name: "Soupe de Poissons de Roche", price: "24.00€" },
                    { name: "Salade de Homard Tiède", price: "62.00€" },
                    { name: "Friture de Petits Poissons", price: "22.00€" }
                ]
            },
            {
                category: "Douceurs Classiques",
                items: [
                    { name: "Soufflé au Grand Marnier (Signé)", price: "22.00€" },
                    { name: "Sorbet Citron Arrosé de Vodka", price: "18.00€" },
                    { name: "Mille-Feuille à la Vanille de Tahiti", price: "20.00€" },
                    { name: "Ardoise de Fromages de chez Cantin", price: "24.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXyLDLt19f2ip5XGbez8Pm9IeI6mevJi4j6hUdHN7jC0q1BFyJpfGotjcJVPxZsK8AXNWfjv4ZOg0TCKmLPY2J6J3KbhiBZMXA4HLpB2_g4BGqV3PipqyXZpUBMDIlwxSEXTONsZwCAeRcunDlfvQBn0wiHCfuHDpXf4i9PBhjXQyIzRbiBnbeTW4iUEPSw-6wqMgyiJa74VwslGHDmNU0QVQdBnJyG_qWA0DYIiJ3R39NYNd4UtsaEYeN904ZUhx00hP59SZ5I0pl4mFo8d4eYPn52tKnJGW7UFetJcZ5JiZ5WwiGLFhhINhGMCUMYA2c4z8B4ropctqd-7P_rAGJPLsik9DHV3VlNLd4U8pY61R4M7GFtVeJ_46zWseMC5wBr6X4vslbcYidVEpsTHD1-LuvqU8fofmH586_uv7aoMQVtSYESIKj6znYn5QhA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV27zOQoVR6AAYVOygx0LFmkgkImii5q54Wmmr3Jr9q01RpuD2sdzAAAk4LkjRrOiv2eHWEF6XduXuWbr5a1Yd7DR7ReAJ-lrtMJjkmQMwtvVVGSJblHCV16lhExslERuj1ATZ9LnnwQZ5HKnbwdS5kyxVqz1lV72ZL9VEpOFFKxZEqknYua-Ty8rMRFYkZI8DMLW-PYDU2sC7VRBwZtm92pc1ygQbTO8gcqstTrb7Aw6TqcvCU0eBFmc9GPScaRWZujOBkcfO6RBz-If4pBi1rRCRt8cQfDYZjVoiY-b2HRQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Le Duc est plus qu'un restaurant, c'est le lieu où a été inventé l'art de manger le poisson cru à Paris dans les années 60, bien avant la mode des sushis. Fondé par Jean Minchelli, ce temple de la mer conserve un décor intramontable de yacht luxueux des années 70, avec ses boiseries vernies et ses hublots. Ici, le produit est sacré : le poisson n'est jamais dénaturé, simplement sublimé par une découpe parfaite ou une cuisson à la seconde près. C'est l'adresse favorite du Paris littéraire et artistique qui cherche l'épure et l'exceptionnel.",
    insider_tip: "Commencez impérativement par le carpaccio de bar, le plat qui a fait la légende du lieu. La carte des vins propose des Chablis et des Meursaults de collection qui sont les parfaits compagnons de ces assiettes iodées. Ambiance feutrée et très select.",
    expert_catchline: "L'inventeur mythique du poisson cru à Paris.",
    specials: {
        cuisine: ["Gastronomie Marine", "Poissons Crus"],
        drinks: ["Grands Vins Blancs de Bourgogne", "Sancerres d'Exception"],
        must_eat: "Le Carpaccio de Bar et la Sole Meunière.",
        must_drink: "Un Chablis Grand Cru."
    },
    source: "expert_human"
};
