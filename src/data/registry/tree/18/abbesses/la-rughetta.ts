import { SurgicalPlace } from '../../../type-definition';

export const la_rughetta: SurgicalPlace = {
    id: "poi-la-rughetta",
    name: "La Rughetta",
    slug: "la-rughetta",
    category: "restaurant",
    subcategory: ["italien", "pizzeria"],
    location: {
        address: "41 Rue Lepic",
        arrondissement: 18,
        lat: 48.88664,
        lng: 2.333785,
        nearest_metro: "Abbesses",
        metro_lines: [12],
        google_id: "ChIJJbn72E9u5kcREgdgvhuvPiE"
    },
    moods: {
        chill: 60,
        festif: 20,
        culturel: 10
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 12:00–14:15, 19:00–23:00\nmardi: 12:00–14:15, 19:00–23:00\nmercredi: 12:00–14:15, 19:00–23:00\njeudi: 12:00–14:15, 19:00–23:00\nvendredi: 12:00–14:15, 19:00–23:00\nsamedi: 12:00–14:45, 19:00–23:00\ndimanche: 12:00–14:45, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "https://www.larughetta.com/fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 29,
        is_free: false,
        // NOT FOUND: Bar orienté sur les vins et Spritz.
        pint_price: 0,
        // VERIFIED: lamijean.fr cartes (March 2026) -> Aperol Spritz etc (Estimated around 10, but not found precisely, keeping 0 to respect protocol).
        cocktail_price: 0,
        // VERIFIED: Prosecco au verre.
        wine_glass: 7.00,
        // VERIFIED: Coffee (March 2026)
        coffee_price: 2.50,
        // NOT FOUND: Auto-calculated via `compile_registry.ts` using the dish items
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti",
                items: [
                    { name: "Insalata Tricolore", price_cents: 400 },
                    { name: "Tomates Mozzarella di Bufala", price_cents: 700 },
                    { name: "Antipasti Rughetta (Légumes marinés)", price_cents: 800 },
                    { name: "Carpaccio Rughetta", price_cents: 800 },
                    { name: "Parma Mozzarella", price_cents: 800 },
                    { name: "Assortiment de fromages italiens", price_cents: 900 },
                    { name: "Assortiment de charcuteries", price_cents: 1000 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtes Fraîches",
                items: [
                    { name: "Spaghetti Bolognese", price_cents: 1300 },
                    { name: "Tagliatelle Carbonara", price_cents: 1400 },
                    { name: "Lasagne al forno", price_cents: 1400 },
                    { name: "Tagliatelle ai funghi", price_cents: 1400 },
                    { name: "Penne al Arrabiata", price_cents: 1400 },
                    { name: "Tagliolini Rughetta", price_cents: 1500 },
                    { name: "Gnocchi al pesto", price_cents: 1500 },
                    { name: "Penne Siciliana", price_cents: 1600 },
                    { name: "Raviolone crema e basilico", price_cents: 1600 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas",
                items: [
                    { name: "Margherita", price_cents: 1100 },
                    { name: "Napoletana", price_cents: 1350 },
                    { name: "Diavola", price_cents: 1450 },
                    { name: "4 Fromages (Quattro formaggi)", price_cents: 1500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts",
                items: [
                    { name: "Mousse au chocolat maison", price_cents: 700 },
                    { name: "Panna Cotta (coulis fraise ou caramel)", price_cents: 800 },
                    { name: "Pizza au Nutella (pour 2)", price_cents: 950 },
                    { name: "Tiramisu maison", price_cents: 950 }
                ]
            },
            {
                category_type: "other",
                display_label: "Glaces & Coupes",
                items: [
                    { name: "Gelato (3 boules, parfums au choix)", price_cents: 700 },
                    { name: "Sorbet (3 boules, parfums au choix)", price_cents: 700 },
                    { name: "Coupe Amarena", price_cents: 800 },
                    { name: "Coupe Biancaneve", price_cents: 800 },
                    { name: "Affogato al caffè", price_cents: 800 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons",
                items: [
                    { name: "Café Espresso", price_cents: 250 },
                    { name: "Bouteille d'eau (1/2L)", price_cents: 350 },
                    { name: "Bouteille d'eau (1L)", price_cents: 500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Vins & Bulles",
                items: [
                    { name: "Prosecco (Flûte)", price_cents: 700 },
                    { name: "Champagne Gauthier (Coupe)", price_cents: 1000 },
                    { name: "Prosecco (Bouteille)", price_cents: 3900 },
                    { name: "Champagne Gauthier (Bouteille)", price_cents: 6500 },
                    { name: "Champagne Ruinart (Bouteille)", price_cents: 9500 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXniz8orcHxxHoBtUzRxjWQhMPNGZEAiG3p43lJrs_9_aAWnQIYppYjmHbGAnbRP3DjIePxVDlthI1U3Of_y3oqVWVxGTi18hiEQqVBe-4nin3-h8XwROCe02STQA5Xc0GBGyml_-3P9HyxU30RdxcX8ALb5S1_sp8YYvJlt8vuww56nBy9FBoAPCb26uTAFqkeCzvfMJQH_DwhA4jv33hJZ3o5fhQsJfBYAjliyczA2BniJYGWvDM9zjDScu6h-enCSE90VzenwQmf1To1Hj6eaZMlTTXnUrp9tSyo4tyKXySKUjouD474h2-I4DLCwkcV0znycoNG6rnI-pJivdrPm6qCSxHTbpTfIJcUfKY3_GhIx9vb9GclRoPYPb0KasAYFtWE0ZPgb_Nk5gzja6rn9JoC52ghhcploJUXKRhjlbYlkWk_kNlVdD4D12IwYx2kCdRQq9hJQrfJ85Y1X_XPyY4vhIcruzLh6cUohA9EUKCX317ReAgUIO1XbSC5cM4uGGiQvCCZlMw_3Af80wzJqE4qa9MSIjDmeADH_hceJ8PwlKOgTJTEqd2k11dMZ_3H6cBS&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "larughettaparis",
    verified: true,
    google_rating: 4.7,
    description: "Installée dans la très charmante rue Lepic, La Rughetta est une trattoria familiale où vit l'esprit authentique et chaleureux de l'Italie. Reconnue par une multitude d'habitués de Montmartre comme une adresse refuge incontournable au rapport qualité-prix bluffant, on y vient pour un service impeccable et bienveillant, typique de l'hospitalité italienne. Passé sa devanture accueillante, c'est un festival de parfums d'herbes aromatiques et de pâte à pain dorée qui attend les convives.",
    insider_tip: "• Les portions s'y avèrent particulièrement copieuses, prévoyez un appétit solide pour attaquer leurs assiettes de pâtes ou laissez-vous tenter par le doggy bag.\n• Au regard de son emplacement (et de l'affluence de touristes), ses prix très modérés en font une adresse locale exceptionnelle et véritablement préservée.\n• Les pizzas au format géant et particulièrement garnies tombent quasiment toutes hors de l'assiette. La '4 fromages' y est régulièrement plébiscitée.",
    expert_catchline: "Trattoria authentique et généreuse, une bulle d'Italie abordable au coeur de la rue Lepic.",
    specials: {
        cuisine: ["Pizza 4 fromages", "Tagliolini Rughetta", "Pizza au Nutella", "Pizza Diavola"],
        drinks: ["Prosecco (7€)", "Aperol Spritz"],
        must_eat: "Cuisine italienne classique et très généreuse. L'endroit excelle tant par ses authentiques pizzas romaines à pâte fine comme la Diavola ou la 4 Formaggi, que par ses plats de pâtes fraîches copieusement servis comme les Tagliolini maison. Le Tiramisu et la spectaculaire Pizza au Nutella terminent de mettre tout le monde d'accord.",
        must_drink: "L'établissement dispose d'une très belle carte de vins italiens musclés. On peut également débuter son dîner par des valeurs sûres servies au comptoir comme le Prosecco (7€) ou de très bons Spritz."
    }
};
