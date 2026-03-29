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
                "category_type": "main",
                "display_label": "Plats (Brunch)",
                "items": [
                    { "name": "Lost in Shakshuka", "price_cents": 1450, "description": "L'incontournable : sauce tomate épicée, œufs pochés, herbes fraîches, pita." },
                    { "name": "Avocado Toast au Za'atar", "price_cents": 1350 },
                    { "name": "Grilled Cheese (Sourdough & Cheddar)", "price_cents": 1200 },
                    { "name": "Halloumi Toast aux herbes", "price_cents": 1350 },
                    { "name": "Soft Scrambled Eggs on Toast", "price_cents": 1100 },
                    { "name": "Granola Maison & Yaourt Grec", "price_cents": 950 },
                    { "name": "Porridge d'avoine aux fruits de saison", "price_cents": 900 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Treats & Sides",
                "items": [
                    { "name": "Banana Bread toasté (beurre salé)", "price_cents": 600 },
                    { "name": "Cookie Chocolat & Tahini", "price_cents": 450 },
                    { "name": "Cake Citron Pavot", "price_cents": 550 },
                    { "name": "Halloumi grillé (side)", "price_cents": 450 },
                    { "name": "Avocat frais (side)", "price_cents": 400 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Specialty Coffee & Drinks",
                "items": [
                    { "name": "Espresso / Allongé", "price_cents": 300 },
                    { "name": "Flat White", "price_cents": 450 },
                    { "name": "Latte / Cappuccino", "price_cents": 500 },
                    { "name": "Matcha Latte", "price_cents": 600 },
                    { "name": "Chai Latte Maison", "price_cents": 550 },
                    { "name": "Fresh Orange Juice", "price_cents": 550 }
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
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
    }
};
