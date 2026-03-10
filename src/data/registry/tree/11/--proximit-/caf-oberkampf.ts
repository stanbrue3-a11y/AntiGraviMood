import { SurgicalPlace } from '../../../../type-definition';

export const caf_oberkampf: SurgicalPlace = {
    "id": "poi-037",
    "name": "Café Oberkampf",
    "slug": "caf-oberkampf",
    "category": "restaurant",
    "subcategory": [
        "coffee-shop",
        "brunch",
        "breakfast",
        "vegetarian-friendly"
    ],
    "verified": true,
    "google_rating": 4.6,
    "location": {
        "address": "3 Rue Neuve Popincourt",
        "arrondissement": 11,
        "lat": 48.8647,
        "lng": 2.3727,
        "nearest_metro": "Parmentier",
        "metro_lines": [3],
        "google_id": "ChIJW-v--jM--jM--jM--jM--jM--jM"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": false,
        "terrace": false,
        "opening_hours_raw": "Lun-Ven: 08:30–16:00; Sam-Dim: 09:30–17:00",
        "main_action": {
            "type": "site",
            "url": "https://www.cafeoberkampf.com",
            "label": "SITE WEB"
        }
    },
    "pricing": {
        "avg_budget": 22,
        "is_free": false,
        "pint_price": 0,
        "wine_glass": 0,
        "coffee_price": 4.50,
        "dish_price": 13.50,
        "menu_type": "standard",
        "force_manual_dish_price": true,
        "last_updated": "2024-03-08",
        "menu_items": [
            {
                "category": "Plats (Brunch)",
                "items": [
                    { "name": "Lost in Shakshuka", "price": "14.50€", "description": "L'incontournable : sauce tomate épicée, œufs pochés, herbes fraîches, pita." },
                    { "name": "Avocado Toast au Za'atar", "price": "13.50€" },
                    { "name": "Grilled Cheese (Sourdough & Cheddar)", "price": "12.00€" },
                    { "name": "Halloumi Toast aux herbes", "price": "13.50€" },
                    { "name": "Soft Scrambled Eggs on Toast", "price": "11.00€" },
                    { "name": "Granola Maison & Yaourt Grec", "price": "9.50€" },
                    { "name": "Porridge d'avoine aux fruits de saison", "price": "9.00€" }
                ]
            },
            {
                "category": "Treats & Sides",
                "items": [
                    { "name": "Banana Bread toasté (beurre salé)", "price": "6.00€" },
                    { "name": "Cookie Chocolat & Tahini", "price": "4.50€" },
                    { "name": "Cake Citron Pavot", "price": "5.50€" },
                    { "name": "Halloumi grillé (side)", "price": "4.50€" },
                    { "name": "Avocat frais (side)", "price": "4.00€" }
                ]
            },
            {
                "category": "Specialty Coffee & Drinks",
                "items": [
                    { "name": "Espresso / Allongé", "price": "3.00€" },
                    { "name": "Flat White", "price": "4.50€" },
                    { "name": "Latte / Cappuccino", "price": "5.00€" },
                    { "name": "Matcha Latte", "price": "6.00€" },
                    { "name": "Chai Latte Maison", "price": "5.50€" },
                    { "name": "Fresh Orange Juice", "price": "5.50€" }
                ]
            }
        ]
    },
    "moods": {
        "chill": 85,
        "festif": 10,
        "culturel": 30
    },
    "description": "Petit par la taille mais immense par sa réputation, le Café Oberkampf est le temple du 'Lost in Shakshuka' à Paris. Ce coffee shop de quartier a su s'imposer grâce à une cuisine franche, colorée et des cafés de spécialité sourcés avec soin. L'ambiance est cosmopolite, vibrante et décontractée, idéale pour un réveil en douceur au cœur du 11ème.",
    "insider_tip": "Le week-end, la file d'attente peut être longue (pas de réservation). Venez à l'ouverture ou en semaine pour savourer votre shakshuka tranquillement au comptoir.",
    "expert_catchline": "Le coffee shop iconique d'Oberkampf : shakshuka parfaite et vibes cosmopolites.",
    "specials": {
        "cuisine": ["Shakshuka", "Avocado Toast", "Specialty Coffee"],
        "drinks": ["Flat White", "Matcha Latte", "Chai Maison"],
        "must_eat": "La Shakshuka, évidemment.",
        "must_drink": "Leur Flat White est l'un des plus maîtrisés du quartier."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    }
};
