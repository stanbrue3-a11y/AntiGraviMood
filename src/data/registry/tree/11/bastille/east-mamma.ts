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
                category_type: "other",
                display_label: "Antipasti & Buoni Prodotti",
                items: [
                    { name: "Burrata al Pesto (250g)", price_cents: 1400, description: "Le classique Big Mamma, crémeuse à souhait." },
                    { name: "Mezze Italiani & Flatbread", price_cents: 1600, description: "Assortiment à partager : olives, légumes grillés, dips." },
                    { name: "Mortadella e parmigiano", price_cents: 700, description: "Fines tranches de mortadelle de Bologne." },
                    { name: "Prosciutto di Parma DOP 24 mois", price_cents: 900 },
                    { name: "Arancini à la Carbonara", price_cents: 950, description: "Cœur coulant, guanciale croustillant." },
                    { name: "Arancini al Tartufo", price_cents: 1050, description: "La version luxe à la truffe noire." },
                    { name: "Focaccia barese", price_cents: 850, description: "Tomates cerises, origan et huile d'olive." },
                    { name: "Porro Arrosto", price_cents: 850, description: "Poireaux rôtis, sauce stracciatella." },
                    { name: "Carpaccino di Manzo", price_cents: 1200, description: "Fines tranches de bœuf, parmesan, roquette." },
                    { name: "Bresaola e Grissini", price_cents: 1000 },
                    { name: "Speck del Trentino", price_cents: 900 },
                    { name: "Focaccia Maison Nature", price_cents: 350 }
                ]
            },
            {
                category_type: "main",
                display_label: "Primi Piatti (Pasta Fresca)",
                items: [
                    { name: "Cacio e Pepe", price_cents: 1600, description: "Servies directement dans la meule de pecorino." },
                    { name: "Truffle Pasta (Signature)", price_cents: 1850, description: "Crème de truffe noire, copeaux frais." },
                    { name: "Busiate all'Arrabbiata", price_cents: 1350, description: "Sauce tomate épicée, stracciatella." },
                    { name: "Gnocchi alla Sorrentina", price_cents: 1500, description: "Tomate, mozzarella filante, basilic." },
                    { name: "Ravioli del Plin", price_cents: 1750, description: "Farce bœuf et porc, beurre et sauge." },
                    { name: "Spaghetti all'Amatriciana", price_cents: 1550, description: "Guanciale, tomate, pecorino." },
                    { name: "Lasagna al Forno", price_cents: 1650, description: "La recette de la Mamma." }
                ]
            },
            {
                category_type: "main",
                display_label: "Le Pizza Napoletana",
                items: [
                    { name: "Mammargherita", price_cents: 1200, description: "Fior di latte, tomate San Marzano, basilic." },
                    { name: "Regina Instagram", price_cents: 1450, description: "Jambon aux herbes, champignons, mozza." },
                    { name: "Notorious B.I.Cheese", price_cents: 1400, description: "Gorgonzola, parmigiano, mozza, poivre." },
                    { name: "Moment of Truffe", price_cents: 1800, description: "La pizza royale à la truffe." },
                    { name: "Diavola", price_cents: 1550, description: "Salami piquant, olives, piments." },
                    { name: "Double Cheese & Pepperoni", price_cents: 1600 },
                    { name: "Marinara (V)", price_cents: 950, description: "Tomate, ail, origan, sans mozza." },
                    { name: "Mariachi", price_cents: 1500, description: "Nduja, burrata, miel pimenté." },
                    { name: "Veggie Forever", price_cents: 1400, description: "Légumes de saison rôtis." },
                    { name: "Pizza du Moment", price_cents: 1700 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Il Tigramisù", price_cents: 700, description: "Servi à la grosse cuillère, mythique." },
                    { name: "Mousse Sweet Mousse", price_cents: 700 },
                    { name: "Panna Cotta aux fruits rouges", price_cents: 650 },
                    { name: "Gelato Artigianale (2 boules)", price_cents: 600 },
                    { name: "Chocolate-Praline Cookie", price_cents: 450 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Drinks & Cocktails",
                items: [
                    { name: "Britney Spritz", price_cents: 1000 },
                    { name: "Negronight Call", price_cents: 1000 },
                    { name: "Gin Routine", price_cents: 1000 },
                    { name: "Mojito di Pedro", price_cents: 1000 },
                    { name: "Sex on the Couch", price_cents: 1000 },
                    { name: "Big Mamma Mule", price_cents: 1100 },
                    { name: "San Pellegrino (50cl)", price_cents: 250 },
                    { name: "Acqua Panna (50cl)", price_cents: 250 },
                    { name: "Coca Cola (33cl)", price_cents: 350 },
                    { name: "Vino Rosso della Casa (Verre)", price_cents: 700 }
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
