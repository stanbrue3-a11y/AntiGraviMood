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
        wifi: false,
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
                category: "Jamrock Pica-Pica (Starters)",
                items: [
                    { name: "Jamrock Patties (Beef & Cheese) x2", price: "7.00€", description: "L'icône street food jamaïcaine, pâte épicée au curcuma." },
                    { name: "Jamrock Patties (Veggie) x2", price: "7.00€", description: "Légumes curry, pâte fondante." },
                    { name: "Chicken Wings Tamarind & Ginger (x4)", price: "5.00€", description: "Ailes marinées puis laquées au tamarin, équilibre sucré-acide." },
                    { name: "Fish Fritters (Stamp & Go) x4", price: "5.00€", description: "Beignets de morue pimentés, typiques des petits-déjeuners de l'île." },
                    { name: "Grilled Corn on the Cob", price: "6.00€", description: "Maïs grillé, coco râpée, mayo jerk maison." },
                    { name: "Shrimp Mango Salsa", price: "9.00€" },
                    { name: "Fried Plantains (Aloko style)", price: "5.00€", description: "Bananes pesées, servies avec une salsa mangue épicée." },
                    { name: "Festivals (Corn fritters) x3", price: "5.00€", description: "Beignets de maïs légèrement sucrés, parfaits pour calmer le Jerk." },
                    { name: "Sweet Potato Fries & Lime Mayo", price: "5.00€" }
                ]
            },
            {
                category: "Modern Jamaican Mains (Les Plats)",
                items: [
                    { name: "Jerk Chicken Signature (Combo)", price: "17.00€", description: "Mariné 24h, grillé au barbecue, servi avec riz & pois, achar et sauce pimentée." },
                    { name: "Jerk Veggie (Enoki & Chou-fleur)", price: "16.00€", description: "L'option végétarienne ultra-umami avec sauce jerk fumée." },
                    { name: "Escovitch Fish (Whole Bream)", price: "19.00€", description: "Daurade entière frite, marinade vinaigrée aux oignons et piments." },
                    { name: "Oxtail Style Beef Confit", price: "18.00€", description: "Paleron de bœuf confit façon queue de bœuf jamaïcaine, jus corsé." },
                    { name: "Ital Curry (Vegan Bowl)", price: "15.00€", description: "Légumes du moment au lait de coco, curcuma et piment bonnet écossais." },
                    { name: "Jerk Pork Plate", price: "17.00€", description: "Échine de porc grillée façon jamaïcaine." },
                    { name: "Jamrock Beef Burger (Bacon & Cheddar)", price: "17.50€" },
                    { name: "Jamrock Veggie Burger", price: "17.50€" },
                    { name: "Wrap Jerk Chicken (Midi)", price: "11.50€" },
                    { name: "Salade Jerk & Avocat", price: "14.50€" }
                ]
            },
            {
                category: "Sides & Extras",
                items: [
                    { name: "Rice & Peas (Riz coco & haricots)", price: "5.00€" },
                    { name: "Vegetable Julienne (Pickles)", price: "4.00€" },
                    { name: "Homemade Jerk Sauce Extra", price: "1.50€" },
                    { name: "Coco Bread Basket", price: "3.50€" }
                ]
            },
            {
                category: "Sweet Treats (Desserts)",
                items: [
                    { name: "Rhum Cake Perdu", price: "8.00€", description: "Caramel pimenté, glace vanille maison, une tuerie locale." },
                    { name: "Sweet Potato Cake & Canne à sucre", price: "6.00€" },
                    { name: "Jamaican Biscuit & Mousse Chocolat 70%", price: "7.00€" },
                    { name: "Coco Mousse insert Mangue fraîche", price: "8.00€" }
                ]
            },
            {
                category: "Jamaican Drinks & Vibes",
                items: [
                    { name: "Homemade Jamaican Limeade", price: "5.50€", description: "La citronnade traditionnelle, désaltérante." },
                    { name: "Sorrel (Hibiscus & Ginger)", price: "6.50€", description: "Infusion d'hibiscus iconique des Caraïbes." },
                    { name: "Cocktails Signature au Rhum Jamaïcain", price: "10.00€" },
                    { name: "Bières Red Stripe (Import)", price: "7.00€" },
                    { name: "Café Blue Mountain (Expresso)", price: "4.00€" }
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
