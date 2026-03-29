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
                category_type: "other",
                display_label: "Sexy Street Food (Les Incontournables)",
                items: [
                    { name: "Superdog", price_cents: 1300, description: "Saucisse volaille, oignons Guinness, relish curcuma, cheddar gratiné." },
                    { name: "Eggplant Katsu Burger", price_cents: 1200, description: "Ketchup miso, chou blanc fermenté, brioche toastée." },
                    { name: "Puff Pizza Ricotta & Harissa", price_cents: 1300, description: "Pâte aérienne, sauce beurre-harissa, miel." },
                    { name: "Puff Pizza Pepperoni", price_cents: 1500, description: "Crème de ricotta, provolone, pepperoni piquant." },
                    { name: "Pasta al Ragù Bianco", price_cents: 1450, description: "Pâtes fraîches, ragù blanc, espuma parmesan." },
                    { name: "Crispy Po'Boy", price_cents: 1400, description: "Crevettes frites, sauce cajun, pickles maison." },
                    { name: "Fried Chicken & Hot Honey", price_cents: 1250 },
                    { name: "Cheeseburger Superfine", price_cents: 1300 }
                ]
            },
            {
                category_type: "sharing",
                display_label: "Bites & Sides (À partager)",
                items: [
                    { name: "Shiitake Mushroom Skewers", price_cents: 900, description: "Brochettes de shiitake laquées soja-gingembre." },
                    { name: "Reimagined Caesar Salad", price_cents: 900 },
                    { name: "Dirty Fries Superfine", price_cents: 700 },
                    { name: "Pickles de légumes de saison", price_cents: 500 },
                    { name: "Croquettes de Cochon & Mayo fumée", price_cents: 850 },
                    { name: "Burrata, Huile de Basilic & Noisettes", price_cents: 1100 },
                    { name: "Maïs Grillé, Beurre de Miso & Furikake", price_cents: 750 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails Signature (L'Alchimie)",
                items: [
                    { name: "Absinthe Gimlet", price_cents: 1400, description: "Absinthe, amaretto blanc, citron, sauge." },
                    { name: "Not A Bloody Mary", price_cents: 1400, description: "Mezcal, dashi, ananas, céleri, harissa." },
                    { name: "White Forest Martini", price_cents: 1400, description: "Gin, vodka, sake, liqueur de sapin, estragon." },
                    { name: "PB&B Milkshake (Boozy)", price_cents: 1350, description: "Bourbon, peanut butter, banane, vanille, chantilly fumée." },
                    { name: "Butter Not Texture", price_cents: 1400, description: "Gin, shochu d'orge, sarrasin, butternut." },
                    { name: "Fortunella Spritz", price_cents: 1200 },
                    { name: "New College (Cognac & Olive)", price_cents: 1400 },
                    { name: "Super-Negroni (Barrel aged)", price_cents: 1300 },
                    { name: "Mezcal Mule", price_cents: 1200 },
                    { name: "Espresso Martini Superfine", price_cents: 1200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Softs & Mocktails",
                items: [
                    { name: "Mocktail Curry & Amande", price_cents: 1000 },
                    { name: "Mocktail Cardamome & Café", price_cents: 1000 },
                    { name: "Limonade artisanale (citron-gingembre)", price_cents: 600 },
                    { name: "Thé Glacé Maison (pêche-verveine)", price_cents: 600 },
                    { name: "Cola Baladin (Artisanal)", price_cents: 550 }
                ]
            },
            {
                category_type: "other",
                display_label: "Beers & Natural Wines",
                items: [
                    { name: "Pression : Guinness (33cl)", price_cents: 800 },
                    { name: "Pression : NEIPA Cloudy Job (33cl)", price_cents: 800 },
                    { name: "Can : Fauve Craft Beer (33cl)", price_cents: 900 },
                    { name: "Vin Naturel Rouge (Verre)", price_cents: 850 },
                    { name: "Vin Naturel Orange (Verre)", price_cents: 950 },
                    { name: "Bouteille Vin Naturel (à partir de)", price_cents: 3800 }
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
