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
        "dish_price": 16.00, // Satiety Unit: Planche Artisanale
        "hh_pint": 6.00,
        "hh_cocktail": 9.00,
        "hh_time": "19:00–21:00",
        "last_updated": "2024-03-08",
        "menu_items": [
            {
                "category_type": "drink",
                "display_label": "Cocktails Signature",
                "items": [
                    { "name": "Gin Thé-Nic (Gin, Thé, Tonic)", "price_cents": 1400 },
                    { "name": "Bloody Porto (Vodka, Porto, Tomate)", "price_cents": 1400 },
                    { "name": "Badaboum Mule", "price_cents": 1300 },
                    { "name": "Spritz Maison", "price_cents": 1200 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Bières Pression",
                "items": [
                    { "name": "Pinte de Blonde (Bud)", "price_cents": 900 },
                    { "name": "Demi de Blonde (Bud)", "price_cents": 500 },
                    { "name": "Pinte IPA Artisanale", "price_cents": 1000 },
                    { "name": "Super 8 (Tap)", "price_cents": 950 }
                ]
            },
            {
                "category_type": "other",
                "display_label": "Finger Food (Cantine)",
                "items": [
                    { "name": "Frites Maison / Potatoes", "price_cents": 600 },
                    { "name": "Planche de Charcuterie artisanale", "price_cents": 1600 },
                    { "name": "Planche de Fromages affinés", "price_cents": 1600 },
                    { "name": "Planche Mixte XXL", "price_cents": 2200 },
                    { "name": "Tacos du moment (3 pcs)", "price_cents": 1200 }
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
        "hero": `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUNvTYEr2W-uABK--5P-QH2o1HYBRhwW0mAxZ6mPSXMAbd09mfDR_gjV6IqYc4IEgQNPH2zWOKX6YGUWbXvdWJccTWetBymuDCU5GbD5zVLRolXQ0R3XrXDwc85TYWfrrRrl8ih4JgJbral02behaP0iuNAw-r9iaZXBxDSUGWF2sfSHEwi7c_7FMK-sAa02D8-bFwWfaFKgKccbTN8Ocj72I5Bj18StHAGgG8h6KB6gRGq63WnV0USu2oVsfAqIVxKvxQhEsqG5SpNtSHwQA3ysKLsILTgIZYdsBXi05_LcA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        "gallery": [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWtq2EYKZtAo9MnIVJMBa0rOnEAuR8_VT3k4kjlF7M09SFoGZztT0OpzqICG238A7GFnAOUmvK9HilKe90NNOpIK3w3UyF5_GUMYgmdNEY0aneQg41fpVPanApUQDpG3uZyMCmjgHJ-IUhqqhaM8sRpucI4xljE_AkiBW8DRJ-CwdMC5YUNq9_0vGxCXpckqKVy35lzaJps9atVCcZzcat8CYyOcb21LarvBsA6POZqoLJZJLbfE9B-9bk5i7lDckGv8GSq2sRFSPApsB4mfffS-zLfWiCKX2KKCuATNLMdaA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXmRvD8nFRQgVtl9K93q0aOcD5JfslpGpKVAAZZ6e0jQrCYGtq0Jn2ZO7zlHc9OEfZN2JS1gkCzZWCwTdcAWyZB9AfoYn3eeyXVKloG4zDy2GPBW_F9ky3InGCOId81B7Z7WLF85KwhYslTH8WCDiC8KAgcFvlAy0LV3jOVowaMMw5AzR_SQdkYD0ruBIvU5sQWoAi95p7l2oNA9MCgRGc5TVT84YyA0NGPuB55jnMSB4-gdUbaL36-aE2eU5VjFXV7Bz63eX2ohDkXGzKew1mmqMtt8XMkV8VzFid737FBBA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    }
};
