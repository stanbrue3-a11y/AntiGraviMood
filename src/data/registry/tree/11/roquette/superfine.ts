import { SurgicalPlace } from '../../../type-definition';

export const superfine: SurgicalPlace = {
    id: "poi-superfine",
    name: "Superfine",
    slug: "superfine",
    category: "restaurant",
    subcategory: ["dive-bar", "street-food", "cocktails", "vibrant", "restaurant"],
    location: {
        address: "86 Rue de la Roquette",
        arrondissement: 11,
        lat: 48.854235,
        lng: 2.376892,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJk6P_q_pt5kcR_Y8u_99j-5w"
    },
    moods: {
        chill: 20,
        festif: 90,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 18:00–02:00; Dim: 17:00–00:00; Fermé Lundi",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.instagram.com/superfine.paris/",
            label: "INSTAGRAM"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 8.00,
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 13.50, // MANUAL: Median of high-end street food (Puff Pizza, Superdog, Burgers)
        last_updated: "2026-03-09",
        menu_items: [
            {
                category: "Sexy Street Food (Les Incontournables)",
                items: [
                    { name: "Superdog", price: "13.00€", description: "Saucisse volaille, oignons Guinness, relish curcuma, cheddar gratiné." },
                    { name: "Eggplant Katsu Burger", price: "12.00€", description: "Ketchup miso, chou blanc fermenté, brioche toastée." },
                    { name: "Puff Pizza Ricotta & Harissa", price: "13.00€", description: "Pâte aérienne, sauce beurre-harissa, miel." },
                    { name: "Puff Pizza Pepperoni", price: "15.00€", description: "Crème de ricotta, provolone, pepperoni piquant." },
                    { name: "Pasta al Ragù Bianco", price: "14.50€", description: "Pâtes fraîches, ragù blanc, espuma parmesan." },
                    { name: "Crispy Po'Boy", price: "14.00€", description: "Crevettes frites, sauce cajun, pickles maison." },
                    { name: "Fried Chicken & Hot Honey", price: "12.50€" },
                    { name: "Cheeseburger Superfine", price: "13.00€" }
                ]
            },
            {
                category: "Bites & Sides (À partager)",
                items: [
                    { name: "Shiitake Mushroom Skewers", price: "9.00€", description: "Brochettes de shiitake laquées soja-gingembre." },
                    { name: "Reimagined Caesar Salad", price: "9.00€" },
                    { name: "Dirty Fries Superfine", price: "7.00€" },
                    { name: "Pickles de légumes de saison", price: "5.00€" },
                    { name: "Croquettes de Cochon & Mayo fumée", price: "8.50€" },
                    { name: "Burrata, Huile de Basilic & Noisettes", price: "11.00€" },
                    { name: "Maïs Grillé, Beurre de Miso & Furikake", price: "7.50€" }
                ]
            },
            {
                category: "Cocktails Signature (L'Alchimie)",
                items: [
                    { name: "Absinthe Gimlet", price: "14.00€", description: "Absinthe, amaretto blanc, citron, sauge." },
                    { name: "Not A Bloody Mary", price: "14.00€", description: "Mezcal, dashi, ananas, céleri, harissa." },
                    { name: "White Forest Martini", price: "14.00€", description: "Gin, vodka, sake, liqueur de sapin, estragon." },
                    { name: "PB&B Milkshake (Boozy)", price: "13.50€", description: "Bourbon, peanut butter, banane, vanille, chantilly fumée." },
                    { name: "Butter Not Texture", price: "14.00€", description: "Gin, shochu d'orge, sarrasin, butternut." },
                    { name: "Fortunella Spritz", price: "12.00€" },
                    { name: "New College (Cognac & Olive)", price: "14.00€" },
                    { name: "Super-Negroni (Barrel aged)", price: "13.00€" },
                    { name: "Mezcal Mule", price: "12.00€" },
                    { name: "Espresso Martini Superfine", price: "12.00€" }
                ]
            },
            {
                category: "Softs & Mocktails",
                items: [
                    { name: "Mocktail Curry & Amande", price: "10.00€" },
                    { name: "Mocktail Cardamome & Café", price: "10.00€" },
                    { name: "Limonade artisanale (citron-gingembre)", price: "6.00€" },
                    { name: "Thé Glacé Maison (pêche-verveine)", price: "6.00€" },
                    { name: "Cola Baladin (Artisanal)", price: "5.50€" }
                ]
            },
            {
                category: "Beers & Natural Wines",
                items: [
                    { name: "Pression : Guinness (33cl)", price: "8.00€" },
                    { name: "Pression : NEIPA Cloudy Job (33cl)", price: "8.00€" },
                    { name: "Can : Fauve Craft Beer (33cl)", price: "9.00€" },
                    { name: "Vin Naturel Rouge (Verre)", price: "8.50€" },
                    { name: "Vin Naturel Orange (Verre)", price: "9.50€" },
                    { name: "Bouteille Vin Naturel (à partir de)", price: "38.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX_J-mU_W05_V5--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.8,
    description: "Nouveau bastion de la nuit roquette, Superfine a investi l'ancien Motel pour créer un 'dive bar' ultra-léché. Ici, le street food se veut 'sexy' (pizze soufflées, superdogs) et les cocktails s'aventurent dans des territoires audacieux (dashi, absinthe, sapin). DJ sets, acoustique soignée et ambiance électrique : l'adresse est déjà le nouveau QG de l'Est parisien branché.",
    insider_tip: "• Ne passez pas à côté de la 'Puff Pizza' à la harissa et au miel, une tuerie absolue.\n• Le cocktail 'Not A Bloody Mary' est une masterclass de limpidité et de piquant.\n• Happy hour sur les pressions craft en début de soirée.\n• Les places au bar sont les meilleures pour observer les mixologues à l'œuvre.",
    expert_catchline: "Le dive bar 2.0 de la Roquette : street food sexy et cocktails d'avant-garde dans une ambiance survoltée.",
    specials: {
        cuisine: ["Puff Pizza Ricotta & Harissa", "Superdog Guinness", "Eggplant Katsu Burger"],
        drinks: ["Absinthe Gimlet", "Natural Wine Selection", "Guinness on tap"],
        must_eat: "La Puff Pizza Pepperoni, incroyable de légèreté, suivie d'un Superdog bien gratiné.",
        must_drink: "L'Absinthe Gimlet pour son équilibre parfait entre fraîcheur et herbalité."
    }
};
