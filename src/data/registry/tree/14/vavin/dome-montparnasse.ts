import { SurgicalPlace } from "../../../type-definition";

export const dome_montparnasse: SurgicalPlace = {
    id: "poi-dome-montparnasse",
    name: "Le Dôme Montparnasse",
    slug: "le-dome-montparnasse",
    category: "restaurant",
    subcategory: ["fruits-de-mer", "poissons", "gastronomique", "institution", "art-deco", "historique"],
    location: {
        address: "108 Boulevard du Montparnasse, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.842277,
        lng: 2.329868,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJhVtS185x5kcRkE_U2jvOHoc"
    },
    moods: {
        chill: 55,
        festif: 30,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Tuesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Wednesday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Thursday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Friday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Saturday: 12:00 – 3:00 PM, 7:00 – 11:00 PM | Sunday: 12:00 – 3:00 PM, 7:00 – 11:00 PM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "http://www.restaurant-ledome.com/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 90,
        is_free: false,
        dish_price: 58,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'Arrivage de l'Océan",
                items: [
                    { name: "La Célèbre Bouillabaisse du Dôme", price: "72.00€", description: "Servie en deux services, la référence absolue à Paris." },
                    { name: "Sole de Sables Meunière (env. 500g)", price: "64.00€" },
                    { name: "Turbot Grillé, sauce hollandaise", price: "58.00€" },
                    { name: "Bar de Ligne en croûte de sel (pour 2)", price: "135.00€" },
                    { name: "Saint-Jacques à la Provençale", price: "48.00€" },
                    { name: "Friture de Joëls, sauce tartare", price: "18.00€" },
                    { name: "Carpaccio de Langoustines au citron vert", price: "38.00€" },
                    { name: "Soles frites façon 'Dôme'", price: "55.00€" }
                ]
            },
            {
                category: "Entrées d'Exception",
                items: [
                    { name: "Demi-homard froid, sauce mayonnaise", price: "42.00€" },
                    { name: "Salade de Homard tiède aux légumes", price: "48.00€" },
                    { name: "Saumon Fumé par nos soins", price: "28.00€" },
                    { name: "Soupe de Poissons de roche, rouille et croûtons", price: "21.00€" },
                    { name: "Douzaine d'Huîtres Belon N°00", price: "52.00€" },
                    { name: "Tartare de Saumon aux herbes fraîches", price: "26.00€" }
                ]
            },
            {
                category: "Final de Haute Volée",
                items: [
                    { name: "Millefeuille Maison 'Le Dôme'", price: "18.00€", description: "Réputé comme l'un des meilleurs de la capitale." },
                    { name: "Crêpes Suzette au Grand Marnier", price: "22.00€" },
                    { name: "Soufflé chaud au Chocolat noir", price: "19.00€" },
                    { name: "Sorbet Citron arrosé à la Vodka", price: "15.00€" },
                    { name: "Plateau de Fromages affinés", price: "18.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVHmjhpcIMd6ZcGmjafj8Ah0vMUPWbINhuUILF5FDDnhIjZqShMR7yH4c5b3dEY8qD3GM_APXb3y3M7ZTq5PvEqNy8uodKpPztcsP8aXAVvxUxvzwOtf8yIeuhzyP4u1cAfLLE5AbcLbQ0HCVoYegED3gsDV8CJe3LMd7FbKNM7pzfRH7NWwDmgRcmOF7m-WPgwLXkJcBNSq4vKpjnThJolJP8nsak9gn-OScjRMvTVn3hGHebm9arLjmuvmo6XFXhC6wdQpPRSla3uk5vcV7j7Wo3fbdsCaj9YN1ZjADeV5voqI5pkvtIeD93jY1YRm9VjR3Kb_o8ys474zmN8QEz27t1ZBKXHiUkCJ1-JobzIheBMSVan79ieZLj6VUvrOfEcowXxBxqO87MLdolpAPOeQMlwGPpO3lbyF9-f5Vi1eBUDx4iyfnQ6_JpxMDk7&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXQHhTZQgDtH4jrh6jZ4WBLl9w1-pIdxnDl852KEAUqj_18rBs5s0IRkiqKgovw3z1XvA6DKs3xsOVRoGgB5nlxYO8X4LJSNCCCQBzhUERbfVjnHJuuIVIwbJaEUoVSy7DzIGdyIe0auSVhGDZYloAx3QQVpeEXxqun1hiKTKX68-3ZqXpzQAP1lo7kbHKqRJwEC4QdJLysXOLh3PBDIjuXdbyYHOBZmBPtaOucM8-hM7fsF9hQt_9MOaDkBCY41_r2h6SzV9Hj7our9Dsx5ni4McLFQuUrKeSvqYLgAaRZrWzQItCTBESvpjOq57E9u617KtO9Ysdeu_c06GldCKzxLb9dnH2yQICv4UgX-KU3hO16bSDaADevWokSMDxRdVGSM-02ivHwUhi6e84Go53KnP5uzIw5l6NNlq0a5hSf86_96CfaHSxKVXJYWLPH&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.2,
    description: "Le Dôme est à la mer ce que Montparnasse est aux arts : un monument. Premier café de prestige ouvert sur le boulevard en 1898, il est devenu le temple incontesté des produits de l'océan. Sous son dôme Art Déco intact, dans une atmosphère de boiseries sombres et de miroirs patinés, on déguste les arrivages les plus exclusifs de nos côtes. Sa bouillabaisse est légendaire, tout comme son banc d'écailler qui est sans doute l'un des plus raffinés de Paris. C'est ici que Brassens, Sartre et Beauvoir refaisaient le monde, dans ce décor qui n'a rien perdu de sa superbe et de son exigence.",
    insider_tip: "Le Millefeuille du Dôme est une pièce d'orfèvrerie pâtissière, commandez-le dès le début du repas pour être sûr d'en avoir une part. Pour une expérience plus directe, installez-vous au banc de l'écailler.",
    expert_catchline: "Le temple sacré des produits de la mer sous le ciel de Montparnasse.",
    specials: {
        cuisine: ["Poissons & Crustacés", "Gastronomie de la Mer"],
        drinks: ["Chablis & Sancerre d'exception", "Grands Crus Classés"],
        must_eat: "La Bouillabaisse traditionnelle et le Millefeuille.",
        must_drink: "Un Muscadet Sèvre-et-Maine avec les huîtres Belon."
    },
    source: "expert_human"
};
