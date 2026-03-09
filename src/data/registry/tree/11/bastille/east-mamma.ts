import { SurgicalPlace } from "../../../type-definition";

export const eastMamma: SurgicalPlace = {
    id: "poi-east-mamma",
    name: "East Mamma",
    slug: "east-mamma",
    category: "restaurant",
    subcategory: ["Italien", "Pizzeria", "Trattoria", "Festif"],
    location: {
        address: "133 Rue du Faubourg Saint-Antoine, 75011 Paris",
        arrondissement: 11,
        lat: 48.8502,
        lng: 2.3768,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJOX-_x3ZshkcR_9Xl3Qk_V_Q"
    },
    moods: {
        chill: 40,
        festif: 90,
        culturel: 10
    },
    pricing: {
        avg_budget: 25,
        index_price: 16.00,
        dish_price: 16.00, // Cacio e Pepe
        last_updated: "2026-03-08",
        menu_items: [
            {
                category: "Antipasti & Buoni Prodotti",
                items: [
                    { name: "Burrata al Pesto (250g)", price: "14.00€", description: "Le classique Big Mamma, crémeuse à souhait." },
                    { name: "Mezze Italiani & Flatbread", price: "16.00€", description: "Assortiment à partager : olives, légumes grillés, dips." },
                    { name: "Mortadella e parmigiano", price: "7.00€", description: "Fines tranches de mortadelle de Bologne." },
                    { name: "Prosciutto di Parma DOP 24 mois", price: "9.00€" },
                    { name: "Arancini à la Carbonara", price: "9.50€", description: "Cœur coulant, guanciale croustillant." },
                    { name: "Arancini al Tartufo", price: "10.50€", description: "La version luxe à la truffe noire." },
                    { name: "Focaccia barese", price: "8.50€", description: "Tomates cerises, origan et huile d'olive." },
                    { name: "Porro Arrosto", price: "8.50€", description: "Poireaux rôtis, sauce stracciatella." },
                    { name: "Carpaccino di Manzo", price: "12.00€", description: "Fines tranches de bœuf, parmesan, roquette." },
                    { name: "Bresaola e Grissini", price: "10.00€" },
                    { name: "Speck del Trentino", price: "9.00€" },
                    { name: "Focaccia Maison Nature", price: "3.50€" }
                ]
            },
            {
                category: "Primi Piatti (Pasta Fresca)",
                items: [
                    { name: "Cacio e Pepe", price: "16.00€", description: "Servies directement dans la meule de pecorino." },
                    { name: "Truffle Pasta (Signature)", price: "18.50€", description: "Crème de truffe noire, copeaux frais." },
                    { name: "Busiate all'Arrabbiata", price: "13.50€", description: "Sauce tomate épicée, stracciatella." },
                    { name: "Gnocchi alla Sorrentina", price: "15.00€", description: "Tomate, mozzarella filante, basilic." },
                    { name: "Ravioli del Plin", price: "17.50€", description: "Farce bœuf et porc, beurre et sauge." },
                    { name: "Spaghetti all'Amatriciana", price: "15.50€", description: "Guanciale, tomate, pecorino." },
                    { name: "Lasagna al Forno", price: "16.50€", description: "La recette de la Mamma." }
                ]
            },
            {
                category: "Le Pizza Napoletana",
                items: [
                    { name: "Mammargherita", price: "12.00€", description: "Fior di latte, tomate San Marzano, basilic." },
                    { name: "Regina Instagram", price: "14.50€", description: "Jambon aux herbes, champignons, mozza." },
                    { name: "Notorious B.I.Cheese", price: "14.00€", description: "Gorgonzola, parmigiano, mozza, poivre." },
                    { name: "Moment of Truffe", price: "18.00€", description: "La pizza royale à la truffe." },
                    { name: "Diavola", price: "15.50€", description: "Salami piquant, olives, piments." },
                    { name: "Double Cheese & Pepperoni", price: "16.00€" },
                    { name: "Marinara (V)", price: "9.50€", description: "Tomate, ail, origan, sans mozza." },
                    { name: "Mariachi", price: "15.00€", description: "Nduja, burrata, miel pimenté." },
                    { name: "Veggie Forever", price: "14.00€", description: "Légumes de saison rôtis." },
                    { name: "Pizza du Moment", price: "17.00€" }
                ]
            },
            {
                category: "Dolci",
                items: [
                    { name: "Il Tigramisù", price: "7.00€", description: "Servi à la grosse cuillère, mythique." },
                    { name: "Mousse Sweet Mousse", price: "7.00€" },
                    { name: "Panna Cotta aux fruits rouges", price: "6.50€" },
                    { name: "Gelato Artigianale (2 boules)", price: "6.00€" },
                    { name: "Chocolate-Praline Cookie", price: "4.50€" }
                ]
            },
            {
                category: "Drinks & Cocktails",
                items: [
                    { name: "Britney Spritz", price: "10.00€" },
                    { name: "Negronight Call", price: "10.00€" },
                    { name: "Gin Routine", price: "10.00€" },
                    { name: "Mojito di Pedro", price: "10.00€" },
                    { name: "Sex on the Couch", price: "10.00€" },
                    { name: "Big Mamma Mule", price: "11.00€" },
                    { name: "San Pellegrino (50cl)", price: "2.50€" },
                    { name: "Acqua Panna (50cl)", price: "2.50€" },
                    { name: "Coca Cola (33cl)", price: "3.50€" },
                    { name: "Vino Rosso della Casa (Verre)", price: "7.00€" }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa", // Politique Big Mamma historique
        accessibility: true,
        wifi: false,
        terrace: false,
        vegan_friendly: true,
        opening_hours_raw: "Lundi-Vendredi: 12:00–14:30, 19:00–22:45\nSamedi-Dimanche: 12:00–15:30, 19:00–23:00",
        main_action: {
            type: "site",
            url: "https://www.bigmammagroup.com/fr/trattorias/east-mamma",
            label: "VOIR LE LIEU"
        }
    },
    description: "L'établissement qui a lancé la révolution Big Mamma à Paris. East Mamma est une trattoria vibrante où l'on parle fort, on mange bien et on boit du bon vin italien. Tout est sourcé directement auprès des petits producteurs de la botte. Entre le four à bois rutilant et les banquettes conviviales, l'ambiance est électrique et généreuse.",
    expert_catchline: "Le temple de la pizza napolitaine et de la burrata géante dans une ambiance italienne survoltée.",
    insider_tip: "• Attention : pas de réservations ! Arrivez 15-20 min avant l'ouverture de 19h pour garantir votre place au premier service.\n• Le Tigramisù est servi à la louche, ne prévoyez pas de dessert léger.\n• Les pâtes à la truffe sont un incontournable du groupe, très généreuses en saveur.\n• Si c'est trop plein, testez leur petite terrasse ou prenez une pizza à emporter.",
    specials: {
        cuisine: ["Italien", "Pizza Napolitaine", "Pâtes Truffe"],
        drinks: ["Cocktails Spritz", "Vins Italiens", "Limoncello Maison"],
        must_eat: "La Mammargherita et le Tigramisù."
    },
    images: {
        hero: "https://www.bigmammagroup.com/wp-content/uploads/2015/04/East-Mamma-Interior.jpg",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.6
};
