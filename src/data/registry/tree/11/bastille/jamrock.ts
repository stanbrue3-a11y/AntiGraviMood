import { SurgicalPlace } from '../../../type-definition';

export const jamrock: SurgicalPlace = {
    id: "poi-jamrock",
    name: "Jamrock",
    slug: "jamrock",
    category: "restaurant",
    subcategory: ["jamaican", "street food", "épicé", "caribéen"],
    location: {
        address: "16 Rue de Candie",
        arrondissement: 11,
        lat: 48.8504,
        lng: 2.3781,
        nearest_metro: "Ledru-Rollin",
        metro_lines: [8],
        google_id: "ChIJibErbg9z5kcRdWTOJsW6lFI"
    },
    moods: {
        chill: 60,
        festif: 80,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Lun-Sam: 12:00–14:30, 19:00–23:00 (Fermé Dim)",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://jamrock-paris.com/",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 8, // Estimé
        wine_glass: 8.00,
        coffee_price: 3.00,
        dish_price: 15, // MANUAL: Prix du Jerk Chicken signature
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Jamrock 2025 Standard (Modern Jamaican Canteen)
            {
                category_type: "starter",
                display_label: "Jamrock Pica-Pica (Starters)",
                items: [
                    { name: "Jamrock Patties (Beef & Cheese) x2", price_cents: 700, description: "L'icône street food jamaïcaine, pâte épicée au curcuma." },
                    { name: "Jamrock Patties (Veggie) x2", price_cents: 700, description: "Légumes curry, pâte fondante." },
                    { name: "Chicken Wings Tamarind & Ginger (x4)", price_cents: 500, description: "Ailes marinées puis laquées au tamarin, équilibre sucré-acide." },
                    { name: "Fish Fritters (Stamp & Go) x4", price_cents: 500, description: "Beignets de morue pimentés, typiques des petits-déjeuners de l'île." },
                    { name: "Grilled Corn on the Cob", price_cents: 600, description: "Maïs grillé, coco râpée, mayo jerk maison." },
                    { name: "Shrimp Mango Salsa", price_cents: 900 },
                    { name: "Fried Plantains (Aloko style)", price_cents: 500, description: "Bananes pesées, servies avec une salsa mangue épicée." },
                    { name: "Festivals (Corn fritters) x3", price_cents: 500, description: "Beignets de maïs légèrement sucrés, parfaits pour calmer le Jerk." },
                    { name: "Sweet Potato Fries & Lime Mayo", price_cents: 500 }
                ]
            },
            {
                category_type: "main",
                display_label: "Modern Jamaican Mains (Les Plats)",
                items: [
                    { name: "Jerk Chicken Signature (Combo)", price_cents: 1700, description: "Mariné 24h, grillé au barbecue, servi avec riz & pois, achar et sauce pimentée." },
                    { name: "Jerk Veggie (Enoki & Chou-fleur)", price_cents: 1600, description: "L'option végétarienne ultra-umami avec sauce jerk fumée." },
                    { name: "Escovitch Fish (Whole Bream)", price_cents: 1900, description: "Daurade entière frite, marinade vinaigrée aux oignons et piments." },
                    { name: "Oxtail Style Beef Confit", price_cents: 1800, description: "Paleron de bœuf confit façon queue de bœuf jamaïcaine, jus corsé." },
                    { name: "Ital Curry (Vegan Bowl)", price_cents: 1500, description: "Légumes du moment au lait de coco, curcuma et piment bonnet écossais." },
                    { name: "Jerk Pork Plate", price_cents: 1700, description: "Échine de porc grillée façon jamaïcaine." },
                    { name: "Jamrock Beef Burger (Bacon & Cheddar)", price_cents: 1750 },
                    { name: "Jamrock Veggie Burger", price_cents: 1750 },
                    { name: "Wrap Jerk Chicken (Midi)", price_cents: 1150 },
                    { name: "Salade Jerk & Avocat", price_cents: 1450 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sides & Extras",
                items: [
                    { name: "Rice & Peas (Riz coco & haricots)", price_cents: 500 },
                    { name: "Vegetable Julienne (Pickles)", price_cents: 400 },
                    { name: "Homemade Jerk Sauce Extra", price_cents: 150 },
                    { name: "Coco Bread Basket", price_cents: 350 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Sweet Treats (Desserts)",
                items: [
                    { name: "Rhum Cake Perdu", price_cents: 800, description: "Caramel pimenté, glace vanille maison, une tuerie locale." },
                    { name: "Sweet Potato Cake & Canne à sucre", price_cents: 600 },
                    { name: "Jamaican Biscuit & Mousse Chocolat 70%", price_cents: 700 },
                    { name: "Coco Mousse insert Mangue fraîche", price_cents: 800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Jamaican Drinks & Vibes",
                items: [
                    { name: "Homemade Jamaican Limeade", price_cents: 550, description: "La citronnade traditionnelle, désaltérante." },
                    { name: "Sorrel (Hibiscus & Ginger)", price_cents: 650, description: "Infusion d'hibiscus iconique des Caraïbes." },
                    { name: "Cocktails Signature au Rhum Jamaïcain", price_cents: 1000 },
                    { name: "Bières Red Stripe (Import)", price_cents: 700 },
                    { name: "Café Blue Mountain (Expresso)", price_cents: 400 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUE5LM-jRsD2EnJSW652u-OdFD3x4fLKsM2ktBfIRulzkXw_g5mzMZhetjBktdG1pAqQhTdUM1Nbb8BEaED70RsYlcxGzX0odYJrxqabfNjle-eUCR9H8oL8-d7g6x1bOj0wJSTBa63QAWrE5IZaKm8TSt1lwOPm83_Cx75h6P7IOXqGhMdfj2lxcShJUPHpcc-nzgSdsehpR2vfaX39Iu1fh2O2ioSkOeprovy0eSIL0Q49clYaFWF2Ib8B1NpUXRVDAyVpQ4uwAC7fL2-q1cNkajy2j7ROR62K7zKTXcVoXQNfyc&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.7,
    description: "L'immersion sensorielle dans l'âme jamaïcaine par Camille Le Breton. Une cuisine vibrante qui balance entre tradition (Jerk Chicken fumé) et street-food modernisée, le tout dans une ambiance reggae-chic.",
    insider_tip: "Demandez le Sorrel maison pour accompagner votre Jerk Chicken. Le niveau de piment est ajustable, n'ayez pas peur des 'Festivals' (beignets de maïs) pour adoucir le feu.",
    expert_catchline: "L'essence de la Jamaïque à Bastille, entre fumé et piment.",
    specials: {
        cuisine: ["Jerk Chicken fumé", "Curry de légumes Ital", "Bao Coco Bread"],
        drinks: ["Rhum Jamaïcain", "Sorrel Maison"],
        must_eat: "Le Jerk Chicken Signature avec son riz et pois.",
        must_drink: "Un cocktail au rhum vieux ou la citronnade à la chaux."
    }
};
