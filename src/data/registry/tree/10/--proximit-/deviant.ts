import { SurgicalPlace } from '../../../../type-definition';

export const deviant: SurgicalPlace = {
    "id": "poi-054",
    "name": "Déviant",
    "slug": "deviant",
    "category": "bar",
    "subcategory": [
        "bar-a-cocktail"
    ],
    "verified": true,
    "google_rating": 4.1,
    "location": {
        "address": "39 R. des Petites Écuries",
        "arrondissement": 10,
        "lat": 48.873788,
        "lng": 2.350123,
        "nearest_metro": "À proximité",
        "metro_lines": []
    },
    "practical": {
        "reservation_policy": null,
        "accessibility": false,
        "wifi": false,
        "opening_hours_raw": "",
        "action_type": "site",
        "action_url": ""
    },
    "pricing": {
        "avg_budget": 30,
        "is_free": false,
        "pint_price": 0,
        "cocktail_price": 0,
        "coffee_price": 0,
        "dish_price": 0,
        "last_updated": "2025-01-15"
    },
    "moods": {
        "chill": 2,
        "festif": 24,
        "culturel": 2
    },
    "description": "Le bar à manger le plus punk et le plus brillant du 10ème, petit frère du restaurant Vivant. Ici, pas de chaises, pas de résa, on mange debout accoudé au comptoir en marbre qui fait le tour de la cuisine ouverte. Les chefs envoient des petites assiettes explosives (ris de veau, couteaux à la plancha) à la minute, sous vos yeux. C'est bruyant, l'énergie est folle, le vin nature coule à flots. Une expérience culinaire 'in your face' inoubliable.",
    "insider_tip": "Pas de réservation, pas de places assises. On mange debout, on parle aux voisins.",
    "specials": {
        "cuisine": [],
        "drinks": [
            "Cocktail"
        ]
    },
    "images": {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWIkzCC3mmRVBT-4d0ZQYXnGHC7MWvt_kCdHYvJs64j8mfNUX23mZjio1XutRxteqFQbyRRhWMAdBXIr9FmL92YHWUXAYLL8onUcqFH645DNX2lMO3GAl-oeCaOi0rAo-n091zg7FFEFRiD2lHmz_GpAaPrpQTqoYhbJBd-UbZKWVRZ34aliec3I3sWKs7Gs1IpNzPFaPg-CqlqAkt_YfDSpJts-WU32dsVa17bhWvJ0VRMclOs7oXudjPPKr_ja2-9rPmavIQ3YKnBim5yyd48MA26ceZihzMbEli_O3S8Rw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUyz8IrEnsabHmORZEIxrS511UmRBFaAHKBfS7n2RTGbuTym0ERi3o2p7ckaEXJEFs_8lLWqM5fLrLicN_w_Rqgt8RFTJZ_skRPYuSxN1Pf1EXKcSC6T6rarU1y8Suxx7o45Gn96Wv_mZwxE35piaKlqMV35RKh22XZDO0OvjtUgYJrvL6Pj7vnothM2TniwIBaHQyCcBsIqwzPvM9c-N8LgUyBE4Me8dPHKzuh2P3ljUP8NjfFuy2ygqrUakM9tH5x9WH9rNDj4LVr_sUvQ9oftnL5L5n5rLDbLuzL9apDRg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXBcRB-0ePXOldNV0FO32LH8gnFxFO-K-xMDRYamc-u-rhebOiK05br-BbAWChSU8in9wKCtbE1N_jFcSkL5QbsIE4hkQI-rs09yjjKLfianft554nVU8UgH2Nd7Mj1XB8dvRaUywjkMbypSCQlPwBiQD83QawRtgqd_0HMMZ3AOuEEuwPIoX_O9ToDcUs7WtJQazpH3pV1-taxw--OkWHIlnYfcUO6ZW5J_5C1x5eW-jUus2QNsmSLOJG-qreGluGgdeh9QLwZ_gfFR9YHOSuqWz426pRI6angkO4jH60qnw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    "source": "to_be_verified"
};
