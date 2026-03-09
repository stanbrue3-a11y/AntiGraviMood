import { SurgicalPlace } from '../../../../type-definition';

export const badaboum: SurgicalPlace = {
    "id": "poi-016",
    "name": "Badaboum",
    "slug": "badaboum",
    "category": "club",
    "subcategory": [
        "club-concert",
        "cocktail-bar",
        "house-techno",
        "disco"
    ],
    "verified": true,
    "google_rating": 4.1,
    "location": {
        "address": "2 bis Rue des Taillandiers",
        "arrondissement": 11,
        "lat": 48.853528,
        "lng": 2.375755,
        "nearest_metro": "Bastille",
        "metro_lines": [1, 5, 8],
        "google_id": "ChIJA-v--jM--jM--jM--jM--jM--jM"
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": true,
        "wifi": false,
        "opening_hours_raw": "Mercredi-Jeudi: 19:00–02:00, Vendredi-Samedi: 19:00–06:00",
        "main_action": {
            "type": "site",
            "url": "https://www.badaboum.paris",
            "label": "PROGRAMMATION"
        }
    },
    "pricing": {
        "avg_budget": 30,
        "is_free": false,
        "pint_price": 9.00,
        "cocktail_price": 14.00,
        "wine_glass": 6.50,
        "dish_price": 0,
        "hh_pint": 6.00,
        "hh_cocktail": 9.00,
        "hh_time": "19:00–21:00",
        "last_updated": "2024-03-08",
        "menu_items": [
            {
                "category": "Cocktails Signature",
                "items": [
                    { "name": "Gin Thé-Nic (Gin, Thé, Tonic)", "price": "14.00€" },
                    { "name": "Bloody Porto (Vodka, Porto, Tomate)", "price": "14.00€" },
                    { "name": "Badaboum Mule", "price": "13.00€" },
                    { "name": "Spritz Maison", "price": "12.00€" }
                ]
            },
            {
                "category": "Bières Pression",
                "items": [
                    { "name": "Pinte de Blonde (Bud)", "price": "9.00€" },
                    { "name": "Demi de Blonde (Bud)", "price": "5.00€" },
                    { "name": "Pinte IPA Artisanale", "price": "10.00€" },
                    { "name": "Super 8 (Tap)", "price": "9.50€" }
                ]
            },
            {
                "category": "Finger Food (Cantine)",
                "items": [
                    { "name": "Frites Maison / Potatoes", "price": "6.00€" },
                    { "name": "Planche de Charcuterie artisanale", "price": "16.00€" },
                    { "name": "Planche de Fromages affinés", "price": "16.00€" },
                    { "name": "Planche Mixte XXL", "price": "22.00€" },
                    { "name": "Tacos du moment (3 pcs)", "price": "12.00€" }
                ]
            }
        ]
    },
    "moods": {
        "chill": 20,
        "festif": 95,
        "culturel": 40
    },
    "description": "Temple de la nuit Bastillaise, le Badaboum réussit le pari de concilier une salle de concert pointue, un club électronique de référence et un bar à cocktails sophistiqué. Son 'Appartement' caché à l'étage offre une parenthèse feutrée et intimiste au-dessus du tumulte de la piste de danse. C'est le lieu parfait pour découvrir les futurs talents de la scène indie avant de finir la nuit sur des rythmes house ou disco.",
    "insider_tip": "L'entrée au club est souvent moins chère (ou gratuite) avant minuit sur certaines soirées. Surveillez leur Instagram. Le cocktail bar à l'étage est un refuge idéal quand le club devient trop intense.",
    "expert_catchline": "Le triptyque magique de Bastille : Concert, Club & Cocktail Bar d'exception.",
    "specials": {
        "cuisine": ["Planches", "Street Food"],
        "drinks": ["Craft Beer", "Cocktails Signature"],
        "must_eat": "Leurs planches mixtes très généreuses pour éponger les cocktails.",
        "must_drink": "Le Gin Thé-Nic, signature rafraîchissante de la maison."
    },
    "images": {
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": []
    }
};
