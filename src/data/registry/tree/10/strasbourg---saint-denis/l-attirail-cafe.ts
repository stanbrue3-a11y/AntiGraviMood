import { SurgicalPlace } from '../../../../type-definition';

export const l_attirail_cafe: SurgicalPlace = {
    "id": "poi-307",
    "name": "L'Attirail Café",
    "slug": "l-attirail-cafe",
    "category": "bar",
    "subcategory": [
        "bar de quartier",
        "afterwork"
    ],
    "verified": true,
    "google_rating": 3.9, // VERIFIED: Google Maps API (place_id: ChIJTfmcNA5u5kcRfYHXVftk1eM)
    "location": {
        "address": "8 Boulevard Saint-Martin",
        "arrondissement": 10,
        "lat": 48.8688572, // VERIFIED: Google Maps API
        "lng": 2.3579085, // VERIFIED: Google Maps API
        "nearest_metro": "Strasbourg - Saint-Denis",
        "metro_lines": [
            4,
            8,
            9
        ]
    },
    "practical": {
        "reservation_policy": "sans_resa",
        "accessibility": false,
        "wifi": true, // VERIFIED: TimeToBar listing mentions WiFi
        "terrace": true, // VERIFIED: Multiple sources (Mapstr, PetitFuté, Google reviews)
        "opening_hours_raw": "Lundi-Dimanche: 15h00 - 02h00", // VERIFIED: Google Maps API (weekday_text)
        "action_type": "site",
        "action_url": "https://timetobar.com/sites/l-attirail-caf-" // VERIFIED: Google Maps API (website field)
    },
    "pricing": {
        "avg_budget": 8,
        "is_free": false,
        // VERIFIED: Google review Arthur (2024) + MisterGoodBeer + Mapstr — 4 sources concordantes
        "pint_price": 3.80,
        // VERIFIED: Mapstr (crowd-sourced, current) — "cocktails à prix réduit, 5-6€"
        "cocktail_price": 6,
        // VERIFIED: Mapstr (crowd-sourced, current) — "verre de vin 4,50€"
        "wine_glass": 4.50,
        // NOT FOUND: aucune source ne mentionne le prix du café
        "coffee_price": 0,
        // NOT FOUND: "croziflette" mentionnée (Google review 2024) mais sans prix
        "dish_price": 0,
        // ATTENTION: PAS DE HAPPY HOUR — avis Google "Burnout" (il y a 4 mois) :
        // "Happy hour affiché sur timetobar non appliqué — on n'a pas d'happy hour"
        "last_updated": "2026-02-28"
    },
    "moods": {
        "chill": 15,
        "festif": 22,
        "culturel": 5
    },
    "description": "Planqué juste à côté de la Porte Saint-Martin, L'Attirail est le genre de bar où le temps s'arrête et la pinte coûte moins cher qu'un café ailleurs. Anciennement l'Absinthe Café, le lieu a gardé son âme de rade populaire avec une terrasse chauffée ouverte dès 15h et des prix plancher qui attirent une clientèle jeune et étudiante. L'ambiance est bruyante, chaleureuse, souvent bondée — on y va pour la convivialité et les prix, pas pour le calme. Certains soirs, le lieu accueille des concerts de jazz live.",
    "insider_tip": "Les potatoes aux herbes sont offertes gratuitement avec ta consommation — c'est le vrai game-changer du lieu, mentionné par quasiment tous les habitués. Les bières sont à 3,80€ la pinte fixe, pas de Happy Hour (malgré ce qu'affiche TimeToBar, les avis récents confirment qu'il n'est pas appliqué). Demande la croziflette si elle est au menu du jour, un régulier Google 5 étoiles n'en revient toujours pas.",
    "specials": {
        "cuisine": [
            "Potatoes aux herbes (offertes)",
            "Croziflette",
            "Planches à partager"
        ],
        "drinks": [
            "Bière pression (pinte 3,80€)",
            "Cocktails",
            "Vin"
        ],
        "must_eat": "Les potatoes aux herbes offertes avec chaque consommation et la croziflette quand elle est dispo.",
        "expert_catchline": "Pinte à 3,80€, potatoes gratuites et terrasse chauffée — le bar le plus généreux du boulevard Saint-Martin."
    },
    "images": {
        "hero": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXTxouQ_UGx58l2W_k5YMqiQO0h-JswWvSJnsjSYMCMjtqWmcbXzmzw_5kSGC25w86KpT6XfEiTBybvOanGW3zcYzCsoA6Rg0aW7pOgotmzv9HanAfSvcEtpMiDdmfw9YG2YOJp-EIydIQoLsN-Vj525Zj19CVgmknwkVUsliSECsgXqV0uiRM55qKJnzwyctIQso-OlPY9-W-Gpzh6tiG9EYBaXPOqKQ0prjL5XqCqOjId7CvOZQL6PMJDNaOslOV3FjXujSwK81-1lyri9EgMgL3vuQljSRnk3lB4qKbgBHqVzc8&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        "gallery": []
    },
    "source": "research_ai"
};
