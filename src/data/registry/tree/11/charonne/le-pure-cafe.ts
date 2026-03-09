import { SurgicalPlace } from '../../../../type-definition';

export const le_pure_cafe: SurgicalPlace = {
    "id": "poi-067",
    "name": "Le Pure Café",
    "slug": "le-pure-cafe",
    "category": "restaurant",
    "subcategory": [
        "bistro-traditionnel",
        "cinema",
        "terrasse",
        "brunch"
    ],
    "verified": true,
    "google_rating": 4.5,
    "location": {
        "address": "14 Rue Jean Macé",
        "arrondissement": 11,
        "lat": 48.853289,
        "lng": 2.383442,
        "nearest_metro": "Charonne",
        "metro_lines": [9],
        "google_id": "ChIJN-v--jM--jM--jM--jM--jM--jM"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": false,
        "terrace": true,
        "opening_hours_raw": "Lundi-Vendredi: 07:30–02:00, Samedi-Dimanche: 08:30–02:00",
        "main_action": {
            "type": "site",
            "url": "http://www.lepurecafe.com/",
            "label": "SITE WEB"
        }
    },
    "pricing": {
        "avg_budget": 25,
        "is_free": false,
        "pint_price": 8.50,
        "wine_glass": 6.00,
        "coffee_price": 2.50,
        "dish_price": 15.00,
        "last_updated": "2024-03-08",
        "menu_items": [
            {
                "category": "L'Ardoise du Déjeuner",
                "items": [
                    { "name": "Plat du Jour", "price": "11.50€" },
                    { "name": "Pure Burger & Frites maison", "price": "15.00€" },
                    { "name": "Fish N' Chips, sauce tartare", "price": "15.00€" },
                    { "name": "Suprême de Canette des Dombes rôti", "price": "15.00€" },
                    { "name": "Ceviche de Truite, vinaigrette mangue", "price": "15.00€" },
                    { "name": "Pavé de Colin en papillote", "price": "15.00€" },
                    { "name": "Assiette Végétarienne de saison", "price": "13.50€" }
                ]
            },
            {
                "category": "Carte du Soir (Bistro Classics)",
                "items": [
                    { "name": "Steak Frites, sauce au poivre", "price": "19.00€" },
                    { "name": "Tartare de Bœuf préparé", "price": "18.00€" },
                    { "name": "Pavé de Saumon à l'unilatérale", "price": "20.00€" },
                    { "name": "Salade César au poulet croustillant", "price": "16.50€" }
                ]
            },
            {
                "category": "Entrées & Desserts",
                "items": [
                    { "name": "Œuf dur Mayonnaise", "price": "5.80€" },
                    { "name": "Rillettes de canard maison", "price": "8.00€" },
                    { "name": "Mousse au Chocolat noir", "price": "7.50€" },
                    { "name": "Crème Brûlée vanille", "price": "8.00€" },
                    { "name": "Tarte Tatin & glace vanille", "price": "8.50€" }
                ]
            }
        ]
    },
    "moods": {
        "chill": 85,
        "festif": 30,
        "culturel": 70
    },
    "description": "Véritable décor de cinéma (immortalisé dans 'Before Sunset'), Le Pure Café est l'archétype du beau bistrot d'angle parisien. Avec son bar circulaire en bois, ses boiseries patinées et ses larges miroirs, il dégage une atmosphère intemporelle et chaleureuse. C'est l'endroit idéal pour un café matinal avec un livre, un déjeuner de quartier efficace ou un verre entre amis dans une ambiance feutrée et authentique.",
    "insider_tip": "La table dans l'angle vitré est la plus prisée pour observer la vie de la rue Jean Macé. C'est exactement là que se déroule la scène culte du film.",
    "expert_catchline": "Le bistrot cinématographique et intemporel de Charonne.",
    "specials": {
        "cuisine": ["French Bistro", "Burgers", "Salades"],
        "drinks": ["Vins de propriété", "Pinte classique", "Café de comptoir"],
        "must_eat": "Le Pure Burger & sa montagne de frites maison.",
        "must_drink": "Un verre de vin rouge de la Loire au bar."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    }
};
